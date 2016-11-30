import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './components/Index/Index'
import test1 from './components/test1/test1'
import test2 from './components/test2/test2'

import store from './store/store'

import './style/main.scss'

Vue.use(VueRouter)

const routes = [
  {path: '/test1', component: test1},
  {path: '/test2', component: test2}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Index)
})
