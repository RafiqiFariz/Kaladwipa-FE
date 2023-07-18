<script setup>
import {Modal} from 'flowbite-vue';
import {ref} from "vue";
import {useRoute} from 'vue-router';

const route = useRoute();
const props = defineProps(['isShowModal']);
const emit = defineEmits(['close']);

const linkInput = ref(null);
const link = ref('https://kaladwipa.com/jelajahi/detail/' + route.params.id);

const copyLink = () => {
  linkInput.value.select();
  navigator.clipboard.writeText(link.value);
}

const shareToSocmed = (platform) => {
  let shareUrl = '';
  if (platform === 'whatsapp') {
    const message =
        `Hey, aku menemukan karya seni yang luar biasa di Kaladwipa.com! Kamu harus melihatnya! 🎨✨

Kunjungi link ini untuk mengeksplor lebih lanjut: ${link.value}

Jangan lewatkan kesempatan untuk menikmati karya seni yang luar biasa dan dapatkan inspirasi yang tak terbatas. Bagikan ke teman-temanmu juga! 💫🌈`;
    shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  } else if (platform === 'facebook') {
    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link.value)}`;
  } else if (platform === 'twitter') {
    shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(link.value)}`;
  } else if (platform === 'linkedin') {
    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link.value)}`;
  } else if (platform === 'pinterest') {
    shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(link.value)}`;
  }

  if (shareUrl) {
    // Open share URL in a new tab
    window.open(shareUrl, '_blank');
  }
}
</script>
<template>
  <Modal size="2xl" v-if="isShowModal" class="max-w-lg overflow-y-auto" @close="emit('close')">
    <template #header>
      <div class="flex items-center text-xl font-semibold">
        Bagikan
      </div>
    </template>
    <template #body>
      <div class="w-full h-24 rounded-lg justify-start items-center gap-8 inline-flex">
        <div class="grow shrink basis-0 h-24 justify-between items-start gap-4 flex">
          <div class="w-20 flex-col justify-center items-center gap-2 inline-flex cursor-pointer"
               @click="shareToSocmed('whatsapp')"
          >
            <div class="w-14 h-14 relative">
              <div class="w-14 h-14 left-0 top-0 absolute">
                <img src="/resources/social_media_icons/WA_Icon.png" alt="WA_Icon">
              </div>
            </div>
            <div class="text-center text-gray-900 text-base font-medium leading-normal">WhatsApp</div>
          </div>
          <div
              class="flex-col justify-center items-center gap-2 inline-flex cursor-pointer"
              @click="shareToSocmed('facebook')"
          >
            <div class="w-14 h-14 relative">
              <img src="/resources/social_media_icons/FB_Icon.png" alt="FB_Icon">
            </div>
            <div class="text-center text-gray-900 text-base font-medium leading-normal">Facebook</div>
          </div>
          <div
              class="flex-col justify-center items-center gap-2 inline-flex cursor-pointer"
              @click="shareToSocmed('twitter')"
          >
            <div class="w-14 h-14 relative">
              <div class="w-14 h-14 left-0 top-0 absolute">
                <img src="/resources/social_media_icons/Twitter_Icon.png" alt="Twitter_Icon">
              </div>
            </div>
            <div class="text-center text-gray-900 text-base font-medium leading-normal">Twitter</div>
          </div>
          <div
              class="flex-col justify-center items-center gap-2 inline-flex cursor-pointer"
              @click="shareToSocmed('pinterest')"
          >
            <div class="w-14 h-14 relative">
              <div class="w-14 h-14 left-0 top-0 absolute">
                <img src="/resources/social_media_icons/Pinterest_Icon.png" alt="Pinterest_Icon">
              </div>
            </div>
            <div class="text-center text-gray-900 text-base font-medium leading-normal">Pinterest</div>
          </div>
          <div
              class="flex-col justify-center items-center gap-2 inline-flex cursor-pointer"
              @click="shareToSocmed('linkedin')"
          >
            <div class="w-14 h-14 relative">
              <div class="w-14 h-14 left-0 top-0 absolute">
                <img src="/resources/social_media_icons/Linkedin_Icon.png" alt="Linkedin_Icon">
              </div>
            </div>
            <div class="text-center text-gray-900 text-base font-medium leading-normal">Linkedin</div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="relative">
        <input type="search"
               id="link"
               class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
               ref="linkInput"
               v-model="link"
        >
        <button type="submit"
                class="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                @click="copyLink"
        >
          Salin
        </button>
      </div>
    </template>
  </Modal>
</template>