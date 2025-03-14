<script setup>
import {useAuthStore} from "@/stores/auth.js";
import {onBeforeUnmount, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {storeToRefs} from "pinia";

const route = useRoute();

const showNavbarDropdown = ref(false);
const showUploadDropdown = ref(false);
const activeClass = ref('border-b-2 border-solid border-red-700');
const authStore = useAuthStore();
const {user} = storeToRefs(authStore);

onMounted(() => {
  window.addEventListener("click", closeDropdownOnClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", closeDropdownOnClickOutside);
});

const toggleNavbarDropdown = () => {
  showNavbarDropdown.value = !showNavbarDropdown.value;
  showUploadDropdown.value = !showNavbarDropdown;
}

const toggleUploadDropdown = () => {
  showUploadDropdown.value = !showUploadDropdown.value;
  showNavbarDropdown.value = !showUploadDropdown.value;
}

const navbar = ref();
const dropdownUpload = ref();
const dropdownUser = ref();

const closeDropdownOnClickOutside = (event) => {
  if (!navbar.value?.contains(event.target)) {
    showUploadDropdown.value = showNavbarDropdown.value = false;
  }

  if (!dropdownUser.value?.contains(event.target)) {
    showNavbarDropdown.value = false;
  }

  if (!dropdownUpload.value?.contains(event.target)) {
    showUploadDropdown.value = false;
  }
}

const closeDropdown = () => {
  showNavbarDropdown.value = showUploadDropdown.value = false;
}

const isActive = (routeName) => {
  return route.name === routeName || routeName.startsWith(route.meta.parentRoute);
}
</script>
<template>
  <nav class="z-10 inline-flex w-full flex-col items-center justify-center bg-white p-4 shadow md:h-[90px] md:p-6"
       ref="navbar">
    <div class="inline-flex w-full items-center justify-center gap-4">
      <router-link class="md:w-2/12" :to="{name: 'home'}">
        <img src="/logo.png" alt="logo"/>
      </router-link>
      <div class="hidden h-6 w-full shrink grow basis-0 items-center justify-start gap-8 md:flex">
        <div class="inline-flex flex-col items-start justify-center">
          <router-link
              :to="{name: 'jelajahi.index'}"
              class="text-center text-base font-medium leading-normal text-gray-900"
              :class="{[activeClass] : isActive('jelajahi.index')}"
          >
            Jelajahi
          </router-link>
        </div>
        <div class="inline-flex flex-col items-start justify-center">
          <router-link
              :to="{name: 'toko.index'}"
              class="text-center text-base font-medium leading-normal text-gray-900"
              :class="{[activeClass] : isActive('toko.index')}"
          >
            Toko
          </router-link>
        </div>
        <div class="mr-6 inline-flex flex-col items-start justify-center">
          <router-link
              :to="{name: 'artikel.index'}"
              class="text-center text-base font-medium leading-normal text-gray-900"
              :class="{[activeClass] : isActive('artikel.index')}"
          >
            Artikel
          </router-link>
        </div>
      </div>
      <form class="flex w-full items-center">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="text-gray-500 w-[18px] h-[18px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input type="text" id="simple-search"
                 class="block w-full rounded-lg border border-gray-200 bg-gray-50 pl-10 text-sm text-gray-900 p-2.5 focus:border-red-700 focus:ring-red-700"
                 placeholder="Cari apapun..." required/>
        </div>
      </form>
      <div class="flex w-1/4 items-center justify-end">
        <div class="flex items-center justify-start gap-5" v-if="user">
          <div class="relative hidden h-6 w-6 md:flex" ref="dropdownUpload">
            <div v-if="showUploadDropdown"
                 class="absolute top-7 right-4 z-50 my-1 list-none rounded-lg border border-gray-100 bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
                 id="user-dropdown"
                 @click="closeDropdown"
            >
              <div class="whitespace-nowrap px-2 py-1">
                <router-link :to="{name: 'upload-karya.index'}"
                             class="flex items-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg class="w-[14px] h-[14px]" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path
                        d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
                        fill="#9CA3AF"
                    />
                  </svg>

                  <span class="ml-1 text-sm">Unggah Karya Baru</span>
                </router-link>
              </div>
              <div class="whitespace-nowrap px-2 py-1">
                <router-link :to="{name: 'upload-produk.index'}"
                             class="flex items-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg class="text-gray-800 w-[14px] h-[14px] dark:text-white" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                    <path fill="currentColor"
                          d="M11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-4.572 3.072L3.857 15.92h7.949l-1.811-3.37-1.61 2.716-1.912-4.679Z"/>
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M6 1v4a1 1 0 0 1-1 1H1m14 12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v16ZM11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3.857 15.92l2.616-5.333 1.912 4.68 1.61-2.717 1.81 3.37H3.858Z"/>
                  </svg>

                  <span class="ml-1 text-sm">Buat Produk Baru</span>
                </router-link>
              </div>
            </div>
            <button type="button" id="upload-button" @click="toggleUploadDropdown">
              <svg class="h-4 w-4 text-gray-500 dark:text-white lg:h-6 lg:w-6" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                    d="m14.707 4.793-4-4a1 1 0 0 0-1.416 0l-4 4a1 1 0 1 0 1.416 1.414L9 3.914V12.5a1 1 0 0 0 2 0V3.914l2.293 2.293a1 1 0 0 0 1.414-1.414Z"/>
                <path
                    d="M18 12h-5v.5a3 3 0 0 1-6 0V12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
              </svg>
            </button>
          </div>
          <div class="relative hidden h-4 w-4 md:flex lg:h-6 lg:w-6">
            <router-link to="#">
              <svg class="h-4 w-4 text-gray-500 dark:text-white lg:h-6 lg:w-6" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                <path
                    d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"/>
              </svg>
              <div
                  class="absolute -top-3 -right-3 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white animate-[twBounce_1s_ease-in-out_infinite] dark:border-gray-900">
                20
              </div>
            </router-link>
          </div>
          <div class="relative hidden h-4 w-4 md:flex lg:h-6 lg:w-6">
            <router-link :to="{name: 'keranjang.index'}">
              <svg class="h-4 w-4 text-gray-500 dark:text-white lg:h-6 lg:w-6" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                <path
                    d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
              </svg>
            </router-link>
          </div>
          <div class="w-full md:w-8 lg:w-full" ref="dropdownUser">
            <button type="button"
                    class="mr-3 mr-auto flex rounded-full text-sm md:mr-0 md:bg-gray-800 md:focus:ring-4 md:focus:ring-gray-300"
                    id="user-menu-button" aria-expanded="false" @click="toggleNavbarDropdown">
              <span class="sr-only">Open user menu</span>
              <img class="hidden h-8 w-8 rounded-full md:block" src="/icon.png" alt="user photo"/>
              <!-- hamburger icon -->
              <svg class="block h-6 w-6 text-gray-800 dark:text-white md:hidden" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
            <!-- dropdown menu -->
            <div v-if="showNavbarDropdown"
                 class="absolute top-12 right-8 z-50 my-4 list-none rounded-lg bg-white text-base shadow divide-y divide-gray-100 dark:divide-gray-600 dark:bg-gray-700"
                 id="user-dropdown"
            >
              <div class="flex items-center justify-center gap-2 px-4 py-3">
                <img class="block h-8 w-8 rounded-full md:hidden" src="/icon.png" alt="user photo"/>
                <div>
                  <span class="block text-sm text-gray-900 dark:text-white">{{ user?.name }}</span>
                  <span
                      class="block truncate text-sm text-gray-500 dark:text-gray-400">{{ user?.email }}</span>
                </div>
              </div>
              <ul class="py-2" aria-labelledby="user-menu-button" @click="closeDropdown">
                <li>
                  <router-link :to="{name: 'profil.index'}"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Profil
                  </router-link>
                </li>
                <li class="block md:hidden">
                  <router-link :to="{name: 'jelajahi.index'}"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Jelajahi
                  </router-link>
                </li>
                <li class="block md:hidden">
                  <router-link :to="{name: 'toko.index'}"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Toko
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'update-profile'}"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Pengaturan Akun
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'afiliasi.index'}"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Afiliasi
                  </router-link>
                </li>
                <li>
                  <router-link to="/penghasilan"
                               class="block border-b border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    Penghasilan
                  </router-link>
                </li>
                <li class="block md:hidden">
                  <router-link :to="{name: 'upload-karya.index'}"
                               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-[14px] h-[14px] dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path
                          d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
                          fill="#9CA3AF"
                      />
                    </svg>
                    <span class="ml-1 text-md">Unggah Karya Baru</span>
                  </router-link>
                </li>
                <li class="block md:hidden">
                  <router-link :to="{name: 'upload-produk.index'}"
                               class="flex items-center border-b border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-[14px] h-[14px]" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                      <path fill="#9CA3AF"
                            d="M11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-4.572 3.072L3.857 15.92h7.949l-1.811-3.37-1.61 2.716-1.912-4.679Z"/>
                      <path stroke="#9CA3AF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 1v4a1 1 0 0 1-1 1H1m14 12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v16ZM11.045 7.514a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM3.857 15.92l2.616-5.333 1.912 4.68 1.61-2.717 1.81 3.37H3.858Z"
                      />
                    </svg>
                    <span class="ml-1 text-md">Unggah Produk Baru</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'wishlist.index'}"
                               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg width="14" height="14" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M13.5227 2.84191C13.1714 1.52991 12.1374 0.495915 10.8261 0.144581C9.5414 -0.198085 8.17674 0.149914 7.0014 1.10258C6.14407 0.401914 5.19407 0.0225813 4.22407 -8.53367e-05C3.17007 -0.014752 2.18674 0.371248 1.4454 1.11191C0.0514029 2.50591 -0.252597 5.02325 1.86207 7.13791L6.52874 11.8046C6.65874 11.9346 6.8294 11.9999 7.00007 11.9999C7.17074 11.9999 7.3414 11.9346 7.4714 11.8046L12.1381 7.13791C13.4087 5.86725 13.9134 4.30125 13.5227 2.84191Z"
                          fill="#9CA3AF"/>
                    </svg>
                    <span class="ml-1 text-md">Wishlistku</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{name: 'koleksiku.index'}"
                               class="flex items-center border-b border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_656_18365)">
                        <path
                            d="M2 2V15.5C1.99994 15.5868 2.02248 15.6722 2.06542 15.7476C2.10836 15.8231 2.17022 15.8861 2.24489 15.9304C2.31957 15.9747 2.40449 15.9988 2.4913 16.0003C2.57812 16.0018 2.66383 15.9807 2.74 15.939L8 13.069L13.26 15.939C13.3362 15.9807 13.4219 16.0018 13.5087 16.0003C13.5955 15.9988 13.6804 15.9747 13.7551 15.9304C13.8298 15.8861 13.8916 15.8231 13.9346 15.7476C13.9775 15.6722 14.0001 15.5868 14 15.5V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0L4 0C3.46957 0 2.96086 0.210714 2.58579 0.585786C2.21071 0.960859 2 1.46957 2 2Z"
                            fill="#9CA3AF"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_656_18365">
                          <rect width="16" height="16" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                    <span class="ml-1 text-md">Koleksiku</span>
                  </router-link>
                </li>
                <li class="block md:hidden">
                  <router-link to="#"
                               class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="h-4 w-4 lg:h-6 lg:w-6" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                      <path
                          d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z"
                          fill="#9CA3AF"
                      />
                    </svg>
                    <span class="ml-1 text-md">Notifikasi</span>
                  </router-link>
                </li>
                <li class="block md:hidden">
                  <router-link :to="{name: 'keranjang.index'}"
                               class="flex items-center border-b border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="h-4 w-4 text-gray-500 dark:text-white lg:h-6 lg:w-6" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                      <path
                          d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"
                          fill="#9CA3AF"
                      />
                    </svg>
                    <span class="ml-1 text-md">Keranjang</span>
                  </router-link>
                </li>
                <li>
                  <button @click="authStore.logout"
                          class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Keluar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center gap-4" v-else>
          <router-link :to="{name: 'login'}"
                       class="rounded-lg bg-red-700 px-5 text-sm font-medium text-white py-2.5 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            Masuk
          </router-link>
          <router-link :to="{name: 'register'}"
                       class="rounded-lg border border-gray-200 bg-white px-5 text-sm font-medium text-gray-900 py-2.5 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 hidden md:block">
            Daftar
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
