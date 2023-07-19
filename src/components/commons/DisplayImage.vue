<template>
  <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
    <div v-for="(items, index) in data" :key="index" class="grid gap-4">
      <div v-if="!profile">
        <div v-for="item in items">
          <router-link :to="getModifiedLink(item.link)">
            <VLazyImage class="h-auto max-w-full rounded-lg mb-4" :src="item.url" :alt="item.alt"/>
          </router-link>
        </div>
      </div>
      <div v-else v-for="item in items">
        <img class="h-auto max-w-full rounded-lg" :src="item.url" :alt="item.alt">
      </div>
    </div>
  </div>
</template>

<script>
import { defineProps } from 'vue';
import VLazyImage from 'v-lazy-image';

export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    kategori: {
      type: String
    },
    filter: {
      type: String
    },
    className: {
      type: String,
    },
    profile: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getModifiedLink(link) {
      if (this.kategori === 'homepage') {
        return '/jelajahi' + link;
      } else if (this.kategori === 'koleksiku') {
        return '/koleksi' + link;
      }
      return link;
    }
  },
  components: {
    VLazyImage
  }
};
</script>
