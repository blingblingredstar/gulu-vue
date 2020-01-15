<template>
  <div class="popover" @click.stop="handleClick">
    <div class="content-wrapper" ref="contentWrapper" v-if="isVisable">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" :style="{display: 'inline-block'}">
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
@import './_variables.scss';

.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  transform: translateY(-100%);
  margin-top: -10px;
  border: 1px solid $popover-border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 2px #999);
  background: #fff;
  padding: 0.5em 1em;
  max-width: 20em;

  &::before,
  &::after {
    $length: 10px;
    content: '';
    display: block;
    border: $length solid transparent;
    width: 0;
    height: 0;
    left: $length;
    position: absolute;
  }

  &::before {
    border-top-color: $popover-border-color;
    top: 100%;
  }

  &::after {
    border-top-color: #fff;
    top: calc(100% - 1px);
  }
}
</style>

