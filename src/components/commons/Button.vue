<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: "Button"
  },
});
</script>
<template>
  <button type="button"
          class="font-medium rounded-md text-sm px-5 py-2.5 text-center w-full"
          :class="{
            'text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300': isActive,
            'text-black bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-4': !isActive
          }"
  >
    {{ name }}
  </button>
</template>