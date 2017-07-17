<template>
  <div class="view-list">
      <waterfall suffix=".jpg" imgUrl="/static/scenery/" :listLength="15"></waterfall>
  </div>
</template>

<script>
import Waterfall from '../components/waterfall.vue'

export default {
  name: 'macro',
  data () {
    return {
      
    }
  },  
  components: {
    Waterfall
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
