<template>
  <div class="row" :style="rowStyle" :class="[align&&`align-${align}`]">
      <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        gutter: {
            type: [Number, String]
        },
        align: {
            type: [Number, String]
        }
    },
    computed: {
        rowStyle() {
            let {gutter} = this
            return {marginLeft:-gutter/2+'px',marginRight: -gutter/2+'px'}
        }
        
    },
    mounted() {
        this.$children.forEach(vm=>{
            vm.gutter = this.gutter;
        })
    }

}
</script>

<style lang="scss" scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    &.algin-left {
        justify-content: flex-start;
    }
    &.algin-right {
        justify-content: flex-end;
    }
     &.algin-center {
        justify-content: center;
    }
  }
</style>