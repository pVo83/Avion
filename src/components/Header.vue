<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__top">
          <div class="header__top-left">
            <AppIcon class="header__search" name="Search" />
          </div>
          <Logo />

          <div class="header__top-right">
            <Button
              variant="inverse"
              size="medium"
              icon-only
              icon="Cart"
              @click="router.push('/shopping-basket')"
            />
            <AppIcon class="header__user" name="User-avatar" />
            <Burger :is-open="isMobileMenuOpen" @toggle="toggleMobileMenu" />
          </div>
        </div>
        <div class="header__bottom">
          <Navigation :items="navigationItems" />
        </div>
      </div>
    </div>

    <MobileMenu :items="navigationItems" :is-open="isMobileMenuOpen" @close="closeMobileMenu" />
  </header>
</template>

<script setup>
import Logo from "@/components/ui/logo/Logo.vue"
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
import Navigation from "@/components/ui/navigation/Navigation.vue"
import MobileMenu from "@/components/ui/mobile-menu/MobileMenu.vue"
import { navigationItems } from "@/components/model/navigation"
import { useMobileMenu } from "@/composables/useMobileMenu"
import { useRouter } from "vue-router"
import Button from "@/components/ui/button/Button.vue"
import Burger from "@/components/ui/burger/Burger.vue"

const router = useRouter()
const { isMobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useMobileMenu()
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
  }

  &__top-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__top-left {
    @include tablet {
      display: none;
    }
  }

  &__user {
    @include tablet {
      display: none;
    }
  }
}
</style>
