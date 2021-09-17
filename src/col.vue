<template>
   <div 
     class="col" 
     :class="[span&&`col-${span}`, offset&&`offset-${offset}`]"
     :style="{marginLeft: gutter/2 +'px',marginRight: gutter/2 +'px'}"
     >
       <slot></slot>
   </div>
</template>

<script>
export default {
    props:{
        span:{
            type:[Number,String],
        },
        offset: {
            type: [Number, String],
        },
        // gutter: {
        //     type: [Number, String]
        // }
    },
    data() {
        return {
            gutter: 0
        }
    }

}
</script>

<style lang="scss" scoped>
.col {
    width: 50%;
    height: 100px;
    border: 1px solid red;
    background: #d3dce6;
    $class-prefix: col-;
    $class-offset: offset-;
    @for $n from 0 through 24 {
        &.#{$class-prefix}#{$n} {
            width: ($n/24)*100%;
        }
    }
    @for $n from 0 through 24 {
        &.#{$class-offset}#{$n} {
            margin-right: ($n/24)*100%;
        }
    }

}
</style>
