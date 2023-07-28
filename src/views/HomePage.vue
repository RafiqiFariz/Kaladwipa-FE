<script setup>
import {IonPage, IonContent} from "@ionic/vue";
import Slider from "@/components/commons/Slider.vue";
import DisplayImage from "@/components/commons/DisplayImage.vue";
import {sliderData} from "../../constant/dummy-data.js";
import {useExploreStore} from "@/stores/explore.js";
import * as _ from 'lodash';
import {onMounted} from "vue"
import {ref} from "vue";
import {storeToRefs} from "pinia";

const isActive = ref("terbaru");
const chunkedItems = ref([]);
const showDropdown = ref(false);
const exploreStore = useExploreStore();
const {artworks} = storeToRefs(exploreStore);

onMounted(async () => {
  await exploreStore.getArtworks();
  chunkedItems.value = _.chunk(artworks.value.data, 5);
});

const setActiveTab = (tab) => {
  isActive.value = tab;
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
}
</script>
<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="w-full bg-neutral-100 p-4 md:p-6 relative">
        <Slider :data="sliderData"/>
        <div class="mt-8 sm:mt-0">
          <button
              id="dropdownDefaultButton"
              class="mb-2 inline-flex items-center rounded-lg bg-red-700 px-5 text-center text-sm font-medium text-white py-2.5 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300"
              type="button"
              @click="toggleDropdown"
          >
            Pilih Kategori
            <svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
            >
              <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div
              id="dropdownHelper"
              v-if="showDropdown"
              class="absolute z-10 w-60 rounded-lg bg-white shadow top-50 divide-y divide-gray-100 dark:divide-gray-600 dark:bg-gray-700"
          >
            <ul
                class="p-3 text-sm text-gray-700 space-y-1 dark:text-gray-200"
                aria-labelledby="dropdownHelperButton"
            >
              <li>
                <div
                    class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div class="flex h-5 items-center">
                    <input
                        id="helper-checkbox-1"
                        aria-describedby="helper-checkbox-text-1"
                        type="checkbox"
                        value=""
                        class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                    />
                  </div>
                  <div class="ml-2 text-sm">
                    <label
                        for="helper-checkbox-1"
                        class="font-medium text-gray-900 dark:text-gray-300"
                    >
                      Tradisional
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <div
                    class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div class="flex h-5 items-center">
                    <input
                        id="helper-checkbox-2"
                        aria-describedby="helper-checkbox-text-2"
                        type="checkbox"
                        value=""
                        class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                    />
                  </div>
                  <div class="ml-2 text-sm">
                    <label
                        for="helper-checkbox-2"
                        class="font-medium text-gray-900 dark:text-gray-300"
                    >
                      Tradisional Modern
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <div
                    class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div class="flex h-5 items-center">
                    <input
                        id="helper-checkbox-3"
                        aria-describedby="helper-checkbox-text-3"
                        type="checkbox"
                        value=""
                        class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                    />
                  </div>
                  <div class="ml-2 text-sm">
                    <label
                        for="helper-checkbox-3"
                        class="font-medium text-gray-900 dark:text-gray-300"
                    >
                      Sketa Karakter Tradisional
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="relative mt-4">
          <DisplayImage :data="chunkedItems" kategori="homepage"/>
          <!-- Tab Navigasi -->
          <ul
              class="fixed bottom-0 left-1/2 mb-4 inline-flex hidden h-12 w-auto -translate-x-1/2 transform items-center justify-start gap-8 rounded-lg bg-white py-1 shadow px-2.5 sm:flex"
          >
            <li>
              <button
                  type="button"
                  class="flex items-center justify-center rounded-md px-4 py-3 text-gray-500 gap-1.5"
                  :class="{ 'bg-red-700 text-white': isActive === 'komunitas' }"
                  @click="setActiveTab('komunitas')"
              >
              <span class="text-sm font-normal leading-none">
                Komunitas
              </span>
              </button>
            </li>
            <li>
              <button
                  type="button"
                  class="flex items-center justify-center rounded-md px-4 py-3 text-gray-500 gap-1.5"
                  :class="{ 'bg-red-700 text-white': isActive === 'trending' }"
                  @click="setActiveTab('trending')"
              >
              <span class="text-sm font-normal leading-none">
                Trending
              </span>
              </button>
            </li>
            <li>
              <button
                  type="button"
                  class="flex items-center justify-center rounded-md px-4 py-3 text-gray-500 gap-1.5"
                  :class="{ 'bg-red-700 text-white': isActive === 'terbaru' }"
                  @click="setActiveTab('terbaru')"
              >
              <span class="text-sm font-normal leading-none">
                Terbaru
              </span>
              </button>
            </li>
            <li>
              <button
                  type="button"
                  class="flex items-center justify-center rounded-md px-4 py-3 text-gray-500 gap-1.5"
                  :class="{ 'bg-red-700 text-white': isActive === 'diikuti' }"
                  @click="setActiveTab('diikuti')"
              >
              <span class="text-sm font-normal leading-none">
                Diikuti
              </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
