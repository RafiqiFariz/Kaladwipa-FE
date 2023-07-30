<script setup>
import {IonPage, IonContent} from "@ionic/vue";
import IncomeCard from "@/components/commons/IncomeCard.vue";
import {ref, onMounted, onBeforeUnmount} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();

const affiliates = ref([
    {
        id: 1,
        img: "dummy_galleries/ui_uiiiiiiiii-1-small.jpg",
        produk:
            "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
        link: "https://kaladwipa.com/a/219312387213",
        pembeli: "Pandu",
        affiliasi: 10,
        total: 150_123,
        tanggalTerjual: "Rabu, 10 November 2023",
    },
    {
        id: 2,
        img: "dummy_galleries/jonathan-lebrec-rizieres-free.jpg",
        produk:
            "Digital Seni Modern Tradisional Yae Miko Genshin Impact Dengan Kebaya",
        link: "https://kaladwipa.com/a/219312387213",
        pembeli: "Pandu",
        affiliasi: 20,
        total: 150_123,
        tanggalTerjual: "Rabu, 10 November 2023",
    },
]);

const showDropdown = ref(false);

const isStats = () => {
    console.log(route.matched.length > 1)
    return route.matched.length > 1;
};

const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
};

const handleClickOutside = (event) => {
    const dropdownButton = document.getElementById("dropdownDefaultButton");
    const dropdownHelper = document.getElementById("dropdownHelper");

    // Check if the click was outside the dropdown
    if (dropdownButton && !dropdownButton.contains(event.target) && dropdownHelper && !dropdownHelper.contains(event.target)) {
        showDropdown.value = false;
    }
};

onMounted(() => {
    document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
});
</script>
<template>
    <ion-page>
        <ion-content :fullscreen="false">
            <div class="h-full w-full bg-neutral-100 p-4 md:p-6">
                <h1 class="pb-5 text-center font-bold" v-if="!isStats()">
                    Halaman Penghasilan
                </h1>
                <div class="flex h-2/5 flex-col" v-if="isStats()">
                    <router-view :key="$route.fullPath"></router-view>
                </div>
                <div class="mb-4 grid grid-cols-1 justify-between space-y-4 md:space-y-0 md:space-x-8 md:flex md:flex-auto">
                    <IncomeCard name="Minggu ini" :data="10"/>
                    <IncomeCard name="Bulan ini" :data="10"/>
                    <IncomeCard name="Setengah Tahun ini" :data="10"/>
                    <IncomeCard name="Tahun ini" :data="10"/>
                </div>
                <div :class="{ 'h-3/5': isStats() }" class="flex flex-row">
                    <table class="min-w-full text-center text-sm text-black dark:text-gray-400">
                        <thead
                            class="border-b border-black text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left">Produk</th>
                            <th scope="col" class="px-6 py-3">Pembeli</th>
                            <th scope="col" class="px-6 py-3">Afiliasi</th>
                            <th scope="col" class="px-6 py-3">Total</th>
                            <th scope="col" class="px-6 py-3">Tanggal Terjual</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="border-b text-left hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                            v-for="item in affiliates" :key="item.id">
                            <th scope="row"
                                class="flex items-center whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white">
                                <img class="h-16 w-auto rounded-lg" :src="item.img" alt="Jese image"/>
                                <div class="pl-3">
                                    <div class="text-base font-semibold">
                                        {{ $filters.truncateText(item.produk, 25) }}
                                    </div>
                                    <a :href="item.link" class="font-normal text-gray-500 opacity-50 hover:underline">
                                        {{ $filters.truncateText(item.link, 33) }}
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
                                <h5>{{ $filters.rupiah(item.total) }}</h5>
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
                                        class="mr-2 mb-2 flex items-center rounded-lg border border-solid border-red-700 px-5 text-center text-sm font-medium text-red-700 py-2.5 hover:bg-red-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:ring-red-800">
                                        Statistik
                                        <svg class="ml-3 text-red-700 w-[12px] h-[12px] dark:text-white"
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
                                class="mb-2 inline-flex w-full items-end justify-end rounded-l border-none text-center text-sm font-medium text-black py-2.5"
                                type="button" @click="toggleDropdown">
                            <svg class="h-4 w-4 text-gray-800 dark:text-white" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path
                                    d="M18.85 1.1A1.99 1.99 0 0 0 17.063 0H2.937a2 2 0 0 0-1.566 3.242L6.99 9.868 7 14a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 13 17l.01-7.134 5.66-6.676a1.99 1.99 0 0 0 .18-2.09Z"/>
                            </svg>
                        </button>
                        <!-- Dropdown menu -->
                        <div id="dropdownHelper" v-if="showDropdown"
                             class="absolute right-5 z-10 w-40 rounded-lg bg-white shadow top-50 divide-y divide-gray-100 dark:divide-gray-600 dark:bg-gray-700">
                            <ul class="p-3 text-sm text-gray-700 space-y-1 dark:text-gray-200"
                                aria-labelledby="dropdownHelperButton">
                                <li>
                                    <div class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                         @click="toggleDropdown">
                                        <div class="ml-2 text-sm">
                                            <label for="helper-checkbox-1"
                                                   class="font-medium text-gray-900 dark:text-gray-300">
                                                Hari Ini
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                         @click="toggleDropdown">
                                        <div class="ml-2 text-sm">
                                            <label for="helper-checkbox-2"
                                                   class="font-medium text-gray-900 dark:text-gray-300">
                                                Minggu Ini
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                         @click="toggleDropdown">
                                        <div class="ml-2 text-sm">
                                            <label for="helper-checkbox-1"
                                                   class="font-medium text-gray-900 dark:text-gray-300">
                                                Bulan Ini
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                                         @click="toggleDropdown">
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