<template>
  <transition name="slide">
    <div class="sider" v-if="isVisible">
      <button @click="isVisible = !isVisible">close</button>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'GuluSider',
  data() {
    return {
      isVisible: true,
    }
  },
}
</script>

<style lang="scss" scoped>
.sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: margin-left 0.3s;
}
.slide-enter,
.slide-leave-to {
  margin-left: -200px;
}
</style>