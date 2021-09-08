<template>
  <div>
    <Button type="warning" icon="bianji" icon-position="left">警告</Button>
    <Button type="danger" icon="bianji" icon-position="right">危险</Button>
    <Button>默认按钮</Button>
    <Button icon="loading">默认按钮</Button>
  </div>
</template>

<script>
import Button from "./button.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style></style>
