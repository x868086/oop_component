import Vue from 'vue'
import App from './App.vue'
import store from './store'

// 在入口文件导入全局的notice组件，Vue.use()方法安装插件，插件函数会被作为 install 方法。
// install 方法调用时，会将 Vue 作为参数传入。
import globalNotice from './components/index.js'
Vue.use(globalNotice)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
