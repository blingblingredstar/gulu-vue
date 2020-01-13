<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

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
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  mounted() {
    this.$children.forEach((child) => {
      if (child.$options.name === 'GuluTabsHead') {
        child.$children.forEach((item) => {
          if (
            item.$options.name === 'GuluTabsItem' &&
            item.name === this.selectedTab
          ) {
            this.eventBus.$emit('update:selectedTab', this.selectedTab, item)
          }
        })
      }
    })
  },
}
</script>

<style lang="scss" scoped>
</style>