<template>
  <div  class="ybody">
    <title>智能家居导航栏</title>

    <router-link to="/homeFurnishingrouter/y1">
          <div class="head-1">
      <div class="head-2"></div>
      衣柜</div>
    </router-link>
    <router-link to="/homeFurnishingrouter/y2">       <div class="head-1">
      <div class="head-2"></div>
      厨柜子</div></router-link>
    <img src="../../static/image/yq2.jpg"   style="display: block ;width: 1200px"
    />
<transition mode="out-in">
    <router-view></router-view>
</transition>
  </div>

</template>

<script>
import y1 from '@/components/homeFurnishing/y1'
import y2 from '@/components/homeFurnishing/y2'
import Head from '@/components/basic/head'
import Foot from '@/components/basic/foot'

export default {
  name: 'homeFurnishing', // 智能家居

}
</script>

<style  scoped lang="less">
  .v-enter,
  .v-leave-to{
    opacity: 0;
    transform: translateX(140px);
  }
  .v-enter-active,.v-leaver-active{
    transition: all 0.5s ease;
  }
  .head-1 {
    display: inline-block;
    margin: 20px;
    .head-2{
      width: 60px;
      height: 60px;

      background-image: url(../../static/image/yh-h1.jpg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
    }
  }
  .ybody{
    margin: 0 auto;
    width: 1200px;
    font-size: 16px;

  }

</style>
