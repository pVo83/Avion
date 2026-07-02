<template>
  <div class="site-container">
    <Header variant="inner" />
    <main class="main">
      <slot />
    </main>
    <Footer variant="default" />
  </div>
  <Icons />
</template>

<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import Icons from "@/assets/Icons.vue"
</script>
