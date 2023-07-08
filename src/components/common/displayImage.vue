<template>
    <div class="grid grid-cols-2 md:grid-cols-6 gap-4 pt-8">
        <div v-for="(image, index) in images" :key="index" class="grid gap-4">
            <div>
                <img class="h-full object-cover w-full rounded-lg" :src="image.url" :alt="image.alt">
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    images: {
        type: Array,
        required: true
    },
    kategori: {
        type: String
    },
    filter: {
        type: String
    }
});

</script>
