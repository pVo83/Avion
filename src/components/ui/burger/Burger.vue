<template>
  <Button
    class="burger"
    variant="ghost"
    icon="Menu"
    :icon-only="true"
    :aria-label="ariaLabel"
    :aria-expanded="isOpen"
    @click="$emit('toggle')"
  />
</template>

<script setup>
import { computed } from "vue"
import Button from "@/components/ui/button/Button.vue"

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

defineEmits(["toggle"])

const ariaLabel = computed(() => (props.isOpen ? "Close menu" : "Open menu"))
</script>

<style lang="scss" scoped>
.burger {
  display: none;

  @include tablet {
    display: inline-flex;
  }
}
</style>
