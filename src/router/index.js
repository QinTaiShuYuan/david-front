import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import HomePage from '@/views/Home'
import Price from '@/views/Price'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomePage',
      meta: {
        requireAuth: true
      },
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/price',
      name: 'Price',
      meta: {
        requireAuth: true
      },
      component: Price
    }
  ]
})
