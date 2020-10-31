<template>
  <el-row justify="center" align="middle">
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <div class="query-goods">
        <el-input placeholder="搜索 酒名 / 品牌 / 品种" v-model="input" size="medium" class="my-input">
          <!-- <el-button slot="append" icon="el-icon-search" v-on:click="query" autofocus>搜索</el-button> -->
        </el-input>
        <el-button size="medium" type="primary" icon="el-icon-search" v-on:click="query" autofocus>搜索</el-button>
        <el-table :data="tableData" stripe style="width: 100%" :default-sort="{prop: 'brand', order: 'descending'}">
          <el-table-column prop="name" label="酒名" sortable></el-table-column>
          <el-table-column prop="brand" label="品牌" sortable></el-table-column>
          <el-table-column prop="vol" label="容量" sortable></el-table-column>
          <el-table-column prop="in_stock" label="库存" sortable></el-table-column>
          <el-table-column prop="id" label="历史价格">
            <template slot-scope="scope">
              <div><el-link v-on:click="checkPrice(scope.$index)">查看<i class="el-icon-view el-icon&#45;&#45;right"></i></el-link></div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      input: '',
      tableData: []
    }
  },
  created () {
    this.getWines()
  },
  methods: {
    getWines () {
      this.$axios
        .get('/api/david/wines', {
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
    },
    checkPrice (index) {
      this.$router.push({
        path: '/price',
        name: 'Price',
        params: {
          id: this.tableData[index]['id']
        }
      })
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 40%;
  margin-top: 3%;
}

.el-button {
  color: white;
  font-weight: bold;
}

.el-table {
  margin-top: 3%;
}

.el-col {
  border: 1px solid transparent;
}

</style>
<style>
.my-input .el-input__inner {
  border-radius: 0px;
}

.el-button {
  border-radius: 0px;
}
</style>
