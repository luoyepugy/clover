<template>
  <div class="grid" id="grid">
    <div v-for="item in list" class="grid-item"><img :src="item" /></div>
  </div>
</template>

<script>
import imagesLoaded from 'imagesloaded'
import Masonry from 'masonry-layout'
import $ from 'jquery'

export default {
  name: 'waterfall',
  data () {
    return {
      curIndex: -1
    }
  }, 
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    },
    listLength: {
      type: Number,
      default: 3
    }
  }, 
  computed: {
    list() {
      var arr = [];
      for(var i = 1; i <= this.listLength; i++) {
        arr.push(this.imgUrl + i + this.suffix);
      }
      return arr;
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      $(function() {
        var container = document.querySelector('#grid');
        imagesLoaded(container, function() {
            var msnry = new Masonry( container, {
                itemSelector: '.grid-item',
                gutter: 15
            });
        });

        var item = $('.grid-item');
        item.hover(function() {
            $(this).siblings('.grid-item').css('opacity', '.5');
        }, function() {
            $(this).siblings('.grid-item').css('opacity', '1');
        });

      });    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.grid {
  margin-bottom: -15px;
}
.grid-item { 
  width: calc((100% - 45px)/ 4);
  margin-bottom: 15px;
  opacity: 1;
  transition: opacity 1s;
  cursor: pointer;
}
</style>
