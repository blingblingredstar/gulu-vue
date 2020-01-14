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

describe('TabsItem', () => {
  it('存在', () => {
    expect(TabsItem).to.be.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(TabsItem)

    it('接收name', () => {
      const name = 'news'
      const vm = new Constructor({
        propsData: {
          name,
        },
      }).$mount()

      expect(vm.$el.getAttribute('data-name')).to.equal(name)
    })

    it('接收disabled', () => {
      const vm = new Constructor({
        propsData: {
          name,
          disabled: true,
        },
      }).$mount()

      expect([...vm.$el.classList]).contain('disabled')

      const callback = sinon.fake()
      vm.$on('click', callback)
      vm.$el.click()
      expect(callback).not.to.be.called
    })
  })
})
