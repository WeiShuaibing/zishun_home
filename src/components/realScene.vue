<template>
<div>
  <title>实景展示</title>
  <div  class="ybody">
    <ul>

      <li    :key="index"  @click="change(index)"  v-for="(todo,index) in todos"  style="display:inline-block" >
        <div class="font-1" >
          <img  :src="todo.tupian"   style="display:inline-block;width: 450px"
          />
          <div  class="font-2">
            {{todo.text}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'realScene', // 实景展示
  data () {
    return {
      todos: [
        {text: '保利心语', url: 'http://www.baidu.com', tupian: '../../static/image/yf1.jpg'},
        {text: '绿都城', url: 'http://www.tencent.com', tupian: '../../static/image/yf1.jpg'},
        {text: '凡科', url: 'http://www.tencent.com', tupian: '../../static/image/yf1.jpg'}
      ]
    }
  },
  methods: {
    change (i) {
      window.open(this.todos[i].url, '_blank', 'width=900,height=600,menubar=no,toolbar=no,status=no,scrollbars=yes')
    }
  }
}
</script>

<style scoped  lang="less">
  .ybody{
    margin: 0 auto;
    width: 1200px;
    font-size: 16px;
    .font-1{
      display:inline-block;
      width: 450px;
      font-size: 20px;
      margin-top: 50px;
      margin-left: 80px;
    }
    .font-2{
      margin:6px;
    }
  }
</style>
