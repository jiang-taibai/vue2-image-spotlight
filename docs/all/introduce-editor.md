# 编辑器组件

## 章节概述

通过本章节，你将会了解到编辑器的所有特性、参数，以及原理分析。

## 编辑器简介

由于得到区域坐标过于麻烦，因此可用编辑器来绘制区域，并填写该区域的信息。最后可点击`完成`按钮得到json数据（含有图片url、所有区域信息和所有区域点集）

![image-20230402141859636](https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304021631740.png)



## 编辑器使用

### 示例代码

使用`<image-spotlight-editor />`组件，传入必要参数，再传入可选数据参数和可选样式参数即可。本示例代码除编辑器以外，还自定义了一个展示编辑器导出数据的底栏，方便您获取导出数据（实际开发时可利用事件监听获取数据传递给后继流程）

![OSI MODEL](https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304021420310.png)



> 示例代码——Vue文件

```html
<template>
  <div>
    <image-spotlight-editor
        :img-url="DataOsiModel.imgUrl"
        :all-points="DataOsiModel.allPoints"
        :all-area-infos="DataOsiModel.allAreaInfos"

        @accomplish="onAccomplish"

        :canvas-width="ConfigurationEditorCustom.canvasWidth"
        :editing-width="ConfigurationEditorCustom.editingWidth"
        :height="ConfigurationEditorCustom.height"

        :selecting-areaStyle="ConfigurationEditorCustom.selectingAreaStyle"
        :drawing-areaStyle="ConfigurationEditorCustom.drawingAreaStyle"
        :other-areaStyle="ConfigurationEditorCustom.otherAreaStyle"

        :rule="ConfigurationEditorCustom.rule"
        :background-image="ConfigurationEditorCustom.backgroundImage"
        :editing-area-background="ConfigurationEditorCustom.editingAreaBackground"
        :area-list-background="ConfigurationEditorCustom.areaListBackground"
        :area-list-item-background="ConfigurationEditorCustom.areaListItemBackground"
        :area-list-item-background-after-hover="ConfigurationEditorCustom.areaListItemBackgroundAfterHover"
        :button-names="ConfigurationEditorCustom.buttonNames"
    />
    <div class="export-data">{{ JSON.stringify(exportData, null, 2) }}</div>
  </div>
</template>

<script>
import DataOsiModel from "@/assets/js/Data-OsiModel";
import ConfigurationEditorCustom from "@/assets/js/Configuration-Editor-Custom";

export default {
  name: "EditorExample",
  components: {},
  data() {
    return {
      exportData: {
        imgUrl: DataOsiModel.imgUrl,
        allAreaInfos: [],
        allPoints: [],
      },
    }
  },
  methods: {
    /**
     * 点击【完成】按钮时，会触发accomplish事件，并传递data实参
     * @param data 包括imgUrl、allAreaInfos、allPoints数据
     */
    onAccomplish(data) {
      // 格式化输出到控制台（含缩进）
      console.log(JSON.stringify(data, null, 4))
      // 将数据保存下来
      this.exportData = data
    }
  },
  mounted() {
  },
  computed: {
    DataOsiModel() {
      return DataOsiModel
    },
    ConfigurationEditorCustom() {
      return ConfigurationEditorCustom
    }
  }
}
</script>

<style scoped>
/* 导出数据栏样式 */
.export-data {
  margin-top: 8px;
  width: 668px;
  max-height: 300px;
  overflow: scroll;
  border-radius: 8px;
  padding: 20px;
  background: #371722;
  color: #BBAB9B;
  white-space: pre-wrap;
  font-family: Consolas, "Microsoft YaHei", serif;
}
</style>
```

> 示例代码——引用JS文件

- `Data-OsiModel.js`：由于篇幅关系，请详见[附录文件](/all/attachment.md)
- `Configuration-Editor-Custom.js`：由于篇幅关系，请详见[附录文件](/all/attachment.md)

### 缩放&移动画布

在左侧绘制区，可使用鼠标滚轮缩小与放大，也可以使用左键将图片拖拽移动。

注意1：如果正在新建区域的绘制环节，拖动图片当且仅当大于`8px`时才会被拖动，以防误触。

注意2：如果正在绘制区域，点击瞬间会标记一个点，故若需要移动画布，需要拖拽开始点为需要绘制的点（也可以撤回）

![image-20230402143439124](https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304021631379.png)



### 绘制区域

在左侧绘制区域，在右侧输入选区名称与描述。绘制时仍然可以对画布进行缩小、放大、移动操作。

机制：规定标记点只能位于图像内部，而点击图像外侧不会标记点，可以实现无冲突式拖拽。

撤回：点击撤回将删除上一次标记的点坐标

