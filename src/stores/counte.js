import {defineStore} from "pinia"
import {computed,ref} from "vue"
export const useCounterStore = defineStore('counte',()=>{
    //数据(state)
    const count=ref(0)
    
    // 定义修改数据的方法 (action 同步+异步)
    const increment=()=>{
        count.value++
    }

    //getter定义
    const doubleCount=computed(() => count.value*2)

    // 以对象的方式return 给组件使用
    return{
        count,
        doubleCount,
        increment,
    }
})