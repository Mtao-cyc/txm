<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import {  } from 'vue-router'
import {  } from 'vue'
</script>

<template>
    <LayoutNav/>
    <LayoutHeader/>
    <RouterView/>
    <LayoutFooter/>
</template>