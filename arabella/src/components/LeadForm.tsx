import { useState } from 'react';
import { isEmail, isRequired, isWhatsapp } from '../lib/validators';

interface LeadFormValues {
  nome: string;
  email: string;
  whatsapp: string;
}

const defaultValues: LeadFormValues = {
  nome: '',
  email: '',
  whatsapp: '',
};

const LeadForm = () => {
  const [values, setValues] = useState(defaultValues);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<keyof LeadFormValues, string>>({
    nome: '',
    email: '',
    whatsapp: '',
  });

  const handleChange = (field: keyof LeadFormValues, value: string) => {
    setValues(current => ({ ...current, [field]: value }));
    setErrors(current => ({ ...current, [field]: '' }));
  };

  const validate = () => {
    const nextErrors: Record<keyof LeadFormValues, string> = {
      nome: '',
      email: '',
      whatsapp: '',
    };

    if (!isRequired(values.nome)) {
      nextErrors.nome = 'Informe seu nome completo';
    }

    if (!isEmail(values.email)) {
      nextErrors.email = 'Digite um e-mail válido';
    }

    if (!isWhatsapp(values.whatsapp)) {
      nextErrors.whatsapp = 'Informe um número com DDD e país';
    }

    setErrors(nextErrors);
    return Object.values(nextErrors).every(message => message === '');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    setSubmitted(true);
    setValues(defaultValues);
  };

  if (submitted) {
    return (
      <div className="lead-form__success" role="status">
        <strong>Obrigado! 🎉</strong>
        <p>
          Enviamos o resumo da estimativa para o seu e-mail. Nossa equipe entrará em contato em até
          1 dia útil com um roadmap personalizado.
        </p>
        <a
          className="button button--ghost"
          href="#scheduler"
          onClick={event => {
            event.preventDefault();
            document.dispatchEvent(new CustomEvent('scheduler:open'));
          }}
        >
          Agendar uma call agora
        </a>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <h3>Receba a estimativa detalhada</h3>
      <p>Preencha seus dados para receber o PDF com investimentos, prazos e próximos passos.</p>
      <div className="lead-form__group">
        <label htmlFor="lead-nome">Nome</label>
        <input
          id="lead-nome"
          name="nome"
          autoComplete="name"
          value={values.nome}
          onChange={event => handleChange('nome', event.target.value)}
          required
        />
        {errors.nome && <span className="field-error">{errors.nome}</span>}
      </div>
      <div className="lead-form__group">
        <label htmlFor="lead-email">E-mail</label>
        <input
          id="lead-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={event => handleChange('email', event.target.value)}
          required
        />
        {errors.email && <span className="field-error">{errors.email}</span>}
      </div>
      <div className="lead-form__group">
        <label htmlFor="lead-whatsapp">WhatsApp</label>
        <input
          id="lead-whatsapp"
          name="whatsapp"
          inputMode="tel"
          placeholder="+55 11 99999-0000"
          value={values.whatsapp}
          onChange={event => handleChange('whatsapp', event.target.value)}
          required
        />
        {errors.whatsapp && <span className="field-error">{errors.whatsapp}</span>}
      </div>
      <button type="submit" className="button button--primary">
        Receber estimativa completa
      </button>
    </form>
  );
};

export default LeadForm;
