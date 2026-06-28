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
    justify-content: center;
    gap: 44px;

    @include tablet {
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
  }

  &__link {
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    transition: color 0.3s ease;

    @include hover {
      color: var(--primary);
    }
  }
}
</style>
