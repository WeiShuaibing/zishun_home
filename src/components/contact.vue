<template>
<div class="main">
  <div class="head_img" />
  <div class="main_body">
    <div class="left">
      <div style="color: #666666;font-size: 20px;">联系我们</div>
      <div style="color: rgb(209, 209, 209);font-size: 20px;">——</div>
      <div style="font-weight: bold;color: #666666;font-size: 20px;">Contact Us</div>
      <div style="height: 20px;"></div>
      <div style="font-size: 14px;text-align: left;color: #666666;line-height: 2;">
        如有任何问题请联系我们！我们7*24小时阶乘为您服务<br/>
        电话： 020-123456789 邮箱：123411@qq.com<br/>
        地址：郑州高新区中原广告产业园1号楼7楼
      </div>
      <div style="color: rgb(209, 209, 209);font-size: 20px;">————————————————</div>
    </div>
    <div class="right_img">

    </div>
  </div>
</div>
</template>

<script>
import headImg from '../assets/image/contentHead.jpg'
export default {
  name: 'contact', // 联系我们
  data () {
    return {
      img: {
        headImg
      }
    }
  }
}
</script>

<style scoped lang="less">
.head_img{
  width: 100%;
  height: 467px;
  margin: 0 auto;
  background-repeat: no-repeat;
  overflow: hidden;
  display: block;
  outline: none;
  position: relative;
  background-size: cover;
  background-image: url("../../static/image/contentHead.jpg");
}
.main_body{
  width: 1200px;
  height: 400px;
  margin: 0 auto;
  /*border: 1px solid red;*/
  margin-top: 120px;
  .left{
    padding-left: 25px;
    float: left;
    width:500px;
  }
  .right_img{
    margin-right: 25px;
    float: right;
    width: 580px;
    height: 253px;
    /*background-color: #7e61ef;*/
    background-image: url("../../static/image/content_right.png");
  }
}
</style>
