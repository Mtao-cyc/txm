<script setup name="SonPaeg">
import {ref,defineProps,defineEmits,defineExpose} from 'vue'
const kh=ref(999999999999)
const props= defineProps({
    mag:String,
})
// 接收父组件传递过来的方法
const emit = defineEmits(['emitss'])
console.log(props);
const cli=()=>{
    emit('emitss',"kjhsdjaghk")
}
defineExpose({
    kh,
    cli
})

</script>

<template>
    <div>
        子组件接收参数{{mag}}
    </div>
    <button @click="cli">子组件</button>
</template>
<style lang='scss' scoped>

</style>