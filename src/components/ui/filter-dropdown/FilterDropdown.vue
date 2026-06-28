<template>
  <div class="filter-dropdown">
    <div class="filter-dropdown__content">
      <button type="button" class="filter-dropdown__header" @click="$emit('toggle')">
        <h3 class="filter-dropdown__title">{{ title }}</h3>
        <AppIcon
          class="filter-dropdown__icon"
          :class="{ 'filter-dropdown__icon--open': isOpen }"
          width="14"
          height="14"
          name="chevron-down"
        />
      </button>

      <Transition name="fade">
        <div v-if="isOpen" class="filter-dropdown__overlay" @click.self="$emit('toggle')"></div>
      </Transition>

      <Transition name="slide-down">
        <div v-if="isOpen" class="filter-dropdown__body">
          <ul class="filter-dropdown__list">
            <li v-for="item in items" :key="item.id" class="filter-dropdown__item">
              <button type="button" class="filter-dropdown__option" @click="emit('select', item)">
                {{ item.title }}
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
import { useStopScroll } from "@/composables/useStopScroll"
import { toRef } from "vue"

const props = defineProps({
  title: String,
  items: Array,
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["toggle", "select"])

const isOpenRef = toRef(props, "isOpen")

useStopScroll(isOpenRef)
</script>

<style lang="scss" scoped>
.filter-dropdown {
  &__content {
    position: relative;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__title {
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.5;
  }

  &__icon {
    transition: transform var(--trs35);

    &.filter-dropdown__icon--open {
      transform: rotate(180deg);
    }
  }

  &__body {
    position: absolute;
    z-index: 2;
    margin: 16px 0 0;
    padding: 10px 20px 20px;
    background-color: var(--light-gray);
    border-top: 4px solid var(--primary);
  }

  &__list {
    max-height: 160px;
    overflow: auto;
  }

  &__item {
    display: flex;
    align-items: center;
    height: 36px;
    color: var(--primary);
    font-size: var(--fs-16);
    font-weight: 400;
    white-space: nowrap;

    &:hover {
      color: var(--dark-primary);
    }
  }

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: var(--overlay);
    cursor: pointer;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity var(--trs35);
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .slide-down-enter-active,
  .slide-down-leave-active {
    transition:
      transform var(--trs35),
      opacity var(--trs35);
  }

  .slide-down-enter-from,
  .slide-down-leave-to {
    transform: translateY(10%);
    opacity: 0;
  }
}
</style>
