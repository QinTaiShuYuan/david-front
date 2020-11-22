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
          <el-table-column label="">
            <el-button type="primary" @click="dialogFormVisible = true">更新价格</el-button>
          </el-table-column>
        </el-table>
        <el-dialog title="最新价格" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="港币 / HK$" :label-width="formLabelWidth">
              <el-input v-model="form.hkd" placeholder="HK$" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="港币 / HK$" :label-width="formLabelWidth">
              <el-input v-model="form.usd" placeholder="$" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="港币 / HK$" :label-width="formLabelWidth">
              <el-input v-model="form.eur" placeholder="€" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="updatePrice">确 定</el-button>
          </div>
        </el-dialog>
    </el-col>
    <el-col :span="4"></el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Price',
  data () {
    return {
      tableData: [],
      formLabelWidth: '120px',
      dialogFormVisible: false,
      form: {
        hkd: '',
        usd: '',
        eur: ''
      }
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
    },
    updatePrice () {
      this.dialogFormVisible = false
      const id = this.$route.params.id
      const url = '/api/david/price/' + id
      const json = {id: id, hkd: parseFloat(this.form.hkd), usd: parseFloat(this.form.usd), eur: parseFloat(this.form.eur)}
      this.$axios
        .put(url, JSON.stringify(json), {
          headers: {'Content-Type': 'application/json', 'token': sessionStorage.getItem('token')}}
        )
        .then(
          response => (
            this.getPrice()
          )
        )
        .catch(function (error) {
          console.log(error)
        })
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

.el-form {
  margin-top: 1%;
}
</style>
