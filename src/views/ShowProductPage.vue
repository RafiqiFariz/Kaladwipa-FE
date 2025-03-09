<script setup>
import {IonPage, IonContent} from '@ionic/vue';
import Carousel from '@/components/commons/Carousel.vue';
import {useProductStore} from "@/stores/product.js";
import {computed, onMounted, ref} from "vue";
import {useRoute} from 'vue-router';
import {storeToRefs} from "pinia";
import moment from 'moment';
import _ from 'lodash';
import {useToastStore} from "@/stores/toast.js";
import Rating from "@/components/commons/Rating.vue";
import Comment from "@/components/commons/Comment.vue";

const route = useRoute();
const host = window.location.host;
const affiliateLinkInput = ref(null);
const affiliateLink = ref(`http://${host}${route.fullPath}`);

const productImageUrl = (item) => {
  let modifiedUrl = item.imageName?.replace('public/', 'storage/');
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const finalUrl = `${baseUrl}/${modifiedUrl}`;

  // bentuk objek ini mengikuti aturan dari carousel flowbite-vue
  return {src: finalUrl, alt: item.id};
};

const productStore = useProductStore();
const {product} = storeToRefs(productStore);
const pictures = ref([]);

onMounted(async () => {
  await productStore.showProduct(route.params.id);
  pictures.value = _.map(product.value.images, productImageUrl);
});

const postedTime = (date) => {
  const now = moment();
  const post = moment(date);

  const diffInDays = now.diff(post, 'days');

  if (diffInDays === 0) {
    return 'Diposting hari ini';
  } else if (diffInDays === 1) {
    return 'Diposting kemarin';
  } else {
    return `Diposting ${diffInDays} hari yang lalu`;
  }
};

const profilePictureUrl = computed(() => {
  return product?.user?.profilePictureUrl ?? 'https://via.placeholder.com/48x48';
})

const toastStore = useToastStore();

const copyLink = () => {
  affiliateLinkInput.value.select();
  navigator.clipboard.writeText(affiliateLink.value)
      .then(() => toastStore.showToast('success', 'Tautan berhasil disalin.'));
}
</script>

