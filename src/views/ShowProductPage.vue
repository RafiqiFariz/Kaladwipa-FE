<script setup>
import Carousel from '@/components/commons/Carousel.vue';
import {computed, onMounted, reactive, ref} from "vue";
import ReportModal from "@/components/gallery/ReportModal.vue";
import ShareModal from "@/components/gallery/ShareModal.vue";
import {useArtworkStore} from "@/stores/artwork.js";
import {useRoute} from 'vue-router';
import {storeToRefs} from "pinia";
import moment from 'moment';
import _ from 'lodash';

const route = useRoute();
const isShowReportModal = ref(false);
const isShowShareModal = ref(false);

const comments = [
  {
    name: "Bintang Siregar",
    expertise: "Digital Artist",
    date: "2023-06-30",
    comment: "Bagus sekali karyamu, aku sangat menyukainya",
    replies: [
      {
        name: "Rian Arimawan",
        expertise: "Illustrator • Character Designer",
        date: "2023-06-29",
        comment: "Terima kasih banyak!"
      },
      {
        name: "Pandu Utomo",
        expertise: "Blender Expertise",
        date: "2023-06-29",
        comment: "Iya benar, aku setuju dengan pendapatmu."
      },
    ]
  },
  {
    name: "A. Nizhan Haikal",
    expertise: "Digital Artist",
    date: "2023-06-29",
    comment: "Wow, keren banget!",
    replies: [
      {
        name: "Bintang Siregar",
        expertise: "Digital Artist",
        date: "2023-06-30",
        comment: "iya benar sekali!"
      },
      {
        name: "Amicia",
        expertise: "Artist",
        date: "2023-06-30",
        comment: "yes that's right!"
      },
    ]
  },
  // Tambahkan komentar lainnya sesuai kebutuhan
];

const maxVisibleComments = 1;
let isOpen = false;
let isRepliesOpen = false;
const visibleComments = ref(maxVisibleComments);
const totalComments = comments.length;
const totalReplies = _.sumBy(comments, (comment) => comment.replies.length);
const isShowActionDropdown = ref(false);
const visibleActionsComment = reactive(Array(totalComments).fill(false));
const visibleActionsReply = reactive(Array(totalReplies).fill(false));

const resetVisibleActions = () => {
  _.fill(visibleActionsComment, false);
  _.fill(visibleActionsReply, false);
};

const showMoreComments = () => {
  isOpen = !isOpen;
  if (isOpen && (visibleComments.value < totalComments)) {
    visibleComments.value = totalComments;
  } else {
    visibleComments.value = maxVisibleComments;
  }

  if (!isOpen) {
    resetVisibleActions();
  }
};

const visibleReplies = reactive(Array(totalComments).fill(0));
const showMoreReplies = (index) => {
  isRepliesOpen = !isRepliesOpen;
  if (isRepliesOpen && (visibleReplies[index] < comments[index].replies.length)) {
    visibleReplies[index] = comments[index].replies.length;
  } else {
    visibleReplies[index] = 0;
  }

  if (!isRepliesOpen) {
    resetVisibleActions();
  }
};

const toggleActionDropdown = (index, subIndex) => {
  // Jika hanya diberikan indeks komentar
  if (typeof subIndex === 'undefined') {
    // Mengubah status toggle dari false menjadi true dan sebaliknya
    visibleActionsComment[index] = !visibleActionsComment[index];
    return;
  }

  // Mengubah status toggle dari false menjadi true dan sebaliknya
  visibleActionsReply[subIndex] = !visibleActionsReply[subIndex];
}

const artworkImageUrl = (item) => {
  let modifiedUrl = item.imageName?.replace('public/', 'storage/');
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const finalUrl = `${baseUrl}/${modifiedUrl}`;

  // bentuk objek ini mengikuti aturan dari carousel flowbite-vue
  return {src: finalUrl, alt: item.id};
};

const exploreStore = useArtworkStore();
const {artwork} = storeToRefs(exploreStore);
const pictures = ref([]);

onMounted(async () => {
  await exploreStore.showArtwork(route.params.id);
  pictures.value = _.map(artwork.value.images, artworkImageUrl);
});

const postedTime = computed((date) => {
  const now = moment();
  const post = moment(date);

  const diffInDays = now.diff(post, 'days');

  if (diffInDays === 0) {
    return 'Diposting hari ini';
  } else if (diffInDays === 1) {
    return 'Diposting kemarin';
  } else {
    return `Diposting ${diffInDays} hari yang lalu`;
  }
});

