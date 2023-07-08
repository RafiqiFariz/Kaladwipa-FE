import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    redirect: 'homepage'
  },
  {
    path: '/homepage',
    component: () => import('@/views/homepage.vue')
  },
  {
    path: '/jelajahi',
    component: () => import('@/views/JelajahiPage.vue')
  },
  {
    path: '/toko',
    component: () => import('@/views/TokoPage.vue')
  },
  {
    path: '/affiliasi',
    component: () => import('@/views/AffiliationPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
