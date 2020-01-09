<template>
  <div :class="layoutClasses">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GuluLayout',
  data() {
    return {
      layoutClasses: ['layout'],
    }
  },
  mounted() {
    this.$children.forEach((child) => {
      if (child.$options.name === 'GuluSider') {
        this.layoutClasses.push('has-sider')
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &.has-sider {
    flex-direction: row;
  }
}
</style>