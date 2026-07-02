<template>
  <main class="products">
    <div class="products__header">
      <h1 class="products__title">View all products</h1>
    </div>
    <div class="container products__container">
      <div class="products__content">
        <div class="products__catalog">
          <ProductFilters />
          <ul class="products__list">
            <li v-for="product in allListings" :key="product.id" class="products__item">
              <ProductCard :product="product" />
            </li>
          </ul>
        </div>
        <Button
          class="products__button"
          title="View collection"
          size="medium"
          variant="secondary"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import ProductCard from "@/components/ui/product-card/ProductCard.vue"
import Button from "@/components/ui/button/Button.vue"
import ProductFilters from "@/components/ui/product-filters/ProductFilters.vue"
import { allListings } from "@/components/model/listings"
</script>

<style lang="scss" scoped>
.products {
  padding: 0 0 clamp(28px, 3.5vw, 50px);

  &__container {
    display: flex;
    flex-direction: column;
    gap: clamp(32px, 4.2vw, 60px);
    align-items: center;
  }

  &__header {
    display: flex;
    flex-direction: column;
    padding: clamp(32px, 5.5vw, 80px) var(--container-offset);
    background-color: var(--light-gray);
    gap: 20px;
    text-align: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: clamp(32px, 4.2vw, 60px);
    width: 100%;
  }

  &__catalog {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @include small-tablet {
      gap: 0;
    }
  }

  &__title {
    color: var(--dark-primary);
    font-size: var(--fs-36);
    font-weight: 400;
    line-height: 1.4;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 48px 20px;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include small-tablet {
      grid-template-columns: 1fr;
    }
  }

  &__item {
    container-type: inline-size;
  }

  &__button {
    align-self: center;
  }
}
</style>
