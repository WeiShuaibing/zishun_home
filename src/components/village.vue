<template>
  <div>
    <div>
      <div class="one">
        <span>首页 > 施工小区</span>
      </div>
      <div  class="ybody">
        <ul>
          <li v-for="(item,index) in imgs" :key="index" style="display:inline-block" >
            <div class="font-1" >
              <div class="show_img_out">
                <!-- <div class="bofang">
                   &lt;!&ndash;悬浮播放图标&ndash;&gt;
                   <img src="../assets/image/bofang.png" style="width: 60px;height: 60px;" />
                 </div>-->
                <img :src="item.img" class="show_img"/>
              </div>
              <div class="font-2">
                {{item.title}}
              </div>
            </div>
          </li>
        </ul>
        <!--<ul>
          <li @click="change(item.url)"  style="display:inline-block" >
            <div class="font-1" >
              <div class="show_img_out">
                <img :src="imgs[0]" class="show_img"/>
              </div>
              <div class="font-2">
                test Title
              </div>
            </div>
          </li>
        </ul>-->
      </div>
      <!--增加下边距-->
      <div style="height: 80px;width: 1200px;margin: 0 auto;"></div>
      <!--分页-->
      <!--<div class="changepage">
        <div style="margin-top: 25px;">
          <Pagination
            :current-page="1"
            :page-size="pagesize"
            :total="totalNum"
            background
            layout="total, prev, pager, next, jumper"
            @current-change="handleCurrentChange"/>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import { Pagination } from 'element-ui'
import img1 from '../assets/image/village1.jpg'
import img2 from '../assets/image/village2.jpg'
import img3 from '../assets/image/village3.jpg'
import img4 from '../assets/image/village4.jpg'
import img5 from '../assets/image/village5.jpg'
import img6 from '../assets/image/village6.jpg'
export default {
  name: 'village', // 施工小区
  components: { Pagination },
  data () {
    return {
      imgs: [
        { 'img': img1, 'title': '鑫隆小区' },
        { 'img': img2, 'title': '鹤鸣花园' },
        { 'img': img3, 'title': '梅苑小区' },
        { 'img': img4, 'title': '东红小区' },
        { 'img': img5, 'title': '武陵小区' },
        { 'img': img6, 'title': '大瞾小区' }
      ],
      listData: null,
      totalNum: 0, // 实景总数
      page: 1, // 当前页
      pagesize: 6 // 每页几条数据
    }
  },
  filters: {
    urlFilter (val) {
      return 'http://www.yun520.xyz/' + val
      // console.log(val)
    }
  },
  created () {
    // this.getList()
  },
  methods: {
    getList () {
      this.$http({
        url: 'http://www.yun520.xyz/home/scence/getScenceList',
        methods: 'get',
        params: {
          'page': this.page, // 第一页
          'limit': this.pagesize // 每页12条
        }
      }).then(res => {
        res = res.data
        console.log(res.data)
        this.totalNum = parseInt(res.other)
        this.listData = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    handleCurrentChange (val) {
      this.page = val
      this.getList()
    }
  }
}
</script>

<style scoped  lang="less">
  .ybody{
    margin: 0 auto;
    width: 1200px;
    font-size: 16px;
  }
  .font-1{
    position: relative;
    display:inline-block;
    width: 560px;
    font-size: 20px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    overflow: hidden;
  }
  .font-2{
    font-weight:500;
    color:rgba(51,51,51,1);
    line-height:45px;
  }
  .show_img_out{
    width: 560px;
    height: 320px;
    background-image: url("../assets/image/default.jpg");
  }
  .show_img{
    display:inline-block;
    width: 560px;
    height: 320px;
    transition: all 0.6s;
    z-index: 99;
  }
  .show_img:hover{
    transform: scale(1.1);
  }
  .changepage{
    height: 80px;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  .bofang{
    width: 30px;
    height: 30px;
    float: top;
    width: 20px;
    position: absolute;
    left: 44.5%;
    top: 36%;
    z-index: 100;
  }
  .one{
    width: 1200px;
    margin: 0 auto;
    height: 50px;
    font-size: 14px;
    line-height: 4;
    padding-left: 50px;
  }
</style>
