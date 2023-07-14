<template>
    <ion-page>
        <ion-content :fullscreen="false">
            <DetailGallery />
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import DetailGallery from '@/components/commons/DetailGallery.vue';
</script>