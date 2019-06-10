import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/City.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: ()=> import('./views/Details.vue')
    },
    {
      path: '/xinag',
      name: 'xinag',
      component: ()=> import('./components/details/pages/Xiangqing.vue')
    }
  ]
})
