import Toast from './toast.vue'
let currentToast = null
export default {
    install (Vue, options) {
      Vue.prototype.$toast = function (message,toastOptions) {
        if (currentToast) {
          currentToast.close()
        }
        function clearToast() {
          currentToast = null
        }
        currentToast = createToast(Vue,message,toastOptions,clearToast)
      }
    }
  }

//   hander,

function createToast(Vue,message,toastOptions,clearToast){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData: {
            closeButton: toastOptions.closeButton,
            dangerHtml: toastOptions.dangerHtml,
            position: toastOptions.position,
        },
    })
    toast.$on('close',clearToast)
    console.log(toastOptions,'toastOptions');
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast;
}
