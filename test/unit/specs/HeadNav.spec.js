import Vue from 'vue'
import HeaderNav from '@/components/header_nav'

describe('导航组件 header_nav.vue', () => {
  const Constructor = Vue.extend(HeaderNav)
  const vm = new Constructor().$mount()
  it('导航-初始化', () => {
    expect(vm.$el.querySelector('.nav li:eq(0)').textContent)
      .to.equal('精选')
    expect(vm.soundOn).toBe(false)
  });
  it('导航-切换音频函数', () => {
  	vm.switchAudio();
  	expect(vm.soundOn).toBe(true)
  })
})
