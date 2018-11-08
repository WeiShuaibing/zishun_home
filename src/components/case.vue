<template>
  <div class="main">
    <div class="one">
      首页 > 案例展示
    </div>
    <div class="two">
      <div class="row1">
        <div class="row1_left">案例户型：</div>
        <div class="row1_right">
          <ul>
            <li>全部</li>
            <li>别墅</li>
            <li>跃层</li>
            <li>普通住宅</li>
            <li>工装</li>
            <li>二居室</li>
            <li>三居室</li>
            <li>四居室</li>
            <li>Loft</li>
            <li>复式</li>
          </ul>
        </div>
      </div>
      <div class="row2">
        <div class="row2_left">装修风格：</div>
        <div class="row2_right">
          <ul>
            <li>全部</li>
            <li>现代简约</li>
            <li>简欧</li>
            <li>新中式</li>
            <li>北欧风格</li>
            <li>简美风格</li>
            <li>新古典</li>
            <li>雅致主义</li>
            <li>美式乡村</li>
            <li>现代前卫</li>
            <li>欧式古典</li>
            <li>地中海风格</li>
            <li>其他</li>
          </ul>
        </div>
      </div>
      <div class="row3">
        <div class="row3_left">房屋面积：</div>
        <div class="row3_right">
          <ul>
            <li>全部</li>
            <li>80-100平米</li>
            <li>100-140平米</li>
            <li>140-200平米</li>
            <li>200-320平米</li>
            <li>320-500平米</li>
            <li>500-1000平米</li>
            <li>1000平米以上</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="three">
      <div class="three_item">
        <img :src="imgsrc" alt="点击查看详情" class="item_img"/>
        <div class="item_text">
          <div class="item_text_1">
            泰宏建业国际城130平北欧风格
          </div>
          <div class="item_text_2">
            普通住宅 | 北欧风格 | 80-100平米
          </div>
        </div>
      </div>
      <div class="three_item">
        <img :src="imasrc2" alt="点击查看详情" class="item_img"/>
        <div class="item_text">
          <div class="item_text_1">
            泰宏建业国际城130平北欧风格
          </div>
          <div class="item_text_2">
            普通住宅 | 北欧风格 | 80-100平米
          </div>
        </div>
      </div>
      <div class="three_item">
        <img :src="imgsrc" alt="点击查看详情" class="item_img"/>
        <div class="item_text">
          <div class="item_text_1">
            泰宏建业国际城130平北欧风格
          </div>
          <div class="item_text_2">
            普通住宅 | 北欧风格 | 80-100平米
          </div>
        </div>
      </div>
      <div class="three_item">
        <img :src="imasrc2" alt="点击查看详情" class="item_img"/>
        <div class="item_text">
          <div class="item_text_1">
            泰宏建业国际城130平北欧风格
          </div>
          <div class="item_text_2">
            普通住宅 | 北欧风格 | 80-100平米
          </div>
        </div>
      </div>
      <div class="three_item">
        <img :src="imasrc2" alt="点击查看详情" class="item_img"/>
        <div class="item_text">
          <div class="item_text_1">
            泰宏建业国际城130平北欧风格
          </div>
          <div class="item_text_2">
            普通住宅 | 北欧风格 | 80-100平米
          </div>
        </div>
      </div>

    </div>
    <!--清除浮动效果-->
    <div style="clear: both;" />
    <div class="changepage">
      <div style="margin-top: 25px;">
        <pagination
          background
          layout="prev, pager, next"
          :page-size="pagesize"
          :total='total'
          @size-change="sizechange"
          @current-change="currentchange"
          @prev-click="prevclick"
          @next-click="nextclick"
        >
        </pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { Pagination } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
export default {
  name: 'case', // 案例展示
  components: { Pagination },
  data () {
    return {
      imgsrc: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1541593284&di=da5fa11a65ac1c6130a3b1b4e66f96ad&src=http://imgsrc.baidu.com/imgad/pic/item/962bd40735fae6cd79fe484604b30f2442a70f4a.jpg',
      imasrc2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541604198502&di=1b59bea4218eb574489549bee923828e&imgtype=0&src=http%3A%2F%2Fpic10.photophoto.cn%2F20090107%2F0033034157010008_b.jpg',
      pagesize: 12,
      total: 1000
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.$http({
        url: '/api/admin/case/getCaseList',
        methods: 'get'
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    sizechange (val) {
      console.log('每页条数' + val)
    },
    prevclick (val) {
      console.log('前一页：' + val)
    },
    nextclick (val) {
      console.log('下一页' + val)
    },
    currentchange (val) {
      console.log('当前页' + val)
    },
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

<style scoped  lang="less">
.main{
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  margin: 0 auto;
  /*border: 1px solid red;*/
  font-size: 16px;
  .one{
    width: 1200px;
    margin: 0 auto;
    height: 50px;
    font-size: 14px;
    line-height: 4;
  }
  .two{
    width: 1200px;
    margin: 0 auto;
    line-height: 55px;
    text-align: center;
    border: 2px solid #DDDDDD;
    .row1{
      height: 55px;
      border-bottom: 2px solid #DDDDDD;
      .row1_left{
        float: left;
        width: 126px;
        background-color: #F5F5F5;
        border-right: 2px solid #DDDDDD;
      }
      .row1_right{
        float: right;
        width: 1000px;
        margin-right: 40px;
        ul{
          text-align: left;
        }
        li{
          font-size: 14px;
          margin-left: 18px;
          margin-right: 18px;
          list-style: none;
          display: inline;
        }
      }
    }
    .row2{
      height: 110px;
      border-bottom: 2px solid #DDDDDD;
      .row2_left{
        float: left;
        width: 126px;
        height: 100%;
        background-color: #F5F5F5;
        border-right: 2px solid #DDDDDD;
      }
      .row2_right{
        float: right;
        width: 1000px;
        margin-right: 40px;
        ul{
          text-align: left;
        }
        li{
          font-size: 14px;
          margin-left: 18px;
          margin-right: 18px;
          list-style: none;
          display: inline;
        }
      }
    }
    .row3{
      height: 55px;
      .row3_left{
        float: left;
        width: 126px;
        background-color: #F5F5F5;
        border-right: 2px solid #DDDDDD;
      }
      .row3_right{
        float: right;
        width: 1000px;
        margin-right: 40px;
        /*background-color: aqua;*/
        ul{
          text-align: left;
        }
        li{
          font-size: 14px;
          margin-left: 18px;
          margin-right: 18px;
          list-style: none;
          display: inline;
        }
      }
    }
  }
  .three{
    margin: 0 auto;
    width: 1224px;
    /*height: 600px;*/
    .three_item{
      overflow: hidden;
      margin-top: 30px;
      float: left;
      margin-left: 12px;
      margin-right: 12px;
      .item_img{
        cursor: pointer;
        transition: all 0.6s;
        width: 282px;
        height: 240px;
      }
      .item_img:hover{
        transform: scale(1.1);
      }
      .item_text{
        box-shadow:0px 2px 6px 0px rgba(171,171,171,0.2);
        .item_text_1{
          font-size: 14px;
          color: #333333;
          line-height:30px;
          padding-left: 5px;
        }
        .item_text_2{
          font-size: 14px;
          color: #999999;
          line-height:30px;
          padding-left: 5px;
        }
      }
    }
    /*.three_item:hover{*/
      /*transform: scale(1.1);*/
    /*}*/
  }
  .changepage{
    height: 80px;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
}

</style>
