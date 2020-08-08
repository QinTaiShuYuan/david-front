<template>
    <div class="query-goods">
        <el-input placeholder="搜索 酒名 / 品牌 / 品种" v-model="input" size="medium" class="my-input">
            <!-- <el-button slot="append" icon="el-icon-search" v-on:click="query" autofocus>搜索</el-button> -->
        </el-input>
        <el-button size="medium" plain autofocus v-on:click="query">搜索</el-button>
        <el-table :data="tableData" stripe style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
            <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
            <el-table-column prop="name" label="信息1" sortable width="180"></el-table-column>
            <el-table-column prop="name" label="信息2" sortable width="180"></el-table-column>
            <el-table-column prop="name" label="信息3" sortable width="180"></el-table-column>
            <el-table-column prop="name" label="信息4" sortable width="180"></el-table-column>
            <el-table-column prop="name" label="信息5" sortable width="180"></el-table-column>
            <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "Query",
        data() {
            return {
                input: '',
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            };
        },
        methods: {
            formatter(row, column) {
                return row.address;
            },
            query: function(){
                if (this.input == null || this.input == undefined || this.input == "") {
                    this.input = "请输入关键字"
                    // document.getElementsByTagName("input")[0].style.background = "#ff9900";
                    // document.getElementsByTagName("input")[0].style.background = "#ffd000";
                    // document.getElementsByTagName("input")[0].style.background = "white";
                }
                else{
                    this.$axios
                    .get('https://www.runoob.com/try/ajax/json_demo.json')
                    .then(
                        response => (this.info = response)
                        
                    )
                    .catch(function (error) {
                        console.log(error);
                    });
                    console.log(this.info)
                } 
            }
        }
    }
</script>

<style scoped>
.el-input {
    width: 40%;
    margin-top: 3%;
    border: 3px solid #FF0036;
}
.el-button {
    color: white;
    font-weight: bold;
    border: 3px solid #FF0036;
    background-color: #FF0036;
    height: 3em;
}
.el-table {
    margin-top: 3%;
}
</style>
<style>
.my-input .el-input__inner {
    border-radius: 0px;
}
</style>