import { useEffect, useRef, useState, type TouchEvent } from 'react';
import { cn } from '../lib/utils';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import type { Step } from './three-steps.types';

type AppleWindowProps = {
  step: Step;
  steps: Step[];
  tabId: string;
  panelId: string;
  activeStepIndex: number;
  onStepChange: (nextStep: number) => void;
  className?: string;
};

const TRANSITION_DURATION = 220;

const AppleWindow = ({
  step,
  steps,
  tabId,
  panelId,
  activeStepIndex,
  onStepChange,
  className,
}: AppleWindowProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayedStep, setDisplayedStep] = useState(step);
  const [isLeaving, setIsLeaving] = useState(false);
  const timeoutRef = useRef<number>();
  const touchStartXRef = useRef<number | null>(null);
  const descriptionId = `${displayedStep.id}-description`;
  const progress = ((activeStepIndex + 1) / steps.length) * 100;

  useEffect(() => {
    if (step.id === displayedStep.id) {
      return;
    }

    if (prefersReducedMotion) {
      setDisplayedStep(step);
      setIsLeaving(false);
      return;
    }

    setIsLeaving(true);
    window.clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      setDisplayedStep(step);
      setIsLeaving(false);
    }, TRANSITION_DURATION);

    return () => window.clearTimeout(timeoutRef.current);
  }, [step, displayedStep.id, prefersReducedMotion]);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const isActiveStep = !isLeaving && step.id === displayedStep.id;

  const goToStep = (nextIndex: number) => {
    const safeIndex = (nextIndex + steps.length) % steps.length;
    onStepChange(safeIndex);
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartXRef.current;
    const swipeThreshold = 40;

    if (Math.abs(deltaX) > swipeThreshold) {
      const direction = deltaX > 0 ? -1 : 1;
      goToStep(activeStepIndex + direction);
    }

    touchStartXRef.current = null;
  };

  return (
    <div className={cn('order-2 lg:order-1', className)}>
      <div
        className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#05060f] text-slate-100 shadow-[0_45px_120px_rgba(8,12,32,0.65)]"
        role="region"
        aria-label="Simulador de orçamento de landing page mostrando etapas gratuitas e um preço estimado"
      >
        <div className="apple-window-grid" aria-hidden />
        <div className="apple-window-orbit apple-window-orbit--primary" aria-hidden />
        <div className="apple-window-orbit apple-window-orbit--secondary" aria-hidden />
        <header className="relative z-20 flex items-center justify-between border-b border-slate-800/60 bg-white/95 px-6 py-4 sm:px-8">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff605c]" aria-hidden />
            <span className="h-3 w-3 rounded-full bg-[#ffbd44]" aria-hidden />
            <span className="h-3 w-3 rounded-full bg-[#00ca4e]" aria-hidden />
          </div>
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center" aria-hidden>
                <span className="absolute inset-0 rounded-full bg-indigo-400/60 blur-sm" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-indigo-500/80 animate-pulse" />
              </span>
              Sincronizando
            </span>
          </div>
          <span className="sr-only">Janela interativa do passo selecionado</span>
        </header>
        <div
          className="relative z-10 h-[366px] overflow-hidden px-6 py-6 sm:px-8 sm:py-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <span id={descriptionId} className="sr-only">
            {`Pré-visualização interativa do passo: ${displayedStep.title}.`}
          </span>
          <div className="mb-4 space-y-2 rounded-2xl bg-white/10 p-2">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-indigo-100">
              <span className="inline-flex h-7 items-center rounded-full bg-white/5 px-3 text-[11px] text-slate-200">
                Etapa {activeStepIndex + 1} de {steps.length}
              </span>
              <span className="truncate text-[10px] text-indigo-100/90 sm:text-[11px]">
                {displayedStep.title}
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/10" role="progressbar" aria-valuenow={activeStepIndex + 1} aria-valuemin={1} aria-valuemax={steps.length}>
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-blue-400 to-sky-300 transition-[width] duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId}
            aria-describedby={descriptionId}
            aria-live="polite"
            className={cn(
              'relative grid h-full content-start gap-6 transition-all duration-200',
              isLeaving ? 'translate-y-3 opacity-0' : 'translate-y-0 opacity-100',
              prefersReducedMotion && 'motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none',
            )}
          >
            {displayedStep.panel({ isActive: isActiveStep })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppleWindow;


