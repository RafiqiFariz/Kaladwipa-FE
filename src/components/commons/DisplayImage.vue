<script setup>
import {computed, defineProps} from 'vue';
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
})

const getModifiedLink = (id) => {
  if (props.kategori === 'homepage') {
    return {name: 'jelajahi.show', params: {id: id}}
  } else if (props.kategori === 'koleksiku') {
    return {name: 'koleksiku.show', params: {id: id}}
  }

  return link;
}

const compProps = computed(() => ({
  imageUrl(item) {
    let modifiedUrl = item.images[0]?.imageName?.replace('public/', 'storage/');
    const baseUrl = import.meta.env.VITE_BASE_URL;
    return `${baseUrl}/${modifiedUrl}`;
  }
}));
</script>
<template>
  <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
    <div v-for="(items, index) in data" :key="index" class="grid gap-4">
      <div v-if="!profile">
        <div v-for="item in items">
          <router-link :to="getModifiedLink(item.id)">
            <VLazyImage class="h-auto max-w-full rounded-lg mb-4" :src="compProps.imageUrl(item)"
                        :alt="item.title"/>
          </router-link>
        </div>
      </div>
      <div v-else v-for="item in items">
        <img class="h-auto max-w-full rounded-lg" :src="compProps.imageUrl(item)"
             :alt="item.title">
      </div>
    </div>
  </div>
</template>
