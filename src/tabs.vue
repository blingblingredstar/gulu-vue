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
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn('tabs子组件应为tabs-head与tabs-body，这里没有子组件')
      }
    },
    emitSelectedTab() {
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
  },
  mounted() {
    this.checkChildren()
    this.emitSelectedTab()
  },
}
</script>

<style lang="scss" scoped>
</style>