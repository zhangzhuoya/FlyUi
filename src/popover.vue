<template>
  <div class="popover" @click.stop="xxx">
    <div class="popover-container" ref="popoverContainer" v-if="visible">
      <slot name="content"></slot>
    </div>
    <div class="popover-wrapper" ref="popoverWrapper">
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
      this.visible = !this.visible;
      if (this.visible) {
        this.$nextTick(() => {
          console.log(this.$refs.popoverContainer);
          document.body.appendChild(this.$refs.popoverContainer);
          let { left, right, top, bottom } =
            this.$refs.popoverWrapper.getBoundingClientRect();
          console.log(left, right, top, bottom);
          this.$refs.popoverContainer.style.left = left + window.scrollX + "px";
          this.$refs.popoverContainer.style.top = top + window.scrollX + "px";
        });
      }
      let event = () => {
        if (this.visible) {
          this.visible = false;
          document.removeEventListener("click", event);
        }
      };
      document.addEventListener("click", event);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  position: relative;
  &-container {
    position: absolute;
    // box-sizing: border-box;
    border: 1px solid red;
    background: burlywood;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
  }
}
</style>