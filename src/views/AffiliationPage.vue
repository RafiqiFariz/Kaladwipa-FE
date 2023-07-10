<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="p-8 w-full h-full bg-neutral-100">
        <div class="flex flex-col h-2/5">
          <router-view :key="$route.fullPath"></router-view>
        </div>
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
                    {{ truncateText(item.produk, 25) }}
                  </div>
                  <a
                    :href="item.link"
                    class="font-normal text-gray-500 opacity-50 hover:underline"
                  >
                    {{ truncateText(item.link, 33) }}
                  </a>
                </div>
              </th>
              <td class="px-6 py-4">
                <h5>{{ item.penjual }}</h5>
              </td>
              <td class="px-6 py-4 text-center">
                <h5>{{ item.dilihat }}</h5>
              </td>
              <td class="px-6 py-4 text-center">
                <h5>{{ item.penjualan }}</h5>
              </td>
              <td class="px-6 py-4 text-center">
                <h5>{{ item.pendapatan }}</h5>
              </td>
              <td>
                <router-link
                  :to="{
                    name: 'affiliate-stats',
                    params: { affiliateId: item.id },
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
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";

export default {
  provide() {
    return {
      affiliates: this.affiliates,
    };
  },
  components: {
    IonPage,
    IonContent,
  },
  data() {
    return {
      affiliates: [
        {
          id: 1,
          img: "resources/dummyGallery/ui_uiiiiiiiii-1-small.jpg",
          produk:
            "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
          link: "https://www.kaladwipa.my.id/a/219312387213",
          penjual: "Pandu",
          dilihat: 10,
          penjualan: 0,
          pendapatan: "Rp0,00",
        },
        {
          id: 2,
          img: "resources/dummyGallery/ui_uiiiiiiiii-1-small.jpg",
          produk:
            "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
          link: "https://www.kaladwipa.my.id/a/219312387213",
          penjual: "Pandu",
          dilihat: 20,
          penjualan: 0,
          pendapatan: "Rp0,00",
        },
      ],
    };
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
      }
      return text;
    },
  },
};
</script>
