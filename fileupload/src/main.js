// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueRouter from 'vue-router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../static/css/my-mint.css'
import '../static/css/patternLock.css'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import qs from 'qs'
import JsEncrypt from 'jsencrypt/bin/jsencrypt'

Vue.use(VueRouter)
Vue.use(MintUI)
Vue.use(iView)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.host = "/"
Vue.prototype.$jsEncrypt = JsEncrypt

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
