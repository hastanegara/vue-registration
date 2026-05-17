<template>
  <div>
    <h4>Data Pribadi</h4>
    <FormInput v-model="form.name" label="Nama Lengkap" required :showError="validationError" />
    <FormInput v-model="form.email" type="email" label="Email" required :showError="validationError" />
    <FormInput v-model="form.phone" type="tel" label="Nomor Telepon" required :showError="validationError" />
    <FormInput v-model="form.birthdate" type="date" label="Tanggal Lahir" required :showError="validationError" @change="updateAge" />
    <FormInput v-model="form.age" type="number" label="Umur" readonly />
    <FormSelect
      v-model="form.gender"
      label="Gender"
      :options="[{ value: 'male', text: 'Laki-laki' }, { value: 'female', text: 'Perempuan' }]"
      required
      :showError="validationError"
    />
  </div>
</template>

<script setup lang="ts">
import { useRegisterForm } from '@/composables/useRegisterForm'
import FormInput from '@/components/FormInput.vue'
import FormSelect from '@/components/FormSelect.vue'

const { form, updateAge, validationError } = useRegisterForm()
</script>
