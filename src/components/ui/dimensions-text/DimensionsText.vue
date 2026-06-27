<template>
  <div class="dimensions-text">
    <span class="dimensions-text__name">Dimensions:</span>
    <ul class="dimensions-text__list">
      <li v-for="dimension in dimensions" :key="dimension.id" class="dimensions-text__item">
        <span class="dimensions-text__label">{{ dimension.label }}</span>
        <span class="dimensions-text__value">{{ dimension.value }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  dimensions: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.dimensions-text {
  display: flex;
  flex-direction: column;
  gap: 28px;

  &__name {
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 500;
  }

  &__label {
    color: var(--dark-primary);
    font-size: var(--fs-14);
    font-weight: 400;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 57px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__value {
    color: var(--gray-secondary);
    font-size: var(--fs-16);
    font-weight: 400;
  }
}
</style>
