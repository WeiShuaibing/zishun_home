<!--
<template>
<div class="main">
  <div class="face">
    &lt;!&ndash;<img :src="img.taocanFace" class="face_img" />&ndash;&gt;
  </div>
  <div class="jingzhuang">
    <div class="jingzhuang_text">八大空间全包精装</div>
    <div class="jiangzhaung_scence">
      <img :src="img.quanbao" alt="">
    </div>
  </div>

  <div class="category">
    <div class="category_navigation">
      <div>客厅</div>
      <div>餐厅</div>
      <div class="">主/次卧</div>
      <div class="">卫生间</div>
      <div class="">厨房</div>
      <div class="">阳台</div>
      <div class="">入户</div>
    </div>
    <div class="category_img">
      <img :src="img.keting" alt="">
    </div>
  </div>

  <div class="biaozhun">
    <div class="biaozhun_text">全程标准化施工工序</div>
    <div class="biaozhun_img">
      <img :src="img.gongxu" alt="">
    </div>
  </div>
  <div style="height: 80px;" />
</div>
</template>

<script>
import quanbao from '../assets/image/quanbao.png'
import taocanFace from '../assets/image/taocan_face.png'
import keting from '../assets/image/keting.png'
import gongxu from '../assets/image/gongxu.png'
export default {
  name: 'setMeal', // 套餐说明
  data () {
    return {
      img: {
        quanbao,
        taocanFace,
        keting,
        gongxu
      }
    }
  }
}
</script>

<style scoped lang="less">
.main{
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  font-size: 16px;
  margin: 0 auto;
  .face{
    /*width: 1920px;*/
    /*margin: 0 auto;*/
    /*.face_img{*/
      /*width: 1920px;*/
      /*height: 650px;*/
    /*}*/
    width: 100%;
    height: 650px;
    margin: 0 auto;
    background-repeat: no-repeat;
    overflow: hidden;
    display: block;
    outline: none;
    position: relative;
    background-size: cover;
    background-image: url("../assets/image/taocan_face.png");
  }
  .jingzhuang{
    width: 1200px;
    margin: 0 auto;
    .jingzhuang_text{
      padding-top: 25px;
      width:685px;
      font-size:80px;
      font-weight:500;
      line-height:2;
      text-align: center;
      margin: 0 auto;
    }
    .jiangzhaung_scence{
      img{
        width: 1200px;
        height: 844px;
        border: 1px dashed #888888;
      }
    }
  }
  .category{
    padding-top: 20px;
    width: 1200px;
    margin: 0 auto;
    .category_navigation{
      display: flex;
      height: 90px;
      div{
        flex: 1;
        justify-content: space-between;
        font-size:22px;
        font-weight:500;
        line-height:90px;
        letter-spacing:3px;
        text-align: center;
      }
      div:hover{
        border-bottom: 4px solid #7F61F0;
        font-weight:600;
        text-shadow:5px 5px 5px #999999;
      }

    }
    .category_img{
      img{
        width: 1200px;
        height: 530px;
      }
    }
  }
  .biaozhun{
    padding-top: 20px;
    width: 1200px;
    margin: 0 auto;
    .biaozhun_text{
      padding-top: 25px;
      width:769px;
      font-size:80px;
      font-weight:500;
      line-height:2.5;
      text-align: center;
      margin: 0 auto;
    }
    .biaozhun_img{
      img{
        width: 1200px;
        height: 600px;
      }
    }
  }
}
</style>
-->

<template>
  <div class="main">
      <Carousel :interval="4000" height="600px">
        <Carousel-item v-for="item in carouselimg" :key="item">
          <img :src="item" style="width: 100%;height: 600px;" />
        </Carousel-item>
      </Carousel>

    <!--<div class="face">
      &lt;!&ndash;<img :src="img.taocanFace" class="face_img" />&ndash;&gt;
    </div>-->
    <div class="jingzhuang">
      <div class="jingzhuang_text">八大空间全包精装</div>
      <div class="jiangzhaung_scence">
        <img :src="img.quanbao" alt="">
      </div>
    </div>

    <div class="category">
      <div class="category_navigation">
        <div>客厅</div>
        <div>餐厅</div>
        <div class="">主/次卧</div>
        <div class="">卫生间</div>
        <div class="">厨房</div>
        <div class="">阳台</div>
        <div class="">入户</div>
      </div>
      <div class="category_img">
        <img :src="img.keting" alt="">
      </div>
    </div>

    <div class="biaozhun">
      <div class="biaozhun_text">全程标准化施工工序</div>
      <div class="biaozhun_img">
        <img :src="img.gongxu" alt="">
      </div>
    </div>
    <div style="height: 80px;" />
  </div>
</template>

<script>
import { Carousel, CarouselItem } from 'element-ui'
import quanbao from '../assets/image/quanbao.png'
import taocanFace from '../assets/image/taocan_face.png'
import keting from '../assets/image/keting.png'
import gongxu from '../assets/image/gongxu.png'

import swiper1 from '../assets/image/499.png'
import swiper2 from '../assets/image/799.png'
import swiper3 from '../assets/image/999.png'
export default {
  name: 'setMeal', // 套餐说明
  components: { Carousel, CarouselItem },
  data () {
    return {
      img: {
        quanbao,
        taocanFace,
        keting,
        gongxu
      },
      carouselimg: [
        swiper1,
        swiper2,
        swiper3
      ]
    }
  }
}
</script>

<style scoped lang="less">
  .main{
    font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 16px;
    margin: 0 auto;
    .face{
      /*width: 1920px;*/
      /*margin: 0 auto;*/
      /*.face_img{*/
      /*width: 1920px;*/
      /*height: 650px;*/
      /*}*/
      width: 100%;
      height: 650px;
      margin: 0 auto;
      background-repeat: no-repeat;
      overflow: hidden;
      display: block;
      outline: none;
      position: relative;
      background-size: cover;
      background-image: url("../assets/image/taocan_face.png");
    }
    .jingzhuang{
      width: 1200px;
      margin: 0 auto;
      .jingzhuang_text{
        padding-top: 25px;
        width:685px;
        font-size:80px;
        font-weight:500;
        line-height:2;
        text-align: center;
        margin: 0 auto;
      }
      .jiangzhaung_scence{
        img{
          width: 1200px;
          height: 844px;
          border: 1px dashed #888888;
        }
      }
    }
    .category{
      padding-top: 20px;
      width: 1200px;
      margin: 0 auto;
      .category_navigation{
        display: flex;
        height: 90px;
        div{
          flex: 1;
          justify-content: space-between;
          font-size:22px;
          font-weight:500;
          line-height:90px;
          letter-spacing:3px;
          text-align: center;
        }
        div:hover{
          border-bottom: 4px solid #7F61F0;
          font-weight:600;
          text-shadow:5px 5px 5px #999999;
        }

      }
      .category_img{
        img{
          width: 1200px;
          height: 530px;
        }
      }
    }
    .biaozhun{
      padding-top: 20px;
      width: 1200px;
      margin: 0 auto;
      .biaozhun_text{
        padding-top: 25px;
        width:769px;
        font-size:80px;
        font-weight:500;
        line-height:2.5;
        text-align: center;
        margin: 0 auto;
      }
      .biaozhun_img{
        img{
          width: 1200px;
          height: 600px;
        }
      }
    }
  }
</style>
