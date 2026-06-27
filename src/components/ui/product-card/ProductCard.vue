<template>
  <router-link :to="`/product/${product.id}`" class="product-card">
    <AppImage
      class="product-card__image"
      :webp-src="publicUrl(`img/listings/${product.image}.webp`)"
      :src="publicUrl(`img/listings/${product.image}.jpg`)"
      :alt="product.name"
      width="305"
      height="375"
    />

    <div class="product-card__details">
      <div class="product-card__name">{{ product.name }}</div>
      <span class="product-card__price">€ {{ product.price }}</span>
    </div>
  </router-link>
</template>

<script setup>
import AppImage from "@/components/ui/appImage/AppImage.vue"
import { publicUrl } from "@/utils/publicUrl"

defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 16px;

  &:hover {
    .product-card__image::before {
      background-color: rgb(0 0 0 / 10%);
    }
  }

  &__image {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      background-color: transparent;
      transition: background-color var(--trs35);
      pointer-events: none;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__name {
    color: var(--dark-primary);
    font-size: var(--fs-20);
    font-weight: 400;
    line-height: 1.4;
  }

  &__price {
    color: var(--dark-primary);
    font-size: var(--fs-18);
    font-weight: 400;
    line-height: 1.5;
  }
}
</style>
