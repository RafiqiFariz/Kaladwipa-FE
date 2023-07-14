import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes = [
  {
    path: "/",
    redirect: "homepage",
  },
  {
    path: "/homepage",
    name: "homepage",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/jelajahi",
    name: "jelajahi.index",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/jelajahi/detail/:id",
    name: "jelajahi.show",
    component: () => import("@/views/ShowGalleryPage.vue"),
  },
  {
    path: "/artikel/detail/:id",
    name: "artikel.show",
    component: () => import("@/views/ArticlePage.vue"),
  },
  {
    path: "/toko",
    name: "toko.index",
    component: () => import("@/views/ShopPage.vue"),
  },
  {
    path: "/toko/produk/:id",
    name: "toko.show",
    component: () => import("@/views/ShowProductPage.vue"),
  },
  {
    path: "/afiliasi",
    component: () => import("@/views/AffiliationPage.vue"),
    children: [
      {
        path: ":affiliateId",
        name: "affiliate-stats",
        component: () =>
          import("@/components/affiliate/AffiliateStatistics.vue"),
      },
    ],
  },
  {
    path: "/profil",
    name: "profil.index",
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
    path: "/pengaturan",
    component: () => import("@/views/SettingsPage.vue"),
    children: [
      {
        path: "profil",
        component: () => import("@/components/settings/ProfileSettings.vue"),
      },
      {
        path: "akun",
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
    component: () => import("@/views/CartPage.vue"),
  },
  {
    path: "/artikel",
    component: () => import("@/views/ArticlePage.vue"),
    children: [
      {
        path: ":articleId",
        name: "artikel.show",
        component: () => import("@/components/article/TheArticle.vue"),
      },
    ],
  },
  {
    path: "/upload-karya",
    component: () => import("@/views/UploadArtworkPage.vue"),
  },
  {
    path: "/upload-produk",
    component: () => import("@/views/UploadProductPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
