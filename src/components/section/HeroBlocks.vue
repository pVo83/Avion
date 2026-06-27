<template>
  <section class="hero-blocks">
    <div class="hero-blocks__content">
      <AppImage
        class="hero-blocks__picture"
        img-class="hero-blocks__image"
        :webp-src="publicUrl(`img/hero/hero_blocks.webp`)"
        :src="publicUrl(`img/hero/hero_blocks.jpg`)"
        alt="Hero Blocks"
        width="1440"
        height="704"
      />

      <div class="hero-blocks__content-text">
        <h1 class="hero-blocks__title">
          Luxury homeware for people who love timeless design quality
        </h1>
        <span class="hero-blocks__subtitle">Shop the new Spring 2022 collection today</span>

        <Button
          class="hero-blocks__button"
          title="View collection"
          size="medium"
          variant="secondary"
        />
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
.hero-blocks {
  &__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    height: 704px;
    margin: 0 auto;
  }

  &__title {
    color: var(--dark-primary);
    font-size: var(--fs-32);
    font-weight: 400;
    line-height: 1.4;
  }

  &__subtitle {
    color: var(--dark-primary);
    font-size: var(--fs-18);
    font-weight: 400;
    line-height: 1.5;
  }

  &__picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content-text {
    position: absolute;
    top: 50%;
    right: 80px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 630px;
    height: 444px;
    padding: 40px;
    background-color: var(--white);
    transform: translateY(-50%);
  }

  &__button {
    margin-top: auto;
  }
}
</style>
