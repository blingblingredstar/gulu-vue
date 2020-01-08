<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>

<script>
import './svg'
export default {
  name: 'GuluIcon',
  props: {
    name: {
      type: String,
      validator(value) {
        return [
          'right',
          'left',
          'down',
          'thumbs-up',
          'download',
          'settings',
          'loading',
          'info',
          'error',
        ].includes(value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
}
</style>