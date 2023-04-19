<template>
  <!-- 导航 -->
   <div>
    <!-- 这在当前应用的任意组件中都可用 -->
    <mymenu/>
   </div>
    <!-- 计算器 -->
   <div class="calc">
    <p>请输入：<el-input v-model="inputNumber" placeholder="请输入公式" size="large" style="width: 500px;" id="input"/></p>
    <p> <el-button type="success"  style="margin-left: 150px; width: auto;" size="small" @click="countNumber">计算</el-button><el-button type="success"  style="margin-left: 50px; width: auto;" size="small" @click="clear">清空</el-button></p>
    <p>&nbsp;&nbsp;结&nbsp;果：<el-input v-model="output"  size="large" style="width: 500px;" @click="countNumber"  /></p>
   </div>
   <router-view></router-view>
  </template>
  <!--import区 -->
  <script lang="ts" setup>
import { ref } from 'vue'
const inputNumber = ref(''as any)
const output=ref(''as any)
const errorMes = () => {
  ElMessage('输入错误，请检查！')
}
const clear=()=>{
  inputNumber.value=''
  output.value=''
}
const countNumber=()=>{
    let s=inputNumber.value
    if(eval(s)!=Infinity){
      output.value=eval(s)
    }else{
      errorMes()
    }
}
  </script>
<!-- 表示在该页面写的样式不会影响其他功能 -->
<style lang="scss" scoped>
.calc{
  margin-top: 100px;
  margin-left: 600px;
}
.el-button-left{
  margin-left: 850px;
}
.el-button{
   font-size: 40px;
    width: 50px;
    height: 50px;
    size: large;
}
</style>