<script setup>
import {IonContent, IonPage} from "@ionic/vue";
import SettingsSidebar from "@/components/layouts/SettingsSidebar.vue";
</script>
<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="md:p-6 p-4 w-full bg-neutral-100 min-h-full">
        <SettingsSidebar/>
        <div class="md:ml-64 md:pl-4 ml-0">
          <router-view></router-view>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>