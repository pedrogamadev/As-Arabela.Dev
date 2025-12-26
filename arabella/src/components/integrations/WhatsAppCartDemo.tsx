import { useMemo, useState } from 'react';

type Product = {
  id: string;
  name: string;
  price: number;
};

const PRODUCTS: Product[] = [
  { id: 'landing-basica', name: 'Landing page básica', price: 490.9 },
  { id: 'pacote-midias', name: 'Pacote redes sociais (30 artes)', price: 350.0 },
  { id: 'consultoria', name: 'Consultoria de marketing 1h', price: 150.0 },
];

const BUSINESS_NUMBER = '84991926432';

const formatCurrency = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const buildCartMessage = (items: Array<Product & { quantity: number }>, total: number) => {
  const lines = items.map(item => `• ${item.name} x${item.quantity} — ${formatCurrency(item.price)}`);

  return `Olá! Quero finalizar um pedido via site.\n\n${lines.join('\n')}\n\nTotal: ${formatCurrency(total)}.\nPodemos prosseguir?`;
};

const WhatsAppCartDemo = () => {
  const [cart, setCart] = useState(() =>
    PRODUCTS.map(product => ({
      ...product,
      quantity: product.id === 'landing-basica' ? 1 : 0,
    }))
  );

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const selectedItems = useMemo(() => cart.filter(item => item.quantity > 0), [cart]);

  const message = useMemo(() => {
    if (!selectedItems.length) {
      return 'Selecione algum item para gerar o pedido.';
    }

    return buildCartMessage(selectedItems, subtotal);
  }, [selectedItems, subtotal]);

  const handleQuantityChange = (productId: string, delta: number) => {
    setCart(current =>
      current.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.max(0, Math.min(item.quantity + delta, 9)) }
          : item
      )
    );
  };

  const handleCheckout = () => {
    if (!selectedItems.length) return;
    const url = `https://wa.me/${BUSINESS_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="grid gap-6 rounded-3xl border border-indigo-100/70 bg-white/95 p-6 shadow-[0_20px_70px_rgba(79,70,229,0.12)] lg:grid-cols-[minmax(0,0.6fr)_minmax(0,0.4fr)] lg:p-8">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900">Carrinho rápido</h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Ajuste quantidades e finalize enviando o resumo direto pro WhatsApp da equipe.
        </p>
        <div className="space-y-4">
          {cart.map(item => (
            <div
              key={item.id}
              className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                <span className="text-xs uppercase tracking-[0.18em] text-indigo-600">
                  {formatCurrency(item.price)}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleQuantityChange(item.id, -1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
                  aria-label={`Remover ${item.name}`}
                >
                  –
                </button>
                <span className="w-8 text-center text-sm font-semibold text-slate-900">{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => handleQuantityChange(item.id, 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-lg font-semibold text-slate-700 transition hover:border-indigo-200 hover:text-indigo-600"
                  aria-label={`Adicionar ${item.name}`}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <aside className="flex h-full flex-col rounded-2xl border border-indigo-100/70 bg-indigo-50/70 p-5 text-sm text-slate-700">
        <div className="flex items-center justify-between text-base font-semibold text-slate-900">
          <span>Total</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Número demonstrativo: {BUSINESS_NUMBER}. Ajuste para o WhatsApp real antes de usar.
        </p>
        <button
          type="button"
          onClick={handleCheckout}
          disabled={!selectedItems.length}
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition enabled:hover:-translate-y-0.5 enabled:hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400/70"
        >
          Finalizar no WhatsApp
        </button>
        <div className="mt-4 flex-1 rounded-xl bg-white/95 p-4 shadow-inner">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Mensagem enviada</p>
          <p className="mt-2 whitespace-pre-line text-sm text-slate-800">{message}</p>
        </div>
      </aside>
    </div>
  );
};

export default WhatsAppCartDemo;
