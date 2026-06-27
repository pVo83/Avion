<template>
  <div v-if="modelValue" class="banners-top">
    <div class="banners-top__content">
      <AppIcon name="Delivery" width="16" height="16" />

      <span class="banners-top__text">
        Free delivery on all orders over £50 with code easter checkout
      </span>
    </div>

    <button class="banners-top__button" @click="closeBanner">
      <AppIcon name="Close" width="16" height="16" />
    </button>
  </div>
</template>

<script setup>
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"

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
  padding: 0 16px;
  background-color: var(--dark-primary);

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    margin: 0 auto;
    color: var(--white);
    gap: 10px;
  }

  &__text {
    display: flex;
    align-items: center;
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.5;
  }

  &__button {
    color: white;
  }
}
</style>
