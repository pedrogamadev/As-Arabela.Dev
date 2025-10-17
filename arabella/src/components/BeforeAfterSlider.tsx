import { useCallback, useRef, useState } from 'react'

interface BeforeAfterSliderProps {
  before: string
  after: string
  labelBefore: string
  labelAfter: string
}

const clamp = (value: number) => Math.min(100, Math.max(0, value))

const BeforeAfterSlider = ({ before, after, labelBefore, labelAfter }: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const updatePosition = useCallback((clientX: number) => {
    const bounds = containerRef.current?.getBoundingClientRect()
    if (!bounds) {
      return
    }

    const relative = ((clientX - bounds.left) / bounds.width) * 100
    setPosition(clamp(relative))
  }, [])

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault()
    updatePosition(event.clientX)

    const move = (moveEvent: PointerEvent) => updatePosition(moveEvent.clientX)
    const stop = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', stop)
    }

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', stop, { once: true })
  }

  return (
    <div ref={containerRef} className="relative aspect-[16/10] w-full overflow-hidden">
      <img src={after} alt={labelAfter} loading="lazy" className="h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img src={before} alt={labelBefore} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" aria-hidden />
      <div className="absolute left-6 right-6 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-white/20" aria-hidden />
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${position}%` }}
      >
        <div
          className="flex h-full w-6 cursor-ew-resize touch-none items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--bg))]"
          role="slider"
          tabIndex={0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-label="Comparar antes e depois"
          onPointerDown={onPointerDown}
          onKeyDown={event => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
              event.preventDefault()
              setPosition(current => clamp(current - 5))
            }
            if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
              event.preventDefault()
              setPosition(current => clamp(current + 5))
            }
          }}
        >
          <span aria-hidden className="h-6 w-6 rounded-full bg-white ring-2 ring-blue-400" />
        </div>
      </div>
      <input
        className="sr-only"
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={event => setPosition(Number(event.target.value))}
        aria-hidden
        tabIndex={-1}
      />
    </div>
  )
}

export default BeforeAfterSlider
