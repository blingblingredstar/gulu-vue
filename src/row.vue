<template>
  <div class="row" :style="style">
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
  },
  computed: {
    style() {
      return {
        marginLeft: `${-this.gutter / 2}px`,
        marginRight: `${-this.gutter / 2}px`,
      }
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
}
</style>