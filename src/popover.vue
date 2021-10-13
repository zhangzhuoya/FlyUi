<template>
  <div class="popover" @click="xxx">
    <div class="popover-wrapper" ref="contentWrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <div ref="triggerWrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlyPopover",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    xxx() {
       this.visible = !this.visible
        if (this.visible === true) {
        this.$nextTick(() => {
        //   document.body.appendChild(this.$refs.contentWrapper);
        //   let { left, right, top, bottom } =
        //     this.$refs.triggerWrapper.getBoundingClientRect();
        //   this.$refs.contentWrapper.style.left = left + window.scrollX + "px";
        //   this.$refs.contentWrapper.style.top = top + window.scrollX + "px";
        //   let eventHandler = () => {
        //       this.visible = false
        //       document.removeEventListener('click', eventHandler)
        //     }
        //     document.addEventListener('click', eventHandler)


                document.body.appendChild(this.$refs.contentWrapper)
            let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.triggerWrapper.style.left = left + window.scrollX + 'px'
            this.$refs.triggerWrapper.style.top = top + window.scrollY + 'px'
         let eventHandler = () => {
              this.visible = false
              document.removeEventListener('click', eventHandler)
            }
            document.addEventListener('click', eventHandler)
        });
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  position: relative;
  &-wrapper {
    position: absolute;
    // box-sizing: border-box;
    border: 1px solid red;
    background: burlywood;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
}
</style>