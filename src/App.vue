<template>
  <div id="app">
    <Head v-on:change="getChildData"></Head>
    <!--<router-view/>-->
    <!--网页最小高度600,，最小宽度1200-->
    <div style="min-width: 1200px;min-height: 600px;">
      <component :is=" comp "  v-bind:caseStatus="caseStatus"></component>
    </div>
    <Foot  v-on:change="getChildData2" ></Foot>
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
import Detail from './components/detail'

export default {
  name: 'App',
  components: { Head, Foot, Home, Contact, Case, HomeFurnishing, RealScene, SetMeal, Village, Customized, Detail },
  data () {
    return {
      comp: 'home',
      caseStatus: true
    }
  },
  methods: {
    getChildData: function (msg) {
      this.caseStatus = !this.caseStatus
      this.comp = msg
    },
    getChildData2: function (msg) {
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
