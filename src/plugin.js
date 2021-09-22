import Toast from './toast.vue'
export default {
    install (Vue, options) {
      Vue.prototype.$toast = function (message,toastOptions) {
        let Constructor = Vue.extend(Toast)
        let toast = new Constructor({
            propsData: {
                closeButton: toastOptions.closeButton,
                dangerHtml: toastOptions.dangerHtml,
                position: toastOptions.position
            }
        })
        console.log(toastOptions,'toastOptions');
        toast.$slots.default = [message]
        toast.$mount()
        document.body.appendChild(toast.$el)
      }
    }
  }