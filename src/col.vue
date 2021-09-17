<template>
   <div 
     class="col" 
     :class="colClasses"
     :style="colStyle"
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
    },
    data() {
        return {
            gutter: 0
        }
    },
    computed: {
        colClasses(){
            let {span,offset} = this
            return [span&&`col-${span}`, offset&&`offset-${offset}`]
        },
        colStyle() {
            return {
                marginLeft: this.gutter/2 +'px',
                marginRight: this.gutter/2 +'px'
            }
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
