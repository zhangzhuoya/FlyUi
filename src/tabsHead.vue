<template>
  <div class="tabs-head">
    <slot></slot>
    <slot name="setting"></slot>
  </div>
</template>
<script>
  export default {
    name: 'FlyTabsHead',
    props: {

    },
    inject: ['eventBus'],
  }
</script>
<style scoped lang="scss">
  $tab-height: 40px;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid red;
    > .actions-wrapper {
      margin-left: auto;
    }
  }
</style> 