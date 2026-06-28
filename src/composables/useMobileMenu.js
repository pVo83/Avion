import { onBeforeUnmount, onMounted } from "vue"
import { storeToRefs } from "pinia"
import { useMobileMenuStore } from "@/stores/mobileMenu"

const DESKTOP_MEDIA_QUERY = "(min-width: 1100px)"

export const useMobileMenu = () => {
  const mobileMenuStore = useMobileMenuStore()
  const { isMobileMenuOpen } = storeToRefs(mobileMenuStore)
  const desktopMediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY)

  const closeOnDesktop = () => {
    if (desktopMediaQuery.matches && isMobileMenuOpen.value) {
      mobileMenuStore.closeMobileMenu()
    }
  }

  onMounted(() => {
    closeOnDesktop()
    desktopMediaQuery.addEventListener("change", closeOnDesktop)
  })

  onBeforeUnmount(() => {
    desktopMediaQuery.removeEventListener("change", closeOnDesktop)
  })

  return {
    isMobileMenuOpen,
    openMobileMenu: mobileMenuStore.openMobileMenu,
    closeMobileMenu: mobileMenuStore.closeMobileMenu,
    toggleMobileMenu: mobileMenuStore.toggleMobileMenu,
  }
}
