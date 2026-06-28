<template>
  <section class="about-story">
    <div class="container">
      <div class="about-story__content">
        <ul class="about-story__list">
          <li
            v-for="story in aboutStorys"
            :key="story.id"
            class="about-story__item"
            :class="{ 'about-story__item--reverse': story.id === 2 }"
          >
            <div class="about-story__item-info">
              <div class="about-story__item-info-content">
                <h2 class="about-story__title">{{ story.title }}</h2>
                <div class="about-story__descr">
                  <p v-for="description in story.descriptions" :key="description">
                    {{ description }}
                  </p>
                </div>
              </div>
              <Button
                class="about-story__button"
                title="Get in touch"
                size="medium"
                variant="secondary"
              />
            </div>
            <div class="about-story__item-image">
              <AppImage
                class="about-story__image"
                :webp-src="publicUrl(`img/about-story/${story.image}.webp`)"
                :src="publicUrl(`img/about-story/${story.image}.jpg`)"
                alt="About Story"
                width="720"
                height="600"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue"
import AppImage from "@/components/ui/appImage/AppImage.vue"
import { publicUrl } from "@/utils/publicUrl"
import { aboutStorys } from "@/components/model/aboutStorys"
</script>

<style lang="scss" scoped>
.about-story {
  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
  }

  &__list {
    display: flex;
    flex-direction: column;
  }

  &__title {
    color: var(--dark-primary);
    font-size: var(--fs-24);
    font-weight: 400;
    line-height: 1.4;
  }

  &__item {
    display: flex;
    flex-direction: row;

    &--reverse {
      flex-direction: row-reverse;
    }

    @include small-tablet {
      flex-direction: column;

      &--reverse {
        flex-direction: column-reverse;
      }
    }
  }

  &__item-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    padding: clamp(32px, 4.9vw, 70px) clamp(20px, 7vw, 100px);
    gap: 20px;

    @include small-tablet {
      width: 100%;
      padding: 32px 20px;
    }
  }

  &__item-info-content {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__descr {
    display: flex;
    flex-direction: column;
    gap: 16px;
    color: var(--primary-secondary);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.4;
  }

  &__item-image {
    width: 50%;

    @include small-tablet {
      width: 100%;
      height: clamp(220px, 77vw, 590px);
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