<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="relative w-full bg-neutral-100 p-4 md:p-6">
        <div
            class="mb-5 block h-full w-full items-center justify-start gap-5 rounded-lg border border-gray-200 bg-white shadow md:inline-flex">

          <Carousel class="relative md:w-2/3" :pictures="pictures"/>
          <div
              class="inline-flex w-full flex-col items-start justify-between self-stretch p-5 md:w-1/3 md:py-5 md:pr-5 md:pl-0">
            <div class="flex h-full flex-col items-start justify-start self-stretch gap-3.5">
              <div class="inline-flex items-start justify-start gap-3">
                <img class="relative h-12 w-12 rounded-full" :src="profilePictureUrl" :alt="product?.user?.name"/>
                <div class="inline-flex flex-col items-start justify-center gap-1">
                  <div class="text-base font-medium leading-normal text-zinc-800">
                    {{ product?.user?.name }}
                  </div>
                  <div class="text-xs font-normal leading-none text-neutral-400">
                    {{ product?.user?.professionalTitle }}
                  </div>
                </div>
              </div>
              <div class="flex h-full flex-col items-start justify-start gap-2 self-stretch">
                <div class="self-stretch text-2xl font-bold leading-loose text-gray-900">
                  {{ _.startCase(product.title) }}
                </div>
                <div class="self-stretch text-base font-normal leading-normal text-gray-500">
                  {{ product.description }}
                </div>
                <div class="self-stretch text-xs font-medium leading-none text-gray-700">
                  {{ postedTime(product.createdAt) }}
                </div>
                <Rating amount="4.0"/>
              </div>
              <div class="w-full">
                <div class="mb-4">
                  <div class="mb-2 text-xs font-normal leading-3 text-gray-500">
                    Kategori:
                  </div>
                  <div class="inline-flex flex-wrap gap-y-2">
                    <span v-for="(category, index) in product.categories"
                          class="mr-2 rounded bg-red-100 text-sm font-medium text-red-800 px-2.5 py-0.5 dark:bg-red-900 dark:text-red-300"
                          :key="index">{{ category?.name }}</span>
                  </div>
                </div>

                <div>
                  <div class="mb-2 text-xs font-normal leading-3 text-gray-500">
                    Perangkat Lunak:
                  </div>
                  <div class="inline-flex flex-wrap gap-y-2">
                    <span v-for="(software, index) in product.software"
                          class="mr-2 rounded bg-red-100 text-sm font-medium text-red-800 px-2.5 py-0.5 dark:bg-red-900 dark:text-red-300"
                          :key="index">{{ software?.name }}</span>
                  </div>
                </div>
              </div>
              <div class="mt-4 grid w-full grid-cols-1 gap-2 md:grid-cols-2">
                <button
                    class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                  <svg class="h-4 w-4 mr-2 fill-current" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                       fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="m17.855 11.273 2.105-7a.952.952 0 0 0-.173-.876 1.042 1.042 0 0 0-.37-.293 1.098 1.098 0 0 0-.47-.104H5.021L4.395.745a.998.998 0 0 0-.376-.537A1.089 1.089 0 0 0 3.377 0H1.053C.773 0 .506.105.308.293A.975.975 0 0 0 0 1c0 .265.11.52.308.707.198.187.465.293.745.293h1.513l.632 2.254v.02l2.105 6.999.785 2.985a3.13 3.13 0 0 0-1.296 1.008 2.87 2.87 0 0 0-.257 3.06c.251.484.636.895 1.112 1.19a3.295 3.295 0 0 0 3.228.12c.5-.258.918-.639 1.208-1.103.29-.465.444-.995.443-1.535a2.834 2.834 0 0 0-.194-1h2.493a2.84 2.84 0 0 0-.194 1c0 .593.186 1.173.533 1.666.347.494.84.878 1.417 1.105a3.314 3.314 0 0 0 1.824.17 3.213 3.213 0 0 0 1.617-.82 2.95 2.95 0 0 0 .864-1.536 2.86 2.86 0 0 0-.18-1.733 3.038 3.038 0 0 0-1.162-1.346 3.278 3.278 0 0 0-1.755-.506h-7.6l-.526-2h9.179c.229 0 .452-.07.634-.201a1 1 0 0 0 .379-.524Zm-2.066 4.725a1.1 1.1 0 0 1 .585.168c.173.11.308.267.388.45.08.182.1.383.06.577a.985.985 0 0 1-.288.512 1.07 1.07 0 0 1-.54.274 1.104 1.104 0 0 1-.608-.057 1.043 1.043 0 0 1-.472-.369.965.965 0 0 1-.177-.555c0-.265.11-.52.308-.707.197-.188.465-.293.744-.293Zm-7.368 1a.965.965 0 0 1-.177.555c-.116.165-.28.293-.473.369a1.104 1.104 0 0 1-.608.056 1.07 1.07 0 0 1-.539-.273.985.985 0 0 1-.288-.512.953.953 0 0 1 .06-.578c.08-.182.214-.339.388-.448a1.092 1.092 0 0 1 1.329.124.975.975 0 0 1 .308.707Zm5.263-8.999h-1.053v1c0 .265-.11.52-.308.707a1.081 1.081 0 0 1-.744.293c-.28 0-.547-.106-.745-.293a.975.975 0 0 1-.308-.707v-1H9.474a1.08 1.08 0 0 1-.745-.293A.975.975 0 0 1 8.421 7c0-.265.11-.52.308-.707.198-.187.465-.293.745-.293h1.052V5c0-.265.111-.52.309-.707.197-.187.465-.292.744-.292.279 0 .547.105.744.292a.975.975 0 0 1 .308.707v1h1.053c.28 0 .547.106.744.293a.975.975 0 0 1 .309.707c0 .265-.111.52-.309.707a1.081 1.081 0 0 1-.744.293Z"/>
                  </svg>
                  <span class="font-medium leading-tight">Masukkan Keranjang</span>
                </button>
                <button
                    class="rounded-lg border border-solid border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 border-1 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                  <span class="text-sm font-medium leading-tight text-black">Beli Langsung</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!--  Bagian komentar dan Salin link Afiliasi  -->
        <div class="block gap-5 space-y-5 md:space-y-0 md:flex">
          <Comment data=""/>

          <!-- Bagian Tag Karya -->
          <div class="w-full md:w-1/3">
            <div
                class="inline-flex w-full flex-wrap items-start gap-y-2 rounded-lg border border-gray-200 bg-white p-4 shadow">
              <div class="text-xl font-medium leading-7 text-gray-900">Bagikan Link Affliasi</div>
              <div class="mb-4 text-sm font-normal leading-none text-black">
                Rekomendasikan produk ini dan dapatkan komisi setidaknya 10%
              </div>
              <div class="relative w-full">
                <input type="text" id="affiliate-link"
                       class="block w-full select-none rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500 dark:placeholder-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-red-500 dark:focus:ring-red-500"
                       ref="affiliateLinkInput" :value="affiliateLink" disabled>
                <button type="submit"
                        class="absolute rounded-lg bg-red-700 px-4 py-2 text-sm font-medium text-white right-2.5 bottom-2.5 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        @click="copyLink">Salin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>