<template>
  <div class="popover" @click.stop="handleClick">
    <div class="content-wrapper" ref="contentWrapper" v-if="isVisable">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'GuluPopover',
  data() {
    return {
      isVisable: false,
    }
  },
  methods: {
    handleClick() {
      this.isVisable = !this.isVisable

      if (this.isVisable) {
        setTimeout(() => {
          document.body.appendChild(this.$refs.contentWrapper)
          const {
            left,
            top,
          } = this.$refs.triggerWrapper.getBoundingClientRect()
          const contentWrapperStyle = this.$refs.contentWrapper.style
          contentWrapperStyle.left = left + window.scrollX + 'px'
          contentWrapperStyle.top = top + window.scrollY + 'px'

          const eventHandler = () => {
            this.isVisable = false
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        }, 0)
      }
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  border: 1px solid red;
  box-shadow: 0 0 3px rbga(0, 0, 0, 0.5);
}
</style>

