<template>
    <div class="toast">
        <slot></slot>
        <div v-if="closeButton.text">{{closeButton.text}}</div>
    </div>
</template>

<script>
export default {
    name:"FlyToast",
    // data() {
    //     return {
    //         isAutoVisible: true
    //     }
    // },
    props: {
        autoClose: {
            type: Boolean,
            default: true
        },
        autoDelay: {
            type: Number,
            default: 1
        },
        closeButton: {
            type: Object,
            default:()=>{
                return {
                    text:"",
                    callback(toast){
                        toast.close()

                    }
                }
            }
        }
    },
    mounted() {
        if (this.autoClose) {
            setTimeout(()=>{
                this.close()
            },this.autoDelay*1000)
        }
    },
    methods: {
        close() {
            this.$el.remove();
            this.$destroy();
        }
    }
}
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: #edf2fc;
    .toast {
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        background: $toast-bg;
        display: flex;
        align-items: center;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
        padding: 0 16px;
        transition: opacity .3s,transform .4s,top .4s;
        display: flex;
        box-sizing: border-box;
    }
</style>