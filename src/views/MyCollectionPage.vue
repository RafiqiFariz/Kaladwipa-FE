<template>
    <ion-page>
        <ion-content :fullscreen="false">
            <div class="w-full bg-neutral-100 p-4 md:p-6">
                <div class="relative mt-4">
                    <label for="judul" class="mb-8 block text-center text-2xl font-bold text-gray-900 dark:text-white md:text-3xl lg:text-4xl">Koleksi Ku</label>
                    <DisplayImage :data="chunkedItems" kategori="koleksiku"/>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
  
<script>
import { IonPage, IonContent } from "@ionic/vue";
import Slider from "@/components/commons/Slider.vue";
import DisplayImage from "@/components/commons/DisplayImage.vue";
import { images, sliderData } from "../../constant/dummy-data.js";
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
  