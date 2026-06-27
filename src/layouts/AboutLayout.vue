<template>
  <div class="site-container">
    <HeaderAbout />
    <main class="main">
      <slot />
    </main>
    <Footer />
  </div>
  <Icons />
</template>

<script setup>
import HeaderAbout from "@/components/HeaderAbout.vue"
import Footer from "@/components/Footer.vue"
import Icons from "@/assets/Icons.vue"
</script>
