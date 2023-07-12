<template>
  <ion-page>
    <ion-content>
      <div class="p-8 w-full h-full lg:flex sxsm:block bg-neutral-100">
        <div class="lg:ml-8 sxsm:ml-0 lg:w-2/3 sxsm:w-full m-2">
          <h1 class="font-bold text-center">Keranjang</h1>
          <div
            class="m-1 flex flex-col items-center justify-between bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            v-for="item in carts" :key="item.id">
            <div class="md:flex sxsm:block items-center">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-40 md:w-40 md:rounded-none md:rounded-l-lg"
                :src="item.img" alt="" />
              <div class="p-2">
                <h5 class="font-bold">
                  {{ item.produk }}
                </h5>
                <p class="opacity-50">Oleh {{ item.penjual }}</p>
              </div>
            </div>
            <div class="flex">
              <div class="m-2">
                <p class="font-bold">{{ item.jumlah }}</p>
              </div>
              <h5 class="m-2 font-bold">{{ formatHarga(item.harga) }}</h5>
            </div>
            <button type="button"
              class="m-5 text-red-700 border border-solid border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-red-500">
              <svg class="w-[12px] h-[12px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Icon description</span>
            </button>
          </div>
        </div>
        <div class="m-2 place-items-center justify-center">
          <h1 class="font-bold text-center">Total</h1>
          <div class="bg-white rounded-lg">
            <div class="relative overflow-x-auto items-center p-3">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="font-bold text-sm text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3 rounded-l-lg">Product</th>
                    <th scope="col" class="px-6 py-3">Qty.</th>
                    <th scope="col" class="px-6 py-3 rounded-r-lg">Harga</th>
                  </tr>
                </thead>
                <tbody class="text-left">
                  <tr v-for="item in carts" :key="item.id">
                    <td>
                      <div class="flex items-center p-3">
                        <img :src="item.img" class="w-16 h-16 rounded-full p-2" />
                        <div>
                          <p class="text-black">
                            {{ item.produk }}
                          </p>
                          <p class="opacity-75">Oleh {{ item.penjual }}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="px-7 py-3 text-center">{{ item.jumlah }}</p>
                    </td>
                    <td>
                      <p class="text-center">{{ formatHarga(item.harga) }}</p>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="text-black px-5 py-3 border-t border-gray-400 text-base">
                    <th class="px-6 py-3">Total</th>
                    <td class="text-center text-sm">{{ totalProduk }}</td>
                    <td class="text-center">{{ formatHarga(totalHarga) }}</td>
                  </tr>
                </tfoot>
              </table>
              <div class="flex justify-center pl-5">
                <button type="button"
                  class="w-full items-center justify-center flex text-black border border-solid border-gray-300 hover:bg-gray-200 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-600 dark:hover:bg-gray-200 dark:focus:ring-gray-800">
                  <span class="mr-2">Bayar Sekarang</span>
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9" />
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
import { IonPage, IonContent } from "@ionic/vue";
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
          img: "resources/dummy_galleries/ui_uiiiiiiiii-1-small.jpg",
          produk:
            "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
          penjual: "Pandu",
          jumlah: 1,
          harga: "50000",
        },
        {
          id: 2,
          img: "resources/dummy_galleries/jonathan-lebrec-rizieres-free.jpg",
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
