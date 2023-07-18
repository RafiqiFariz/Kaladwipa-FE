<script setup>
import {Modal} from 'flowbite-vue';

const props = defineProps(['isShowModal']);
const emit = defineEmits(['close']);
</script>
<template>
  <Modal size="2xl" v-if="isShowModal" class="max-w-lg overflow-y-auto" @close="emit('close')">
    <template #header>
      <div class="flex items-center text-xl font-semibold">
        Laporkan Penyalahgunaan
      </div>
    </template>
    <template #body>

      <form>
        <div class="mb-4">
          <label for="reportType" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tipe Laporan
          </label>

          <fieldset>
            <legend class="sr-only">Tipe Laporan</legend>
            <div class="flex items-center mb-4">
              <input id="spam" type="radio" name="report_types" value="spam"
                     class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                     checked>
              <label for="spam" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Spam
              </label>
            </div>

            <div class="flex items-center mb-4">
              <input id="inappropriate" type="radio" name="report_types" value="inappropriate"
                     class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600">
              <label for="inappropriate" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Tidak Pantas
              </label>
            </div>

            <div class="flex items-center mb-4">
              <input id="copyrightInfringement" type="radio" name="report_types" value="copyright_infringement"
                     class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600">
              <label for="copyrightInfringement"
                     class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Pelanggaran Hak Cipta
              </label>
            </div>
          </fieldset>
        </div>

        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi masalah</label>
        <textarea id="description"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tolong deskripsikan masalahnya..."></textarea>
      </form>
    </template>
    <template #footer>
      <button type="submit"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        Kirim
      </button>
      <button type="button"
              class="text-gray-900 bg-white border border-solid border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              @click="emit('close')"
      >
        Batal
      </button>
    </template>
  </Modal>
</template>