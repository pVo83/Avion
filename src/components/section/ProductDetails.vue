<!-- <template>
  <section class="product-details">
    <div class="container container--large">
      <div class="product-details__content">
        <div class="product-details__item">
          <div class="product-details__item-image">
            <AppImage
              class="product-details__image"
              :webp-src="publicUrl(`img/listings/${product.image}.webp`)"
              :src="publicUrl(`img/listings/${product.image}.jpg`)"
              :alt="product.name"
              width="720"
              height="760"
            />
          </div>

          <div class="product-details__info">
            <router-link class="product-details__back" to="/products">
              <AppIcon name="arrow-left" width="16" height="16" />
              Back to collection
            </router-link>
            <h1 class="product-details__title">{{ product.name }}</h1>
            <span class="product-details__price">€ {{ product.price }}</span>

            <div class="product-details__body">
              <ProductDescription :description="product.description" :features="product.features" />
              <DimensionsText :dimensions="product.dimensions" />
              <Amount :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppImage from "@/components/ui/appImage/AppImage.vue"
import { publicUrl } from "@/utils/publicUrl"
import Amount from "@/components/ui/amount/Amount.vue"
import DimensionsText from "@/components/ui/dimensions-text/DimensionsText.vue"
import ProductDescription from "@/components/ui/product-description/ProductDescription.vue"
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"

defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.product-details {
  &__item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  &__item-image {
    width: 720px;
    height: 760px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 100px;
  }

  &__back {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    color: var(--primary);
    font-size: var(--fs-14);
    transition: color var(--trs35);

    &:hover {
      color: var(--dark-primary);
    }
  }

  &__title {
    margin-top: 8px;
    color: var(--dark-primary);
    font-size: var(--fs-36);
    font-weight: 400;
    line-height: 1.2;
  }

  &__price {
    margin-top: 16px;
    color: var(--dark-primary);
    font-size: var(--fs-24);
    font-weight: 400;
    line-height: 1.4;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 36px;
    margin-top: 54px;
  }
}

.container--large {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
}
</style> -->

<template>
  <section class="product-details">
    <div class="container container--large">
      <div class="product-details__content">
        <div class="product-details__item">
          <div class="product-details__item-image">
            <AppImage
              class="product-details__image"
              :webp-src="publicUrl(`img/listings/${product.image}.webp`)"
              :src="publicUrl(`img/listings/${product.image}.jpg`)"
              :alt="product.name"
              width="720"
              height="760"
            />
          </div>

          <div class="product-details__info">
            <router-link class="product-details__back" to="/products">
              <AppIcon name="arrow-left" width="16" height="16" />
              Back to collection
            </router-link>
            <h1 class="product-details__title">{{ product.name }}</h1>
            <span class="product-details__price">€ {{ product.price }}</span>

            <div class="product-details__body">
              <ProductDescription :description="product.description" :features="product.features" />
              <DimensionsText :dimensions="product.dimensions" />
              <Amount :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppImage from "@/components/ui/appImage/AppImage.vue"
import { publicUrl } from "@/utils/publicUrl"
import Amount from "@/components/ui/amount/Amount.vue"
import DimensionsText from "@/components/ui/dimensions-text/DimensionsText.vue"
import ProductDescription from "@/components/ui/product-description/ProductDescription.vue"
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"

defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.product-details {
  &__item {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @include small-tablet {
      grid-template-columns: 1fr;
    }
  }

  &__item-image {
    width: 100%;
    max-width: 720px;
    height: clamp(320px, 52.8vw, 760px);
    overflow: hidden;

    @include small-tablet {
      max-width: 100%;
      height: inherit;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px clamp(16px, 3vw, 60px);

    @include small-tablet {
      padding: 28px 0;
    }
  }

  &__back {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    color: var(--primary);
    font-size: var(--fs-14);
    transition: color var(--trs35);

    @include hover {
      color: var(--dark-primary);
    }
  }

  &__title {
    margin-top: 8px;
    color: var(--dark-primary);
    font-size: var(--fs-36);
    font-weight: 400;
    line-height: 1.2;
  }

  &__price {
    margin-top: 16px;
    color: var(--dark-primary);
    font-size: var(--fs-24);
    font-weight: 400;
    line-height: 1.4;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 36px;
    margin-top: 54px;

    @include small-tablet {
      margin-top: 32px;
      gap: 24px;
    }
  }
}

.container--large {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
}
</style>
