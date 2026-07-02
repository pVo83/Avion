<template>
  <button
    class="button"
    :class="buttonClasses"
    :disabled="disabled"
    :type="type"
    :aria-label="ariaLabel || undefined"
    @click="$emit('click', $event)"
  >
    <span v-if="!iconOnly" class="button__text">
      <slot>{{ title }}</slot>
    </span>
    <span v-if="hasIcon" class="button__icon" aria-hidden="true" />
    <AppIcon
      v-if="icon"
      :name="icon"
      :width="width"
      :height="height"
      aria-hidden="true"
    />
  </button>
</template>

<script setup>
import { computed } from "vue"

import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "white", "outline", "ghost", "inverse"].includes(value),
  },
  size: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  hasIcon: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "button",
    validator: (value) => ["button", "submit", "reset"].includes(value),
  },
  icon: {
    type: String,
    default: null,
  },
  iconOnly: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    default: "",
  },
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 24,
  },
})

defineEmits(["click"])

const buttonClasses = computed(() => {
  return [
    `button--${props.variant}`,
    `button--${props.size}`,
    {
      "button--disabled": props.disabled,
      "button--with-icon": props.hasIcon,
      "button--full-width": props.fullWidth,
      "button--icon-only": props.iconOnly,
    },
  ]
})
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: fit-content;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 0;
  background-color: transparent;
  color: var(--dark-primary);
  font-family: inherit;
  font-size: var(--fs-16);
  font-weight: 400;
  line-height: 1.5;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  transition:
    color var(--trs35),
    border-color var(--trs35),
    background-color var(--trs35),
    opacity var(--trs35);

  &:hover:not(:disabled) {
    color: var(--dark-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 3px;
  }

  &--small {
    min-width: 120px;
    min-height: 48px;
    padding: 12px 24px;
  }

  &--medium {
    min-width: 170px;
    min-height: 56px;
    padding: 16px 32px;
  }

  &--large {
    min-width: 190px;
    min-height: 64px;
    padding: 20px 40px;
  }

  &--primary {
    border-color: var(--dark-primary);
    background-color: var(--dark-primary);
    color: var(--white);

    &:hover:not(:disabled) {
      border-color: var(--primary);
      background-color: var(--primary);
      color: var(--white);
    }
  }

  &--secondary {
    border-color: var(--light-gray);
    background-color: var(--light-gray);

    &:hover:not(:disabled) {
      border-color: var(--border-gray);
      background-color: var(--border-gray);
    }
  }

  &--white {
    border-color: var(--white);
    background-color: var(--white);

    &:hover:not(:disabled) {
      border-color: var(--light-gray);
      background-color: var(--light-gray);
    }
  }

  &--outline {
    background-color: transparent;
    border-color: var(--border-gray);

    &:hover:not(:disabled) {
      background-color: var(--light-gray);
    }
  }

  &--ghost {
    background-color: transparent;
    border-color: transparent;

    &:hover:not(:disabled) {
      background-color: var(--light-gray);
    }
  }

  &--inverse {
    background-color: rgb(249 249 249 / 15%);
    color: var(--white);

    &:hover:not(:disabled) {
      background-color: rgb(249 249 249 / 25%);
      color: var(--white);
    }
  }

  &--disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &--full-width {
    width: 100%;
  }

  &--with-icon {
    padding-right: 24px;
  }

  &--icon-only {
    width: 24px;
    min-width: 24px;
    height: 24px;
    min-height: 24px;
    padding: 0;
    border: none;
    background-color: transparent;
  }

  &__icon {
    width: 8px;
    height: 6px;
    background-color: currentcolor;
    clip-path: polygon(0 0, 100% 0, 50% 100%);
  }
}
</style>
