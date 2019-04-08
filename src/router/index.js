import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index.vue'
import Shop from '../pages/shop.vue'
import Login from '../pages/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }
  ]
})
