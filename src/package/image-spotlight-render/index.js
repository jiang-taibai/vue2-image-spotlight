import ImageSpotlightRenderer from "./index.vue";

ImageSpotlightRenderer.install = app => {
    app.component(ImageSpotlightRenderer.name, ImageSpotlightRenderer)
}

export default ImageSpotlightRenderer