<template>
  <div class="mb-2">
    <label class="form-label">{{ label }}</label>
    <div>
      <div v-for="opt in options" :key="opt.value" class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          :id="`${label}-${opt.value}`"
          :value="opt.value"
          :checked="modelValue === opt.value"
          @change="$emit('update:modelValue', opt.value)"
        />
        <label class="form-check-label" :for="`${label}-${opt.value}`">
          {{ opt.text }}
        </label>
      </div>
    </div>
    <div v-if="showError && required && !modelValue" class="invalid-feedback d-block">
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
