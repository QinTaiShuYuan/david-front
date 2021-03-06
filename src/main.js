// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {size: 'small', zIndex: 3000})
Vue.config.productionTip = false
Vue.prototype.$axios = axios
// Vue.prototype.$http = axios
// axios.defaults.withCredentials = false;
// Vue.prototype.HOST = '/names'
// axios.defaults.proxy = {
//   host: 'http://192.168.137.16',
//   port: 8080,
// };

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      next({path: '/login'})
    }
  } else {
    next()
  }
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
