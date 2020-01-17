<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <ul>
      <li v-for="name in names" :key="name">
        <g-icon :name="name" />
        - {{name}}
      </li>
    </ul>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import { Icon as GIcon } from 'gulu-vue'
import 'gulu-vue/dist/index.css'

export default {
  components: {
    GIcon,
  },
  data() {
    return {
      names: [
        'right',
        'left',
        'down',
        'thumbs-up',
        'download',
        'settings',
        'loading',
        'info',
        'error',
      ],
      content: `
          <g-icon name="settings" />
      `
        .replace(/^ {8}/gm, '')
        .trim(),
    }
  },
}
</script>
<style lang="scss" scoped>
ul,
li {
  list-style: none;
}
li {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.4em;
}
.g-icon {
  width: 2em;
  height: 2em;
  margin-right: 0.4em;
}
</style>