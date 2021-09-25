<template>
  <div style="height:1000px">
    <!-- <Button type="warning" icon="bianji" iconPosition="left">警告</Button>
    <Button type="danger" icon="bianji" iconPosition="right">危险</Button>
    <Button>默认按钮</Button>
    <Button icon="loading">默认按钮</Button>
    <button-group>
      <Button>上一页</Button>
      <Button>更多</Button>
      <Button>下一页</Button>
    </button-group> -->
    <!-- <Input value="1234" disabled readonly/>
    <Input value="1234" readonly/>
    <Input value="1234" error="姓名不能少于5个字"/>
    <Input v-model="message"/>
    {{message}}
    <h2>布局</h2>
    <f-row>
      <f-col span="4">2</f-col>
      <f-col span="20" >22</f-col>
    </f-row>

    <f-row>
      <f-col 
        span="2" 
        :phone="{span: 24}" 
        :ipad="{span: 8}" 
        :narrow-pc="{span:4}" 
        :pc="{span:2}"
        :wide-pc="{span:1}"
        >1</f-col>
      <f-col span="22">11</f-col>
    </f-row>
    <f-row>
      <f-col span="8">4</f-col>
      <f-col span="16">20</f-col>
    </f-row>
    <f-row>
      <f-col span="10">5</f-col>
      <f-col span="14">19</f-col>
    </f-row> -->


<!-- <h3>布局</h3>
<Layout>
  <Header style="width:100%;height:100px;background:#eee">header</Header>
  <Layout>
    <Aside style="width:300px;height:300px;background:#eee">aside</Aside>
    <Content>content</Content>
  </Layout>
  <Footer>footer</Footer>
</Layout>
<Toast></Toast> -->
<Button @click="handlemessage">bottom</Button>
<Button @click="CenterMessage">center</Button>
<Button @click="TopMessage">top</Button>

  </div>
</template>

<script>
import Button from "@/button.vue";
import ButtonGroup from "@/buttonGroup.vue";
import Input from '@/input.vue'
import FCol from '@/col.vue'
import FRow from '@/row.vue'
import Footer from '@/footer.vue'
import Header from '@/header.vue'
import Aside from '@/aside.vue'
import Content from '@/content.vue'
import Layout from '@/layout.vue';
import Toast from '@/toast.vue'
import plugin from '@/plugin';
import Vue from 'vue'
Vue.use(plugin)

export default {
  components: {
    Button,
    ButtonGroup,
    Input,
    FCol,
    FRow,
    Footer,
    Header,
    Aside,
    Content,
    Layout,
    Toast
  },
  data() {
    return {
      message:""
    }
  },
  mounted() {
    // console.log(this.$toast());
  },
  methods:{
    handlemessage(){
      this.$toast(`从下冒出来的toast`,{
        dangerHtml: true,
        position: "bottom",
        autoClose: 7,
        closeButton:{
            text: '关闭',
            callback(){
              console.log('eeeee');
            }
          }
        })
    },
    CenterMessage() {
      this.$toast(`从中间冒出来的toast`,{
        dangerHtml: true,
        position: "center",
        closeButton:{
            text: '关闭',
          }
        })
    },
    TopMessage() {
      this.$toast(`从上面冒出来的toast`,{
        dangerHtml: true,
        position: "top",
        closeButton:{
            text: '关闭',
          }
        })
    }
  }
};
</script>

<style lang="less" scoped>

</style>
