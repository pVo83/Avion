<template>
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__main">
        <ul class="footer__columns">
          <li v-for="column in footerColumns" :key="column.id" class="footer__column">
            <h3 class="footer__heading">{{ column.title }}</h3>
            <ul class="footer__nav">
              <li v-for="link in column.links" :key="link.id" class="footer__nav-item">
                <router-link class="footer__nav-link" :to="link.href">
                  {{ link.title }}
                </router-link>
              </li>
            </ul>
          </li>
        </ul>

        <div class="footer__newsletter">
          <h3 class="footer__heading">Join our mailing list</h3>
          <Subscribe
            class="footer__subscribe"
            variantButton="white"
            sizeButton="small"
            variantInput="primary-secondary"
          />
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">Copyright 2022 Avion LTD</p>
        <Social class="footer__social" :socials="socials" name="socials" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import { footerColumns } from "@/components/model/footerColumns"
import { socials } from "@/components/model/socials"
import Subscribe from "@/components/ui/subscribe/Subscribe.vue"
import Social from "@/components/ui/social/Social.vue"
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: var(--dark-primary);
  color: var(--white);

  &__main {
    display: grid;
    grid-template-columns: 1fr 627px;
    gap: 40px;
    padding: 60px 0 40px;
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

  &__newsletter {
    display: flex;
    flex-direction: column;
    gap: 16px;
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
