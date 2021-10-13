<template>
  <div class="popover" @click.stop="xxx">
      <div class="popover-container" ref="popoverContainer" v-if="visible">
      <slot name="content"></slot>
      </div>
      <div class="popover-wrapper">
      <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: "FlyPopover",
    data() {
        return {
            visible: false
        }
    },
    methods: {
        xxx() {
            this.visible= !this.visible;
            if (this.visible) {
                this.$nextTick(()=>{
                    console.log(this.$refs.popoverContainer);
                })
            }
            let event = ()=>{
             if (this.visible) {
                    this.visible = false
                    document.removeEventListener('click',event)
                }
            }
            document.addEventListener('click',event)
        },
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.popover {
    display: inline-block;
    position: relative;
    &-container {
        position: absolute;
        bottom: 100%;
        left: 0;
        // box-sizing: border-box;
        border: 1px solid red;
        background: burlywood;
        box-shadow: 0 0 3px rgba(0,0,0, 0.5);
    }
}
</style>