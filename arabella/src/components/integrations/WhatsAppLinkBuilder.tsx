import { useMemo, useState } from 'react';

const QUICK_TEMPLATES = [
  'Olá! Vi seu site e quero saber mais sobre o serviço.',
  'Oi! Pode me enviar a lista de planos e preços atualizada?',
  'Olá! Tenho interesse em agendar um horário ainda esta semana.',
] as const;

const sanitizeNumber = (value: string) => value.replace(/\D/g, '');

const buildWhatsAppLink = (phone: string, message: string) => {
  if (!phone) {
    return '';
  }

  const base = `https://wa.me/${phone}`;
  if (!message.trim()) {
    return base;
  }

  return `${base}?text=${encodeURIComponent(message)}`;
};

const WhatsAppLinkBuilder = () => {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const sanitizedPhone = useMemo(() => sanitizeNumber(phone), [phone]);
  const link = useMemo(() => buildWhatsAppLink(sanitizedPhone, message), [sanitizedPhone, message]);

  const handleCopyLink = async () => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const handleOpenLink = () => {
    if (!link) return;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleTemplateClick = (template: string) => {
    setMessage(template);
  };

  return (
    <div className="rounded-3xl border border-indigo-100/70 bg-white/95 p-6 shadow-[0_20px_70px_rgba(79,70,229,0.12)] lg:p-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]">
        <div className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="whatsapp-phone" className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
              Telefone (apenas números)
            </label>
            <input
              id="whatsapp-phone"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="55DDDNUMERO — ex: 5584999999999"
              value={phone}
              onChange={event => setPhone(sanitizeNumber(event.target.value))}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            />
            <p className="text-xs text-slate-500">Use o formato com DDI + DDD + número. Ex: 5584999999999.</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="whatsapp-message" className="block text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
              Mensagem (opcional)
            </label>
            <textarea
              id="whatsapp-message"
              rows={4}
              value={message}
              placeholder="Ex: Olá! Quero saber mais sobre..."
              onChange={event => setMessage(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-inner focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            />
            <div className="flex flex-wrap gap-2">
              {QUICK_TEMPLATES.map(template => (
                <button
                  type="button"
                  key={template}
                  onClick={() => handleTemplateClick(template)}
                  className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-medium text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100"
                >
                  {template.slice(0, 38)}...
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleOpenLink}
              disabled={!sanitizedPhone}
              className="flex w-full flex-1 items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition enabled:hover:-translate-y-0.5 enabled:hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400/70 sm:text-sm sm:tracking-[0.18em]"
            >
              Abrir no WhatsApp
            </button>
            <button
              type="button"
              onClick={handleCopyLink}
              disabled={!sanitizedPhone}
              className="flex w-full flex-1 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 transition hover:border-indigo-200 hover:text-indigo-700 disabled:cursor-not-allowed disabled:opacity-60 sm:text-sm sm:tracking-[0.18em]"
            >
              {copied ? 'Link copiado!' : 'Copiar link'}
            </button>
          </div>
        </div>

        <aside className="rounded-2xl border border-indigo-100/70 bg-indigo-50/60 p-5 text-sm leading-relaxed text-slate-700">
          <h3 className="text-base font-semibold text-slate-900">Como funciona</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>1. Cole o número com DDI e DDD no campo de telefone.</li>
            <li>2. Adicione uma mensagem pronta ou escreva sua própria.</li>
            <li>3. Clique em abrir para testar ou copie o link para usar no site.</li>
          </ul>
          <div className="mt-4 rounded-xl bg-white/90 p-4 shadow-inner">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Link gerado</p>
            <p className="mt-2 break-words text-sm text-slate-800">
              {link || 'Preencha o número para ver o link gerado.'}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default WhatsAppLinkBuilder;

