// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueHead from 'vue-head'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/assets/styles/global.css'
import '../src/assets/styles/fontello.css'
import 'object-fit-images'
// import * as THREE from 'three'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
Vue.use(VueHead)
