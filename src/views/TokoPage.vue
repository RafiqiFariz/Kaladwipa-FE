<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <ExploreContainer name="Tab 3 page" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
