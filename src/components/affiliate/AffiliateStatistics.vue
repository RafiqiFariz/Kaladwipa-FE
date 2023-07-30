<script setup>
import {inject, onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const item = ref(null);
const affiliates = inject('affiliates');

onMounted(() => {
  const id = parseInt(route.params.id);
  item.value = affiliates.value.find((item) => item.id === id);
});
</script>
<template>
  <h1 class="font-bold text-center mb-0">Statistik</h1>
  <div class="p-5 flex">
    <img class="w-auto h-32 rounded-lg" :src="item?.img" alt="Jese image"/>
    <div class="pl-3 pt-4">
      <div class="text-base font-semibold text-left">
        <h3 class="font-bold text-left">
          {{ item?.produk }}
        </h3>
      </div>
      <a
          :href="item?.link"
          target="_blank"
          class="font-normal text-gray-500 opacity-50 hover:underline text-left"
      >
        {{ item?.link }}
      </a>
    </div>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
    <div class="bg-white p-4 rounded-lg shadow">
      <div class="font-bold text-lg">Dilihat</div>
      <div>{{ item?.dilihat }}</div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow">
      <div class="font-bold text-lg">Produk Terjual</div>
      <div>{{ item?.penjualan }}</div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow">
      <div class="font-bold text-lg">Pendapatan</div>
      <div>{{ $filters.rupiah(item?.pendapatan) }}</div>
    </div>
  </div>
</template>
