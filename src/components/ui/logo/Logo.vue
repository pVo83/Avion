<template>
  <div class="logo">
    <router-link class="logo__link" :class="{ 'logo__link--white': isWhite }" to="/">
      <svg class="logo__icon" :class="`logo__icon--${size}`">
        <use href="#Logo" />
      </svg>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  isWhite: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "small",
    validator: (value) => ["small", "medium"].includes(value),
  },
})
</script>

<style lang="scss" scoped>
.logo {
  display: flex;

  &__link {
    display: inline-flex;
    color: var(--dark-primary);

    &--white {
      color: var(--white);
    }
  }

  &__icon {
    display: block;

    &--small {
      width: 65px;
      height: 30px;
    }

    &--medium {
      width: 97px;
      height: 45px;
    }
  }
}
</style>
