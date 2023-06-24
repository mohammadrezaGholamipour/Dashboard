import { createRouter, createWebHistory } from 'vue-router';
import accountSetting from '@/views/account-setting.vue';
import DefaultLayout from '@/layout/default-layout.vue';
import categories from '@/views/categories/index.vue';
import AuthService from '@/utils/AuthService';
import NotFound from '@/views/not-found.vue';
import login from '@/views/login.vue';
import home from '@/views/home.vue';
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
    {
      path: '/:catchAll(.*)', // this will match any URL that doesn't match any other route
      name: 'NotFound',
      component: NotFound
    }

  ]
})
//////////////////////////
router.beforeEach((to, from, next) => {
  const isAuthenticated = AuthService.getTokenUser();
  ///////////////////////////////////
  if (to.name === 'login' && isAuthenticated) {
    next({ path: '/' })
  } else if (to.name !== 'login' && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})
//////////////////////////
export default router
