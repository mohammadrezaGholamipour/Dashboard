import { createRouter, createWebHistory } from 'vue-router';
import competitions from '@/views/competitions/index.vue';
import accountSetting from '@/views/account-setting.vue';
import DefaultLayout from '@/layout/default-layout.vue';
import categories from '@/views/categories/index.vue';
import AuthService from '@/utils/AuthService';
import notFound from '@/views/not-found.vue';
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
          path: '/categories/:section(list|edit)/:id?',
          name: 'categories',
          component: categories,
          /////////////////////////////////
          beforeEnter: (to, from, next) => {
            const section = to.params.section;
            const id = to.params.id;
            if (section === 'edit' && !id) {
              next({ name: 'categories', params: { section: 'list' } });
            } else {
              next();
            }
          }
          ////////////////////////////
        },
        {
          path: '/categories',
          redirect: '/categories/list'
        },
        {
          path: '/competitions',
          name: 'competitions',
          component: competitions,
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: notFound
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
