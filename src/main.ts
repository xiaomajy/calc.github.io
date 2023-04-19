import { createApp } from 'vue'
// import './style.css' 注释通用样式
import App from './App.vue'
import router from './router'
import menu from './components/menu.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router).mount('#app')
app.component('mymenu',menu)
