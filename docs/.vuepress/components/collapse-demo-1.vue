<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-collapse :selected="['2']">
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
    </g-collapse>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import { Collapse as GCollapse } from 'gulu-vue'
import { CollapseItem as GCollapseItem } from 'gulu-vue'

import 'gulu-vue/dist/index.css'

export default {
  components: {
    GCollapse,
    GCollapseItem,
  },
  data() {
    return {
      content: `
        <g-collapse :selected="['2']">
          <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
          <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
          <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
    }
  },
}
</script>
<style lang="scss" scoped>
</style>