<template>
  <div class="header-actions">
    <AppIcon class="header-actions__icon" name="Search" />
    <Button
      variant="inverse"
      size="medium"
      icon-only
      icon="Cart"
      aria-label="Open shopping cart"
      @click="router.push('/shopping-basket')"
    />
    <AppIcon class="header-actions__icon" name="User-avatar" />
    <Burger :is-open="isMobileMenuOpen" @toggle="toggleMobileMenu" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
import Button from "@/components/ui/button/Button.vue"
import Burger from "@/components/ui/burger/Burger.vue"
import { useMobileMenu } from "@/composables/useMobileMenu"

const router = useRouter()
const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu()
</script>

<style lang="scss" scoped>
.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;

  &__icon {
    @include tablet {
      display: none;
    }
  }
}
</style>
