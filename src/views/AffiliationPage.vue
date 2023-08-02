<script setup>
import {IonPage, IonContent, IonRouterOutlet} from "@ionic/vue";
import {ref, provide} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

const affiliates = ref([
  {
    id: 1,
    img: "/dummy_galleries/ui_uiiiiiiiii-1-small.jpg",
    produk:
        "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
    link: "https://kaladwipa.com/a/219312387213",
    penjual: "Pandu",
    dilihat: 10,
    penjualan: 0,
    pendapatan: 0.00,
  },
  {
    id: 2,
    img: "/dummy_galleries/jonathan-lebrec-rizieres-free.jpg",
    produk:
        "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
    link: "https://kaladwipa.com/a/219312387213",
    penjual: "Pandu",
    dilihat: 20,
    penjualan: 0,
    pendapatan: 0.00,
  },
    // Halaman Affiliate Statistics rusak kalau datanya > 2
  // {
  //   id: 3,
  //   img: "/dummy_galleries/jonathan-lebrec-rizieres-free.jpg",
  //   produk:
  //       "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
  //   link: "https://kaladwipa.com/a/219312387213",
  //   penjual: "Pandu",
  //   dilihat: 20,
  //   penjualan: 0,
  //   pendapatan: 0.00,
  // },
]);

const isStats = () => {
  return route.matched.length > 1;
}

provide('affiliates', affiliates);
</script>
<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="w-full h-full bg-neutral-100"
           :class="{'p-4 md:p-6': !isStats()}"
      >
        <h1 class="text-center pb-5 font-bold" v-if="!isStats()">
          Halaman Afiliasi
        </h1>
        <div class="p-4 md:p-6 h-3/5" v-if="isStats()">
          <router-view :key="route.fullPath"></router-view>
        </div>
        <div :class="{ 'h-2/5': isStats() }" class="flex flex-col p-4 md:p-6">
          <table
              class="min-w-full text-sm text-center text-black dark:text-gray-400"
          >
            <thead
                class="text-xs text-gray-700 uppercase border-b border-black dark:bg-gray-700 dark:text-gray-400"
            >
            <tr>
              <th scope="col" class="px-6 py-3 text-left">Produk</th>
              <th scope="col" class="px-6 py-3">Penjual</th>
              <th scope="col" class="px-6 py-3">Dilihat</th>
              <th scope="col" class="px-6 py-3">Penjualan</th>
              <th scope="col" class="px-6 py-3">Pendapatan</th>
              <th scope="col" class="px-6 py-3"></th>
            </tr>
            </thead>
            <tbody>
            <tr
                class="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-left"
                v-for="item in affiliates"
                :key="item.id"
            >
              <th
                  scope="row"
                  class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                    class="w-auto h-16 rounded-lg"
                    :src="item.img"
                    alt="Jese image"
                />
                <div class="pl-3">
                  <div class="text-base font-semibold">
                    {{ $filters.truncateText(item.produk, 25) }}
                  </div>
                  <a
                      :href="item.link"
                      class="font-normal text-gray-500 opacity-50 hover:underline"
                  >
                    {{ $filters.truncateText(item.link, 33) }}
                  </a>
                </div>
              </th>
              <td class="px-6 py-4 text-center">
                <h5>{{ item.penjual }}</h5>
              </td>
              <td class="px-6 py-4 text-center">
                <h5>{{ item.dilihat }}</h5>
              </td>
              <td class="px-6 py-4 text-center">
                <h5>{{ item.penjualan }}</h5>
              </td>
              <td class="px-6 py-4 text-center">
                <h5>{{ $filters.rupiah(item.pendapatan) }}</h5>
              </td>
              <td>
                <router-link
                    :to="{
                                      name: 'affiliate-stats',
                                      params: { id: item.id },
                                    }"
                >
                  <button
                      type="button"
                      class="text-red-700 hover:text-white border border-solid border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800 flex items-center"
                  >
                    Statistik
                    <svg
                        class="w-[12px] h-[12px] text-red-700 dark:text-white ml-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                      <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
