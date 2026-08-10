export interface CityProject {
  title: string;
  description: string;
  beforeImage?: { src: string; alt: string };
  afterImage?: { src: string; alt: string };
  image?: { src: string; alt: string };
  mediaType?: "image" | "video";
  beforeVideo?: { src: string; alt: string };
  afterVideo?: { src: string; alt: string };
}

export interface CityReview {
  name: string;
  text: string;
  service: string;
}

export interface CityPageData {
  slug: string;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtext: string;
  intro: string[];
  neighborhoods: string[];
  services: {
    name: string;
    description: string;
    href: string;
  }[];
  featuredProject?: CityProject;
  review?: CityReview;
  closingCTA: string;
  faqs: { q: string; a: string }[];
}

export const CITY_PAGES: CityPageData[] = [
  {
    slug: "vaughan",
    city: "Vaughan",
    region: "York Region",
    metaTitle: "Window & Door Repair in Vaughan | Foggy Glass, Cranks & More",
    metaDescription:
      "LuminaSky Glass serves Vaughan for foggy window repair, glass replacement, door glass, window cranks & more. Available 24/7. Call 437-344-8490 for a fast quote.",
    heroHeadline: "Window & Door Repair in Vaughan",
    heroSubtext:
      "Fast, affordable glass and door repair across Woodbridge, Maple, Kleinburg, Concord, and all of Vaughan. Fix it — don't replace it.",
    intro: [
      "Vaughan homeowners know the value of keeping their homes in top shape — and windows are no exception. Whether you're in a newer build in Vellore Village or a mature home in Woodbridge, sealed glass units fail over time. Condensation between panes, broken cranks, and cracked door glass are problems we solve every week across Vaughan.",
      "LuminaSky Glass specializes in repair, not replacement. That means we fix the part that's broken — the glass unit, the crank mechanism, the door insert — without tearing out your entire window or door frame. It's faster, less disruptive, and typically costs 60–80% less than full replacement.",
    ],
    neighborhoods: [
      "Woodbridge",
      "Maple",
      "Kleinburg",
      "Concord",
      "Thornhill (Vaughan side)",
      "Vellore Village",
      "Sonoma Heights",
      "Patterson",
      "Brownridge",
      "West Woodbridge",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Condensation trapped between panes means the seal has failed. We replace the insulated glass unit (IGU) without touching the frame — same-day service available.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Cracked, chipped, or broken glass in windows, doors, or patio enclosures. We cut and install replacement glass on-site or order custom sizes.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Casement and awning window cranks wear out. We replace the mechanism with OEM-compatible hardware so your window opens and closes smoothly again.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Upgrade dated leaded glass to modern designs, or replace cracked door glass inserts. We work with all standard door glass sizes.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "New screen doors, storm door glass replacement, and retractable screen installation for Vaughan homes.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Leaking or foggy skylights repaired without a full roof tear-out. Glass replacement and re-sealing for all skylight types.",
        href: "/skylights",
      },
    ],
    featuredProject: {
      title: "Foggy Glass Repair — Vaughan",
      description:
        "This Vaughan homeowner had multiple windows with failed seals — heavy condensation had built up between the panes, blocking the view and reducing insulation. We replaced the sealed glass units in under an hour per window, restoring crystal-clear visibility without replacing the frames.",
      mediaType: "video",
      beforeVideo: {
        src: "/videos/foggy-glass-before.mp4",
        alt: "Foggy double-pane window with condensation trapped between the glass — Vaughan home before repair",
      },
      afterVideo: {
        src: "/videos/foggy-glass-after.mp4",
        alt: "Restored clear glass after sealed unit replacement by LuminaSky Glass — Vaughan home after repair",
      },
    },
    review: {
      name: "Rick David",
      text: "They came the next day and replaced the crank in short order. Their technicians were very polite, professional and FAST. All three repairs done for less money than any one of the windows would cost me to replace. I highly recommend Lumina Sky Windows. Call them and watch their MAJIC happen.",
      service: "Window Crank Repair",
    },
    closingCTA:
      "Need a window or door fixed in Vaughan? Text us a photo of the problem and get a fast quote — or call any time, day or night.",
    faqs: [
      {
        q: "How fast can you get to Vaughan?",
        a: "We serve Vaughan daily and can typically schedule same-day or next-day service. For emergencies, we respond within 2 hours.",
      },
      {
        q: "Do you work in all parts of Vaughan?",
        a: "Yes — Woodbridge, Maple, Kleinburg, Concord, Vellore Village, and everywhere in between. We also cover neighbouring areas like Richmond Hill and Thornhill.",
      },
      {
        q: "Do I really need to replace only the glass, not the whole window?",
        a: "In most cases, yes. If the frame, sash, and hardware are in good shape, replacing just the sealed glass unit fixes the fog and restores insulation at a fraction of the cost of full window replacement.",
      },
      {
        q: "What does foggy window repair cost in Vaughan?",
        a: "Most sealed unit replacements range from $150–$350 per window depending on size and glass type. We provide free quotes — send us a photo for a fast estimate.",
      },
    ],
  },
];

export function getCityPageData(slug: string): CityPageData | undefined {
  return CITY_PAGES.find((c) => c.slug === slug);
}
