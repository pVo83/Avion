import { onBeforeUnmount, watch } from "vue"

let lockCount = 0

const updateScrollLock = () => {
  const shouldLock = lockCount > 0

  document.documentElement.classList.toggle("no-scroll", shouldLock)
  document.body.classList.toggle("no-scroll", shouldLock)
}

export const useStopScroll = (isOpen) => {
  let isLocked = false

  const lockScroll = () => {
    if (isLocked) return

    isLocked = true
    lockCount += 1
    updateScrollLock()
  }

  const unlockScroll = () => {
    if (!isLocked) return

    isLocked = false
    lockCount = Math.max(0, lockCount - 1)
    updateScrollLock()
  }

  const stop = watch(
    () => isOpen.value,
    (value) => {
      if (value) {
        lockScroll()
      } else {
        unlockScroll()
      }
    },
    { immediate: true },
  )

  onBeforeUnmount(() => {
    stop()
    unlockScroll()
  })
}
