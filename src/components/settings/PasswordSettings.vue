<script setup>
import {useAuthStore} from "@/stores/auth.js";
import {onMounted, ref} from "vue";
import {useSettingsStore} from "@/stores/settings.js";
import InputError from "@/components/commons/InputError.vue";
import {storeToRefs} from "pinia";

const {user} = useAuthStore();
const settingsStore = useSettingsStore();
const {errors} = storeToRefs(settingsStore);

const form = ref({
  current_password: '',
  password: '',
  password_confirmation: '',
});

onMounted(() => {
  settingsStore.$reset();
});
</script>
<template>
  <div class="md:p-4 p-2 bg-white rounded items-center mb-4">
    <h1 class="text-black m-0 md:text-4xl text-2xl font-medium leading-10 text-center">
      Ubah Password
    </h1>
  </div>
  <div class="md:p-5 p-4 bg-white rounded items-center">
    <form @submit.prevent="settingsStore.updatePassword(form)">
      <div class="mb-6">
        <label
            for="current-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password Saat Ini <span class="text-red-600">*</span>
        </label>
        <input
            type="password"
            id="current-password"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            v-model="form.current_password"
        />
        <InputError :errors="errors.current_password"/>
      </div>
      <div class="mb-6">
        <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password Baru <span class="text-red-600">*</span>
        </label>
        <input
            type="password"
            id="password"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            v-model="form.password"
        />
        <InputError :errors="errors.password"/>
      </div>
      <div class="mb-6">
        <label
            for="password-confirmation"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Ulangi Password Baru <span class="text-red-600">*</span>
        </label>
        <input
            type="password"
            id="password-confirmation"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500 dark:shadow-sm-light"
            v-model="form.password_confirmation"
        />
        <InputError :errors="errors.password_confirmation"/>
      </div>
      <button
          type="submit"
          class="justify-center mt-10 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 md:w-auto w-full"
      >
        Simpan
      </button>
    </form>
  </div>
</template>
