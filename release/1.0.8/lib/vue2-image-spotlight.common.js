/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 40:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./SpongeBob.jpg": 300,
	"./mountain.jpg": 544,
	"./mountain_vertical.jpg": 651,
	"./transparent-background.png": 541
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 40;

/***/ }),

/***/ 300:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/SpongeBob.907a24e1.jpg";

/***/ }),

/***/ 544:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/mountain.1a1cd5c1.jpg";

/***/ }),

/***/ 651:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/mountain_vertical.7531d334.jpg";

/***/ }),

/***/ 541:
/***/ (function(module) {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/image-spotlight-render/index.vue?vue&type=template&id=2670ece9&scoped=true&
var render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{ref:"canvas-box",attrs:{"id":"main"}},[_c('canvas',{ref:"canvas-pic",attrs:{"id":"canvas-pic","width":"500","height":"400"}}),_c('canvas',{ref:"canvas-masking",attrs:{"id":"canvas-masking","width":"500","height":"400"}}),_c('div',{ref:"description-box",staticClass:"description-box-down"},[_c('div',{staticStyle:{"font-size":"large","font-weight":"bolder","margin-bottom":"8px"}},[_vm._v(" "+_vm._s((_vm.allAreaInfos.length > 0 && _vm.selectingIndex >= 0) ? _vm.allAreaInfos[_vm.selectingIndex].name : '')+" ")]),_c('div',{staticStyle:{"text-indent":"2em"}},[_vm._v(_vm._s(_vm.selectingIndex >= 0 ? ((_vm.allAreaInfos.length>0 && _vm.allAreaInfos[_vm.selectingIndex].description.trim().length > 0) ? _vm.allAreaInfos[_vm.selectingIndex].description : "暂无注释。") : "暂无注释。")+" ")])])])
}
var staticRenderFns = []


;// CONCATENATED MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: ./src/assets/js/utils.js
/**
 * 使用射线法，判断一个坐标点是否在封闭图形内部
 * 射线法的基本思想是从这个点（假设为P）向任意一个方向（假设为向右）发射一条射线，
 * 然后统计这条射线与图形的交点数量，如果为奇数，说明P在图形内部；如果为偶数，说明P在图形外部。
 * @param point 点坐标，对象结构为{x:0, y:0}
 * @param points 点坐标集，构成一个封闭图形。对象数组，每个元素为{x:0, y:0}对象
 * @param scale 缩放比例
 * @param offsetX 横坐标偏移量
 * @param offsetY 纵坐标偏移量
 * @returns {boolean} 是否在该封闭图形内部
 */
