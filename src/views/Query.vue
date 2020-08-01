<template>
    <div class="demo-input-size">
        <el-input placeholder="搜索 酒名 / 品牌 / 品种" v-model="input1" size="medium">
            <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
    </div>
</template>

<script>
    export default {
        name: "Query",
        data() {
            return {
                input1: '',
                input2: '',
                input3: '',
                input4: ''
            };
        }
    }
</script>

<style scoped>
.el-input {
    margin-top: 3%;
    width: 40%;
    border: 3px solid #409EFF;
}
</style>