const profilePictureUrl = computed(() => {
  return artwork?.user?.profilePictureUrl ?? 'https://via.placeholder.com/48x48';
})
</script>

<template>
  <div class="relative w-full bg-neutral-100 p-4 md:p-6">
    <div
        class="mb-5 block h-full w-full items-center justify-start gap-5 rounded-lg border border-gray-200 bg-white shadow md:inline-flex">

      <Carousel class="relative md:w-2/3" :pictures="pictures"/>
      <div
          class="inline-flex w-full flex-col items-start justify-between self-stretch p-5 md:w-1/3 md:py-5 md:pr-5 md:pl-0">
        <div class="flex h-full flex-col items-start justify-start self-stretch gap-3.5">
          <div class="inline-flex items-start justify-start gap-3">
            <img class="relative h-12 w-12 rounded-full" :src="profilePictureUrl" :alt="artwork?.user?.name"/>
            <div class="inline-flex flex-col items-start justify-center gap-1">
              <div class="text-base font-medium leading-normal text-zinc-800">
                {{ artwork?.user?.name }}
              </div>
              <div class="text-xs font-normal leading-none text-neutral-400">
                {{ artwork?.user?.professionalTitle }}
              </div>
            </div>
          </div>
          <div class="flex h-full flex-col items-start justify-start gap-2 self-stretch">
            <div class="self-stretch text-2xl font-bold leading-loose text-gray-900">
              {{ _.startCase(artwork.title) }}
            </div>
            <div class="self-stretch text-base font-normal leading-normal text-gray-500">
              {{ artwork.description }}
            </div>
            <div class="self-stretch text-xs font-medium leading-none text-gray-700">
              {{ postedTime }}
            </div>
          </div>
          <div class="mt-4 grid grid-cols-1 items-start justify-start gap-2 self-stretch md:grid-cols-3">
            <button
                class="flex shrink grow basis-0 items-center justify-center gap-2 rounded-lg bg-red-700 px-5 py-3 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300">
              <svg class="h-4 w-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor" viewBox="0 0 18 18">
                <path
                    d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
              </svg>
              <span class="text-sm font-medium leading-tight text-white">Suka</span>
            </button>
            <button
                class="flex shrink grow basis-0 items-center justify-center gap-2 rounded-lg bg-gray-200 px-5 py-3 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200">
              <svg class="h-4 w-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor" viewBox="0 0 14 20">
                <path
                    d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"/>
              </svg>
              <span class="text-sm font-medium leading-tight text-black">Simpan</span>
            </button>
            <button
                class="flex shrink grow basis-0 items-center justify-center gap-2 rounded-lg bg-gray-200 px-5 py-3 hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200"
                @click="isShowShareModal = true"
            >
              <svg class="h-4 w-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor" viewBox="0 0 18 18">
                <path
                    d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z"/>
              </svg>
              <span class="text-sm font-medium leading-tight text-black">Bagikan</span>
            </button>
          </div>
        </div>
        <div
            class="mt-5 grid grid-cols-4 items-center justify-between gap-8 self-stretch md:grid-cols-2 lg:grid-cols-4">
          <div class="flex shrink grow basis-0 items-center justify-start gap-3">
            <svg class="h-4 w-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 18 18">
              <path
                  d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
            </svg>
            <div class="text-base font-normal leading-tight text-black">
              1k
            </div>
          </div>
          <div class="flex shrink grow basis-0 items-center justify-start gap-3">
            <svg class="text-gray-800 dark:text-white md:h-4 md:w-4" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 20 14">
              <path
                  d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
            </svg>
            <div class="text-base font-normal leading-tight text-black">2,1k</div>
          </div>
          <div class="flex shrink grow basis-0 items-center justify-start gap-3">
            <svg class="h-4 w-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 18 18">
              <path
                  d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z"/>
            </svg>
            <div class="text-base font-normal leading-tight text-black">100</div>
          </div>
          <div class="flex shrink grow basis-0 items-center justify-start gap-3">
            <svg class="h-4 w-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 20 18">
              <path
                  d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
            </svg>
            <div class="text-base font-normal leading-tight text-black">50</div>
          </div>
        </div>
      </div>
    </div>
    <!--  Bagian komentar dan Tag  -->
    <div class="block gap-5 space-y-5 md:space-y-0 md:flex">
      <div
          class="inline-flex h-full w-full flex-col items-start justify-start rounded-lg border border-gray-200 bg-white p-6 shadow md:w-2/3">
        <div class="flex flex-col items-start justify-start gap-4 self-stretch">
          <!-- Awal Input Komentar -->
          <form class="w-full">
            <label for="chat" class="sr-only">Tinggalkan komentar...</label>
            <div class="flex items-center rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700">
              <button type="button"
                      class="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
                </svg>
                <span class="sr-only">Add emoji</span>
              </button>
              <textarea id="chat" rows="1"
                        class="mx-4 block w-full rounded-lg border border-gray-300 bg-white text-sm text-gray-900 p-2.5 focus:border-red-500 focus:ring-red-500 dark:placeholder-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="Tinggalkan pesan..."></textarea>
              <button type="submit"
                      class="inline-flex cursor-pointer justify-center rounded-full p-2 text-red-600 hover:bg-red-100 dark:text-blue-500 dark:hover:bg-gray-600">
                <svg class="h-5 w-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     viewBox="0 0 18 20">
                  <path
                      d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                </svg>
                <span class="sr-only">Kirim pesan</span>
              </button>
            </div>
          </form>
          <!-- Akhir Input Komentar -->

          <!-- Awal Komentar -->
          <div class="max-w-full self-stretch">
            <div v-for="(comment, index) in comments.slice(0, visibleComments)" :key="index">
              <div class="mb-4 inline-flex w-full items-start justify-start gap-2.5">
                <img class="relative h-8 w-8 rounded-full" src="https://via.placeholder.com/32x32" alt=""/>
                <div class="relative flex max-w-sm shrink grow basis-0 items-center justify-start gap-1.5">
                  <div class="grid grid-cols-1">
                    <div
                        class="inline-flex flex-col items-start rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-gray-100 p-4 gap-2.5"
                    >
                      <div class="flex flex-col items-start justify-start gap-1.5">
                        <div class="text-sm font-semibold leading-tight text-gray-900">{{ comment.name }}</div>
                        <div class="text-xs font-medium leading-none text-gray-500">{{ comment.expertise }}</div>
                      </div>
                      <div class="text-sm font-normal leading-normal text-gray-900">{{ comment.comment }}</div>
                      <div class="inline-flex items-center justify-start gap-2.5">
                        <div class="text-xs font-normal leading-tight text-gray-500">2 Suka</div>
                        <div class="text-xs font-normal leading-tight text-gray-500">Balas</div>
                        <div class="text-xs font-normal leading-tight text-gray-500">• 1mg</div>
                      </div>
                    </div>
                    <button
                        v-if="(visibleReplies[index] < comment.replies.length)"
                        class="mt-2 cursor-pointer text-left text-sm font-medium leading-normal text-gray-900 underline"
                        @click="showMoreReplies(index)"
                    >
                      Tampilkan lebih banyak balasan
                    </button>
                    <button
                        v-if="(visibleReplies[index] === comment.replies.length) && isRepliesOpen"
                        class="mt-2 cursor-pointer text-left text-sm font-medium leading-normal text-gray-900 underline"
                        @click="showMoreReplies(index)"
                    >
                      Tutup balasan
                    </button>
                  </div>

                  <div class="relative">
                    <!-- Awal Tombol Aksi -->
                    <button type="button"
                            :id="`dropdown-${index}-btn`"
                            class="relative h-4 w-4"
                            @click="toggleActionDropdown(index)"
                    >
                      <svg
                          class="h-full w-full text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 4 15"
                      >
                        <path
                            d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                        />
                      </svg>
                    </button>
                    <!-- Akhir Tombol Aksi -->

                    <!-- Awal Dropdown Menu Aksi -->
                    <div :id="`dropdown-${index}`"
                         class="absolute z-10 w-44 rounded-lg bg-white shadow divide-y divide-gray-100 top-0 left-5 dark:bg-gray-700"
                         data-dropdown-placement="left-end"
                         v-show="visibleActionsComment[index]"
                    >
                      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                          <button
                              class="w-full px-4 py-2 text-left text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              @click="isShowReportModal = true;isShowActionDropdown = false;"
                          >
                            Laporkan
                          </button>
                        </li>
                        <li>
                          <button
                              class="w-full px-4 py-2 text-left text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Blokir pengguna
                          </button>
                        </li>
                      </ul>
                    </div>
                    <!-- Akhir Dropdown Menu Aksi -->
                  </div>
                </div>
              </div>

              <!-- Awal Sub Komentar / Balasan -->
              <div v-for="(subComment, subIndex) in comment.replies.slice(0, visibleReplies[index])"
                   :key="subIndex">
                <div class="mb-4 inline-flex items-start justify-start pl-10 gap-2.5 md:w-full">
                  <img class="relative h-8 w-8 rounded-full" src="https://via.placeholder.com/32x32" alt=""/>
                  <div class="flex max-w-sm shrink grow basis-0 items-center justify-start gap-1.5 relative">
                    <div
                        class="inline-flex flex-col items-start justify-center rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-gray-100 p-4 gap-2.5">
                      <div class="flex flex-col items-start justify-start gap-1.5">
                        <div class="text-sm font-semibold leading-tight text-gray-900">
                          {{ subComment.name }}
                        </div>
                        <div class="text-xs font-medium leading-none text-gray-500">
                          {{ subComment.expertise }}
                        </div>
                      </div>
                      <div class="text-sm font-normal leading-normal text-gray-900">
                        {{ subComment.comment }}
                      </div>
                      <div class="inline-flex items-center justify-start gap-2.5">
                        <div class="text-xs font-normal leading-tight text-gray-500">
                          2 Suka
                        </div>
                        <div class="text-xs font-normal leading-tight text-gray-500">Balas</div>
                        <div class="text-xs font-normal leading-tight text-gray-500">• 1mg</div>
                      </div>
                    </div>

                    <div class="relative">
                      <!-- Tombol Aksi Komentar Balasan -->
                      <button class="hidden h-4 w-4 md:block" @click="toggleActionDropdown(index, subIndex)">
                        <svg class="h-full w-full text-gray-800 dark:text-white" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                          <path
                              d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                        </svg>
                      </button>

                      <!-- Dropdown Menu Aksi Balasan -->
                      <div :id="`dropdown-${index}-${subIndex}`"
                           class="absolute z-10 w-44 rounded-lg bg-white shadow divide-y divide-gray-100 top-0 left-5 dark:bg-gray-700"
                           data-dropdown-placement="left-end"
                           v-show="visibleActionsReply[subIndex]"
                      >
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDefaultButton">
                          <li>
                            <button
                                class="w-full px-4 py-2 text-left text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                @click="isShowReportModal = true;isShowActionDropdown = false;"
                            >
                              Laporkan
                            </button>
                          </li>
                          <li>
                            <button
                                class="w-full px-4 py-2 text-left text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                              Blokir pengguna
                            </button>
                          </li>
                        </ul>
                      </div>
                      <!-- Akhir Dropdown Menu Aksi Balasan -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- Akhir Sub Komentar / Balasan -->
            </div>
          </div>
          <!-- Akhir Komentar -->

          <div class="inline-flex items-center justify-center gap-2.5">
            <!-- Menampilkan tombol "Tampilkan lebih banyak komentar" jika tidak semua komentar ditampilkan -->
            <button
                v-if="visibleComments < totalComments && !isOpen"
                class="cursor-pointer text-base font-medium leading-normal text-gray-900 underline"
                @click="showMoreComments"
            >
              Tampilkan lebih banyak
            </button>
            <!-- Menampilkan tombol "Tutup komentar" jika semua komentar ditampilkan -->
            <button
                v-else-if="visibleComments === totalComments && isOpen"
                class="cursor-pointer text-base font-medium leading-normal text-gray-900 underline"
                @click="showMoreComments"
            >
              Tutup komentar
            </button>
          </div>
        </div>
      </div>

      <!-- Bagian Tag Karya -->
      <div class="w-full md:w-1/3">
        <div
            class="inline-flex w-full flex-wrap items-start gap-y-2 rounded-lg border border-gray-200 bg-white p-4 shadow">
          <span
              v-for="(item, index) in artwork.tags"
              class="mr-2 rounded bg-red-100 text-xs font-medium text-red-800 px-2.5 py-0.5 dark:bg-red-900 dark:text-red-300"
              :key="index"
          >
            #{{ item.name }}
          </span>
        </div>
      </div>
    </div>
    <ReportModal
        :is-show-modal="isShowReportModal"
        @close="isShowReportModal = isShowActionDropdown = false"
    />
    <ShareModal
        :is-show-modal="isShowShareModal"
        @close="isShowShareModal = false"
    />
  </div>
</template>