<template>
    <ion-header>
        <div class="w-full h-[90px] p-6 bg-white flex-col justify-center items-center inline-flex z-10">
            <div class="w-full justify-center items-center gap-8 inline-flex">
                <router-link className="w-1/12 h-3/4" to="/"><img class="w-full h-full" :src="logo" /></router-link>
                <div class="grow shrink basis-0 h-6 justify-start items-center gap-8 flex w-full">
                    <div class="flex-col justify-center items-start inline-flex">
                        <router-link to="/jelajahi">
                            <div class="text-center text-gray-900 text-[16px] font-medium leading-normal">Jelajahi</div>
                        </router-link>
                    </div>
                    <div class="flex-col justify-center items-start inline-flex">
                        <router-link to="/toko">
                            <div class="text-center text-gray-900 text-[16px] font-medium leading-normal">Toko</div>
                        </router-link>
                    </div>
                    <div class="flex-col justify-center items-start inline-flex">
                        <router-link to="/affiliasi">
                            <div class="text-center text-gray-900 text-[16px] font-medium leading-normal">Affiliasi
                            </div>
                        </router-link>
                    </div>
                    <div></div>
                </div>
                <form class="flex items-center w-full">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-[18px] h-[18px] text-gray-500" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="simple-search"
                            class="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-red-700 focus:border-red-700 block w-full pl-10 p-2.5 "
                            placeholder="Cari apapun..." required>
                    </div>
                </form>
                <div class="justify-end items-center gap-4 flex w-1/4">
                    <div class="justify-start items-center gap-5 flex">
                        <div class="w-6 h-6 relative">
                            <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="m14.707 4.793-4-4a1 1 0 0 0-1.416 0l-4 4a1 1 0 1 0 1.416 1.414L9 3.914V12.5a1 1 0 0 0 2 0V3.914l2.293 2.293a1 1 0 0 0 1.414-1.414Z" />
                                <path
                                    d="M18 12h-5v.5a3 3 0 0 1-6 0V12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                            </svg>
                        </div>
                        <div class="w-6 h-6 relative">
                            <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 20">
                                <path
                                    d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                            </svg>
                        </div>
                        <div class="w-6 h-6 relative">
                            <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                <path
                                    d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                            </svg>
                        </div>
                        <img class="w-8 h-8 relative rounded-[100px]" src="https://via.placeholder.com/32x32" />
                    </div>
                </div>
            </div>
        </div>
    </ion-header>
</template>
<script setup>
import { IonHeader } from '@ionic/vue';
import logo from '../../../resources/logo.png'

</script>
