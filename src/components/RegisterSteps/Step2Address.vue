<template>
  <div>
    <h4>Alamat Wilayah</h4>
    <FormSelect v-model="form.propinsi" label="Propinsi" :options="propinsiOptions" required :showError="validationError" />
    <FormSelect v-model="form.kota" label="Kota" :options="kotaOptions" required :showError="validationError" />
    <FormSelect v-model="form.kecamatan" label="Kecamatan" :options="kecamatanOptions" required :showError="validationError" />
    <FormSelect v-model="form.kelurahan" label="Kelurahan" :options="kelurahanOptions" required :showError="validationError" />
  </div>
</template>

<script setup lang="ts">
import { useRegisterForm } from '@/composables/useRegisterForm'
import FormSelect from '@/components/FormSelect.vue'

const { form, validationError } = useRegisterForm()

// Dummy options (bisa diganti API)
const propinsiOptions = [
  { value: 'Jawa Barat', text: 'Jawa Barat' },
  { value: 'DKI Jakarta', text: 'DKI Jakarta' }
]
const kotaOptions = [
  { value: 'Bekasi', text: 'Bekasi' },
  { value: 'Bandung', text: 'Bandung' }
]
const kecamatanOptions = [
  { value: 'Babelan', text: 'Babelan' },
  { value: 'Tambun', text: 'Tambun' }
]
const kelurahanOptions = [
  { value: 'Pondok Ungu Permai', text: 'Pondok Ungu Permai' },
  { value: 'Kedung Jaya', text: 'Kedung Jaya' }
]
</script>
