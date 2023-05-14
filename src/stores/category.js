import { defineStore } from "pinia"
import { ref } from "vue"
import { getCategoryAPI } from "@/apis/layout"


export const useCategoryStore = defineStore('category', () => {
    // 导航列表数据管理

    // state
    const categoryList = ref([])

    // action
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.result
    }
    return {
        categoryList,
        getCategory
    }
})