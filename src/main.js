import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import Button from "./demo/button.vue";
import chai from "chai";
import spies from 'chai-spies';
chai.use(spies)
Vue.component("g-button", Button);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
console.log(chai);
const expect = chai.expect;
// 单元测试
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "settings",
    },
  });
  vm.$mount(); // 挂载到内存
  let useElement = vm.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#icon-settings");
  vm.$el.remove();
  vm.$destroy();
}
// {
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData: {
//       icon:"loading"
//     }
//   })
//   vm.$mount();
//   let use
// }
{
  // mock: 函数的mock
  const Constructor = Vue.extend(Button);
  const vm = new Constructor();
  vm.$mount();
  let spy = chai.spy(function () {});
  vm.$on("click", spy);
  let button = vm.$el;
  button.click();
  expect(spy).to.have.been.called();
}
