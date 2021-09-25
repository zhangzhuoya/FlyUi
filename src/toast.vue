<template>
    <div class="wrapper" ref="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <div class="message">
                <div v-if="!dangerHtml">
                <slot></slot>
                </div>
                <div v-else class="dangerHtml" v-html="$slots.default[0]">
            </div>
            </div>
            <div class="line" v-if="closeButton.text" ref="line"></div>
            <span class="close" v-if="closeButton.text" @click="onClickClose" >{{closeButton.text}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:"FlyToast",
    props: {
        autoClose: {
            type: [Number,Boolean],
            default: 5,
            validator: function (value) {
                return typeof value === false ||typeof value === 'number' || typeof value === true
            }
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
    },
    computed: {
        toastClasses() {
            return {[`position-${this.position}`]: true}
        }
    },
    methods: {
        close() {
            this.$el.remove();
            this.$emit('close')
            this.$destroy();
        },
        updateStyle(){
            this.$nextTick(()=>{
                this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
            })
        },
        handleClose() {
            if (this.autoClose) {
                setTimeout(()=>{
                    this.close()
                },this.autoClose *1000)
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
  @keyframes fade-top {
      0% {
          opacity: 0; transform: translateY(-100%);
      }
      100% {
          opacity: 1; transform: translateY(0%);
      }
  }
  @keyframes fade-bottom {
      0% {
          opacity: 0; transform: translateY(100%);
      }
      100% {
          opacity: 1; transform: translateY(0%);
      }
  }
  @keyframes fade-in {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
  }
  .wrapper {
        position: fixed; left: 50%; transform: translateX(-50%); display: flex;
        &.position-top {
            position: fixed;
            top: 0;
            .toast {
                animation: fade-top 1s;
            }
        }
        &.position-bottom {
            position: fixed;
            bottom: 0;
            .toast {
                animation: fade-bottom 1s;
            }
        }
        &.position-center {
            position: fixed;
            top: 50%;
            transform: translateY(-50%);
            transform: translateX(-50%);
            .toast {
                animation: fade-in 1s;
            }
        }
        .toast {
            font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
            flex-wrap: nowrap;
            display: flex;
            padding: 0 16px;
            color: white; align-items: center; background: $toast-bg; border-radius: 4px;
            box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
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