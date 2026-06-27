import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const useCartStore = defineStore("cart", () => {
  const items = ref([])

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  )

  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  function addItem(product, quantity) {
    const existing = items.value.find((i) => i.product.id === product.id)
    if (existing) {
      existing.quantity = Math.min(existing.quantity + quantity, 5)
    } else {
      items.value.push({ product, quantity })
    }
  }

  function removeItem(productId) {
    items.value = items.value.filter((i) => i.product.id !== productId)
  }

  function updateQuantity(productId, quantity) {
    const item = items.value.find((i) => i.product.id === productId)
    if (item) {
      item.quantity = quantity
    }
  }

  return { items, totalPrice, totalItems, addItem, removeItem, updateQuantity }
})
