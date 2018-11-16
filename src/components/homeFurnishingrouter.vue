<template>
  <div class="ybody">
    <!--<title>智能家居导航栏</title>-->
    <div style="width: 1200px;margin: 0 auto;">
      <router-link to="/homeFurnishingrouter/y1">
        <div class="head-1">
          <div class="head-2"></div>
          <span style="line-height:20px;color:rgba(102,102,102,1);font-weight:500;font-size:14px;">衣柜</span>
        </div>
      </router-link>
      <router-link to="/homeFurnishingrouter/y2">
        <div class="head-1">
          <div class="head-2"></div>
          <span style="line-height:20px;color:rgba(102,102,102,1);font-weight:500;font-size:14px;">
        厨柜子</span>
        </div>
      </router-link>
      <img src="../assets/image/yq2.png" style="display: block ;width: 1200px"/>
    </div>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>

  </div>

</template>

<script>
export default {
  name: 'homeFurnishing' // 智能家居

}
</script>

<style scoped lang="less">
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateX(140px);
  }

  .v-enter-active, .v-leaver-active {
    transition: all 0.5s ease;
  }

  .head-1 {
    display: inline-block;
    margin: 20px;
    .head-2 {
      width: 60px;
      height: 60px;

      background-image: url('../assets/image/yh-h1.jpg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      -moz-background-size: 100% 100%;
    }
  }

  .ybody {
    /*margin: 0 auto;*/
    /*width: 1200px;*/
    font-size: 16px;

  }

</style>
