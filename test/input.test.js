import Vue from 'vue'
import Input from '../src/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('组件存在', () => {
    expect(Input).to.exist
  })

  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm

    afterEach(() => {
      vm.$destroy()
    })

    it('接收value', () => {
      const value = '1234'
      vm = new Constructor({
        propsData: {
          value,
        },
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal(value)
    })

    it('接收disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true,
        },
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })

    it('接收readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true,
        },
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })

    it('接收error信息', () => {
      const errorMessage = '姓名不能为空'
      vm = new Constructor({
        propsData: {
          error: errorMessage,
        },
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-' + 'error')
      const spanElement = vm.$el.querySelector('span')
      expect(spanElement.textContent).to.equal(errorMessage)
    })
  })

  describe('events', () => {
    const Constructor = Vue.extend(Input)
    let vm

    afterEach(() => {
      vm.$destroy()
    })

    const events = ['change', 'input', 'focus', 'blur']

    events.forEach((eventName) => {
      it(`支持${eventName}事件`, () => {
        vm = new Constructor({}).$mount()

        const callback = sinon.fake()
        vm.$on(eventName, callback)

        // 模拟input事件
        const event = new Event(eventName)
        const inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)

        expect(callback).to.have.been.calledWith(event)
      })
    })
  })
})
