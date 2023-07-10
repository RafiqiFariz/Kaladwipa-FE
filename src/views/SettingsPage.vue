<template>
  <ion-page>
    <ion-content>
      <div class="p-8 w-full h-full bg-neutral-100">
        <settings-navbar></settings-navbar>
        <div class="sm:ml-64">
          <router-view></router-view>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage } from "@ionic/vue";
import SettingsNavbar from "@/components/layouts/SettingsNavbar.vue";
export default {
  components: {
    IonContent,
    IonPage,
    SettingsNavbar,
  },
};
</script>
