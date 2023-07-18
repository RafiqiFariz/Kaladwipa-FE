<script setup>
import image from '../../../resources/throne_room.png';
import {reactive, ref} from "vue";
import ReportModal from "@/components/gallery/ReportModal.vue";

const isShowReportModal = ref(false);
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

const showMoreComments = () => {
  isOpen = !isOpen;
  if (isOpen && (visibleComments.value < comments.length)) {
    visibleComments.value = comments.length;
  } else {
    visibleComments.value = maxVisibleComments;
  }
};

const visibleReplies = reactive(Array(comments.length).fill(0));
const showMoreReplies = (index) => {
  isRepliesOpen = !isRepliesOpen;
  if (isRepliesOpen && (visibleReplies[index] < comments[index].replies.length)) {
    visibleReplies[index] = comments[index].replies.length;
  } else {
    visibleReplies[index] = 0;
  }
};

const isShowActionDropdown = ref(false);
const toggleActionDropdown = (index) => {
  isShowActionDropdown.value = !isShowActionDropdown.value;
}
</script>

<template>
  <div class="w-full bg-neutral-100 relative md:p-6 p-4">
    <div
        class="w-full h-full bg-white rounded-lg shadow border border-gray-200 justify-start items-center md:inline-flex gap-5 block mb-5">

      <div id="indicators-carousel" class="relative md:w-2/3" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden md:h-96">
          <!-- Item 1 -->
          <div class="block duration-700 ease-in-out" data-carousel-item="active">
            <img :src="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                 alt="...">
          </div>
          <!-- Item 2 -->
          <div class="block duration-700 ease-in-out" data-carousel-item>
            <img :src="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                 alt="...">
          </div>
          <!-- Item 3 -->
          <div class="block duration-700 ease-in-out" data-carousel-item>
            <img :src="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                 alt="...">
          </div>
          <!-- Item 4 -->
          <div class="block duration-700 ease-in-out" data-carousel-item>
            <img :src="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                 alt="...">
          </div>
          <!-- Item 5 -->
          <div class="block duration-700 ease-in-out" data-carousel-item>
            <img :src="image" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                 alt="...">
          </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"
                  data-carousel-slide-to="0"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                  data-carousel-slide-to="1"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                  data-carousel-slide-to="2"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"
                  data-carousel-slide-to="3"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5"
                  data-carousel-slide-to="4"></button>
        </div>
        <!-- Slider controls -->
        <button type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev>
                <span
                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
        </button>
        <button type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next>
                <span
                    class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
        </button>
      </div>
      <div
          class="md:w-1/3 w-full self-stretch md:py-5 md:pr-5 md:pl-0 p-5 flex-col justify-between items-start inline-flex">
        <div class="self-stretch h-full flex-col justify-start items-start gap-3.5 flex">
          <div class="justify-start items-start gap-3 inline-flex">
            <img class="w-12 h-12 relative rounded-full" src="https://via.placeholder.com/48x48" alt=""/>
            <div class="flex-col justify-center items-start gap-1 inline-flex">
              <div class="text-zinc-800 text-base font-medium leading-normal">
                Rian Arimawan
              </div>
              <div class="text-neutral-400 text-xs font-normal leading-none">
                Illustrator • Character Designer
              </div>
            </div>
          </div>
          <div class="self-stretch h-full flex-col justify-start items-start gap-2 flex">
            <div class="self-stretch text-gray-900 text-[24px] font-bold leading-loose">
              Judul Karya
            </div>
            <div class="self-stretch text-gray-500 text-base font-normal leading-normal">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit
              urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare
              leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante.
            </div>
            <div class="self-stretch text-gray-700 text-xs font-medium leading-none">
              Diposting 2h lalu
            </div>
          </div>
          <div class="self-stretch justify-start items-start gap-2 grid md:grid-cols-3 grid-cols-1 mt-4">
            <button
                class="grow shrink basis-0 px-5 py-3 bg-red-700 rounded-lg justify-center items-center gap-2 flex">
              <svg class="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor" viewBox="0 0 18 18">
                <path
                    d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
              </svg>
              <span class="text-white text-sm font-medium leading-tight">Suka</span>
            </button>
            <button
                class="grow shrink basis-0 px-5 py-3 bg-gray-200 rounded-lg justify-center items-center gap-2 flex">
              <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor" viewBox="0 0 14 20">
                <path
                    d="M13 20a1 1 0 0 1-.64-.231L7 15.3l-5.36 4.469A1 1 0 0 1 0 19V2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v17a1 1 0 0 1-1 1Z"/>
              </svg>
              <span class="text-black text-sm font-medium leading-tight">Simpan</span>
            </button>
            <button
                class="grow shrink basis-0 px-5 py-3 bg-gray-200 rounded-lg justify-center items-center gap-2 flex">
              <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   fill="currentColor" viewBox="0 0 18 18">
                <path
                    d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z"/>
              </svg>
              <span class="text-black text-sm font-medium leading-tight">Bagikan</span>
            </button>
          </div>
        </div>
        <div
            class="self-stretch justify-between items-center gap-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-4 mt-5">
          <div class="grow shrink basis-0 justify-start items-center gap-3 flex">
            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 18 18">
              <path
                  d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
            </svg>
            <div class="text-black text-base font-normal leading-tight">
              1k
            </div>
          </div>
          <div class="grow shrink basis-0 justify-start items-center gap-3 flex">
            <svg class="md:w-4 md:h-4 text-gray-800 dark:text-white" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 20 14">
              <path
                  d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
            </svg>
            <div class="text-black text-base font-normal leading-tight">2,1k</div>
          </div>
          <div class="grow shrink basis-0 justify-start items-center gap-3 flex">
            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 18 18">
              <path
                  d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z"/>
            </svg>
            <div class="text-black text-base font-normal leading-tight">100</div>
          </div>
          <div class="grow shrink basis-0 justify-start items-center gap-3 flex">
            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 fill="currentColor" viewBox="0 0 20 18">
              <path
                  d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
            </svg>
            <div class="text-black text-base font-normal leading-tight">50</div>
          </div>
        </div>
      </div>
    </div>
    <!--  Bagian komentar dan Tag  -->
    <div class="md:flex block md:space-y-0 space-y-5 gap-5">
      <div
          class="h-full md:w-2/3 w-full p-6 bg-white rounded-lg shadow border border-gray-200 flex-col justify-start items-start inline-flex ">
        <div class="self-stretch flex-col justify-start items-start gap-4 flex">
          <!-- Input Komentar -->
          <form class="w-full">
            <label for="chat" class="sr-only">Tinggalkan komentar...</label>
            <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <button type="button"
                      class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
                </svg>
                <span class="sr-only">Add emoji</span>
              </button>
              <textarea id="chat" rows="1"
                        class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Tinggalkan pesan..."></textarea>
              <button type="submit"
                      class="inline-flex justify-center p-2 text-red-600 rounded-full cursor-pointer hover:bg-red-100 dark:text-blue-500 dark:hover:bg-gray-600">
                <svg class="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                     viewBox="0 0 18 20">
                  <path
                      d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                </svg>
                <span class="sr-only">Kirim pesan</span>
              </button>
            </div>
          </form>
          <div class="self-stretch max-w-full">
            <div v-for="(comment, index) in comments.slice(0, visibleComments)" :key="index">
              <div class="w-full justify-start items-start gap-2.5 inline-flex mb-4">
                <img class="w-8 h-8 relative rounded-full" src="https://via.placeholder.com/32x32" alt=""/>
                <div class="grow shrink basis-0 justify-start items-center gap-1.5 flex max-w-sm relative">
                  <div class="grid grid-cols-1">
                    <div
                        class="p-4 bg-gray-100 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl flex-col items-start gap-2.5 inline-flex"
                    >
                      <div class="flex-col justify-start items-start gap-1.5 flex">
                        <div class="text-gray-900 text-sm font-semibold leading-tight">{{ comment.name }}</div>
                        <div class="text-gray-500 text-xs font-medium leading-none">{{ comment.expertise }}</div>
                      </div>
                      <div class="text-gray-900 text-sm font-normal leading-normal">{{ comment.comment }}</div>
                      <div class="justify-start items-center gap-2.5 inline-flex">
                        <div class="text-gray-500 text-xs font-normal leading-tight">2 Suka</div>
                        <div class="text-gray-500 text-xs font-normal leading-tight">Balas</div>
                        <div class="text-gray-500 text-xs font-normal leading-tight">• 1mg</div>
                      </div>
                    </div>
                    <button
                        v-if="(visibleReplies[index] < comment.replies.length)"
                        class="text-gray-900 text-sm font-medium leading-normal underline cursor-pointer text-left mt-2"
                        @click="showMoreReplies(index)"
                    >
                      Tampilkan lebih banyak balasan
                    </button>
                    <button
                        v-if="(visibleReplies[index] === comment.replies.length) && isRepliesOpen"
                        class="text-gray-900 text-sm font-medium leading-normal underline cursor-pointer text-left mt-2"
                        @click="showMoreReplies(index)"
                    >
                      Tutup balasan
                    </button>
                  </div>

                  <!-- Tombol Aksi -->
                  <button type="button"
                          :id="`dropdown-${index}-btn`"
                          class="w-4 h-4 relative"
                          @click="toggleActionDropdown(index)"
                  >
                    <svg
                        class="w-full h-full text-gray-800 dark:text-white"
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
                  <!-- Dropdown menu -->
                  <div :id="`dropdown-${index}`"
                       class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-[60px] right-[-150px]"
                       data-dropdown-placement="left-end"
                       v-show="isShowActionDropdown"
                  >
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                      <li>
                        <button
                            class="w-full px-4 py-2 text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left"
                            @click="isShowReportModal = true;isShowActionDropdown = false;"
                        >
                          Laporkan
                        </button>
                      </li>
                      <li>
                        <button
                            class="w-full px-4 py-2 text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-left">
                          Blokir pengguna
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Menampilkan subkomentar -->
              <div v-for="(subComment, subIndex) in comment.replies.slice(0, visibleReplies[index])"
                   :key="subIndex">
                <div class="pl-10 md:w-full justify-start items-start gap-2.5 inline-flex mb-4">
                  <img class="w-8 h-8 relative rounded-full" src="https://via.placeholder.com/32x32" alt=""/>
                  <div class="grow shrink basis-0 justify-start items-center gap-1.5 flex max-w-sm">
                    <div
                        class="p-4 bg-gray-100 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl flex-col justify-center items-start gap-2.5 inline-flex">
                      <div class="flex-col justify-start items-start gap-1.5 flex">
                        <div class="text-gray-900 text-sm font-semibold leading-tight">
                          {{ subComment.name }}
                        </div>
                        <div class="text-gray-500 text-xs font-medium leading-none">
                          {{ subComment.expertise }}
                        </div>
                      </div>
                      <div class="text-gray-900 text-sm font-normal leading-normal">
                        {{ subComment.comment }}
                      </div>
                      <div class="justify-start items-center gap-2.5 inline-flex">
                        <div class="text-gray-500 text-xs font-normal leading-tight">
                          2 Suka
                        </div>
                        <div class="text-gray-500 text-xs font-normal leading-tight">Balas</div>
                        <div class="text-gray-500 text-xs font-normal leading-tight">• 1mg</div>
                      </div>
                    </div>
                    <button class="w-4 h-4 relative md:block hidden">
                      <svg class="w-full h-full text-gray-800 dark:text-white" aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                        <path
                            d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="justify-center items-center gap-2.5 inline-flex">
            <!-- Menampilkan tombol "Tampilkan lebih banyak komentar" jika tidak semua komentar ditampilkan -->
            <button
                v-if="visibleComments < comments.length && !isOpen"
                class="text-gray-900 text-base font-medium leading-normal underline cursor-pointer"
                @click="showMoreComments"
            >
              Tampilkan lebih banyak
            </button>
            <!-- Menampilkan tombol "Tutup komentar" jika semua komentar ditampilkan -->
            <button
                v-else-if="visibleComments === comments.length && isOpen"
                class="text-gray-900 text-base font-medium leading-normal underline cursor-pointer"
                @click="showMoreComments"
            >
              Tutup komentar
            </button>
          </div>
        </div>
      </div>

      <!-- Bagian Tag Karya -->
      <div class="md:w-1/3 w-full">
        <div
            class="w-full p-4 bg-white rounded-lg shadow border border-gray-200 items-start inline-flex flex-wrap gap-y-2">
          <span
              class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            #Produk Digital
          </span>
          <span
              class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            #Seni Digital
          </span>
          <span
              class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            #Tradisional
          </span>
          <span
              class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            #Test Tag Responsive
          </span>
        </div>
      </div>
    </div>
    <ReportModal
        :is-show-modal="isShowReportModal"
        @close="isShowReportModal = isShowActionDropdown = false"
    />
  </div>
</template>