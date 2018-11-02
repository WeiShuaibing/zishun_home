<template>
    <div class="head">
        <div class="up">
          <div class="name">紫顺装饰</div>
          <div class="phone">
            <icon  :w="55" :h="55" name="phone2"></icon>
            1234567890
          </div>
        </div>
        <div class="down">
          <div class="downCenter">
            <div class="navigation">首页</div>
            <div class="navigation">案例展示</div>
            <div class="navigation">案例展示</div>
            <div class="navigation">案例展示</div>
            <div class="navigation">案例展示</div>
            <div class="navigation">案例展示</div>
            <div class="navigation">案例展示</div>
            <div class="navigation">案例展示</div>
          </div>

        </div>
    </div>
</template>

<script>
export default {
  name: 'head'
}
</script>

<style scoped lang="less">
.head{
  color: #7e61ef;
  /*background-color: orchid;*/
  height: 130px;
  .up{
    margin: 0 auto;
    width: 1200px;
    height: 85px;
    /*background-color: antiquewhite;*/
    .name{
      float: left;
      line-height: 85px;
      font-size: 30px;
      font-weight: 600;
    }
    .phone{
      line-height: 85px;
      float: right;
      font-size: 30px;
    }
  }
  .down{
    background-color: #7e61ef;
    color: white;
    font-size: 16px;
    .downCenter{
      margin: 0 auto;
      width: 1200px;
      height: 45px;
      display: flex;
      .navigation{
        text-align: center;
        flex: 1;
        line-height: 45px;
      }
    }
  }

}
</style>
