export default {
  /**
   *
   * @param {Vue} Vue
   * @param {*} options
   */
  install(Vue, options) {
    /**
     * @param {String} message
     */
    Vue.prototype.$toast = function(message) {
      console.log(message)
    }
  },
}
