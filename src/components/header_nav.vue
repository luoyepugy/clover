<template>
  <div>
    <!-- 头部导航 -->
    <div class="header">
        <div class="nav">
            <div class="logo">
                <a title="首页" data-name="index" @click="routeGo('index')"></a>
            </div>
            <ul>
              <li v-for="item in list"><a :class="{true: 'active'}[item.name == $route.name]" :title="item.text" @click="routeGo(item.name)">{{item.text}}</a></li>
              <li class="sound"><span title="音频 开/关" :class="{'soundOff': !soundOn}" @click="switchAudio"></span></li>
            </ul>
        </div>
    </div>
    <!-- /头部导航 -->
    <!-- 音频文件 -->
    <audio ref="audio" id="audio" preload="auto" loop="loop">
        <source src="/static/media/audio.mp3" type="audio/mpeg">
    </audio>
    <!-- /音频文件 -->
  </div>
</template>

<script>

import $ from 'jquery'

export default {
  name: 'header',
  data () {
    return {
      soundOn: false,
      list: [{
        name: 'recommend',
        text: '精选'
      },{
        name: 'scenery',
        text: '风景'
      },{
        name: 'macro',
        text: '微距'
      },{
        name: 'person',
        text: '人物'
      },{
        name: 'contactUs',
        text: '联系我们'
      }]
    }
  },
  created() {

  },
  methods: {
    switchAudio() {
      var audio = $("#audio")[0];  
      this.soundOn = !this.soundOn;

      if(audio.paused) {
        audio.play();  
      } else {
        audio.pause();  
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

/*导航*/
.header {
  background-color: #fff;
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  
  @keyframes rotate{
    0%{
        transform : rotate(0deg);
    }
    100%{
        transform : rotate(360deg);
    }
  }

  a {
    display: block;
    height: 70px; 
    cursor: pointer;    
  }

  .logo {
    width: 70px;
    height: 70px;
    float: left;
    cursor: pointer;
    margin-right: 75px;
    background-image: url(/static/logo.png);
    background-size: cover;
    
    &:hover {
      animation: rotate 5s infinite;
      animation-play-state: running;
    }
  }

  .nav {
    width: 920px;
    margin: 0 auto;
    li {
      display: inline-block;
      width: 74px;
      margin-left: 50px;
      text-align: center;
      line-height: 70px;
      a:hover {
        color: #000;
      }
      &.active {
        a {
          color: #000;
        }
      }
    }

    @keyframes soundOff{
      from{ background-position:0; }
      to{ background-position: -403px; }
    }
    @keyframes soundOn{
      from{ background-position:-372px; }
      to{ background-position:-775px; }
    }
    .sound span {
      position: relative;
      top: 7px;
      width: 30px;
        height: 25px;
        display: inline-block;
        background: url(/static/sprite-sound.png) no-repeat;
        margin-top: 0;
        cursor: pointer;
        animation: soundOn .5s steps(13) 1;

        &.soundOff {
          background-position: -372px 0;
          animation: soundOff .5s steps(13) 1;
        }
    }
  }
}
</style>
