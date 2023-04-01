<template>
  <button class="image-spotlight-button" type="button" ref="button">
    <slot>
      <span>按钮</span>
    </slot>
  </button>
</template>

<script>
export default {
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
}
</script>

<style scoped>
.image-spotlight-button {
  padding: 8px 15px;
  margin-right: 1px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  outline: 0;
  cursor: pointer;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  transition: .1s;
}
</style>
