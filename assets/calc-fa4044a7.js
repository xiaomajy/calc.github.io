import{d as defineComponent,r as ref,a as resolveComponent,o as openBlock,c as createElementBlock,b as createBaseVNode,e as createVNode,f as createTextVNode,w as withCtx,F as Fragment,_ as _export_sfc}from"./index-ebd4a55b.js";import{E as ElInput,a as ElButton,b as ElMessage}from"./el-message-80ef8a27.js";const _hoisted_1={class:"calc"},_hoisted_2={class:"calc_input"},_hoisted_3={class:"calc_button"},_hoisted_4={class:"calc_res"},_sfc_main=defineComponent({__name:"calc",setup(__props){const inputNumber=ref(""),output=ref(""),errorMes=()=>{ElMessage("输入错误！")};setTimeout(()=>{navigator.userAgent.match(/(phone|Android|Mobile)/i)&&alert("请使用PC/电脑端访问！")},10);const clear=()=>{inputNumber.value="",output.value=""},countNumber=()=>{let s=inputNumber.value;eval(s)!=1/0?output.value=eval(s):errorMes()};return(c,e)=>{const l=resolveComponent("mymenu"),o=ElInput,a=ElButton,n=resolveComponent("router-view");return openBlock(),createElementBlock(Fragment,null,[createBaseVNode("div",null,[createVNode(l)]),createBaseVNode("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,[createBaseVNode("p",null,[createTextVNode("请输入："),createVNode(o,{modelValue:inputNumber.value,"onUpdate:modelValue":e[0]||(e[0]=t=>inputNumber.value=t),placeholder:"请输入公式",size:"large",style:{width:"500px"},id:"input"},null,8,["modelValue"])])]),createBaseVNode("div",_hoisted_3,[createBaseVNode("p",null,[createVNode(a,{type:"success",style:{width:"auto"},size:"small",onClick:countNumber},{default:withCtx(()=>[createTextVNode("计算")]),_:1}),createVNode(a,{type:"success",style:{"margin-left":"50px",width:"auto"},size:"small",onClick:clear},{default:withCtx(()=>[createTextVNode("清空")]),_:1})])]),createBaseVNode("div",_hoisted_4,[createBaseVNode("p",null,[createTextVNode("  结 果："),createVNode(o,{modelValue:output.value,"onUpdate:modelValue":e[1]||(e[1]=t=>output.value=t),size:"large",style:{width:"500px"},onClick:countNumber},null,8,["modelValue"])])])]),createVNode(n)],64)}}}),calc_vue_vue_type_style_index_0_scoped_36c36911_lang="",calc=_export_sfc(_sfc_main,[["__scopeId","data-v-36c36911"]]);export{calc as default};
