<template>
   <div class="col" :class="[`col-${span}`]">
       <slot></slot>
   </div>
</template>

<script>
export default {
    props:{
        span:{
            type:[Number,String]
        }
    }

}
</script>

<style lang="scss" scoped>
.col {
    width: 50%;
    height: 100px;
    border: 1px solid red;
    background: gray;
    $class-prefix: col-;
    @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
            width: ($n/24)*100%;
        }
    }

}
</style>
