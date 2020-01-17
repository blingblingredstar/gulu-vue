<template>
  <div style="padding-top: 16px;">
    <h2>布局</h2>
    <p>
      <strong>预览</strong>
    </p>

    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-header style="height: 50px; background:#333;">header</g-header>
      <g-layout>
        <g-sider style="height: 100px; background:#ddd; width:200px; color: #999;">sider</g-sider>
        <g-content style="height: 100px; background:#666;">content</g-content>
      </g-layout>
      <g-footer style="height: 50px; background:#333;">footer</g-footer>
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
          <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-header style="height: 50px; background:#333;">
              header
            </g-header>
            <g-layout>
              <g-sider style="height: 100px; background:#999; width:200px; color: black;">
                sider
              </g-sider>
              <g-content style="height: 100px; background:#666;">
                content
              </g-content>
            </g-layout>
            <g-footer style="height: 50px; background:#333;">
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