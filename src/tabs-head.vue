<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <span class="line" ref="line"></span>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsHead',
  inject: ['eventBus'],
  methods: {
    updateLinePosition(selectedTab) {
      const { width, left } = selectedTab.$el.getBoundingClientRect()
      const { left: headLeft } = this.$refs.head.getBoundingClientRect()
      this.$refs.line.style.width = width + 'px'
      this.$refs.line.style.left = left - headLeft + 'px'
    },
  },
  mounted() {
    this.eventBus.$on('update:selectedTab', (name, tabItem) => {
      this.updateLinePosition(tabItem)
    })
  },
}
</script>

<style lang="scss" scoped>
@import './_variables.scss';
.tabs-head {
  display: flex;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid #ccc;

  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $tabs-item-color;
    transition: all 0.1s;
  }

  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>