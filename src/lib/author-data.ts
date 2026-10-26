export const AUTHOR = {
  name: "Dan",
  jobTitle: "Lead Glass Specialist",
  employer: "LuminaSky Glass Services",
  bio: "Dan leads the glass repair team at LuminaSky Glass Services, serving the Greater Toronto Area since 2020. With hands-on experience across hundreds of residential and commercial glass projects, Dan writes about practical fixes, pricing, and what Toronto homeowners should know before replacing a window. All blog posts are reviewed for accuracy against current LuminaSky job records.",
  url: "https://www.luminasky.com/about",
  phone: "437-344-8490",
  email: "service@luminasky.com",
};

export const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: AUTHOR.name,
  jobTitle: AUTHOR.jobTitle,
  worksFor: {
    "@type": "LocalBusiness",
    name: AUTHOR.employer,
    url: "https://www.luminasky.com",
    telephone: "+1-437-344-8490",
    email: AUTHOR.email,
    address: {
      "@type": "PostalAddress",
      addressRegion: "ON",
      addressCountry: "CA",
      addressLocality: "Thornhill",
    },
  },
  knowsAbout: [
    "Glass replacement",
    "Window repair",
    "Foggy window repair",
    "Sealed glass unit replacement",
    "Commercial glass services",
    "Emergency glass repair",
  ],
  url: AUTHOR.url,
};
