<template>
  <div class="mb-2">
    <label class="form-label">{{ label }}</label>
    <select
      :value="modelValue"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      class="form-select"
      :class="{ 'is-invalid': showError && required && !modelValue }"
    >
      <option value="">Pilih {{ label }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.text }}
      </option>
    </select>
    <div v-if="showError && required && !modelValue" class="invalid-feedback">
      {{ label }} wajib dipilih.
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string | null
  label: string
  options: { value: string; text: string }[]
  required?: boolean
  showError?: boolean
}>()
defineEmits(['update:modelValue'])
</script>
