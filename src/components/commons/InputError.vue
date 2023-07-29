<script setup>
const props = defineProps(['errors'])
</script>
<template>
  <div v-if="errors">
    <span class="text-sm text-red-400 py-4">
      {{ errors[0] }}
    </span>
  </div>
</template>