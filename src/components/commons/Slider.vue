<script setup>
import {VueperSlides, VueperSlide} from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import {ref} from 'vue';

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
});

const breakpoints = ref({
  10000: {
    visibleSlides: 3
  },
  950: {
    visibleSlides: 2
  },
  740: {
    visibleSlides: 1,
    arrows: false,
    fixedHeight: '300px'
  }
});
</script>
<template>
  <vueper-slides class="no-shadow" :visible-slides="1" :slide-ratio="1 / 4" :dragging-distance="70" fixed-height="200px"
                 :gap="3" :arrows-outside="false" :autoplay="true" :bullets="false" :breakpoints="breakpoints">
    <vueper-slide v-for="(slide, i) in data" :key="i" :title="slide.title" :content="slide.content">
      <template #content>
        <div class="inline-flex h-full w-full items-center justify-center rounded-lg bg-white shadow">
          <div class="block h-full w-full sm:flex">
            <div class="w-full h-[50%] sm:w-[40%] sm:h-full">
              <!-- Display the image here -->
              <img :src="slide.url" :alt="slide.title" class="h-full w-full object-cover">
            </div>
            <div
                class="inline-flex w-full flex-col items-start justify-center px-2 py-4 gap-2.5 sm:w-[60%] sm:px-7 sm:py-2">
              <div class="flex h-12 flex-col items-start justify-start gap-2 self-stretch pr-4">
                <div class="self-stretch text-xs font-medium leading-3 text-black">Design</div>
                <div class="w-72 text-xl font-medium leading-7 text-black">{{ slide.title }}</div>
              </div>
              <div class="flex h-4 w-28 flex-col items-start justify-start gap-6">
                <router-link :to="slide.link">
                  <div class="inline-flex items-center justify-start gap-2">
                    <div class="text-sm font-normal leading-tight text-red-600">Baca Artikel</div>
                    <div class="relative h-4 w-4"></div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>
