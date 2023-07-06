import { createApp } from 'vue'
import App from './App.vue'

import '@/styles/index.scss'

import router from '@/router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import pinia from '@/store'
import 'virtual:svg-icons-register'
import gloablComponent from '@/components'
const app = createApp(App)

app.use(gloablComponent)
app.use(pinia)
app.use(router)
app.use(Antd)
app.mount('#app')
