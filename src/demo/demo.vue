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
    <h2>布局</h2>
    <f-row gutter="12">
      <f-col span="2">1</f-col>
      <f-col span="2" offset="2">2</f-col>
      <f-col span="2" offset="2">2</f-col>
    </f-row>

    <f-row>
      <f-col>1</f-col>
      <f-col>2</f-col>
    </f-row>
    <f-row>
      <f-col>1</f-col>
      <f-col>9</f-col>
    </f-row>

  </div>
</template>

<script>
import Button from "@/button.vue";
import ButtonGroup from "@/buttonGroup.vue";
import Input from '@/input.vue'
import FCol from '@/col.vue'
import FRow from '@/row.vue'
export default {
  components: {
    Button,
    ButtonGroup,
    Input,
    FCol,
    FRow
  },
  data() {
    return {
      message:""
    }
  }
};
</script>

<style></style>
