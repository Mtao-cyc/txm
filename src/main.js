import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/routers'
import "@/styles/common.scss"

const app=createApp(App)
const pinia=createPinia()

import {gerCategory} from "@/apis/testAPI"
gerCategory().then(res=>{
    console.log(res);
})

app.use(router)
app.use(pinia)
app.mount('#app')
