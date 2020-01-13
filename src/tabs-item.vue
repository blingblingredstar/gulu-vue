<template>
  <div :class="tabsItemClasses" @click="handleTabsItemClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsItem',
  data() {
    return {
      active: false,
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: 'true',
    },
  },
  computed: {
    tabsItemClasses() {
      return ['tabs-item', this.active && 'active']
    },
  },
  inject: ['eventBus'],
  methods: {
    handleTabsItemClick() {
      this.eventBus.$emit('update:selectedTab', this.name)
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

<style scoped lang="scss">
.tabs-item {
  flex-shrink: 0;
  padding: 0 2em;

  &.active {
    background: #ccc;
  }
}
</style>