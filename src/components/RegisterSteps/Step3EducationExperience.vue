<template>
  <div>
    <h5>Pendidikan</h5>
    <div v-for="(edu, i) in form.educations" :key="i">
      <FormInput v-model="edu.level" label="Jenjang Pendidikan" required :showError="validationError" />
      <FormInput v-model="edu.major" label="Jurusan" required :showError="validationError" />
      <FormInput v-model="edu.year" label="Tahun Lulus" type="number" required :showError="validationError" />

      <!-- Tombol hapus hanya muncul jika lebih dari 1 -->
      <button class="btn btn-danger mb-2" v-if="form.educations.length > 1" @click="form.educations.splice(i,1)">
        <i class="bi bi-trash"></i> Hapus
      </button>
    </div>
    <button class="btn btn-primary" @click="form.educations.push({ level:'', major:'', year:null })"><i class="bi bi-plus"></i> Tambah Pendidikan</button>

    <h5 class="mt-4">Pengalaman</h5>
    <div v-for="(exp, i) in form.experiences" :key="i">
      <FormInput v-model="exp.company" label="Perusahaan" required :showError="validationError" />
      <FormInput v-model="exp.role" label="Posisi/Jabatan" required :showError="validationError" />
      <FormInput v-model="exp.years" label="Lama Kerja (tahun)" type="number" required :showError="validationError" />

      <!-- Tombol hapus hanya muncul jika lebih dari 1 -->
      <button class="btn btn-danger mb-2" v-if="form.experiences.length > 1" @click="form.experiences.splice(i,1)">
        <i class="bi bi-trash"></i> Hapus
      </button>
    </div>
    <button class="btn btn-primary" @click="form.experiences.push({ company:'', role:'', years:null })"><i class="bi bi-plus"></i> Tambah Pengalaman</button>
  </div>
</template>

<script setup lang="ts">
import { useRegisterForm } from '@/composables/useRegisterForm'
import FormInput from '@/components/forms/FormInput.vue'

const { form, validationError } = useRegisterForm()
</script>
