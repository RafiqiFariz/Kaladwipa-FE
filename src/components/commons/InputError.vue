<script setup>
import { computed } from 'vue';

const props = defineProps(['name', 'errors']);

const combinedErrors = computed(() => {
  const combined = { ...props.errors };
  const fieldErrors = {};

  for (const field in props.errors) {
    if (field.startsWith(`${props.name}.`)) {
      const index = field.split('.')[1];
      if (!fieldErrors[index]) {
        fieldErrors[index] = [];
      }
      fieldErrors[index].push(...props.errors[field]);
    }
  }

  combined[props.name] = fieldErrors;
  return combined;
});
</script>
<template>
  {{errors}}
  <div v-if="errors">
    <template v-for="(fieldErrors, fieldName) in combinedErrors">
      <template v-if="Array.isArray(fieldErrors)">
        <span v-for="error in fieldErrors" :key="error" class="text-sm text-red-400 py-2">
          {{ error }}
        </span>
      </template>
      <span v-else-if="fieldErrors[0]" class="text-sm text-red-400 py-2">
        {{ fieldErrors }}
      </span>
    </template>
  </div>
</template>