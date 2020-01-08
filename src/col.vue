<template>
  <div :class="['col', span && `col-${span}`, offset && `offset-${offset}`]" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'GuluCol',
  data() {
    return {
      gutter: undefined,
    }
  },
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
    offset: {
      type: [Number, String],
      validator(value) {
        if (typeof value === 'string') {
          value = +value
        }
        return value > 0 && value <= 24
      },
    },
  },
  computed: {
    style() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  flex-basis: 50%;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      flex-basis: ($n / 24) * 100%;
    }
  }

  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-right: ($n / 24) * 100%;
    }
  }
}
</style>
