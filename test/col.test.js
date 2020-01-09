import Vue from 'vue'
import Row from '../src/row.vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
  it('组件存在', () => {
    expect(Col).to.be.exist
  })

  describe('props', () => {
    let div
    const Constructor = Vue.extend(Col)
    let vm

    beforeEach(() => {
      div = document.createElement('div')
      document.body.appendChild(div)
    })

    afterEach(() => {
      vm.$destroy()
      div.remove()
    })

    const basicProps = [
      { name: 'span', prefix: 'col', value: 1 },
      { name: 'offset', prefix: 'offset', value: 1 },
    ]

    basicProps.forEach((prop) => {
      it(`接收${prop}属性`, () => {
        vm = new Constructor({
          propsData: {
            [prop.name]: prop.value,
          },
        }).$mount(div)
        expect(Array.from(vm.$el.classList)).to.include(
          `${prop.prefix}-${prop.value}`,
        )
      })
    })

    const props = [
      { propName: 'pad', infix: 'pad', propValue: { span: 1, offset: 1 } },
      {
        propName: 'narrowPc',
        infix: 'narrow-pc',
        propValue: { span: 1, offset: 1 },
      },
      { propName: 'pc', infix: 'pc', propValue: { span: 1, offset: 1 } },
      {
        propName: 'widePc',
        infix: 'wide-pc',
        propValue: { span: 1, offset: 1 },
      },
    ]
    props.forEach((item) => {
      it(`接收${item.propName}`, () => {
        vm = new Constructor({
          propsData: {
            [item.propName]: item.propValue,
          },
        }).$mount(div)
        expect([...vm.$el.classList]).to.include(
          `col-${item.infix}-${item.propValue.span}`,
        )
        expect([...vm.$el.classList]).to.include(
          `offset-${item.infix}-${item.propValue.offset}`,
        )
      })
    })
  })
})
