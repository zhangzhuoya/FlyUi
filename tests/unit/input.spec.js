import chai from "chai";
import spies from "chai-spies";
import Input from "@/input.vue";
chai.use(spies);
const expect = chai.expect;
import Vue from "vue";
describe('Input',()=>{
    it('存在',()=>{
        expect(Input).to.exist
    })
    it('接收 value',()=>{
        const Constructor = Vue.extend(Input);
        const vm = new Constructor({
            propsData: {
                value: 1234
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input');
        expect(inputElement.value).to.equal('1234')
        vm.$destroy()
    })
    it('接收 disabled',()=>{
        const Constructor = Vue.extend(Input);
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input');
        console.log(inputElement,111111111111111);
        expect(inputElement.disabled).to.equal(true);
        vm.$destroy()
    })
    // it('接收 readonly',()=>{
    //     const Constructor = vm.$el.querySelector('input');
    //     const vm = new Constructor({
    //         propsData: {
    //             readonly: true
    //         }
    //     }).$mount()
    //     const inputElement = vm.$el.querySelector('input');
    //     expect(inputElement.readOnly).to.equal(true);
    //     vm.$destroy()
    // })
    // it('接收 readonly',()=>{
    //     const Constructor = vm.$el.querySelector('input');
    //     const vm = new Constructor({
    //         propsData: {
    //             readonly: true
    //         }
    //     }).$mount()
    //     const inputElement = vm.$el.querySelector('input');
    //     expect(inputElement.readOnly).to.equal(true);
    //     vm.$destroy()
    // })
    // it('接收 error',()=>{
    //     const Constructor = Vue.extend(Input)
    //     const vm = new Constructor({
    //         propsData: {
    //             error: '你错了'
    //         }
    //     }).$mount()
    //     const useElement = vm.$el.querySelector('use')
    //     expect(useElement.getAttribute('xlink：herf')).to.equal('#icon-error')
    //     const errorMessage = vm.$el.querySelector('.errorMessage')
    //     expect(errorMessage.innerText).to.equal('你错了')
    //     vm.$destroy()
    // })
})