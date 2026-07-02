<template>
  <form class="subscribe" @submit.prevent="handleSubmit">
    <div class="subscribe__item">
      <input
        v-model="email"
        class="subscribe__input"
        :class="subscribeInputClasses"
        type="email"
        :placeholder="placeholder"
        required
      />
    </div>
    <Button
      class="subscribe__button"
      :title="buttonTitle"
      :size="sizeButton"
      :variant="variantButton"
    />
  </form>
</template>

<script setup>
import { ref, computed } from "vue"
import Button from "@/components/ui/button/Button.vue"

const props = defineProps({
  placeholder: {
    type: String,
    default: "Enter your email",
  },
  buttonTitle: {
    type: String,
    default: "Subscribe",
  },
  variantButton: {
    type: String,
    default: "primary",
    validator: (value) => ["white", "light-gray"].includes(value),
  },
  sizeButton: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
  variantInput: {
    type: String,
    default: "white",
    validator: (value) => ["white", "primary", "primary-secondary", "light-gray"].includes(value),
  },
})

const email = ref("")

const handleSubmit = () => {
  if (!email.value.trim()) {
    return
  }

  email.value = ""
}

const subscribeInputClasses = computed(() => {
  return {
    [`subscribe__input--${props.variantInput}`]: true,
  }
})
</script>

<style lang="scss" scoped>
.subscribe {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0;

  @include mobile {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  &__input {
    width: 100%;
    height: 56px;
    padding: 12px 24px;
    background-color: var(--white);
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.5;

    &::placeholder {
      color: var(--border-dark);
    }

    &--primary {
      background-color: var(--primary);
      color: var(--dark-primary);
    }

    &--primary-secondary {
      background-color: var(--primary-secondary);
      color: var(--dark-primary);
    }

    &--light-gray {
      background-color: var(--light-gray);
      color: var(--dark-primary);
    }
  }

  &__item {
    width: 100%;
  }

  &__button {
    width: 118px;
    min-width: 118px;
    height: 56px;

    @include mobile {
      width: 100%;
      min-width: unset;

      &.button--small,
      &.button--medium,
      &.button--large {
        width: 100%;
        min-width: unset;
      }
    }
  }
}
</style>
