// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Icon from 'vue2-svg-icon/Icon.vue' // 引入svg图标库

import axios from 'axios'
import promise from 'es6-promise' // 解决兼容性

promise.polyfill()

Vue.prototype.$http = axios // 将axios挂载到Vue实例中的$ajax上面,在项目中的任何位置通过this.$http使用

Vue.config.productionTip = false

Vue.component('icon', Icon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
