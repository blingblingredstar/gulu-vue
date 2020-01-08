import Vue from 'vue'

import Button from './button.vue'
import ButtonGroup from './button-group.vue'
import Icon from './icon.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

const app = new Vue({
  el: '#app',
  data: {
    loading1: true,
    loading2: false,
    loading3: false,
    message: 'Hello Vue',
  },
  methods: {
    /**
     *
     * @param {Event} e
     */
    inputChange(e) {
      console.log(e.target.value)
    },
  },
})
