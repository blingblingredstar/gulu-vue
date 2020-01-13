<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsHead',
  inject: ['eventBus'],
}
</script>

<style lang="scss" scoped>
@import './_variables.scss';
.tabs-head {
  display: flex;
  min-height: $tabs-head-height;
  justify-content: flex-start;
  align-items: center;

  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>