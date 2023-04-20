import{g as $,z as y,d as T,C as U,K as _,u as re,j as d,A as M,o as p,c as x,b as L,w,p as q,a as E,q as m,s as o,a0 as G,x as Z,T as K,h as Q,O as le,ar as ie,as as ue,y as J,at as ce,r as z,au as A,I as de,l as pe,D as me,n as h,v as fe,M as N,aa as H,L as ge,F as ye,a4 as ve,av as Ce,aw as be,ax as he,Q as R,ay as W,az as O,aA as V,P as Te,aB as Be}from"./index-90a0a9f2.js";import{u as Ne,A as we,B as Se}from"./el-input-efb89086.js";const ke=$({a11y:{type:Boolean,default:!0},locale:{type:y(Object)},size:Ne,button:{type:y(Object)},experimentalFeatures:{type:y(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:y(Object)},zIndex:Number,namespace:{type:String,default:"el"}}),I={};T({name:"ElConfigProvider",props:ke,setup(s,{slots:t}){U(()=>s.message,n=>{Object.assign(I,n??{})},{immediate:!0,deep:!0});const e=we(s);return()=>_(t,"default",{config:e==null?void 0:e.value})}});const ze=$({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Me=["textContent"],xe=T({name:"ElBadge"}),Ee=T({...xe,props:ze,setup(s,{expose:t}){const e=s,n=re("badge"),a=d(()=>e.isDot?"":M(e.value)&&M(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return t({content:a}),(l,u)=>(p(),x("div",{class:m(o(n).b())},[_(l.$slots,"default"),L(K,{name:`${o(n).namespace.value}-zoom-in-center`,persisted:""},{default:w(()=>[q(E("sup",{class:m([o(n).e("content"),o(n).em("content",l.type),o(n).is("fixed",!!l.$slots.default),o(n).is("dot",l.isDot)]),textContent:G(o(a))},null,10,Me),[[Z,!l.hidden&&(o(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var Oe=Q(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const Ie=le(Oe),X=["success","info","warning","error"],i=ue({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:J?document.body:void 0}),$e=$({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:ie,default:i.icon},id:{type:String,default:i.id},message:{type:y([String,Object,Function]),default:i.message},onClose:{type:y(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:X,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),_e={destroy:()=>!0},c=ce([]),Le=s=>{const t=c.findIndex(a=>a.id===s),e=c[t];let n;return t>0&&(n=c[t-1]),{current:e,prev:n}},De=s=>{const{prev:t}=Le(s);return t?t.vm.exposed.bottom.value:0},Pe=(s,t)=>c.findIndex(n=>n.id===s)>0?20:t,Fe=["id"],je=["innerHTML"],Ae=T({name:"ElMessage"}),He=T({...Ae,props:$e,emits:_e,setup(s,{expose:t}){const e=s,{Close:n}=Ce,{ns:a,zIndex:l}=Se("message"),{currentZIndex:u,nextZIndex:f}=l,g=z(),C=z(!1),b=z(0);let S;const ee=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),se=d(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&A[r]}}),D=d(()=>e.icon||A[e.type]||""),te=d(()=>De(e.id)),P=d(()=>Pe(e.id,e.offset)+te.value),ne=d(()=>b.value+P.value),oe=d(()=>({top:`${P.value}px`,zIndex:u.value}));function k(){e.duration!==0&&({stop:S}=be(()=>{B()},e.duration))}function F(){S==null||S()}function B(){C.value=!1}function ae({code:r}){r===he.esc&&B()}return de(()=>{k(),f(),C.value=!0}),U(()=>e.repeatNum,()=>{F(),k()}),pe(document,"keydown",ae),me(g,()=>{b.value=g.value.getBoundingClientRect().height}),t({visible:C,bottom:ne,close:B}),(r,j)=>(p(),h(K,{name:o(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:j[0]||(j[0]=Ze=>r.$emit("destroy")),persisted:""},{default:w(()=>[q(E("div",{id:r.id,ref_key:"messageRef",ref:g,class:m([o(a).b(),{[o(a).m(r.type)]:r.type&&!r.icon},o(a).is("center",r.center),o(a).is("closable",r.showClose),r.customClass]),style:fe(o(oe)),role:"alert",onMouseenter:F,onMouseleave:k},[r.repeatNum>1?(p(),h(o(Ie),{key:0,value:r.repeatNum,type:o(ee),class:m(o(a).e("badge"))},null,8,["value","type","class"])):N("v-if",!0),o(D)?(p(),h(o(H),{key:1,class:m([o(a).e("icon"),o(se)])},{default:w(()=>[(p(),h(ge(o(D))))]),_:1},8,["class"])):N("v-if",!0),_(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(p(),x(ye,{key:1},[N(" Caution here, message could've been compromised, never use user's input as message "),E("p",{class:m(o(a).e("content")),innerHTML:r.message},null,10,je)],2112)):(p(),x("p",{key:0,class:m(o(a).e("content"))},G(r.message),3))]),r.showClose?(p(),h(o(H),{key:2,class:m(o(a).e("closeBtn")),onClick:ve(B,["stop"])},{default:w(()=>[L(o(n))]),_:1},8,["class","onClick"])):N("v-if",!0)],46,Fe),[[Z,C.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Re=Q(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Ve=1;const Y=s=>{const t=!s||R(s)||W(s)||O(s)?{message:s}:s,e={...i,...t};if(!e.appendTo)e.appendTo=document.body;else if(R(e.appendTo)){let n=document.querySelector(e.appendTo);Te(n)||(n=document.body),e.appendTo=n}return e},Ue=s=>{const t=c.indexOf(s);if(t===-1)return;c.splice(t,1);const{handler:e}=s;e.close()},qe=({appendTo:s,...t},e)=>{const n=`message_${Ve++}`,a=t.onClose,l=document.createElement("div"),u={...t,id:n,onClose:()=>{a==null||a(),Ue(b)},onDestroy:()=>{V(null,l)}},f=L(Re,u,O(u.message)||W(u.message)?{default:O(u.message)?u.message:()=>u.message}:null);f.appContext=e||v._context,V(f,l),s.appendChild(l.firstElementChild);const g=f.component,b={id:n,vnode:f,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:f.component.props};return b},v=(s={},t)=>{if(!J)return{close:()=>{}};if(M(I.max)&&c.length>=I.max)return{close:()=>{}};const e=Y(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const n=qe(e,t);return c.push(n),n.handler};X.forEach(s=>{v[s]=(t={},e)=>{const n=Y(t);return v({...n,type:s},e)}});function Ge(s){for(const t of c)(!s||s===t.props.type)&&t.handler.close()}v.closeAll=Ge;v._context=null;const Je=Be(v,"$message");export{Je as E};
