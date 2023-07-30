import {createRouter, createWebHistory} from "@ionic/vue-router";
import {useAuthStore} from "@/stores/auth.js";
import * as _ from "lodash";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue"),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterPage.vue"),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/artikel",
    name: "artikel.index",
    component: () => import("@/views/ArticlePage.vue"),
  },
  {
    path: "/artikel/:id",
    name: "artikel.show",
    component: () => import("@/components/article/TheArticle.vue"),
    meta: { parentRoute: "artikel" }
  },
  {
    path: "/jelajahi",
    name: "jelajahi.index",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    path: "/jelajahi/:id",
    name: "jelajahi.show",
    component: () => import("@/views/ShowGalleryPage.vue"),
    meta: { parentRoute: "jelajahi" }
  },
  {
    path: "/toko",
    name: "toko.index",
    component: () => import("@/views/ShopPage.vue"),
  },
  {
    path: "/toko/produk/:id",
    name: "toko.produk.show",
    component: () => import("@/views/ShowProductPage.vue"),
    meta: { parentRoute: "toko" }
  },
  {
    path: "/afiliasi",
    name: 'afiliasi.index',
    component: () => import("@/views/AffiliationPage.vue"),
    children: [
      {
        path: ":id",
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
    path: "/pengaturan",
    component: () => import("@/views/SettingsPage.vue"),
    children: [
      {
        path: "profil",
        name: "update-profile",
        component: () => import("@/components/settings/ProfileSettings.vue"),
      },
      {
        path: "password",
        name: "update-password",
        component: () => import("@/components/settings/PasswordSettings.vue"),
      },
    ],
  },
  {
    path: "/wishlist",
    name: "wishlist.index",
    component: () => import("@/views/WishlistPage.vue"),
  },
  {
    path: "/koleksiku",
    name: "koleksiku.index",
    component: () => import("@/views/MyCollectionPage.vue"),
  },
  {
    path: "/koleksiku/:id",
    name: "koleksiku.show",
    component: () => import("@/views/ShowGalleryPage.vue"),
  },
  {
    path: "/keranjang",
    name: "keranjang.index",
    component: () => import("@/views/CartPage.vue"),
  },
  {
    path: "/upload-karya",
    name: "upload-karya.index",
    component: () => import("@/views/UploadArtworkPage.vue"),
  },
  {
    path: "/upload-produk",
    name: "upload-produk.index",
    component: () => import("@/views/UploadProductPage.vue"),
  },
  {
    path: "/penghasilan",
    component: () => import("@/views/IncomePage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  const authStore = useAuthStore();

  if (authStore.user && _.includes(['login', 'register'], to.name)) {
    return {name: 'home'}
  }
})

export default router;
