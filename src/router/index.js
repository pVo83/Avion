import { createRouter, createWebHashHistory } from "vue-router"

import Home from "@/pages/Home.vue"
import ProductPage from "@/pages/ProductPage.vue"
import About from "@/pages/About.vue"
import Products from "@/pages/Products.vue"
import ShoppingBasket from "@/pages/ShoppingBasket.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { layout: "DefaultLayout" },
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductPage,
    meta: { layout: "ProductLayout" },
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: { layout: "AboutLayout" },
  },
  {
    path: "/products",
    name: "products",
    component: Products,
    meta: { layout: "ProductsLayout" },
  },
  {
    path: "/shopping-basket",
    name: "shopping-basket",
    component: ShoppingBasket,
    meta: { layout: "DefaultLayout" },
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,

  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      }
    }

    return { left: 0, top: 0 }
  },
})

export default router
