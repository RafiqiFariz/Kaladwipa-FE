<template>
  <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
    <div v-for="(items, index) in data" :key="index" class="grid gap-4">
      <div v-if="!profile">
        <div v-for="item in items">
          <router-link :to="item.link">
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
<script setup>
import VLazyImage from 'v-lazy-image';

const props = defineProps({
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
});

</script>
