import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    redirect: 'homepage'
  },
  {
    path: '/homepage',
    component: () => import('@/views/Homepage.vue')
  },
  {
    path: '/jelajahi',
    component: () => import('@/views/Homepage.vue'),
    children: {
      path: 'jelajahi/detail/:id',
      component: () => import('@/views/ProfilePage.vue'),
    }
  },
  {
    path: '/toko',
    component: () => import('@/views/TokoPage.vue')
  },
  {
    path: '/affiliasi',
    component: () => import('@/views/AffiliationPage.vue')
  },
  {
    path: '/profile',
    component: () => import('@/views/ProfilePage.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue'),
    meta: {
      hideNavbar: true
    }
  },
  {
    path: '/register',
    component: () => import('@/views/RegisterPage.vue'),
    meta: {
      hideNavbar: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
