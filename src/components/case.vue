<template>
  <div>
    <h2>案例展示测试</h2>
    <p v-html="test"></p>
    <img :src='desc'/>
    <h3>test</h3>
  </div>
</template>

<script>
export default {
  name: 'case', // 案例展示
  data () {
    return {
      caseList: null,
      test: '',
      desc: ''
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.$http({
        url: '/api/admin/case/getCaseList',
        methods: 'get'
      }).then(res => {
        console.log(res.data.data[0].content)
        console.log(123)
        console.log(this.htmlDecodeByRegExp(res.data.data[4].content))
        this.test = this.htmlDecodeByRegExp(res.data.data[4].content)
        this.desc = this.htmlDecodeByRegExp(res.data.data[4].cover)
      }).catch(err => {
        console.log(err)
      })
    },
    htmlDecodeByRegExp (str) {
      var s = ''
      if (str.length === 0) return ''
      s = str.replace(/&amp;/g, '&')
      s = s.replace(/&lt;/g, '<')
      s = s.replace(/&gt;/g, '>')
      s = s.replace(/&nbsp;/g, ' ')
      s = s.replace(/&#39;/g, "\\'")
      s = s.replace(/&quot;/g, '"')
      return s
    }
  }
}
</script>

<style scoped  lang="less">
</style>
