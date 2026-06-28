<template>
  <div class="header-about">
    <BannersTop v-model="isBannerVisible" />
    <div class="container">
      <div class="header-about__top">
        <Logo />
        <div class="header-about__top-right">
          <div class="header-about__nav">
            <Navigation :items="navAboutItems" />
          </div>
          <div class="header-about__actions">
            <AppIcon class="header-about__icon" name="Search" />
            <Button
              variant="inverse"
              size="medium"
              icon-only
              icon="Cart"
              @click="router.push('/shopping-basket')"
            />
            <AppIcon class="header-about__icon" name="User-avatar" />
            <Burger :is-open="isMobileMenuOpen" @toggle="toggleMobileMenu" />
          </div>
        </div>
      </div>
    </div>

    <div class="header-about__bottom" :class="{ 'header-about__bottom--hidden': isMobileMenuOpen }">
      <Navigation :items="navigationItems" />
    </div>

    <MobileMenu :items="navigationItems" :is-open="isMobileMenuOpen" @close="closeMobileMenu" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import BannersTop from "@/components/ui/banners-top/BannersTop.vue"
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
const isBannerVisible = ref(true)
const { isMobileMenuOpen, closeMobileMenu, toggleMobileMenu } = useMobileMenu()

const navAboutItems = [
  { id: 1, title: "About us", href: "/about" },
  { id: 2, title: "Contact", href: "/contacts" },
  { id: 3, title: "Blog", href: "/blog" },
]
</script>

<style lang="scss" scoped>
.header-about {
  position: relative;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }

  &__top-right {
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

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    background-color: var(--light-gray);

    @include tablet {
      display: none;
    }
  }
}
</style>
