<template>
  <div :class="toastClasses" ref="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <span v-else v-html="$slots.default[0]"></span>
    </div>

    <span class="line" ref="line"></span>
    <span v-if="closeButton" class="close" @click="handleClickClose">{{ closeButton.text }}</span>
  </div>
</template>
<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDely: {
      type: [Number, String],
      default: 2000,
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: '关闭',
          callback: undefined,
        }
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'middle'].includes(value)
      },
    },
  },
  computed: {
    toastClasses() {
      const { position } = this
      return ['toast', position && `position-${position}`]
    },
  },
  mounted() {
    this.updateLineHeightAsync()
    this.execAutoClose()
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, +this.autoCloseDely)
      }
    },
    updateLineHeightAsync() {
      // 通过动态获取toast高度重新给分割线赋值
      this.$nextTick(() => {
        this.$refs.line.style.height =
          this.$refs.toast.getBoundingClientRect().height + 'px'
      })
    },
    close() {
      // this.$el.remove()
      // this.$destroy()
    },
    handleClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
@import './_variables.scss';

.toast {
  position: fixed;
  left: 50%;
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-height;
  display: flex;
  align-items: center;
  background: $toast-background-color;
  color: $toast-color;
  padding: 0 1em;
  border-radius: $border-radius;
  box-shadow: 0px 0px 3px 0px $box-shadow-color;

  > .message {
    padding: 0.4em 0.4em 0.4em 0;
  }

  > .close {
    padding-left: 0.8em;
    flex-shrink: 0;
  }
  > .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 0.5em;
  }

  &.position-top {
    top: 0;
    transform: translateX(-50%);
  }
  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>