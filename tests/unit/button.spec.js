import chai from "chai";
import spies from "chai-spies";
// import { shallowMount } from "@vue/test-utils";
import Button from "@/button.vue";
// import sinon from "sinon";
chai.use(spies);
const expect = chai.expect;
import Vue from "vue";
describe("Button", () => {
  // BDD 行为测试
  it("存在", () => {
    expect(Button).to.be.ok;
  });

  it("可以设置icon", () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "settings",
      },
    });
    vm.$mount(); // 挂载到内存
    let useElement = vm.$el.querySelector("use");
    let href = useElement.getAttribute("xlink:href");
    expect(href).to.equal("#icon-settings");
    vm.$el.remove();
    vm.$destroy();
  });
  it("可以设置loading", () => {
    const Constructor = Vue.extend(Button);
    const vm = new Constructor({
      propsData: {
        icon: "loading",
      },
    });
    vm.$mount();
    let useElement = vm.$el.querySelector("use");
    let href = useElement.getAttribute("xlink:href");
    expect(href).to.equal("#icon-loading");
    vm.$el.remove();
    vm.$destroy();
  });
  // it("可以设置icon位置", () => {
  //   const div = document.createElement("div");
  //   document.body.appendChild(div);
  //   const Constructor = Vue.extend(Button);
  //   const vm = new Constructor({
  //     propsData: {
  //       icon: "settings",
  //     },
  //   });
  //   vm.$mount(div);
  //   let svg = vm.$el.querySelector("svg");
  //   console.log(window.getComputedStyle(svg).order, "111111111");
  //   let { order } = window.getComputedStyle(svg);
  //   expect(order).to.eq("");
  //   vm.$el.remove();
  //   vm.$destroy();
  // });
  // it("点击 button 触发 click 事件", () => {
  //   const Constructor = Vue.extend(Button);
  //   const vm = new Constructor({
  //     propsData: {
  //       icon: "setting",
  //     },
  //   });
  //   vm.$mount();
  //   // let spy = chai.spy(function () {});
  //   let callback = sinon.fake();
  //   vm.$on("click", callback);
  //   let button = vm.$el;
  //   button.click();
  //   expect(callback).to.have.been.called;
  // });
});
// {
//   const div = document.createElement("div");
//   document.body.appendChild(div);
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData: {
//       icon: "settings",
//     },
//   });
//   vm.$mount(div);
//   let svg = vm.$el.querySelector("svg");
//   console.log(window.getComputedStyle(svg).order,'111111111');
//   let { order } = window.getComputedStyle(svg);
//   expect(order).to.eq("");
//   vm.$el.remove();
//   vm.$destroy();
// }
