import { onBeforeUnmount, watch } from "vue"

export const useStopScroll = (isOpen) => {
  const stop = watch(
    () => isOpen.value,
    (value) => {
      document.body.style.overflow = value ? "hidden" : ""
    },
    { immediate: true },
  )

  onBeforeUnmount(() => {
    stop()
    document.body.style.overflow = ""
  })
}
