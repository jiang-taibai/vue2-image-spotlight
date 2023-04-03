const CustomConfiguration = {
    canvasWidth: 400,       // 画布宽度
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
        pointRadius: 1,
    },
    // 用户填写的表单数据校验
    rule: {
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
    },
    // 背景填充图片，最好是平铺图
    backgroundImage: "url(https://gcore.jsdelivr.net/gh/Jiang-TaiBai/pic-go@main/img/202304021123069.png)",
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

export default CustomConfiguration