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
import chai, { expect } from "chai";
import spies from "chai-spies";
chai.use(spies);

const testElement = document.getElementById("test");

{
  // 测试是否能添加icon
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
  // 测试loading是否能正常使用
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
  // 测试样式是否正常
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
  // 测试icon位置为右时样式是否正常
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

{
  // 测试点击事件
  // 使用chai-spy进行mock
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings"
    }
  });
  vm.$mount();

  let spy = chai.spy(() => {});
  vm.$on("click", spy);
  vm.$el.click();
  expect(spy).to.have.been.called();
  vm.$el.remove();
  vm.$destroy();
}
