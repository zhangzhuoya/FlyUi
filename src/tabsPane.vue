<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'FlyTabsPane'
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