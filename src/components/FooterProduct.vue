<template>
  <footer class="footer-product">
    <div class="container">
      <div class="footer-product__main">
        <div class="footer-product__brand">
          <Logo isWhite size="medium" />

          <address class="footer-product__address">
            <p>21 New York Street</p>
            <p>New York City</p>
            <p>United States of America</p>
            <p>432 34</p>
          </address>
        </div>

        <div class="footer-product__socials">
          <h3 class="footer-product__heading">Social links</h3>
          <Social :socials="socials" name="socials" />
        </div>
        <ul class="footer-product__columns">
          <li v-for="column in footerColumns" :key="column.id" class="footer-product__column">
            <h3 class="footer-product__heading">{{ column.title }}</h3>
            <ul class="footer-product__nav">
              <li v-for="link in column.links" :key="link.id" class="footer-product__nav-item">
                <router-link class="footer-product__nav-link" :to="link.href">
                  {{ link.title }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="footer-product__bottom">
        <p class="footer-product__copyright">Copyright 2022 Avion LTD</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { footerColumns } from "@/components/model/footerColumns"
import { socials } from "@/components/model/socials"
import Social from "@/components/ui/social/Social.vue"
import Logo from "@/components/ui/logo/Logo.vue"
</script>

<style lang="scss" scoped>
.footer-product {
  width: 100%;
  background-color: var(--dark-primary);
  color: var(--white);

  &__brand {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__address {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__main {
    display: grid;
    grid-template-columns: 250px 350px 1fr;
    gap: 40px;
    padding: 60px 0 40px;
  }

  &__socials {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__nav-item {
    line-height: 1;
  }

  &__heading {
    color: var(--white);
    font-size: var(--fs-16);
    font-weight: 500;
    line-height: 1.5;
  }

  &__nav-link {
    color: var(--white);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.5;
    transition: color var(--trs35);

    &:hover {
      color: var(--border-dark);
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    height: 68px;
    border-top: 1px solid var(--primary);
  }

  &__copyright {
    color: var(--white);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.5;
  }
}
</style>
