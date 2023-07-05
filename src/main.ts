import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/index.scss'

import router from '@/router'
import pinia from '@/store'
import 'virtual:svg-icons-register'
import gloablComponent from '@/components'
const app = createApp(App)

app.use(gloablComponent)
app.use(router)
app.use(pinia)
app.mount('#app')
