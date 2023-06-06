import { createRouter, createWebHistory } from 'vue-router'
import accountSetting from '@/views/account-setting.vue'
import DefaultLayout from '@/layout/default-layout.vue'
import AuthService from '@/utils/AuthService'
import table from '@/views/table/table.vue'
import dropDown from '@/views/drop-down.vue'
import login from '@/views/login.vue'
import home from '@/views/home.vue'
////////////////////////
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
          path: '/table',
          name: 'table',
          component: table,
        },
        {
          path: '/drop-down',
          name: 'dropDown',
          component: dropDown,
        },
        {
          path: '/account-setting',
          name: 'accountSetting',
          component: accountSetting,
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
