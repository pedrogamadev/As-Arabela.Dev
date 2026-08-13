import { cn } from '../../lib/utils';

interface BrowserMockupProps {
  /** `dark` inverte a moldura para uso sobre a seção de case. */
  tone?: 'light' | 'dark';
  className?: string;
}

/**
 * Moldura de navegador com wireframe abstrato em blocos.
 *
 * Estático e decorativo: não é screenshot de página real e não carrega
 * imagem, então não entra no orçamento de LCP nem causa layout shift.
 */
const BrowserMockup = ({ tone = 'light', className }: BrowserMockupProps) => {
  const isDark = tone === 'dark';

  const frame = isDark ? 'border-hairline-dark bg-surface-dark' : 'border-hairline bg-surface-raised';
  const chrome = isDark ? 'border-hairline-dark' : 'border-hairline';
  const dot = isDark ? 'bg-hairline-dark' : 'bg-hairline';
  const block = isDark ? 'bg-hairline-dark' : 'bg-surface-alt';
  const strong = isDark ? 'bg-ink-inverse-muted' : 'bg-hairline';

  return (
    <div aria-hidden="true" className={cn('w-full border', frame, className)}>
      <div className={cn('flex items-center gap-1.5 border-b px-3 py-2.5', chrome)}>
        <span className={cn('h-2 w-2 rounded-full', dot)} />
        <span className={cn('h-2 w-2 rounded-full', dot)} />
        <span className={cn('h-2 w-2 rounded-full', dot)} />
        <span className={cn('ml-3 h-2 w-1/3 rounded-sm', block)} />
      </div>

      <div className="flex flex-col gap-4 p-5 md:p-6">
        <span className={cn('h-2 w-24 rounded-sm', strong)} />
        <span className={cn('h-6 w-4/5 rounded-sm', strong)} />
        <span className={cn('h-6 w-3/5 rounded-sm', block)} />
        <div className="flex gap-2 pt-1">
          <span className="h-7 w-28 rounded-sm bg-accent" />
          <span className={cn('h-7 w-20 rounded-sm', block)} />
        </div>

        <div className="grid grid-cols-3 gap-3 pt-4">
          {[0, 1, 2].map(index => (
            <div key={index} className="flex flex-col gap-2">
              <span className={cn('h-12 rounded-sm', block)} />
              <span className={cn('h-1.5 w-full rounded-sm', block)} />
              <span className={cn('h-1.5 w-2/3 rounded-sm', block)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowserMockup;
