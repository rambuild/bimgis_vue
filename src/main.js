// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// // BIM的各种依赖包
// require('./bimDev/js/jquery-2.0.0.min')
// require('./bimDev/js/require')
// require('./bimDev/js/spop')
// require('./bimDev/bimserver/bimserverclient')
// require('./bimDev/bimserver/model')
// require('./bimDev/bimserver/bimserverapiwebsocket')
// require('./bimDev/bimserver/bimserverapipromise')
// require('./bimDev/bimserver/geometry')
// require('./bimDev/bimserver/ifc2x3tc1')
// require('./bimDev/bimserver/ifc4')
// require('./bimDev/js/config')
// require('./bimDev/js/login')
// require('./bimDev/js/loadModel')
// require('./bimDev/test/index')
// // 树形插件
// require('./bimDev/leg-tree/leg-tree')
// require('./bimDev/leg-tree/cuslegTree')






// Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// axios
import axios from 'axios'
axios.defaults.baseURL="http://localhost:6666"
Vue.prototype.$http = axios

Vue.config.productionTip = false

axios.interceptors.request.use(config => {
  NProgress.start()
  return config
})
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})
/* eslint-disable no-new */
new Vue({
  el: '#maincontainer',
  router,
  components: { App },
  template: '<App/>'
})
