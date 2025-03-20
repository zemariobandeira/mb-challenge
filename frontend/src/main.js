import { createApp } from 'vue'
import './style.css'
import App from '@/components/App.vue'
import service from './services/registration.service'

const app = createApp(App)
const api = service.init(import.meta.env.VITE_API_URL)

app.provide('api', api)
app.mount('#app')
