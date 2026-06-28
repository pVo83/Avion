<!-- <template>
  <section class="newsletter">
    <div class="container newsletter__container">
      <div class="newsletter__content">
        <div class="newsletter__content-text">
          <h2 class="newsletter__title">Join the club and get the benefits</h2>
          <p class="newsletter__description">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up
            stores and more
          </p>
        </div>
        <Benefits :benefits="benefits" />
        <Subscribe placeholder="your@email.com" buttonTitle="Sign up" />
      </div>
      <AppImage
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

const benefits = [
  {
    id: 1,
    icon: "Checkmark-filled",
    title: "Exclusive offers",
  },
  {
    id: 2,
    icon: "Checkmark-filled",
    title: "Exclusive offers",
  },
  {
    id: 3,
    icon: "Checkmark-filled",
    title: "Exclusive offers",
  },
]
</script>

<style lang="scss" scoped>
.newsletter {
  position: relative;

  &__container {
    width: 100%;
    max-width: 1440px;
    height: 444px;
    margin: 0 auto;
    padding: 0;
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    transform: translate(-50%, -50%);
    gap: 30px;
    max-width: 510px;
  }

  &__title {
    color: var(--white);
    font-size: var(--fs-32);
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
  }

  &__description {
    color: var(--white);
    font-size: var(--fs-18);
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
  }
}
</style> -->

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
    tupe: String,
    dafault: "image",
    validator: (value) => ["image", "cart"].includes(value),
  },
})

const isImageVariant = computed(() => props.variant === "image")
</script>

<style lang="scss" scoped>
.newsletter {
  position: relative;

  &__container {
    width: 100%;
    max-width: 1440px;
    height: 444px;
    margin: 0 auto;
    padding: 0;
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
    transform: translate(-50%, -50%);
    gap: 30px;
    max-width: 560px;
  }

  &__content-text {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 12px;

    @include mobile {
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

  &--card {
    padding: 52px 0 65px;
    background-color: var(--light-gray);

    .newsletter__container {
      display: flex;
      justify-content: center;
      padding: 64px;
      background-color: var(--white);
    }

    .newsletter__content {
      position: absolute;
      gap: 70px;
    }

    .newsletter__title,
    .newsletter__description {
      color: var(--dark-primary);
    }
  }
}
</style>
