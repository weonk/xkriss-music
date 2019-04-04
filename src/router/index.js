import Vue from 'vue'
import Router from 'vue-router'
import musicRouter from './music'

Vue.use(Router)


export default new Router({
  routes: [
    musicRouter,
    {
      path: '/*',
      redirect: '/music'
    }
  ]
})
