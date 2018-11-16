<template>
  <div class="main">
    <div class="face">
      <!--<img :src="img.imgface" class="face_img" />-->
    </div>
    <div class="advantage">
      <div class="advantage_text">我们的优势</div>
      <div class="sandian">
        <div class="sandian_item">
          <div style="width:136px;margin: 0 auto;">
            <img :src="img.xiaolv" class="xiaolv" />
            <span class="sandian_title">效率</span>
          </div>
          <div class="sandian_detail">
            <span>精湛的施工工艺，完美的专业技术；精湛的施工工艺</span>
          </div>
        </div>
        <div class="sandian_item">
          <div style="width:136px;margin: 0 auto;">
            <img :src="img.gongyi" class="xiaolv" />
            <span class="sandian_title">效率</span>
          </div>
          <div class="sandian_detail">
            <span>精湛的施工工艺，完美的专业技术；精湛的施工工艺，完美的专业技术</span>
          </div>
        </div>
        <div class="sandian_item">
          <div style="width:136px;margin: 0 auto;">
            <img :src="img.jiage" class="xiaolv" />
            <span class="sandian_title">效率</span>
          </div>
          <div class="sandian_detail">
            <span>精湛的施工工艺，完美的专业技术；精湛的施工工艺，完美</span>
          </div>
        </div>
      </div>
    </div>
    <div class="teams">
      <div class="teams_text">优秀的团队</div>
      <div class="teams_img">
        <div class="teams_img_item">
          <div style="width: 282px;margin: 0 auto;overflow: hidden;">
            <img :src="img.teams1" class="teams_img_item_img" />
          </div>
          <div style="height: 70px;width:282px;margin:0 auto;background:rgba(245,245,245,1);text-align: center;">
            <div style="line-height: 65px;">
              <span style="font-size:20px;line-height:28px;">高凡</span>
              <span style="font-size:14px;line-height:20px;">高级设计师</span>
            </div>
          </div>
        </div>
        <div class="teams_img_item">
          <div style="width: 282px;margin: 0 auto;overflow: hidden;">
            <img :src="img.teams2" class="teams_img_item_img" />
          </div>
          <div style="height: 70px;width:282px;margin:0 auto;background:rgba(245,245,245,1);text-align: center;">
            <div style="line-height: 65px;">
              <span style="font-size:20px;line-height:28px;">高凡</span>
              <span style="font-size:14px;line-height:20px;">设计总监</span>
            </div>
          </div>
        </div>
        <div class="teams_img_item">
          <div style="width: 282px;margin: 0 auto;overflow: hidden;">
            <img :src="img.teams3" class="teams_img_item_img" />
          </div>
          <div style="height: 70px;width:282px;margin:0 auto;background:rgba(245,245,245,1);text-align: center;">
            <div style="line-height: 65px;">
              <span style="font-size:20px;line-height:28px;">高凡</span>
              <span style="font-size:14px;line-height:20px;">高级设计师</span>
            </div>
          </div>
        </div>
        <div class="teams_img_item">
          <div style="width: 282px;margin: 0 auto;overflow: hidden;">
            <img :src="img.teams4" class="teams_img_item_img" />
          </div>
          <div style="height: 70px;width:282px;margin:0 auto;background:rgba(245,245,245,1);text-align: center;">
            <div style="line-height: 65px;">
              <span style="font-size:20px;line-height:28px;">高凡</span>
              <span style="font-size:14px;line-height:20px;">设计总监</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="business">
      <div class="business_text">我们的业务</div>
      <div class="sikuai">
        <div class="row1">
          <div class="row1_left">
            <div class="row1_left_text">全屋定制</div>
            <div class="row1_left_text2">
              精湛的施工工艺，完美的专业技术；
              精湛的施工工艺。精湛的施工工艺，完美的专业技术；精湛的施工工艺。
            </div>
          </div>
          <div class="row1_right">
            <img :src="img.row1" class="row1_right_img">
          </div>
        </div>
        <div class="row2">
          <div class="row2_left">
            <img :src="img.row2" class="row2_left_img">
          </div>
          <div class="row2_right">
            <div class="row2_right_text">智能家居</div>
            <div class="row2_right_text2">
              精湛的施工工艺，完美的专业技术；
              精湛的施工工艺。精湛的施工工艺，完美的专业技术；精湛的施工工艺。
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 80px;"></div>
  </div>
