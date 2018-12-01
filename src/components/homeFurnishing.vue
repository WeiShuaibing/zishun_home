<template>
<div>
  <title>释放第一个router</title>
  <router-view></router-view>

  </div>
</template>

<script>
import y1 from '@/components/homeFurnishing/y1'
import y2 from '@/components/homeFurnishing/y2'
import Head from '@/components/basic/head'
import Foot from '@/components/basic/foot'
export default {
  name: 'homeFurnishing',
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
