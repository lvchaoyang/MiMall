import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Index from '../pages/index'
Vue.use( Router)

const router = new Router({
  mode: 'history',
  routes: [
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
        },
        {
          path: '/product/:id',
          name: 'product',
          // component: resolve => require(['../pages/pruduct'], resolve),
          component: () => import('../pages/product'),
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: () => import('../pages/detail')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../pages/cart')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../pages/order'),
      children: [
        {
          path: 'list',
          name: 'order-list',
          component: () => import('../pages/orderList.vue')
        },
        {
          path: 'confirm',
          name: 'order-confirm',
          component: () => import('../pages/orderConfirm.vue')
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: () => import('../pages/orderPay.vue')
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: () => import('../pages/alipay.vue')
        }
      ]
    }
  ]
})

export default router
