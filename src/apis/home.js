import httpInstance from "@/utils/http"

export function getHomeAPI() {
    return httpInstance({
        url: 'home/banner',
        method: 'GET',
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new',
        method: 'GET',
    })
}
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
        url: '/home/hot',
        method: 'GET',
    })
}
