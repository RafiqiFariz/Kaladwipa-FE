<script setup>
import {IonPage, IonContent} from '@ionic/vue';
import ArticleCard from "@/components/article/ArticleCard.vue";
import SkeletonCard from "@/components/commons/SkeletonCard.vue";
</script>
<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="m-0 h-full w-full p-4 md:p-6 space-y-4 md:m-auto md:px-48">
        <h3 class="text-3xl font-bold dark:text-white text-center m-0">Artikel</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 pb-6">
          <Suspense>
            <template #default>
              <ArticleCard/>
            </template>
            <template #fallback>
              <SkeletonCard v-for="(index) in 6" :key="index"/>
            </template>
          </Suspense>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>