<template>
  <div class="product-description">
    <span class="product-description__title">Description</span>
    <p class="product-description__text">{{ description }}</p>

    <ul v-if="features.length" class="product-description__list">
      <li v-for="feature in features" :key="feature" class="product-description__item">
        {{ feature }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  description: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
.product-description {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 500;
    line-height: 1.4;
  }

  &__text,
  &__item {
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.5;
  }

  &__list {
    padding-left: 20px;
    list-style: disc;
  }

  &__item {
    display: list-item;
    list-style: disc;
  }
}
</style>
