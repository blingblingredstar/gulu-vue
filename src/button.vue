<template>
  <button :class="['g-button',`icon-${iconPosition}`]" @click="$emit('click')">
    <g-icon v-if="loading" class="loading" name="loading"></g-icon>
    <g-icon v-else-if="icon" :name="icon"></g-icon>
    <span class="content">
      <slot />
    </span>
  </button>
</template>

<script>
import Icon from './icon.vue'

export default {
  name: 'GuluButton',
  components: { gIcon: Icon },
  props: {
    icon: String,
    loading: { type: Boolean, default: false },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  animation: spin 0.8s infinite linear;
}

.g-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  > .g-icon {
    order: 1;
    margin-left: 0;
    margin-right: 0.2em;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .g-icon {
      order: 2;
      margin-left: 0.2em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }

  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    background-color: var(--button-bg-active);
  }

  &:focus {
    outline: none;
  }
}
</style>