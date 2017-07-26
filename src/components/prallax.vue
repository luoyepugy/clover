<template>
  <div class="view-parallax" >
    <div :class="img1" data-0="background-position: 0 0px;" data-100="background-position: 0 -100px;" data-300="background-position: 0 -200px;"></div>
    <div class="middle" data-500="background-color: rgb(55, 52, 49);" data-900="background-color: rgb(0, 0, 0);">
        <h3 class="title">{{title}}</h3>
        <p class="more"><a @click="routeGo(detailRoute)">查看更多</a></p>
    </div>
    <div :class="img2" data-0-bottom="background-position: 0 -200px;" data-100-bottom="background-position: 0 -100px;" data-300="background-position: 0 0px;"></div>
  </div>
</template>

<script>
import $ from 'jquery'
import skrollr from 'skrollr'

export default {
  name: 'skrollr',
  data () {
    return {

    }
  }, 
  computed: {
    img1 (val) {
      return this.name + '_img1';
    },
    img2 (val) {
      return this.name + '_img2';
    }
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    detailRoute: {
      type: String,
      default: ''
    }
  }, 
  created() {
    this.init();
  },
  methods: {
    init() {
      $(function() {
        var s = skrollr.init();
      });    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.view-parallax {
  
  $names: person macro scenery;
  @each $name in $names { 
    .#{$name}_img1,
    .#{$name}_img2 {
      height: 650px;
      overflow: hidden;
    }

    .#{$name}_img1 { 
      background-image: url('/static/#{$name}_1.jpg');
      background-position: 0 0;
      -skrollr-animation-name: animation1;
    }
    .#{$name}_img2 { 
      background-image: url('/static/#{$name}_2.jpg');
      background-position: 0 0;
      -skrollr-animation-name: animation3;
    }
  }

  .middle {
    -skrollr-animation-name: animation2;
  }
}
</style>
