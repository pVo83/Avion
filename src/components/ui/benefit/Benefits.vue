<template>
  <div class="benefits">
    <ul class="benefits__list">
      <li v-for="benefit in benefits" :key="benefit.id" class="benefits__item">
        <div class="benefits__item-icon">
          <AppIcon width="16" height="16" :name="benefit.icon" />
        </div>
        <span class="benefits__item-title">{{ benefit.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"

defineProps({
  benefits: {
    type: Array,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.benefits {
  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px 35px;

    @include mobile {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__item-title {
    color: var(--white);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.5;
  }
}
</style>
