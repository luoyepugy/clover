<template>
  <div id="app">
    <header-nav></header-nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeaderNav from './components/header_nav.vue'
export default {
  name: 'app',
  data() {
    return {

    }
  },
  components: {
    HeaderNav
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
  @import './assets/scss/app.scss';
</style>
