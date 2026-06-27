<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__top">
          <div class="header__top-left">
            <AppIcon name="Search" />
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
            <AppIcon name="User-avatar" />
          </div>
        </div>
        <div class="header__bottom">
          <Navigation :items="navigationItems" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from "@/components/ui/logo/Logo.vue"
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
import Navigation from "@/components/ui/navigation/Navigation.vue"
import { navigationItems } from "@/components/model/navigation"
import { useRouter } from "vue-router"
import Button from "@/components/ui/button/Button.vue"
const router = useRouter()
</script>

<style lang="scss" scoped>
.header {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 132px;
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
  }

  &__top-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
</style>
