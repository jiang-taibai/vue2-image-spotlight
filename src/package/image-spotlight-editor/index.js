import ImageSpotlightEditor from "./index.vue";

ImageSpotlightEditor.install = app => {
    app.component(ImageSpotlightEditor.name, ImageSpotlightEditor)
}

export default ImageSpotlightEditor