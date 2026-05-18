<template>
  <div class="mb-2">
    <label class="form-label">{{ label }}</label>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      class="form-control"
      rows="3"
      :class="{ 'is-invalid': showError && required && !modelValue }"
    ></textarea>
    <div v-if="showError && required && !modelValue" class="invalid-feedback">
      {{ label }} wajib diisi.
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string | null
  label: string
  required?: boolean
  showError?: boolean
}>()

defineEmits(['update:modelValue'])
</script>
