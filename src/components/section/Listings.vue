<template>
  <section class="listings">
    <div class="container listings__container">
      <h2 v-if="title" class="listings__title">{{ title }}</h2>
      <div class="listings__content">
        <ul class="listings__list">
          <li v-for="listing in listings" :key="listing.id" class="listings__item">
            <ProductCard :product="listing" />
          </li>
        </ul>
        <Button
          class="listings__button"
          title="View collection"
          size="medium"
          variant="secondary"
          @click="router.push('/products')"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue"
import ProductCard from "@/components/ui/product-card/ProductCard.vue"
import { listings } from "@/components/model/listings"
import { useRouter } from "vue-router"

defineProps({
  title: {
    type: String,
    default: "",
  },
})

const router = useRouter()
</script>

<style lang="scss" scoped>
.listings {
  padding: 30px 0 40px;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__title {
    color: var(--dark-primary);
    font-size: var(--fs-32);
    font-weight: 400;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>
