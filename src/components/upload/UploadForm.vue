<template>
  <upload-card>
    <h1 class="text-center font-bold mb-6">Upload {{ jenis }}</h1>
    <form @submit.prevent="submitForm">
      <div class="mb-6">
        <label
          for="judul"
          class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
          >Judul {{ jenis }}</label
        >
        <input
          type="text"
          id="judul"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Masukkan Judul"
          v-model="judul"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="upload"
          class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
          >Upload {{ jenis }}</label
        >
        <div
          class="flex justify-center rounded-lg shadow mb-6 border border-gray-100"
        >
          <button
            type="button"
            :class="{ 'bg-red-600 text-white': isActive === 'Gambar' }"
            class="rounded p-3 text-sm mx-2"
            @click="setActiveFormat('Gambar')"
          >
            Gambar
          </button>
          <button
            type="button"
            :class="{ 'bg-red-600 text-white': isActive === 'Video' }"
            class="rounded p-3 text-sm text-neutral-600 mx-2"
            @click="setActiveFormat('Video')"
          >
            Klip Video
          </button>
          <button
            type="button"
            :class="{ 'bg-red-600 text-white': isActive === 'Link' }"
            class="rounded p-3 text-sm text-neutral-600 mx-2"
            @click="setActiveFormat('Link')"
          >
            Tautan Video
          </button>
        </div>
        <div
          class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 bg-gray-100 mb-6"
          v-if="isActive === 'Gambar' || isActive === 'Video'"
        >
          <div class="flex flex-col items-center justify-center">
            <svg
              width="34"
              height="35"
              viewBox="0 0 34 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="mb-2"
            >
              <path
                d="M24.8452 8.17276L18.1785 1.33543C18.0237 1.17625 17.8398 1.04995 17.6373 0.963781C17.4348 0.877608 17.2177 0.833252 16.9985 0.833252C16.7793 0.833252 16.5622 0.877608 16.3597 0.963781C16.1572 1.04995 15.9733 1.17625 15.8185 1.33543L9.15183 8.17276C8.83932 8.49373 8.66392 8.92887 8.66424 9.38247C8.66455 9.83607 8.84054 10.271 9.1535 10.5915C9.46645 10.912 9.89074 11.0919 10.333 11.0915C10.7753 11.0912 11.1993 10.9107 11.5118 10.5898L15.3335 6.67026V21.3466C15.3335 21.7999 15.5091 22.2347 15.8217 22.5553C16.1342 22.8758 16.5581 23.0559 17.0002 23.0559C17.4422 23.0559 17.8661 22.8758 18.1787 22.5553C18.4912 22.2347 18.6668 21.7999 18.6668 21.3466V6.67026L22.4885 10.5898C22.8028 10.9011 23.2238 11.0734 23.6608 11.0695C24.0978 11.0656 24.5158 10.8859 24.8249 10.5689C25.1339 10.252 25.3092 9.82329 25.313 9.37511C25.3168 8.92693 25.1488 8.49515 24.8452 8.17276Z"
                fill="#9CA3AF"
              />
              <path
                d="M30.3335 20.4919H22.0002V21.3466C22.0002 22.7066 21.4734 24.0109 20.5357 24.9726C19.598 25.9343 18.3262 26.4746 17.0002 26.4746C15.6741 26.4746 14.4023 25.9343 13.4646 24.9726C12.5269 24.0109 12.0002 22.7066 12.0002 21.3466V20.4919H3.66683C2.78277 20.4919 1.93493 20.8521 1.30981 21.4932C0.684685 22.1344 0.333496 23.0039 0.333496 23.9106V30.7479C0.333496 31.6546 0.684685 32.5242 1.30981 33.1653C1.93493 33.8064 2.78277 34.1666 3.66683 34.1666H30.3335C31.2176 34.1666 32.0654 33.8064 32.6905 33.1653C33.3156 32.5242 33.6668 31.6546 33.6668 30.7479V23.9106C33.6668 23.0039 33.3156 22.1344 32.6905 21.4932C32.0654 20.8521 31.2176 20.4919 30.3335 20.4919ZM26.1668 30.7479C25.6724 30.7479 25.189 30.5975 24.7779 30.3158C24.3668 30.0341 24.0464 29.6336 23.8571 29.1651C23.6679 28.6966 23.6184 28.1811 23.7149 27.6837C23.8113 27.1863 24.0494 26.7295 24.3991 26.3709C24.7487 26.0123 25.1942 25.7681 25.6791 25.6692C26.1641 25.5703 26.6667 25.621 27.1235 25.8151C27.5804 26.0092 27.9708 26.3378 28.2455 26.7594C28.5202 27.1811 28.6668 27.6768 28.6668 28.1839C28.6668 28.8639 28.4034 29.5161 27.9346 29.9969C27.4658 30.4778 26.8299 30.7479 26.1668 30.7479Z"
                fill="#9CA3AF"
              />
            </svg>
            <p class="text-sm text-neutral-400">Klik untuk mengupload file</p>
            <p class="text-sm font-bold text-neutral-400">
              Maks. Ukuran File: 30MB
            </p>
            <button
              type="button"
              class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5 mt-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              @click="triggerFileInput"
            >
              <svg
                class="w-3 h-3 text-white dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              Cari File
            </button>
            <p v-if="this.file" class="text-sm text-neutral-400 p-2">
              Uploaded File: {{ this.file.name }}
            </p>
            <input
              ref="fileInput"
              type="file"
              class="hidden"
              @change="handleFileUpload"
            />
          </div>
        </div>
        <div v-if="isActive === 'Link'" class="mb-6">
          <label
            for="link"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Link Video</label
          >
          <input
            type="text"
            id="link"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Masukkan Link Video"
            v-model="file"
          />
        </div>
        <div class="mb-6">
          <label
            for="message"
            class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >Tentang {{ jenis }}</label
          >
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Masukkan deskripsi..."
            v-model="deskripsi"
          ></textarea>
        </div>
        <div class="mb-6">
          <label
            for="kategori"
            class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >Kategori {{ jenis }}</label
          >
          <div class="relative hidden">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-red-700 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="kategori"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Pilih Kategori"
            />
          </div>
          <div class="p-2 shadow-lg border border-neutral-100 rounded-lg mt-1">
            <fieldset>
              <legend class="sr-only">Checkbox variants</legend>
              <div class="flex items-center p-2">
                <input
                  id="kategori-1"
                  type="checkbox"
                  value="1"
                  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  v-model="kategori"
                />
                <label
                  for="kategori-1"
                  class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                  >Tradisional</label
                >
              </div>
              <legend class="sr-only">Checkbox variants</legend>
              <div class="flex items-center p-2">
                <input
                  id="kategori-2"
                  type="checkbox"
                  value="2"
                  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  v-model="kategori"
                />
                <label
                  for="kategori-2"
                  class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                  >Tradisional Modern</label
                >
              </div>
              <legend class="sr-only">Checkbox variants</legend>
              <div class="flex items-center p-2">
                <input
                  id="kategori-3"
                  type="checkbox"
                  value="3"
                  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  v-model="kategori"
                />
                <label
                  for="kategori-3"
                  class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                  >Sketsa Karakter Tradisional</label
                >
              </div>
            </fieldset>
          </div>
        </div>
        <div class="mb-6">
          <label
            for="software"
            class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >Perangkat Lunak Yang Digunakan</label
          >
          <div class="relative hidden">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-red-700 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="software"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Pilih Software"
            />
          </div>
          <div class="p-2 shadow-lg border border-neutral-100 rounded-lg mt-1">
            <fieldset>
              <legend class="sr-only">Checkbox variants</legend>
              <div class="flex items-center p-2">
                <input
                  id="software-1"
                  type="checkbox"
                  value="1"
                  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  v-model="software"
                />
                <label
                  for="software-1"
                  class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                  >Blender</label
                >
              </div>
              <legend class="sr-only">Checkbox variants</legend>
              <div class="flex items-center p-2">
                <input
                  id="software-2"
                  type="checkbox"
                  value="2"
                  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  v-model="software"
                />
                <label
                  for="software-2"
                  class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                  >Maya</label
                >
              </div>
              <legend class="sr-only">Checkbox variants</legend>
              <div class="flex items-center p-2">
                <input
                  id="software-3"
                  type="checkbox"
                  value="3"
                  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  v-model="software"
                />
                <label
                  for="software-3"
                  class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                  >3DS Max</label
                >
              </div>
            </fieldset>
          </div>
        </div>
        <div class="mb-6">
          <label
            for="tag"
            class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >Tag</label
          >
          <div class="p-2 shadow-lg border border-neutral-100 rounded-lg mt-1">
            <fieldset>
              <legend class="sr-only">Checkbox variants</legend>
              <div class="flex items-center p-2">
                <input
                  id="tags-1"
                  type="checkbox"
                  value="1"
                  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  v-model="tags"
                />
                <label
                  for="software-1"
                  class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                  >Seni Digital</label
                >
              </div>
              <legend class="sr-only">Checkbox variants</legend>
              <div class="flex items-center p-2">
                <input
                  id="tags-2"
                  type="checkbox"
                  value="2"
                  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  v-model="tags"
                />
                <label
                  for="software-2"
                  class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                  >Seni Lukis</label
                >
              </div>
              <legend class="sr-only">Checkbox variants</legend>
              <div class="flex items-center p-2">
                <input
                  id="tags-3"
                  type="checkbox"
                  value="5"
                  class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  v-model="tags"
                />
                <label
                  for="software-3"
                  class="ml-2 text-sm font-bold text-gray-900 dark:text-gray-300"
                  >Seni Ilustrasi</label
                >
              </div>
            </fieldset>
          </div>
          <div class="relative hidden">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-red-700 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="tag"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
              placeholder="Masukkan Tag"
              v-model="tagText"
              @input="updateArray"
            />
          </div>
        </div>
        <div class="mb-6">
          <label
            for="judul"
            class="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >Opsi Penerbitan</label
          >
          <input
            type="text"
            id="judul"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Masukkan opsi penerbitan"
          />
        </div>
        <div class="mb-6">
          <button
            type="submit"
            class="rounded p-3 bg-red-700 text-white w-full items-center"
          >
            Publikasikan
          </button>
        </div>
      </div>
    </form>
  </upload-card>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import UploadCard from "@/components/layouts/UploadCard.vue";
import axios from "axios";
import { useAuthStore } from "@/stores/auth.js";

export default {
  props: ["jenis"],
  components: {
    IonPage,
    IonContent,
    UploadCard,
  },
  data() {
    return {
      isActive: "Gambar",
      file: false,
      files: [],
      judul: null,
      deskripsi: null,
      kategori: [],
      software: [],
      tags: [],
    };
  },
  methods: {
    setActiveFormat(format) {
      this.isActive = format;
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      this.file = event.target.files[0];
    },
    async submitForm() {
      const authStore = useAuthStore();
      this.files.push(this.file);
      try {
        await axios.post(
          "/api/v1/artworks",
          {
            user_id: authStore.user.id,
            title: this.judul,
            software_used: this.software,
            tags: this.tags,
            description: this.deskripsi,
            images: this.files,
            categories: this.kategori,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        await this.$router.push({ name: "home" });
        alert("Upload Karya berhasil!");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
