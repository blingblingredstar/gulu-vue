<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-tabs :selectedTab="selected">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import { Tabs as GTabs } from 'gulu-vue'
import { TabsBody as GTabsBody } from 'gulu-vue'
import { TabsHead as GTabsHead } from 'gulu-vue'
import { TabsItem as GTabsItem } from 'gulu-vue'
import { TabsPanel as GTabsPane } from 'gulu-vue'
import 'gulu-vue/dist/index.css'

export default {
  components: { GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane },
  data() {
    return {
      selected: '1',
      content: `
          data:{
            selected: '1'
          }
          <g-tabs :selected="selected">
            <g-tabs-head>
              <g-tabs-item name="1">1</g-tabs-item>
              <g-tabs-item name="2">2</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
              <g-tabs-pane name="1">content 1</g-tabs-pane>
              <g-tabs-pane name="2">content 2</g-tabs-pane>
            </g-tabs-body>
          </g-tabs>
      `
        .replace(/^ {8}/gm, '')
        .trim(),
    }
  },
}
</script>