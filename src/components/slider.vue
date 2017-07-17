<template>
  <div class="slider_box" id="sliderBox" :class="className">
      <div v-for="item in imgs" class="slider_item" 
          :style="{'background-image': 'url(' + item.src +')'}"
          @mouseenter="animatePause" @mouseleave="animateRun"></div>
      <div class="sliderLinks" v-if="hasArrow">
          <div class="slider_link prev" @click="toggleSlider('prev')"></div>
          <div class="slider_link next" @click="toggleSlider('next')"></div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'slider',
  data () {
    return {
      timer: null,
      active: 0,
      next: 1,
      isPrevModel: false
    }
  },
  props: {
    isAuto: {
        default: true,
        type: Boolean
    },
    isHoverPause: {
        default: false,
        type: Boolean
    },
    hasArrow: {
        default: true,
        type: Boolean
    },
    isThough: {
        default: true,
        type: Boolean
    },
    className: {
        default: '',
        type: String
    },
    imgs: {
      required: true,
      default: function () {
        return [];
      }
    }
  },
  created() {
    var _this = this;
    // 初次加载动画
    $('.slider_item').eq(0).addClass('active');
    // 循环slider动画
    if(_this.isAuto) {
      _this.timer = setInterval(_this.animateTime, 6000); 
    }
    if(!_this.isThough && _this.next == _this.imgs.length - 1) {
      _this.timer = setInterval(_this.animateTime('prev'), 6000); 
    }
    
  },
  methods: {
    animateTime: function(type) {
      var _this = this,
          len = _this.imgs.length - 1,
          type = type || null;

      if(!_this.isThough) {
        if(_this.next == 0) {
          _this.isPrevModel = false;
        }
        if(_this.next == len) {
          _this.isPrevModel = true;
        }
      }

      try {
        if(len <= 1) {
          throw "图片列表数组长度至少为2";
        } else if(!_this.hasArrow && !_this.isAuto) {
          throw "至少设置一种动画循环方式";
        }
      } catch(err) {
        console.log('执行错误: ' + err);
      }

      _this.active = $('#sliderBox').find('.slider_item.active').index();
      _this.next = (type == 'prev' || _this.isPrevModel) ? _this.active - 1 : Number(_this.active) + 1;
      _this.next = (_this.next > len) ? 0 : _this.next;
      _this.next = (_this.next < 0) ? len : _this.next;  

      $('.slider_item').eq(_this.next).animate({opacity: 1}, 1000, function() {
        $(this).css('z-index', 2).addClass('active').siblings('.slider_item').css('z-index', 1).removeClass('active');
      }).end().eq(_this.active).animate({opacity: 0}, 1000);
    },
    toggleSlider: function(type) {
      var _this = this;
      clearInterval(_this.timer);
      _this.animateTime(type);
      _this.timer = setInterval(_this.animateTime, 6000);
      _this.$emit('arrowClick', type);
    },
    animatePause() {
      var _this = this;
      if(_this.isHoverPause) {
        clearInterval(_this.timer);
        _this.$emit('pauseEvent');
      }
    },
    animateRun() {
      var _this = this;
      if(_this.isHoverPause) {
        _this.timer = setInterval(_this.animateTime, 6000);
        _this.$emit('runEvent');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .slider_box {
    position: relative;
    height: calc(100vh - 70px);
    overflow: hidden;
  }
  .slider_item {
    height: 110%;
    width: 110%;

    background-size: cover;
    position: absolute;
    left: 0px;
    bottom: 0px;
    top: 0px;
    transition: opacity 1s, transform 8s;
    z-index: 1;
    opacity: 0;
    
    &:nth-child(1) {
      z-index: 2;
      opacity: 1;
    }

    &.active {
      transform: scale3d(1.1,1.1,1) translate3d(-10%,-10%,0);
    }   
  }
  .slider_link {
    position: absolute;
    z-index: 100;
    top: calc(50% + 35px);

    width: 28px;
    height: 28px;

    cursor: pointer;
    cursor: pointer;
    transition: all .3s;

    border-top: 2px solid #fff;
    outline: 0!important;

    :hover {
      width: 35px;
      height: 35px;
    }

    &.prev {
      left: 4%;

      transform: rotate(-45deg) translate3d(50%,-20%,0);

      border-left: 2px solid #fff;
      box-shadow: inset 11px 11px 30px -30px rgba(0,0,0,.3);
    }

    &.next {
      right: 4%;

      transform: rotate(45deg) translate3d(-50%,-20%,0);

      border-right: 2px solid #fff;
      box-shadow: inset -11px 11px 30px -30px rgba(0,0,0,.3);
    }
  }
  
</style>
