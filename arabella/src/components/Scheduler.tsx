import { useEffect, useState } from 'react';

interface SchedulerProps {
  schedulerUrl: string;
  floating?: boolean;
}

const Scheduler = ({ schedulerUrl, floating = false }: SchedulerProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    document.addEventListener('scheduler:open', handleOpen);
    return () => document.removeEventListener('scheduler:open', handleOpen);
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty('overflow');
      return;
    }

    document.body.style.setProperty('overflow', 'hidden');
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.removeProperty('overflow');
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className="scheduler" id="scheduler">
      <div className="scheduler__frame">
        <iframe title="Agendar reunião" src={schedulerUrl} loading="lazy" />
      </div>
      {floating && (
        <button
          type="button"
          className="scheduler__floating"
          onClick={() => setOpen(true)}
        >
          📅 Agendar conversa
        </button>
      )}
      {open && (
        <div className="modal" role="dialog" aria-modal="true" aria-label="Agendar reunião">
          <div className="modal__backdrop" onClick={() => setOpen(false)} />
          <div className="modal__content modal__content--wide">
            <div className="modal__header">
              <h4>Agende uma call</h4>
              <button type="button" onClick={() => setOpen(false)} aria-label="Fechar modal">
                ✕
              </button>
            </div>
            <iframe title="Agendar reunião" src={schedulerUrl} loading="lazy" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Scheduler;
