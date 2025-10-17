import { useState } from 'react'
import { isEmail, isRequired, isWhatsapp } from '../lib/validators'

interface LeadFormValues {
  nome: string
  email: string
  whatsapp: string
}

const defaultValues: LeadFormValues = {
  nome: '',
  email: '',
  whatsapp: '',
}

const LeadForm = () => {
  const [values, setValues] = useState(defaultValues)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<keyof LeadFormValues, string>>({
    nome: '',
    email: '',
    whatsapp: '',
  })

  const handleChange = (field: keyof LeadFormValues, value: string) => {
    setValues(current => ({ ...current, [field]: value }))
    setErrors(current => ({ ...current, [field]: '' }))
  }

  const validate = () => {
    const nextErrors: Record<keyof LeadFormValues, string> = {
      nome: '',
      email: '',
      whatsapp: '',
    }

    if (!isRequired(values.nome)) {
      nextErrors.nome = 'Informe seu nome completo'
    }

    if (!isEmail(values.email)) {
      nextErrors.email = 'Digite um e-mail válido'
    }

    if (!isWhatsapp(values.whatsapp)) {
      nextErrors.whatsapp = 'Informe um número com DDD e país'
    }

    setErrors(nextErrors)
    return Object.values(nextErrors).every(message => message === '')
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) {
      return
    }

    setSubmitted(true)
    setValues(defaultValues)
  }

  if (submitted) {
    return (
      <div className="glass shadow-soft space-y-4 rounded-2xl p-6" role="status">
        <strong className="text-xl font-semibold text-white">Obrigado! 🎉</strong>
        <p className="text-sm text-white/70">
          Enviamos o resumo da estimativa para o seu e-mail. Nossa equipe entrará em contato em até 1 dia útil com um roadmap personalizado.
        </p>
        <a
          className="pill glass inline-flex w-fit text-sm font-medium text-white/80 transition hover:text-white"
          href="#scheduler"
          onClick={event => {
            event.preventDefault()
            document.dispatchEvent(new CustomEvent('scheduler:open'))
          }}
        >
          Agendar uma call agora
        </a>
      </div>
    )
  }

  return (
    <form className="glass shadow-soft space-y-5 rounded-2xl p-6" onSubmit={handleSubmit} noValidate>
      <h3 className="text-xl font-semibold text-white">Receba a estimativa detalhada</h3>
      <p className="text-sm text-white/70">Preencha seus dados para receber o PDF com investimentos, prazos e próximos passos.</p>
      <div className="space-y-2">
        <label htmlFor="lead-nome" className="text-sm font-medium text-white">
          Nome
        </label>
        <input
          id="lead-nome"
          name="nome"
          autoComplete="name"
          value={values.nome}
          onChange={event => handleChange('nome', event.target.value)}
          required
          className="w-full rounded-xl border border-white/10 bg-[rgb(var(--bg))] px-4 py-2 text-sm text-white placeholder-white/40 focus:border-blue-400 focus:outline-none"
        />
        {errors.nome && <span className="text-xs text-red-400">{errors.nome}</span>}
      </div>
      <div className="space-y-2">
        <label htmlFor="lead-email" className="text-sm font-medium text-white">
          E-mail
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={event => handleChange('email', event.target.value)}
          required
          className="w-full rounded-xl border border-white/10 bg-[rgb(var(--bg))] px-4 py-2 text-sm text-white placeholder-white/40 focus:border-blue-400 focus:outline-none"
        />
        {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
      </div>
      <div className="space-y-2">
        <label htmlFor="lead-whatsapp" className="text-sm font-medium text-white">
          WhatsApp
        </label>
        <input
          id="lead-whatsapp"
          name="whatsapp"
          inputMode="tel"
          placeholder="+55 11 99999-0000"
          value={values.whatsapp}
          onChange={event => handleChange('whatsapp', event.target.value)}
          required
          className="w-full rounded-xl border border-white/10 bg-[rgb(var(--bg))] px-4 py-2 text-sm text-white placeholder-white/40 focus:border-blue-400 focus:outline-none"
        />
        {errors.whatsapp && <span className="text-xs text-red-400">{errors.whatsapp}</span>}
      </div>
      <button type="submit" className="pill bg-blue-500 text-sm font-medium text-white shadow-soft transition hover:bg-blue-400">
        Receber estimativa completa
      </button>
    </form>
  )
}

export default LeadForm
