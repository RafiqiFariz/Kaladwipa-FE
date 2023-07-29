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
                <div :class="{ 'h-3/5': isStats() }" class="flex flex-row">
                    <table class="min-w-full text-sm text-center text-black dark:text-gray-400">
                        <thead
                            class="text-xs text-gray-700 uppercase border-b border-black dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left">Produk</th>
                                <th scope="col" class="px-6 py-3">Pembeli</th>
                                <th scope="col" class="px-6 py-3">Affiliasi</th>
                                <th scope="col" class="px-6 py-3">Total</th>
                                <th scope="col" class="px-6 py-3">Tanggal Terjual</th>
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
                                    <h5>{{ item.pembeli }}</h5>
                                </td>
                                <td class="px-6 py-4 text-center">
                                    <h5>{{ item.affiliasi }}</h5>
                                </td>
                                <td class="px-6 py-4 text-center">
                                    <h5>{{ item.total }}</h5>
                                </td>
                                <td class="px-6 py-4 text-center">
                                    <h5>{{ item.tanggalTerjual }}</h5>
                                </td>
                                <!-- <td>
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
                                </td> -->
                            </tr>
                        </tbody>
                    </table>
                    <div class="mt-8 sm:mt-0">
                        <button id="dropdownDefaultButton"
                            class="w-full mb-2 inline-flex rounded-l text-center text-sm font-medium py-2.5 text-black border-none justify-end items-end"
                            type="button" @click="toggleDropdown">
                            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path
                                    d="M18.85 1.1A1.99 1.99 0 0 0 17.063 0H2.937a2 2 0 0 0-1.566 3.242L6.99 9.868 7 14a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 13 17l.01-7.134 5.66-6.676a1.99 1.99 0 0 0 .18-2.09Z" />
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div id="dropdownHelper" v-if="showDropdown"
                            class="absolute z-10 w-40 rounded-lg bg-white shadow top-50 divide-y divide-gray-100 dark:divide-gray-600 dark:bg-gray-700 right-5">
                            <ul class="p-3 text-sm text-gray-700 space-y-1 dark:text-gray-200"
                                aria-labelledby="dropdownHelperButton">
                                <li>
                                    <div class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600" @click="toggleDropdown">
                                        <div class="ml-2 text-sm">
                                            <label for="helper-checkbox-1"
                                                class="font-medium text-gray-900 dark:text-gray-300">
                                                Hari Ini
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600" @click="toggleDropdown">
                                        <div class="ml-2 text-sm">
                                            <label for="helper-checkbox-2"
                                                class="font-medium text-gray-900 dark:text-gray-300">
                                                Minggu Ini
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600" @click="toggleDropdown">
                                        <div class="ml-2 text-sm">
                                            <label for="helper-checkbox-1"
                                                class="font-medium text-gray-900 dark:text-gray-300">
                                                Bulan Ini
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600" @click="toggleDropdown">
                                        <div class="ml-2 text-sm">
                                            <label for="helper-checkbox-2"
                                                class="font-medium text-gray-900 dark:text-gray-300">
                                                Tahun Ini
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
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
    mounted() {
        document.addEventListener("click", this.handleClickOutside);
    },
    beforeUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
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
                    pembeli: "Pandu",
                    affiliasi: 10,
                    total: 'Rp.150.123',
                    tanggalTerjual: "Rabu, 10 November 2023",
                },
                {
                    id: 2,
                    img: "dummy_galleries/jonathan-lebrec-rizieres-free.jpg",
                    produk:
                        "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
                    link: "https://www.kaladwipa.my.id/a/219312387213",
                    pembeli: "Pandu",
                    affiliasi: 20,
                    total: 'Rp.150.123',
                    tanggalTerjual: "Rabu, 10 November 2023",
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
        },
        handleClickOutside(event) {
            const dropdownButton = document.getElementById("dropdownDefaultButton");
            const dropdownHelper = document.getElementById("dropdownHelper");

            // Check if the click was outside the dropdown
            if (dropdownButton && !dropdownButton.contains(event.target) && dropdownHelper && !dropdownHelper.contains(event.target)) {
                this.showDropdown = false;
            }
        },
    },
};
</script>