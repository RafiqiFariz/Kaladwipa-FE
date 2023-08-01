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
    <div class="block w-full md:p-4 p-2 bg-white border border-gray-200 rounded-lg shadow">
        <h5 class="md:mb-2 lg:text-2xl md:text-xl text-lg font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {{name}}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 text-center">{{data}}</p>
    </div>
</template>