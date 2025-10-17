# Arabella.dev Landing Page

Projeto de landing page moderna para o estúdio web Arabella.dev, construído com Vite, React 18 e TypeScript. O foco é oferecer uma base pronta para evoluções rápidas, com conteúdo em português, tema claro/escuro e componentes acessíveis.

Estilos são definidos com Tailwind CSS v4 via plugin oficial `@tailwindcss/vite`, sem necessidade de configuração extra.

## Como este projeto foi criado

```bash
npm create vite@latest arabella -- --template react-ts
```

## Instalação e uso

```bash
npm i
npm run dev
```

## Build e preview

```bash
npm run build
npm run preview
```

## Estrutura principal

```
src/
  app/
    App.tsx
    main.tsx
    providers.tsx
  components/
    Hero.tsx, Nav.tsx, Services.tsx, ...
  content/
    hero.ts, services.ts, process.ts, cases.ts, faq.ts
  features/
    estimator/logic.ts
  lib/
    brand.ts, seo.ts, validators.ts
  assets/
    *.svg (logos, antes/depois)
  index.css
```

## Personalização

- **Tokens de marca:** edite `src/lib/brand.ts` para alterar gradientes, cores e espaçamentos.
- **Conteúdo editorial:** ajuste textos em `src/content/*.ts`.
- **Estimador:** refine os valores em `src/features/estimator/logic.ts`.
- **Tema:** o `ThemeProvider` em `src/app/providers.tsx` cuida do tema claro/escuro e persistência no `localStorage`.

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste os valores conforme necessário:

```
VITE_SCHEDULER_URL=https://calendly.com/your-link
VITE_UMAMI_SCRIPT_URL=
```

- `VITE_SCHEDULER_URL`: URL do iframe de agendamento (ex.: Calendly, HubSpot Meetings).
- `VITE_UMAMI_SCRIPT_URL`: script opcional do Umami (se vazio, nada é carregado).

## Lint e formatação

```bash
npm run lint
npm run format
```

## Recursos adicionais

- SEO: `src/lib/seo.ts` aplica metadados Open Graph e JSON-LD de FAQ/Organização.
- Acessibilidade: componentes consideram foco visível, teclado e `prefers-reduced-motion`.
- Scheduler: `src/components/Scheduler.tsx` renderiza o iframe inline e via modal flutuante.
