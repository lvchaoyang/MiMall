import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Index from '../pages/index'
Vue.use( Router)

const routes = [
  {
    path:'/',
      name:'home',
      component:Home,
      redirect:'/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index,
        }
      ]
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
