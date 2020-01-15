<template>
  <div class="popover" @click.stop="handleClick">
    <div class="content-wrapper" v-if="isVisable" @click.stop>
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
      console.log('popover')
      console.log(this.isVisable)
      if (this.isVisable) {
        setTimeout(() => {
          const eventHandler = () => {
            this.isVisable = false
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        }, 0)
      }
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