</template>

<script>
import imgface from '../assets/image/face.png'
import xiaolv from '../assets/image/xiaolv.png'
import gongyi from '../assets/image/gongyi.png'
import jiage from '../assets/image/jiage.png'
import teams1 from '../assets/image/teams1.png'
import teams2 from '../assets/image/teams2.png'
import teams3 from '../assets/image/teams3.png'
import teams4 from '../assets/image/teams4.png'
import row1 from '../assets/image/row1.png'
import row2 from '../assets/image/row2.png'

export default {
  name: 'home', // 首页
  data () {
    return {
      img: {
        imgface,
        xiaolv,
        gongyi,
        jiage,
        teams1,
        teams2,
        teams3,
        teams4,
        row1,
        row2
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
  .face {
    /*width: 1920px;*/
    width: 100%;
    height: 860px;
    margin: 0 auto;
    /*.face_img{*/
    /*width: 1920px;*/
    background-repeat: no-repeat;
    overflow: hidden;
    display: block;
    outline: none;
    position: relative;
    background-size: cover;
    background-image: url("../assets/image/face.png");
    /*}*/
  }
  .advantage{
    width: 1200px;
    margin: 0 auto;
    .advantage_text{
      width:210px;
      font-size:42px;
      font-weight:500;
      line-height:4;
      text-align: center;
      margin: 0 auto;
    }
    .sandian{
      height: 350px;
      display: flex;
      .sandian_item{
        flex: 1;
        text-align: center;
        .xiaolv{
          width: 136px;
          height: 136px;
        }
        .sandian_title{
          font-size:30px;
          font-weight:500;
          color:rgba(51,51,51,1);
          line-height: 3;
        }
        .sandian_detail{
          margin: 0 auto;
          width:308px;
          height:56px;
          font-size:20px;
          line-height:28px;
        }
      }
    }
  }
  .teams{
    padding-bottom: 30px;
    width: 1200px;
    margin: 0 auto;
    .teams_text{
      width:210px;
      font-size:42px;
      font-weight:500;
      line-height:4;
      text-align: center;
      margin: 0 auto;
    }
    .teams_img{
      display: flex;
      .teams_img_item{
        flex: 1;
        height: 370px;
        justify-content:space-between;

        .teams_img_item_img{
          margin: 0 auto;
          width:282px;
          height: 300px;
          transition: all 0.6s;
        }
        .teams_img_item_img:hover{
          transform: scale(1.2);
        }
      }
    }
  }
  .business{
    width: 1200px;
    margin: 0 auto;
    .business_text{
      width:210px;
      font-size:42px;
      font-weight:500;
      line-height:4;
      text-align: center;
      margin: 0 auto;
    }
    .sikuai{
      width: 1200px;
      height: 780px;
      margin: 0 auto;
      .row1{
        height: 390px;
        .row1_left{
          height: 100%;
          float: left;
          width: 600px;
          background-color: #8062EE;
          .row1_left_text{
            font-size:42px;
            line-height:4;
            font-weight:800;
            font-family:PingFang-SC-Heavy;
            color: white;
            width: 184px;
            margin: 0 auto;
          }
          .row1_left_text2{
            margin: 0 auto;
            width:415px;
            height:108px;
            font-size:22px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:36px;
          }
        }
        .row1_right{
          float: right;
          height: 100%;
          width: 600px;
          overflow: hidden;
          .row1_right_img{
            width: 600px;
            height: 390px;
            transition: all 0.6s;
          }
          .row1_right_img:hover{
            transform: scale(1.2);
          }
        }
      }
      .row2{
        height: 390px;
        .row2_left{
          height: 100%;
          float: left;
          width: 600px;
          overflow: hidden;
          .row2_left_img{
            width: 600px;
            height: 390px;
            transition: all 0.6s;
          }
          .row2_left_img:hover{
            transform: scale(1.2);
          }
        }
        .row2_right{
          float: right;
          height: 100%;
          width: 600px;
          background-color: rgba(245,245,245,1);
          .row2_right_text{
            font-size:42px;
            line-height:4;
            font-weight:800;
            font-family:PingFang-SC-Heavy;
            width: 184px;
            margin: 0 auto;
          }
          .row2_right_text2{
            margin: 0 auto;
            width:415px;
            height:108px;
            font-size:22px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            line-height:36px;
          }
        }
      }
    }
  }
}
</style>
