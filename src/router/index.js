import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes = [
  {
    path: "/",
    redirect: "homepage",
  },
  {
    path: "/homepage",
    component: () => import("@/views/Homepage.vue"),
  },
  {
    path: "/jelajahi",
    component: () => import("@/views/Homepage.vue"),
  },
  {
    path: "/jelajahi/detail/:id",
    component: () => import("@/views/DetailContentPage.vue"),
  },
  {
    path: "/toko",
    component: () => import("@/views/TokoPage.vue"),
  },
  {
    path: "/affiliasi",
    component: () => import("@/views/AffiliationPage.vue"),
  },
  {
    path: "/profile",
    component: () => import("@/views/ProfilePage.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/LoginPage.vue"),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/register",
    component: () => import("@/views/RegisterPage.vue"),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/settings",
    component: () => import("@/views/SettingsPage.vue"),
    children: [
      {
        path: "profile",
        component: () => import("@/components/settings/ProfileSettings.vue"),
      },
      {
        path: "account",
        component: () => import("@/components/settings/AccountSettings.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