![image-20230402144318356](https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304021631342.png)



### 二次编辑

当鼠标悬浮到右侧某一个选区列表元时，左侧对应的选区将用红色框高亮（默认为红色）。点击该列表元，进入二次编辑。

![image-20230402145212177](https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304021452270.png)

目前仅支持编辑选区名称和描述，二次编辑选区待开发中。

![image-20230402145114626](https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304021631190.png)



### 置位

置位（重置位置）可实现图片缩放比例、横坐标偏移量、纵坐标偏移量都恢复到初始状态。

![image-20230402145419071](https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304021631017.png)



### 完成编辑

当点击【完成】按钮时，将触发`accomplish`事件。该事件将传递`object`参数，包括imgUrl、allAreaInfos、allPoints数据。

![image-20230402145940098](https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304021631418.png)



## API

### 参数

> 数据参数

| 参数         | 说明                                             | 类型   | 默认值 |
| ------------ | ------------------------------------------------ | ------ | ------ |
| imgUrl       | 基于该图片选区                                   | String | `必填` |
| allAreaInfos | 所有区域的预设信息，可用于已有数据的二次编辑     | Array  | `[]`   |
| allPoint     | 所有区域点集的预设信息，可用于已有数据的二次编辑 | Array  | `[]`   |



> 尺寸参数

| 参数         | 说明             | 类型   | 默认值 |
| ------------ | ---------------- | ------ | ------ |
| canvasWidth  | 左侧画布宽度     | Number | `500`  |
| editingWidth | 右侧编辑区宽度   | Number | `200`  |
| height       | 左边与右侧的高度 | Number | `400`  |



> 样式参数

| 参数            | 说明               | 类型   | 默认值     |
| --------------- | ------------------ | ------ | ---------- |
| backgroundImage | 左侧画布的背景图片 | String | 自带透明图 |

| 参数                             | 说明                             | 类型   | 默认值      |
| -------------------------------- | -------------------------------- | ------ | ----------- |
| editingAreaBackground            | 编辑区区域背景色                 | String | `"#E8E8E8"` |
| areaListBackground               | 区域列表背景色                   | String | `"#FFFFFF"` |
| areaListItemBackground           | 区域列表元背景色                 | String | `"#E8E8E8"` |
| areaListItemBackgroundAfterHover | 当鼠标移动到区域列表元时的背景色 | String | `"#BDBDBD"` |

| 参数               | 说明                   | 类型   | 默认值 |
| ------------------ | ---------------------- | ------ | ------ |
| selectingAreaStyle | 正在画的区域样式       | Object | `如下` |
| drawingAreaStyle   | 其他已经画的区域样式   | Object | `如下` |
| otherAreaStyle     | 用户填写的表单数据校验 | Object | `如下` |

```js
// selectingAreaStyle默认参数，被选中的区域样式
const selectingAreaStyle = {
    lineColor: "#FF0000",
    lineWidth: 2,
    pointColor: "#FFFF00",
    pointRadius: 2,
}
// drawingAreaStyle默认参数，正在画的区域样式
const drawingAreaStyle = {
    lineColor: "#0000FF",
    lineWidth: 2,
    pointColor: "#0000FF",
    pointRadius: 2,
}
// otherAreaStyle默认参数，其他已经画的区域样式
const otherAreaStyle = {
    lineColor: "#000000",
    lineWidth: 1,
    pointColor: "#000000",
    pointRadius: 2,
}
```



> 表单验证参数

| 参数 | 说明                                                         | 类型   | 默认值 |
| ---- | ------------------------------------------------------------ | ------ | ------ |
| rule | 表单验证的规则。<br />required：是否必须填写<br />pattern：输入的内容所需要满足的正则表达式<br />info：验证失败时的信息提示 | Object | 如下   |

```js
// rule默认参数
const rule = {
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
```



> 国际化参数

| 参数        | 说明       | 类型   | 默认值 |
| ----------- | ---------- | ------ | ------ |
| buttonNames | 按钮的名称 | Object | 如下   |

```js
// buttonNames默认参数
const buttonNames = {
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
```



### 事件

| 事件名     | 说明                                           | 回调参数     |
| ---------- | ---------------------------------------------- | ------------ |
| accomplish | 点击完成按钮时触发该事件，用于传递给父组件数据 | 如下格式对象 |

```js
{
  "imgUrl": "https://example.com/example.png",
  "allAreaInfos": [
    {
      "name": "选区名称",
      "description": "选区描述"
    }
  ],
  "allPoints": [
    [
      {
        "x": 0.0,
        "y": 0.0
      },
    ]
  ]
}
```





## 编辑器原理

待完善……

