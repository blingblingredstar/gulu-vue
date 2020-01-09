<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluButtonGroup',
  mounted() {
    Array.from(this.$el.children).forEach((node) => {
      if (node.nodeName.toLowerCase() !== 'button') {
        console.warn(
          `g-button-group的子元素应为g-button，检测到${node.nodeName.toLowerCase()}元素`,
        )
      }
    })
  },
}
</script>

<style lang="scss" scoped>
@import './_variables.scss';
.g-button-group {
  display: inline-flex;
  vertical-align: middle;

  > .g-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>