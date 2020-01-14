<template>
  <div class="popover" @click="handleClick">
    <div class="content-wrapper" v-if="isVisable">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluPopover',
  data() {
    return {
      isVisable: false,
    }
  },
  methods: {
    handleClick() {
      this.isVisable = !this.isVisable
    },
  },
}
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid red;
    box-shadow: 0 0 3px rbga(0, 0, 0, 0.5);
  }
}
</style>

