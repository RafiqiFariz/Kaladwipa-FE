<template>
  <h1 class="font-bold text-center mb-0">Statistik</h1>
  <div class="p-5 flex">
    <img class="w-auto h-32 rounded-lg" :src="this.item.img" alt="Jese image" />
    <div class="pl-3 pt-4">
      <div class="text-base font-semibold text-left">
        <h3 class="font-bold text-left">
          {{ this.item.produk }}
        </h3>
      </div>
      <a
        :href="this.item.link"
        class="font-normal text-gray-500 opacity-50 hover:underline text-left"
      >
        {{ this.item.link }}
      </a>
    </div>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
    <div class="bg-white p-4 rounded-lg shadow">
      <div class="font-bold text-lg">Dilihat</div>
      <div>{{ this.item.dilihat }}</div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow">
      <div class="font-bold text-lg">Produk Terjual</div>
      <div>{{ this.item.penjualan }}</div>
    </div>
    <div class="bg-white p-4 rounded-lg shadow">
      <div class="font-bold text-lg">Pendapatan</div>
      <div>{{ this.item.pendapatan }}</div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["affiliates"],
  data() {
    return {
      item: null,
    };
  },
  created() {
    const id = parseInt(this.$route.params.affiliateId);
    this.item = this.affiliates.find((item) => item.id === id);
  },
};
</script>
