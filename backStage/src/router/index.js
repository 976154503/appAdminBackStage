
import Router from 'vue-router'
import Login from '@/components/login'
import HelloWorld from '@/components/HelloWorld'

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login,
      redirect: './login'
    },
    {
      path: '/hello',
      component: HelloWorld,
      redirect: './hello',
      meta: {
        requireAuth: true
      }
    }
    
  ]
})

export default router
