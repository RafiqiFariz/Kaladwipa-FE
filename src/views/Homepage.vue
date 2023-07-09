<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div className="p-8 w-full bg-neutral-100">
        <Slider />
        <div>
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
            class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            type="button">Pilih Kategori <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 4 4 4-4" />
            </svg></button>
          <!-- Dropdown menu -->
          <div id="dropdown"
            class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign
                  out</a>
              </li>
            </ul>
          </div>

        </div>
        <div class="pt-8">

        </div>
        <div class="relative">
          <displayImage :images="gallery" />
          <div
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 w-[410px] h-12 px-2.5 py-1 bg-white rounded-lg shadow justify-start items-center gap-8 inline-flex">
            <div class="px-3 py-2 rounded-md justify-start items-center gap-1.5 flex">
              <div class="text-gray-500 text-[12px] font-normal leading-none">Komunitas</div>
            </div>
            <div class="px-3 py-2 rounded-md justify-start items-center gap-1.5 flex">
              <div class="text-gray-500 text-[12px] font-normal leading-none">Trending</div>
            </div>
            <div class="px-4 py-3 bg-red-700 rounded-md justify-center items-center gap-1.5 flex">
              <div class="text-white text-[12px] font-normal leading-none">Terbaru</div>
            </div>
            <div class="px-3 py-2 rounded-md justify-center items-center gap-1.5 flex">
              <div class="text-gray-500 text-[12px] font-normal leading-none">Diikuti</div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import Slider from '@/components/common/Slider.vue';
import displayImage from '@/components/common/DisplayImage.vue';
import {images as gallery} from '../../constant/dummyData'
</script>
