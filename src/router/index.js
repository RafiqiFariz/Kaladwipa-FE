import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes = [
  {
    path: "/",
    redirect: "homepage",
  },
  {
    path: "/homepage",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/jelajahi",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/jelajahi/detail/:id",
    component: () => import("@/views/DetailContentPage.vue"),
  },
  {
    path: "/artikel/detail/:id",
    component: () => import("@/views/ArtikelPage.vue"),
  },
  {
    path: "/toko",
    component: () => import("@/views/TokoPage.vue"),
  },
  {
    path: "/toko/produk/:id",
    component: () => import("@/views/DetailBarang.vue"),
  },
  {
    path: "/affiliasi",
    component: () => import("@/views/AffiliationPage.vue"),
    children: [
      {
        name: "affiliate-stats",
        path: ":affiliateId",
        component: () =>
          import("@/components/affiliate/AffiliateStatistics.vue"),
      },
    ],
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
  {
    path: "/wishlist",
    component: () => import("@/views/WishlistPage.vue"),
  },
  {
    path: "/keranjang",
    component: () => import("@/views/KeranjangPage.vue"),
  },
  {
    path: "/article",
    component: () => import("@/views/ArtikelPage.vue"),
    children: [
      {
        name: "article-content",
        path: ":articleId",
        component: () => import("@/components/article/TheArticle.vue"),
      },
    ],
  },
  {
    path: "/upload-karya",
    component: () => import("@/views/UploadKaryaPage.vue"),
  },
  {
    path: "/upload-produk",
    component: () => import("@/views/UploadProdukPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
