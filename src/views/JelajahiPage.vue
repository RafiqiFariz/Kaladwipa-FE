<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <ExploreContainer name="Tab 2 page" />
    </ion-content>
  </ion-page>
</template>

<script setup>
import { onMounted } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
onMounted(() => {
  console.log('Page called');
});
</script>
