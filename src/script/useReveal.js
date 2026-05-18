// composable: useReveal.js
import { onMounted } from 'vue'

export function useReveal(selector = '[data-reveal]') {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
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
}