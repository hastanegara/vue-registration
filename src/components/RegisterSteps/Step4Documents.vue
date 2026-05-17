<template>
  <div>
    <h4>Dokumen Pendukung</h4>
    <input type="file" @change="handleFileUpload('cv', $event)" class="form-control mb-2" />
    <input type="file" @change="handleFileUpload('coverLetter', $event)" class="form-control mb-2" />
    <input type="file" @change="handleFileUpload('portfolio', $event)" class="form-control mb-2" />
  </div>
</template>

<script setup lang="ts">
import { useRegisterForm } from '@/composables/useRegisterForm'

const { handleFileUpload } = useRegisterForm()
</script>
