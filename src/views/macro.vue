<template>
  <div class="view-parallax">
        <div class="macro_img1"></div>
        <div class="middle">
            <h3 class="title">一花一世界，一叶一菩提</h3>
            <p class="more"><a @click="routeGo('macroList')">查看更多</a></p>
        </div>
        <div class="macro_img2"></div>
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
