<template>
    <div :class="{
        'w-full h-full px-4 py-16 bg-gray-900 bg-opacity-70 flex-col justify-center items-center gap-2.5 inline-flex relative': !isActive,
        'w-full h-full px-4 py-16 bg-red-700 flex-col justify-center items-center gap-2.5 inline-flex relative': isActive
    }">
        <div class="self-stretch h-9 flex-col justify-start items-center gap-6 flex">
            <div class="self-stretch text-center text-white text-4xl font-extrabold leading-9 relative z-10">{{ name }}
            </div>
        </div>
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <img :src="img" alt="Transparent Image" class="h-full w-full max-h-full opacity-50 object-cover" />
        </div>
    </div>
</template>


<script setup>
const props = defineProps({
    isActive: {
        type: Boolean,
        default: false
    },
    name: {
        type: String
    },
    img: {
        type: String
    }
});
</script>