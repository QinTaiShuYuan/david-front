<template>
  <div class="HelloClass">
    <h1>{{msg}}</h1>
    <h2>Element UI Button</h2>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloPage', // 我来了
  data () {
    return {
      msg: '欢迎来到Vue页面！'
    }
  }
}
</script>
<style scoped>
</style>