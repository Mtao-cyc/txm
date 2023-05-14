<script setup>
import HomeCategory from '@/components/Home/HomeCategory.vue'
import HomeBanner from '@/components/Home/HomeBanner.vue'
import HomeNew from '@/components/Home/HomeNew.vue'
import HomeHot from '@/components/Home/HomeHot.vue'
import HomeProduct from '@/components/Home/HomeProduct.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
</template>