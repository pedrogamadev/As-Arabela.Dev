import { useEffect, useState } from 'react'

interface SchedulerProps {
  schedulerUrl: string
  floating?: boolean
}

const Scheduler = ({ schedulerUrl, floating = false }: SchedulerProps) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleOpen = () => setOpen(true)
    document.addEventListener('scheduler:open', handleOpen)
    return () => document.removeEventListener('scheduler:open', handleOpen)
  }, [])

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty('overflow')
      return
    }

    document.body.style.setProperty('overflow', 'hidden')
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.removeProperty('overflow')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="relative" id="scheduler">
      <div className="glass shadow-soft overflow-hidden rounded-3xl border border-white/10">
        <iframe title="Agendar reunião" src={schedulerUrl} loading="lazy" className="h-[520px] w-full border-0" />
      </div>
      {floating && (
        <button
          type="button"
          className="fixed bottom-6 right-6 z-40 pill bg-blue-500 text-sm font-medium text-white shadow-soft transition hover:bg-blue-400 focus-visible:scale-105 sm:bottom-10 sm:right-10"
          onClick={() => setOpen(true)}
        >
          📅 Agendar conversa
        </button>
      )}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Agendar reunião">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="glass shadow-soft relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <h4 className="text-lg font-semibold text-white">Agende uma call</h4>
              <button type="button" onClick={() => setOpen(false)} aria-label="Fechar modal" className="text-xl text-white/70 hover:text-white">
                ✕
              </button>
            </div>
            <iframe title="Agendar reunião" src={schedulerUrl} loading="lazy" className="h-[600px] w-full border-0" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Scheduler
