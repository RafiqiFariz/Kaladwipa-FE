<template>
  <ion-content :fullscreen="false">
    <div className="p-8 w-full">
      <Slider />
      <div>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button">Dropdown button <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 4 4 4-4" />
          </svg></button>
        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
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
      <displayImage :images="images" />
    </div>
  </ion-content>
</template>

<script setup>
import { IonContent } from '@ionic/vue';
import Slider from '@/components/common/slider.vue';
import displayImage from '@/components/common/displayImage.vue';
const images = [
  { url: "../../resources/dummyGallery/ari-yanto-gatot-kaca-fight-hires-00.jpg", alt: "Image 1" },
  { url: "../../resources/dummyGallery/jonathan-lebrec-rizieres-free.jpg", alt: "Image 2" },
  { url: "../../resources/dummyGallery/nadya-b-img-2279-min.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/oliver-guiney-uncharted-real-redux-03.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/omorphia-visual-gadang.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/tangkas-tahanuji-tongkonan-composed.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/ui_uiiiiiiiii-1-small.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/zhong-zhou-1.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/ari-yanto-gatot-kaca-fight-hires-00.jpg", alt: "Image 1" },
  { url: "../../resources/dummyGallery/jonathan-lebrec-rizieres-free.jpg", alt: "Image 2" },
  { url: "../../resources/dummyGallery/nadya-b-img-2279-min.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/oliver-guiney-uncharted-real-redux-03.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/omorphia-visual-gadang.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/tangkas-tahanuji-tongkonan-composed.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/ui_uiiiiiiiii-1-small.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/zhong-zhou-1.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/ari-yanto-gatot-kaca-fight-hires-00.jpg", alt: "Image 1" },
  { url: "../../resources/dummyGallery/jonathan-lebrec-rizieres-free.jpg", alt: "Image 2" },
  { url: "../../resources/dummyGallery/nadya-b-img-2279-min.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/oliver-guiney-uncharted-real-redux-03.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/omorphia-visual-gadang.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/tangkas-tahanuji-tongkonan-composed.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/ui_uiiiiiiiii-1-small.jpg", alt: "Image 3" },
  { url: "../../resources/dummyGallery/zhong-zhou-1.jpg", alt: "Image 3" },
];
</script>
