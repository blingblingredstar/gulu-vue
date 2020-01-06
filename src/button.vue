<template>
  <button :class="['g-button',`icon-${iconPosition}`]">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`" />
    </svg>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    icon: String,
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return ["left", "right"].includes(value);
      }
    }
  }
};
</script>

<style lang="scss">
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

  > .icon {
    order: 1;
    margin-left: 0;
    margin-right: 0.2em;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
    > .icon {
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