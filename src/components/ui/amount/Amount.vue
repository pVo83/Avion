<template>
  <div class="amount">
    <div class="amount__content">
      <div class="amount__left">
        <span class="amount__label">Amount:</span>
        <div class="amount__count-box">
          <Button
            class="amount__button amount__button--minus"
            icon="minus"
            icon-only
            variant="secondary"
            :disabled="count === 1"
            @click="handleDecrease"
          />
          <span class="amount__value">{{ count }}</span>
          <Button
            class="amount__button amount__button--plus"
            icon="plus"
            icon-only
            variant="secondary"
            :disabled="count === 5"
            @click="handleIncrease"
          />
        </div>
      </div>

      <Button
        class="amount__button"
        title="Add to cart"
        size="medium"
        variant="primary"
        @click="handleAddToCart"
      />
    </div>
  </div>
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useCartStore } from "@/stores/cart.js"

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const router = useRouter()
const cartStore = useCartStore()
const count = ref(1)

const handleDecrease = () => {
  if (count.value > 1) {
    count.value--
  }
}

const handleIncrease = () => {
  if (count.value < 5) {
    count.value++
  }
}

const handleAddToCart = () => {
  cartStore.addItem(props.product, count.value)
  router.push("/shopping-basket")
}
</script>

<style lang="scss" scoped>
.amount {
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
  }

  &__left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
  }

  &__label {
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.4;
  }

  &__count-box {
    display: flex;
    align-items: center;
    background: var(--light-gray);
  }

  &__value {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 400;
  }

  &__button {
    &--minus {
      width: 46px;
      height: 46px;
      padding: 12px 16px;
    }

    &--plus {
      width: 46px;
      height: 46px;
      padding: 12px 16px;
    }
  }
}
</style>
