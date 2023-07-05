import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/index.scss'

import router from '@/router'
import pinia from '@/store'

import SvgIcon from '@/components/svg/index.vue'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.component('SvgIcon', SvgIcon)
app.mount('#app')
