<template>
  <div>
    <h4>Data Pribadi</h4>
    <FormInput v-model="form.name" label="Nama Lengkap" required :showError="validationError" />
    <FormInput v-model="form.email" type="email" label="Email" required :showError="validationError" />
    <FormInput v-model="form.phone" type="tel" label="Nomor Telepon" required :showError="validationError" />
    <FormInput v-model="form.birthdate" type="date" label="Tanggal Lahir" required :showError="validationError" @change="updateAge" />
    <FormInput v-model="form.age" type="number" label="Umur" readonly />
    <FormRadioGroup v-model="form.gender" label="Gender" :options="genderOptions" required :showError="validationError" />

    <FormSelect v-model="form.religion" label="Agama" :options="religionOptions" required :showError="validationError" />
  </div>

  <FormSelect v-model="form.maritalStatus" label="Status Pernikahan" :options="maritalOptions" required :showError="validationError" />

  <FormInput v-if="form.maritalStatus === 'menikah' || form.maritalStatus === 'cerai'" v-model="form.childrenCount" type="number" label="Jumlah Anak" required :showError="validationError" />
</template>

<script setup lang="ts">
import { useRegisterForm } from '@/composables/useRegisterForm'
import FormInput from '@/components/forms/FormInput.vue'
import FormSelect from '@/components/forms/FormSelect.vue'
import FormRadioGroup from '@/components/forms/FormRadioGroup.vue'

const { form, updateAge, validationError } = useRegisterForm()

const genderOptions = [
  { value: 'male', text: 'Laki-laki' },
  { value: 'female', text: 'Perempuan' }
]

const religionOptions = [
  { value: 'islam', text: 'Islam' },
  { value: 'kristen', text: 'Kristen' },
  { value: 'katolik', text: 'Katolik' },
  { value: 'hindu', text: 'Hindu' },
  { value: 'buddha', text: 'Buddha' },
  { value: 'konghucu', text: 'Konghucu' }
]

const maritalOptions = [
  { value: 'single', text: 'Belum Menikah' },
  { value: 'menikah', text: 'Menikah' },
  { value: 'cerai', text: 'Cerai' }
]
</script>
