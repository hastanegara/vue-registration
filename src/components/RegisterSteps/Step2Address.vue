<template>
  <div>
    <h4>Alamat Wilayah</h4>
    <FormSelect v-model="form.propinsi" label="Propinsi" :options="propinsiOptions" required :showError="validationError" />
    <FormSelect v-model="form.kota" label="Kota" :options="filteredKotaOptions" required :showError="validationError" />
    <FormSelect v-model="form.kecamatan" label="Kecamatan" :options="filteredKecamatanOptions" required :showError="validationError" />
    <FormSelect v-model="form.kelurahan" label="Kelurahan" :options="filteredKelurahanOptions" required :showError="validationError" />
    <FormTextarea v-model="form.address" label="Alamat" required :showError="validationError" />

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRegisterForm } from '@/composables/useRegisterForm'
import FormSelect from '@/components/forms/FormSelect.vue'
import FormTextarea from '@/components/forms/FormTextarea.vue'

const { form, validationError } = useRegisterForm()

// Dummy options (bisa diganti API)
const propinsiOptions = [
  { value: 'Jawa Barat', text: 'Jawa Barat' },
  { value: 'DKI Jakarta', text: 'DKI Jakarta' }
]
const kotaOptions = [
  { value: 'Bekasi', text: 'Bekasi', propinsi: 'Jawa Barat' },
  { value: 'Bandung', text: 'Bandung', propinsi: 'Jawa Barat' },
  { value: 'Depok', text: 'Depok', propinsi: 'Jawa Barat' },
  { value: 'Bogor', text: 'Bogor', propinsi: 'Jawa Barat' },
  { value: 'Jakarta Selatan', text: 'Jakarta Selatan', propinsi: 'DKI Jakarta' },
  { value: 'Jakarta Utara', text: 'Jakarta Utara', propinsi: 'DKI Jakarta' },
  { value: 'Jakarta Barat', text: 'Jakarta Barat', propinsi: 'DKI Jakarta' },
  { value: 'Jakarta Timur', text: 'Jakarta Timur', propinsi: 'DKI Jakarta' }

]
const kecamatanOptions = [
  { value: 'Babelan', text: 'Babelan', kota: 'Bekasi' },
  { value: 'Tambun', text: 'Tambun', kota: 'Bekasi' },
  { value: 'Cimahi', text: 'Cimahi', kota: 'Bandung' },
  { value: 'Coblong', text: 'Coblong', kota: 'Bandung' },
  { value: 'Sukmajaya', text: 'Sukmajaya', kota: 'Depok' },
  { value: 'Pancoran Mas', text: 'Pancoran Mas', kota: 'Depok' },
  { value: 'Bogor Selatan', text: 'Bogor Selatan', kota: 'Bogor' },
  { value: 'Bogor Utara', text: 'Bogor Utara', kota: 'Bogor' },
  { value: 'Kebayoran Baru', text: 'Kebayoran Baru', kota: 'Jakarta Selatan' },
  { value: 'Tebet', text: 'Tebet', kota: 'Jakarta Selatan' },
  { value: 'Penjaringan', text: 'Penjaringan', kota: 'Jakarta Utara' },
  { value: 'Koja', text: 'Koja', kota: 'Jakarta Utara' },
  { value: 'Cengkareng', text: 'Cengkareng', kota: 'Jakarta Barat' },
  { value: 'Grogol Petamburan', text: 'Grogol Petamburan', kota: 'Jakarta Barat' },
  { value: 'Pademangan', text: 'Pademangan', kota: 'Jakarta Utara' },
  { value: 'Kemayoran', text: 'Kemayoran', kota: 'Jakarta Pusat' }
]
const kelurahanOptions = [
  { value: 'Bahagia', text: 'Bahagia', kecamatan: 'Babelan' },
  { value: 'Sumber Arta', text: 'Sumber Arta', kecamatan: 'Babelan' },
  { value: 'Tambun', text: 'Tambun', kecamatan: 'Tambun' },
  { value: 'Tambun Selatan', text: 'Tambun Selatan', kecamatan: 'Tambun' },
  { value: 'Cimahi Tengah', text: 'Cimahi Tengah', kecamatan: 'Cimahi' },
  { value: 'Cimahi Utara', text: 'Cimahi Utara', kecamatan: 'Cimahi' },
  { value: 'Coblong', text: 'Coblong', kecamatan: 'Coblong' },
  { value: 'Dago', text: 'Dago', kecamatan: 'Coblong' },
  { value: 'Sukmajaya', text: 'Sukmajaya', kecamatan: 'Sukmajaya' },
  { value: 'Abadijaya', text: 'Abadijaya', kecamatan: 'Sukmajaya' },
  { value: 'Pancoran Mas', text: 'Pancoran Mas', kecamatan: 'Pancoran Mas' },
  { value: 'Ratu Jaya', text: 'Ratu Jaya', kecamatan: 'Pancoran Mas' },
  { value: 'Bogor Selatan', text: 'Bogor Selatan', kecamatan: 'Bogor Selatan' },
  { value: 'Tanah Sareal', text: 'Tanah Sareal', kecamatan: 'Bogor Selatan' },
  { value: 'Bogor Utara', text: 'Bogor Utara', kecamatan: 'Bogor Utara' },
  { value: 'Tajur Halang', text: 'Tajur Halang', kecamatan: 'Bogor Utara' },
  { value: 'Kebayoran Baru', text: 'Kebayoran Baru', kecamatan: 'Kebayoran Baru' },
  { value: 'Gandaria Selatan', text: 'Gandaria Selatan', kecamatan: 'Kebayoran Baru' },
  { value: 'Tebet Barat', text: 'Tebet Barat', kecamatan: 'Tebet' },
  { value: 'Tebet Timur', text: 'Tebet Timur', kecamatan: 'Tebet' },
  { value: 'Kedung Jaya', text: 'Kedung Jaya' }
]

// Filtered options berdasarkan pilihan sebelumnya
const filteredKotaOptions = computed(() =>
  kotaOptions.filter(k => k.propinsi === form.propinsi)
)

const filteredKecamatanOptions = computed(() =>
  kecamatanOptions.filter(k => k.kota === form.kota)
)

const filteredKelurahanOptions = computed(() =>
  kelurahanOptions.filter(k => k.kecamatan === form.kecamatan)
)
</script>
