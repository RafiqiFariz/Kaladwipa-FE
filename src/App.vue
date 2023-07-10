<template>
  <ion-app>
    <ion-header v-if="!$route.meta.hideNavbar">
      <TheHeader />
    </ion-header>
    <ion-content>
      <ion-router-outlet />
    </ion-content>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, IonContent, IonHeader } from "@ionic/vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: {
    TheHeader,
    IonApp,
    IonRouterOutlet,
    IonContent,
    IonHeader,
  },
};
</script>
