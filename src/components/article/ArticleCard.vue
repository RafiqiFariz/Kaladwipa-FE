<script setup>
import {useArticleStore} from "@/stores/article.js";
import {storeToRefs} from "pinia";
import {useRoute} from "vue-router";
import _ from "lodash";

const route = useRoute();
const articleStore = useArticleStore();
const {articles} = storeToRefs(articleStore);
await articleStore.getArticles();
</script>
<template>
  <div v-for="(article, index) in articles.data"
       class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
       :key="index">
    <a href="#">
      <img class="rounded-t-lg" :src="article.thumbnail" :alt="article.title"/>
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {{ _.startCase(article.title) }}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ $filters.truncateText(article.content, 150) }}
      </p>
      <router-link :to="{name: 'artikel.show', params: {id: article.id}}"
                   class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
        Lihat selengkapnya
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </router-link>
    </div>
  </div>
</template>
