<template>
  <footer class="footer" :class="`footer--${variant}`">
    <div class="container footer__container">
      <div class="footer__main">
        <template v-if="variant === 'default'">
          <FooterColumns />
          <div class="footer__newsletter">
            <h3 class="footer__heading">Join our mailing list</h3>
            <Subscribe
              class="footer__subscribe"
              variantButton="white"
              sizeButton="small"
              variantInput="primary-secondary"
            />
          </div>
        </template>

        <template v-else>
          <div class="footer__brand">
            <Logo isWhite size="medium" />
            <address class="footer__address">
              <p>21 New York Street</p>
              <p>New York City</p>
              <p>United States of America</p>
              <p>432 34</p>
            </address>
          </div>

          <div class="footer__socials">
            <h3 class="footer__heading">Social links</h3>
            <Social :socials="socials" name="socials" />
          </div>

          <FooterColumns class="footer__columns" />
        </template>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">Copyright 2022 Avion LTD</p>
        <Social v-if="variant === 'default'" class="footer__social" :socials="socials" name="socials" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import { socials } from "@/components/model/socials"
import FooterColumns from "@/components/ui/footer-columns/FooterColumns.vue"
import Subscribe from "@/components/ui/subscribe/Subscribe.vue"
import Social from "@/components/ui/social/Social.vue"
import Logo from "@/components/ui/logo/Logo.vue"

defineProps({
  variant: {
    type: String,
    default: "default",
    validator: (value) => ["default", "product"].includes(value),
  },
})
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: var(--dark-primary);
  color: var(--white);

  &__main {
    display: grid;
    gap: 40px;
    padding: 60px 0 40px;

    @include small-tablet {
      padding: 40px 0 32px;
    }
  }

  &__heading {
    color: var(--white);
    font-size: var(--fs-16);
    font-weight: 500;
    line-height: 1.5;
  }

  &__newsletter {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__brand {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__address {
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-style: normal;
  }

  &__socials {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 5px 0 0;
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    height: 68px;
    border-top: 1px solid var(--primary);

    @include small-tablet {
      flex-direction: column;
      height: auto;
      padding: 20px 0;
      gap: 16px;
    }
  }

  &__copyright {
    color: var(--white);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.5;
  }

  &--default {
    .footer__main {
      grid-template-columns: auto auto;

      @include tablet {
        grid-template-columns: 1fr;
      }
    }
  }

  &--product {
    .footer__main {
      grid-template-columns: auto auto auto;
      gap: 60px;

      @include tablet {
        grid-template-columns: 1fr 1fr;
      }

      @include small-tablet {
        flex-shrink: 0;
      }
    }

    .footer__columns {
      gap: 60px;

      @include tablet {
        grid-column: 1 / -1;
      }
    }

    .footer__bottom {
      @include small-tablet {
        flex-direction: row;
        gap: 40px;
      }
    }
  }
}
</style>
