<template>
  <div class="card shadow-sm p-4">
    <!-- Progress bar -->
    <div class="progress mb-4" style="height: 25px;">
      <div
        class="progress-bar progress-bar-striped progress-bar-animated"
        :class="{ 'bg-success': step === totalSteps, 'bg-info': step < totalSteps }"
        role="progressbar"
        :style="{ width: progressPercent + '%' }"
      >
        Step {{ step }} / {{ totalSteps }}
      </div>
    </div>

    <!-- Render komponen sesuai step -->
    <component :is="currentStepComponent" />

    <!-- Navigasi -->
    <div class="d-flex justify-content-between mt-3">
      <button v-if="step > 1" class="btn btn-outline-secondary" @click="goPrev">← Prev</button>
      <button v-if="step < totalSteps" class="btn btn-primary ms-auto" @click="goNext">Next →</button>
      <button v-else class="btn btn-success ms-auto" @click="submitForm">✅ Submit</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRegisterForm } from '@/composables/useRegisterForm'
import Step1Personal from '@/components/RegisterSteps/Step1Personal.vue'
import Step2Address from '@/components/RegisterSteps/Step2Address.vue'
import Step3EducationExperience from '@/components/RegisterSteps/Step3EducationExperience.vue'
import Step4Documents from '@/components/RegisterSteps/Step4Documents.vue'
import Step5Review from '@/components/RegisterSteps/Step5Review.vue'

const { step, totalSteps, progressPercent, goNext, goPrev, submitForm } = useRegisterForm()

const stepComponents = [Step1Personal, Step2Address, Step3EducationExperience, Step4Documents, Step5Review]
const currentStepComponent = computed(() => stepComponents[step.value - 1])
</script>
