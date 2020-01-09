<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluToast',
}
</script>
<style lang="scss" scoped>
@import './_variables.scss';

.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  line-height: 1.8;
  height: $toast-height;
  display: flex;
  align-items: center;
  background: $toast-background-color;
  color: $toast-color;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: $border-radius;
  box-shadow: 0px 0px 3px 0px $box-shadow-color;
}
</style>