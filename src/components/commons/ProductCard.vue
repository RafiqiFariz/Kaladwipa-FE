<script setup>
import {defineProps} from "vue";
import _ from "lodash";

const props = defineProps([
  'isActive', 'id', 'name',
  'price', 'description', 'affiliateCommission',
  'isAffiliated', 'user', 'img',
]);

const productImageUrl = (item) => {
  let modifiedUrl = item.imageName?.replace('public/', 'storage/');
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return `${baseUrl}/${modifiedUrl}`;
};

const limitString = (value, length) => {
  if (value.length > length) {
    return value.slice(0, length) + '...';
  }

  return value;
};
</script>
<template>
  <div class='w-full h-full px-4 md:pt-16 pt-10 pb-5 relative rounded-md'>
    <div class="relative z-30 mt-52 space-y-4">
      <p class="text-left text-white md:text-xl text-md">
        {{ limitString(_.startCase(name), 30) }}
      </p>
      <div class="w-full flex">
        <div class="w-40 h-5 justify-start items-center gap-3 inline-flex">
          <div class="justify-start items-center gap-1 flex">
            <div class="w-5 h-5 relative">
              <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            </div>
            <div class="w-5 h-5 relative">
              <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            </div>
            <div class="w-5 h-5 relative">
              <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            </div>
            <div class="w-5 h-5 relative">
              <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            </div>
            <div class="w-5 h-5 relative">
              <svg class="w-4 h-4 text-red-500 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor" viewBox="0 0 22 20">
                <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            </div>
          </div>
          <div class="px-2.5 py-0.5 bg-rose-100 rounded justify-center items-center flex">
            <div class="text-center text-red-800 text-xs font-medium leading-none">5.0</div>
          </div>
        </div>
      </div>
      <div class="w-full h-full justify-between items-center gap-1 inline-flex">
        <div class="text-center text-white text-medium font-normal leading-none">Harga</div>
        <div class="justify-end items-center gap-1 md:flex">
          <!-- Bagian Diskon -->
          <!--          <div class="w-full text-right text-white text-xs font-medium line-through leading-none">-->
          <!--            Rp.{{ price }}-->
          <!--          </div>-->
          <div class="w-full text-right text-white text-medium font-medium leading-tight">
            {{ $filters.rupiah(price) }}
          </div>
        </div>
      </div>
      <div class="w-full h-full justify-between items-center gap-1 inline-flex">
        <div class="h-4 justify-start items-center gap-2 flex">
          <img class="w-8 h-8 relative rounded-full shadow" src="https://via.placeholder.com/32x32" alt="Foto Profil"/>
          <div class="text-white text-xs font-medium leading-none">{{ limitString(user?.name, 15) }}</div>
        </div>
        <router-link
            class="h-9 px-3 py-2 bg-red-700 rounded-lg justify-center items-center gap-2 flex w-1/2"
            :to="{name: 'toko.produk.show', params: {id: id}}"
        >
          <button class="h-9 px-3 py-2 bg-red-700 rounded-lg justify-center items-center gap-2 flex w-full">
            <span class="text-white text-sm font-medium leading-tight">Detail</span>
          </button>
        </router-link>
      </div>
    </div>
    <div class='w-full h-full absolute top-0 left-0 bg-black bg-opacity-60 z-20 rounded-md'></div>
    <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 rounded-md">
      <img :src="productImageUrl(img)" :alt="`product-${id}`" class="h-full w-full max-h-full object-cover"/>
    </div>
  </div>
</template>