import { createRouter, createWebHistory } from 'vue-router'
import accountSetting from '@/views/account-setting.vue'
import DefaultLayout from '@/layout/default-layout.vue'
import categories from '@/views/categories/index.vue'
import AuthService from '@/utils/AuthService'
import login from '@/views/login.vue'
import home from '@/views/home.vue'
////////////////////////////
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DefaultLayout',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: home,
        },
        {
          path: '/account-setting',
          name: 'accountSetting',
          component: accountSetting,
        },
        {
          path: '/categories/:section/:id?',
          name: 'categories',
          component: categories,
          props: (route) => ({
            section: route.params.section,
            id: route.params.id
          })
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },

  ]
})
//////////////////////////
router.beforeEach((to, from, next) => {
  const isAuthenticated = AuthService.getTokenUser()
  ///////////////////////
  if (isAuthenticated) {
    if (to.name === 'login' || to.name === 'register') {
      next({ path: '/' })
    } else {
      next()
    }
  } else {
    if (to.name === 'login' || to.name === 'register') {
      next()
    } else {
      next({ path: 'login' })
    }
  }
});
//////////////////////////
export default router
