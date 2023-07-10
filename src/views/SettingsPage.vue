<template>
  <ion-page>
    <ion-content>
      <div class="p-8 w-full h-full bg-neutral-100">
        <settings-sidebar></settings-sidebar>
        <div class="sm:ml-64">
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
