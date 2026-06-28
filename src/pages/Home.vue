<template>
  <main class="home">
    <Hero />
    <Features />
    <Listings />
    <BrandStory />
    <Newsletter variant="image" />
  </main>
</template>

<script setup>
import Hero from "@/components/section/Hero.vue"
import Features from "@/components/section/Features.vue"
import Listings from "@/components/section/Listings.vue"
import BrandStory from "@/components/section/BrandStory.vue"
import Newsletter from "@/components/section/Newsletter.vue"
</script>

<style lang="scss" scoped>
// Home
</style>
