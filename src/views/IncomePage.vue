<template>
    <ion-page>
        <ion-content :fullscreen="false">
            <div class="p-8 w-full h-full bg-neutral-100">
                <h1 class="text-center pb-5 font-bold" v-if="!isStats()">
                    Halaman Penghasilan
                </h1>
                <div class="flex flex-col h-2/5" v-if="isStats()">
                    <router-view :key="$route.fullPath"></router-view>
                </div>
                <div class="flex justify-between flex-auto space-x-8 mb-4">
                    <IncomeCard name="Minggu ini" :data="10" />
                    <IncomeCard name="Bulan ini" :data="10" />
                    <IncomeCard name="Setengah Tahun ini" :data="10" />
                    <IncomeCard name="Tahun ini" :data="10" />
                </div>
                <div :class="{ 'h-3/5': isStats() }" class="flex flex-col">
                    <table class="min-w-full text-sm text-center text-black dark:text-gray-400">
                        <thead
                            class="text-xs text-gray-700 uppercase border-b border-black dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left">Produk</th>
                                <th scope="col" class="px-6 py-3">Penjual</th>
                                <th scope="col" class="px-6 py-3">Dilihat</th>
                                <th scope="col" class="px-6 py-3">Penjualan</th>
                                <th scope="col" class="px-6 py-3">Pendapatan</th>
                                <th scope="col" class="px-6 py-3">
                                    <div class="mt-8 sm:mt-0">
                                        <button id="dropdownDefaultButton"
                                            class="mb-2 inline-flex items-center rounded-lg bg-red-700 px-5 text-center text-sm font-medium text-white py-2.5 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
                                            type="button" @click="toggleDropdown">
                                            Pilih Kategori
                                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        <!-- Dropdown menu -->
                                        <div id="dropdownHelper" v-if="showDropdown"
                                            class="absolute z-10 w-60 rounded-lg bg-white shadow top-50 divide-y divide-gray-100 dark:divide-gray-600 dark:bg-gray-700">
                                            <ul class="p-3 text-sm text-gray-700 space-y-1 dark:text-gray-200"
                                                aria-labelledby="dropdownHelperButton">
                                                <li>
                                                    <div class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                                        <div class="flex h-5 items-center">
                                                            <input id="helper-checkbox-1"
                                                                aria-describedby="helper-checkbox-text-1" type="checkbox"
                                                                value=""
                                                                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700" />
                                                        </div>
                                                        <div class="ml-2 text-sm">
                                                            <label for="helper-checkbox-1"
                                                                class="font-medium text-gray-900 dark:text-gray-300">
                                                                Tradisional
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                                        <div class="flex h-5 items-center">
                                                            <input id="helper-checkbox-2"
                                                                aria-describedby="helper-checkbox-text-2" type="checkbox"
                                                                value=""
                                                                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700" />
                                                        </div>
                                                        <div class="ml-2 text-sm">
                                                            <label for="helper-checkbox-2"
                                                                class="font-medium text-gray-900 dark:text-gray-300">
                                                                Tradisional Modern
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                                                        <div class="flex h-5 items-center">
                                                            <input id="helper-checkbox-3"
                                                                aria-describedby="helper-checkbox-text-3" type="checkbox"
                                                                value=""
                                                                class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700" />
                                                        </div>
                                                        <div class="ml-2 text-sm">
                                                            <label for="helper-checkbox-3"
                                                                class="font-medium text-gray-900 dark:text-gray-300">
                                                                Sketa Karakter Tradisional
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-left"
                                v-for="item in affiliates" :key="item.id">
                                <th scope="row"
                                    class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                    <img class="w-auto h-16 rounded-lg" :src="item.img" alt="Jese image" />
                                    <div class="pl-3">
                                        <div class="text-base font-semibold">
                                            {{ truncateText(item.produk, 25) }}
                                        </div>
                                        <a :href="item.link" class="font-normal text-gray-500 opacity-50 hover:underline">
                                            {{ truncateText(item.link, 33) }}
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
                                    <h5>{{ item.pendapatan }}</h5>
                                </td>
                                <td>
                                    <router-link :to="{
                                        name: 'affiliate-stats',
                                        params: { id: item.id },
                                    }">
                                        <button type="button"
                                            class="text-red-700 hover:text-white border border-solid border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-500 dark:focus:ring-red-800 flex items-center">
                                            Statistik
                                            <svg class="w-[12px] h-[12px] text-red-700 dark:text-white ml-3"
                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
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
  
<script>
import { IonPage, IonContent } from "@ionic/vue";
import IncomeCard from "@/components/commons/IncomeCard.vue";
import { ref } from "vue";

export default {
    provide() {
        return {
            affiliates: this.affiliates,
        };
    },
    components: {
        IonPage,
        IonContent,
        IncomeCard
    },
    data() {
        return {
            affiliates: [
                {
                    id: 1,
                    img: "dummy_galleries/ui_uiiiiiiiii-1-small.jpg",
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
                    img: "dummy_galleries/jonathan-lebrec-rizieres-free.jpg",
                    produk:
                        "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
                    link: "https://www.kaladwipa.my.id/a/219312387213",
                    penjual: "Pandu",
                    dilihat: 20,
                    penjualan: 0,
                    pendapatan: "Rp0,00",
                },
            ],
            showDropdown: ref(false), // Make the variable reactive
        };
    },
    methods: {
        truncateText(text, maxLength) {
            if (text.length > maxLength) {
                return text.slice(0, maxLength) + "...";
            }
            return text;
        },
        isStats() {
            return this.$route.matched.length > 1;
        },
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        }
    },
};
</script>






  