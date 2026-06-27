<template>
  <section class="product-page">
    <ProductDetails v-if="product" :product="product" />
    <p v-else class="product-page__not-found">Product not found</p>

    <Listings class="product-page__listings" title="You might also like" />
    <Features class="product-page__features" />
    <Newsletter class="product-page__newsletter" variant="card" />
  </section>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"
import { listings } from "@/components/model/listings"
import ProductDetails from "@/components/section/ProductDetails.vue"
import Listings from "@/components/section/Listings.vue"
import Features from "@/components/section/Features.vue"
import Newsletter from "@/components/section/Newsletter.vue"

const route = useRoute()

const product = computed(() => {
  return listings.find((listing) => listing.id === Number(route.params.id))
})
</script>

<style lang="scss" scoped>
.product-page {
  &__not-found {
    padding: 80px 0;
    color: var(--dark-primary);
    font-size: var(--fs-24);
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
  }

  &__listings {
    padding: 80px 0 55px;
  }

  &__features {
    padding: 60px 0 80px;
  }

  &__newsletter {
    padding: 50px 0 60px;
  }
}
</style>
