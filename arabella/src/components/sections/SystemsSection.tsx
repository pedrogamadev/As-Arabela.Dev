import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  Building2,
  CalendarClock,
  Check,
  Code2,
  CreditCard,
  FileCheck2,
  GitBranch,
  GraduationCap,
  Handshake,
  HardDriveDownload,
  KeyRound,
  Lock,
  MessageCircle,
  Radar,
  Rocket,
  ScrollText,
  ShieldCheck,
  Store,
  TestTube2,
  TrendingUp,
  Users,
  Wallet,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Reveal from '../motion/Reveal';
import TypeCycle from '../motion/TypeCycle';
import WordsReveal from '../motion/WordsReveal';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import type { SystemIcon } from '../../content/systems';
import { ownershipModes, securityItems, systemCards, systemsHumorLines } from '../../content/systems';

const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site e quero um orçamento para desenvolvimento de sistema.';
const WHATSAPP_URL = `https://wa.me/5584991926432?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const cardIcons: Record<SystemIcon, LucideIcon> = {
  agendamento: CalendarClock,
  pagamentos: CreditCard,
  saas: Rocket,
  gestao: Building2,
  financeiro: Wallet,
  rh: Users,
  catalogo: Store,
  membros: GraduationCap,
};

const securityIcons: LucideIcon[] = [
  Lock,
  KeyRound,
  FileCheck2,
  HardDriveDownload,
  ScrollText,
  TestTube2,
  GitBranch,
  Radar,
];

const modeIcons: LucideIcon[] = [Wrench, Handshake, TrendingUp];

const SystemsSection = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const floatTransition = (duration: number) => ({
    duration,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut' as const,
  });

  return (
    <section
      id="sistemas"
      className="relative overflow-hidden py-20 text-white sm:py-28"
      style={{
        background:
          'linear-gradient(180deg, #060a20 0%, #101a4a 42%, #0d1338 74%, #060a20 100%)',
      }}
      aria-labelledby="sistemas-heading"
    >
      {/* Fundo animado */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, rgba(108,99,255,0.35), transparent 45%), radial-gradient(circle at 85% 15%, rgba(31,81,255,0.28), transparent 40%), radial-gradient(circle at 50% 95%, rgba(3,218,197,0.16), transparent 45%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at 50% 30%, black 10%, transparent 72%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 10%, transparent 72%)',
          }}
        />
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-indigo-500/25 blur-[130px]"
              animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
              transition={floatTransition(16)}
            />
            <motion.div
              className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-[130px]"
              animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
              transition={floatTransition(19)}
            />
            <motion.div
              className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-teal-400/15 blur-[120px]"
              animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
              transition={floatTransition(22)}
            />
          </>
        )}
      </div>

      <div className="container relative space-y-16 sm:space-y-20">
        {/* Cabeçalho */}
        <header className="mx-auto max-w-3xl space-y-6 text-center">
          <Reveal direction="down" distance={16}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-100 backdrop-blur">
              <Code2 className="h-3.5 w-3.5" aria-hidden />
              Desenvolvimento de sistemas
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-300" />
              </span>
            </span>
          </Reveal>

          <h2
            id="sistemas-heading"
            className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <WordsReveal
              text="Um time à sua disposição"
              highlight={[1]}
              highlightClassName="bg-gradient-to-r from-indigo-300 via-sky-300 to-teal-200 bg-clip-text text-transparent"
            />
          </h2>

          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed text-indigo-100/80">
              Crio um sistema para você. <strong className="font-semibold text-white">Para você usar</strong>,{' '}
              <strong className="font-semibold text-white">para você revender</strong> ou{' '}
              <strong className="font-semibold text-white">para virar o seu produto</strong>. Do agendamento
              simples ao SaaS completo — a porta toda, com um time por trás.
            </p>
          </Reveal>
        </header>

        {/* Máquina de escrever com as frases */}
        <Reveal delay={0.1} scale={0.98}>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/12 bg-white/[0.06] shadow-[0_30px_90px_rgba(4,8,35,0.55)] backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden />
              <span className="ml-2 text-xs font-medium uppercase tracking-[0.2em] text-indigo-200/70">
                arabella.dev — sistemas
              </span>
            </div>
            <div className="flex items-center gap-3 px-5 py-6 sm:px-7 sm:py-7">
              <span className="select-none font-mono text-base font-bold text-teal-300" aria-hidden>
                &gt;
              </span>
              <TypeCycle
                lines={systemsHumorLines}
                className="text-base font-medium leading-relaxed text-indigo-50 sm:text-lg"
                cursorClassName="text-teal-300"
              />
            </div>
          </div>
        </Reveal>

        {/* Catálogo de sistemas */}
        <div className="space-y-10">
          <Reveal>
            <div className="mx-auto max-w-2xl space-y-3 text-center">
              <h3 className="text-2xl font-bold sm:text-3xl">Do agendamento ao ERP: a porta toda</h3>
              <p className="text-base leading-relaxed text-indigo-100/70">
                Se dá pra descrever o processo, dá pra transformar em sistema. Estes são os que mais construímos.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {systemCards.map((card, index) => {
              const Icon = cardIcons[card.icon];

              return (
                <Reveal key={card.id} delay={index * 0.07} distance={30}>
                  <article className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.09] hover:shadow-[0_24px_70px_rgba(79,70,229,0.35)]">
                    <div
                      className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-indigo-400/25 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                      aria-hidden
                    />
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 text-white shadow-lg shadow-indigo-900/40 transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-6 w-6" aria-hidden />
                    </span>
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold leading-snug">{card.title}</h4>
                      <p className="text-sm leading-relaxed text-indigo-100/70">{card.description}</p>
                    </div>
                    <ul className="mt-auto space-y-2 border-t border-white/10 pt-4">
                      {card.bullets.map(bullet => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-indigo-100/85">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" aria-hidden />
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <p className="text-center text-sm italic text-indigo-100/60">
              Não achou o seu na lista? Melhor ainda — é o tipo de projeto que a gente gosta de orçar.
            </p>
          </Reveal>
        </div>

        {/* Segurança e boas práticas */}
        <div className="grid gap-10 rounded-3xl border border-white/12 bg-white/[0.04] p-7 backdrop-blur sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="right">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                Segurança e integridade
              </span>
              <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
                Proteger os dados do seu cliente não é item opcional
              </h3>
              <p className="text-base leading-relaxed text-indigo-100/75">
                É a parte chata que ninguém posta no Instagram — e é exatamente a que impede o seu domingo de
                virar plantão. Boas práticas não são luxo: são o que faz o sistema durar.
              </p>
              <p className="rounded-xl border-l-2 border-teal-300/60 bg-white/[0.05] px-4 py-3 text-sm italic text-indigo-100/80">
                “Funciona” é o começo da conversa. O resto é continuar funcionando com 10, 100 ou 10.000 usuários.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {securityItems.map((item, index) => {
              const Icon = securityIcons[index % securityIcons.length];

              return (
                <Reveal key={item.title} delay={index * 0.06} distance={22}>
                  <div className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:border-teal-300/35 hover:bg-white/[0.08]">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-400/15 text-teal-200">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold leading-snug text-white">{item.title}</p>
                      <p className="text-xs leading-relaxed text-indigo-100/65">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Modelos: usar, revender, virar produto */}
        <div className="space-y-10">
          <Reveal>
            <div className="mx-auto max-w-2xl space-y-3 text-center">
              <h3 className="text-2xl font-bold sm:text-3xl">Para usar. Para revender. Para vender como seu.</h3>
              <p className="text-base leading-relaxed text-indigo-100/70">
                O sistema é seu de verdade — inclusive o código. Você decide o que fazer com ele.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {ownershipModes.map((mode, index) => {
              const Icon = modeIcons[index % modeIcons.length];

              return (
                <Reveal key={mode.id} delay={index * 0.12} distance={34}>
                  <article className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-7 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-indigo-300/40 hover:shadow-[0_26px_80px_rgba(79,70,229,0.35)]">
                    <span className="absolute right-6 top-6 text-5xl font-black leading-none text-white/[0.07] transition duration-300 group-hover:text-white/[0.12]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-indigo-100 transition duration-300 group-hover:bg-indigo-400/25 group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200">{mode.kicker}</p>
                    <h4 className="text-lg font-semibold leading-snug">{mode.title}</h4>
                    <p className="text-sm leading-relaxed text-indigo-100/75">{mode.description}</p>
                    <p className="mt-auto border-t border-white/10 pt-4 text-sm font-medium italic text-indigo-100/90">
                      {mode.punchline}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Chamada final */}
        <Reveal scale={0.97}>
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-indigo-600/35 via-indigo-500/15 to-teal-400/15 p-8 text-center backdrop-blur sm:p-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 0%, rgba(255,255,255,0.22), transparent 45%), radial-gradient(circle at 80% 100%, rgba(3,218,197,0.22), transparent 45%)',
              }}
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl space-y-6">
              <h3 className="text-3xl font-black leading-tight sm:text-4xl">
                <WordsReveal text="Um time à sua disposição." stagger={0.07} />
              </h3>
              <p className="text-base leading-relaxed text-indigo-50/85 sm:text-lg">
                Me conta o que você precisa que eu volto com escopo, prazo e preço — sem enrolação e sem letra
                miúda. O orçamento é de graça; o sistema, combinado antes de começar.
              </p>

              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/orcamentos"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-indigo-900 shadow-[0_20px_50px_rgba(4,8,35,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_26px_60px_rgba(4,8,35,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  Quero um orçamento
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden />
                  Falar no WhatsApp
                </a>
              </div>

              <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">
                Resposta no mesmo dia útil • Escopo por escrito • Sem compromisso
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SystemsSection;
