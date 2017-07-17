<template>
  <div>
     <div class="view-contactUs">
        <div class="form">
            <p>姓名<input type="text" name="name" value="" /></p>
            <p>邮箱<input type="text" name="email" value="" /></p>
            <p>信息<input type="text" name="message" value="" /></p>
            <p><span class="button">发送</span></p>
        </div>
    </div>
    <div class="footer">© Copyright 2017. Clover</div>
  </div>
</template>

<script>

export default {
  name: 'macro',
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

.content {
  .view-contactUs {
    height: calc(100vh - 270px);
    background: #302d2a;
    border: 1px solid #302d2a;
  }
 
}
.view-contactUs {
  .form {
    position: relative;
    top: 50%;

    width: 500px;
    height: 300px;
    margin: 0 auto;
    margin-top: -150px;
    p {
      width: 500px;
      height: 35px;
      margin-top: 45px;

      border-bottom: 1px solid #878075;
      &:first-child {
          margin-top: 0;
      }
      &:last-child {
          margin-top: 60px;

          border-bottom: 0;
      }
    }
    input {
      width: 435px;
      height: 35px;
      margin-left: 20px;
      padding-left: 10px;

      border: 1px solid #fff;
      border: 0;
      outline: none;
      background: transparent;
    }
    .button {
      line-height: 45px;

      float: right;

      width: 145px;
      height: 45px;

      text-align: center;

      border: 1px solid #878075;
    }
  }
}
</style>
