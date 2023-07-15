<template>
  <ion-page>
    <ion-content class="ion-content-fullscreen">
      <div class="md:p-6 p-4 w-full bg-neutral-100">
        <settings-sidebar />
        <div class="md:ml-64 md:pl-4 ml-0 bg-neutral-100">
          <router-view></router-view>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>


<script>
import { IonContent, IonPage } from "@ionic/vue";
import SettingsSidebar from "@/components/layouts/SettingsSidebar.vue";
export default {
  components: {
    IonContent,
    IonPage,
    SettingsSidebar,
  },
};
</script>
