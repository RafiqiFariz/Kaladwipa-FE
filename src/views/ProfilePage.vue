<template>
    <ion-page>
        <ion-content :fullscreen="false">
            <div>
                <div class="w-full h-[441px] relative">
                    <img class="w-full h-[441px] object-cover" :src="bgImage" alt="Background Image" />
                    <div class="w-full h-[441px] left-0 top-0 absolute bg-black bg-opacity-50"></div>
                    <div class="w-full h-[235px] left-0 top-1/4 absolute flex flex-col items-center justify-between gap-4">
                        <img class="w-36 h-36 relative rounded-[100px]" src="https://via.placeholder.com/144x144" />
                        <div class="text-center text-white text-3xl font-bold leading-10">Rian Arimawan</div>
                        <div class="text-center text-gray-400 text-md font-medium leading-none">Belajar Mencintai Karya
                            Indonesia</div>
                        <div class="w-full h-full flex justify-center items-center gap-1">
                            <div class="text-center text-red-500 text-md font-medium leading-none">Bekasi, Indonesia</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="w-full px-2.5 py-1 bg-white shadow justify-center items-center gap-8 inline-flex">
                    <button class="px-3 py-2 rounded-md justify-start items-center gap-1.5 flex" id="karya-tab"
                        data-tabs-target="#karya" type="button" role="tab" aria-controls="karya" aria-selected="false">
                        <div class="text-gray-500 text-[14px] font-medium leading-tight">Karya</div>
                    </button>
                    <button class="px-3 py-2 rounded-md justify-start items-center gap-1.5 flex" id="tentang-saya-tab"
                        data-tabs-target="#tentang-saya" type="button" role="tab" aria-controls="tentang-saya"
                        aria-selected="false">
                        <div class="text-gray-500 text-[14px] font-medium leading-tight">Tentang Saya</div>
                    </button>
                    <button class="px-4 py-3 bg-red-700 rounded-md justify-center items-center gap-1.5 flex"
                        id="disukai-tab" data-tabs-target="#disukai" type="button" role="tab" aria-controls="disukai"
                        aria-selected="false">
                        <div class="text-white text-[14px] font-medium leading-tight">Disukai</div>
                    </button>
                </div>
                <div id="myTabContent">
                    <div class="hidden px-8 py-4 w-full bg-neutral-100" id="karya" role="tabpanel"
                        aria-labelledby="karya-tab">
                        <displayImage :images="images" />
                    </div>
                    <div class="hidden px-8 py-4 w-full bg-neutral-100" id="tentang-saya" role="tabpanel"
                        aria-labelledby="tentang-saya-tab">
                        <p class="text-sm text-gray-500 dark:text-gray-400">This is some placeholder content the <strong
                                class="font-medium text-gray-800 dark:text-white">tentang-saya tab's associated
                                content</strong>. Clicking another tab will toggle the visibility of this one for the next.
                            The tab JavaScript swaps classes to control the content visibility and styling.</p>
                    </div>
                    <div class="hidden px-8 py-4 w-full bg-neutral-100" id="disukai" role="tabpanel">
                        <displayImage :images="images" />
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import displayImage from '@/components/common/DisplayImage.vue';
import bgImage from '../../resources/throne room.png'
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
  