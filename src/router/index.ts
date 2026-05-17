import { createRouter, createWebHistory } from 'vue-router'
import RegisterForm from '@/views/RegisterForm.vue'

const routes = [
  { path: '/', name: 'RegisterForm', component: RegisterForm },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
