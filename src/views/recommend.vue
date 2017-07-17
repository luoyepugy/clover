<template>
  <div class="view-recommend">
        <ul class="recommend_list">
            <li><img src="/static/recommend_1.jpg" alt="图1" /><div class="overlay"></div></li>
            <li><img src="/static/recommend_2.jpg" alt="图2" /><div class="overlay"></div></li>
            <li><img src="/static/recommend_3.jpg" alt="图3" /><div class="overlay"></div></li>
            <li><img src="/static/recommend_4.jpg" alt="图4" /><div class="overlay"></div></li>
            <li><img src="/static/recommend_5.jpg" alt="图5" /><div class="overlay"></div></li>
            <li><img src="/static/recommend_6.jpg" alt="图6" /><div class="overlay"></div></li>
            <li><img src="/static/recommend_7.jpg" alt="图7" /><div class="overlay"></div></li>
            <li><img src="/static/recommend_8.jpg" alt="图8" /><div class="overlay"></div></li>
            <li><img src="/static/recommend_9.jpg" alt="图9" /><div class="overlay"></div></li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'recommend',
  data () {
    return {
      
    }
  },  
  created() {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.view-recommend {
    .recommend_list {
        li {
            position: relative;

            float: left;
            overflow: hidden;

            width: calc(100% / 3);

            cursor: pointer;
            transition: all .3s;
            &:hover {
                img {
                    transform: scale(1.2);
                }
                .overlay {
                    opacity: 0;
                }
            }
            img {
                display: block;

                transition: transform 2s;
            }
            .overlay {
                position: absolute;
                z-index: 2;
                top: 0;
                left: 0;

                width: 100%;
                height: 100%;

                transition: opacity 1s;

                opacity: .65;
                background: #18191a;
            }
        }
    }
}
</style>
