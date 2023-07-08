<template>
    <IonPage>
        <Header />
        <router-view />
    </IonPage>
</template>
<script setup>
import { IonPage } from '@ionic/vue';
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue';
</script>
  