<template>
<div class="main">
  <div class="detail_location">
    首页 > 案例展示 > 详情
  </div>
  <div class="detail_title">
    <h1>保利心语2期110平北欧风格</h1>
  </div>
  <div class="detail_style">
    <div class="detail_style_item">小区名称：保利心语2期</div>
    <div class="detail_style_item">风格：北欧</div>
    <div class="detail_style_item">户型：二室三厅</div>
    <div class="detail_style_item">设计师：刘培与</div>
    <div class="detail_style_item">面积：110平米</div>
  </div>
  <div class="detail_content">
    <p class="detail_content_instruction">设计说明：</p>
    <div>
      这是详情内容ss
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'detail', // 详情页面模板
  data () {
    return {
      res: []
    }
  },

  props: ['id'],
  mounted () {
    this.$http({
      url: '/api/home/case/getCaseList?&id=' + this.id,
      methods: 'get'
    }).then(res => {
      this.res = res.data
      console.log(res)

    }).catch(err => {
      console.log(err)
    })
  }
  // 获得返回值
}
</script>

<style scoped lang="less">
.main{
  width: 1200px;
  margin: 0 auto;
  /*border: 1px solid red;*/
  height: 650px;
  font-size: 16px;
}
.detail_location{
  height: 60px;
  /*border: 1px solid red;*/
  line-height: 60px;
  font-size: 14px;
}
.detail_title{
  text-align: center;
  line-height: 2;
}
.detail_style{
  display: flex;
  justify-content: space-around;
  border-bottom: 1px dashed;
  font-size: 14px;
  .detail_style_item{
    flex: 1;
    line-height: 3;
  }
}
.detail_content{
  .detail_content_instruction{
    line-height: 3;
    padding-left: 10px;
    font-size: 20px;
  }
}

</style>
