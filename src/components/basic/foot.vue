<template>
  <div class="allFoot" style="min-width: 1200px;">
    <div class="footCenter">
        <div class="foot_1">
          <ul>
            <li @click="changeBody('home')">网站首页</li>
            <li @click="changeBody('contact')">关于我们</li>
            <li @click="changeBody('case')">案例展示</li>
            <li @click="changeBody('realScene')">实景展示</li>
          </ul>
        </div>
        <div class="foot_2">
          <ul>
            <li @click="changeBody('homeFurnishing')">智能家居</li>
            <li @click="changeBody('homeFurnishing')">全屋定制</li>
            <li @click="changeBody('realScene')">施工小区</li>
            <li @click="changeBody('setMeal')">套餐说明</li>
          </ul>
        </div>
        <div class="foot_3">
          <div class="email">邮箱：123456789@qq.com</div>
          <div class="phone">联系电话：<span class="phoneText">&nbsp;0371-12345678 &nbsp;&nbsp; 123456789</span></div>
          <div class="address">郑州高新区中原广告产业园1号楼7楼</div>
        </div>
        <div class="foot_4">
          <div>
            <img :src="erweimaImg" class="erweima" />
          </div>
          <div class="gongzhonghao">
            &nbsp;&nbsp;紫顺装饰公众号
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import erweima from '../../assets/image/erweima.jpg'
export default {
  name: 'foot',
  data  () {
    return {
      props: ['getChildData2'],
      erweimaImg: erweima
    }
  },
  methods: {
    changeBody: function (para) {
      console.log(para)
      this.$emit('change', para)
    }
  }
}
</script>

<style scoped lang="less">
.allFoot{
  color: white;
  height: 200px;
  width: 100%;
  background-color: #131929;
  .footCenter{
    margin: 0 auto;
    width: 1200px;
    height: 100%;
  }
  .foot_1{
    float: left;
    /*background-color: greenyellow;*/
    width: 150px;
    height: 100%;
    ul{
      margin-top: 20px;
      list-style: none;
      li{
        line-height: 2.5;
        font-size: 14px;
        cursor:pointer;
        text-align: center;
      }
    }
  }
  .foot_2{
    float:left;
    /*background-color: green;*/
    width: 150px;
    height: 100%;
    margin-right: 80px;
    ul{
      margin-top: 20px;
      list-style: none;
      li{
        line-height: 2.5;
        font-size: 14px;
        /*text-align: center;*/
        cursor:pointer;

      }
    }
  }
  .foot_3{
    height: 100%;
    float: left;
    font-size:14px;
    /*background-color: burlywood;*/
    width: 450px;
    .email{
      margin-top: 20px;
      line-height: 2.5;
    }
    .phone{
      line-height: 2.5;
    }
    .address{
      line-height: 2.5;
    }
    .phoneText{
      font-size: 18px;
      color: #7e61ef;
    }
  }
  .foot_4{
    font-size:14px;
    height: 100%;
    float: right;
    width: 200px;
    .erweima{
      text-align: center;
      margin-top: 20px;
      width: 130px;
      height: 130px;
    }
    .gongzhonghao{

      margin-top: 5px;
      width: 150px;
    }
  }
}
</style>
