<template>
  <div id="app">
    <Head v-on:change="getChildData"></Head>
    <!--<router-view/>-->
    <div>
      <component :is=" comp "></component>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from './components/basic/head'
import Foot from './components/basic/foot'

import Home from './components/home'
import Case from './components/case'
import Contact from './components/contact'
import HomeFurnishing from './components/homeFurnishing'
import RealScene from './components/realScene'
import SetMeal from './components/setMeal'
import Village from './components/village'
import Customized from './components/customized'

export default {
  name: 'App',
  components: { Head, Foot, Home, Contact, Case, HomeFurnishing, RealScene, SetMeal, Village, Customized },
  data () {
    return {
      comp: 'Home'
    }
  },
  methods: {
    getChildData: function (msg) {
      this.comp = msg
    }
  }
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
