<template>
  <div class="header-products">
    <div class="container">
      <div class="header-products__content">
        <Logo />
        <Navigation :items="navigationItems" />
        <div class="header-products__actions">
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
</template>

<script setup>
import Navigation from "@/components/ui/navigation/Navigation.vue"
import { navigationItems } from "@/components/model/navigation"
import Logo from "@/components/ui/logo/Logo.vue"
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
import { useRouter } from "vue-router"
import Button from "@/components/ui/button/Button.vue"

const router = useRouter()
</script>

<style lang="scss" scoped>
.header-products {
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>
