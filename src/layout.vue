<template>
  <div class="layout-container" :class="{'isAside': isAside}">
    <slot></slot>
  </div>
</template>

<script>

export default {
    name: 'FlyLayout',
    data(){
        return {
            isAside: false
        }
    },
    mounted() {
        this.$children.forEach(vm => {
            if (vm.$options.name==='FlyAside') {
                this.isAside = true
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.layout-container {
    display: flex;
    flex-direction: column;
    &.isAside {
        flex-direction: row;
    }
}
</style>