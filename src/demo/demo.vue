<template>
  <div>
    <Button type="warning" icon="bianji" icon-position="left">警告</Button>
    <Button type="danger" icon="bianji" icon-position="right">危险</Button>
    <Button>默认按钮</Button>
    <Button icon="loading">默认按钮</Button>
    <button-group>
      <Button>上一页</Button>
      <Button>更多</Button>
      <Button>下一页</Button>

    </button-group>
  </div>
</template>

<script>
import Button from "./button.vue";
import ButtonGroup from "./buttonGroup.vue";
export default {
  components: {
    Button,
    ButtonGroup,
  },
};
</script>

<style></style>
