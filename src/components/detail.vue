<template>
<div class="main">
  <div class="detail_location">
    首页 > 案例展示 > 详情
  </div>
  <div class="detail_title">
    <h1>{{det.title}}</h1>
  </div>
  <div class="detail_style">
    <div class="detail_style_item">小区名称：{{det.village}}</div>
    <div class="detail_style_item">风格：{{det.style}}</div>
    <div class="detail_style_item">户型：{{det.hourse}}</div>
    <div class="detail_style_item">设计师：{{det.designer}}</div>
    <div class="detail_style_item">面积：{{det.area}}</div>
  </div>
  <div style="clear: both;"></div>
  <div class="detail_content">
    <p class="detail_content_instruction">设计说明：</p>
    <div v-html="det.content">
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'detail', // 详情页面模板
  data () {
    return {
      det: {
        title: '',
        village: '',
        style: '',
        hourse: '',
        designer: '',
        area: '',
        content: ''
      }
    }
  },
  props: ['id'],
  mounted () {
    this.$http({
      url: 'http://www.yun520.xyz/home/case/getCaseById?&id=' + this.id,
      methods: 'get'
    }).then(res => {
      res.data.data.content = this.htmlDecodeByRegExp(res.data.data.content)
      this.det = res.data.data
      console.log(this.det.content)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    htmlDecodeByRegExp (str) {
      var s = ''
      if (str.length === 0) return ''
      s = str.replace(/&amp;/g, '&')
      s = s.replace(/&lt;/g, '<')
      s = s.replace(/&gt;/g, '>')
      s = s.replace(/&nbsp;/g, ' ')
      s = s.replace(/&#39;/g, "\\'")
      s = s.replace(/&quot;/g, '"')
      return s
    }
  }

}
</script>

<style scoped lang="less">
.main{
  width: 1200px;
  margin: 0 auto;
  /*border: 1px solid red;*/
  font-size: 16px;
}
.detail_location{
  height: 60px;
  /*border: 1px solid red;*/
  line-height: 60px;
  font-size: 14px;
}
.detail_title{
  height: 64px;
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
  margin-bottom: 60px;
  .detail_content_instruction{
    line-height: 3;
    padding-left: 10px;
    font-size: 20px;
  }
}

</style>
