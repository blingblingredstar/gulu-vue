import Vue from 'vue'
import Row from '../src/row.vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('组件存在', () => {
    expect(Row).to.be.exist
  })

  describe('props', () => {
    let div
    beforeEach(() => {
      div = document.createElement('div')
      document.body.appendChild(div)
    })

    afterEach(() => {
      div.remove()
    })

    it('接收gutter属性', (done) => {
      Vue.component('g-row', Row)
      Vue.component('g-col', Col)

      div.innerHTML = `
       <g-row gutter="20">
         <g-col></g-col>
       </g-row>
     `
      const vm = new Vue({
        el: div,
      })

      setTimeout(() => {
        const row = vm.$el.querySelector('.row')
        expect(getComputedStyle(row).marginLeft).to.equal('-10px')
        expect(getComputedStyle(row).marginRight).to.equal('-10px')

        const cols = vm.$el.querySelectorAll('.col')
        cols.forEach((col) => {
          expect(getComputedStyle(col).paddingLeft).to.equal('10px')
          expect(getComputedStyle(col).paddingRight).to.equal('10px')
        })
        vm.$el.remove()
        vm.$destroy()
        done()
      }, 0)
    })
    it('接收align属性', () => {
      const Constructor = Vue.extend(Row)
      const vm = new Constructor({
        propsData: {
          align: 'right',
        },
      }).$mount(div)

      expect(getComputedStyle(vm.$el).justifyContent).to.equal('flex-end')
      vm.$destroy()
    })
  })
})
