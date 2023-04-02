# 快速上手

## 章节概述

通过本章节，你可以了解到如何将Image Spotlight安装到你的项目上，并通过实例代码快速使用组件。



## 安装

### 1. 通过npm安装

本项目已上传至npm，你可以使用以下命令快速安装。

```bash
# 在Vue2项目中，安装Image Spotlight for Vue2最新版
npm install vue2-image-spotlight

# 在Vue3项目中，安装Image Spotlight for Vue3最新版
# Sorry, 待上传...
```



### 2. 通过yarn安装

```bash
# 在Vue2项目中，安装Image Spotlight for Vue2最新版
# Sorry, 待上传...

# 在Vue3项目中，安装Image Spotlight for Vue3最新版
# Sorry, 待上传...
```



### 3. 通过pnpm安装

```bash
# 在Vue2项目中，安装Image Spotlight for Vue2最新版
# Sorry, 待上传...

# 在Vue3项目中，安装Image Spotlight for Vue3最新版
# Sorry, 待上传...
```

## 引入组件

### 1. Vue2中引入组件

在Vue2中，可以在main.js中全局注册组件。

```js
import Vue from 'vue'
import App from './App.vue'

// 导入ImageSpotlight包和样式
import Vue2ImageSpotlight from 'vue2-image-spotlight'
import 'vue2-image-spotlight/lib/vue2-image-spotlight.css'
// 全局使用
Vue.use(Vue2ImageSpotlight)

Vue.config.productionTip = false
new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')
```

### 2. Vue3中引入组件

```js
// Sorry, 待上传...
```

## 渲染器组件的基本使用

使用`<image-spotlight-renderer />`组件，再传入以下基本参数（完整参数解释请看[渲染器组件](/all/introduce-renderer.md)章节）

- imgUrl：必要参数，表示待渲染的图片。
- allAreaInfos：非必要，表示所有区域的描述性信息，若未提供默认为空数组。
- allPoints：非必要，表示所有区域的坐标信息，若未提供默认为空数组。

```html
<script>
export default {
  data() {
    return {
      imgUrl: "https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304020954181.jpg",
      allAreaInfos: [{
        "name": "火星",
        "description": "火星（英语：Mars；拉丁语：Martis；天文符号：♂），是距离太阳第四近的行星，也是太阳系中仅次于水星的第二小的行星，为太阳系里四颗类地行星之一。"
      }],
      allPoints: [[{"x": 603.3040955500543, "y": 257.72443780058853}, {
        "x": 569.6708183885015,
        "y": 269.3667260488183
      }, {"x": 542.505479142632, "y": 292.6513025452779}, {
        "x": 528.9228095196974,
        "y": 327.5781672899672
      }, {"x": 528.276015728129, "y": 372.20693890818137}, {
        "x": 545.0926543089054,
        "y": 402.6062471118925
      }, {"x": 572.2579935547749, "y": 429.12479256619366}, {
        "x": 607.1848582994642,
        "y": 440.12028702285517
      }, {"x": 645.9924857935634, "y": 438.8266994397185}, {
        "x": 675.098206414138,
        "y": 423.3036484420788
      }, {"x": 695.7956077443242, "y": 405.19342227816577}, {
        "x": 707.437895992554,
        "y": 373.50052649131806
      }, {"x": 709.378277367259, "y": 345.0415996623119}, {
        "x": 708.7314835756906,
        "y": 318.5230542080107
      }, {"x": 700.9699580768707, "y": 296.5320652946878}, {
        "x": 684.1533194960945,
        "y": 278.4218391307748
      }, {"x": 650.5200423345417, "y": 259.01802538372516}, {"x": 627.8822596296504, "y": 256.43085021745185}]],
    }
  },
}
</script>

<template>
  <div id="app">
    <image-spotlight-renderer
        :img-url="imgUrl"
        :all-area-infos="allAreaInfos"
        :all-points="allPoints"
    />
  </div>
</template>
```

效果图如下，当鼠标移动到火星上时，将在下方展开详细信息。

![image-20230402100209669](https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304021002759.png)



## 编辑器组件的基本使用

使用`<image-spotlight-editor />`组件，再传入以下基本参数（完整参数解释请看[编辑器组件](/all/introduce-editor.md)章节）

- imgUrl：必要参数，表示待渲染的图片。

```html
<script>
export default {
  data() {
    return {
      imgUrl: "https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304020954181.jpg",
    }
  },
  methods: {
    onAccomplish(data) {
      console.log(data)
    }
  }
}
</script>

<template>
  <div id="app">
    <image-spotlight-editor
        img-url="https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304020954181.jpg"
        @accomplish="onAccomplish"
    />
  </div>
</template>
```

效果图如下：左侧为绘制区，右侧为编辑区。

![image-20230402102851594](https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304021628765.png)

