<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div>
        <div class="w-full h-[441px] relative">
          <img class="w-full h-[441px] object-cover" :src="bgImage" alt="Background Image" />
          <div class="w-full h-[441px] left-0 top-0 absolute bg-black bg-opacity-50"></div>
          <div class="w-full h-[235px] left-0 top-1/4 absolute flex flex-col items-center justify-between gap-4">
            <img class="w-36 h-36 relative rounded-[100px]" src="https://via.placeholder.com/144x144" alt="avatar" />
            <div class="text-center text-white text-3xl font-bold leading-10">{{ authStore.user?.name }}</div>
            <div class="text-center text-gray-400 text-md font-medium leading-none">Belajar Mencintai Karya
              Indonesia
            </div>
            <div class="w-full h-full flex justify-center items-center gap-1">
              <div class="text-center text-red-500 text-md font-medium leading-none">Bekasi, Indonesia</div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-neutral-100">
        <div class="w-full px-2.5 py-1 bg-white shadow justify-center items-center gap-8 inline-flex"
          data-tabs-toggle="#myTabContent" role="tablist">
          <button class="px-4 py-3 rounded-md justify-start items-center gap-1.5 flex text-gray-500" id="karya-tab"
            @click="activeTab = 'karya'" :class="{ 'bg-red-700 text-white': activeTab === 'karya' }" type="button"
            role="tab" aria-controls="karya" :aria-selected="activeTab === 'karya'">
            <span class="text-sm font-medium leading-tight">Karya</span>
          </button>
          <button class="px-4 py-3 rounded-md justify-start items-center gap-1.5 flex text-gray-500" id="tentang-saya-tab"
            @click="activeTab = 'tentang-saya'" :class="{ 'bg-red-700 text-white': activeTab === 'tentang-saya' }"
            type="button" role="tab" aria-controls="tentang-saya" :aria-selected="activeTab === 'tentang-saya'">
            <span class="text-sm font-medium leading-tight">Tentang Saya</span>
          </button>
          <button class="px-4 py-3 rounded-md justify-center items-center gap-1.5 flex text-gray-500" id="disukai-tab"
            @click="activeTab = 'disukai'" :class="{ 'bg-red-700 text-white': activeTab === 'disukai' }" type="button"
            role="tab" aria-controls="disukai" :aria-selected="activeTab === 'disukai'">
            <span class="text-sm font-medium leading-tight">Disukai</span>
          </button>
        </div>
        <div id="myTabContent" class="md:p-8 p-4 w-full">
          <div v-show="activeTab === 'karya'" id="karya" role="tabpanel" aria-labelledby="karya-tab">
            <DisplayImage :data="chunkedItems" />
          </div>
          <div v-show="activeTab === 'tentang-saya'" class="h-screen mx-auto max-w-4xl" id="tentang-saya" role="tabpanel"
            aria-labelledby="tentang-saya-tab">
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
            <DisplayImage :data="chunkedItems" />
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from '@ionic/vue';
import DisplayImage from '@/components/commons/DisplayImage.vue';
import bgImage from '../../public/throne_room.png';
import { images } from '../../constant/dummy-data.js';
import { onMounted, ref } from 'vue';
import * as _ from 'lodash';
import {useAuthStore} from "@/stores/auth.js";

export default {
  components: {
    IonPage,
    IonContent,
    DisplayImage,
  },
  data() {
    return {
      bgImage,
      authStore: useAuthStore(),
    };
  },
  mounted() {
    this.authStore.getUser();
  },
  setup() {
    const activeTab = ref('karya');
    const chunkedItems = ref([]);

    onMounted(() => {
      chunkedItems.value = _.shuffle(_.chunk(images, 5));
    });

    return {
      activeTab,
      chunkedItems,
    };
  },
};
</script>
  