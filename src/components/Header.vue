<template>
  <header class="header" :class="`header--${variant}`">
    <BannersTop v-if="showBanner" v-model="isBannerVisible" />

    <div v-if="variant === 'default'" class="container">
      <div class="header__content">
        <div class="header__top">
          <div class="header__top-left">
            <AppIcon class="header__search" name="Search" />
          </div>
          <Logo />
          <HeaderActions />
        </div>
        <div class="header__bottom">
          <Navigation :items="navigationItems" />
        </div>
      </div>
    </div>

    <template v-else-if="variant === 'about'">
      <div class="container">
        <div class="header__row">
          <Logo />
          <div class="header__row-right">
            <div class="header__nav header__nav--secondary">
              <Navigation :items="navAboutItems" />
            </div>
            <HeaderActions />
          </div>
        </div>
      </div>

      <div v-show="!isMobileMenuOpen" class="header__bottom header__bottom--muted">
        <Navigation :items="navigationItems" />
      </div>
    </template>

    <div v-else class="container">
      <div class="header__row">
        <Logo />
        <div class="header__nav">
          <Navigation :items="navigationItems" />
        </div>
        <HeaderActions />
      </div>
    </div>

    <MobileMenu :items="navigationItems" :is-open="isMobileMenuOpen" @close="closeMobileMenu" />
  </header>
</template>

<script setup>
import { ref } from "vue"
import BannersTop from "@/components/ui/banners-top/BannersTop.vue"
import Logo from "@/components/ui/logo/Logo.vue"
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
import Navigation from "@/components/ui/navigation/Navigation.vue"
import MobileMenu from "@/components/ui/mobile-menu/MobileMenu.vue"
import HeaderActions from "@/components/ui/header-actions/HeaderActions.vue"
import { navigationItems, navAboutItems } from "@/components/model/navigation"
import { useMobileMenu } from "@/composables/useMobileMenu"

defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (value) => ["default", "about", "inner"].includes(value),
  },
  showBanner: {
    type: Boolean,
    default: false,
  },
})

const isBannerVisible = ref(true)
const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu()
</script>

<style lang="scss" scoped>
.header {
  position: relative;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 132px;

    @include tablet {
      flex-direction: row;
      justify-content: space-between;
      height: 62px;
    }
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
  }

  &__top-left {
    @include tablet {
      display: none;
    }
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }

  &__row-right {
    display: flex;
    align-items: center;
    gap: 50px;

    @include tablet {
      gap: 16px;
    }
  }

  &__nav {
    @include tablet {
      display: none;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 62px;
    border-top: 1px solid var(--border-gray);

    @include tablet {
      display: none;
    }

    &--muted {
      background-color: var(--light-gray);
      border-top: none;
    }
  }

  &--about {
    .header__row {
      height: 80px;
    }

    .header__bottom {
      height: 64px;
    }
  }

  &--default {
    :deep(.header-actions) {
      gap: 16px;
    }
  }
}
</style>
