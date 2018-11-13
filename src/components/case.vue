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
            <li v-bind:class="{ active: hourseActive === 1 }"><a class="liSelect" @click="hourseSelect($event,1)">全部</a></li>
            <li v-bind:class="{ active: hourseActive === 2 }"><a class="liSelect" @click="hourseSelect($event,2)">别墅</a></li>
            <li v-bind:class="{ active: hourseActive === 3 }"><a class="liSelect" @click="hourseSelect($event,3)">跃层</a></li>
            <li v-bind:class="{ active: hourseActive === 4 }"><a class="liSelect" @click="hourseSelect($event,4)">普通住宅</a></li>
            <li v-bind:class="{ active: hourseActive === 5 }"><a class="liSelect" @click="hourseSelect($event,5)">工装</a></li>
            <li v-bind:class="{ active: hourseActive === 6 }"><a class="liSelect" @click="hourseSelect($event,6)">二居室</a></li>
            <li v-bind:class="{ active: hourseActive === 7 }"><a class="liSelect" @click="hourseSelect($event,7)">三居室</a></li>
            <li v-bind:class="{ active: hourseActive === 8 }"><a class="liSelect" @click="hourseSelect($event,8)">四居室</a></li>
            <li v-bind:class="{ active: hourseActive === 9 }"><a class="liSelect" @click="hourseSelect($event,9)">Loft</a></li>
            <li v-bind:class="{ active: hourseActive === 10 }"><a class="liSelect" @click="hourseSelect($event,10)">复式</a></li>
          </ul>
        </div>
      </div>
      <div class="row2">
        <div class="row2_left">装修风格：</div>
        <div class="row2_right">
          <ul>
            <li v-bind:class="{ active: styleActive === 11 }"><a class="liSelect" @click="styleSelect($event,11)">全部</a></li>
            <li v-bind:class="{ active: styleActive === 12 }"><a class="liSelect" @click="styleSelect($event,12)">现代简约</a></li>
            <li v-bind:class="{ active: styleActive === 13 }"><a class="liSelect" @click="styleSelect($event,13)">简欧</a></li>
            <li v-bind:class="{ active: styleActive === 14 }"><a class="liSelect" @click="styleSelect($event,14)">新中式</a></li>
            <li v-bind:class="{ active: styleActive === 15 }"><a class="liSelect" @click="styleSelect($event,15)">北欧风格</a></li>
            <li v-bind:class="{ active: styleActive === 16 }"><a class="liSelect" @click="styleSelect($event,16)">简美风格</a></li>
            <li v-bind:class="{ active: styleActive === 17 }"><a class="liSelect" @click="styleSelect($event,17)">新古典</a></li>
            <li v-bind:class="{ active: styleActive === 18 }"><a class="liSelect" @click="styleSelect($event,18)">雅致主义</a></li>
            <li v-bind:class="{ active: styleActive === 19 }"><a class="liSelect" @click="styleSelect($event,19)">美式乡村</a></li>
            <li v-bind:class="{ active: styleActive === 20 }"><a class="liSelect" @click="styleSelect($event,20)">现代前卫</a></li>
            <li v-bind:class="{ active: styleActive === 21 }"><a class="liSelect" @click="styleSelect($event,21)">欧式古典</a></li>
            <li v-bind:class="{ active: styleActive === 22 }"><a class="liSelect" @click="styleSelect($event,22)">地中海风格</a></li>
            <li v-bind:class="{ active: styleActive === 23 }"><a class="liSelect" @click="styleSelect($event,23)">其他</a></li>
          </ul>
        </div>
      </div>
      <div class="row3">
        <div class="row3_left">房屋面积：</div>
        <div class="row3_right">
          <ul>
            <li v-bind:class="{ active: areaActive === 31 }"><a class="liSelect" @click="areaSelect($event,31)">全部</a></li>
            <li v-bind:class="{ active: areaActive === 24 }"><a class="liSelect" @click="areaSelect($event,24)">80-100平米</a></li>
            <li v-bind:class="{ active: areaActive === 25 }"><a class="liSelect" @click="areaSelect($event,25)">100-140平米</a></li>
            <li v-bind:class="{ active: areaActive === 26 }"><a class="liSelect" @click="areaSelect($event,26)">140-200平米</a></li>
            <li v-bind:class="{ active: areaActive === 27 }"><a class="liSelect" @click="areaSelect($event,27)">200-320平米</a></li>
            <li v-bind:class="{ active: areaActive === 28 }"><a class="liSelect" @click="areaSelect($event,28)">320-500平米</a></li>
            <li v-bind:class="{ active: areaActive === 29 }"><a class="liSelect" @click="areaSelect($event,29)">500-1000平米</a></li>
            <li v-bind:class="{ active: areaActive === 30 }"><a class="liSelect" @click="areaSelect($event,30)">1000平米以上</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="three">
      <!--<div class="three_item">
        <img :src="imgsrc" alt="点击查看详情" class="item_img"/>
        <div class="item_text">
          <div class="item_text_1">
            泰宏建业国际城130平北欧风格
          </div>
          <div class="item_text_2">
            普通住宅 | 北欧风格 | 80-100平米
          </div>
        </div>
      </div>-->

      <div v-for="item in listData" :key="item.id" class="three_item" @click="toDetail(item.id)">
        <div class="item_img_out">
          <img :src="item | urlFilter" class="item_img"/>
        </div>
        <div class="item_text">
          <div class="item_text_1">
           {{item.title}}
          </div>
          <div class="item_text_2">
            {{item.hourse}} | {{item.style}} | {{item.area}}
          </div>
        </div>
      </div>
    </div>
    <!--清除浮动效果-->
    <div style="clear: both;" />
    <div class="changepage">
      <div style="margin-top: 25px;">
        <Pagination
          :current-page="1"
          :page-size="pagesize"
          :total="totalNum"
          background
          layout="total, prev, pager, next, jumper"
          @current-change="handleCurrentChange"/>
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
      type: {
        hourse: '全部',
        style: '全部',
        area: '全部'
      },
      listData: null,
      baseUrl: 'http://zishun.wei.demo.cn/',
      pagesize: 12, // 每页条数
      page: 1, // 当前页码
      totalNum: 0,
      hourseActive: 1,
      styleActive: 11,
      areaActive: 31
    }
  },
  filters: {
    urlFilter (val) {
      return 'http://zishun.wei.demo.cn/' + val.cover
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.$http({
        url: '/api/home/case/getCaseList',
        methods: 'get',
        params: {
          'page': this.page, // 第一页
          'limit': this.pagesize, // 每页12条
          'hourse': this.type.hourse,
          'style': this.type.style,
          'area': this.type.area
        }
      }).then(res => {
        res = res.data
        console.log(res)
        //  给文章总数复制
        this.totalNum = parseInt(res.other)
        this.listData = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    handleCurrentChange (val) {
      this.page = val
      this.getList()
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
    },
    areaSelect (val, index) {
      this.areaActive = index
      this.type.area = val.currentTarget.innerHTML
      this.getList()
    },
    hourseSelect (val, index) {
      this.hourseActive = index
      console.log(val)
      this.type.hourse = val.currentTarget.innerHTML
      this.getList()
    },
    styleSelect (val, index) {
      this.styleActive = index
      this.type.style = val.currentTarget.innerHTML
      this.getList()
    },
    toDetail (id) {
      console.log(id)
      this.$router.push('/detail')
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
      /*background-color: #8cc5ff;*/
      .item_img_out{
        /*display: block;*/
        /*outline: none;*/
        /*position: relative;*/
        /*background-size: cover;*/
        /*background: no-repeat;*/
        background-image: url("../assets/image/default.jpg");
        width: 282px;
        height: 240px;
        padding-bottom: 3px;
      }
      .item_img{
        cursor: pointer;
        transition: all 0.6s;
        width: 100%;
        height: 100%;
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
.liSelect:hover{
  cursor:pointer;
  text-shadow: 0.2em 0.3em 0.2em #4F4F4F;
}
.active{
  color: red;
}
</style>
