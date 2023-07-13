<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="md:p-6 p-4">
        <div class="md:flex md:flex-auto block md:space-y-0 space-y-2 md:gap-4 gap-2">
          <SelectBox :isActive="dataKategori.kategori === 'Produk Digital'" name="Produk Digital" :img="image"
            @click="pilihKategori({ kategori: 'Produk Digital', subKategori: '', kategoriKecil: [] })" />
          <SelectBox :isActive="dataKategori.kategori === 'Produk Fisik'" name="Produk Fisik" :img="image"
            @click="pilihKategori({ kategori: 'Produk Fisik', subKategori: '', kategoriKecil: [] })" />
        </div>
        <div class="grid md:grid-cols-4 grid-cols-2 md:space-y-0 md:gap-4 gap-2 py-2">
          <SelectBox :isActive="dataKategori.subKategori === 'Lukisan'" styling="sm:text-xl text-lg" name="Lukisan"
            :img="image"
            @click="pilihKategori({ kategori: dataKategori?.kategori, subKategori: 'Lukisan', kategoriKecil: [] })" />
          <SelectBox :isActive="dataKategori.subKategori === 'Kerajinan Tangan'" styling="sm:text-xl text-lg"
            name="Kerajinan Tangan" :img="image"
            @click="pilihKategori({ kategori: dataKategori?.kategori, subKategori: 'Kerajinan Tangan', kategoriKecil: [] })" />
          <SelectBox :isActive="dataKategori.subKategori === 'Tutorial'" styling="sm:text-xl text-lg" name="Tutorial"
            :img="image"
            @click="pilihKategori({ kategori: dataKategori?.kategori, subKategori: 'Tutorial', kategoriKecil: [] })" />
          <SelectBox :isActive="dataKategori.subKategori === 'Aset Game'" styling="sm:text-xl text-lg"
            name="Aset Game" :img="image"
            @click="pilihKategori({ kategori: dataKategori?.kategori, subKategori: 'Aset Game', kategoriKecil: [] })" />
        </div>
        <div class="grid lg:grid-cols-9 md:grid-cols-5 grid-cols-3 md:space-y-0 md:gap-4 gap-2 py-1 w-full">
          <Button :isActive="true" name="Lukisan" />
          <Button :isActive="false" name="Lukisan" />
          <Button :isActive="false" name="Lukisan" />
          <Button :isActive="false" name="Lukisan" />
          <Button :isActive="false" name="Lukisan" />
          <Button :isActive="false" name="Lukisan" />
          <Button :isActive="false" name="Lukisan" />
          <Button :isActive="false" name="Lukisan" />
          <Button :isActive="false" name="Lukisan" />
        </div>
        <div>
          <form>
            <label for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="flex justify-between items-center gap-4 mt-4">
                <div class="w-full relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search"
                    class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Cari produk..." required>
                </div>
                <div class="w-full md:block hidden">
                  <div
                    class="w-full py-2 bg-white justify-between px-4 items-center gap-8 inline-flex rounded-lg shadow-md">
                    <button class="px-3 py-1 rounded-md justify-start items-center gap-1.5 flex" id="Trending-tab"
                      data-tabs-target="#Trending" type="button" role="tab" aria-controls="Trending"
                      aria-selected="false">
                      <div class="text-gray-500 text-[14px] font-medium leading-tight">Trending</div>
                    </button>
                    <button class="px-3 py-1 rounded-md justify-start items-center gap-1.5 flex" id="Diskon-tab"
                      data-tabs-target="#Diskon" type="button" role="tab" aria-controls="Diskon" aria-selected="false">
                      <div class="text-gray-500 text-[14px] font-medium leading-tight">Diskon</div>
                    </button>
                    <button class="px-3 py-1 rounded-md justify-start items-center gap-1.5 flex" id="Trending-tab"
                      data-tabs-target="#Trending" type="button" role="tab" aria-controls="Trending"
                      aria-selected="false">
                      <div class="text-gray-500 text-[14px] font-medium leading-tight">Trending</div>
                    </button>
                    <button class="px-3 py-1 rounded-md justify-start items-center gap-1.5 flex" id="tentang-saya-tab"
                      data-tabs-target="#tentang-saya" type="button" role="tab" aria-controls="tentang-saya"
                      aria-selected="false">
                      <div class="text-gray-500 text-[14px] font-medium leading-tight">Tentang Saya</div>
                    </button>
                    <button class="px-4 py-1 bg-red-700 rounded-md justify-center items-center gap-1.5 flex"
                      id="disukai-tab" data-tabs-target="#disukai" type="button" role="tab" aria-controls="disukai"
                      aria-selected="false">
                      <div class="text-white text-[14px] font-medium leading-tight">Disukai</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 py-4 w-full">
          <Card :img="yae" />
          <Card :img="yae" />
          <Card :img="yae" />
          <Card :img="yae" />
          <Card :img="yae" />
          <Card :img="yae" />
          <Card :img="yae" />
          <Card :img="yae" />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import image from '../../resources/throne_room.png'
import SelectBox from '@/components/common/SelectBox.vue';
import Button from '@/components/common/Button.vue';
import Card from '@/components/common/Card.vue';
import yae from '../../resources/dummy_galleries/ui_uiiiiiiiii-1-small.jpg'
export default {
  components: {
    IonPage,
    IonContent,
    SelectBox,
    Button,
    Card,
  },
  data() {
    return {
      image: image,
      yae: yae,
      dataKategori: {
        kategori: "Produk Digital",
        subKategori: "",
        kategoriKecil: [],
      },

    };
  },
  methods: {
    pilihKategori(data) {
      this.dataKategori.kategori = data.kategori;
      this.dataKategori.subKategori = data.subKategori;
      this.dataKategori.kategoriKecil = data.kategoriKecil;
      console.log(this.dataKategori);
    },
  },

};
</script>
