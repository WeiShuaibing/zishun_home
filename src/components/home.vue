<template>  <div>
    <div class="ylun"></div>

  <div class="main">

    <center>我们的优势</center>
        <div class="advance" > <img src="../../static/image/home.jpg"   style="display: block ;"/>     </div>
    <center>优秀的团队</center>
    <ul>

      <li    :key="index"  @click="change(index)"  v-for="(todo,index) in todos"  style="display:inline-block" >
        <div class="font-1" >
          <img  :src="todo.tupian"   style="display:inline-block;width: 260px"
          />
          <div  class="font-2" >
            {{todo.text}}         <div  class="font-21">    {{todo.position}}   </div>
          </div>
        </div>
      </li>
    </ul>

    <center>我们的业务</center>
    <table>
            <tr>
              <td class="fonty"><div class="fonty"><center>全屋定制</center>
                精湛的施工工艺，完美的专业技术，
                精湛的施工工艺，完美的专业技术
                精湛的施工工艺，完美的专业技术</div>
              </td>
              <td><img src="../../static/image/yf2.jpg"   style="display: block ;width: 580px"/></td>
            </tr>
            <tr>
              <td> <img src="../../static/image/yf2.jpg"   style="display: block ;width: 580px"/></td>
              <td class="fonty2"> <div class="fonty2"><center>智能家居</center>
                精湛的施工工艺，完美的专业技术，
                精湛的施工工艺，完美的专业技术
                精湛的施工工艺，完美的专业技术</div>
              </td>
            </tr>
    </table>

  </div></div>
</template>

<script>
export default {
  name: 'home', // 首页
  data () {
    return {
      todos: [
        {text: '高凡',position: '设计总监', tupian: '../../static/image/homeperson.jpg'},
        {text: '王一',position: '高级设计师', tupian: '../../static/image/homeperson.jpg'},
        {text: '李卓伟',position: '高级设计师', tupian: '../../static/image/homeperson.jpg'},
        {text: '杨洋',position: '设计总监', tupian: '../../static/image/homeperson.jpg'},
      ]
    }
  },
}
</script>

<style scoped  lang="less">
  .font-1{

    width: 260px;
    font-size: 20px;

    margin: 20px;
  }
  .font-2{
    background-color:#F5F5F5;
    margin:6px;
    display:block;
    .font-21{
      font-size:10px;

    }
  }
  .ylun{

    background-image: url(../../static/image/homehead.jpg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
     height: 600px;
  }
  .advance{
    text-align:center;
    width: 100%;
    padding-left: 180px;
  }
  .main{
    margin: 0 auto;
    width: 1200px;
    font-size: 16px;
  }

table{
  border:0;
  cellpadding:"0";
  cellspacing:"0";
  .td{
    width: 580px;

  }
  .fonty{
    background-color:#8062EE ;
    color: white;
    padding: 30px;
  }
  .fonty2{
    background-color:#F5F5F5
  }
  center{
    font-size: 30px;
    margin-top:0px;
    margin-bottom:50px;
  }

  }
  center{
    font-size: 30px;
    margin:50px;
  }
</style>
