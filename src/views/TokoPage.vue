<template>
  <ion-page>
    <ion-content :fullscreen="false">
      <div class="p-8">
        <div class="flex flex-auto gap-4">
          <SelectBox :isActive="true" name="Produk Digital" :img="image" />
          <SelectBox :isActive="false" name="Produk Fisik" :img="image" />
        </div>
        <div class="flex flex-auto gap-4 py-4">
          <SelectBox :isActive="false" name="Lukisan" :img="image" />
          <SelectBox :isActive="true" name="Kerajinan Tangan" :img="image" />
          <SelectBox :isActive="false" name="Tutorial" :img="image" />
          <SelectBox :isActive="false" name="Aset Game" :img="image" />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import image from '../../resources/throne room.png'
import SelectBox from '@/components/common/SelectBox.vue';
</script>
