<template>
  <div>
    <!-- <Button type="warning" icon="bianji" iconPosition="left">警告</Button>
    <Button type="danger" icon="bianji" iconPosition="right">危险</Button>
    <Button>默认按钮</Button>
    <Button icon="loading">默认按钮</Button>
    <button-group>
      <Button>上一页</Button>
      <Button>更多</Button>
      <Button>下一页</Button>
    </button-group> -->
    <Input value="1234" disabled readonly/>
    <Input value="1234" readonly/>
    <Input value="1234" error="姓名不能少于5个字"/>
    <Input v-model="message"/>
    {{message}}

  </div>
</template>

<script>
import Button from "@/button.vue";
import ButtonGroup from "@/buttonGroup.vue";
import Input from '@/input.vue'
export default {
  components: {
    Button,
    ButtonGroup,
    Input
  },
  data() {
    return {
      message:""
    }
  }
};
</script>

<style></style>
