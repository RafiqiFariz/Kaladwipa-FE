<template>
  <vueper-slides class="no-shadow" :visible-slides="1" :slide-ratio="1 / 4" :dragging-distance="70" fixed-height="200px"
                 :gap="3" :arrows-outside="false" :autoplay="true" :bullets="false" :breakpoints="breakpoints">
    <vueper-slide v-for="(slide, i) in data" :key="i" :title="slide.title" :content="slide.content">
      <template #content>
        <div class="w-full h-full bg-white rounded-lg shadow justify-center items-center inline-flex">
          <div class="sxsm:block sm:flex h-full w-full">
            <div class="sxsm:w-full sm:w-[40%] sxsm:h-[50%] sm:h-full">
              <!-- Display the image here -->
              <img :src="slide.url" :alt="slide.title" class="w-full h-full object-cover">
            </div>
            <div
                class="sxsm:w-full sm:w-[60%] sxsm:px-2 sm:px-7 sxsm:py-4 sm:py-2 flex-col justify-center items-start gap-2.5 inline-flex">
              <div class="self-stretch h-12 pr-4 flex-col justify-start items-start gap-2 flex">
                <div class="self-stretch text-black text-xs font-medium leading-3">Design</div>
                <div class="w-72 text-black text-xl font-medium leading-7">{{ slide.title }}</div>
              </div>
              <div class="w-28 h-4 flex-col justify-start items-start gap-6 flex">
                <router-link :to="slide.link">
                  <div class="justify-start items-center gap-2 inline-flex">
                    <div class="text-red-600 text-sm font-normal leading-tight">Baca Artikel</div>
                    <div class="w-4 h-4 relative"></div>
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

<script>
import {VueperSlides, VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import {sliderData} from "../../../constant/dummy-data.js";

export default {
  components: {VueperSlides, VueperSlide},
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      breakpoints: {
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
      },
      sliderData
    }
  }
}
</script>
