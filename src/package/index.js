//package/index.js
import ImageSpotlightRender from "./image-spotlight-render/index.vue";
import ImageSpotlightEditor from "./image-spotlight-editor/index.vue";

let plugins = {};
const componentArray = [ImageSpotlightRender, ImageSpotlightEditor]

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

export default plugins