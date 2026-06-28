<template>
  <Button
    class="burger"
    variant="ghost"
    icon="Menu"
    :icon-only="true"
    aria-label="Open menu"
    aria-expanded="false"
    @click="$emit('toggle')"
  />
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue"

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

defineEmits(["toggle"])
</script>

<style lang="scss" scoped>
.burger {
  display: none;

  @include tablet {
    display: inline-flex;
  }
}
</style>
