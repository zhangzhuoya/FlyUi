<template>
  <div class="tabs">
      <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'FlyTabs',
    data() {
        return {
            eventBus: new Vue()

        }
    },
    provide() {
        return {
           eventBus: this.eventBus
        }
    },
    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: 'horizontal',
            validator (value) {
            return ['horizontal', 'vertical'].indexOf(value) >= 0
            }
        }
    },
    mounted () {
      // this.$emit('update:selected', 'xxx')
      this.eventBus.$emit('update:selected',this.selected)
    }
}
</script>

<style>

</style>