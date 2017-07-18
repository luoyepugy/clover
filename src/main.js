
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.config.productionTip = false

// ====================== Install Router ======================
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样
    // https://router.vuejs.org/zh-cn/advanced/scroll-behavior.html
    // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// 全局方法
Vue.prototype.routeGo = function (name, params) {
  this.$router.push({'name': name, 'params': params});
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})