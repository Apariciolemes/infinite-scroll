import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(callback: () => void, options = {}) {
  const targetRef = ref<HTMLElement | null>(null)
  const observerRef = ref<IntersectionObserver | null>(null)

  const callbackEntries = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry?.isIntersecting) {
        callback()
      }
    })
  }

  onMounted(() => {
    const observer = new IntersectionObserver(callbackEntries, {
      root: null,
      rootMargin: '5px',
      threshold: 0.3,
      ...options
    })

    if (targetRef.value) {
      observer.observe(targetRef.value)
    }

    observerRef.value = observer
  })

  onUnmounted(() => {
    if (observerRef.value && targetRef.value) {
      observerRef.value.unobserve(targetRef.value)
    }
  })

  return {
    targetRef
  }
}
