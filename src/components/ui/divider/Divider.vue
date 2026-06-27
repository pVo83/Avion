<template>
  <div class="divider" :class="dividerClasses" :style="dividerStyles">
    <div v-if="!text || textPosition !== 'left'" class="divider__line" :style="lineStyles"></div>

    <div v-if="text" class="divider__text" :class="textClasses" :style="textStyles">
      {{ text }}
    </div>

    <div
      v-if="text && textPosition !== 'right'"
      class="divider__line divider__line--right"
      :style="lineStyles"
    ></div>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  // Текст для отображения в дивидере
  text: {
    type: String,
    default: "",
  },

  // Позиция текста: 'left', 'center', 'right'
  textPosition: {
    type: String,
    default: "center",
    validator: (value) => ["left", "center", "right"].includes(value),
  },

  // Длина дивидера в процентах (0-100)
  width: {
    type: Number,
    default: 100,
    validator: (value) => value >= 0 && value <= 100,
  },

  // Толщина дивидера в пикселях
  thickness: {
    type: Number,
    default: 1,
    validator: (value) => value > 0,
  },

  // Отступ от левого края в пикселях
  paddingLeft: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0,
  },

  // Отступ от правого края в пикселях
  paddingRight: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0,
  },

  // Отступ сверху в пикселях
  marginTop: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0,
  },

  // Отступ снизу в пикселях
  marginBottom: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0,
  },

  // Отступ между текстом и линиями в пикселях
  gap: {
    type: Number,
    default: 16,
    validator: (value) => value >= 0,
  },

  // Цвет дивидера
  color: {
    type: String,
    default: "#e5e7eb",
  },

  // Цвет текста
  textColor: {
    type: String,
    default: "#6b7280",
  },

  // Размер шрифта текста
  fontSize: {
    type: String,
    default: "14px",
  },
})

// Вычисляемые классы для дивидера
const dividerClasses = computed(() => ({
  "divider--with-text": !!props.text,
  [`divider--text-${props.textPosition}`]: !!props.text,
}))

// Вычисляемые классы для текста
const textClasses = computed(() => ({
  [`divider__text--${props.textPosition}`]: true,
}))

// Стили для контейнера дивидера
const dividerStyles = computed(() => ({
  paddingLeft: props.paddingLeft ? `${props.paddingLeft}px` : "0",
  paddingRight: props.paddingRight ? `${props.paddingRight}px` : "0",
  gap: props.gap ? `${props.gap}px` : "0",
  marginTop: props.marginTop ? `${props.marginTop}px` : "0",
  marginBottom: props.marginBottom ? `${props.marginBottom}px` : "0",
}))

// Стили для линий
const lineStyles = computed(() => ({
  width: props.text ? "100%" : `${props.width}%`,
  height: `${props.thickness}px`,
  backgroundColor: props.color,
}))

// Стили для текста
const textStyles = computed(() => ({
  color: props.textColor,
  fontSize: props.fontSize,
}))
</script>

<style lang="scss" scoped>
.divider {
  display: flex;
  align-items: center;
  width: 100%;

  &--with-text {
    .divider__line {
      flex: 1;
    }

    &.divider--text-left {
      justify-content: flex-start;

      .divider__line--right {
        flex: 1;
      }
    }

    &.divider--text-right {
      justify-content: flex-end;

      .divider__line {
        flex: 1;
      }
    }

    &.divider--text-center {
      .divider__line,
      .divider__line--right {
        flex: 1;
      }
    }
  }

  &__line {
    border: none;
  }

  &__text {
    font-weight: 500;
    white-space: nowrap;

    &--left {
      text-align: left;
    }

    &--center {
      text-align: center;
    }

    &--right {
      text-align: right;
    }
  }
}
</style>
