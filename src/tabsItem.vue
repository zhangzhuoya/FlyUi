<template>
<div class="tabs-item" @click="xxx" :class="classes">
  <slot></slot>
</div>
</template>

<script>
export default {
    data() {
        return {
                active: false
            }
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String|Number,
            required: true
        }

    },
    inject: ['eventBus'],
    computed: {
        classes() {
            return {
                active: this.active
            }
        }
    },
    created() {
        this.eventBus.$on('update:selected',(name)=>{
            this.active = this.name === name;
            console.log(name);
        })
    },
    methods: {
        xxx() {
            this.$emit('update:seleted',this.name)
        }

    }
}
</script>

<style lang="scss" scoped>
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    &.active {
      background: red;
    }
  }
</style> 