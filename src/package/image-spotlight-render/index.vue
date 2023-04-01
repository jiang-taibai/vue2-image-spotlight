<template>
  <div ref="canvas-box" id="main">
    <canvas ref="canvas-pic" id="canvas-pic" width="500" height="400"/>
    <canvas ref="canvas-masking" id="canvas-masking" width="500" height="400"/>
    <div ref="description-box"
         class="description-box-down">
      <div style="font-size: large; font-weight: bolder; margin-bottom: 8px">
        {{ (allAreaInfos.length > 0 && selectingIndex >= 0) ? allAreaInfos[selectingIndex].name : '' }}
      </div>
      <div style="text-indent: 2em">{{
          selectingIndex >= 0 ?
              ((allAreaInfos.length>0 && allAreaInfos[selectingIndex].description.trim().length > 0)
                  ? allAreaInfos[selectingIndex].description : "暂无注释。")
              : "暂无注释。"
        }}
      </div>
    </div>
  </div>
</template>

<script>
import {nextTick} from "vue";
import Utils from "../../assets/js/utils";
import RendererConfiguration from "../../assets/js/rendererConfiguration"

export default {
  name: "ImageSpotlightRenderer",
  props: {
    // 必要参数，否则无法渲染
    imgUrl: {
      type: String,
      required: true,
    },
    // 区域默认为空
    allAreaInfos: {
      type: Array,
      default: () => [],
    },
    allPoints: {
      type: Array,
      default: () => [],
    },

    canvasWidth: {
      type: Number,
      default: 500,
    },
    canvasHeight: {
      type: Number,
      default: 400,
    },
    // 遮罩层颜色
    maskBackground: {
      type: String,
      default: "rgba(0,0,0,0.5)"
    },
    // 动画时间
    animationTime: {
      type: Number,
      default: 25,
    },
    showDescriptionBox: {
      type: Boolean,
      default: true,
    },
    descriptionBoxStyle: {
      type: Object,
      default: () => {
        return {
          background: "#EBEBE3",
          color: "#59594F",
        }
      }
    },
  },
  data() {
    return {
      finalConfiguration: null,
      img: null,
      canvas: null,
      context: null,

      // 图像缩放与偏移
      scale: 1.0,
      offsetX: 0.0,
      offsetY: 0.0,

      // 是否选中到某一个分区
      selecting: false,
      // 上一次选中的分区
      selectingIndex: 0,
      // 光标的位置（即触发刷新蒙版时的坐标）
      cursorPosition: {x: 0, y: 0},
      // 动画定时器
      timer: null,

      // 展示框
      descriptionBox: null,
    }
  },
  methods: {
    // 重置图像到自适应大小
    selfAdaptionImage() {
      // 图形的宽高比
      let aspectRatio = 1.0 * this.img.width / this.img.height;
      // 如果宽高比大于500/400，说明宽要大，那么使得宽缩放到500px，高度自适应（样例是500*400）
      if (aspectRatio > this.finalConfiguration.canvasWidth / this.finalConfiguration.canvasHeight) {
        let newWidth = this.finalConfiguration.canvasWidth
        let newHeight = newWidth / aspectRatio
        this.scale = this.finalConfiguration.canvasWidth / this.img.width
        // this.offsetX = 0
        // this.offsetY = (this.finalConfiguration.canvasHeight - newHeight) / 2
        this.offsetX = 0
        this.offsetY = 0
      } else {
        let newHeight = this.finalConfiguration.canvasHeight
        let newWidth = newHeight * aspectRatio
        this.scale = this.finalConfiguration.canvasHeight / this.img.height
        // this.offsetX = (this.finalConfiguration.canvasWidth - newWidth) / 2
        // this.offsetY = 0
        this.offsetX = 0
        this.offsetY = 0
      }
    },

    // 初始化画布
    init() {
      this.initParameter()
      // 初始化canvas和context对象
      this.canvasPic = this.$refs["canvas-pic"]
      this.canvasMasking = this.$refs["canvas-masking"]
      this.descriptionBox = this.$refs["description-box"]
      this.contextPic = this.canvasPic.getContext("2d")
      this.contextMasking = this.canvasMasking.getContext("2d")
      // 获取图像
      this.img = new Image();
      this.img.src = this.imgUrl;

      let that = this
      // 绑定canvas事件
      // 当鼠标移动到画布上
      this.canvasMasking.addEventListener("mousemove", e => {
        let x = e.offsetX
        let y = e.offsetY
        that.cursorPosition = {x, y}
        let selecting_local = false
        let selectingIndex_local = -1
        for (let i = 0; i < that.allPoints.length; i++) {
          // 如果当前坐标在所画的区域内的话
          if (Utils.isPointInPolygon({x, y}, that.allPoints[i], that.scale, that.offsetX, that.offsetY)) {
            selecting_local = true
            selectingIndex_local = i
            break;
          }
        }
        // 判断是否需要刷新
        if (!that.selecting && selecting_local) {
          // 如果之前并非选中状态，且此时选中了，那么就聚焦，并且重新刷新canvas
          that.selecting = true
          that.selectingIndex = Math.max(0, selectingIndex_local)
          that.cursorPosition = {x, y}
          that.refreshCanvas()
        } else if (that.selecting && selecting_local) {
          // 如果之前是选中状态，此时也选中了，分情况讨论
          if (that.selectingIndex === selectingIndex_local) {
            // 如果是同一个，那么就无需重新渲染
          } else {
            // 不是同一个，需要设置此时选中的index，并且重新刷新canvas
            that.selectingIndex = Math.max(0, selectingIndex_local)
            that.cursorPosition = {x, y}
            that.refreshCanvas()
          }
        } else if (that.selecting && !selecting_local) {
          // 如果之前是选中状态，但是现在未选中，则清除选中状态，并且重新刷新canvas
          that.selecting = false
          that.cursorPosition = {x, y}
          that.refreshCanvas()
        } else if (!that.selecting && !selecting_local) {
          // 如果之前未选中，现在还未选中，则无需操作
        }
      })
      // 当图像加载好后，渲染到画布上
      this.img.onload = () => {
        that.selfAdaptionImage()
        that.applyParameter()
        // 计算图像的新宽度和高度
        let newWidth = this.img.width * this.scale;
        let newHeight = this.img.height * this.scale;
        that.contextPic.drawImage(that.img,
            that.offsetX, that.offsetY,
            newWidth, newHeight)
        nextTick(() => {
          let descriptionBox = that.$refs["description-box"]
          // 若宽大于高，则将描述信息放到图片的下方
          descriptionBox.style.top = (this.offsetY + this.img.height * this.scale) + "px"
          descriptionBox.style.left = "0px"
        })
      }
    },
    // 参数初始化
    initParameter() {
      this.finalConfiguration = {
        canvasWidth: this.canvasWidth,
        canvasHeight: this.canvasHeight,
        maskBackground: this.maskBackground,
        animationTime: this.animationTime,
        showDescriptionBox: this.showDescriptionBox,
        descriptionBoxStyle: this.descriptionBoxStyle
      }
      // 最后用默认配置补全
      Utils.mergeObjects(this.finalConfiguration, RendererConfiguration.DefaultConfiguration)
    },
    // 将参数作用于HTML
    applyParameter() {
      let width = this.img.width * this.scale
      let height = this.img.height * this.scale
      // 设置drawing-area的宽高
      this.$refs["canvas-pic"].width = width
      this.$refs["canvas-pic"].height = height
      this.$refs["canvas-masking"].width = width
      this.$refs["canvas-masking"].height = height
      // 设置main box的大小
      this.$refs["canvas-box"].style.width = width + "px"
      this.$refs["canvas-box"].style.height = height + "px"
      // 设置底部注释框的大小
      this.$refs["description-box"].style.width = (this.img.width * this.scale - 32) + "px"
      this.$refs["description-box"].style.minHeight = "10px"
      this.$refs["description-box"].style.background = this.finalConfiguration.descriptionBoxStyle.background
      this.$refs["description-box"].style.color = this.finalConfiguration.descriptionBoxStyle.color
    },
    /**
     * 聚焦区域：鼠标移动到该区域后，将该区域外面的区域用半透明蒙版遮盖
     * @param points 需要聚焦的区域
     * @param sizeRatio 按光标当前位置，画 总宽*sizeRatio 的圆（蒙版圆）
     */
    focusArea(points, sizeRatio) {
      const maskCanvas = document.createElement('canvas');
      const maskCtx = maskCanvas.getContext('2d');
      maskCanvas.width = this.canvasMasking.width;
      maskCanvas.height = this.canvasMasking.height;

      // 设置蒙版颜色和透明度
      maskCtx.fillStyle = this.finalConfiguration.maskBackground;

      // 在蒙版画布上填充整个画布
      maskCtx.fillRect(0, 0, this.img.width * this.scale, this.img.height * this.scale);

      maskCtx.fillStyle = 'rgba(0, 0, 0, 1)';
      // 在蒙版画布上用globalCompositeOperation属性剪去多边形内部的部分
      maskCtx.globalCompositeOperation = 'destination-out';
      maskCtx.beginPath();
      maskCtx.moveTo(points[0].x * this.scale, points[0].y * this.scale);
      for (let i = 1; i < points.length; i++) {
        maskCtx.lineTo(points[i].x * this.scale, points[i].y * this.scale);
      }
      maskCtx.closePath();
      maskCtx.fill();

      maskCtx.beginPath();
      maskCtx.arc(this.cursorPosition.x - this.offsetX, this.cursorPosition.y - this.offsetY,
          Math.max(this.img.width, this.img.height) * this.scale * sizeRatio, 0, Math.PI * 2);
      maskCtx.fill()

      // 将蒙版应用到主画布上
      this.contextMasking.drawImage(maskCanvas, this.offsetX, this.offsetY);
    },
    /**
     * 将图像自适应化地画如到canvas中
     */
    refreshCanvas() {
      this.contextMasking.clearRect(0, 0, this.canvasMasking.width, this.canvasMasking.height);
      if (this.timer) {
        clearInterval(this.timer);
      }
      // 判断是否需要设置遮罩层
      if (this.selecting) {
        let that = this
        // 定义变化步骤数和变化速度
        let steps = Math.floor(this.finalConfiguration.animationTime);
        let interval = 0;
        let currentStep = 0;
        that.showDescription()
        this.timer = setInterval(function () {
          // 计算当前的变化程度，该值可作为圆形半径大小
          let sizeRatio = Math.max(0, 1.0 - currentStep / steps);

          that.contextMasking.clearRect(0, 0, that.canvasMasking.width, that.canvasMasking.height);
          that.focusArea(that.allPoints[that.selectingIndex], sizeRatio)

          // 增加变化步骤数
          currentStep++;
          // 如果达到目标步骤数，清除定时器
          if (currentStep > steps) {
            clearInterval(that.timer);
          }
        }, interval);
      } else {
        let canvasHeight = this.offsetY + this.img.height * this.scale;
        this.$refs["canvas-box"].style.height = canvasHeight + "px"
      }
      // 向上传递选中或未选中事件
      if (this.selecting) {
        this.$emit("selecting", {
          selectingIndex: this.selectingIndex,
          points: this.allPoints[this.selectingIndex],
          areaInfo: this.allAreaInfos[this.selectingIndex]
        })
      } else {
        this.$emit("unselecting", {})
      }
    },
    // 展示描述信息
    showDescription() {
      // console.log(this.finalConfiguration.showDescriptionBox)
      if (this.finalConfiguration.showDescriptionBox) {
        let that = this
        nextTick(() => {
          let descriptionBox = that.$refs["description-box"]
          // 若宽大于高，则将描述信息放到图片的下方
          descriptionBox.style.top = (this.offsetY + this.img.height * this.scale) + "px"
          descriptionBox.style.left = "0px"
          // 4px的安全距离，注释框的上下都是4px
          const SafeDistance = 4;
          let canvasHeight = that.offsetY + that.img.height * that.scale + descriptionBox.offsetHeight + SafeDistance * 2;
          that.$refs["canvas-box"].style.height = canvasHeight + "px"
        })
      }
    },
  },
  mounted() {
    this.init()
  },
  computed: {}
}
</script>

<style scoped>
* {
  font-family: 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

#main {
  position: relative;
  transition: all .5s ease-out;
  overflow: hidden;
}

#canvas-pic, #canvas-masking {
  position: absolute;
  top: 0;
  left: 0;
}

#canvas-masking {
  transition: all 5s;
}

.description-box-down {
  margin-top: 4px;
  background: #EBEBE3;
  border-radius: 8px;
  padding: 16px;
  position: absolute;
  margin-bottom: 4px;
}
</style>
