import { cn } from '../../lib/utils';

interface NotFoundMockupProps {
  /** Endereço exibido riscado na barra do navegador. */
  address: string;
  /** Dígitos ao redor do zero, desenhado como anel âmbar. */
  codeBefore: string;
  codeAfter: string;
  status: string;
  className?: string;
}

/**
 * Moldura de navegador com o código do erro no lugar do conteúdo.
 *
 * É o mesmo objeto do hero, agora quebrado: o endereço aparece riscado e
 * o wireframe se reduz a duas linhas vazias. Estático e decorativo — sem
 * imagem, sem custo de LCP e invisível para leitores de tela, já que o
 * texto do erro está no `h1` ao lado.
 */
const NotFoundMockup = ({
  address,
  codeBefore,
  codeAfter,
  status,
  className,
}: NotFoundMockupProps) => (
  <div
    aria-hidden="true"
    className={cn('w-full border border-hairline bg-surface-raised', className)}
  >
    <div className="flex items-center gap-1.5 border-b border-hairline px-3 py-2.5">
      <span className="h-2 w-2 flex-none rounded-full bg-hairline" />
      <span className="h-2 w-2 flex-none rounded-full bg-hairline" />
      <span className="h-2 w-2 flex-none rounded-full bg-hairline" />
      <span className="ml-3 flex h-6 min-w-0 flex-1 items-center rounded-sm bg-surface-alt px-2.5">
        <span className="truncate text-xs text-ink-muted line-through">{address}</span>
      </span>
    </div>

    <div className="flex flex-col items-center gap-6 px-5 py-12 md:py-16">
      <p className="flex items-center gap-3 font-display text-7xl leading-none text-ink md:text-8xl">
        <span>{codeBefore}</span>
        <span className="h-[0.62em] w-[0.62em] flex-none rounded-full border-[6px] border-accent md:border-8" />
        <span>{codeAfter}</span>
      </p>

      <p className="text-xs uppercase tracking-eyebrow text-ink-muted">{status}</p>

      <div className="flex w-full max-w-xs flex-col items-center gap-2 pt-2">
        <span className="h-1.5 w-full rounded-sm bg-surface-alt" />
        <span className="h-1.5 w-2/3 rounded-sm bg-surface-alt" />
      </div>
    </div>
  </div>
);

export default NotFoundMockup;
