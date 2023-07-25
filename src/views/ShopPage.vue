<script setup>
import {IonPage, IonContent} from '@ionic/vue';
import image from '../../public/throne_room.png'
import SelectBox from '@/components/commons/SelectBox.vue';
import Button from '@/components/commons/Button.vue';
import Card from '@/components/commons/Card.vue';
import yae from '../../public/dummy_galleries/ui_uiiiiiiiii-1-small.jpg'
import {ref} from 'vue';

const dataKategori = ref({
  kategori: "Produk Digital",
  subKategori: "",
  kategoriKecil: [],
});

const pilihKategori = (data) => {
  dataKategori.value.kategori = data.kategori;
  dataKategori.value.subKategori = data.subKategori;
  dataKategori.value.kategoriKecil = data.kategoriKecil;
};
</script>
<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="bg-gray-100 p-4 md:p-6">
        <div class="block gap-2 space-y-2 md:space-y-0 md:flex md:flex-auto">
          <SelectBox :img="image" :isActive="dataKategori.kategori === 'Produk Digital'" name="Produk Digital"
                     @click="pilihKategori({ kategori: 'Produk Digital', subKategori: '', kategoriKecil: [] })"/>
          <SelectBox :img="image" :isActive="dataKategori.kategori === 'Produk Fisik'" name="Produk Fisik"
                     @click="pilihKategori({ kategori: 'Produk Fisik', subKategori: '', kategoriKecil: [] })"/>
        </div>
        <div class="grid grid-cols-2 gap-2 py-2 md:space-y-0 md:grid-cols-4">
          <SelectBox :img="image" :isActive="dataKategori.subKategori === 'Lukisan'" name="Lukisan"
                     styling="sm:text-xl text-lg"
                     @click="pilihKategori({ kategori: dataKategori?.kategori, subKategori: 'Lukisan', kategoriKecil: [] })"/>
          <SelectBox :img="image" :isActive="dataKategori.subKategori === 'Kerajinan Tangan'"
                     name="Kerajinan Tangan" styling="sm:text-xl text-lg"
                     @click="pilihKategori({ kategori: dataKategori?.kategori, subKategori: 'Kerajinan Tangan', kategoriKecil: [] })"/>
          <SelectBox :img="image" :isActive="dataKategori.subKategori === 'Tutorial'" name="Tutorial"
                     styling="sm:text-xl text-lg"
                     @click="pilihKategori({ kategori: dataKategori?.kategori, subKategori: 'Tutorial', kategoriKecil: [] })"/>
          <SelectBox :img="image" :isActive="dataKategori.subKategori === 'Aset Game'"
                     name="Aset Game" styling="sm:text-xl text-lg"
                     @click="pilihKategori({ kategori: dataKategori?.kategori, subKategori: 'Aset Game', kategoriKecil: [] })"/>
        </div>
        <div class="grid w-full grid-cols-3 gap-2 py-1 md:space-y-0 md:grid-cols-5 md:gap-4 lg:grid-cols-9">
          <Button :isActive="true" name="Lukisan"/>
          <Button :isActive="false" name="Lukisan"/>
          <Button :isActive="false" name="Lukisan"/>
          <Button :isActive="false" name="Lukisan"/>
          <Button :isActive="false" name="Lukisan"/>
          <Button :isActive="false" name="Lukisan"/>
          <Button :isActive="false" name="Lukisan"/>
          <Button :isActive="false" name="Lukisan"/>
          <Button :isActive="false" name="Lukisan"/>
        </div>
        <div>
          <form>
            <label class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                   for="default-search">Search</label>
            <div class="relative">
              <div class="mt-4 flex items-center justify-between gap-4">
                <div class="relative w-full">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg aria-hidden="true" class="h-4 w-4 text-gray-500 dark:text-gray-400"
                         fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"/>
                    </svg>
                  </div>
                  <input id="default-search" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                         placeholder="Cari produk..."
                         required type="search">
                </div>
                <div class="hidden w-full md:block">
                  <div
                      class="inline-flex w-full items-center justify-between gap-8 rounded-lg bg-white shadow-md py-1.5 px-2.5">
                    <button id="Trending-tab" aria-controls="Trending"
                            aria-selected="false" class="flex items-center justify-start rounded-md px-4 py-3 gap-1.5" data-tabs-target="#Trending" role="tab"
                            type="button">
                      <div class="text-sm font-medium leading-tight text-gray-500">Trending</div>
                    </button>
                    <button id="Diskon-tab" aria-controls="Diskon"
                            aria-selected="false" class="flex items-center justify-start rounded-md px-4 py-3 gap-1.5" data-tabs-target="#Diskon" role="tab"
                            type="button">
                      <div class="text-sm font-medium leading-tight text-gray-500">Diskon</div>
                    </button>
                    <button id="Trending-tab" aria-controls="Trending"
                            aria-selected="false" class="flex items-center justify-start rounded-md px-4 py-3 gap-1.5" data-tabs-target="#Trending" role="tab"
                            type="button">
                      <div class="text-sm font-medium leading-tight text-gray-500">Trending</div>
                    </button>
                    <button id="tentang-saya-tab" aria-controls="tentang-saya"
                            aria-selected="false" class="flex items-center justify-start rounded-md px-4 py-3 gap-1.5" data-tabs-target="#tentang-saya" role="tab"
                            type="button">
                      <div class="text-sm font-medium leading-tight text-gray-500">Tentang Saya</div>
                    </button>
                    <button id="disukai-tab"
                            aria-controls="disukai" aria-selected="false" class="flex items-center justify-center rounded-md bg-red-700 px-4 py-3 gap-1.5" data-tabs-target="#disukai"
                            role="tab"
                            type="button">
                      <div class="text-sm font-medium leading-tight text-white">Disukai</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="grid w-full grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card :img="yae"/>
          <Card :img="yae"/>
          <Card :img="yae"/>
          <Card :img="yae"/>
          <Card :img="yae"/>
          <Card :img="yae"/>
          <Card :img="yae"/>
          <Card :img="yae"/>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
