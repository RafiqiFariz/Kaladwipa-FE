<template>
  <ion-page>
    <ion-content>
      <div class="bg-neutral-100">
        <router-view></router-view>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonContent,
  },
};
</script>
