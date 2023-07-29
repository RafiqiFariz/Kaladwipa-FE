<script setup>
const props = defineProps({
    name: {
        type: String,
    },
    data: {
        type: Number,
    }
});
</script>
<template>
    <div class="block w-full p-4 bg-white border border-gray-200 rounded-lg shadow">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {{name}}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 text-center">{{data}}</p>
    </div>
</template>