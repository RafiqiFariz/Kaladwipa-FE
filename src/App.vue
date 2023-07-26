<script setup>
import {IonApp, IonRouterOutlet, IonContent} from "@ionic/vue";
import {Toast} from "flowbite-vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import {useToastStore} from "@/stores/toast.js";
import {storeToRefs} from "pinia";

const toastStore = useToastStore();
const {isVisible, type, message} = storeToRefs(toastStore);
</script>
<template>
  <ion-app>
    <TheHeader v-if="!$route.meta.hideNavbar"/>
    <ion-content>
      <ion-router-outlet/>
    </ion-content>
    <Toast :type="type"
           class="absolute top-5 right-5 z-50 shadow-lg"
           :class="{
              'animate-ease-out animate-faster animate-slideInRight': isVisible,
              'animate-fadeOutRight': !isVisible
           }"
           closable
    >
      {{ message }}
    </Toast>
  </ion-app>
</template>
