<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabs',
  props: {
    selectedTab: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].includes(value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
</style>