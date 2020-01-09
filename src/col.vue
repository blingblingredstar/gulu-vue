<template>
  <div :class="colClass" :style="colStyle">
    <slot />
  </div>
</template>

<script>
const validator = (value) => {
  const keys = Object.keys(value)
  const props = ['span', 'offset']
  let isValid = true

  keys.forEach((key) => {
    if (!props.includes(key)) {
      isValid = false
    }
  })

  return isValid
}

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
    pad: { type: Object, validator },
    narrowPc: { type: Object, validator },
    pc: { type: Object, validator },
    widePc: { type: Object, validator },
  },
  computed: {
    colClass() {
      const { span, offset, pad, narrowPc, pc, widePc } = this

      return [
        'col',
        span && `col-${span}`,
        offset && `offset-${offset}`,

        pad && pad.span && `col-pad-${pad.span}`,
        narrowPc && narrowPc.span && `col-narrow-pc-${narrowPc.span}`,
        pc && pc.span && `col-pc-${pc.span}`,
        widePc && widePc.span && `col-wide-pc-${widePc.span}`,
      ]
    },
    colStyle() {
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
  /* pad */
  @media (min-width: 577px) and (max-width: 768px) {
    $class-prefix: col-pad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        flex-basis: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-pad-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-right: ($n / 24) * 100%;
      }
    }
  }
  /* narrow-pc */
  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        flex-basis: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-narrow-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-right: ($n / 24) * 100%;
      }
    }
  }
  /* pc */
  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        flex-basis: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-right: ($n / 24) * 100%;
      }
    }
  }
  /* wide-pc */
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        flex-basis: ($n / 24) * 100%;
      }
    }

    $class-prefix: offset-wide-pc-;
    @for $n from 0 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-right: ($n / 24) * 100%;
      }
    }
  }
}
</style>
