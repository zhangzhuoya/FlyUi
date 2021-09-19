import Toast from './toast.vue'
export default {
    install(Vue,options) {
        Vue.prototype.$toast = function(message) {
            console.log(Toast);
            const Constructor = Vue.extend(Toast);
            let toast = new Constructor()
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
            console.log(toast);
            console.log('i am toast');
        }
    }
}