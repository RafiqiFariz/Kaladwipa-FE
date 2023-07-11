<template>
    <ion-page>
        <ion-content :fullscreen="false">
            <DetailGalleryPage />
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import image from '../../resources/throne_room.png'
import DetailGalleryPage from '@/components/common/DetailContent.vue';
</script>