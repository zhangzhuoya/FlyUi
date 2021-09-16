<template>
  <div class="wrapper" 
        :class="{'error':error}"
  >
      <input 
        type="text" 
        :value="value" 
        :disabled="disabled" 
        :readonly="readonly"
        @change="$emit('change',$event.target.value)"
        @input="$emit('input',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)"
        >
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="error-message">{{error}}</span>
        </template>
  </div>
</template>

<script>
import Icon from './icon.vue'
export default {
    name: 'FInput',
    components:{
       Icon
    },
    props: {
        value: {
            type: String,
            default: "vv"
        },
        disabled:{
            type: Boolean,
            default: false
        },
        readonly:{
            type: Boolean,
            default: false
        },
        error: {
            type: String
        }
    }

}
</script>

<style lang="scss" scoped>
$height: 36px;
$border-color: #dcdfe6;
$border-color-hover: #666;
$border-radus: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0,0,0,0.5);
$border-focus: #409eff;
.wrapper {
    font-size: $font-size;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    > :not(:last-child) {margin-right: 0.5em;}
    > input {
        font-size: inherit;
        height: $height;
        border: 1px solid $border-color;
        border-radius: $border-radus;
        padding: 8px;
        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            // border-color: red;
        }
        &:focus {
            outline: none;
            border-color: $border-focus;
        }
        &[disabled] {
            border-color: #aaa;
            color: #aaa;
            cursor:not-allowed
        }
        &[disabled] {
            border-color: #aaa;
            color: #aaa;
            cursor:not-allowed
        }
    }
    &.error {
      > input { border-color: red; }
    }
    .icon-error {
        fill:red
    }
    .error-message {
        color: red;
    }
    
}


</style> 