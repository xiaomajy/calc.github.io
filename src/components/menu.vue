<template>
    <div>
        <el-menu 
    :default-active="$route.path"
    class="el-menu-demo"
    
    router
    mode="horizontal"
    background-color="#0d8f23"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/" >计算器</el-menu-item>
    <el-menu-item index="/mtcalc">房贷计算器</el-menu-item >
    <el-menu-item index="/agecalc">年龄计算器</el-menu-item>
    <el-menu-item index="4">其他</el-menu-item>
  </el-menu>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
const activeIndex = ref('/')
</script>
<!-- 表示在该页面写的样式不会影响其他功能 -->
<style lang="scss" scoped>
    .el-menu-demo{
justify-content: center; /* 水平居中 */
--el-menu-item-font-size:20px;
}

</style>