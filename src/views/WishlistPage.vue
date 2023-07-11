<template>
  <ion-page>
    <ion-content>
      <div class="p-8 w-full h-full bg-neutral-100">
        <h1 class="text-center font-bold">Semua Wishlist</h1>
        <div class="bg-white rounded-lg shadow-lg m-20 mt-5">
          <div
            class="justify-between place-items-center flex p-3"
            v-for="item in wishlists"
            :key="item.id"
          >
            <div class="flex items-center">
              <div class="place-items-center items-center justify-center">
                <img
                  :src="item.img"
                  class="h-24 object-cover w-40 rounded-lg"
                />
              </div>
              <div class="p-2">
                <h5 class="font-bold">
                  {{ item.produk }}
                </h5>
                <p class="visibility-50">Oleh {{ item.penjual }}</p>
              </div>
            </div>
            <div class="p-4">
              <h5 class="text-center">
                {{ formatHarga(item.harga) }}
              </h5>
            </div>
            <button
              type="button"
              class="text-red-700 hover:text-white border border-solid border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800 flex items-center"
            >
              <svg
                class="w-[15px] h-[15px] text-red-700 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="m17.855 11.273 2.105-7a.952.952 0 0 0-.173-.876 1.042 1.042 0 0 0-.37-.293 1.098 1.098 0 0 0-.47-.104H5.021L4.395.745a.998.998 0 0 0-.376-.537A1.089 1.089 0 0 0 3.377 0H1.053C.773 0 .506.105.308.293A.975.975 0 0 0 0 1c0 .265.11.52.308.707.198.187.465.293.745.293h1.513l.632 2.254v.02l2.105 6.999.785 2.985a3.13 3.13 0 0 0-1.296 1.008 2.87 2.87 0 0 0-.257 3.06c.251.484.636.895 1.112 1.19a3.295 3.295 0 0 0 3.228.12c.5-.258.918-.639 1.208-1.103.29-.465.444-.995.443-1.535a2.834 2.834 0 0 0-.194-1h2.493a2.84 2.84 0 0 0-.194 1c0 .593.186 1.173.533 1.666.347.494.84.878 1.417 1.105a3.314 3.314 0 0 0 1.824.17 3.213 3.213 0 0 0 1.617-.82 2.95 2.95 0 0 0 .864-1.536 2.86 2.86 0 0 0-.18-1.733 3.038 3.038 0 0 0-1.162-1.346 3.278 3.278 0 0 0-1.755-.506h-7.6l-.526-2h9.179c.229 0 .452-.07.634-.201a1 1 0 0 0 .379-.524Zm-2.066 4.725a1.1 1.1 0 0 1 .585.168c.173.11.308.267.388.45.08.182.1.383.06.577a.985.985 0 0 1-.288.512 1.07 1.07 0 0 1-.54.274 1.104 1.104 0 0 1-.608-.057 1.043 1.043 0 0 1-.472-.369.965.965 0 0 1-.177-.555c0-.265.11-.52.308-.707.197-.188.465-.293.744-.293Zm-7.368 1a.965.965 0 0 1-.177.555c-.116.165-.28.293-.473.369a1.104 1.104 0 0 1-.608.056 1.07 1.07 0 0 1-.539-.273.985.985 0 0 1-.288-.512.953.953 0 0 1 .06-.578c.08-.182.214-.339.388-.448a1.092 1.092 0 0 1 1.329.124.975.975 0 0 1 .308.707Zm5.263-8.999h-1.053v1c0 .265-.11.52-.308.707a1.081 1.081 0 0 1-.744.293c-.28 0-.547-.106-.745-.293a.975.975 0 0 1-.308-.707v-1H9.474a1.08 1.08 0 0 1-.745-.293A.975.975 0 0 1 8.421 7c0-.265.11-.52.308-.707.198-.187.465-.293.745-.293h1.052V5c0-.265.111-.52.309-.707.197-.187.465-.292.744-.292.279 0 .547.105.744.292a.975.975 0 0 1 .308.707v1h1.053c.28 0 .547.106.744.293a.975.975 0 0 1 .309.707c0 .265-.111.52-.309.707a1.081 1.081 0 0 1-.744.293Z"
                />
              </svg>
              Tambahkan ke Keranjang
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
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonContent,
  },
  data() {
    return {
      wishlists: [
        {
          id: 1,
          img: "resources/dummy_galleries/ui_uiiiiiiiii-1-small.jpg",
          produk:
            "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
          penjual: "Pandu",
          harga: "50000",
        },
        {
          id: 2,
          img: "resources/dummy_galleries/jonathan-lebrec-rizieres-free.jpg",
          produk:
            "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
          penjual: "Pandu",
          harga: "50000",
        },
      ],
    };
  },
  methods: {
    formatHarga(nominal) {
      const formatter = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      });

      return formatter.format(nominal);
    },
  },
};
</script>
