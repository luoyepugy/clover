<template>
  <div class="view-parallax">
        <div class="scenery_img1"></div>
        <div class="middle">
            <h3 class="title">有一种美，叫大自然的鬼斧神工</h3>
            <p class="more"><a @click="routeGo('sceneryList')">查看更多</a></p>
        </div>
        <div class="scenery_img2"></div>
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
