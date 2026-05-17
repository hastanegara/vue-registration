<template>
  <div>
    <h4>Pendidikan & Pengalaman</h4>

    <div v-for="(edu, i) in form.educations" :key="i" class="border p-2 mb-2 rounded">
      <FormInput v-model="edu.level" label="Pendidikan Terakhir" required :showError="validationError" />
      <FormInput v-model="edu.major" label="Jurusan" required :showError="validationError" />
      <FormInput v-model="edu.year" type="number" label="Tahun Lulus" required :showError="validationError" />
      <button class="btn btn-danger btn-sm" @click="removeEducation(i)">Hapus</button>
    </div>
    <div>
      <button class="btn btn-secondary btn-sm mb-3" @click="addEducation">+ Tambah Pendidikan</button>
    </div>

    <div v-for="(exp, i) in form.experiences" :key="i" class="border p-2 mb-2 rounded">
      <FormInput v-model="exp.company" label="Perusahaan" required :showError="validationError" />
      <FormInput v-model="exp.role" label="Posisi" required :showError="validationError" />
      <FormInput v-model="exp.years" type="number" label="Lama Kerja (tahun)" required :showError="validationError" />
      <button class="btn btn-danger btn-sm" @click="removeExperience(i)">Hapus</button>
    </div>
    <div>
      <button class="btn btn-secondary btn-sm" @click="addExperience">+ Tambah Pengalaman</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRegisterForm } from '@/composables/useRegisterForm'
import FormInput from '@/components/FormInput.vue'

const { form, addEducation, removeEducation, addExperience, removeExperience, validationError } = useRegisterForm()
</script>
