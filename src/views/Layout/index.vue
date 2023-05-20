<script setup>
import LayoutNav from '@/components/Layout/LayoutNav.vue';
import LayoutHeader from '@/components/Layout/LayoutHeader.vue';
import LayoutFixed from '@/components/Layout/LayoutFixed.vue';
import LayoutFooter from '@/components/Layout/LayoutFooter.vue';
import {useCategoryStore} from "@/stores/category"
import { onMounted } from 'vue';


const CategoryStore=useCategoryStore()
onMounted(()=> CategoryStore.getCategory())

</script>

<template>
    <LayoutFixed/>
    <LayoutNav/>
    <LayoutHeader/>
    <RouterView/> 
    <LayoutFooter/>
</template>