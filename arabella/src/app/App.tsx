import { useMemo } from 'react'
import Hero from '../components/Hero'
import KPISection from '../components/KPI'
import Services from '../components/Services'
import Process from '../components/Process'
import Cases from '../components/Cases'
import EstimatorSection from '../components/Estimator'
import FaqSection from '../components/Faq'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Testimonials from '../components/Testimonial'
import Scheduler from '../components/Scheduler'
import {
  heroContent,
  heroLogos,
  heroCtas,
  heroKpis,
} from '../content/hero'
import { servicesContent } from '../content/services'
import { processSteps } from '../content/process'
import { casesContent } from '../content/cases'
import { faqItems } from '../content/faq'
import { schedulerConfig } from '../lib/brand'

const App = () => {
  const navItems = useMemo(
    () => [
      { id: 'services', label: 'Serviços' },
      { id: 'cases', label: 'Cases' },
      { id: 'process', label: 'Processo' },
      { id: 'estimator', label: 'Estimador' },
      { id: 'faq', label: 'FAQ' },
    ],
    [],
  )

  return (
    <div className="flex min-h-screen flex-col">
      <Nav navItems={navItems} ctaLabel="Receber proposta" />
      <main className="flex-1 space-y-24 pb-24">
        <Hero id="hero" content={heroContent} logos={heroLogos} ctas={heroCtas} />
        <KPISection items={heroKpis} />
        <Services id="services" services={servicesContent} />
        <Process id="process" steps={processSteps} />
        <Cases id="cases" cases={casesContent} />
        <Testimonials />
        <EstimatorSection id="estimator" />
        <FaqSection id="faq" items={faqItems} />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Scheduler floating schedulerUrl={schedulerConfig.url} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
