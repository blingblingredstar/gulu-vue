<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'GuluCollapse',
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  mounted() {
    this.eventBus.$on('update:addSelected', (name) => {
      let selected = [...this.selected]
      if (this.single) {
        selected = [name]
      } else {
        selected.push(name)
      }
      this.$emit('update:selected', selected)
      this.eventBus.$emit('update:selected', selected)
    })
    this.eventBus.$on('update:removeSelected', (name) => {
      const index = this.selected.indexOf(name)
      this.selected.splice(index, 1)
      this.$emit('update:selected', this.selected)
      this.eventBus.$emit('update:selected', this.selected)
    })
  },
}
</script>

<style lang="scss" scoped>
@import './_variables.scss';
$grey: #ddd;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
}
</style>