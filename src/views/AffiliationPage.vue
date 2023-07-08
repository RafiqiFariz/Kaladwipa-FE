<template>
  <ionPage>
    <ion-content :fullscreen="false">
      <ExploreContainer name="Tab 4 page" />
    </ion-content>
  </ionPage>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>
