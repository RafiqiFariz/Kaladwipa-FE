<script setup>
import {onMounted, reactive, ref} from "vue";
import _ from "lodash";
import EmojiPicker from "@/components/commons/EmojiPicker.vue";
import ReportModal from "@/components/gallery/ReportModal.vue";
import ShareModal from "@/components/gallery/ShareModal.vue";

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
const visibleActions = reactive({});
const isShowReportModal = ref(false);
const visibleReplies = reactive(Array(totalComments).fill(0));

_.forEach(comments, (comment, commentIndex) => {
  _.set(visibleActions, [commentIndex], {isOpen: false, replies: Array(comment.replies.length).fill(false)});
});

const resetVisibleActions = () => {
  comments.forEach((_, commentIndex) => {
    visibleActions[commentIndex].isOpen = false;
    visibleActions[commentIndex].replies.fill(false);
  });
};

const showMoreComments = () => {
  isOpen = !isOpen;
  if (isOpen && (visibleComments.value < totalComments)) {
    visibleComments.value = totalComments;
  } else {
    visibleComments.value = maxVisibleComments;
    resetVisibleActions();
    visibleComments.value = maxVisibleComments; // Reset visibleComments
    visibleReplies.fill(0); // Reset visibleReplies
  }
};

const showMoreReplies = (commentIndex) => {
  isRepliesOpen = !isRepliesOpen;
  if (isRepliesOpen && (visibleReplies[commentIndex] < comments[commentIndex].replies.length)) {
    visibleReplies[commentIndex] = comments[commentIndex].replies.length;
  } else {
    visibleReplies[commentIndex] = 0;
    resetVisibleActions();
  }
};

const toggleActionDropdown = (commentIndex, replyIndex = null) => {
  // Jika hanya diberikan indeks komentar
  if (replyIndex === null) {
    visibleActions[commentIndex].isOpen = !visibleActions[commentIndex].isOpen;
  } else {
    visibleActions[commentIndex].replies[replyIndex] = !visibleActions[commentIndex].replies[replyIndex];
  }
}

const isOpenEmojiPicker = ref(false);
const selectedEmoji = ref('');
const chatText = ref('');
const emojiPickerRef = ref(null);
const openEmojiPicker = () => isOpenEmojiPicker.value = !isOpenEmojiPicker.value;

// Mendengarkan event 'emoji_click' dari EmojiPicker
const handleEmojiClick = (emoji) => {
  selectedEmoji.value = emoji;
  isOpenEmojiPicker.value = false;
  chatText.value = chatText.value + emoji;
};

onMounted(() => {
  document.addEventListener('click', handleDocumentClick);
});

