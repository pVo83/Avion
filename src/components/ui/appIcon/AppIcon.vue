<template>
  <svg :class="iconClass" :width="width" :height="height" aria-hidden="true">
    <use :href="`#${name}`" />
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 24,
  },
  iconClass: {
    type: String,
    default: "main-icon",
  },
})
</script>

<style lang="scss" scoped>
.main-icon {
  display: flex;
  flex-shrink: 0;
}
</style>
