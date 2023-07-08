<template>
    <ion-header>
      <ion-toolbar>
        <ion-title>Kaladwipa</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="false">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Jelajahi</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Ini card pakai flowbite -->
      <div
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 m-2.5">
        <h5 class="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">Noteworthy technology
          acquisitions 2021</h5>
        <p class="font-normal text-gray-500 dark:text-gray-400 text-sm">Here are the biggest enterprise technology
          acquisitions of 2021 so far, in reverse chronological order.</p>
      </div>

      <!-- Ini card pakai Ionic -->
      <ion-card>
        <ion-card-header>
          <ion-card-title>Card Title</ion-card-title>
          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Here's a small text description for the card content. Nothing more, nothing less.
        </ion-card-content>
      </ion-card>
    </ion-content>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
