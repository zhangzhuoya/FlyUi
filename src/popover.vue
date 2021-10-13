<template>
  <div class="popover" @click="xxx">
      <div class="popover-container">
      <slot name="content" v-if="visible"></slot>
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
        }
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
        box-shadow: 0 0 3px rgba(0,0,0, 0.5);
    }
}
</style>