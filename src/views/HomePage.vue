<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="md:p-6 p-4 w-full bg-neutral-100">
        <Slider :data="sliderData"/>
        <div class="sm:mt-0 mt-8">
          <button
              id="dropdownDefaultButton"
              class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 mb-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
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
              class="absolute top-50 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
                class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHelperButton"
            >
              <li>
                <div
                    class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div class="flex items-center h-5">
                    <input
                        id="helper-checkbox-1"
                        aria-describedby="helper-checkbox-text-1"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
                    class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div class="flex items-center h-5">
                    <input
                        id="helper-checkbox-2"
                        aria-describedby="helper-checkbox-text-2"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
                    class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <div class="flex items-center h-5">
                    <input
                        id="helper-checkbox-3"
                        aria-describedby="helper-checkbox-text-3"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
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
              class="sm:flex hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 w-auto h-12 px-2.5 py-1 bg-white rounded-lg shadow justify-start items-center gap-8 inline-flex"
          >
            <li>
              <button
                  type="button"
                  class="px-4 py-3 rounded-md justify-center items-center gap-1.5 flex text-gray-500 "
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
                  class="px-4 py-3 rounded-md justify-center items-center gap-1.5 flex text-gray-500 "
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
                  class="px-4 py-3 rounded-md justify-center items-center gap-1.5 flex text-gray-500 "
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
                  class="px-4 py-3 rounded-md justify-center items-center gap-1.5 flex text-gray-500 "
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

<script>
import {IonPage, IonContent} from "@ionic/vue";
import Slider from "@/components/commons/Slider.vue";
import DisplayImage from "@/components/commons/DisplayImage.vue";
import {images, sliderData} from "../../constant/dummy-data.js";
import * as _ from 'lodash';

export default {
  components: {
    IonPage,
    IonContent,
    Slider,
    DisplayImage,
  },
  data() {
    return {
      isActive: "terbaru",
      images,
      chunkedItems: [],
      showDropdown: false,
      sliderData
    };
  },
  created() {
    this.chunkedItems = _.shuffle(_.chunk(this.images, 5));
  },
  methods: {
    setActiveTab(tab) {
      this.isActive = tab;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>
