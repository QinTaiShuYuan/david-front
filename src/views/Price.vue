<template>
  <el-row justify="center" align="middle">
    <el-col :span="4"></el-col>
    <el-col :span="16">
        <el-table :data="tableData" size="medium" stripe style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
          <el-table-column prop="wine_name" label="酒名 " sortable></el-table-column>
          <el-table-column prop="hkd" label="港币 / HK$ " sortable></el-table-column>
          <el-table-column prop="usd" label="美元 / $ " sortable></el-table-column>
          <el-table-column prop="eur" label="欧元 / € " sortable></el-table-column>
          <el-table-column prop="date" label="日期 " sortable></el-table-column>
        </el-table>
    </el-col>
    <el-col :span="4"></el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Price',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.getPrice()
  },
  methods: {
    getPrice () {
      const id = this.$route.params.id
      const url = '/api/david/price/' + id
      this.$axios
        .get(url, {
          headers: {'token': sessionStorage.getItem('token')}}
        )
        .then(
          response => (
            this.tableData = response.data.data
          )
        )
        .catch(function (error) {
          console.log(error)
        })
      console.log(this.tableData)
    }
  }
}
</script>

<style scoped>
.el-col {
  border: 1px solid transparent;
}

.el-table {
  margin-top: 10%;
  font-size: 1em;
}
</style>
