import Toast from './toast.vue'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message, toastOptions = {}) {
      if (currentToast) {
        currentToast.close()
      }
      currentToast = createToast({ Vue, message, propsData: toastOptions })
    }
  },
}

/**
 * 帮助函数，创建一个Toast实例并挂载到document.body上
 * @param {Object} param0
 * @returns {Vue}
 */
function createToast({ Vue, message, propsData }) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({
    propsData,
  })

  toast.$slots.default = [message]

  toast.$mount()
  document.body.appendChild(toast.$el)

  return toast
}
