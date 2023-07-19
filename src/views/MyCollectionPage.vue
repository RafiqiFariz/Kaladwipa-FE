<template>
    <ion-page>
        <ion-content :fullscreen="false">
            <div class="md:p-6 p-4 w-full bg-neutral-100">
                <div class="relative mt-4">
                    <label for="judul" class="block mb-8 lg:text-4xl md:text-3xl text-2xl text-center font-bold text-gray-900 dark:text-white">Koleksi Ku</label>
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
  