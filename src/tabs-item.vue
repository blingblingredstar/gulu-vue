<template>
  <div :class="tabsItemClasses" @click="handleTabsItemClick" :data-name="name">
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
      return ['tabs-item', this.active && 'active', this.disabled && 'disabled']
    },
  },
  inject: ['eventBus'],
  methods: {
    handleTabsItemClick() {
      if (this.disabled) {
        return undefined
      }
      if (this.eventBus) {
        this.eventBus.$emit('update:selectedTab', this.name, this)
      }
      this.$emit('click', this)
    },
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on('update:selectedTab', (name) => {
        const isSelected = name === this.name
        this.active = isSelected
      })
    }
  },
}
</script>

<style scoped lang="scss">
@import '_variables.scss';
.tabs-item {
  flex-shrink: 0;
  padding: 0 2em;
  min-height: $tabs-item-height;
  display: flex;
  align-items: center;
  cursor: pointer;

  &.active {
    color: $tabs-item-color;
    font-weight: 700;
  }
  &.disabled {
    color: $tabs-item-color-disabled;
    cursor: not-allowed;
  }
}
</style>