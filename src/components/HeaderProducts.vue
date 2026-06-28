<template>
  <div class="header-products">
    <div class="container">
      <div class="header-products__content">
        <Logo />
        <div class="header-products__nav">
          <Navigation :items="navigationItems" />
        </div>
        <div class="header-products__actions">
          <AppIcon class="header-products__icon" name="Search" />
          <Button
            variant="inverse"
            size="medium"
            icon-only
            icon="Cart"
            @click="router.push('/shopping-basket')"
          />
          <AppIcon class="header-products__icon" name="User-avatar" />
          <Burger :is-open="isMobileMenuOpen" @toggle="toggleMobileMenu" />
        </div>
      </div>
    </div>

    <MobileMenu :items="navigationItems" :is-open="isMobileMenuOpen" @close="closeMobileMenu" />
  </div>
</template>

<script setup>
import Navigation from "@/components/ui/navigation/Navigation.vue"
import MobileMenu from "@/components/ui/mobile-menu/MobileMenu.vue"
import { navigationItems } from "@/components/model/navigation"
import { useMobileMenu } from "@/composables/useMobileMenu"
import Logo from "@/components/ui/logo/Logo.vue"
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
import { useRouter } from "vue-router"
import Button from "@/components/ui/button/Button.vue"
import Burger from "@/components/ui/burger/Burger.vue"

const router = useRouter()
const { isMobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useMobileMenu()
</script>

<style lang="scss" scoped>
.header-products {
  position: relative;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }

  &__nav {
    @include tablet {
      display: none;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__icon {
    @include tablet {
      display: none;
    }
  }
}
</style>
