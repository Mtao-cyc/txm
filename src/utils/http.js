import axios from "axios";

const httpInstance = axios.create({
    baseURL: '/api',
    timeout: 5000,
    headers: { 'X-Custom-Header': 'foobar' },
})

// 添加请求拦截器
httpInstance.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    return config;
}, e => Promise.reject(e));

// 添加响应拦截器
httpInstance.interceptors.response.use((res) => res.data, e => Promise.reject(e));


export default httpInstance