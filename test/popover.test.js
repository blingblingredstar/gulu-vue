import Vue from 'vue'
import Popover from '../src/popover.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在', () => {
    expect(Popover).to.be.exist
  })

  describe('接收props', () => {
    Vue.component('g-popover', Popover)
    let div
    beforeEach(() => {
      div = document.createElement('div')
      document.body.appendChild(div)
    })
    afterEach(() => {
      div.remove()
    })
    it('设置position', () => {
      const position = 'bottom'
      div.innerHTML = `
      <g-popover position="${position}">
        <template v-slot:content>
          <div>
            弹出内容
          </div>
        </template>
        <button>点我</button>
      </g-popover>
      `

      const vm = new Vue({
        el: div,
      })
      vm.$el.querySelector('button').click()

      vm.$nextTick(() => {
        const contentWrapper = vm.$el.querySelector('.content-wrapper')
        expect([...contentWrapper.classList]).contain(`position-${position}`)
      })
    })
  })
})
