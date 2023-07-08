<template>
    <ion-header>
        <div class="w-full h-[90px] p-6 bg-white flex-col justify-center items-center inline-flex z-10">
            <div class="w-full justify-center items-center gap-8 inline-flex">
                <router-link className="w-1/12 h-3/4" to="/"><img class="w-full h-full" :src="logo" /></router-link>
                <div class="grow shrink basis-0 h-6 justify-start items-center gap-8 flex">
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
                <div
                    class="w-[550px] px-4 py-3 bg-gray-50 rounded-lg border border-gray-200 flex-col justify-center items-start gap-2 inline-flex">
                    <div class="self-stretch justify-start items-center gap-2 inline-flex">
                        <div class="w-[18px] h-[18px] relative"></div>
                        <div class="grow shrink basis-0 self-stretch text-gray-500 text-[14px] font-normal leading-none">
                            Cari apapun...</div>
                    </div>
                </div>
                <div class="justify-start items-center gap-4 flex">
                    <div class="justify-start items-center gap-5 flex">
                        <div class="w-6 h-6 relative"></div>
                        <div class="w-6 h-6 relative"></div>
                        <div class="w-6 h-6 relative"></div>
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
