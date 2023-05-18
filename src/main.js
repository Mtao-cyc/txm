import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/routers'
import {lazyPlugin} from "@/directives"
import "@/styles/common.scss"

const app=createApp(App)
const pinia=createPinia()

app.use(router)
app.use(pinia)
app.use(lazyPlugin)
app.mount('#app')

