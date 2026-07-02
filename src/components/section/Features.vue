<template>
  <section class="features">
    <div class="container">
      <div class="features__content">
        <span class="features__subtitle">What makes our brand different</span>

        <ul class="features__list">
          <li v-for="feature in features" :key="feature.id" class="features__item">
            <div class="features__item-icon">
              <AppIcon width="24" height="24" :name="feature.icon" />
            </div>
            <h3 class="features__item-title">{{ feature.title }}</h3>
            <p class="features__item-description">{{ feature.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
const features = [
  {
    id: 1,
    icon: "Delivery",
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard",
  },
  {
    id: 2,
    icon: "Checkmark",
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftsmanship",
  },
  {
    id: 3,
    icon: "Purchase",
    title: "Unbeatable prices",
    description: "For our materials and quality you won’t find better prices anywhere",
  },
  {
    id: 4,
    icon: "Sprout",
    title: "Recycled packaging",
    description: "We use 100% recycled to ensure our footprint is more manageable",
  },
]
</script>

<style lang="scss" scoped>
.features {
  padding: clamp(40px, 6vw, 80px) 0;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  &__subtitle {
    color: var(--dark-primary);
    font-size: var(--fs-24);
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 100%;

    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }

    @include small-tablet {
      grid-template-columns: 1fr;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: clamp(24px, 3.3vw, 48px);
    background-color: var(--light-gray);
  }

  &__item-icon {
    margin: 0 0 12px;
  }

  &__item-title {
    margin: 0 0 25px;
    color: var(--dark-primary);
    font-size: var(--fs-20);
    font-weight: 400;
    line-height: 1.4;
  }

  &__item-description {
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.5;
  }
}
</style>
