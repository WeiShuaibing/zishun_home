<template>
  <div  class="ybody">

    <h3  style="display: block">厨柜子</h3>
    <!--底部显示区域-->
    <div  class="font">
      <div class="font-1" >
        <img src="../../../static/image/yf2.jpg"   style="display: block ;width: 350px"
        />
        <div  class="font-2">
          林语溪岸font-1
          <p  class="font-21">衣帽间|现代简约 </p>
        </div>
      </div>
      <div class="font-1" >
        <img src="../../../static/image/yf2.jpg"   style="display: block ;width: 350px"/>
        <div  class="font-2">
          林语溪岸font-1
          <p  class="font-21">衣帽间|现代简约 </p>
        </div>
      </div><div class="font-1" >
      <img src="../../../static/image/yf2.jpg"   style="display: block ;width: 350px"
      />
      <div  class="font-2">
        林语溪岸font-1
        <p  class="font-21">衣帽间|现代简约 </p>
      </div>
    </div>
    </div>

  </div>

</template>
<script>

export default {
  name: 'y2'

}

</script>
<style scoped>
  .ybody{
    margin: 0 auto;
    width: 1200px;
    font-size: 16px;

  }
  .font{
    flex-direction: row;

  }
  .font-1{
    display:inline-block;
    width: 350px;
    font-size: 10px;
    margin: 20px;
  }
  .font-2{
    /*margin:6px;*/
    font-size:28px;
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:40px;
  }
  .font-21{
    color: #999999;
  }
</style >
