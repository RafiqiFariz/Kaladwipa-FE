<template>
    <ion-page>
        <ion-content :fullscreen="false">
            <DetailProduk />
        </ion-content>
    </ion-page>
</template>

<script setup>
import { IonPage, IonContent } from '@ionic/vue';
import DetailProduk from '@/components/commons/DetailProduct.vue';
</script>