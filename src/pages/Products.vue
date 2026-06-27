<template>
  <main class="products">
    <div class="container products__container">
      <h1 class="products__title">View all products</h1>
      <div class="products__content">
        <div class="products__filters-container">
          <div class="products__filters-row">
            <div class="products__filters">
              <FilterDropdown
                name="category"
                title="Category"
                :items="categories"
                :is-open="openedFilter === 'category'"
                @toggle="toggleFilter('category')"
              />
              <FilterDropdown
                name="product-type"
                title="Product type"
                :items="productTypes"
                :is-open="openedFilter === 'product-type'"
                @toggle="toggleFilter('product-type')"
              />
              <FilterDropdown
                name="price"
                title="Price"
                :items="prices"
                :is-open="openedFilter === 'price'"
                @toggle="toggleFilter('price')"
              />
              <FilterDropdown
                name="brand"
                title="Brand"
                :items="brands"
                :is-open="openedFilter === 'brand'"
                @toggle="toggleFilter('brand')"
              />
            </div>

            <div class="products__sorting">
              <span class="products__sorting-label">Sorting by:</span>
              <FilterDropdown
                name="sort"
                title="Date added"
                :items="sortOptions"
                :is-open="openedFilter === 'sort'"
                @toggle="toggleFilter('sort')"
              />
            </div>
          </div>
          <ul class="products__list">
            <li v-for="product in allListings" :key="product.id" class="products__item">
              <ProductCard :product="product" />
            </li>
          </ul>
        </div>
        <Button
          class="products__button"
          title="View collection"
          size="medium"
          variant="secondary"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import ProductCard from "@/components/ui/product-card/ProductCard.vue"
import Button from "@/components/ui/button/Button.vue"
import { allListings } from "@/components/model/listings"
import FilterDropdown from "@/components/ui/filter-dropdown/FilterDropdown.vue"
import filters from "@/components/model/filters"
import { ref } from "vue"

const { categories, productTypes, prices, brands, sortOptions } = filters

const openedFilter = ref(null)

const toggleFilter = (name) => {
  openedFilter.value = openedFilter.value === name ? null : name
}
</script>

<style lang="scss" scoped>
.products {
  padding: 50px 0;

  &__container {
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  &__filters-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__title {
    color: var(--dark-primary);
    font-size: var(--fs-36);
    font-weight: 400;
    line-height: 1.4;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 48px 20px;
  }

  &__button {
    align-self: center;
  }

  &__filters {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  &__filters-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    padding: 16px;
    border-bottom: 1px solid var(--primary);
  }

  &__sorting {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__sorting-label {
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.5;
  }
}
</style>
