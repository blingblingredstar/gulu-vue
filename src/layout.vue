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
    console.log('mounted')
    console.log(
      this.$children.forEach((child) => {
        console.log(child.$options.name)
        if (child.$options.name === 'GuluSider') {
          this.layoutClasses.push('has-sider')
        }
      }),
    )
  },
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid red;

  &.has-sider {
    flex-direction: row;
  }
}
</style>