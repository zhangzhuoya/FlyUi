<template>
  <div class="tabs-pane" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'FlyTabsPane',
    data() {
        return {
            active: false

        }
    },
    inject:["eventBus"],
    props: {
        name: {
            type: String| Number,
            required: true
        }
    },
    created() {
        this.eventBus.$on('update:selected',(name)=>{
            this.active = this.name===name;
        })
    }
  }
</script>
<style>
  .tabs-pane {
  }
</style> 