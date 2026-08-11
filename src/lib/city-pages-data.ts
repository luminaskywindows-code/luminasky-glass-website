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
  {
    slug: "thornhill",
    city: "Thornhill",
    region: "York Region",
    metaTitle: "Window & Door Repair in Thornhill | Sealed Units, Cranks & Glass",
    metaDescription:
      "LuminaSky Glass provides fast window and door repair in Thornhill — foggy glass, broken cranks, door inserts & more. Available 24/7. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in Thornhill",
    heroSubtext:
      "Reliable glass and window repair for Thornhill homeowners — from Royal Orchard to Thornlea. We fix it on-site, usually the same day.",
    intro: [
      "Thornhill sits at the crossroads of Vaughan and Markham, and its housing stock reflects that mix — mid-century brick bungalows along Centre Street, estate homes in Royal Orchard, and modern townhomes near Promenade Mall. Whatever the age of your home, windows and doors wear out. Failed seals cause fog between panes, old crank mechanisms seize up, and door glass cracks from settling or impact.",
      "We handle all of it without the cost and hassle of full window replacement. LuminaSky Glass replaces only the component that failed — the sealed glass unit, the operator hardware, or the door lite — so your frames, trim, and siding stay untouched. Most jobs are done in a single visit, and you save 60–80% compared to ripping everything out and starting over.",
    ],
    neighborhoods: [
      "Thornlea",
      "Royal Orchard",
      "Uplands",
      "Grandview",
      "German Mills",
      "Beverley Glen",
      "Centre Street Corridor",
      "Steeles & Yonge",
      "Spring Farm",
      "Langstaff",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Moisture between your panes means a broken seal. We swap out the insulated glass unit and leave the frame intact — often completed the same day you call.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Cracked or shattered glass in windows, sidelights, or patio doors. We measure, cut, and install on-site or source custom tempered and laminated glass.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Stuck casement or awning window? We replace worn-out crank operators with compatible hardware — no need to swap the entire window.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Replace outdated or damaged decorative door glass with modern inserts. We carry standard sizes and order custom lites for non-standard doors.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "Storm door glass swaps, new screen doors, and retractable screen installations for Thornhill homes.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Foggy or leaking skylights fixed without a full roof opening. We replace the glass and re-seal the unit for all skylight brands.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Dealing with a foggy window or broken glass in Thornhill? Send us a photo on WhatsApp for a fast quote — or call us any time.",
    faqs: [
      {
        q: "How quickly can you come to Thornhill?",
        a: "We're in the Thornhill area almost every day. Most appointments are same-day or next-day, and emergencies get a 2-hour response.",
      },
      {
        q: "My home is older — can you still get parts for the windows?",
        a: "Yes. We stock a wide range of crank operators, sealed units, and glass types that fit older casement and slider windows common in Thornhill's mature neighbourhoods.",
      },
      {
        q: "Is it worth repairing a foggy window or should I replace the whole thing?",
        a: "If the frame and sash are solid, replacing only the sealed glass unit is the smart move — it costs a fraction of full replacement and restores insulation and clarity.",
      },
      {
        q: "Do you cover both the Vaughan and Markham sides of Thornhill?",
        a: "Absolutely. We serve all of Thornhill regardless of municipal boundary — plus neighbouring areas like Richmond Hill, Vaughan, and Markham.",
      },
    ],
  },
  {
    slug: "richmond-hill",
    city: "Richmond Hill",
    region: "York Region",
    metaTitle: "Window & Door Repair in Richmond Hill | Glass, Cranks & Seals",
    metaDescription:
      "Window repair in Richmond Hill — foggy sealed units, cracked glass, broken cranks, door glass inserts. Fast mobile service, available 24/7. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in Richmond Hill",
    heroSubtext:
      "Serving Oak Ridges, Mill Pond, Bayview Hill, and all of Richmond Hill with fast, affordable glass and window repair. No full replacements needed.",
    intro: [
      "Richmond Hill has grown rapidly over the past two decades, and even relatively new homes are starting to show their age around the windows. In Oak Ridges and Jefferson, sealed units installed during the building boom of the 2000s are now fogging up as their seals fail. Older homes near the historic village core along Yonge Street often have casement windows with worn-out cranks or single-pane glass that's long overdue for an upgrade.",
      "LuminaSky Glass gets these problems fixed without the disruption of full window replacement. We replace only what's broken — the insulated glass unit, the crank hardware, the door lite — keeping your existing frames and trim in place. It's the faster, more affordable solution, and we back every repair with a warranty.",
    ],
    neighborhoods: [
      "Oak Ridges",
      "Mill Pond",
      "Bayview Hill",
      "Jefferson",
      "Observatory",
      "Richvale",
      "Westbrook",
      "Rouge Woods",
      "Harding Park",
      "North Richvale",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Failed window seals let moisture in between panes, clouding your view. We replace the sealed unit without disturbing the frame — fast turnaround available.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Broken or cracked window and door glass replaced on-site. We handle standard, tempered, and custom-sized glass for Richmond Hill homes.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Casement and awning window cranks that won't turn or have stripped gears. We swap the mechanism so the window works like new.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Cracked or dated door glass replaced with modern inserts. We match your door style and handle standard and custom sizes.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "Storm door glass replacement, new screen doors, and retractable screens for Richmond Hill properties.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Leaking or condensation-filled skylights repaired in place. Glass replacement and full re-sealing without roof surgery.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Got a window or door problem in Richmond Hill? Text us a photo and we'll send you a quote — or call us any time, day or night.",
    faqs: [
      {
        q: "How soon can you get to Richmond Hill?",
        a: "We service Richmond Hill regularly — same-day and next-day appointments are typical. Emergency calls are answered within 2 hours.",
      },
      {
        q: "My windows are only 10–15 years old but already foggy. Is that normal?",
        a: "Unfortunately, yes. Factory-sealed glass units have a typical lifespan of 15–20 years, and some fail sooner. The good news is replacing the glass unit is straightforward and much cheaper than replacing the whole window.",
      },
      {
        q: "Can you match the glass type in my existing windows?",
        a: "Yes. We source standard double-pane, triple-pane, Low-E, and argon-filled units to match what's already in your frames.",
      },
      {
        q: "What areas near Richmond Hill do you also cover?",
        a: "We serve the entire surrounding area — Thornhill, Vaughan, Markham, Aurora, Newmarket, and King City are all in our regular service zone.",
      },
    ],
  },
  {
    slug: "markham",
    city: "Markham",
    region: "York Region",
    metaTitle: "Window & Door Repair in Markham | Foggy Glass, Seals & Cranks",
    metaDescription:
      "LuminaSky Glass repairs foggy windows, broken cranks, cracked glass & door inserts across Markham. Mobile service, available 24/7. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in Markham",
    heroSubtext:
      "From Unionville heritage homes to new builds in Cornell — fast, reliable glass and window repair across all of Markham.",
    intro: [
      "Markham is one of the GTA's most diverse cities, and its housing stock is just as varied — century homes along Main Street Unionville, townhouse complexes in Milliken, sprawling new subdivisions in Cornell and Cathedraltown, and everything in between. Each style brings its own window challenges. Older wooden frames need glass upgrades. Newer vinyl casements develop seal failures and crank problems as they age past the 10-year mark.",
      "LuminaSky Glass handles it all with targeted repairs instead of costly full replacements. We swap out the failed sealed glass unit, replace a stripped crank operator, or install a new door glass insert — on-site, usually in a single visit. Your frames stay, your trim stays, and your wallet thanks you.",
    ],
    neighborhoods: [
      "Unionville",
      "Milliken",
      "Cornell",
      "Berczy Village",
      "Cathedraltown",
      "Thornhill (Markham side)",
      "Markham Village",
      "Angus Glen",
      "Wismer Commons",
      "Rouge River Estates",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Condensation between panes is a dead seal. We replace the insulated glass unit on-site — your frame and hardware stay in place.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Cracked, broken, or vandalized glass in windows, patio doors, and sidelights. We source and install standard and custom glass sizes.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Seized or broken crank mechanisms in casement and awning windows. We replace the operator so your window opens smoothly again.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Swap outdated or cracked decorative door glass for a fresh look. We work with all standard entry door glass sizes and styles.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "New screen doors, storm door glass replacement, and retractable screen installations across Markham.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Foggy or dripping skylights repaired without opening up your roof. We replace the glazing and re-seal the unit on all major brands.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Window or door issue in Markham? Snap a photo and text it to us on WhatsApp — we'll reply with a quote fast. Or just call.",
    faqs: [
      {
        q: "Do you serve all of Markham?",
        a: "Yes — Unionville, Milliken, Cornell, Berczy Village, Cathedraltown, Markham Village, and every neighbourhood in between. We also cover nearby Stouffville and Scarborough.",
      },
      {
        q: "Can you repair windows in newer subdivisions like Cornell or Cathedraltown?",
        a: "Absolutely. Even homes under 15 years old develop foggy sealed units and crank issues. We carry parts compatible with the window brands commonly used in GTA new builds.",
      },
      {
        q: "How much does it cost to fix a foggy window in Markham?",
        a: "Sealed unit replacements typically run $150–$350 per window depending on size and glass type. Send us a photo and we'll give you an exact quote.",
      },
      {
        q: "Do you also fix commercial storefront glass?",
        a: "Our focus is residential, but we do handle small commercial jobs like storefront glass and office window repairs. Call us to discuss your situation.",
      },
    ],
  },
  {
    slug: "north-york",
    city: "North York",
    region: "Toronto",
    metaTitle: "Window & Door Repair in North York | Glass, Cranks & Sealed Units",
    metaDescription:
      "Fast window and door repair in North York — foggy glass, sealed units, broken cranks, door inserts. Available 24/7 across Willowdale, Don Mills & more. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in North York",
    heroSubtext:
      "Professional glass and window repair across Willowdale, Don Mills, Bayview Village, York Mills, and all of North York. Same-day service available.",
    intro: [
      "North York's mix of post-war bungalows, 1980s split-levels, and modern condo towers means there's no shortage of window and door problems to solve. In Willowdale and Don Mills, decades-old casement windows have cranks that no longer turn and sealed units clouded with condensation. Along the Yonge corridor, condo owners deal with scratched balcony glass and failing patio door seals. In established pockets like York Mills and Bayview Village, original builder-grade windows are well past their prime.",
      "LuminaSky Glass fixes these issues at a fraction of the cost of full window replacement. We come to your home, diagnose the problem, and repair or replace only the failed component — the glass unit, the operator, or the door insert. No demolition, no reframing, no multi-week wait for a factory order.",
    ],
    neighborhoods: [
      "Willowdale",
      "Don Mills",
      "Bayview Village",
      "York Mills",
      "Lansing",
      "Newtonbrook",
      "Bathurst Manor",
      "Westminster–Branson",
      "Henry Farm",
      "Parkway Forest",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Cloudy double-pane windows mean the seal between the glass has broken down. We replace the sealed unit without removing the frame — quick and clean.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Broken window or door glass replaced on-site. We handle everything from single-pane basement windows to large tempered patio door panels.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Casement and awning windows that won't open or close? We replace the crank mechanism with compatible parts — no full window swap needed.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Cracked or dated decorative glass in your front door replaced with a modern insert. We work with all standard entry door sizes.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "Storm door glass swaps, screen repairs, and new retractable screen installations for North York homes.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Condensation-filled or leaking skylights repaired in place — glass replaced and unit re-sealed without opening the roof.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Need glass or window repair in North York? Text us a photo of the problem on WhatsApp and get a quote back fast — or call any time.",
    faqs: [
      {
        q: "How fast can you get to North York?",
        a: "We're in the North York area frequently. Same-day service is often available, and we respond to emergencies within 2 hours.",
      },
      {
        q: "Do you work in condo buildings?",
        a: "Yes, we do condo window and door repairs. If your building requires insurance or a management company approval, we can provide the documentation you need.",
      },
      {
        q: "My windows are original from the 1970s — can you still fix them?",
        a: "In many cases, yes. If the frames are sound, we can replace the glass and hardware. If the frames are too far gone, we'll tell you honestly and recommend replacement.",
      },
      {
        q: "What areas near North York do you also cover?",
        a: "We serve the entire GTA — Thornhill, Richmond Hill, Scarborough, Etobicoke, downtown Toronto, and more. All from one mobile team.",
      },
    ],
  },
];

export function getCityPageData(slug: string): CityPageData | undefined {
  return CITY_PAGES.find((c) => c.slug === slug);
}
