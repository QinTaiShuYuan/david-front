<template>
  <el-table
      :data="bookData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="书名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="categoryName"
        label="分类"
        width="180">
      </el-table-column>
      <el-table-column
        prop="publisherName"
        label="出版社">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
  data () {
    return {
      bookData: []
    }
  },
  methods: {
    getList () {
      this.$http.get('/api/book/list')
        .then(response => {
          console.log(response.data)
          this.bookData = response.data.data
        })
      // 错误处理
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style>

</style>