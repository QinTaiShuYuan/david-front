<template>
  <div>
    <el-row align="middle" class="overview-row">
      <el-col :span="2"></el-col>
      <el-col :span="6" class="overview-image">
        <div class="wine-image">
          <div class="block">
            <el-image :src="url" style="height: 400px" fit="contain">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </div>
        </div>
      </el-col>
      <el-col :span="14" class="overview-info">
        <div>法国卡尔诺（中级庄）城堡干红葡萄酒750ml</div>
        <div>中级庄品质，法国原瓶进口</div>
        <el-table :data="tableData" stripe width="300em" style="width: 100%" :default-sort="{prop: 'hkd', order: 'descending'}">
          <el-table-column prop="hkd" label="港币/HK$" width="100em" sortable></el-table-column>
          <el-table-column prop="usd" label="美元/$" width="100em" sortable></el-table-column>
          <el-table-column prop="eur" label="欧元/€" width="100em" sortable></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="2"></el-col>
    </el-row>
    <el-row>
      <div></div>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      url: require('../assets/wine1.jpg'),
      tableData: []
    }
  },
  created () {
    this.getWines()
  },
  methods: {
    getWines () {
      this.$axios
        .get('/api/david/price/1', {
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
    },
    formatter (row, column) {
      return row.address
    },
    query: function () {
      if (this.input == null || this.input === '') {
        this.input = '请输入关键字'
        // document.getElementsByTagName("input")[0].style.background = "#ff9900";
        // document.getElementsByTagName("input")[0].style.background = "#ffd000";
        // document.getElementsByTagName("input")[0].style.background = "white";
      } else {
        let queryAPI = '/api/david/wines/' + this.input
        this.$axios
          .get(queryAPI, {
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
      }
    }
  }
}
</script>

<style scoped>
.overview-row {
  margin-top: 3%;
}
.overview-image {
  border: 1px solid #f2f2f2;
}
.overview-info {
  border: 1px solid #f2f2f2;
  text-align: start;
}

.el-col {
  border: 1px solid transparent;
}

</style>
<style>
.my-input .el-input__inner {
  border-radius: 0px;
}
</style>