const isPointInPolygon = (point, points, scale, offsetX, offsetY) => {
    let n = points.length;
    let inside = false;
    // point.x = calRealPosition(point.x, scale, offsetX)
    // point.y = calRealPosition(point.y, scale, offsetY)
    for (let i = 0, j = n - 1; i < n; j = i++) {
        let xi = calRealPosition(points[i].x, scale, offsetX),
            yi = calRealPosition(points[i].y, scale, offsetY);
        let xj = calRealPosition(points[j].x, scale, offsetX),
            yj = calRealPosition(points[j].y, scale, offsetY);
        let intersect = ((yi > point.y) !== (yj > point.y))
            && (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}

const calRealPosition = (value, scale, offset) => {
    return value * scale + offset
}
const getImage = (name) => {
    return __webpack_require__(40)(`./${name}`)
}

/**
 * 安全地访问对象内的属性，以防出现访问object.a.b.c时，由于object.a未定义，导致访问object.a.b报错
 * @param object 对象
 * @param path 访问路径
 * @returns {any} 如果不能到达，则返回undefined
 */
const accessObjectSafely = (object, path) => {
    let i, n = path.length;
    if (!object) return object
    let data = JSON.parse(JSON.stringify(object));
    for (i = 0; typeof data === 'object' && i < n; ++i) {
        data = data[path[i]];
    }
    return data
}

/**
 * 递归合并两个对象，若object1中某字段不存在或为null或undefined，则用object2中的字段补全
 * @param object1 对象1
 * @param object2 用对象2补全
 * @returns {*} 补全后的对象
 */
const mergeObjects = (object1, object2) => {
    const mergedObject = {...object1};
    for (const key in object2) {
        if (object2.hasOwnProperty(key)) {
            if (isObject(object1[key]) && isObject(object2[key])) {
                mergedObject[key] = mergeObjects(object1[key], object2[key]);
            } else if (mergedObject[key] == null) {
                mergedObject[key] = object2[key];
            }
        }
    }
    return mergedObject;
};
const isObject = (item) => {
    return item && typeof item === 'object' && !Array.isArray(item);
};

/* harmony default export */ var utils = ({
    isPointInPolygon,
    getImage,
    accessObjectSafely,
    mergeObjects
});
;// CONCATENATED MODULE: ./src/assets/js/rendererConfiguration.js
const DefaultConfiguration = {
    canvasWidth: 500,
    canvasHeight: 400,
    maskBackground: "rgba(0,0,0,0.5)", // 遮罩层颜色
    animationTime: 25,  // 动画时间
    showDescriptionBox: true,
    descriptionBoxStyle: {
        background: "#EBEBE3",
        color: "#59594F",
    },
}

const TestConfiguration = {
    canvasWidth: 600,
    canvasHeight: 600,
    maskBackground: "rgba(0,0,0,0.5)", // 遮罩层颜色
    animationTime: 25,  // 动画时间，单位ms
    showDescriptionBox: true,
    descriptionBoxStyle: {
        background: "#EBEBE3",
        color: "#59594F",
    },
}

/* harmony default export */ var rendererConfiguration = ({
    DefaultConfiguration,
    TestConfiguration
});
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/image-spotlight-render/index.vue?vue&type=script&lang=js&





/* harmony default export */ var image_spotlight_rendervue_type_script_lang_js_ = ({
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
          if (utils.isPointInPolygon({x, y}, that.allPoints[i], that.scale, that.offsetX, that.offsetY)) {
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
        ;(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.nextTick)(() => {
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
      utils.mergeObjects(this.finalConfiguration, rendererConfiguration.DefaultConfiguration)
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
      this.$refs["description-box"].style.minWidth = this.finalConfiguration.canvasWidth + "px"
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
        ;(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.nextTick)(() => {
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
});

;// CONCATENATED MODULE: ./src/package/image-spotlight-render/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var package_image_spotlight_rendervue_type_script_lang_js_ = (image_spotlight_rendervue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/image-spotlight-render/index.vue?vue&type=style&index=0&id=2670ece9&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/package/image-spotlight-render/index.vue?vue&type=style&index=0&id=2670ece9&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/package/image-spotlight-render/index.vue



;


/* normalize component */

var component = normalizeComponent(
  package_image_spotlight_rendervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "2670ece9",
  null
  
)

/* harmony default export */ var image_spotlight_render = (component.exports);
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/image-spotlight-editor/index.vue?vue&type=template&id=47c7727d&scoped=true&
var image_spotlight_editorvue_type_template_id_47c7727d_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('div',{staticClass:"main"},[_c('div',{ref:"drawing-area",staticClass:"drawing-area"},[_c('canvas',{ref:"canvas",attrs:{"id":"canvas","height":"400","width":"500"}})]),_c('div',{ref:"editing-area",staticStyle:{"height":"400px","width":"200px","margin-left":"8px","background":"#e8e8e8"}},[_c('div',{staticStyle:{"padding":"8px"}},[(!_vm.drawing && !_vm.editing)?_c('div',[_c('image-spotlight-button',{attrs:{"type":"success"},nativeOn:{"click":function($event){return _vm.accomplish.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.finalConfiguration.buttonNames.accomplish)+" ")]),_c('image-spotlight-button',{nativeOn:{"click":function($event){return _vm.newArea.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.finalConfiguration.buttonNames.newArea)+" ")]),_c('image-spotlight-button',{nativeOn:{"click":function($event){return _vm.recoverImagePosition.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.finalConfiguration.buttonNames.resetPosition)+" ")])],1):(_vm.drawing)?_c('div',[_c('image-spotlight-button',{attrs:{"type":"success"},nativeOn:{"click":function($event){return _vm.addArea.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.finalConfiguration.buttonNames.addArea)+" ")]),_c('image-spotlight-button',{attrs:{"type":"warning"},nativeOn:{"click":function($event){return _vm.rollBackAreaLatestPoint.apply(null, arguments)}}},[_vm._v(" "+_vm._s(_vm.finalConfiguration.buttonNames.rollBack)+" ")]),_c('image-spotlight-button',{nativeOn:{"click":function($event){return _vm.cancelArea.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.finalConfiguration.buttonNames.cancelArea)+" ")])],1):(_vm.editing)?_c('div',[_c('image-spotlight-button',{attrs:{"type":"success"},nativeOn:{"click":function($event){return _vm.confirmChange.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.finalConfiguration.buttonNames.confirmChange)+" ")]),_c('image-spotlight-button',{attrs:{"type":"warning"},nativeOn:{"click":function($event){return _vm.deleteArea.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.finalConfiguration.buttonNames.deleteArea)+" ")]),_c('image-spotlight-button',{nativeOn:{"click":function($event){return _vm.cancelChange.apply(null, arguments)}}},[_vm._v(_vm._s(_vm.finalConfiguration.buttonNames.cancelChange)+" ")])],1):_vm._e()]),_c('div',{staticStyle:{"margin":"0 8px 8px 8px","background":"white","border-radius":"8px"}},[(!_vm.drawing && !_vm.editing)?_c('div',[_c('div',{ref:"outline-list",staticClass:"outlines-list",style:({
                background: _vm.finalConfiguration.areaListBackground,
                width: (_vm.finalConfiguration.editingWidth - 16 - 8 - 4) +'px',
                height: (_vm.finalConfiguration.height - 56 - 8) + 'px'
              })},[_c('div',{ref:"scroll",staticClass:"scroll",style:({
                   width: (_vm.finalConfiguration.editingWidth - 16 - 8 - 4) + 'px',
                   height: (_vm.finalConfiguration.height - 56 - 8 - 4) + 'px',
               })},_vm._l((_vm.allAreaInfos),function(info,index){return _c('div',{ref:'areaListItem-' + index,refInFor:true,staticClass:"outlines-item",style:({
                   background: _vm.finalConfiguration.areaListItemBackground,
                   width: (_vm.finalConfiguration.editingWidth - 16 - 8 - 8 - 8) + 'px',
                 }),on:{"mouseover":function($event){return _vm.highlightArea(index)},"mouseleave":function($event){return _vm.recoverArea(index)},"click":function($event){return _vm.editArea(index)}}},[_vm._v(" "+_vm._s(info.name)+" ")])}),0)])]):(_vm.drawing || _vm.editing)?_c('div',{style:({
                   padding:'8px',
                   width: (_vm.finalConfiguration.editingWidth - 16 - 8 - 4) + 'px',
                   height: (_vm.finalConfiguration.height - 56 - 8 - 4) + 'px',
                 })},[_c('div',{staticStyle:{"text-align":"center","font-weight":"bolder","padding-bottom":"8px"}},[_vm._v("选区信息")]),_c('div',{staticStyle:{"margin-bottom":"8px"}},[(_vm.finalConfiguration.rule.name.required)?_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")]):_vm._e(),_vm._v(" 选区名称 "),(_vm.areaInfoError.name)?_c('span',{staticStyle:{"color":"red","font-size":"small"}},[_vm._v(_vm._s(_vm.finalConfiguration.rule.name.info))]):_vm._e()]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.areaInfo.name),expression:"areaInfo.name"}],staticClass:"base-input input",style:({marginBottom: '8px',width: (_vm.finalConfiguration.editingWidth - 16 - 8 - 8 - 10) + 'px'}),attrs:{"placeholder":"请输入选区名称"},domProps:{"value":(_vm.areaInfo.name)},on:{"input":function($event){if($event.target.composing)return;_vm.$set(_vm.areaInfo, "name", $event.target.value)}}}),_c('div',{staticStyle:{"margin-bottom":"8px"}},[(_vm.finalConfiguration.rule.description.required)?_c('span',{staticStyle:{"color":"red"}},[_vm._v("*")]):_vm._e(),_vm._v(" 选区描述 "),(_vm.areaInfoError.description)?_c('span',{staticStyle:{"color":"red","font-size":"small"}},[_vm._v(_vm._s(_vm.finalConfiguration.rule.description.info))]):_vm._e()]),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.areaInfo.description),expression:"areaInfo.description"}],staticClass:"base-input textarea",style:({width: (_vm.finalConfiguration.editingWidth - 16 - 8 - 8 - 10) + 'px'}),attrs:{"rows":Math.floor((_vm.finalConfiguration.height - 56 - 8 - 4 - 108.8 - 8) / 20.8 - 1),"placeholder":"请输入选区描述"},domProps:{"value":(_vm.areaInfo.description)},on:{"input":function($event){if($event.target.composing)return;_vm.$set(_vm.areaInfo, "description", $event.target.value)}}})]):_vm._e()])])])
}
var image_spotlight_editorvue_type_template_id_47c7727d_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/subcomponent/image-spotlight-button.vue?vue&type=template&id=09df7450&scoped=true&
var image_spotlight_buttonvue_type_template_id_09df7450_scoped_true_render = function render(){var _vm=this,_c=_vm._self._c;return _c('button',{ref:"button",staticClass:"image-spotlight-button",attrs:{"type":"button"}},[_vm._t("default",function(){return [_c('span',[_vm._v("按钮")])]})],2)
}
var image_spotlight_buttonvue_type_template_id_09df7450_scoped_true_staticRenderFns = []


;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/subcomponent/image-spotlight-button.vue?vue&type=script&lang=js&

/* harmony default export */ var image_spotlight_buttonvue_type_script_lang_js_ = ({
  name: "ImageSpotlightButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
  components: {},
  data() {
    return {
      typeStyle: {
        default: {
          background: "#FFFFFF",
          color: "#000000",
          backgroundAfterHover: "#ECF5FF",
          colorAfterHover: "#409EFF",
        },
        success: {
          background: "#67C23A",
          color: "#FFFFFF",
          backgroundAfterHover: "#95D475",
          colorAfterHover: "#FFFFFF",
        },
        warning: {
          background: "#E6A23C",
          color: "#FFFFFF",
          backgroundAfterHover: "#EEBE77",
          colorAfterHover: "#FFFFFF",
        },
      }
    }
  },
  methods: {

  },
  mounted() {
    let type = "default"
    if (this.type in this.typeStyle) {
      type = this.type
    }
    // console.log(this.type)
    // console.log(this.typeStyle)
    // console.log(this.type in this.typeStyle)
    const button = this.$refs.button
    button.style.background = this.typeStyle[type].background
    button.style.color = this.typeStyle[type].color
    let that = this
    button.onmouseover = () => {
      button.style.background = that.typeStyle[type].backgroundAfterHover
      button.style.color = that.typeStyle[type].colorAfterHover
    };
    button.onmouseout = function () {
      button.style.background = that.typeStyle[type].background
      button.style.color = that.typeStyle[type].color
    };
  },
  computed: {}
});

;// CONCATENATED MODULE: ./src/package/subcomponent/image-spotlight-button.vue?vue&type=script&lang=js&
 /* harmony default export */ var subcomponent_image_spotlight_buttonvue_type_script_lang_js_ = (image_spotlight_buttonvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/subcomponent/image-spotlight-button.vue?vue&type=style&index=0&id=09df7450&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/package/subcomponent/image-spotlight-button.vue?vue&type=style&index=0&id=09df7450&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/package/subcomponent/image-spotlight-button.vue



;


/* normalize component */

var image_spotlight_button_component = normalizeComponent(
  subcomponent_image_spotlight_buttonvue_type_script_lang_js_,
  image_spotlight_buttonvue_type_template_id_09df7450_scoped_true_render,
  image_spotlight_buttonvue_type_template_id_09df7450_scoped_true_staticRenderFns,
  false,
  null,
  "09df7450",
  null
  
)

/* harmony default export */ var image_spotlight_button = (image_spotlight_button_component.exports);
;// CONCATENATED MODULE: ./src/assets/js/editorConfiguration.js


const editorConfiguration_DefaultConfiguration = {
    canvasWidth: 500,       // 画布宽度
    editingWidth: 200,      // 右侧编辑区宽度
    height: 400,            // 总高度，两侧高度一致
    // 被选中的区域样式
    selectingAreaStyle: {
        lineColor: "#FF0000",
        lineWidth: 2,
        pointColor: "#FFFF00",
        pointRadius: 2,
    },
    // 正在画的区域样式
    drawingAreaStyle: {
        lineColor: "#0000FF",
        lineWidth: 2,
        pointColor: "#0000FF",
        pointRadius: 2,
    },
    // 其他已经画的区域样式
    otherAreaStyle: {
        lineColor: "#000000",
        lineWidth: 1,
        pointColor: "#000000",
        pointRadius: 2,
    },
    // 用户填写的表单数据校验
    rule: {
        name: {
            required: true,
            pattern: "^\\S+$",  // 不为空
            info: "名字不能为空"
        },
        description: {
            required: false,
            pattern: "^\\S*$",     // 填啥都行
            info: ""
        },
    },
    // 背景填充图片，最好是平铺图
    backgroundImage: utils.getImage("transparent-background.png"),
    // 右侧编辑区背景色
    editingAreaBackground: "#E8E8E8",
    // 选区列表背景颜色
    areaListBackground: "#FFFFFF",
    // 选区列表中每个列元的背景颜色
    areaListItemBackground: "#E8E8E8",
    // 选区列表中每个列元，被hover后的背景颜色
    areaListItemBackgroundAfterHover: "#BDBDBD",
    // 按钮名称
    buttonNames: {
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

const CustomConfiguration = {
    canvasWidth: 1000,       // 画布宽度
    editingWidth: 400,      // 右侧编辑区宽度
    height: 800,            // 总高度，两侧高度一致
    // 被选中的区域样式
    selectingAreaStyle: {
        lineColor: "#FF0000",
        lineWidth: 2,
        pointColor: "#FFFF00",
        pointRadius: 2,
    },
    // 正在画的区域样式
    drawingAreaStyle: {
        lineColor: "#0000FF",
        lineWidth: 2,
        pointColor: "#0000FF",
        pointRadius: 2,
    },
    // 其他已经画的区域样式
    otherAreaStyle: {
        lineColor: "#000000",
        lineWidth: 1,
        pointColor: "#000000",
        pointRadius: 2,
    },
    // 用户填写的表单数据校验
    rule: {
        name: {
            required: true,
            pattern: "^\\S+$",  // 不为空
            info: "名字不能为空"
        },
        description: {
            required: false,
            pattern: "^\\S*$",     // 填啥都行
            info: ""
        },
    },
    // 背景填充图片，最好是平铺图
    backgroundImage: utils.getImage("transparent-background.png"),
    // 右侧编辑区背景色
    editingAreaBackground: "#E8E8E8",
    // 选区列表背景颜色
    areaListBackground: "#FFFFFF",
    // 选区列表中每个列元的背景颜色
    areaListItemBackground: "#E8E8E8",
    // 选区列表中每个列元，被hover后的背景颜色
    areaListItemBackgroundAfterHover: "#BDBDBD",
    // 按钮名称
    buttonNames: {
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

/* harmony default export */ var editorConfiguration = ({
    DefaultConfiguration: editorConfiguration_DefaultConfiguration,
    CustomConfiguration
});
;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/image-spotlight-editor/index.vue?vue&type=script&lang=js&




// import Data from "../../assets/js/data";


/* harmony default export */ var image_spotlight_editorvue_type_script_lang_js_ = ({
  name: "ImageSpotlightEditor",
  components: {
    ImageSpotlightButton: image_spotlight_button
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
    // 配置参数：将所有参数集成在一个对象中，但先使用单个参数，后使用默认参数
    configuration: {
      type: Object,
      default: () => editorConfiguration.DefaultConfiguration,
    },
    canvasWidth: Number,       // 画布宽度
    editingWidth: Number,      // 右侧编辑区宽度
    height: Number,            // 总高度，两侧高度一致
    // 被选中的区域样式
    selectingAreaStyle: Object,
    // 正在画的区域样式
    drawingAreaStyle: Object,
    // 其他已经画的区域样式
    otherAreaStyle: Object,
    // 用户填写的表单数据校验
    rule: Object,
    // 背景填充图片，最好是平铺图
    backgroundImage: String,
    // 右侧编辑区背景色
    editingAreaBackground: String,
    // 选区列表背景颜色
    areaListBackground: String,
    // 选区列表中每个列元的背景颜色
    areaListItemBackground: String,
    // 选区列表中每个列元，被hover后的背景颜色
    areaListItemBackgroundAfterHover: String,
    // 按钮名称
    buttonNames: Object,
  },
  data() {
    return {
      // 配置
      finalConfiguration: editorConfiguration.DefaultConfiguration,
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
        (0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.nextTick)(() => {
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
        ;(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.nextTick)(() => {
          that.refreshCanvas()
        })
      };

    },
    // 参数初始化
    initParameter() {
      this.finalConfiguration = {
        canvasWidth: this.canvasWidth ? this.canvasWidth : this.configuration.canvasWidth,
        editingWidth: this.editingWidth ? this.editingWidth : this.configuration.editingWidth,      // 右侧编辑区宽度
        height: this.height ? this.height : this.configuration.height,            // 总高度，两侧高度一致
        // 被选中的区域样式
        selectingAreaStyle: {
          lineColor: utils.accessObjectSafely(this.selectingAreaStyle, ["lineColor"]) ?
              utils.accessObjectSafely(this.selectingAreaStyle, ["lineColor"]) :
              utils.accessObjectSafely(this.configuration, ["selectingAreaStyle", "lineColor"]),
          lineWidth: utils.accessObjectSafely(this.selectingAreaStyle, ["lineWidth"]) ?
              utils.accessObjectSafely(this.selectingAreaStyle, ["lineWidth"]) :
              utils.accessObjectSafely(this.configuration, ["selectingAreaStyle", "lineWidth"]),
          pointColor: utils.accessObjectSafely(this.selectingAreaStyle, ["pointColor"]) ?
              utils.accessObjectSafely(this.selectingAreaStyle, ["pointColor"]) :
              utils.accessObjectSafely(this.configuration, ["selectingAreaStyle", "pointColor"]),
          pointRadius: utils.accessObjectSafely(this.selectingAreaStyle, ["pointRadius"]) ?
              utils.accessObjectSafely(this.selectingAreaStyle, ["pointRadius"]) :
              utils.accessObjectSafely(this.configuration, ["selectingAreaStyle", "pointRadius"]),
        },
        // 正在画的区域样式
        drawingAreaStyle: {
          lineColor: utils.accessObjectSafely(this.drawingAreaStyle, ["lineColor"]) ?
              utils.accessObjectSafely(this.drawingAreaStyle, ["lineColor"]) :
              utils.accessObjectSafely(this.configuration, ["drawingAreaStyle", "lineColor"]),
          lineWidth: utils.accessObjectSafely(this.drawingAreaStyle, ["lineWidth"]) ?
              utils.accessObjectSafely(this.drawingAreaStyle, ["lineWidth"]) :
              utils.accessObjectSafely(this.configuration, ["drawingAreaStyle", "lineWidth"]),
          pointColor: utils.accessObjectSafely(this.drawingAreaStyle, ["pointColor"]) ?
              utils.accessObjectSafely(this.drawingAreaStyle, ["pointColor"]) :
              utils.accessObjectSafely(this.configuration, ["drawingAreaStyle", "pointColor"]),
          pointRadius: utils.accessObjectSafely(this.drawingAreaStyle, ["pointRadius"]) ?
              utils.accessObjectSafely(this.drawingAreaStyle, ["pointRadius"]) :
              utils.accessObjectSafely(this.configuration, ["drawingAreaStyle", "pointRadius"]),
        },
        // 其他已经画的区域样式
        otherAreaStyle: {
          lineColor: utils.accessObjectSafely(this.otherAreaStyle, ["lineColor"]) ?
              utils.accessObjectSafely(this.otherAreaStyle, ["lineColor"]) :
              utils.accessObjectSafely(this.configuration, ["otherAreaStyle", "lineColor"]),
          lineWidth: utils.accessObjectSafely(this.otherAreaStyle, ["lineWidth"]) ?
              utils.accessObjectSafely(this.otherAreaStyle, ["lineWidth"]) :
              utils.accessObjectSafely(this.configuration, ["otherAreaStyle", "lineWidth"]),
          pointColor: utils.accessObjectSafely(this.otherAreaStyle, ["pointColor"]) ?
              utils.accessObjectSafely(this.otherAreaStyle, ["pointColor"]) :
              utils.accessObjectSafely(this.configuration, ["otherAreaStyle", "pointColor"]),
          pointRadius: utils.accessObjectSafely(this.otherAreaStyle, ["pointRadius"]) ?
              utils.accessObjectSafely(this.otherAreaStyle, ["pointRadius"]) :
              utils.accessObjectSafely(this.configuration, ["otherAreaStyle", "pointRadius"]),
        },
        // 用户填写的表单数据校验
        rule: {
          name: {
            required: utils.accessObjectSafely(this.rule, ["name", "required"]) ?
                utils.accessObjectSafely(this.rule, ["name", "required"]) :
                utils.accessObjectSafely(this.configuration, ["rule", "name", "required"]),
            pattern: utils.accessObjectSafely(this.rule, ["name", "pattern"]) ?
                utils.accessObjectSafely(this.rule, ["name", "pattern"]) :
                utils.accessObjectSafely(this.configuration, ["rule", "name", "pattern"]),
            info: utils.accessObjectSafely(this.rule, ["name", "info"]) ?
                utils.accessObjectSafely(this.rule, ["name", "info"]) :
                utils.accessObjectSafely(this.configuration, ["rule", "name", "info"]),
          },
          description: {
            required: utils.accessObjectSafely(this.rule, ["description", "required"]) ?
                utils.accessObjectSafely(this.rule, ["description", "required"]) :
                utils.accessObjectSafely(this.configuration, ["rule", "description", "required"]),
            pattern: utils.accessObjectSafely(this.rule, ["description", "pattern"]) ?
                utils.accessObjectSafely(this.rule, ["description", "pattern"]) :
                utils.accessObjectSafely(this.configuration, ["rule", "description", "pattern"]),
            info: utils.accessObjectSafely(this.rule, ["description", "info"]) ?
                utils.accessObjectSafely(this.rule, ["description", "info"]) :
                utils.accessObjectSafely(this.configuration, ["rule", "description", "info"]),
          },
        },
        // 背景填充图片，最好是平铺图
        backgroundImage: this.backgroundImage ? this.backgroundImage : this.configuration.backgroundImage,
        // 右侧编辑区背景色
        editingAreaBackground: this.editingAreaBackground ? this.editingAreaBackground : this.configuration.editingAreaBackground,
        // 选区列表背景颜色
        areaListBackground: this.areaListBackground ? this.areaListBackground : this.configuration.areaListBackground,
        // 选区列表中每个列元的背景颜色
        areaListItemBackground: this.areaListItemBackground ? this.areaListItemBackground : this.configuration.areaListItemBackground,
        // 选区列表中每个列元，被hover后的背景颜色
        areaListItemBackgroundAfterHover: this.areaListItemBackgroundAfterHover ? this.areaListItemBackgroundAfterHover : this.configuration.areaListItemBackgroundAfterHover,
        // 按钮名称
        buttonNames: {
          // 默认态时的按钮
          accomplish: this.buttonNames && this.buttonNames.accomplish ? this.buttonNames.accomplish : this.configuration.buttonNames.accomplish,
          newArea: this.buttonNames && this.buttonNames.newArea ? this.buttonNames.newArea : this.configuration.buttonNames.newArea,
          resetPosition: this.buttonNames && this.buttonNames.resetPosition ? this.buttonNames.resetPosition : this.configuration.buttonNames.resetPosition,
          // 新建选区时的按钮
          addArea: this.buttonNames && this.buttonNames.addArea ? this.buttonNames.addArea : this.configuration.buttonNames.addArea,
          cancelArea: this.buttonNames && this.buttonNames.cancelArea ? this.buttonNames.cancelArea : this.configuration.buttonNames.cancelArea,
          rollBack: this.buttonNames && this.buttonNames.rollBack ? this.buttonNames.rollBack : this.configuration.buttonNames.rollBack,
          // 编辑选区时的按钮
          confirmChange: this.buttonNames && this.buttonNames.confirmChange ? this.buttonNames.confirmChange : this.configuration.buttonNames.confirmChange,
          cancelChange: this.buttonNames && this.buttonNames.cancelChange ? this.buttonNames.cancelChange : this.configuration.buttonNames.cancelChange,
          deleteArea: this.buttonNames && this.buttonNames.deleteArea ? this.buttonNames.deleteArea : this.configuration.buttonNames.deleteArea,
        }
      }
      // 最后用默认配置补全
      utils.mergeObjects(this.finalConfiguration, editorConfiguration.DefaultConfiguration)
    },
    // 将参数作用于HTML,
    applyParameter() {
      // 设置drawing-area的宽高
      this.$refs["drawing-area"].style.height = this.finalConfiguration.height + "px"
      this.$refs["drawing-area"].style.width = this.finalConfiguration.canvasWidth + "px"
      // 设置画画区背景图
      this.$refs["drawing-area"].style.backgroundImage = `url('${this.finalConfiguration.backgroundImage}')`
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
        radius = this.finalConfiguration.drawingAreaStyle.pointRadius
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
      ;(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.nextTick)(() => {
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
      ;(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.nextTick)(() => {
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
      ;(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.nextTick)(() => {
        that.refreshCanvas()
      })
    },
    // 取消修改选区
    cancelChange() {
      // this.canvas.style.cursor = "grab"
      this.editing = false
      this.selecting = false
      let that = this
      ;(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.nextTick)(() => {
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
      ;(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.nextTick)(() => {
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
      ;(0,external_commonjs_vue_commonjs2_vue_root_Vue_namespaceObject.nextTick)(() => {
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
});

;// CONCATENATED MODULE: ./src/package/image-spotlight-editor/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var package_image_spotlight_editorvue_type_script_lang_js_ = (image_spotlight_editorvue_type_script_lang_js_); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/package/image-spotlight-editor/index.vue?vue&type=style&index=0&id=47c7727d&prod&scoped=true&lang=css&
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/package/image-spotlight-editor/index.vue?vue&type=style&index=0&id=47c7727d&prod&scoped=true&lang=css&

;// CONCATENATED MODULE: ./src/package/image-spotlight-editor/index.vue



;


/* normalize component */

var image_spotlight_editor_component = normalizeComponent(
  package_image_spotlight_editorvue_type_script_lang_js_,
  image_spotlight_editorvue_type_template_id_47c7727d_scoped_true_render,
  image_spotlight_editorvue_type_template_id_47c7727d_scoped_true_staticRenderFns,
  false,
  null,
  "47c7727d",
  null
  
)

/* harmony default export */ var image_spotlight_editor = (image_spotlight_editor_component.exports);
;// CONCATENATED MODULE: ./src/package/index.js
//package/index.js



let plugins = {};
const componentArray = [image_spotlight_render, image_spotlight_editor]

plugins.install = function (Vue) {
    // 判断是否安装过
    if (plugins.installed) return;
    plugins.installed = true
    //  console.log('plugins.installed==========',plugins.installed)

    componentArray.forEach((item) => {
        Vue.component(item.name, item)
    })

}
// /* 支持使用标签的方式引入 */
// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue);
// }
// 也可参考 https://cn.vuejs.org/v2/cookbook/packaging-sfc-for-npm.html

/* harmony default export */ var src_package = (plugins);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (src_package);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vue2-image-spotlight.common.js.map