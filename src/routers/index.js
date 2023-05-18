import {createRouter,createWebHistory} from "vue-router"
import Layout from '@/views/Layout/index.vue'

const router =createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:"home",
            component:Layout,
            children:[
                {
                    path:'', 
                    name:"Home",
                    component:() => import(/* webpackChunkName: "login" */ "@/views/Home/index.vue"),
                },
                {
                    path:'category/:id', 
                    name:"Category",
                    component:() => import(/* webpackChunkName: "category" */ "@/views/Category/index.vue"),
                }
            ]
        },
        {
            path:'/login', 
            name:"Login",
            component:() => import(/* webpackChunkName: "login" */ "@/views/Login/index.vue"),
        }
    ]
})


export default router
