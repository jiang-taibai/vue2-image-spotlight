<script>
import {nextTick} from "vue";
import Utils from "../../assets/js/utils.js";
import ImageSpotlightButton from "../subcomponent/image-spotlight-button.vue";
import Configuration from "../../assets/js/editorConfiguration";

export default {
  name: "ImageSpotlightEditor",
  components: {
    ImageSpotlightButton
  },
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    // 允许传入预设参数
    allPoints: {
      type: Array,
      default: () => []
    },
    allAreaInfos: {
      type: Array,
      default: () => []
    },
    // 画布宽度
    canvasWidth: {
      type: Number,
      default: 500,
    },
    // 右侧编辑区宽度
    editingWidth: {
      type: Number,
      default: 200,
    },
    // 总高度，两侧高度一致
    height: {
      type: Number,
      default: 400,
    },
    // 被选中的区域样式
    selectingAreaStyle: {
      type: Object,
      default: () => {
        return {
          lineColor: "#FF0000",
          lineWidth: 2,
          pointColor: "#FFFF00",
          pointRadius: 2,
        }
      }
    },
    // 正在画的区域样式
    drawingAreaStyle: {
      type: Object,
      default: () => {
        return {
          lineColor: "#0000FF",
          lineWidth: 2,
          pointColor: "#0000FF",
          pointRadius: 2,
        }
      }
    },
    // 其他已经画的区域样式
    otherAreaStyle: {
      type: Object,
      default: () => {
        return {
          lineColor: "#000000",
          lineWidth: 1,
          pointColor: "#000000",
          pointRadius: 2,
        }
      }
    },
    // 用户填写的表单数据校验
    rule: {
      type: Object,
      default: () => {
        return {
          name: {
            required: true,
            pattern: '^[\\s\\S]*.*[^\\s][\\s\\S]*$',  // 不为空
            info: "名字不能为空"
          },
          description: {
            required: false,
            pattern: "^[\\s\\S]*$",     // 填啥都行
            info: ""
          },
        }
      }
    },
    // 背景填充图片，最好是平铺图
    backgroundImage: {
      type: String,
      default: () => {
        return `url(${Utils.getImage('transparent-background.png')})`
      }
    },
    // 右侧编辑区背景色
    editingAreaBackground: {
      type: String,
      default: () => {
        return "#E8E8E8"
      }
    },
    // 选区列表背景颜色
    areaListBackground: {
      type: String,
      default: () => {
        return "#FFFFFF"
      }
    },
    // 选区列表中每个列元的背景颜色
    areaListItemBackground: {
      type: String,
      default: () => {
        return "#E8E8E8"
      }
    },
    // 选区列表中每个列元，被hover后的背景颜色
    areaListItemBackgroundAfterHover: {
      type: String,
      default: () => {
        return "#BDBDBD"
      }
    },
    // 按钮名称
    buttonNames: {
      type: Object,
      default: () => {
        return {
          // 默认态时的按钮
          accomplish: "完成",
          newArea: "新的",
          resetPosition: "置位",
          // 新建选区时的按钮
          addArea: "确认",
          cancelArea: "取消",
          rollBack: "撤回",
          // 编辑选区时的按钮
          confirmChange: "确认",
          cancelChange: "取消",
          deleteArea: "删除",
        }
      }
    },
  },
  data() {
    return {
      // 配置
      finalConfiguration: Configuration.DefaultConfiguration,
      // 当前画布
      canvas: null,
      // 当前图形，如果画完就会加入到contexts
      context: null,
      // 当前图形的点
      points: [],
      // 当前选区信息
      areaInfo: {
        name: '',           // 选区名称
        description: '',    // 选区描述
      },
      // 当前选区信息是否错误
      areaInfoError: {
        name: false,
        description: false,
      },
      // 当前待编辑的选区
      areaIndex: 0,

      // 是否正在画图形
      drawing: 0,
      // 是否正在编辑选区
      editing: 0,
      // 是否选中某个选区？
      selecting: false,
      // 是否按下鼠标左键（此时将图片跟随鼠标移动）
      mouseDown: false,

      // 所有图形和信息
      img: null,    // 图像
      // allPoints: null,
      // allAreaInfos: null,

      // 图像的缩放比例和坐标偏移量
      scale: 1.0,
      offsetX: 0.0,
      offsetY: 0.0,
      // 上次按下鼠标时的坐标
      preDownX: 0.0,
      preDownY: 0.0,
    }
  },
  methods: {
    // 初始化
    init() {
      this.initParameter()
      this.applyParameter()
      this.canvas = this.$refs.canvas;
      // 设置canvas大小
      this.canvas.width = this.finalConfiguration.canvasWidth
      this.canvas.height = this.finalConfiguration.height

      this.context = this.canvas.getContext("2d");
      let that = this
      // 加载图像
      this.img = new Image();
      this.img.src = this.imgUrl;

      // 鼠标点击事件处理程序
      this.canvas.addEventListener("mousedown", function (e) {
        if (!that.drawing) return;
        // 获取鼠标点击的位置
        let x = (e.offsetX - that.offsetX) / that.scale;
        let y = (e.offsetY - that.offsetY) / that.scale;
        // 超出区域无法绘制
        if (x < 0 || y < 0 || x > that.img.width || y > that.img.height) return;
        // 添加点到数组中
        that.points.push({x: x, y: y});
        // 清空画布并重新绘制所有点和线段
        that.refreshCanvas();
      });
      // 鼠标滚轮事件处理程序
      this.canvas.addEventListener("wheel", function (e) {
        // 阻止默认滚动行为
        e.preventDefault();

        // 获取鼠标滚动的距离和方向
        let delta = e.deltaY > 0 ? -0.1 : 0.1;

        // 获取鼠标当前位置
        let x = e.offsetX;
        let y = e.offsetY;

        // 计算新的缩放比例和坐标偏移量
        let newScale = e.deltaY > 0 ? (that.scale * 0.9) : (that.scale * 1.1);
        let deltaX = (x - that.offsetX) * delta;
        let deltaY = (y - that.offsetY) * delta;

        let newX = that.offsetX - deltaX;
        let newY = that.offsetY - deltaY;

        // 更新缩放比例和坐标偏移量
        that.scale = newScale;
        that.offsetX = newX;
        that.offsetY = newY;

        // 绘制图像
        nextTick(() => {
          that.refreshCanvas()
        })
      });
      // 鼠标按下事件处理程序
      this.canvas.addEventListener("mousedown", function (e) {
        if (e.button !== 0) {
          return;
        }
        that.mouseDown = true;
        that.preDownX = e.offsetX;
        that.preDownY = e.offsetY;
        // that.canvas.style.cursor = "grabbing";
      });
      // 鼠标松开事件处理程序
      this.canvas.addEventListener("mouseup", function (e) {
        if (e.button !== 0) {
          return;
        }
        that.mouseDown = false;
        // that.canvas.style.cursor = "grab";
      });
      // 鼠标移动事件处理程序
      this.canvas.addEventListener("mousemove", function (e) {
        if (that.mouseDown) {
          // 计算偏移值
          if (!that.drawing ||
              Math.abs(that.preDownX - e.offsetX) >= 8 ||
              Math.abs(that.preDownY - e.offsetY) >= 8
          ) {
            that.offsetX += e.movementX;
            that.offsetY += e.movementY;
          }
          // 将图像绘制到画布上
          that.refreshCanvas()
        }
      });
      // 体验优化：鼠标移开画布时取消移动状态
      this.canvas.addEventListener("mouseleave", function (e) {
        if (e.button !== 0) {
          return;
        }
        that.mouseDown = false;
      })

      // 绘制原始图像
      this.img.onload = function () {
        that.initImage()
        nextTick(() => {
          that.refreshCanvas()
        })
      };

    },
    // 参数初始化
    initParameter() {
      let defaultConfiguration = Configuration.DefaultConfiguration
      this.finalConfiguration = {
        canvasWidth: this.canvasWidth ? this.canvasWidth : this.defaultConfiguration.canvasWidth,
        editingWidth: this.editingWidth ? this.editingWidth : this.defaultConfiguration.editingWidth,      // 右侧编辑区宽度
        height: this.height ? this.height : this.defaultConfiguration.height,            // 总高度，两侧高度一致
        // 被选中的区域样式
        selectingAreaStyle: {
          lineColor: Utils.accessObjectSafely(this.selectingAreaStyle, ["lineColor"]) ?
              Utils.accessObjectSafely(this.selectingAreaStyle, ["lineColor"]) : defaultConfiguration.selectingAreaStyle.lineColor,
          lineWidth: Utils.accessObjectSafely(this.selectingAreaStyle, ["lineWidth"]) ?
              Utils.accessObjectSafely(this.selectingAreaStyle, ["lineWidth"]) : defaultConfiguration.selectingAreaStyle.lineWidth,
          pointColor: Utils.accessObjectSafely(this.selectingAreaStyle, ["pointColor"]) ?
              Utils.accessObjectSafely(this.selectingAreaStyle, ["pointColor"]) : defaultConfiguration.selectingAreaStyle.pointColor,
          pointRadius: Utils.accessObjectSafely(this.selectingAreaStyle, ["pointRadius"]) ?
              Utils.accessObjectSafely(this.selectingAreaStyle, ["pointRadius"]) : defaultConfiguration.selectingAreaStyle.pointRadius,
        },
        // 正在画的区域样式
        drawingAreaStyle: {
          lineColor: Utils.accessObjectSafely(this.drawingAreaStyle, ["lineColor"]) ?
              Utils.accessObjectSafely(this.drawingAreaStyle, ["lineColor"]) : defaultConfiguration.selectingAreaStyle.lineColor,
          lineWidth: Utils.accessObjectSafely(this.drawingAreaStyle, ["lineWidth"]) ?
              Utils.accessObjectSafely(this.drawingAreaStyle, ["lineWidth"]) : defaultConfiguration.selectingAreaStyle.lineWidth,
          pointColor: Utils.accessObjectSafely(this.drawingAreaStyle, ["pointColor"]) ?
              Utils.accessObjectSafely(this.drawingAreaStyle, ["pointColor"]) : defaultConfiguration.selectingAreaStyle.pointColor,
          pointRadius: Utils.accessObjectSafely(this.drawingAreaStyle, ["pointRadius"]) ?
              Utils.accessObjectSafely(this.drawingAreaStyle, ["pointRadius"]) : defaultConfiguration.selectingAreaStyle.pointRadius,
        },
        // 其他已经画的区域样式
        otherAreaStyle: {
          lineColor: Utils.accessObjectSafely(this.otherAreaStyle, ["lineColor"]) ?
              Utils.accessObjectSafely(this.otherAreaStyle, ["lineColor"]) : defaultConfiguration.selectingAreaStyle.lineColor,
          lineWidth: Utils.accessObjectSafely(this.otherAreaStyle, ["lineWidth"]) ?
              Utils.accessObjectSafely(this.otherAreaStyle, ["lineWidth"]) : defaultConfiguration.selectingAreaStyle.lineWidth,
          pointColor: Utils.accessObjectSafely(this.otherAreaStyle, ["pointColor"]) ?
              Utils.accessObjectSafely(this.otherAreaStyle, ["pointColor"]) : defaultConfiguration.selectingAreaStyle.pointColor,
          pointRadius: Utils.accessObjectSafely(this.otherAreaStyle, ["pointRadius"]) ?
              Utils.accessObjectSafely(this.otherAreaStyle, ["pointRadius"]) : defaultConfiguration.selectingAreaStyle.pointRadius,
        },
        // 用户填写的表单数据校验
        rule: {
          name: {
            required: Utils.accessObjectSafely(this.rule, ["name", "required"]) ?
                Utils.accessObjectSafely(this.rule, ["name", "required"]) : defaultConfiguration.rule.name.required,
            pattern: Utils.accessObjectSafely(this.rule, ["name", "pattern"]) ?
                Utils.accessObjectSafely(this.rule, ["name", "pattern"]) : defaultConfiguration.rule.name.pattern,
            info: Utils.accessObjectSafely(this.rule, ["name", "info"]) ?
                Utils.accessObjectSafely(this.rule, ["name", "info"]) : defaultConfiguration.rule.name.info,
          },
          description: {
            required: Utils.accessObjectSafely(this.rule, ["description", "required"]) ?
                Utils.accessObjectSafely(this.rule, ["description", "required"]) : defaultConfiguration.rule.description.required,
            pattern: Utils.accessObjectSafely(this.rule, ["description", "pattern"]) ?
                Utils.accessObjectSafely(this.rule, ["description", "pattern"]) : defaultConfiguration.rule.description.pattern,
            info: Utils.accessObjectSafely(this.rule, ["description", "info"]) ?
                Utils.accessObjectSafely(this.rule, ["description", "info"]) : defaultConfiguration.rule.description.info,
          },
        },
        // 背景填充图片，最好是平铺图
        backgroundImage: this.backgroundImage ? this.backgroundImage : defaultConfiguration.backgroundImage,
        // 右侧编辑区背景色
        editingAreaBackground: this.editingAreaBackground ? this.editingAreaBackground : defaultConfiguration.editingAreaBackground,
        // 选区列表背景颜色
        areaListBackground: this.areaListBackground ? this.areaListBackground : defaultConfiguration.areaListBackground,
        // 选区列表中每个列元的背景颜色
        areaListItemBackground: this.areaListItemBackground ? this.areaListItemBackground : defaultConfiguration.areaListItemBackground,
        // 选区列表中每个列元，被hover后的背景颜色
        areaListItemBackgroundAfterHover: this.areaListItemBackgroundAfterHover ? this.areaListItemBackgroundAfterHover : defaultConfiguration.areaListItemBackgroundAfterHover,
        // 按钮名称
        buttonNames: {
          // 默认态时的按钮
          accomplish: this.buttonNames && this.buttonNames.accomplish ? this.buttonNames.accomplish : defaultConfiguration.buttonNames.accomplish,
          newArea: this.buttonNames && this.buttonNames.newArea ? this.buttonNames.newArea : defaultConfiguration.buttonNames.newArea,
          resetPosition: this.buttonNames && this.buttonNames.resetPosition ? this.buttonNames.resetPosition : defaultConfiguration.buttonNames.resetPosition,
          // 新建选区时的按钮
          addArea: this.buttonNames && this.buttonNames.addArea ? this.buttonNames.addArea : defaultConfiguration.buttonNames.addArea,
          cancelArea: this.buttonNames && this.buttonNames.cancelArea ? this.buttonNames.cancelArea : defaultConfiguration.buttonNames.cancelArea,
          rollBack: this.buttonNames && this.buttonNames.rollBack ? this.buttonNames.rollBack : defaultConfiguration.buttonNames.rollBack,
          // 编辑选区时的按钮
          confirmChange: this.buttonNames && this.buttonNames.confirmChange ? this.buttonNames.confirmChange : defaultConfiguration.buttonNames.confirmChange,
          cancelChange: this.buttonNames && this.buttonNames.cancelChange ? this.buttonNames.cancelChange : defaultConfiguration.buttonNames.cancelChange,
          deleteArea: this.buttonNames && this.buttonNames.deleteArea ? this.buttonNames.deleteArea : defaultConfiguration.buttonNames.deleteArea,
        }
      }
    },
    // 将参数作用于HTML,
    applyParameter() {
      // 设置drawing-area的宽高
      this.$refs["drawing-area"].style.height = this.finalConfiguration.height + "px"
      this.$refs["drawing-area"].style.width = this.finalConfiguration.canvasWidth + "px"
      // 设置画画区背景图
      this.$refs["drawing-area"].style.backgroundImage = this.finalConfiguration.backgroundImage
      // 设置编辑区宽高
      this.$refs["editing-area"].style.height = this.finalConfiguration.height + "px"
      this.$refs["editing-area"].style.width = this.finalConfiguration.editingWidth + "px"
      // 由于调整了宽高，内部元素宽高需要自适应
      // 列表宽是总宽的0.92倍
      // this.$refs["outline-list"].style.width = (this.finalConfiguration.editingWidth - 16 - 8 - 4) + "px"
      // this.$refs["outline-list"].style.height = (this.finalConfiguration.height - 56 - 8) + "px"
      // this.$refs["scroll"].style.width = (this.finalConfiguration.editingWidth - 16 - 8 - 4) + "px"
      // this.$refs["scroll"].style.height = (this.finalConfiguration.height - 56 - 8 - 4) + "px"

      // this.$refs["editing-input"].style.width = (this.finalConfiguration.editingWidth - 16 - 8 - 4) + "px"
      // this.$refs["editing-input"].style.height = (this.finalConfiguration.height - 56 - 8 - 4) + "px"

      // 设置编辑区样式
      this.$refs["editing-area"].style.background = this.finalConfiguration.editingAreaBackground
    },

    // 初始化图片：自适应大小、缩放
    initImage() {
      this.selfAdaptionImage()
    },
    // 重置图像到自适应大小
    selfAdaptionImage() {
      // 图形的宽高比
      let aspectRatio = 1.0 * this.img.width / this.img.height;
      // 如果宽高比大于500/400，说明宽要大，那么使得宽缩放到500px，高度自适应
      if (aspectRatio > this.finalConfiguration.canvasWidth / this.finalConfiguration.height) {
        let newWidth = this.finalConfiguration.canvasWidth
        let newHeight = newWidth / aspectRatio
        this.scale = this.finalConfiguration.canvasWidth / this.img.width
        this.offsetX = 0
        this.offsetY = (this.finalConfiguration.height - newHeight) / 2
      } else {
        let newHeight = this.finalConfiguration.height
        let newWidth = newHeight * aspectRatio
        this.scale = this.finalConfiguration.height / this.img.height
        this.offsetX = (this.finalConfiguration.canvasWidth - newWidth) / 2
        this.offsetY = 0
      }
    },
    // 刷新画布
    refreshCanvas() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawImage()
      this.drawAllOutlines()
      this.drawAllPoints()
    },
    // 绘制图像
    drawImage() {
      // 计算图像的新宽度和高度
      let newWidth = this.img.width * this.scale;
      let newHeight = this.img.height * this.scale;

      // 绘制图像
      this.context.drawImage(this.img, this.offsetX, this.offsetY, newWidth, newHeight);
    },
    // 绘制所有点的函数
    drawAllPoints() {
      // 画出已存在的点集
      for (let i = 0; i < this.allPoints.length; i++) {
        this.drawPoints(this.allPoints[i], this.selecting && this.areaIndex === i, false)
      }
      // 画当前正在编辑的形状
      this.drawPoints(this.points, false, true)
    },
    drawPoints(points, selected, drawing) {
      let radius = 2;
      if (selected) {
        this.context.fillStyle = this.finalConfiguration.selectingAreaStyle.pointColor
        radius = this.finalConfiguration.selectingAreaStyle.pointRadius
      } else if (drawing) {
        this.context.fillStyle = this.finalConfiguration.drawingAreaStyle.pointColor
        radius = this.finalConfiguration.drawingAreaStyle.pointRadius
      } else {
        this.context.fillStyle = this.finalConfiguration.otherAreaStyle.pointColor
        radius = this.finalConfiguration.otherAreaStyle.pointRadius
      }

      for (const point of points) {
        this.context.beginPath();
        this.context.arc(point.x * this.scale + this.offsetX,
            point.y * this.scale + this.offsetY, radius, 0, Math.PI * 2);
        this.context.fill();
      }
    },
    // 画出所有的轮廓
    drawAllOutlines() {
      // 先画已保存的轮廓
      for (let i = 0; i < this.allPoints.length; i++) {
        this.drawOutline(this.allPoints[i], this.selecting && this.areaIndex === i, false)
      }
      this.drawOutline(this.points, false, true)
    },
    // 画出某个points数组组成的轮廓
    drawOutline(points, selected, drawing) {
      if (selected) {
        this.context.strokeStyle = this.finalConfiguration.selectingAreaStyle.lineColor
        this.context.lineWidth = this.finalConfiguration.selectingAreaStyle.lineWidth
      } else if (drawing) {
        this.context.strokeStyle = this.finalConfiguration.drawingAreaStyle.lineColor
        this.context.lineWidth = this.finalConfiguration.drawingAreaStyle.lineWidth
      } else {
        this.context.strokeStyle = this.finalConfiguration.otherAreaStyle.lineColor
        this.context.lineWidth = this.finalConfiguration.otherAreaStyle.lineWidth
      }
      if (points.length > 1) {
        this.context.beginPath();
        this.context.moveTo(points[0].x * this.scale + this.offsetX, points[0].y * this.scale + this.offsetY);
        for (let i = 1; i < points.length; i++) {
          this.context.lineTo(points[i].x * this.scale + this.offsetX, points[i].y * this.scale + this.offsetY);
        }
        this.context.closePath();
        this.context.stroke();
      }
    },


    // 按钮事件
    // 完成编辑
    accomplish() {
      this.$emit("accomplish", {
        imgUrl: this.imgUrl,
        allAreaInfos: this.allAreaInfos,
        allPoints: this.allPoints,
      })
    },
    // 新建一个选区
    newArea() {
      // 设置正在画画
      this.drawing = true
      this.areaInfo = {
        name: '',
        description: '',
      }
      this.points = []
    },
    // 添加该选区
    addArea() {
      if (this.points.length <= 2) {
        alert("请确保选区至少3个点")
        return;
      } else if (!this.verifyForm()) {
        return;
      }
      // this.canvas.style.cursor = "grab"
      this.drawing = false
      this.allPoints.push(this.points)
      // 将当前区域信息插入所有的区域信息数组
      this.allAreaInfos.push(this.areaInfo)
      this.areaInfo = {
        name: '',           // 选区名称
        description: '',    // 选区描述
      }
      this.points = []
      let that = this
      nextTick(() => {
        that.refreshCanvas()
      })
    },
    // 撤回刚刚标记的点
    rollBackAreaLatestPoint() {
      if (this.points && this.points.length >= 1) {
        this.points.splice(this.points.length - 1, 1)
        this.refreshCanvas()
      }
    },
    // 取消该选区
    cancelArea() {
      this.drawing = false
      this.areaInfo = {
        name: '',           // 选区名称
        description: '',    // 选区描述
      }
      this.points = []
      let that = this
      nextTick(() => {
        that.refreshCanvas()
      })
    },

    // 确认修改选区
    confirmChange() {
      // 只能修改选区的名称和描述
      if (!this.verifyForm()) {
        return;
      }
      // this.canvas.style.cursor = "grab"
      this.allAreaInfos[this.areaIndex] = this.areaInfo
      this.editing = false
      this.selecting = false
      let that = this
      nextTick(() => {
        that.refreshCanvas()
      })
    },
    // 取消修改选区
    cancelChange() {
      // this.canvas.style.cursor = "grab"
      this.editing = false
      this.selecting = false
      let that = this
      nextTick(() => {
        that.refreshCanvas()
      })
    },
    // 删除选区
    deleteArea() {
      // this.canvas.style.cursor = "grab"
      this.allAreaInfos.splice(this.areaIndex, 1)
      this.allPoints.splice(this.areaIndex, 1)
      this.editing = false
      this.selecting = false
      let that = this
      nextTick(() => {
        that.refreshCanvas()
      })
    },

    // 恢复图片位置
    recoverImagePosition() {
      this.selfAdaptionImage()
      this.refreshCanvas()
    },

    // 编辑选区
    // 悬浮到某一个选区列表中item上时，就高亮该选区
    highlightArea(index) {
      this.$refs["areaListItem-" + index][0].style.background = this.finalConfiguration.areaListItemBackgroundAfterHover
      this.selecting = true
      this.areaIndex = index
      this.refreshCanvas()
    },
    // 当离开时，就不高亮
    recoverArea(index) {
      this.$refs["areaListItem-" + index][0].style.background = this.finalConfiguration.areaListItemBackground
      this.selecting = false
      this.refreshCanvas()
    },
    // 在选区列表中选中某一个分区时，打开修改窗口，并显示该选区的信息
    editArea(index) {
      // this.canvas.style.cursor = "grab"
      // 编辑第index个（从0开始）的选区
      this.areaInfo = {...this.allAreaInfos[index]}
      this.editing = true
      this.selecting = true
      this.areaIndex = index
      let that = this
      nextTick(() => {
        that.refreshCanvas()
      })
    },

    // 检验表单
    verifyForm() {
      if (this.finalConfiguration.rule.name.required && this.areaInfo.name.length === 0) {
        this.areaInfoError.name = true
        return false
      }
      if (!new RegExp(this.finalConfiguration.rule.name.pattern).test(this.areaInfo.name)) {
        this.areaInfoError.name = true
        return false
      }

      if (this.finalConfiguration.rule.description.required && this.areaInfo.description.length === 0) {
        this.areaInfoError.description = true
        return false
      }
      // console.log(this.finalConfiguration.rule.description.pattern)
      if (!new RegExp(this.finalConfiguration.rule.description.pattern).test(this.areaInfo.description)) {
        this.areaInfoError.description = true
        return false
      }
      this.areaInfoError.name = false
      this.areaInfoError.description = false
      return true
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<template>
  <div class="main">
    <div ref="drawing-area" class="drawing-area">
      <canvas ref="canvas" id="canvas" height="400" width="500"/>
    </div>
    <div ref="editing-area" style="height: 400px; width: 200px; margin-left: 8px; background: #e8e8e8;">
      <!-- 按钮组 -->
      <div style="padding: 8px">
        <div v-if="!drawing && !editing">
          <image-spotlight-button type="success" @click.native="accomplish">{{
              finalConfiguration.buttonNames.accomplish
            }}
          </image-spotlight-button>
          <image-spotlight-button @click.native="newArea">{{
              finalConfiguration.buttonNames.newArea
            }}
          </image-spotlight-button>
          <image-spotlight-button @click.native="recoverImagePosition">{{
              finalConfiguration.buttonNames.resetPosition
            }}
          </image-spotlight-button>
        </div>
        <div v-else-if="drawing">
          <image-spotlight-button type="success" @click.native="addArea">{{
              finalConfiguration.buttonNames.addArea
            }}
          </image-spotlight-button>
          <image-spotlight-button type="warning" @click.native="rollBackAreaLatestPoint">
            {{ finalConfiguration.buttonNames.rollBack }}
          </image-spotlight-button>
          <image-spotlight-button @click.native="cancelArea">{{
              finalConfiguration.buttonNames.cancelArea
            }}
          </image-spotlight-button>
        </div>
        <div v-else-if="editing">
          <image-spotlight-button type="success" @click.native="confirmChange">{{
              finalConfiguration.buttonNames.confirmChange
            }}
          </image-spotlight-button>
          <image-spotlight-button type="warning" @click.native="deleteArea">{{
              finalConfiguration.buttonNames.deleteArea
            }}
          </image-spotlight-button>
          <image-spotlight-button @click.native="cancelChange">{{
              finalConfiguration.buttonNames.cancelChange
            }}
          </image-spotlight-button>
        </div>
      </div>
      <!-- 编辑区 -->
      <div style="margin: 0 8px 8px 8px; background: white;border-radius: 8px">
        <div v-if="!drawing && !editing">
          <div ref="outline-list" class="outlines-list"
               :style="{
                  background: finalConfiguration.areaListBackground,
                  width: (finalConfiguration.editingWidth - 16 - 8 - 4) +'px',
                  height: (finalConfiguration.height - 56 - 8) + 'px'
                }">
            <div ref="scroll" class="scroll"
                 :style="{
                     width: (finalConfiguration.editingWidth - 16 - 8 - 4) + 'px',
                     height: (finalConfiguration.height - 56 - 8 - 4) + 'px',
                 }">
              <div v-for="(info, index) in allAreaInfos" class="outlines-item"
                   :ref="'areaListItem-' + index"
                   :style="{
                     background: finalConfiguration.areaListItemBackground,
                     width: (finalConfiguration.editingWidth - 16 - 8 - 8 - 8) + 'px',
                   }"
                   @mouseover="highlightArea(index)"
                   @mouseleave="recoverArea(index)"
                   @click="editArea(index)">
                {{ info.name }}
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="drawing || editing"
             :style="{
                     padding:'8px',
                     width: (finalConfiguration.editingWidth - 16 - 8 - 4) + 'px',
                     height: (finalConfiguration.height - 56 - 8 - 4) + 'px',
                   }"
        >
          <div style="text-align: center; font-weight: bolder; padding-bottom: 8px">选区信息</div>
          <div style="margin-bottom: 8px">
            <span v-if="finalConfiguration.rule.name.required" style="color: red">*</span>
            选区名称
            <span v-if="areaInfoError.name" style="color: red; font-size: small">{{
                finalConfiguration.rule.name.info
              }}</span>
          </div>
          <input class="base-input input"
                 :style="{marginBottom: '8px',width: (finalConfiguration.editingWidth - 16 - 8 - 8 - 10) + 'px'}"
                 v-model="areaInfo.name"
                 placeholder="请输入选区名称"/>
          <div style="margin-bottom: 8px">
            <span v-if="finalConfiguration.rule.description.required" style="color: red">*</span>
            选区描述
            <span v-if="areaInfoError.description"
                  style="color: red; font-size: small">{{ finalConfiguration.rule.description.info }}</span>
          </div>
          <textarea class="base-input textarea" v-model="areaInfo.description"
                    :style="{width: (finalConfiguration.editingWidth - 16 - 8 - 8 - 10) + 'px'}"
                    :rows="
                      Math.floor((finalConfiguration.height - 56 - 8 - 4 - 108.8 - 8) / 20.8 - 1)
                    "
                    placeholder="请输入选区描述"/>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
* {
  font-family: 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

.main {
  height: 400px;
  display: flex;
  justify-content: flex-start;
}

.drawing-area {
  width: 500px;
  height: 400px;
}

.outlines-list {
  height: 336px;
  border-radius: 8px;
  padding: 4px 4px 4px 8px;
}

.outlines-list .scroll {
  height: 332px;
  overflow: scroll;
}

.outlines-item {
  margin: 4px 4px 0 0;
  border-radius: 8px;
  height: 32px;
  width: 160px;
  text-align: left;
  padding-left: 8px;
  line-height: 32px;
  color: #484848;
  background: #e8e8e8;
  cursor: pointer;
  transition: all .2s;
}

.outlines-item:hover {
  background: #bdbdbd;
}

.base-input {
  outline: none;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #D7D8D9;
  font-size: 16px;
}

.input {
  width: 158px;
}

.textarea {
  resize: none;
  width: 158px;
}
</style>
