import type { HeroShowcase } from '../../content/types';
import { cn } from '../../lib/utils';

interface DeviceShowcaseProps {
  content: HeroShowcase;
  className?: string;
}

/**
 * Moldura de notebook com celular sobreposto, exibindo uma página entregue.
 *
 * Decorativo (`aria-hidden`): a informação real do hero vive no texto ao
 * lado. Nenhuma imagem é carregada — molduras e conteúdo são desenhados em
 * CSS, então o bloco não disputa o LCP nem causa layout shift.
 *
 * As medidas internas são percentuais e as molduras derivam dos tokens: o
 * componente ocupa a largura que receber e mantém a proporção em qualquer
 * breakpoint. Só os tamanhos de texto mudam por breakpoint, porque a tela
 * do mockup encolhe de ~370px no mobile para ~220px em `lg`.
 */

/** Alumínio quente da carcaça — degradê entre dois tons de tinta do sistema. */
const shellSurface = { background: 'linear-gradient(155deg, var(--ink-muted), var(--ink))' };
/** Base do notebook: clareia para cima, como o reflexo de mesa. */
const baseSurface = { background: 'linear-gradient(180deg, var(--hairline), var(--ink-muted))' };
const shellShadow = { boxShadow: '0 34px 60px -32px rgba(26,24,21,0.55)' };
const phoneShadow = { boxShadow: '0 20px 36px -20px rgba(26,24,21,0.5)' };

/** Barra fina que representa texto não legível na escala do mockup. */
const Bar = ({ className }: { className: string }) => (
  <span className={cn('block rounded-sm bg-ink-inverse-muted', className)} />
);

/** Bloco abstrato no lugar da foto de produto da página exibida. */
const Artwork = ({ className }: { className?: string }) => (
  <div className={cn('relative overflow-hidden rounded-sm bg-hairline-dark', className)}>
    <span className="absolute -right-[15%] -top-[25%] h-[80%] w-[80%] rounded-full bg-accent opacity-25 blur-lg" />
    <span className="absolute bottom-[16%] left-[14%] h-[36%] w-[44%] rounded-sm bg-ink-inverse opacity-10" />
    <span className="absolute bottom-[16%] right-[14%] h-[20%] w-[24%] rounded-sm bg-ink-inverse opacity-[0.07]" />
  </div>
);

const DeviceShowcase = ({ content, className }: DeviceShowcaseProps) => (
  <div aria-hidden="true" className={cn('relative', className)}>
    {/* Tampa do notebook */}
    <div className="rounded-[10px] p-[1.4%]" style={{ ...shellSurface, ...shellShadow }}>
      <div className="overflow-hidden rounded-[6px] border border-hairline-dark bg-surface-dark">
        <div className="flex aspect-[16/11] flex-col">
          {/* Cabeçalho do site exibido */}
          <div className="flex items-center justify-between border-b border-hairline-dark px-[5%] py-[2.6%]">
            <span className="font-display text-[13px] leading-none text-accent lg:text-[9px] xl:text-[11px]">
              {content.brandInitial}
            </span>
            <div className="flex items-center gap-[6px] lg:gap-[4px]">
              {content.nav.map(item => (
                <span
                  key={item}
                  className="text-[7px] leading-none text-ink-inverse-muted lg:text-[5px] xl:text-[6px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Corpo: proposta à esquerda, imagem à direita */}
          <div className="flex flex-1 items-stretch gap-[5%] px-[5%] py-[4.5%]">
            <div className="flex w-[54%] flex-col justify-center">
              <h3 className="font-display text-[16px] leading-[1.12] text-ink-inverse lg:text-[10px] xl:text-[13px]">
                {content.headline}
              </h3>
              <p className="mt-[6%] text-[7px] leading-[1.6] text-ink-inverse-muted lg:text-[5px] xl:text-[6px]">
                {content.paragraph}
              </p>
              <span className="mt-[10%] inline-flex w-fit rounded-sm bg-accent px-[8px] py-[5px] text-[7px] font-medium leading-none text-ink lg:px-[5px] lg:py-[3px] lg:text-[5px] xl:px-[6px] xl:py-[4px] xl:text-[6px]">
                {content.buttonLabel}
              </span>
            </div>

            <Artwork className="min-w-0 flex-1" />
          </div>
        </div>
      </div>
    </div>

    {/* Dobradiça e base */}
    <div
      className="relative left-1/2 h-[9px] w-[114%] -translate-x-1/2 rounded-b-[7px] lg:h-[7px] xl:h-[9px]"
      style={baseSurface}
    >
      <span className="absolute left-1/2 top-0 h-[2px] w-[13%] -translate-x-1/2 rounded-b-sm bg-ink opacity-25" />
    </div>

    {/* Celular sobreposto ao canto inferior direito */}
    <div className="absolute -right-[8%] bottom-0 w-[27%]">
      <div className="rounded-[9px] p-[3.5%]" style={{ ...shellSurface, ...phoneShadow }}>
        <div className="relative overflow-hidden rounded-[6px] bg-surface-dark">
          <div className="flex aspect-[9/20] flex-col px-[9%] py-[7%]">
            <div className="flex items-center justify-between">
              <span className="font-display text-[9px] leading-none text-accent lg:text-[7px]">
                {content.brandInitial}
              </span>
              <span className="flex flex-col gap-[2px]">
                <Bar className="h-[1px] w-[7px] opacity-70" />
                <Bar className="h-[1px] w-[7px] opacity-70" />
              </span>
            </div>

            <h3 className="mt-[12%] font-display text-[9px] leading-[1.15] text-ink-inverse lg:text-[6px] xl:text-[7px]">
              {content.headline}
            </h3>

            <span className="mt-[8%] flex flex-col gap-[3px]">
              <Bar className="h-[2px] w-full opacity-45" />
              <Bar className="h-[2px] w-[80%] opacity-45" />
              <Bar className="h-[2px] w-[60%] opacity-45" />
            </span>

            <span className="mt-[10%] flex w-full items-center justify-center rounded-sm bg-accent py-[4px] text-[5px] font-medium leading-none text-ink lg:py-[3px] lg:text-[4px]">
              {content.buttonLabel}
            </span>

            <Artwork className="mt-[10%] min-h-0 flex-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DeviceShowcase;
