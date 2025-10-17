import { useEffect } from 'react';
import type { FaqItem } from '../content/faq';

export interface OpenGraphMeta {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName: string;
}

export const getFaqJsonLd = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const getOrganizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Arabella.dev',
  url: 'https://www.arabella.dev',
  sameAs: [
    'https://www.linkedin.com/company/arabella-dev',
    'https://www.instagram.com/arabella.dev',
  ],
  logo: 'https://www.arabella.dev/logo.png',
});

const upsertJsonLd = (id: string, data: unknown) => {
  if (typeof document === 'undefined') {
    return;
  }

  const existing = document.getElementById(id) as HTMLScriptElement | null;
  const script: HTMLScriptElement = existing ?? document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.textContent = JSON.stringify(data);

  if (!existing) {
    document.head.appendChild(script);
  }
};

export const useFaqSchema = (items: FaqItem[]) => {
  useEffect(() => {
    upsertJsonLd('faq-schema', getFaqJsonLd(items));
    upsertJsonLd('org-schema', getOrganizationJsonLd());
  }, [items]);
};

export const applyOpenGraphMeta = ({
  title,
  description,
  image,
  url,
  siteName,
}: OpenGraphMeta) => {
  if (typeof document === 'undefined') {
    return;
  }

  const definitions: Array<[string, string]> = [
    ['og:title', title],
    ['og:description', description],
    ['og:image', image],
    ['og:url', url],
    ['og:site_name', siteName],
  ];

  definitions.forEach(([property, content]) => {
    let element = document.head.querySelector<HTMLMetaElement>(
      `meta[property="${property}"]`,
    );

    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }

    element.content = content;
  });

  document.title = title;

  const descriptionEl = document.head.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  );

  if (descriptionEl) {
    descriptionEl.content = description;
  }
};

export const useAnalytics = () => {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const src = import.meta.env.VITE_UMAMI_SCRIPT_URL;
    if (!src) {
      return;
    }

    if (document.querySelector(`script[src="${src}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = src;
    script.dataset.websiteId = 'arabella-dev';
    document.body.appendChild(script);
  }, []);
};
