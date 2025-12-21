import { useState, useEffect } from 'react';
import {
  calcularOrcamento,
  generateWhatsAppMessage,
  OrcamentoFormValues,
  INITIAL_VALUES,
  LABELS,
  TipoSite,
} from '../features/orcamento/logic';
import '../orcamento.css';

const STEPS = [
  { id: 'projeto', title: 'Sobre o projeto' },
  { id: 'conteudo', title: 'Conteúdo e integrações' },
  { id: 'prazo', title: 'Prazo e suporte' },
  { id: 'cliente', title: 'Sobre você' },
];

export default function OrcamentosPage() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<OrcamentoFormValues>(INITIAL_VALUES);
  const [orcamento, setOrcamento] = useState(calcularOrcamento(INITIAL_VALUES));

  useEffect(() => {
    setOrcamento(calcularOrcamento(values));
  }, [values]);

  const handleNext = () => {
    if (step < STEPS.length - 1) {
        setStep(s => s + 1);
        window.scrollTo({ top: document.getElementById('orcamento-form')?.offsetTop ? document.getElementById('orcamento-form')!.offsetTop - 100 : 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(s => s - 1);
  };

  const handleChange = (field: keyof OrcamentoFormValues, value: any) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };
  
  const handleNestedChange = (parent: keyof OrcamentoFormValues, key: string, value: any) => {
      setValues(prev => ({
          ...prev,
          [parent]: {
              ...(prev[parent] as any),
              [key]: value
          }
      }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateWhatsAppMessage(values, orcamento);
    const url = `https://wa.me/5584991926432?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const scrollToForm = () => {
    document.getElementById('orcamento-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const showSummary = step === 3;

  return (
    <div className="orcamentos-page">
        {/* HERO */}
        <section className="hero" style={{ paddingBottom: '4rem' }}>
             <div className="hero__background" aria-hidden>
                <div className="hero__gradient" />
                <div className="hero__glow hero__glow--left" />
                <div className="hero__glow hero__glow--right" />
            </div>
            <div className="container" style={{ textAlign: 'center' }} />
        </section>

        <section id="orcamento-form" className={`container orcamento-grid ${!showSummary ? 'single-column' : ''}`} style={{ paddingBottom: '6rem' }}>
            
            {/* LEFT COLUMN - FORM */}
            <div className="stepper-container">
                 {/* Stepper Header */}
                 <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    {STEPS.map((s, idx) => (
                        <div key={s.id} style={{ flex: 1, height: '4px', background: idx <= step ? 'var(--color-primary)' : 'rgba(0,0,0,0.1)', borderRadius: '2px' }} />
                    ))}
                 </div>
                 <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {step === 0 && (
                        <>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Tipo de projeto</label>
                                <select 
                                    className="input-base"
                                    value={values.tipoSite} 
                                    onChange={e => handleChange('tipoSite', e.target.value)}
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}
                                >
                                    {Object.entries(LABELS.tipoSite).map(([key, label]) => (
                                        <option key={key} value={key}>{label}</option>
                                    ))}
                                </select>
                            </div>
                            {values.tipoSite === 'outros' && (
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Qual outro tipo?</label>
                                    <input 
                                        type="text" 
                                        value={values.outroTipoSite}
                                        onChange={e => handleChange('outroTipoSite', e.target.value)}
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}
                                    />
                                </div>
                            )}

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Quantidade de seções/páginas ({values.qtdSecoes})</label>
                                <input 
                                    type="range" 
                                    min="3" 
                                    max="12" 
                                    value={values.qtdSecoes} 
                                    onChange={e => handleChange('qtdSecoes', Number(e.target.value))}
                                    style={{ width: '100%' }}
                                />
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Nível de design</label>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    {[
                                        { val: 'simples', desc: 'Clean e funcional' },
                                        { val: 'intermediario', desc: 'Personalizado com animações sutis' },
                                        { val: 'premium', desc: 'Experiência imersiva e exclusiva' }
                                    ].map(opt => (
                                        <label key={opt.val} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem', border: values.designNivel === opt.val ? '2px solid var(--color-primary)' : '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', cursor: 'pointer', background: '#fff' }}>
                                            <input 
                                                type="radio" 
                                                name="designNivel" 
                                                value={opt.val} 
                                                checked={values.designNivel === opt.val}
                                                onChange={() => handleChange('designNivel', opt.val)}
                                                style={{ width: '1.2rem', height: '1.2rem' }}
                                            />
                                            <div>
                                                <strong style={{ display: 'block' }}>{LABELS.designNivel[opt.val as keyof typeof LABELS.designNivel]}</strong>
                                                <span style={{ fontSize: '0.9rem', color: 'var(--color-muted)' }}>{opt.desc}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {step === 1 && (
                         <>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Quem fornece o conteúdo?</label>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    {[
                                        { val: 'clienteTemTudo', label: LABELS.conteudo.clienteTemTudo },
                                        { val: 'clienteParcial', label: LABELS.conteudo.clienteParcial },
                                        { val: 'voceCria', label: LABELS.conteudo.voceCria }
                                    ].map(opt => (
                                        <label key={opt.val} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem', border: values.conteudo === opt.val ? '2px solid var(--color-primary)' : '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', cursor: 'pointer', background: '#fff' }}>
                                            <input 
                                                type="radio" 
                                                name="conteudo" 
                                                value={opt.val} 
                                                checked={values.conteudo === opt.val}
                                                onChange={() => handleChange('conteudo', opt.val)}
                                                style={{ width: '1.2rem', height: '1.2rem' }}
                                            />
                                            <span style={{ fontWeight: 500 }}>{opt.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Integrações necessárias</label>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    {Object.entries(LABELS.integracoes).map(([key, label]) => (
                                         <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px', cursor: 'pointer', background: '#fff' }}>
                                            <input 
                                                type="checkbox" 
                                                checked={(values.integracoes as any)[key]} 
                                                onChange={e => handleNestedChange('integracoes', key, e.target.checked)}
                                                style={{ width: '1.1rem', height: '1.1rem' }}
                                            />
                                            <span>{label}</span>
                                        </label>
                                    ))}
                                    <div style={{ marginTop: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>Outra integração:</label>
                                        <input 
                                            type="text" 
                                            placeholder="Ex: API sistema interno"
                                            value={values.integracoes.outro}
                                            onChange={e => handleNestedChange('integracoes', 'outro', e.target.value)}
                                            style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}
                                        />
                                    </div>
                                </div>
                            </div>
                         </>
                    )}

                    {step === 2 && (
                        <>
                             <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Prazo desejado</label>
                                <select 
                                    value={values.prazo}
                                    onChange={e => handleChange('prazo', e.target.value)}
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}
                                >
                                    {Object.entries(LABELS.prazo).map(([key, label]) => (
                                        <option key={key} value={key}>{label}</option>
                                    ))}
                                </select>
                            </div>

                             <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Suporte pós-entrega</label>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    {Object.entries(LABELS.suporte).map(([key, label]) => (
                                        <label key={key} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem', border: values.suporte === key ? '2px solid var(--color-primary)' : '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', cursor: 'pointer', background: '#fff' }}>
                                            <input 
                                                type="radio" 
                                                name="suporte" 
                                                value={key} 
                                                checked={values.suporte === key}
                                                onChange={() => handleChange('suporte', key)}
                                                style={{ width: '1.2rem', height: '1.2rem' }}
                                            />
                                            <span style={{ fontWeight: 500 }}>{label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Seu Nicho/Área</label>
                                <input 
                                    type="text" 
                                    value={values.nicho}
                                    onChange={e => handleChange('nicho', e.target.value)}
                                    placeholder="Ex: Odontologia, Moda, Tecnologia..."
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}
                                />
                            </div>

                            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Seu nome</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={values.nome}
                                        onChange={e => handleChange('nome', e.target.value)}
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>WhatsApp</label>
                                    <input 
                                        type="tel" 
                                        required
                                        value={values.whatsappContato}
                                        onChange={e => handleChange('whatsappContato', e.target.value)}
                                        placeholder="(00) 00000-0000"
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>E-mail</label>
                                <input 
                                    type="email" 
                                    required
                                    value={values.email}
                                    onChange={e => handleChange('email', e.target.value)}
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}
                                />
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Como nos conheceu?</label>
                                <input 
                                    type="text" 
                                    value={values.comoNosConheceu}
                                    onChange={e => handleChange('comoNosConheceu', e.target.value)}
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)' }}
                                />
                            </div>

                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Descrição do projeto</label>
                                <textarea 
                                    rows={4}
                                    value={values.descricaoProjeto}
                                    onChange={e => handleChange('descricaoProjeto', e.target.value)}
                                    placeholder="Conte em poucas linhas o que você imagina para o seu site..."
                                    style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.1)', fontFamily: 'inherit' }}
                                />
                            </div>

                            <label style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.5rem 0', cursor: 'pointer' }}>
                                <input 
                                    type="checkbox" 
                                    required
                                    checked={values.lgpd}
                                    onChange={e => handleChange('lgpd', e.target.checked)}
                                    style={{ width: '1.1rem', height: '1.1rem' }}
                                />
                                <span style={{ fontSize: '0.9rem', color: 'var(--color-muted)' }}>Autorizo o contato da Arabella.dev para envio da proposta</span>
                            </label>
                        </>
                    )}

                    {/* Navigation Buttons */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                         {step > 0 && (
                            <button type="button" onClick={handleBack} className="button button--ghost">
                                Voltar
                            </button>
                         )}
                         {step < STEPS.length - 1 ? (
                            <button type="button" onClick={handleNext} className="button button--primary" style={{ marginLeft: 'auto' }}>
                                Próximo
                            </button>
                         ) : (
                            <button type="submit" className="button button--primary" style={{ marginLeft: 'auto' }}>
                                Solicitar Proposta via WhatsApp
                            </button>
                         )}
                    </div>

                 </form>
            </div>

            {/* RIGHT COLUMN - SUMMARY */}
            {showSummary && (
                <aside className="summary-card">
                    <div style={{ 
                        background: '#fff', 
                        padding: '2rem', 
                        borderRadius: '24px', 
                        boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                        border: '1px solid rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{ margin: '0 0 1.5rem', fontFamily: 'Poppins, sans-serif' }}>Resumo do Orçamento</h3>
                        
                        <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Tipo de Projeto</span>
                                <strong style={{ color: 'var(--color-primary)' }}>
                                    {LABELS.tipoSite[values.tipoSite]}
                                    {values.tipoSite === 'outros' && (values.outroTipoSite ? ` (${values.outroTipoSite})` : ' (Outro)')}
                                </strong>
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Prazo</span>
                                <strong>
                                    {LABELS.prazo[values.prazo]}
                                </strong>
                            </div>
                            <div>
                                <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Nível Design</span>
                                <strong style={{ textTransform: 'capitalize' }}>
                                    {LABELS.designNivel[values.designNivel]}
                                </strong>
                            </div>
                        </div>

                        <div style={{ background: '#f5f6fc', padding: '1.5rem', borderRadius: '16px', textAlign: 'center' }}>
                            <span style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-muted)' }}>Estimativa de investimento</span>
                            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--color-secondary)' }}>
                                R$ {orcamento.precoMinimo.toLocaleString('pt-BR')} – R$ {orcamento.precoMaximo.toLocaleString('pt-BR')}
                            </div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--color-muted)', marginTop: '0.5rem', lineHeight: 1.4 }}>
                                Valor sujeito a ajustes após alinhamento de escopo.
                            </p>
                        </div>
                    </div>
                </aside>
            )}

        </section>
    </div>
  );
}
