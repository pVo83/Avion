<template>
  <section class="newsletter" :class="`newsletter--${variant}`">
    <div class="container newsletter__container">
      <div class="newsletter__content">
        <div class="newsletter__content-text">
          <h2 class="newsletter__title">Join the club and get the benefits</h2>
          <p class="newsletter__description">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up
            stores and more
          </p>
        </div>
        <Benefits v-if="isImageVariant" :benefits="benefits" />
        <Subscribe
          placeholder="your@email.com"
          buttonTitle="Sign up"
          :variant-input="isImageVariant ? 'white' : 'light-gray'"
        />
      </div>
      <AppImage
        v-if="isImageVariant"
        class="newsletter__image"
        :webp-src="publicUrl(`img/newsletter/newsletter.webp`)"
        :src="publicUrl(`img/newsletter/newsletter.jpg`)"
        alt="Newsletter"
        width="1440"
        height="444"
      />
    </div>
  </section>
</template>

<script setup>
import Benefits from "@/components/ui/benefit/Benefits.vue"
import AppImage from "@/components/ui/appImage/AppImage.vue"
import { publicUrl } from "@/utils/publicUrl"
import Subscribe from "@/components/ui/subscribe/Subscribe.vue"
import { computed } from "vue"
import { benefits } from "@/components/model/benefits"

const props = defineProps({
  variant: {
    type: String,
    default: "image",
    validator: (value) => ["image", "cart"].includes(value),
  },
})

const isImageVariant = computed(() => props.variant === "image")
</script>

<style lang="scss" scoped>
.newsletter {
  position: relative;

  &__container {
    position: relative;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: clamp(20px, 3vw, 30px);
    max-width: 560px;
  }

  &__content-text {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 12px;

    @include small-tablet {
      text-align: left;
    }
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
    line-height: 1.5;
  }

  &--image {
    .newsletter__container {
      height: clamp(300px, 127vw, 450px);
      padding: 0;
      overflow: hidden;
    }

    .newsletter__image {
      position: absolute;
      inset: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
    }

    .newsletter__content {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      padding: 0 20px;
      transform: translate(-50%, -50%);

      @include tablet {
        padding: 0 var(--container-offset);
      }

      @include small-tablet {
        gap: clamp(16px, 4vw, 24px);
      }
    }
  }

  &--card {
    padding: clamp(32px, 5vw, 52px) 0 clamp(40px, 6vw, 65px);
    background-color: var(--light-gray);

    .newsletter__container {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: clamp(32px, 6vw, 64px) var(--container-offset);
      background-color: var(--white);
    }

    .newsletter__content {
      gap: clamp(32px, 8vw, 70px);
      max-width: 560px;
    }

    .newsletter__title,
    .newsletter__description {
      color: var(--dark-primary);
    }
  }
}
</style>
