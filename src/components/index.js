import Vue from 'vue'
// import Notice from './notice.vue'
import NoticePlugin from './function'

// 导出全局组件为一个方法即插件函数，在项目入口index.js文件引入该模块，使用Vue.use()方法安装该插件
// 插件函数会被作为 install 方法。install 方法调用时，会将 Vue 作为参数传入。
export default () => {
  // Vue.component(Notice.name, Notice)

  Vue.prototype.$noticeConstructor = (opts) => {
    return new NoticePlugin(opts)
  }
}
