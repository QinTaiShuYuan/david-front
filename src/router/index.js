import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Query from '@/views/Query'
import Product from '../views/Product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/query',
      name: 'Query',
      component: Query
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    }
  ]
})
