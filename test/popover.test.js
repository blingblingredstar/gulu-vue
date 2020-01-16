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

    it('设置position', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
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

    it('设置trigger', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)

      const trigger = 'hover'
      const textContent = `弹出内容`
      div.innerHTML = `
      <g-popover trigger="${trigger}">
        <template v-slot:content>
          <div>
            ${textContent}
          </div>
        </template>
        <button>点我</button>
      </g-popover>
      `

      const vm = new Vue({
        el: div,
      })

      const event = new Event('mouseenter')
      vm.$el.querySelector('.popover').dispatchEvent(event)

      vm.$nextTick(() => {
        expect(vm.$el.querySelector('.content-wrapper')).to.be.exist
      })
    })
  })
})
