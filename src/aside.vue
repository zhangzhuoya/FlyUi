<template>
    <transition name="slide">
        <div class="slide" v-if="visible">
            <div class="sider">
            <slot></slot>
            <button @click="visible=false">button</button>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'FlyAside',
    data () {
      return {
        visible: true
      }
    },

}
</script>

<style lang="scss" scoped>
.slide {
    position: relative;
    button {
        position: absolute;
        top: 0;
        right: 0;
    }
}
.slide-enter-active, .slide-leave-active {
    transition: all .3s;
  }
  .slide-enter, .slide-leave-to {
    margin-left: -200px;
  }
</style>