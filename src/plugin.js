import Toast from './toast.vue'
export default {
    install (Vue, options) {
      Vue.prototype.$toast = function (message) {
        let Constructor = Vue.extend(Toast)
        let toast = new Constructor({
            propsData: {
                closeButton: {
                    text: '我知道了',
                    callback() {
                        console.log('chuandi de callback');
                    }
                }
            }
        })
        toast.$slots.default = [message]
        toast.$mount()
        document.body.appendChild(toast.$el)
      }
    }
  }