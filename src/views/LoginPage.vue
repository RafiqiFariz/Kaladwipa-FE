<script setup>
import {IonPage, IonContent} from '@ionic/vue';
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth.js";

const authStore = useAuthStore();
const form = ref({
  email: null,
  password: null,
});

</script>
<template>
  <ion-page>
    <ion-content>
      <div class="flex justify-center items-center h-screen flex-col">
        <div
            class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
          <div class="flex justify-center">
            <router-link to="/"><img src="/resources/logo.png" alt="logo"/></router-link>
          </div>
          <h4 class="text-black flex justify-center">Masuk</h4>
          <form class="space-y-6" @submit.prevent="authStore.login(form)">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input type="email"
                     name="email"
                     id="email"
                     v-model="form.email"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                     placeholder="name@company.com"
                     required
              >
            </div>
            <div>
              <label for="password"
                     class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password"
                     name="password"
                     id="password"
                     v-model="form.password"
                     placeholder="••••••••"
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                     required
              >
            </div>
            <button type="submit"
                    class="w-full text-white bg-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Masuk Sekarang
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Belum punya akun?
              <router-link to="/register">
                <a class="text-red-600 hover:underline dark:text-red-600">Daftar</a>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>