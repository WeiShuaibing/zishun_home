
<template>
  <div>
    <title>智能家居</title>
    我是余多彬2
    <router-link    to="/homeFurnishingrouter/y1">机器人</router-link>
    <router-link    to="/homeFurnishingrouter/y2">手机</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import y1 from '@/components/homeFurnishing/y1'
import y2 from '@/components/homeFurnishing/y2'
import Head from '@/components/basic/head'
import Foot from '@/components/basic/foot'
export default {
  name: 'homeFurnishing', // 智能家居
  components: {
    Head,
    Foot,
    y2,
    y1
  }
}
</script>

<style scoped>

</style>
