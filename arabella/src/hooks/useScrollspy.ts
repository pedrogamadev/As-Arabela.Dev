import { useEffect, useMemo, useState } from 'react'

export const useScrollspy = (ids: string[], threshold = 0.4) => {
  const [activeId, setActiveId] = useState<string>('')

  const elements = useMemo(() => {
    if (typeof document === 'undefined') {
      return [] as HTMLElement[]
    }

    return ids
      .map(id => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))
  }, [ids])

  useEffect(() => {
    if (!elements.length) {
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target) {
          setActiveId((visible.target as HTMLElement).id)
        }
      },
      { threshold },
    )

    elements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [elements, threshold])

  return activeId
}

// WHY: Scrollspy keeps navigation context-aware without heavy state libraries
