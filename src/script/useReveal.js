// composable: useReveal.js
import { onMounted, onUnmounted } from 'vue'

export function useReveal(selector = '[data-reveal]') {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('animate-fade-up')
          el.target.classList.remove('opacity-0')
          observer.unobserve(el.target)
        }
      })
    }, { threshold: 0.15 })

    document.querySelectorAll(selector).forEach(el => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}