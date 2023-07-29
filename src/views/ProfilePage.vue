<script setup>
import {IonPage, IonContent} from '@ionic/vue';
import DisplayImage from '@/components/commons/DisplayImage.vue';
import bgImage from '../../public/throne_room.png';
import {images} from '../../constant/dummy-data.js';
import {onMounted, ref} from 'vue';
import * as _ from 'lodash';
import {useAuthStore} from "@/stores/auth.js";

const {user} = useAuthStore();
const activeTab = ref('karya');
const chunkedItems = ref([]);

onMounted(() => {
  chunkedItems.value = _.shuffle(_.chunk(images, 5));
});
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div>
        <div class="relative w-full h-[440px]">
          <img class="h-full w-full object-cover" :src="bgImage" alt="Background Image"/>
          <div class="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50"></div>
          <div class="absolute top-1/4 left-0 flex w-full flex-col items-center justify-between gap-4">
            <img class="relative h-36 w-36 rounded-full" src="https://via.placeholder.com/144x144" alt="avatar"/>
            <div class="text-center text-3xl font-bold leading-10 text-white">{{ user?.name }}</div>
            <div class="text-center font-medium leading-none text-gray-400 text-md">
              Belajar Mencintai Karya Indonesia
            </div>
            <div class="flex h-full w-full items-center justify-center gap-1">
              <div class="text-center font-medium leading-none text-red-500 text-md">Bekasi, Indonesia</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-neutral-100">
        <div class="inline-flex w-full items-center justify-center gap-8 bg-white py-1 shadow px-2.5"
             data-tabs-toggle="#myTabContent" role="tablist">
          <button class="flex items-center justify-start rounded-md px-4 py-3 text-gray-500 gap-1.5" id="karya-tab"
                  @click="activeTab = 'karya'" :class="{ 'bg-red-700 text-white': activeTab === 'karya' }" type="button"
                  role="tab" aria-controls="karya" :aria-selected="activeTab === 'karya'">
            <span class="text-sm font-medium leading-tight">Karya</span>
          </button>
          <button class="flex items-center justify-start rounded-md px-4 py-3 text-gray-500 gap-1.5"
                  id="tentang-saya-tab"
                  @click="activeTab = 'tentang-saya'" :class="{ 'bg-red-700 text-white': activeTab === 'tentang-saya' }"
                  type="button" role="tab" aria-controls="tentang-saya" :aria-selected="activeTab === 'tentang-saya'">
            <span class="text-sm font-medium leading-tight">Tentang Saya</span>
          </button>
          <button class="flex items-center justify-center rounded-md px-4 py-3 text-gray-500 gap-1.5" id="disukai-tab"
                  @click="activeTab = 'disukai'" :class="{ 'bg-red-700 text-white': activeTab === 'disukai' }"
                  type="button"
                  role="tab" aria-controls="disukai" :aria-selected="activeTab === 'disukai'">
            <span class="text-sm font-medium leading-tight">Disukai</span>
          </button>
        </div>
        <div id="myTabContent" class="w-full p-4 md:p-8">
          <div v-show="activeTab === 'karya'" id="karya" role="tabpanel" aria-labelledby="karya-tab">
            <DisplayImage :data="chunkedItems"/>
          </div>
          <div v-show="activeTab === 'tentang-saya'"
               class="mx-auto h-screen max-w-4xl"
               id="tentang-saya"
               role="tabpanel"
               aria-labelledby="tentang-saya-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Saya adalah seseorang yang memiliki hasrat yang besar terhadap seni dan budaya Indonesia. Melalui platform
              ini, saya berusaha untuk belajar lebih dalam tentang seni dan budaya Indonesia serta memperluas apresiasi
              terhadap karya-karya yang ada.

              Saya lahir dan dibesarkan di Bekasi, Indonesia, sebuah kota yang kaya akan warisan seni dan budaya. Saya
              merasa terinspirasi oleh kekayaan tersebut dan ingin turut berkontribusi dalam mempromosikan dan
              mengembangkan seni lokal.

              Dengan semangat belajar yang tinggi, saya berusaha untuk terus meningkatkan pengetahuan dan pemahaman saya
              tentang seni dan budaya Indonesia. Saya percaya bahwa dengan mencintai dan mengapresiasi karya Indonesia,
              kita dapat memperkuat identitas dan kebanggaan bangsa serta memberikan pengakuan yang pantas bagi para
              seniman lokal.

              Melalui platform ini, saya berharap dapat berbagi inspirasi, pengetahuan, dan karya-karya yang menarik
              dengan Anda semua. Mari bergabung dalam perjalanan saya untuk mencintai dan memajukan seni dan budaya
              Indonesia. Terima kasih telah mengunjungi halaman ini!
            </p>
          </div>
          <div v-show="activeTab === 'disukai'" id="disukai" role="tabpanel">
            <DisplayImage :data="chunkedItems"/>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
  