<template>
  <div :class="['wrapper', {error}]">
    <input
      :value="value"
      type="text"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    />
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
@import './_variables.scss';
.wrapper {
  font-size: $input-font-size;
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