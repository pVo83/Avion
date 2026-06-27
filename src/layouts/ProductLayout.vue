<template>
  <div class="site-container">
    <HeaderProduct />
    <main class="main">
      <slot />
    </main>
    <FooterProduct />
  </div>
  <Icons />
</template>

<script setup>
import HeaderProduct from "@/components/HeaderProduct.vue"
import FooterProduct from "@/components/FooterProduct.vue"
import Icons from "@/assets/Icons.vue"
</script>
