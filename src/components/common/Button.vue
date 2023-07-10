<template>
    <button type="button" :class="{
        'text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-5 py-2.5 text-center w-full': isActive,
        'text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 text-center w-full': !isActive
    }">{{ name }}</button>
</template>
<script setup>
const props = defineProps({
    isActive: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        default: "give name"
    },
});
</script>