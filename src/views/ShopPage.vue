<script setup>
import {IonPage, IonContent} from '@ionic/vue';
import image from '../../public/throne_room.png'
import SelectBox from '@/components/commons/SelectBox.vue';
import Button from '@/components/commons/Button.vue';
import ProductCard from '@/components/commons/ProductCard.vue';
import {onMounted, ref, computed} from 'vue';
import {storeToRefs} from "pinia";
import {useProductStore} from "@/stores/product.js";
import {useProductCategories} from "@/stores/product-categories.js";

const productStore = useProductStore();
const productCategoriesStore = useProductCategories();
const {products} = storeToRefs(productStore);
const {productCategories} = storeToRefs(productCategoriesStore);

onMounted(async () => {
  await productStore.getProducts();
  await productCategoriesStore.getProductCategories();
});

const categoryData = ref({
  category: 'Produk Digital',
  subCategory: '',
  subSubCategory: [],
});

const selectCategory = (data) => {
  categoryData.value.category = data.category;
  categoryData.value.subCategory = data.subCategory;
  categoryData.value.subSubCategory = data.subSubCategory;
};

// Bagian ini menunjukkan berapa banyak kategori yang harus ditampilkan pada baris pertama
const firstRowCategoriesCount = 8; // Ganti sesuai jumlah kategori yang ingin ditampilkan pada baris pertama
const firstRowCategories = computed(() => productCategories.value.data?.slice(0, firstRowCategoriesCount));

// Bagian ini menunjukkan kategori yang akan ditampilkan di baris-baris berikutnya (selain baris pertama)
const remainingRowsCategories = computed(() => productCategories.value.data?.slice(firstRowCategoriesCount));

// State untuk menampilkan/menyembunyikan baris-baris berikutnya
const showMoreButton = ref(false);

const moreButtonLabel = computed(() => (showMoreButton.value ? 'Lebih sedikit' : 'Lebih banyak'));

const toggleShowMore = () => {
  showMoreButton.value = !showMoreButton.value;
};
</script>
<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="bg-gray-100 p-4 md:p-6">
        <div class="block gap-2 space-y-2 md:space-y-0 md:flex md:flex-auto">
          <SelectBox :img="image"
                     :isActive="categoryData.category === 'Produk Fisik'"
                     name="Produk Fisik"
                     @click="selectCategory({ category: 'Produk Fisik'})"
          />
          <SelectBox :img="image"
                     :isActive="categoryData.category === 'Produk Digital'"
                     name="Produk Digital"
                     @click="selectCategory({ category: 'Produk Digital'})"
          />
        </div>
        <div class="grid grid-cols-2 gap-2 py-2 md:space-y-0 md:grid-cols-4">
          <SelectBox :img="image"
                     :isActive="categoryData.subCategory === 'Lukisan'"
                     name="Lukisan"
                     styling="sm:text-xl text-lg"
                     @click="selectCategory({ category: 'Produk Fisik', subCategory: 'Lukisan'})"
          />
          <SelectBox :img="image"
                     :isActive="categoryData.subCategory === 'Kerajinan Tangan'"
                     name="Kerajinan Tangan"
                     styling="sm:text-xl text-lg"
                     @click="selectCategory({ category: 'Produk Fisik', subCategory: 'Kerajinan Tangan'})"
          />
          <SelectBox :img="image"
                     :isActive="categoryData.subCategory === 'Tutorial'"
                     name="Tutorial"
                     styling="sm:text-xl text-lg"
                     @click="selectCategory({ category: 'Produk Digital', subCategory: 'Tutorial'})"
          />
          <SelectBox :img="image"
                     :isActive="categoryData.subCategory === 'Aset Game'"
                     name="Aset Game"
                     styling="sm:text-xl text-lg"
                     @click="selectCategory({ category: 'Produk Digital', subCategory: 'Aset Game'})"
          />
        </div>
        <div class="grid w-full grid-cols-3 gap-2 py-1 md:space-y-0 md:grid-cols-5 md:gap-4 lg:grid-cols-9">
          <!-- Baris pertama -->
          <Button
              v-for="(item, index) in firstRowCategories"
              :isActive="index === 0"
              :name="item.name"
              :key="index"
          />

          <!-- Baris-baris berikutnya (sembunyikan dengan CSS) -->
          <div
              v-for="(item, index) in remainingRowsCategories"
              :key="index"
              :class="{ 'hidden': !showMoreButton }"
          >
            <Button :name="item.name" />
          </div>

          <!-- Tombol "Tampilkan lebih banyak" -->
          <button
              class="text-red-500"
              @click="toggleShowMore"
          >
            {{ moreButtonLabel }}
          </button>
        </div>
        <div>
          <form>
            <label class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                   for="default-search"
            >
              Cari
            </label>
            <div class="relative">
              <div class="mt-4 flex items-center justify-between gap-4">
                <div class="relative w-full">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg aria-hidden="true" class="h-4 w-4 text-gray-500 dark:text-gray-400"
                         fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"
                      />
                    </svg>
                  </div>
                  <input id="default-search"
                         class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                         placeholder="Cari produk..."
                         required type="search"
                  >
                </div>
                <div class="hidden w-full md:block">
                  <div
                      class="inline-flex w-full items-center justify-between gap-8 rounded-lg bg-white shadow-md py-1.5 px-2.5">
                    <button id="trending-tab"
                            class="flex items-center justify-start rounded-md px-4 py-3 gap-1.5"
                            data-tabs-target="#trending"
                            type="button"
                    >
                      <div class="text-sm font-medium leading-tight text-gray-500">Trending</div>
                    </button>
                    <button id="discount-tab"
                            class="flex items-center justify-start rounded-md px-4 py-3 gap-1.5"
                            data-tabs-target="#discount"
                            type="button"
                    >
                      <div class="text-sm font-medium leading-tight text-gray-500">Diskon</div>
                    </button>
                    <button id="high-rating-tab"
                            class="flex items-center justify-start rounded-md px-4 py-3 gap-1.5"
                            data-tabs-target="#high-rating"
                            type="button"
                    >
                      <div class="text-sm font-medium leading-tight text-gray-500">Rating Tinggi</div>
                    </button>
                    <button id="special-offer-tab"
                            class="flex items-center justify-start rounded-md px-4 py-3 gap-1.5"
                            data-tabs-target="#special-offer"
                            type="button"
                    >
                      <div class="text-sm font-medium leading-tight text-gray-500">Penawaran Khusus</div>
                    </button>
                    <button id="best-seller-tab"
                            class="flex items-center justify-center rounded-md bg-red-700 px-4 py-3 gap-1.5"
                            data-tabs-target="#best-seller"
                            type="button"
                    >
                      <div class="text-sm font-medium leading-tight text-white">Penjualan Terbaik</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="grid w-full grid-cols-1 gap-4 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProductCard v-for="(product, index) in products.data"
                       :id="product.id"
                       :name="product.name"
                       :price="product.price"
                       :description="product.description"
                       :affiliate-commission="product.affiliate_commission"
                       :is-affiliated="product.is_affiliated"
                       :user="product.user"
                       :img="product.images[0]"
          />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
