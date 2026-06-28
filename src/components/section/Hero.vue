<template>
  <section class="hero">
    <div class="hero__content">
      <AppImage
        class="hero__picture"
        img-class="hero__image"
        :webp-src="publicUrl(`img/hero/hero_blocks.webp`)"
        :src="publicUrl(`img/hero/hero_blocks.jpg`)"
        alt="Hero Blocks"
        width="1440"
        height="704"
      />

      <div class="hero__info">
        <div class="hero__text">
          <h1 class="hero__title">Luxury homeware for people who love timeless design quality</h1>
          <span class="hero__subtitle">Shop the new Spring 2022 collection today</span>
        </div>

        <Button class="hero__button" title="View collection" size="medium" variant="secondary" />
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
.hero {
  &__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1440px;
    height: clamp(320px, 49vw, 704px);
    margin: 0 auto;

    @include small-tablet {
      flex-direction: column;
      height: auto;
    }
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

    @include small-tablet {
      height: clamp(200px, 49vw, 376px);
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    position: absolute;
    top: 50%;
    right: clamp(20px, 5.5vw, 80px);
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: clamp(280px, 44vw, 630px);
    height: auto;
    min-height: clamp(200px, 31vw, 444px);
    padding: clamp(20px, 2.8vw, 40px);
    background-color: var(--white);
    transform: translateY(-50%);

    @include small-tablet {
      position: static;
      width: 100%;
      min-height: unset;
      padding: 28px 20px;
      transform: none;
      gap: 20px;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__button {
    margin-top: auto;

    @include small-tablet {
      margin-top: 24px;
    }
  }
}
</style>
