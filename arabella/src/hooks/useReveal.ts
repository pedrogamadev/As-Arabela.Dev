import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '../app/providers'

export const useReveal = <T extends HTMLElement>() => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) {
      return
    }

    if (prefersReducedMotion) {
      node.classList.add('opacity-100', 'translate-y-0')
      node.classList.remove('opacity-0', 'translate-y-6')
      return
    }

    node.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target !== node) {
          return
        }

        if (entry.isIntersecting) {
          node.classList.add('opacity-100', 'translate-y-0')
          node.classList.remove('opacity-0', 'translate-y-6')
        } else {
          node.classList.add('opacity-0', 'translate-y-6')
          node.classList.remove('opacity-100', 'translate-y-0')
        }
      })
    }, {
      threshold: 0.2,
    })

    observer.observe(node)

    return () => observer.disconnect()
  }, [prefersReducedMotion])

  return ref
}

// WHY: Lightweight reveal animation keeps sections lively without shipping animation libraries
