<template>
  <div class="tabs-head">
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
  created() {
    this.eventBus.$on('update:selectedTab', (name, tabItem) => {
      console.log(name)
      console.log('tab-item :', tabItem)
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

  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $tabs-item-color;
    width: 50px;
  }

  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>