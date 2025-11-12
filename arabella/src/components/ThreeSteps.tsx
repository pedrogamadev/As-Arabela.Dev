import { type KeyboardEvent, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { cn } from '../lib/utils';
import type { Step } from './three-steps.types';

type ThreeStepsProps = {
  steps: Step[];
  activeStep: number;
  onStepChange: (step: number) => void;
  getTabId: (id: string) => string;
  getPanelId: (id: string) => string;
  className?: string;
};

const ThreeSteps = ({ steps, activeStep, onStepChange, getTabId, getPanelId, className }: ThreeStepsProps) => {
  const tabsRef = useRef<Array<HTMLDivElement | null>>([]);

  const focusTab = (index: number) => {
    const node = tabsRef.current[index];
    if (node) {
      window.requestAnimationFrame(() => node.focus());
    }
  };

  const handleKeyDown = (index: number) => (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      const nextIndex = (index + 1) % steps.length;
      onStepChange(nextIndex);
      focusTab(nextIndex);
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      const nextIndex = (index - 1 + steps.length) % steps.length;
      onStepChange(nextIndex);
      focusTab(nextIndex);
    }

    if (event.key === 'Home') {
      event.preventDefault();
      onStepChange(0);
      focusTab(0);
    }

    if (event.key === 'End') {
      event.preventDefault();
      const lastIndex = steps.length - 1;
      onStepChange(lastIndex);
      focusTab(lastIndex);
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onStepChange(index);
    }
  };

  return (
    <div id="ferramentas" className={cn('flex flex-col gap-6', className)}>
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur">
          <ArrowRight className="h-3 w-3" aria-hidden />
          3 passos
        </span>
        <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
          3 passos para lançar sua landing page
        </h2>
      </div>

      <div
        role="tablist"
        aria-label="Passos para criar e publicar sua landing page"
        aria-orientation="vertical"
        className="grid gap-4"
      >
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === activeStep;
          const tabId = getTabId(step.id);
          const panelId = getPanelId(step.id);

          return (
            <Card
              key={step.id}
              ref={node => {
                tabsRef.current[index] = node;
              }}
              role="tab"
              id={tabId}
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onStepChange(index)}
              onKeyDown={handleKeyDown(index)}
              className={cn(
                'cursor-pointer rounded-2xl border border-white/30 bg-white/75 text-left shadow-[0_24px_60px_rgba(79,70,229,0.18)] transition-all hover:border-indigo-500/40 hover:shadow-[0_28px_70px_rgba(79,70,229,0.24)] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
                isActive
                  ? 'ring-2 ring-indigo-500/40 shadow-[0_26px_70px_rgba(79,70,229,0.28)]'
                  : undefined,
              )}
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 via-indigo-500/30 to-sky-400/30 text-indigo-500">
                  <Icon className="h-6 w-6" aria-hidden />
                  <span className="sr-only">{`Ícone do passo ${index + 1}`}</span>
                </span>
                <div className="flex flex-col gap-2">
                  <CardTitle className="text-lg font-semibold text-slate-900">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </div>
              </CardHeader>
              {step.note ? (
                <CardFooter className="mt-3 text-sm text-slate-500">
                  <span>{step.note}</span>
                </CardFooter>
              ) : null}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ThreeSteps;


