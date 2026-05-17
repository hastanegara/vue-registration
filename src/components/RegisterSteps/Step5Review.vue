<template>
  <div>
    <h4>Review Data</h4>
    <ul class="list-group">
      <li class="list-group-item"><strong>Nama:</strong> {{ form.name }}</li>
      <li class="list-group-item"><strong>Email:</strong> {{ form.email }}</li>
      <li class="list-group-item"><strong>Umur:</strong> {{ form.age }}</li>
      <li class="list-group-item"><strong>Gender:</strong> {{ form.gender }}</li>
      <li class="list-group-item"><strong>Propinsi:</strong> {{ form.propinsi }}</li>
      <li class="list-group-item"><strong>Kota:</strong> {{ form.kota }}</li>
      <li class="list-group-item"><strong>Kecamatan:</strong> {{ form.kecamatan }}</li>
      <li class="list-group-item"><strong>Kelurahan:</strong> {{ form.kelurahan }}</li>
      <li class="list-group-item"><strong>Pendidikan:</strong>
        <ul>
          <li v-for="(edu, i) in form.educations" :key="i">
            {{ edu.level }} - {{ edu.major }} ({{ edu.year }})
          </li>
        </ul>
      </li>
      <li class="list-group-item"><strong>Pengalaman:</strong>
        <ul>
          <li v-for="(exp, i) in form.experiences" :key="i">
            {{ exp.company }} - {{ exp.role }} ({{ exp.years }} tahun)
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useRegisterForm } from '@/composables/useRegisterForm'
const { form } = useRegisterForm()
</script>