// Handler saat event 'click' terjadi pada elemen 'document'
const handleDocumentClick = (event) => {
  const isEmojiPickerClicked = emojiPickerRef.value && emojiPickerRef.value.$el?.contains(event.target);
  const isOpenButtonClicked = event.target.closest('.open-emoji-button'); // Ganti dengan kelas tombol openEmojiPicker
  if (!isEmojiPickerClicked && !isOpenButtonClicked) {
    isOpenEmojiPicker.value = false;
  }
};
</script>
<template>
  <div
      class="inline-flex h-full w-full flex-col items-start justify-start rounded-lg border border-gray-200 bg-white p-6 shadow md:w-2/3">
    <div class="flex flex-col items-start justify-start gap-4 self-stretch">
      <!-- Awal Input Komentar -->
      <form class="w-full relative">
        <label for="chat" class="sr-only">Tinggalkan komentar...</label>
        <div class="flex items-center rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700">
          <button type="button"
                  class="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white open-emoji-button"
                  @click="openEmojiPicker"
          >
            <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
            </svg>
            <span class="sr-only">Add emoji</span>
          </button>
          <EmojiPicker class="absolute bottom-[4rem] left-0 z-50" :show_arrow="true" @emoji_click="handleEmojiClick"
                       v-if="isOpenEmojiPicker" ref="emojiPickerRef"/>
          <textarea id="chat" rows="1"
                    class="mx-4 block w-full rounded-lg border border-gray-300 bg-white text-sm text-gray-900 p-2.5 focus:border-red-500 focus:ring-red-500 dark:placeholder-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    v-model="chatText"
                    placeholder="Tinggalkan pesan...">{{ selectedEmoji }}</textarea>
          <button type="submit"
                  class="inline-flex cursor-pointer justify-center rounded-full p-2 text-red-600 hover:bg-red-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg class="h-5 w-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor"
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
        <div v-for="(comment, commentIndex) in comments?.slice(0, visibleComments)" :key="commentIndex">
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
                    v-if="(visibleReplies[commentIndex] < comment.replies.length)"
                    class="mt-2 cursor-pointer text-left text-sm font-medium leading-normal text-gray-900 underline"
                    @click="showMoreReplies(commentIndex)"
                >
                  Tampilkan lebih banyak balasan
                </button>
                <button
                    v-if="(visibleReplies[commentIndex] === comment.replies.length) && isRepliesOpen"
                    class="mt-2 cursor-pointer text-left text-sm font-medium leading-normal text-gray-900 underline"
                    @click="showMoreReplies(commentIndex)"
                >
                  Tutup balasan
                </button>
              </div>

              <div class="relative">
                <!-- Awal Tombol Aksi -->
                <button type="button"
                        :id="`dropdown-${commentIndex}-btn`"
                        class="relative h-4 w-4"
                        @click="toggleActionDropdown(commentIndex)"
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
                <div :id="`dropdown-${commentIndex}`"
                     class="absolute top-0 left-5 z-10 w-44 rounded-lg bg-white shadow divide-y divide-gray-100 dark:bg-gray-700"
                     data-dropdown-placement="left-end"
                     v-show="visibleActions[commentIndex].isOpen"
                >
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton">
                    <li>
                      <button
                          class="w-full px-4 py-2 text-left text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          @click="isShowReportModal = true; isShowActionDropdown = false;"
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

          <!-- Awal Balasan -->
          <div v-for="(reply, replyIndex) in comment.replies.slice(0, visibleReplies[commentIndex])"
               :key="replyIndex">
            <div class="mb-4 inline-flex items-start justify-start pl-10 gap-2.5 md:w-full">
              <img class="relative h-8 w-8 rounded-full" src="https://via.placeholder.com/32x32" alt=""/>
              <div class="relative flex max-w-sm shrink grow basis-0 items-center justify-start gap-1.5">
                <div
                    class="inline-flex flex-col items-start justify-center rounded-tr-2xl rounded-br-2xl rounded-bl-2xl bg-gray-100 p-4 gap-2.5">
                  <div class="flex flex-col items-start justify-start gap-1.5">
                    <div class="text-sm font-semibold leading-tight text-gray-900">
                      {{ reply.name }}
                    </div>
                    <div class="text-xs font-medium leading-none text-gray-500">
                      {{ reply.expertise }}
                    </div>
                  </div>
                  <div class="text-sm font-normal leading-normal text-gray-900">
                    {{ reply.comment }}
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
                  <button class="hidden h-4 w-4 md:block" @click="toggleActionDropdown(commentIndex, replyIndex)">
                    <svg class="h-full w-full text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                      <path
                          d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                    </svg>
                  </button>

                  <!-- Dropdown Menu Aksi Balasan -->
                  <div :id="`dropdown-${commentIndex}-${replyIndex}`"
                       class="absolute top-0 left-5 z-10 w-44 rounded-lg bg-white shadow divide-y divide-gray-100 dark:bg-gray-700"
                       data-dropdown-placement="left-end"
                       v-show="visibleActions[commentIndex].replies[replyIndex]"
                  >
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton">
                      <li>
                        <button
                            class="w-full px-4 py-2 text-left text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            @click="isShowReportModal = true; isShowActionDropdown = false;"
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
          <!-- Akhir Balasan -->
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
  <ReportModal
      :is-show-modal="isShowReportModal"
      @close="isShowReportModal = isShowActionDropdown = false"
  />
  <ShareModal
      :is-show-modal="isShowShareModal"
      @close="isShowShareModal = false"
  />
</template>