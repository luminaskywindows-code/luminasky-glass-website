import { SITE_URL, SERVICE_AREAS, COMPANY_NAME, EMAIL } from "./constants";

const PHONE_E164 = "+1-437-344-8490";
const BUSINESS_ID = `${SITE_URL}/#business`;

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": BUSINESS_ID,
    name: COMPANY_NAME,
    description:
      "Professional glass and door repair services in the Greater Toronto Area. Foggy glass, front door glass, window cranks, skylights and more.",
    url: SITE_URL,
    telephone: PHONE_E164,
    email: EMAIL,
    image: `${SITE_URL}/og-image.jpg`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo.png`,
    },
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, E-Transfer",
    areaServed: SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: city,
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: "120 Promenade Circle",
      addressLocality: "Thornhill",
      addressRegion: "ON",
      postalCode: "L4J 7W9",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.8088,
      longitude: -79.4525,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.facebook.com/LuminaSkyGlassServices",
      "https://www.instagram.com/lumina_sky_glass/",
    ],
  };
}

export function generateServiceSchema(
  serviceName: string,
  serviceUrl: string,
  description: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType: serviceName,
    provider: { "@id": BUSINESS_ID },
    url: `${SITE_URL}${serviceUrl}`,
    description,
    areaServed: SERVICE_AREAS.map((city) => ({ "@type": "City", name: city })),
  };
}

export function generateCityServiceSchema(opts: {
  name: string;
  serviceType: string;
  url: string;
  description: string;
  city: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    provider: { "@id": BUSINESS_ID },
    url: `${SITE_URL}${opts.url}`,
    description: opts.description,
    areaServed: { "@type": "City", name: opts.city },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${SITE_URL}${article.url}`,
    image: article.image ?? `${SITE_URL}/og-image.jpg`,
    datePublished: article.publishedAt,
    ...(article.updatedAt && { dateModified: article.updatedAt }),
    author: {
      "@type": "Organization",
      name: article.author,
      url: SITE_URL,
    },
    publisher: { "@id": BUSINESS_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${article.url}` },
  };
}

export function generateFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
