<template>
  <div class="social">
    <ul class="social__list">
      <li v-for="social in socials" :key="social.id" class="social__item">
        <router-link :to="social.href" class="social__link">
          <AppIcon :name="social.name" width="24" height="24" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"

defineProps({
  socials: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.social {
  &__list {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__link {
    color: var(--white);
    transition: color var(--trs35);

    &:hover {
      color: var(--border-dark);
    }
  }
}
</style>
