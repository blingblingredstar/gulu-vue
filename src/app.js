import Vue from "vue";

import Button from "./button.vue";
import ButtonGroup from "./button-group.vue";
import Icon from "./icon.vue";

Vue.component("g-button", Button);
Vue.component("g-button-group", ButtonGroup);
Vue.component("g-icon", Icon);

const app = new Vue({
  el: "#app",
  data: {
    loading1: true,
    loading2: false,
    loading3: false
  }
});
