import Vue from 'vue'

import Button from './button.vue'
import ButtonGroup from './button-group.vue'
import Icon from './icon.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsItem from './tabs-item.vue'
import TabsBody from './tabs-body.vue'
import TabsPanel from './tabs-panel.vue'
import Popover from './popover.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'

import plugin from './plugin'

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-icon', Icon)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-panel', TabsPanel)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

Vue.use(plugin)

const str =
  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem veniam sunt eligendi doloribus dolores tempora. Blanditiis inventore quo quibusdam voluptate ea molestias, dicta sequi distinctio, enim, sapiente repudiandae itaque accusantium.'

const app = new Vue({
  el: '#app',
  data: {
    selectedTab: '2',
  },
})
