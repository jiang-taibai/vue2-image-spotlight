# <div align="center">Image Spotlight for Vue2</div>

<div align="center">
  <img src="https://img.shields.io/badge/Build-passing-%2396C40F" alt="Build-passing"/>
  <img src="https://img.shields.io/badge/Version-1.0.8-%231081C1" alt="Version-1.0.8"/>
  <img src="https://img.shields.io/badge/License-Apache-%2396C40F" alt="License-Apache"/>
  <img src="https://img.shields.io/badge/PoweredBy-Jiang_Liu-%2396C40F" alt="PoweredBy-Jiang_Liu"/>
</div>

## 项目概述

ImageSpotlight（图像聚光灯）实现了**新式互联网图像浏览模式**，并实现两大必要子组件：编辑器与渲染器。

通过Image Spotlight，你可以在多目标图、流程图以及各种复杂结构图像之上搭建聚光灯舞台，大大提高用户浏览图片的体验。

本项目基于Vue，目前兼容Vue2，未来将发布Vue3（其实我是发布了两天Vue3版本，一直出问题😭）

详细使用请参考文档：[Image Spotlight 中文文档](https://jiang-taibai.github.io/vue2-image-spotlight/)

<div align="center">
  <img src="https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304020927500.gif" alt="https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304020927500.gif"/>
</div>

## 相关链接

- 在线体验网站：
  - [Image Spotlight Example 在线体验⚡](https://jiang-taibai.github.io/vue2-image-spotlight-example/)
  - [Image Spotlight Example (GitHub)](https://github.com/Jiang-TaiBai/vue2-image-spotlight-example)
  - [Image Spotlight Example (Gitee)](https://gitee.com/jiang-taibai/vue2-image-spotlight-example)
- Image Spotlight 文档：
  - [Image Spotlight 中文文档](https://jiang-taibai.github.io/vue2-image-spotlight/)
  - [Image Spotlight English Document(Sorry, it's under construction)]()
- Image Spotlight for Vue2
  - [vue2-image-spotlight (GitHub)](https://github.com/Jiang-TaiBai/vue2-image-spotlight)
  - [vue2-image-spotlight (Gitee)](https://gitee.com/jiang-taibai/vue2-image-spotlight)
- Image Spotlight for Vue3：待上传……

## 编辑器组件

- 组件标签：`<image-spotlight-editor />`
- 简介： 用户可在编辑器（ImageSpotlightEditor组件）自定义需要聚光的区域
- 提供功能：

    - 缩放图片：以光标为中心，缩小或放大图片
    - 标点成线：鼠标左键点击即可标记点，将最后一个点连接第一个点，成为一个封闭图形。该封闭图形将作为识别区域。
    - 撤回：撤回上一次标记的点
    - 编辑基本信息：每个区域可配置对应的名称和详细描述
- 客制化能力：

    - 样式参数高度自定义：可自定义高度、宽度、背景色等等，详细请见开发者文档。
    - 预设参数：可预设已标记的点和区域信息（可用于二次编辑）

<div align="center">
  <img src="https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304020855056.gif" alt="https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304020855056.gif"/>
</div>

## 渲染器组件

- 组件标签：`<image-spotlight-renderer />`
- 简介：将编辑器得到的数据（即区域信息与区域点集）和对应的图片渲染出聚焦效果
- 提供功能：

    - 聚光灯：将区域用聚光灯效果突出出来
    - 信息展示：展示对应区域的信息

- 客制化能力：

    - 样式参数高度自定义：可自定义蒙版颜色、动画速度、信息栏的背景色与字体色
    - 事件监听：当选中某区域时将触发`selecting事件`
      ，而未选中时（当且仅当鼠标在区域内移动时，上一次选中而此次未选中）触发`unselecting事件`
    - 可选的信息展示：可设置不展示信息，交由开发者利用事件监听自定义设计

<div align="center">
  <img src="https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304020841173.gif" alt="https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304020841173.gif"/>
</div>

## License

项目采用[Apache License 2.0开源协议](https://apache.org/licenses/LICENSE-2.0.txt)

Copyright © 2023 Jiang Liu.