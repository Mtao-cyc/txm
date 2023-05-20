import { getHomeAPI } from "@/apis/home"
import { onMounted, ref } from "vue";


export function useBanner() {
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await getHomeAPI({ distributionSite: '2' });
        bannerList.value = res.result
    }
    onMounted(() => getBanner())
    return{
        bannerList
    }
}
