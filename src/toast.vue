<template>
    <div class="toast">
        <slot></slot>
        <div class="line" v-if="closeButton.text"></div>
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
            default: false
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
                    callback: undefined
                }
            }
        }
    },
    mounted() {
        console.log(this.closeButton);
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
    font-size: $font-size; height: $toast-height; line-height: 1.8;
    font-size: $font-size; min-height: $toast-min-height; line-height: 1.8;
    position: fixed; top: 0; left: 50%; transform: translateX(-50%); display: flex;
    color: white;
    align-items: center;
    background: $toast-bg;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50);
    padding: 0 16px;
    color: white; align-items: center; background: $toast-bg; border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.50); padding: 0 16px;
    .message {
      padding: 8px 0;
    }
    .close {
      padding-left: 16px;
      flex-shrink: 0;
      cursor: pointer;
    }
    .line {
      height: 100%;
      border-left: 1px solid #666;
      margin-left: 16px;
    }
  }
</style>