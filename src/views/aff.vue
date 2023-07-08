<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Tab 1</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="false">
    <ion-header collapse="condense">
      <ion-toolbar>
        <ion-title size="large">Tab 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ExploreContainer name="Tab 3 page" />
  </ion-content>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
