<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluCollapse',
}
</script>

<style lang="scss" scoped>
@import './_variables.scss';
$grey: #ddd;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>