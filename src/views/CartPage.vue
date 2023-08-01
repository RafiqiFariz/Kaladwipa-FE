<template>
  <ion-page>
    <ion-content>
      <div class="md:p-6 p-4 w-full h-full lg:flex block bg-neutral-100">
        <div class="ml-0 lg:w-3/4 w-full m-2">
          <h1 class="font-bold text-center mb-8">Keranjang</h1>
          <div
              class="grid md:grid-cols-3 grid-cols-1 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 mb-4 mb-4"
              v-for="item in carts" :key="item.id">
            <div class="md:flex block items-center col-span-2">
              <div class="md:h-32 md:w-64 h-96">
                <img class="rounded-t-lg md:rounded-none md:rounded-l-lg object-cover w-full h-full"
                     :src="item.img" alt=""/>
              </div>
              <div class="p-2">
                <p>
                  {{ item.produk }}
                </p>
                <p class="opacity-50 mt-2 text-sm">Oleh {{ item.penjual }}</p>
              </div>
            </div>
            <div class="flex items-center justify-end w-full">
              <p class="m-2 w-[20%] text-center">{{ item.jumlah }}</p>
              <p class="m-2 font-semibold">{{ formatHarga(item.harga) }}</p>
              <button type="button"
                      class="m-5 text-red-700 border border-solid border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500">
                <svg class="w-[12px] h-[12px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
            </div>
          </div>
        </div>
        <div class="m-2 justify-center lg:w-2/4">
          <h1 class="font-bold text-center">Ringkasan Belanja</h1>
          <div class="bg-white rounded-lg shadow mt-8">
            <div class="relative overflow-x-auto items-center p-8">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="font-bold text-sm text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th scope="col" class="rounded-l-lg">Produk</th>
                  <th scope="col" class="px-5">Jumlah</th>
                  <th scope="col" class="rounded-r-lg text-right">Harga</th>
                </tr>
                </thead>
                <tbody class="text-left">
                <tr v-for="item in carts" :key="item.id">
                  <td>
                    <div class="flex items-center py-3">
                      <img :src="item.img" class="w-16 h-16 rounded-full p-2 object-cover aspect-w-1 aspect-h-1" :alt="item.produk"/>
                      <div>
                        <p class="text-black">
                          {{ item.produk }}
                        </p>
                        <p class="opacity-75">Oleh {{ item.penjual }}</p>
                      </div>
                    </div>
                  </td>
                  <td class="p-3 text-center">
                    {{ item.jumlah }}
                  </td>
                  <td class="text-right">
                    {{ formatHarga(item.harga) }}
                  </td>
                </tr>
                </tbody>
                <tfoot>
                <tr class="text-black p-3 border-t border-gray-400 text-base">
                  <th class="py-3">Total</th>
                  <td class="text-center text-sm">{{ totalProduk }}</td>
                  <td class="text-right">{{ formatHarga(totalHarga) }}</td>
                </tr>
                </tfoot>
              </table>
              <div class="flex justify-center">
                <button type="button"
                        class="w-full items-center justify-center flex text-black border border-solid border-gray-300 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-200 dark:focus:ring-gray-800">
                  <span class="mr-2">Bayar Sekarang</span>
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {IonPage, IonContent} from "@ionic/vue";

export default {
  components: {
    IonContent,
    IonPage,
  },
  data() {
    return {
      carts: [
        {
          id: 1,
          img: "/dummy_galleries/ui_uiiiiiiiii-1-small.jpg",
          produk:
              "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
          penjual: "Pandu",
          jumlah: 1,
          harga: "50000",
        },
        {
          id: 2,
          img: "/dummy_galleries/jonathan-lebrec-rizieres-free.jpg",
          produk:
              "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
          penjual: "Pandu",
          jumlah: 1,
          harga: "50000",
        },
      ],
      totalProduk: 0,
      totalHarga: 0,
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
    setTotal(carts) {
      for (const item of carts) {
        this.totalProduk += item.jumlah;
        this.totalHarga += parseInt(item.harga);
        console.log(this.totalHarga, this.totalProduk);
      }
    },
  },
  mounted() {
    this.setTotal(this.carts);
  },
};
</script>
