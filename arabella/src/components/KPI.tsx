import { useEffect, useMemo, useRef, useState } from 'react'
import type { KpiItem } from '../content/hero'
import { usePrefersReducedMotion } from '../app/providers'
import { useReveal } from '../hooks/useReveal'

interface KPISectionProps {
  items: KpiItem[]
}

const KPISection = ({ items }: KPISectionProps) => {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      className="py-20"
      aria-label="Indicadores de performance"
    >
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map(item => (
          <KpiCard key={item.label} item={item} />
        ))}
      </div>
    </section>
  )
}

const KpiCard = ({ item }: { item: KpiItem }) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [value, setValue] = useState(prefersReducedMotion ? item.value : 0)
  const ref = useRef<HTMLDivElement | null>(null)
  const observer = useRef<IntersectionObserver>()

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(item.value)
      return
    }

    const node = ref.current
    if (!node) {
      return
    }

    observer.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate()
          observer.current?.disconnect()
        }
      })
    })

    observer.current.observe(node)

    return () => observer.current?.disconnect()
  }, [prefersReducedMotion, item.value])

  const animate = () => {
    const duration = 1200
    const start = performance.now()

    const step = (timestamp: number) => {
      const progress = Math.min(1, (timestamp - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(item.value * eased)
      setValue(current)

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  const displayValue = useMemo(() => `${value}${item.suffix ?? ''}`, [value, item])

  return (
    <div
      ref={ref}
      className="glass shadow-soft rounded-2xl p-6 transition hover:-translate-y-1 hover:bg-white/10"
    >
      <span className="block text-4xl font-bold text-white">{displayValue}</span>
      <span className="mt-2 block text-sm font-semibold uppercase tracking-[0.3em] text-white/40">
        {item.label}
      </span>
      <p className="mt-4 text-sm text-white/70">{item.description}</p>
    </div>
  )
}

export default KPISection
