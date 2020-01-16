<template>
  <div class="popover" ref="popover">
    <div :class="contentWrapperClasses" ref="contentWrapper" v-if="isVisable">
      <slot name="content" :close="closePopover"></slot>
    </div>
    <span ref="triggerWrapper" :style="{display: 'inline-block'}">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'GuluPopover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['left', 'right', 'top', 'bottom'].includes(value)
      },
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].includes(value)
      },
    },
  },
  data() {
    return {
      isVisable: false,
    }
  },
  computed: {
    contentWrapperClasses() {
      return ['content-wrapper', this.position && `position-${this.position}`]
    },
  },
  methods: {
    repositionContent() {
      const { contentWrapper, triggerWrapper } = this.$refs

      if (!contentWrapper) {
        return undefined
      }
      document.body.appendChild(contentWrapper)
      const {
        left,
        top,
        height,
        width,
      } = triggerWrapper.getBoundingClientRect()
      const {
        height: contentWrapperHeight,
      } = contentWrapper.getBoundingClientRect()

      const positions = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY,
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY,
        },
        left: {
          left: left + window.scrollX,
          top: top - (contentWrapperHeight - height) / 2 + window.scrollY,
        },
        right: {
          left: left + width + window.scrollX,
          top: top - (contentWrapperHeight - height) / 2 + window.scrollY,
        },
      }

      const claculatePosition = positions[this.position]
      if (claculatePosition) {
        contentWrapper.style.left = claculatePosition.left + 'px'
        contentWrapper.style.top = claculatePosition.top + 'px'
      }
    },
    listenToDocument(e) {
      if (!this.$refs.contentWrapper) {
        return undefined
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
      this.isVisable = !this.isVisable
      setTimeout(() => {
        this.repositionContent()
        document.addEventListener('click', this.listenToDocument)
      }, 0)
    },
    handleClick(e) {
      if (!this.$refs.triggerWrapper.contains(e.target)) return

      if (!this.isVisable) {
        this.closePopover()
      }
      this.onPopover()
    },
  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover.addEventListener('click', this.handleClick)
    } else {
      this.$refs.popover.addEventListener('mouseenter', this.onPopover)
      this.$refs.popover.addEventListener('mouseleave', this.closePopover)
    }
  },
  destroyed() {
    if (this.trigger === 'click') {
      this.$refs.popover.removeEventListener('click', this.handleClick)
    } else {
      this.$refs.popover.removeEventListener('mouseenter', this.onPopover)
      this.$refs.popover.removeEventListener('mouseleave', this.closePopover)
    }
  },
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
  border: 1px solid $popover-border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 1px 2px #999);
  background: #fff;
  padding: 0.5em 1em;
  max-width: 20em;

  $length: 10px;
  &::before,
  &::after {
    content: '';
    display: block;
    border: $length solid transparent;
    width: 0;
    height: 0;
    position: absolute;
  }

  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before {
      border-bottom: none;
      border-top-color: $popover-border-color;
      top: 100%;
    }

    &::after {
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;

    &::before {
      border-top: none;
      border-bottom-color: $popover-border-color;
      bottom: 100%;
    }

    &::after {
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;

    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      border-right: none;
      border-left-color: $popover-border-color;
      left: 100%;
    }

    &::after {
      border-left-color: #fff;
      left: calc(100% - 1px);
    }
  }

  &.position-right {
    margin-left: 10px;

    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      border-left: none;
      border-right-color: $popover-border-color;
      right: 100%;
    }

    &::after {
      border-right-color: #fff;
      right: calc(100% - 1px);
    }
  }
}
</style>

