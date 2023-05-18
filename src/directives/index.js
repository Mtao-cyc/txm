import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin = {
    install(app) {
        app.directive("img-lazy", {
            mounted(el, binding, vonde) {
                //  console.log(el,binding,vonde);\
                // 如果不停止就会一直监听  内存浪费
            const {stop}=useIntersectionObserver(
                    el,
                    ([{ isIntersecting }],) => {
                        if (isIntersecting) {
                            el.src = binding.value
                            stop()
                        }
                    },
                )

            }
        })
    }
}