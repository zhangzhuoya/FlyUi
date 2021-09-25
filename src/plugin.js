import Toast from './toast.vue'
let currentToast = null
export default {
    install (Vue, options) {
      Vue.prototype.$toast = function (message,propsData) {
        if (currentToast) {
          currentToast.close()
        }
        function clearToast() {
          currentToast = null
        }
        currentToast = createToast(Vue,message,propsData,clearToast)
      }
    }
  }

//   hander,

function createToast(Vue,message,propsData,clearToast){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$on('close',clearToast)
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast;
}
