import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import type { Step } from './three-steps.types';

type AppleWindowProps = {
  step: Step;
  tabId: string;
  panelId: string;
  className?: string;
};

const TRANSITION_DURATION = 220;

const AppleWindow = ({ step, tabId, panelId, className }: AppleWindowProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayedStep, setDisplayedStep] = useState(step);
  const [isLeaving, setIsLeaving] = useState(false);
  const timeoutRef = useRef<number>();
  const descriptionId = `${displayedStep.id}-description`;

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

  return (
    <div className={cn('order-2 lg:order-1', className)}>
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/70 text-slate-100 shadow-[0_45px_120px_rgba(10,15,40,0.45)] backdrop-blur-2xl">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-indigo-400/10 to-sky-400/20 opacity-80"
          aria-hidden
        />
        <header className="relative flex items-center gap-2 border-b border-white/10 px-6 py-4 sm:px-8">
          <span className="h-3 w-3 rounded-full bg-[#ff605c]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#ffbd44]" aria-hidden />
          <span className="h-3 w-3 rounded-full bg-[#00ca4e]" aria-hidden />
          <span className="sr-only">Janela interativa do passo selecionado</span>
        </header>
        <div className="relative min-h-[320px] overflow-hidden px-6 py-6 sm:px-8 sm:py-8">
          <span id={descriptionId} className="sr-only">
            {`Pré-visualização interativa do passo: ${displayedStep.title}.`}
          </span>
          <div
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId}
            aria-describedby={descriptionId}
            aria-live="polite"
            className={cn(
              'relative grid gap-6 transition-all duration-200',
              isLeaving ? 'translate-y-3 opacity-0' : 'translate-y-0 opacity-100',
              prefersReducedMotion && 'motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none',
            )}
          >
            {displayedStep.panel({ isActive: isActiveStep })}
          </div>
          {displayedStep.id === 'publicacao-compartilhamento' && (
            <span
              aria-hidden={!isActiveStep}
              className={cn(
                'pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#facc15_0%,#ffffff00_45%)] opacity-0 transition-opacity duration-300',
                isActiveStep && 'opacity-60',
              )}
            />
          )}
          {displayedStep.id === 'publicacao-compartilhamento' && (
            <div
              aria-hidden={!isActiveStep}
              className={cn(
                'pointer-events-none absolute inset-x-0 top-4 flex justify-center opacity-0 transition-opacity duration-300',
                isActiveStep && 'opacity-100 motion-reduce:opacity-100',
              )}
            >
              <div className="apple-window-confetti" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppleWindow;


