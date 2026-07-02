<template>
  <div class="site-container">
    <Header variant="inner" show-banner />
    <main class="main">
      <slot />
    </main>
    <FooterProduct />
  </div>
  <Icons />
</template>

<script setup>
import Header from "@/components/Header.vue"
import FooterProduct from "@/components/FooterProduct.vue"
import Icons from "@/assets/Icons.vue"
</script>
