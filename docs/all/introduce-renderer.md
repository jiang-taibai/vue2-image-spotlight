# 渲染器组件

## 章节概述

通过本章节，你将会了解到渲染器的所有特性、参数，以及原理分析。

## 渲染器简介

当用户移动到指定区域后，将在该区域之外的部分覆盖上半透明黑色蒙版（默认），并在下方显示该区域的名称和描述性文字。

<div align="center">
  <img src="https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304020927500.gif"/>
</div>



## 渲染器使用

使用`<image-spotlight-renderer />`组件，传入必要参数，再传入可选数据参数和可选样式参数即可。

配色方案取自：[Color Claim](https://vanschneider.com/colors)

> 示例代码——Vue文件

```html
<script>
import SpongeBobData from "@/assets/js/Data-SpongeBob";
import ConfigurationRendererCustom from "@/assets/js/Configuration-Renderer-Custom";

export default {
  data() {
    return {
      imgUrl: SpongeBobData.imgUrl,
      allAreaInfos: SpongeBobData.allAreaInfos,
      allPoints: SpongeBobData.allPoints,
    }
  },
  computed: {
    ConfigurationRendererCustom() {
      return ConfigurationRendererCustom
    },
  },
}
</script>

<template>
  <div id="app">
    <image-spotlight-renderer
        :img-url="imgUrl"
        :all-area-infos="allAreaInfos"
        :all-points="allPoints"

        :canvas-width="ConfigurationRendererCustom.canvasWidth"
        :canvas-height="ConfigurationRendererCustom.canvasHeight"
        :mask-background="ConfigurationRendererCustom.maskBackground"
        :animation-time="ConfigurationRendererCustom.animationTime"
        :show-description-box="ConfigurationRendererCustom.showDescriptionBox"
        :description-box-style="ConfigurationRendererCustom.descriptionBoxStyle"
    />
  </div>
</template>
```

> 示例代码——引用JS文件

- `Data-SpongeBob.js`：由于篇幅关系，请详见[附录文件](/all/attachment.md)
- `Configuration-Renderer-Custom.js`：

```js
const CustomConfiguration = {
    canvasWidth: 700,
    canvasHeight: 700,
    maskBackground: "rgba(47,47,47,0.5)", // 遮罩层颜色
    animationTime: 10,  // 动画时间
    showDescriptionBox: true,
    descriptionBoxStyle: {
        background: "#B1FDEB",
        color: "#000000",
    },
}

export default CustomConfiguration
```

最终效果图如下图，具体改动有以下几点：

- 尺寸修改：设置宽高为`700px`（但会根据图片自适应大小，取长边缩放到预设的长度，短边等比自适应）
- 动画时间：设置为10ms
- 描述框颜色：设置背景色为`#B1FDEB`，字体色为`#000000`

![](https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304021630486.gif)



## API

### 参数

| 参数                | 说明                                                         | 类型    | 默认值              |
| ------------------- | ------------------------------------------------------------ | ------- | ------------------- |
| imgUrl              | 图片链接                                                     | String  | `必填`              |
| allAreaInfos        | 所有区域描述信息，数组每一项元素为{ name: "",description: ""}，其中name为区域的名称标题，description为区域的具体描述信息 | Array   | `[]`                |
| allPoints           | 所有区域的点集，数组每一项为某一区域的所有点集合数组<br />[{x:0, y:0}, {x:0, y:200}, {x:200, y:200}, {x:200, y:0}]表示的是一个200\*200的矩形，规定 **p~i~** 连接 **p~i+1~**，最后一个点连接第一个点 | Array   | `[]`                |
| canvasWidth         | 展示区域的宽，若图片宽>高，则将宽度设置为canvasWidth，高度自适应 | Number  | `500`               |
| canvasHeight        | 展示区域的高，若图片高>宽，则将宽度设置为canvasHeight，宽度自适应 | Number  | `400`               |
| maskBackground      | 背景色，支持`#十六进制`、`rgb()`、`rgba()`                   | String  | `"rgba(0,0,0,0.5)"` |
| animationTime       | 动画时间，即聚焦时间，单位ms                                 | Number  | `25`                |
| showDescriptionBox  | 是否展示描述框                                               | Boolean | `true`              |
| descriptionBoxStyle | 展示框的样式，可设置背景色、字体色                           | Object  | 如下                |

```js
// descriptionBoxStyle默认参数
const descriptionBoxStyle = {
    background: "#EBEBE3",
    color: "#59594F"
}
```



### 事件

| 事件名      | 说明                                                         | 回调参数     |
| ----------- | ------------------------------------------------------------ | ------------ |
| selecting   | 当选中某一个选区时，向上传递给父组件当前选区的数据           | 如下格式对象 |
| unselecting | 未选中选区时向上传递事件，提醒父组件做出更改。<br />注意：当且仅当鼠标在画布上移动时，上一次监听到选中，本次未监听到选中时才会触发，因此当一直未选中时至多只会触发一次。 | `无`         |

```json
// selecting事件回调参数示例
{
    selectingIndex: 0,
    areaInfo: [
        {
            "name": "第0个选区的名称",
            "description": "第0个选区的描述"
        }
    ],
    points: [
        [
            {
                "x": 0.0,
                "y": 0.0
            },
        ]
    ]
}
```



## 渲染器原理

待完善……

