<template>
  <div :class="rowClass" :style="rowStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GuluRow',
  props: {
    gutter: {
      type: [Number, String],
    },
    align: {
      type: String,
      validator(value) {
        return ['left', 'right', 'center'].includes(value)
      },
    },
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: `${-this.gutter / 2}px`,
        marginRight: `${-this.gutter / 2}px`,
      }
    },
    rowClass() {
      const { align } = this
      return ['row', align && `align-${align}`]
    },
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  },
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>