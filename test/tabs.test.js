import Vue from 'vue'
import Tabs from '../src/tabs.vue'
import TabsHead from '../src/tabs-head.vue'
import TabsItem from '../src/tabs-item.vue'
import TabsBody from '../src/tabs-body.vue'
import TabsPanel from '../src/tabs-panel.vue'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-panel', TabsPanel)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在', () => {
    expect(Tabs).to.be.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(Tabs)

    it('接收selectedTab', (done) => {
      const selectedTab = 'news'

      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = ` 
     <g-tabs selected-tab="${selectedTab}">
        <g-tabs-head>
          <g-tabs-item name="home"> 首页 </g-tabs-item>
          <g-tabs-item name="news">新闻</g-tabs-item>
          <g-tabs-item name="about">关于</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-panel name="home">首页 内容</g-tabs-panel>
          <g-tabs-panel name="news">新闻 内容</g-tabs-panel>
          <g-tabs-panel name="about">关于 内容</g-tabs-panel>
        </g-tabs-body>
      </g-tabs>
    `
      const vm = new Vue({
        el: div,
      })
      vm.$nextTick(() => {
        const newsItem = vm.$el.querySelector(
          `.tabs-item[data-name="${selectedTab}"]`,
        )
        const newsPanel = vm.$el.querySelector('.tabs-panel')

        expect([...newsItem.classList]).contain('active')
        expect([...newsPanel.classList]).contain('active')

        done()
      })
    })
  })
})
