<template>
  <div :class="['wrapper', {error}]">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly" />
    <template v-if="error">
      <g-icon name="error" class="icon-error"></g-icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon.vue'

export default {
  name: 'GuluInput',
  components: {
    'g-icon': Icon,
  },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
/* :root {
  --button-height: 32px;
  --button-bg: #fff;
  --button-bg-active: #eee;
  --font-size: 14px;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
} */
$red: #f1453d;
$height: 32px;
$color-disabled: #9c9c9c;
$color-error: $red;
$border-color: #999;
$border-color-hover: #666;
$border-color-error: $red;
$border-color-disabled: #9c9c9c;
$border-radius: 4px;
$padding: 0 8px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 0.4em;
  }

  > input {
    height: $height;
    padding: $padding;
    font-size: inherit;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      color: $color-disabled;
      border-color: $border-color-disabled;
      cursor: not-allowed;
    }
    &[readonly] {
      color: $color-disabled;
      cursor: default;
    }
  }
  &.error {
    > input {
      border-color: $border-color-error;
    }
  }

  .icon-error {
    fill: $red;
  }

  .error-message {
    color: $color-error;
  }
}
</style>