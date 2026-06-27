<template>
  <div class="app-image">
    <picture class="app-image__picture" :class="pictureClass">
      <source v-if="webpSrc" :srcset="webpSrc" type="image/webp" />
      <img
        class="app-image__image"
        :class="imgClass"
        :src="src"
        :alt="alt"
        :width="width"
        :height="height"
        :loading="loading"
        :decoding="decoding"
      />
    </picture>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  webpSrc: {
    type: String,
    default: "",
  },
  alt: {
    type: String,
    default: "",
  },
  pictureClass: {
    type: String,
    default: "",
  },
  imgClass: {
    type: String,
    default: "",
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
  loading: {
    type: String,
    default: "lazy",
    validator: (value) => ["eager", "lazy"].includes(value),
  },
  decoding: {
    type: String,
    default: "async",
    validator: (value) => ["sync", "async", "auto"].includes(value),
  },
})
</script>

<style lang="scss" scoped>
.app-image {
  display: block;
  width: 100%;
  height: 100%;

  &__picture,
  &__image {
    display: block;
    width: 100%;
    height: 100%;
  }

  &__image {
    object-fit: cover;
  }
}
</style>
