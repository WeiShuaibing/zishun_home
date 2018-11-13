<template>
  <div class="ybody">

    <div style="display: block;width:84px;
      font-size:26px;
      font-weight:500;
      color:rgba(51,51,51,1);
      line-height:3;
      width: 1200px;
      margin: 0 auto;
    ">
      衣柜
    </div>
    <!--底部显示区域-->
    <div class="font">
      <div class="font-1">
        <img src="../../../static/image/yf1.jpg" class="list_img"/>
        <div class="font-2">
          林语溪岸font-1
        </div>
        <div class="font-21">衣帽间 | 现代简约</div>
      </div>
      <div class="font-1">
        <img src="../../../static/image/yf2.jpg" class="list_img"/>
        <div class="font-2">
          林语溪岸font-1
          <p class="font-21">衣帽间 | 现代简约 </p>
        </div>
      </div>
      <div class="font-1">
        <img src="../../../static/image/yf1.jpg" class="list_img"/>
        <div class="font-2">
          林语溪岸font-1
          <p class="font-21">衣帽间 | 现代简约 </p>
        </div>
      </div>
    </div>
    <div style="clear:both;height:30px;"></div>
  </div>

</template>
<script>

export default {
  name: 'y1'
}

</script>
<style scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .ybody {
    /*margin: 0 auto;
    width: 1200px;*/
    font-size: 16px;
  }

  .font {
    /*flex-direction: row;*/
    width: 1230px;
    margin: 0 auto;
    background-color: yellow;
  }

  .font-1 {
    /*display:inline-block;*/
    float: left;
    width: 380px;
    font-size: 10px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .font-2 {
    height: 30px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    font-family: PingFang-SC-Medium;
    line-height: 30px;
  }

  .font-21 {
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(153, 153, 153, 1);
    line-height: 20px;
  }

  .list_img {
    width: 380px;
    height: 276px;
  }
</style>
