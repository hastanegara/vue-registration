<template>
  <div class="mb-2">
    <label class="form-label">{{ label }}</label>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :type="type"
      class="form-control"
      :readonly="readonly"
      :class="{ 'is-invalid': showError && required && !modelValue }"
    />
    <div v-if="showError && required && !modelValue" class="invalid-feedback">
      {{ label }} wajib diisi.
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string | number | null
  label: string
  type?: string
  readonly?: boolean
  required?: boolean
  showError?: boolean
}>()
defineEmits(['update:modelValue'])
</script>
