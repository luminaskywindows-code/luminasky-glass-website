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
    email: EMAIL.toLowerCase(),
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
      "https://www.instagram.com/luminasky_glass_services/",
    ],
  };
}

const PRICE_DISCLAIMER =
  "Prices based on average GTA jobs. Actual price may vary after on-site assessment, depending on size, accessibility, and specific project requirements. Call 437-344-8490 for exact quote.";

const STANDARD_HOURS = {
  "@type": "OpeningHoursSpecification" as const,
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "07:00",
  closes: "21:00",
};

const EMERGENCY_HOURS = {
  "@type": "OpeningHoursSpecification" as const,
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
};

const CONTACT_CHANNELS = [
  { "@type": "ServiceChannel", serviceUrl: "tel:+14373448490", name: "Phone" },
  {
    "@type": "ServiceChannel",
    serviceUrl: "https://wa.me/14373448490",
    name: "WhatsApp",
  },
  {
    "@type": "ServiceChannel",
    serviceUrl: `mailto:${EMAIL}`,
    name: "Email",
  },
];

export function generateServiceSchema(
  serviceName: string,
  serviceUrl: string,
  description: string,
  pricing?: {
    minPrice: number;
    maxPrice: number;
    priceDescription: string;
    is24x7?: boolean;
  }
) {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    serviceType: serviceName,
    provider: { "@id": BUSINESS_ID },
    url: `${SITE_URL}${serviceUrl}`,
    description,
    areaServed: SERVICE_AREAS.map((city) => ({ "@type": "City", name: city })),
  };

  if (pricing) {
    base.offers = {
      "@type": "AggregateOffer",
      priceCurrency: "CAD",
      lowPrice: pricing.minPrice,
      highPrice: pricing.maxPrice,
      description: `${pricing.priceDescription} ${PRICE_DISCLAIMER}`,
    };
    base.hoursAvailable = pricing.is24x7 ? EMERGENCY_HOURS : STANDARD_HOURS;
    base.availableChannel = CONTACT_CHANNELS;
  }

  return base;
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
      "@type": "Person",
      name: article.author,
      jobTitle: "Lead Glass Specialist",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "LuminaSky Glass Services",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
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
