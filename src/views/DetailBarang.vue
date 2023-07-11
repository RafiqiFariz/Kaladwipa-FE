<template>
    <ion-page>
        <ion-content :fullscreen="false">
            <DetailProduk />
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import image from '../../resources/throne_room.png'
import DetailProduk from '@/components/common/DetailProduk.vue';
</script>