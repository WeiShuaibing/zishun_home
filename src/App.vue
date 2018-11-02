<template>
  <div id="app">
    <Head></Head>
    <!--<router-view/>-->
    <div style="height: 400px;"></div>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from './components/basic/head'
import Foot from './components/basic/foot'
export default {
  name: 'App',
  components: { Head, Foot }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {

}
</style>
