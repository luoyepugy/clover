<template>
  <div class="view-parallax">
        <div class="person_img1"></div>
        <div class="middle">
            <p class="title">因为简单，所以快乐</p>
            <p class="more"><a @click="routeGo('personList')">查看更多</a></p>
        </div>
        <div class="person_img2"></div>
    </div>
</template>

<script>
import Skrollr from 'skrollr'

export default {
  name: 'macro',
  data () {
    return {
      
    }
  },  
  created() {
    var s = Skrollr.init();
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/scss/_skrollr.scss'
</style>
