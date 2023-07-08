import { createRouter, createWebHistory } from '@ionic/vue-router';
import Main from '../views/main.vue'

const routes = [
  {
    path: '/',
    redirect: ''
  },
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '',
        redirect: '/homepage'
      },
      {
        path: 'homepage',
        component: () => import('@/views/homepage.vue')
      },
      {
        path: 'jelajahi',
        component: () => import('@/views/jelajahi.vue')
      },
      {
        path: 'toko',
        component: () => import('@/views/toko.vue')
      },
      {
        path: 'affiliasi',
        component: () => import('@/views/aff.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
