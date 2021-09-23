<template>
    <div class="toast" ref="toast" :class="toastClasses">
        <div v-if="!dangerHtml">
            <slot></slot>
        </div>
        <div v-else class="dangerHtml" v-html="$slots.default[0]">
        </div>
        <div class="line" v-if="closeButton.text" ref="line"></div>
        <div class="close" v-if="closeButton.text" @click="onClickClose" >{{closeButton.text}}</div>
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
        dangerHtml: {
            type: Boolean,
            default: false
        },
        closeButton: {
            type: Object,
            default:()=>{
                return {
                    text:"",
                    callback: undefined
                }
            }
        },
        position: {
            type: String,
            validator: function(value) {
                return ['top','center','bottom'].indexOf(value)>=0
            }
        }
    },
    mounted() {
        this.handleClose();
        this.updateStyle();
        console.log(this.position);
    },
    computed: {
        toastClasses() {
            return {[`position-${this.position}`]: true}
        }
    },
    methods: {
        close() {
            this.$el.remove();
            this.$destroy();
            this.$emit('close')
        },
        updateStyle(){
            this.$nextTick(()=>{
                console.log(this.$refs.toast.getBoundingClientRect().height,'000');
                this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
            })
        },
        handleClose() {
            if (this.autoClose) {
                setTimeout(()=>{
                    this.close()
                },this.autoDelay*1000)
            }
        },
        onClickClose() {
            if (this.closeButton?.callback && typeof this.closeButton.callback ==='function') {
                this.closeButton.callback()
            }
            this.close()
        }
    }
}
</script>

<style lang="scss" scoped>
  $font-size: 14px;
  $toast-height: 40px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0, 0, 0, 0.75);
  .toast {
    font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
    position: fixed; left: 50%; transform: translateX(-50%); display: flex;
    flex-wrap: nowrap;
    padding: 0 16px;
    color: white; align-items: center; background: $toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
    &.position-top {
        position: fixed;
        top: 0;
    }
    &.position-bottom {
        position: fixed;
        bottom: 0;
    }
    &.position-center {
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        transform: translateX(-50%);
    }
    .message {
      padding: 8px 0;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
      cursor: pointer;
    }
    .line {
      border-left: 1px solid #666;
      margin-left: 16px;
    }
  }
</style>