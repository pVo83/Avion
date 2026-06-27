<template>
  <div class="site-container">
    <HeaderProducts />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
  <Icons />
</template>

<script setup>
import HeaderProducts from "@/components/HeaderProducts.vue"
import Footer from "@/components/Footer.vue"
import Icons from "@/assets/Icons.vue"
</script>
