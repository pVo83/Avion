<template>
  <div v-if="modelValue" class="banners-top">
    <div class="banners-top__content">
      <AppIcon name="Delivery" width="20" height="20" />

      <span class="banners-top__text">
        Free delivery on all orders over £50 with code easter checkout
      </span>
    </div>

    <Button class="banners-top__button" width="18" height="18" icon="Close" :icon-only="true" @click="closeBanner" />
  </div>
</template>

<script setup>
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
import Button from "@/components/ui/button/Button.vue"
defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(["update:modelValue"])

const closeBanner = () => {
  emit("update:modelValue", false)
}
</script>

<style lang="scss" scoped>
.banners-top {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  gap: 16px;
  background-color: var(--dark-primary);

  &__content {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
    color: var(--white);
    gap: 16px;
  }

  &__text {
    display: flex;
    align-items: center;
    font-size: var(--fs-14);
    font-weight: 400;
  }

  &__button {
    color: white;
  }
}
</style>
