import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from 'axios'
Vue.prototype.axios = axios;

Vue.config.productionTip = false

import Player from '@/components/Player'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Loading from '@/components/Loading'
// import Scroller from '@/components/Scroller'

Vue.component('Player', Player)
Vue.component('Header', Header)
Vue.component('Navbar', Navbar)
Vue.component('Loading',Loading)
// Vue.component('Scroller', Scroll)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
