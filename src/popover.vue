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
    repositionContent() {
      if (!this.$refs.contentWrapper) {
        return undefined
      }
      document.body.appendChild(this.$refs.contentWrapper)
      const { left, top } = this.$refs.triggerWrapper.getBoundingClientRect()
      const contentWrapperStyle = this.$refs.contentWrapper.style
      contentWrapperStyle.left = left + window.scrollX + 'px'
      contentWrapperStyle.top = top + window.scrollY + 'px'
    },
    listenToDocument(e) {
      if (!this.$refs.contentWrapper) {
        document.removeEventListener('click', this.listenToDocument)
      }
      if (!this.$refs.contentWrapper.contains(e.target)) {
        this.closePopover()
      }
    },
    closePopover() {
      this.isVisable = false
      document.removeEventListener('click', this.listenToDocument)
    },
    onPopover() {
      setTimeout(() => {
        this.repositionContent()
        document.addEventListener('click', this.listenToDocument)
      }, 0)
    },
    handleClick(e) {
      if (!this.$refs.triggerWrapper.contains(e.target)) return

      this.isVisable = !this.isVisable
      if (!this.isVisable) {
        this.closePopover()
      }
      this.onPopover()
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

