<template>
  <nav>
    <ul class="navigation__list">
      <li v-for="item in items" :key="item.id" class="navigation__item">
        <router-link class="navigation__link" :to="item.href">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.navigation {
  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 44px;
  }

  &__link {
    color: var(--dark-primary);
    font-size: 16px;
    font-weight: 400;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary);
    }
  }
}
</style>
