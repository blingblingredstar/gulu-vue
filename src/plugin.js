import Toast from './toast.vue'
export default {
  install(Vue, options) {
    /**
     * @param {String} message
     * 生成toast组件并添加到document.body中
     */
    Vue.prototype.$toast = function(message, { closeButton, enableHtml } = {}) {
      const Constructor = Vue.extend(Toast)
      const toast = new Constructor({
        propsData: {
          closeButton,
          enableHtml,
        },
      })

      toast.$slots.default = [message]

      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  },
}
