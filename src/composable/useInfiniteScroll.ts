import { ref, onMounted, onUnmounted } from 'vue'

export function useInfiniteScroll(callback: () => void, options = {}) {
  const targetRef = ref<HTMLElement | null>(null)
  const observerRef = ref<IntersectionObserver | null>(null)

  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          callback()
        }
      },
      {
        root: null,
        rootMargin: '5px',
        threshold: 0.1,
        ...options
      }
    )

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
