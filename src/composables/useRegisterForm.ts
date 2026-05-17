import { reactive, ref, computed, watch } from 'vue'
import { saveFormData, getFormData, dbPromise } from '@/utils/db'

export interface Education {
  level: string
  major: string
  year: number | null
}
export interface Experience {
  company: string
  role: string
  years: number | null
}

export interface FormData {
  name: string
  email: string
  phone: string
  birthdate: string
  age: number | null
  gender: string
  propinsi: string
  kota: string
  kecamatan: string
  kelurahan: string
  cv: File | null
  coverLetter: File | null
  portfolio: File | null
  educations: Education[]
  experiences: Experience[]
}

const step = ref(1)
const totalSteps = 5

const form = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
  birthdate: '',
  age: null,
  gender: '',
  propinsi: '',
  kota: '',
  kecamatan: '',
  kelurahan: '',
  cv: null,
  coverLetter: null,
  portfolio: null,
  educations: [],
  experiences: [],
})

const validationError = ref(false)

const progressPercent = computed(() => Math.round((step.value / totalSteps) * 100))

const updateAge = () => {
  if (!form.birthdate) {
    form.age = null
    return
  }
  const birth = new Date(form.birthdate)
  const today = new Date()
  let years = today.getFullYear() - birth.getFullYear()
  const m = today.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) years--
  form.age = years
}

const goNext = () => {
  if (validateStep()) {
    validationError.value = false
    step.value++
  } else {
    validationError.value = true
    alert('Mohon lengkapi semua field yang wajib diisi sebelum melanjutkan.')
  }
}
const goPrev = () => {
  if (step.value > 1) step.value--
}

const validateStep = () => {
  if (step.value === 1)
    return form.name && form.email && form.phone && form.birthdate && form.gender
  if (step.value === 2) return form.propinsi && form.kota && form.kecamatan && form.kelurahan
  if (step.value === 3) return form.educations.length > 0 && form.experiences.length > 0
  return true
}

const addEducation = () => form.educations.push({ level: '', major: '', year: null })
const removeEducation = (i: number) => form.educations.splice(i, 1)
const addExperience = () => form.experiences.push({ company: '', role: '', years: null })
const removeExperience = (i: number) => form.experiences.splice(i, 1)

const handleFileUpload = (field: keyof FormData, e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files && target.files[0]) form[field] = target.files[0]
}

const submitForm = () => {
  console.log('Data lamaran:', form)
  alert('Lamaran berhasil dikirim!')
}

export function useRegisterForm() {
  return {
    step,
    totalSteps,
    form,
    progressPercent,
    updateAge,
    goNext,
    goPrev,
    validateStep,
    addEducation,
    removeEducation,
    addExperience,
    removeExperience,
    handleFileUpload,
    submitForm,
    validationError
  }
}

// Load data saat app dibuka
;(async () => {
  const saved = await getFormData('userForm')
  if (saved) Object.assign(form, saved)
})()

// Auto-save setiap kali form berubah
watch(
  form,
  async (newVal) => {
    try {
      const plain = JSON.parse(JSON.stringify(newVal))
      await saveFormData('userForm', plain)
    } catch (e) {
      console.error('Failed to save form:', e)
    }
  },
  { deep: true },
)

export async function saveFile(key: string, file: File) {
  const db = await dbPromise
  await db.put('form', file, key)
}
