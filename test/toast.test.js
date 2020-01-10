import Vue from 'vue'
import Toast from '../src/toast.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
  it('存在', () => {
    expect(Toast).to.be.exist
  })

  describe('props', () => {
    let div
    const Constructor = Vue.extend(Toast)

    beforeEach(() => {
      div = document.createElement('div')
      document.body.appendChild(div)
    })
    afterEach(() => {
      div.remove()
    })

    it('接收autoClose/autoCloseDelay', (done) => {
      const vm = new Constructor({
        propsData: {
          autoClose: true,
          autoCloseDelay: 1000,
        },
      }).$mount(div)

      vm.$on('toast:close', () => {
        expect(document.body.contains(vm.$el)).to.be.false
        done()
      })
    })

    it('接收closeButton', () => {
      const callback = sinon.fake()
      const text = 'close'
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text,
            callback,
          },
        },
      }).$mount(div)
      const closeButton = vm.$el.querySelector('.close')
      expect(closeButton.innerText).to.equal(text)
      setTimeout((done) => {
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      }, 1000)
    })

    it('接收enableHtml', () => {
      const testId = 'test'
      const vm = new Constructor({
        propsData: {
          enableHtml: true,
        },
      })
      vm.$slots.default = [`<strong id="${testId}">hi</strong>`]
      vm.$mount(div)
      expect(vm.$el.querySelector(`#${testId}`)).to.be.exist
    })

    it('接收position', () => {
      const positions = ['top', 'bottom', 'middle']
      positions.forEach((position) => {
        const vm = new Constructor({
          propsData: {
            position,
          },
        }).$mount()

        expect(Array.from(vm.$el.classList)).include(`position-${position}`)
      })
    })
  })
})
