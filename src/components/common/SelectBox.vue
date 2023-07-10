<template>
    <button class='w-full h-full px-4 py-16 flex-col justify-center items-center gap-2.5 inline-flex relative'>
        <div class="self-stretch h-9 flex-col justify-start items-center gap-6 flex">
            <div :class="['self-stretch text-center text-white font-extrabold leading-9 relative z-30', styling]">{{ name }}
            </div>
        </div>
        <div :class="{
            'w-full h-full absolute top-0 left-0 bg-gray-900 bg-opacity-40 z-20': !isActive,
            'w-full h-full absolute top-0 left-0 bg-red-700 bg-opacity-40 z-20': isActive
        }"></div>
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
            <img :src="img" alt="Transparent Image" class="h-full w-full max-h-full object-cover" />
        </div>
    </button>
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
    },
    styling: {
        type: String,
        default: "text-4xl"
    }
});
</script>