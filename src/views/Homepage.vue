<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="p-8 w-full bg-neutral-100">
        <Slider :data="sliderData"/>
        <div>
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
                      <div>Tradisional</div>
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
                      <div>Tradisional Modern</div>
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
                      <div>Sketa Karakter Tradisional</div>
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="pt-8"></div>
        <div class="relative">
          <displayImage :images="gallery" />
          <div
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 w-[410px] h-12 px-2.5 py-1 bg-white rounded-lg shadow justify-start items-center gap-8 inline-flex"
          >
            <div
              class="px-3 py-2 rounded-md justify-start items-center gap-1.5 flex"
            >
              <div class="text-gray-500 text-[12px] font-normal leading-none">
                Komunitas
              </div>
            </div>
            <div
              class="px-3 py-2 rounded-md justify-start items-center gap-1.5 flex"
            >
              <div class="text-gray-500 text-[12px] font-normal leading-none">
                Trending
              </div>
            </div>
            <div
              class="px-4 py-3 bg-red-700 rounded-md justify-center items-center gap-1.5 flex"
            >
              <div class="text-white text-[12px] font-normal leading-none">
                Terbaru
              </div>
            </div>
            <div
              class="px-3 py-2 rounded-md justify-center items-center gap-1.5 flex"
            >
              <div class="text-gray-500 text-[12px] font-normal leading-none">
                Diikuti
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
import Slider from "@/components/common/Slider.vue";
import displayImage from "@/components/common/DisplayImage.vue";
import { images as gallery, sliderData } from "../../constant/dummy-data.js";

export default {
  components: {
    IonPage,
    IonContent,
    Slider,
    displayImage,
  },
  data() {
    return {
      gallery: gallery,
      showDropdown: false,
      sliderData
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
  },
};
</script>
