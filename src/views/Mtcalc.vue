<template>
    <div>
        <mymenu/>
    </div>
    <div class="select">
        <el-radio-group v-model="radio1" class="ml-4">
      <el-radio label="1" >等额本息</el-radio>
      <el-radio label="2" >等额本金</el-radio>
    </el-radio-group>
    </div>
    <div class="content">
        <p>贷款金额：<el-input v-model="input_money" style="width: 200px; font-size: 10px;" placeholder="请输入贷款金额(单位：元)" /></p>
        <p>贷款利率：<el-input v-model="input_rate" style="width: 200px; font-size: 10px;" placeholder="请输入贷款利率(小数)"/></p>
        <p>贷款期限：<el-input v-model="input_time" style="width: 200px; font-size: 10x;" placeholder="请输入贷款期限(单位：月)"/></p>
        <p> <el-button type="primary" style="margin-left: 140px; width: 80px; height: 40px; font-size: 25px;" @click="select">计算</el-button></p>
    </div>
    <div style="margin-left: 430px;">
    <el-table :data="tableData"  style="width: 900px" height="250">
    <el-table-column prop="date" label="期次" width="180" />
    <el-table-column prop="money" label="偿还本金" width="180" />
    <el-table-column prop="rate_money" label="偿还利息" width="180"/>
    <el-table-column prop="all_money" label="偿还总额" width="180"/>
    <el-table-column prop="surplus_money" label="剩余本金" width="180" />
  </el-table>
  <p> <span v-bind:title="all_back_money" style="font-size: 20px; width: 60px;">累计还款:{{all_back_money}}</span> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; <span v-bind:title="all_back_rate" style="font-size: 20px;width: 60px;">累计利息:{{all_back_rate}}</span>
</p>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'
import target from '../class/target'
const radio1 = ref('')
const input_money = ref('')
const input_rate = ref('')
const input_time = ref('')
const tableData=ref([{

}])
const all_back_money=ref('')
const all_back_rate=ref('')
const errorMes = () => {
  ElMessage('请选择还款方式！')
}
const select=()=>{
    if(radio1.value=='1'){
        countMoney1()
    }else if(radio1.value=='2'){
        countMoney2()
    }else{
        errorMes()
        
    }
}
const countMoney1=()=>{
    tableData.value.splice(0)
    var t:target=new target()
    let money= parseFloat(input_money.value)
    let rate=parseFloat(input_rate.value)/12
    let time=parseFloat(input_time.value)
    let temp=Math.pow((1+rate),time)
    let res=money*rate*temp/(temp-1)
    t.surplus_money=money
    let total_money=0
    let total_rate=0
   for(let i=1;i<=time;i++){
            t.date='第'+i+'期'
            t.all_money=res //每月还款
            t.rate_money=(t.surplus_money*rate) //每月利息
            t.money=(t.all_money-t.rate_money)      //每月本金
            t.surplus_money=t.surplus_money-t.money
            total_money=total_money+t.money
            total_rate=total_rate+t.rate_money
            tableData.value.push(t.toString())
   }
   all_back_money.value=total_money.toFixed(3)+'元'
   console.log(all_back_money)
   all_back_rate.value=total_rate.toFixed(3)+'元'
   
}
var all_all=0;
const countMoney2=()=>{
    tableData.value.splice(0)
    var t:target=new target()
    let money= parseFloat(input_money.value)
    t.surplus_money=money
    let rate=parseFloat(input_rate.value)
    let time=parseFloat(input_time.value)
    let res=(money/time)+(money-money+t.surplus_money)*rate
    let total_money=0;
    let total_rate=0;
   for(let i=1;i<=time;i++){
            t.date='第'+i+'期'
            t.all_money=res //每月还款
            t.rate_money=(money-money+t.surplus_money)*rate //每月利息
            t.money=(money/time)      //每月本金
            t.surplus_money=t.surplus_money-t.money
            total_money=total_money+t.money
            total_rate=total_rate+t.rate_money
            tableData.value.push(t.toString())
   }
   all_back_money.value=total_money.toFixed(3)+'元'
   all_back_rate.value=total_rate.toFixed(3)+'元'
}

</script>

<style lang="scss" scoped >
    .select{
        margin-top: 80px;
        margin-left: 625px;

    }
    .el-radio {
        --el-radio-font-size: 40px;
}
.content{
    margin-top: 50px;
    margin-left: 650px;
}

</style>