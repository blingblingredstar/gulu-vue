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

// Unit test
import { expect } from "chai";

const testElement = document.getElementById("test");

{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings"
    }
  });
  vm.$mount();
  let useElement = vm.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#i-" + "settings");
  vm.$el.remove();
  vm.$destroy();
}

{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings",
      loading: true
    }
  });
  vm.$mount();
  let useElement = vm.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#i-" + "loading");
  vm.$el.remove();
  vm.$destroy();
}

{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings"
    }
  });
  vm.$mount(div);
  let svgElement = vm.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svgElement);
  expect(order).to.eq("1");
  vm.$el.remove();
  vm.$destroy();
}

{
  const div = document.createElement("div");
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings",
      iconPosition: "right"
    }
  });
  vm.$mount(div);
  let svgElement = vm.$el.querySelector("svg");
  let { order } = window.getComputedStyle(svgElement);
  expect(order).to.eq("2");
  vm.$el.remove();
  vm.$destroy();
}
