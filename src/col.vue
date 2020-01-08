<template>
  <div :class="['col', {['col-'+ span]: span}]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GuluCol',
  props: {
    span: {
      type: [Number, String],
      validator(value) {
        if (typeof value === 'string') {
          value = +value
        }
        return value > 0 && value <= 24
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: red;
  flex-basis: 50%;
  border: 1px solid blue;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      flex-basis: ($n / 24) * 100%;
    }
  }
}
</style>
