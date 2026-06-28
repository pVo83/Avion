<template>
  <div class="product-filters">
    <div class="product-filters__mobile-controls">
      <button
        v-for="panel in mobilePanels"
        :key="panel.name"
        type="button"
        class="product-filters__mobile-control btn-reset"
        :class="{ 'product-filters__mobile-control--open': mobilePanel === panel.name }"
        @click="toggleMobilePanel(panel.name)"
      >
        <span>{{ panel.title }}</span>
        <AppIcon name="chevron-down" width="14" height="14" />
      </button>
    </div>

    <Transition name="product-filters-overlay">
      <div v-if="mobilePanel" class="product-filters__overlay" @click.self="closeMobilePanel" />
    </Transition>

    <Transition name="product-filters-panel">
      <div v-if="mobilePanel === 'sorting'" class="product-filters__mobile-panel">
        <FilterDropdown
          :name="sortFilter.name"
          :title="sortFilter.title"
          :items="sortFilter.items"
          :is-open="openedFilter === sortFilter.name"
          @toggle="toggleFilter(sortFilter.name)"
        />
      </div>
    </Transition>

    <Transition name="product-filters-panel">
      <div v-if="mobilePanel === 'filtering'" class="product-filters__mobile-panel">
        <FilterDropdown
          v-for="filter in filterGroups"
          :key="filter.name"
          :name="filter.name"
          :title="filter.title"
          :items="filter.items"
          :is-open="openedFilter === filter.name"
          @toggle="toggleFilter(filter.name)"
        />
      </div>
    </Transition>

    <div class="product-filters__desktop">
      <div class="product-filters__group">
        <FilterDropdown
          v-for="filter in filterGroups"
          :key="filter.name"
          :name="filter.name"
          :title="filter.title"
          :items="filter.items"
          :is-open="openedFilter === filter.name"
          @toggle="toggleFilter(filter.name)"
        />
      </div>

      <div class="product-filters__sorting">
        <span class="product-filters__sorting-label">Sorting by:</span>
        <FilterDropdown
          :name="sortFilter.name"
          :title="sortFilter.title"
          :items="sortFilter.items"
          :is-open="openedFilter === sortFilter.name"
          @toggle="toggleFilter(sortFilter.name)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
import FilterDropdown from "@/components/ui/filter-dropdown/FilterDropdown.vue"
import { useStopScroll } from "@/composables/useStopScroll"
import filters from "@/components/model/filters"

const openedFilter = ref(null)
const mobilePanel = ref(null)
const isMobilePanelOpen = computed(() => Boolean(mobilePanel.value))

useStopScroll(isMobilePanelOpen)

const mobilePanels = [
  { name: "sorting", title: "Sorting" },
  { name: "filtering", title: "Filtering" },
]

const filterGroups = [
  { name: "category", title: "Category", items: filters.categories },
  { name: "product-type", title: "Product type", items: filters.productTypes },
  { name: "price", title: "Price", items: filters.prices },
  { name: "brand", title: "Brand", items: filters.brands },
]

const sortFilter = {
  name: "sort",
  title: "Date added",
  items: filters.sortOptions,
}

const toggleFilter = (name) => {
  openedFilter.value = openedFilter.value === name ? null : name
}

const toggleMobilePanel = (name) => {
  mobilePanel.value = mobilePanel.value === name ? null : name
  openedFilter.value = null
}

const closeMobilePanel = () => {
  mobilePanel.value = null
  openedFilter.value = null
}
</script>

<style lang="scss" scoped>
.product-filters {
  position: relative;

  @include small-tablet {
    margin: 0 -20px 20px;
    padding: 0 20px 20px;
    background: var(--light-gray);
  }

  &__mobile-controls {
    display: none;

    @include small-tablet {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }
  }

  &__mobile-control {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    min-height: 64px;
    padding: 16px 20px;
    background-color: var(--white);
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.5;

    svg {
      transition: transform var(--trs35);
    }

    &--open {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  &__overlay {
    display: none;

    @include small-tablet {
      position: fixed;
      inset: 0;
      z-index: 20;
      display: block;
      background-color: rgb(0 0 0 / 5%);
    }
  }

  &__mobile-panel {
    display: none;

    @include small-tablet {
      position: absolute;
      right: 0;
      left: 0;
      z-index: 20;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 12px 0 0;
      padding: 20px 20px 15px;
      background-color: var(--white);
      max-height: calc(100dvh - 180px);

      // overflow-y: auto;
      overscroll-behavior: contain;
      box-shadow: 0 8px 0 0 white;
      gap: 20px;
      border-bottom: 1px solid var(--primary);
    }
  }

  &__desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 16px;
    border-bottom: 1px solid var(--primary);

    @include small-tablet {
      display: none;
    }
  }

  &__group {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
  }

  &__sorting {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 20px;
  }

  &__sorting-label {
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.5;
    white-space: nowrap;
  }

  .product-filters-panel-enter-active,
  .product-filters-panel-leave-active {
    transition:
      transform var(--trs35),
      opacity var(--trs35);
  }

  .product-filters-panel-enter-from,
  .product-filters-panel-leave-to {
    transform: translateY(-8px);
    opacity: 0;
  }

  .product-filters-overlay-enter-active,
  .product-filters-overlay-leave-active {
    transition: opacity var(--trs35);
  }

  .product-filters-overlay-enter-from,
  .product-filters-overlay-leave-to {
    opacity: 0;
  }
}
</style>
