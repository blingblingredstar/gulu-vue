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
      selectedData: this.selected,
    }
  },
  provide() {
    return {
      eventBus: this.eventBus,
    }
  },
  mounted() {
    this.eventBus.$on('update:addSelected', (name) => {
      if (this.single) {
        this.selectedData = [name]
      } else {
        this.selectedData.push(name)
      }
      this.$emit('update:selected', this.selectedData)
      this.eventBus.$emit('update:selected', this.selectedData)
    })
    this.eventBus.$on('update:removeSelected', (name) => {
      const index = this.selectedData.indexOf(name)
      this.selectedData.splice(index, 1)
      this.$emit('update:selected', this.selectedData)
      this.eventBus.$emit('update:selected', this.selectedData)
    })
    this.eventBus.$emit('update:selected', this.selected)
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