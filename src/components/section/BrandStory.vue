<template>
  <section class="brand-story">
    <div class="container">
      <div class="brand-story__content">
        <div class="brand-story__item brand-story__item--left">
          <div class="brand-story__item">
            <div class="brand-story__item-text">
              <h2 class="brand-story__title">It started with a small idea</h2>
              <p class="brand-story__description">
                A global brand with local beginnings, our story begain in a small studio in South
                London in early 2014
              </p>
            </div>
            <Button
              class="brand-story__button"
              title="View collection"
              size="medium"
              variant="inverse"
            />
          </div>
        </div>
        <div class="brand-story__item">
          <AppImage
            class="brand-story__image"
            :webp-src="publicUrl(`img/brand-story/brand-story.webp`)"
            :src="publicUrl(`img/brand-story/brand-story.jpg`)"
            alt="Brand Story"
            width="570"
            height="700"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue"
import AppImage from "@/components/ui/appImage/AppImage.vue"
import { publicUrl } from "@/utils/publicUrl"
</script>

<style lang="scss" scoped>
.brand-story {
  padding: 60px 0;

  &__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    &--left {
      padding: 64px;
      background-color: var(--dark-primary);
    }
  }

  &__item-text {
    display: flex;
    flex-direction: column;
    gap: 10px;
    line-height: 1;
  }

  &__title {
    color: var(--white);
    font-size: var(--fs-32);
    font-weight: 400;
    line-height: 1.4;
  }

  &__description {
    color: var(--white);
    font-size: var(--fs-18);
    font-weight: 400;
  }
}
</style>
