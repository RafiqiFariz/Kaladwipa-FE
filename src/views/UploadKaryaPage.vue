<template>
  <ion-page>
    <ion-content>
      <div class="md:p-8 p-4 w-full bg-neutral-100">
        <upload-form jenis="Karya"></upload-form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import UploadForm from "../components/upload/UploadForm.vue";
export default {
  components: {
    IonContent,
    IonPage,
    UploadForm,
  },
};
</script>
