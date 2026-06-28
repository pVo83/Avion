<template>
  <Teleport to="body">
    <Transition name="menu-overlay">
      <div v-if="isOpen" class="mobile-menu__overlay" @click.self="handleClose" />
    </Transition>

    <Transition name="menu-drawer">
      <div
        v-if="isOpen"
        class="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div class="mobile-menu__top">
          <Logo />
          <button class="mobile-menu__close btn-reset" aria-label="Close menu" @click="handleClose">
            <AppIcon name="Close" />
          </button>
        </div>

        <div class="mobile-menu__body">
          <Navigation :items="items" />
        </div>

        <div class="mobile-menu__footer">
          <ul class="mobile-menu__socials">
            <li v-for="social in menuSocials" :key="social.id" class="mobile-menu__social-item">
              <a :href="social.href" class="mobile-menu__social-link" :aria-label="social.name">
                <AppIcon :name="social.name" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onBeforeUnmount, watch } from "vue"
import Logo from "@/components/ui/logo/Logo.vue"
import AppIcon from "@/components/ui/appIcon/AppIcon.vue"
import Navigation from "@/components/ui/navigation/Navigation.vue"
import { socials as menuSocials } from "@/components/model/socials"

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["close"])

function handleClose() {
  emit("close")
}

watch(
  () => props.isOpen,
  (val) => {
    document.body.classList.toggle("no-scroll", val)
  },
)

onBeforeUnmount(() => {
  document.body.classList.remove("no-scroll")
})
</script>

<style lang="scss" scoped>
.menu-overlay-enter-active,
.menu-overlay-leave-active {
  transition: opacity var(--trs35);
}

.menu-overlay-enter-from,
.menu-overlay-leave-to {
  opacity: 0;
}

.menu-drawer-enter-active,
.menu-drawer-leave-active {
  transition: transform var(--trs35);
}

.menu-drawer-enter-from,
.menu-drawer-leave-to {
  transform: translateX(100%);
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  width: min(300px, 100vw);
  height: 100dvh;
  background-color: var(--white);
  box-shadow: -4px 0 32px rgb(42 37 75 / 15%);

  &__overlay {
    position: fixed;
    inset: 0;
    z-index: 199;
    background-color: rgb(42 37 75 / 40%);
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid var(--border-gray);
  }

  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dark-primary);
    cursor: pointer;
    transition: opacity var(--trs35);

    @include hover {
      opacity: 0.6;
    }
  }

  &__body {
    flex: 1;
    padding: 32px 24px;
    overflow-y: auto;
  }

  &__footer {
    padding: 24px;
    border-top: 1px solid var(--border-gray);
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__social-link {
    display: flex;
    color: var(--dark-primary);
    transition: color var(--trs35);

    @include hover {
      color: var(--primary);
    }
  }
}
</style>
