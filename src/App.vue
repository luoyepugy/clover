<template>
  <div id="app">
    <!-- 加载动画 -->
    <div class="loading"></div>
    <!-- /加载动画 -->
    <header-nav></header-nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderNav from './components/header_nav.vue'
import $ from 'jquery'

export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    HeaderNav
  },
  created() {
    
  },
  ready() {

  },
  methods: {
    // routeGo(name) {
    //   console.log('das');
    //   var _this = this;
    //   // _this.$nextTick(function() {
    //     this.$router.push(name);
    //   // });
    // }
  }
}
</script>

<style lang="scss">
  @import './scss/app.scss';
</style>
