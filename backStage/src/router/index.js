
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: './login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/hello',
      component: HelloWorld
    }
    
  ]
})

export default router
