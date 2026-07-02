<template>
  <ul class="footer-columns">
    <li v-for="column in footerColumns" :key="column.id" class="footer-columns__column">
      <h3 class="footer-columns__heading">{{ column.title }}</h3>
      <ul class="footer-columns__nav">
        <li v-for="link in column.links" :key="link.id" class="footer-columns__nav-item">
          <router-link class="footer-columns__nav-link" :to="link.href">
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script setup>
import { footerColumns } from "@/components/model/footerColumns"
</script>

<style lang="scss" scoped>
.footer-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @include mobile {
    grid-template-columns: repeat(2, 1fr);
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__nav-item {
    line-height: 1;
  }

  &__heading {
    color: var(--white);
    font-size: var(--fs-16);
    font-weight: 500;
    line-height: 1.5;
  }

  &__nav-link {
    color: var(--white);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.5;
    transition: color var(--trs35);

    @include hover {
      color: var(--border-dark);
    }
  }
}
</style>
