<template>
  <div class="site-container">
    <Header />
    <main class="main">
      <slot />
    </main>
    <Footer />
    <Icons />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Icons from "@/assets/Icons.vue"
</script>
