<template>
  <div :class="tabsPanelClasses" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsPanel',
  inject: ['eventBus'],
  data() {
    return {
      active: false,
    }
  },
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    tabsPanelClasses() {
      return ['tabs-panel', this.active && 'active']
    },
  },
  created() {
    this.eventBus.$on('update:selectedTab', (name) => {
      const isSelected = name === this.name
      this.active = isSelected
    })
  },
}
</script>

<style lang="scss" scoped>
.tabs-panel {
  &.active {
    background: #ccc;
  }
}
</style>