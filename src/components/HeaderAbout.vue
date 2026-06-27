<template>
  <div class="header-about">
    <BannersTop v-model="isBannerVisible" />
    <div class="container">
      <div class="header-about__top">
        <Logo />
        <div class="header-about__top-right">
          <Navigation :items="navAboutItems" />
          <div class="header-about__actions">
            <AppIcon name="Search" />
            <Button
              variant="inverse"
              size="medium"
              icon-only
              icon="Cart"
              @click="router.push('/shopping-basket')"
            />
            <AppIcon name="User-avatar" />
          </div>
        </div>
      </div>
    </div>
    <div class="header-about__bottom">
      <Navigation :items="navigationItems" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import BannersTop from "@/components/ui/banners-top/BannersTop.vue"
import Navigation from "@/components/ui/navigation/Navigation.vue"
import { navigationItems } from "@/components/model/navigation"
import Logo from "@/components/ui/logo/Logo.vue"
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
import { useRouter } from "vue-router"
import Button from "@/components/ui/button/Button.vue"

const router = useRouter()
const isBannerVisible = ref(true)

const navAboutItems = [
  {
    id: 1,
    title: "About us",
    href: "/about",
  },
  {
    id: 2,
    title: "Contact",
    href: "/contacts",
  },
  {
    id: 3,
    title: "Blog",
    href: "/blog",
  },
]
</script>

<style lang="scss" scoped>
.header-about {
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
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 64px;
    background-color: var(--light-gray);
  }
}
</style>
