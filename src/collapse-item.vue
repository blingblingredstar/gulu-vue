<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">{{ title }}</div>
    <div class="content" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluCollapseItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
    }
  },
  inject: ['eventBus'],
  methods: {
    toggle() {
      if (this.open) {
        this.close()
      } else {
        this.open = true
        this.eventBus.$emit('update:selected', this.name)
      }
    },
    close() {
      this.open = false
    },
  },
  mounted() {
    this.eventBus.$on('update:selected', (name) => {
      if (name !== this.name) {
        this.close()
      }
    })
  },
}
</script>

<style lang="scss" scoped>
@import './_variables.scss';
$grey: #ddd;
.collapse-item {
  > .title {
    border: 1px solid $grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 0.5em;
  }

  > .content {
    padding: 0 0.5em;
  }

  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }

  &:last-child {
    > .title {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
}
</style>