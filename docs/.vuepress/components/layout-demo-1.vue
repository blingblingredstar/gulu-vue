<template>
  <div style="padding-top: 16px;">
    <h2>布局</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-layout style="color: white; margin-bottom:50px;">
      <g-header style="height: 50px; background:#333;">header</g-header>
      <g-content style="height: 100px; background:#999;">content</g-content>
      <g-footer style="height: 50px; background:#666;">footer</g-footer>
    </g-layout>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import { Layout as GLayout } from 'gulu-vue'
import { Header as GHeader } from 'gulu-vue'
import { Footer as GFooter } from 'gulu-vue'
import { Content as GContent } from 'gulu-vue'
import { Sider as GSider } from 'gulu-vue'
import 'gulu-vue/dist/index.css'

export default {
  components: { GLayout, GHeader, GFooter, GContent, GSider },
  data() {
    return {
      content: `
          <g-layout style="color: white; margin-bottom:50px;">
            <g-header style="height: 50px; background:#333;">
              header
            </g-header>
            <g-content style="height: 100px; background:#999;">
              content
            </g-content>
            <g-footer style="height: 50px; background:#666;">
              footer
            </g-footer>
          </g-layout>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
    }
  },
}
</script>