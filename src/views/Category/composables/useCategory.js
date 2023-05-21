import { getCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router"


export function useCategory() {
    const route = useRoute()
    const categoryData = ref({})
    onMounted(() => getCategoryData())
    onBeforeRouteUpdate((to) => {
        getCategoryData(to.params.id)
    })
    const getCategoryData = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        console.log(res);
        categoryData.value = res.result
    }

    return { categoryData }
}