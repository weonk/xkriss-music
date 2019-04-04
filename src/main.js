import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'
Vue.prototype.axios = axios;

Vue.config.productionTip = false

import Aplayer from 'vue-aplayer'
import Header from './components/Header'
import Navbar from './components/Navbar'

Vue.component('Aplayer', Aplayer)
Vue.component('Header', Header)
Vue.component('Navbar', Navbar)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
