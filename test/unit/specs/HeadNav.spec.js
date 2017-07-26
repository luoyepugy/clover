import Vue from 'vue'
import HeaderNav from '@/components/header_nav'

describe('导航组件 header_nav.vue', () => {
  const Constructor = Vue.extend(HeaderNav)
  const vm = new Constructor().$mount()

  it('created函数和methods是否存在', () => {
    expect(typeof HeaderNav.created).to.equal('function')
    expect(typeof HeaderNav.methods).to.equal('object')
  });

  it('switchAudio方法是否存在', () => {
    expect(typeof HeaderNav.methods.switchAudio).to.equal('function')
  });

  it('data()中的数据初始化是否正确', () => {
    expect(typeof HeaderNav.data).to.equal('function')
    // expect(HeaderNav.data().soundOn).to.equal(false)
    expect(vm.soundOn).to.equal(false)
    expect(vm.list[1].name).to.equal('scenery')
  });

  it('导航第一个li中的文本初始化是否正确', () => {
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.nav li:eq(0)').textContent).to.equal('精选')
      done()
    })
  });

  it('切换音频函数', () => {
    Vue.nextTick(() => {
      vm.switchAudio();
      expect(vm.soundOn).to.equal(true)
      done()
    })
  });

})
