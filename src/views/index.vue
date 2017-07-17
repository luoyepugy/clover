<template>
  <div>
    <slider :imgs="imgsList" :hasArrow="true" :isAuto="true" className="" :isThough="true" :isHoverPause="false" ></slider>
  </div>
</template>

<script>
import Slider from '../components/slider.vue'
export default {
  name: 'index',
  data () {
    return {
      imgsList: [{
        src: '/static/index_1.jpg',
        title: '图1'
      },
      {
        src: '/static/index_2.jpg',
        title: '图2'
      },
      {
        src: '/static/index_3.jpg',
        title: '图3'
      },
      {
        src: '/static/index_4.jpg',
        title: '图4'
      }]
    }
  },
  components: {
    Slider
  },  
  created() {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
