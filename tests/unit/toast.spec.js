import chai from 'chai'
import Vue from 'vue';
import Toast from '@/toast';
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
const expect = chai.expect;
chai.use(sinonChai)
describe('Toast',()=>{
    it('存在',()=>{
        expect(Toast).to.be.ok;
    })
    describe('传递props',function(){
        it('接收 autoClose',(done)=>{
            let div = document.createElement('div');
            document.body.appendChild(div);
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    autoClose: 1
                }
            }).$mount(div)
            vm.$on('close',()=>{
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })
            // setTimeout(()=>{
            //     expect(document.body.contains(vm.$el)).to.eq(false)
            //     done()
            // },1500)
        })
        it('接收 closeButton',function (done) {
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast);
            let div = document.createElement('div')
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '拿来吧你',
                        callback
                    }
                }
            }).$mount(div)
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('拿来吧你')
            setTimeout(()=>{
                closeButton.click()
                expect(callback).to.have.been.called
                done()
              },200)
        })
        it('接收 dangerHtml',()=> {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    dangerHtml: true
                }
            })
            vm.$slots.default = ['<strong id="test">hi</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.be.ok;
        })
        it('接收 position',()=>{
            const Constructor = Vue.extend(Toast);
            let div = document.createElement('div')
            const vm = new Constructor({
                propsData: {
                    position: 'top'
                }
            }).$mount(div)
            expect(vm.$el.classList.contains('position-top')).to.eq(true)
         })
    })
})