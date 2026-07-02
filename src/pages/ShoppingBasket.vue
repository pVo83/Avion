<template>
  <main class="shopping-baskets">
    <div class="container">
      <div class="shopping-baskets__content">
        <div v-if="cartStore.items.length" class="shopping-baskets__table">
          <div class="shopping-baskets__head">Product</div>
          <div class="shopping-baskets__head">Quantity</div>
          <div class="shopping-baskets__head">Total</div>

          <template v-for="item in cartStore.items" :key="item.product.id">
            <div class="shopping-baskets__product">
              <AppImage
                class="shopping-baskets__product-image"
                :webp-src="publicUrl(`img/listings/${item.product.image}.webp`)"
                :src="publicUrl(`img/listings/${item.product.image}.jpg`)"
                :alt="item.product.name"
                width="110"
                height="135"
              />
              <div class="shopping-baskets__product-info">
                <span class="shopping-baskets__product-name">{{ item.product.name }}</span>
                <div class="shopping-baskets__product-description">
                  {{ item.product.description }}
                </div>
                <span class="shopping-baskets__product-price">€ {{ item.product.price }}</span>
              </div>
            </div>

            <div class="shopping-baskets__quantity">
              <div class="shopping-baskets__count-box">
                <Button
                  class="shopping-baskets__minus"
                  icon="minus"
                  icon-only
                  variant="secondary"
                  aria-label="Decrease quantity"
                  :disabled="item.quantity === 1"
                  @click="cartStore.updateQuantity(item.product.id, item.quantity - 1)"
                />
                <span class="shopping-baskets__count-value">{{ item.quantity }}</span>
                <Button
                  class="shopping-baskets__plus"
                  icon="plus"
                  icon-only
                  variant="secondary"
                  aria-label="Increase quantity"
                  :disabled="item.quantity === 5"
                  @click="cartStore.updateQuantity(item.product.id, item.quantity + 1)"
                />
              </div>
              <button
                class="shopping-baskets__remove"
                @click="cartStore.removeItem(item.product.id)"
              >
                <AppIcon name="delete" width="16" height="16" />
                Remove
              </button>
            </div>

            <div class="shopping-baskets__row-total">
              € {{ item.product.price * item.quantity }}
            </div>
          </template>
        </div>

        <div v-else class="shopping-baskets__empty-cart">
          <p class="shopping-baskets__empty">Your cart is empty.</p>
          <Button
            title="Continue shopping"
            size="medium"
            variant="secondary"
            @click="router.push('/products')"
          />
        </div>

        <div class="shopping-baskets__bottom">
          <span class="shopping-baskets__bottom-text"
            >Taxes and shipping are calculated at checkout</span
          >
          <div class="shopping-baskets__subtotal">
            <div class="shopping-baskets__total">
              <span class="shopping-baskets__total-label">Subtotal</span>
              <span class="shopping-baskets__total-value">€ {{ cartStore.totalPrice }}</span>
            </div>
            <Button
              title="Go to checkout"
              size="medium"
              variant="primary"
              :disabled="!cartStore.items.length"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Button from "@/components/ui/button/Button.vue"
import AppImage from "@/components/ui/appImage/AppImage.vue"
import { useCartStore } from "@/stores/cart.js"
import { publicUrl } from "@/utils/publicUrl"
import { useRouter } from "vue-router"
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"

const router = useRouter()
const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
.shopping-baskets {
  width: 100%;
  padding: clamp(32px, 5.5vw, 80px) 0;
  background-color: var(--light-gray);

  &__content {
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: clamp(20px, 4.2vw, 60px);
    background: var(--white);
    min-height: 590px;

    @include mobile {
      padding: 20px 16px;
      gap: 32px;
    }
  }

  &__table {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 20px 50px;

    @include small-tablet {
      grid-template-columns: 1fr auto;
      gap: 0 24px;
    }
  }

  &__head {
    padding: 20px 0;
    color: var(--dark-primary);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.5;
    border-bottom: 1px solid var(--light-gray);

    @include small-tablet {
      display: none;
    }
  }

  &__product {
    gap: 20px;

    @include small-tablet {
      grid-column: 1 / -1;
      flex-wrap: wrap;
      padding: 16px 0;
      border-bottom: 1px solid var(--border-gray);
    }
  }

  &__product-image {
    flex-shrink: 0;
    width: 109px;
    height: 134px;
  }

  &__product-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-width: 420px;
  }

  &__product-name {
    color: var(--dark-primary);
    font-size: var(--fs-20);
    font-weight: 400;
    line-height: 1.4;
  }

  &__product-description {
    display: -webkit-box;
    color: var(--dark-primary);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.5;
    overflow: hidden;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &__product,
  &__quantity,
  &__row-total {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__product:nth-last-child(3),
  &__quantity:nth-last-child(2),
  &__row-total:last-child {
    border-bottom: none;
    flex-wrap: wrap;
  }

  &__product-price {
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.5;
  }

  &__quantity {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    width: 145px;

    @include small-tablet {
      flex-direction: row;
      align-items: center;
      width: 100%;
      padding: 16px 0;
      border-bottom: 1px solid var(--border-gray);
    }
  }

  &__count-box {
    display: flex;
    align-items: center;
    background: var(--light-gray);
  }

  &__plus,
  &__minus {
    width: 46px;
    height: 46px;
    padding: 12px 16px;
  }

  &__count-value {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    color: var(--dark-primary);
    font-size: var(--fs-16);
    font-weight: 400;
  }

  &__remove {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--dark-primary);
    font-size: var(--fs-14);
    font-weight: 400;
    cursor: pointer;
    transition: opacity var(--trs35);

    @include hover {
      opacity: 0.6;
    }
  }

  &__row-total {
    width: 65px;
    color: var(--dark-primary);
    font-size: var(--fs-18);
    font-weight: 400;
    line-height: 1.4;
    white-space: nowrap;

    @include small-tablet {
      width: auto;
      height: 79px;
      padding: 16px 0;
      align-self: center;
      border-bottom: 1px solid var(--border-gray);
    }
  }

  &__empty-cart {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
  }

  &__empty {
    padding: 40px 0;
    color: var(--dark-primary);
    font-size: var(--fs-20);
    font-weight: 400;
    line-height: 1.4;
    text-align: center;
  }

  &__bottom {
    display: grid;
    margin-top: auto;
    padding: 20px 20px 0;
    grid-template-columns: 1fr 250px;
    gap: 20px;
    border-top: 1px solid var(--border-gray);

    @include small-tablet {
      grid-template-columns: 1fr;
      padding: 16px 0 0;
    }
  }

  &__bottom-text {
    color: var(--dark-primary);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.5;
  }

  &__subtotal {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-end;

    @include small-tablet {
      align-items: stretch;
    }
  }

  &__total {
    display: flex;
    gap: 10px;
    align-items: center;

    @include small-tablet {
      justify-content: space-between;
    }

    &-label {
      color: var(--dark-primary);
      font-size: var(--fs-20);
      font-weight: 400;
      line-height: 1.4;
    }

    &-value {
      color: var(--dark-primary);
      font-size: var(--fs-24);
      font-weight: 400;
      line-height: 1.4;
    }
  }
}
</style>
