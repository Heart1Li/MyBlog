import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
//导入全局样式
import './assets/css/global.scss'
//导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入阿里图标库
import './assets/icon/iconfont.css'
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
