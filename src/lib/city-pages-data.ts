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
  {
    slug: "scarborough",
    city: "Scarborough",
    region: "Toronto",
    metaTitle: "Window & Door Repair in Scarborough | Glass, Seals & Cranks",
    metaDescription:
      "LuminaSky Glass provides fast window and door repair across Scarborough — foggy glass, sealed units, broken cranks, door inserts & more. Available 24/7. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in Scarborough",
    heroSubtext:
      "Affordable glass and window repair from Agincourt to Birch Cliff — serving all of Scarborough with same-day mobile service.",
    intro: [
      "Scarborough's housing is as diverse as its communities. Post-war bungalows in Birch Cliff and Guildwood sit alongside 1970s and 80s side-splits in Bendale, high-rise clusters in Malvern, and detached homes across Agincourt. Many of these properties still have their original windows — and after 25 to 40 years, the sealed glass units have fogged over, the crank operators have seized, and the door glass inserts are scratched or cracked.",
      "LuminaSky Glass brings repair-first thinking to Scarborough homeowners. Instead of quoting you for a full window tearout, we replace only the failed component — the insulated glass unit, the crank mechanism, or the door lite. Your frames and trim stay put, the job is done in one visit, and you save significantly compared to full replacement.",
    ],
    neighborhoods: [
      "Agincourt",
      "Guildwood",
      "Birch Cliff",
      "Malvern",
      "Bendale",
      "West Hill",
      "Scarborough Village",
      "Woburn",
      "Highland Creek",
      "Morningside",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Moisture trapped between your double-pane glass means the seal has failed. We replace the insulated glass unit on-site — your frame stays untouched.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Cracked, shattered, or scratched glass in windows, patio doors, and sidelights. We measure, source, and install replacement glass the same day when possible.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Casement and awning windows that won't budge? We replace the worn-out crank operator with compatible hardware — no need to swap the whole window.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Dated or damaged decorative door glass replaced with a modern insert. We carry common sizes and order custom lites for non-standard doors.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "Storm door glass swaps, new screen doors, and retractable screen installations for Scarborough homes.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Foggy or leaking skylights fixed without a full roof tear-out. We replace the glass and re-seal the unit on all major skylight brands.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Need a window or door fixed in Scarborough? Text us a photo on WhatsApp for a quick quote — or call any time, day or night.",
    faqs: [
      {
        q: "How quickly can you get to Scarborough?",
        a: "We serve Scarborough regularly — same-day and next-day appointments are typical. Emergency calls get a 2-hour response.",
      },
      {
        q: "My house is from the 1970s — can you still get replacement parts?",
        a: "Yes. We carry a wide inventory of crank operators, sealed units, and glass types compatible with the window brands common in Scarborough's older neighbourhoods.",
      },
      {
        q: "Is repairing a foggy window worth it, or should I replace the whole window?",
        a: "If the frame and sash are structurally sound, replacing just the sealed glass unit is the smart call — it restores clarity and insulation at a fraction of full replacement cost.",
      },
      {
        q: "Do you cover all of Scarborough?",
        a: "Yes — Agincourt, Guildwood, Birch Cliff, Malvern, Bendale, West Hill, and everywhere in between. We also serve neighbouring areas like Markham, Pickering, and North York.",
      },
    ],
  },
  {
    slug: "aurora",
    city: "Aurora",
    region: "York Region",
    metaTitle: "Window & Door Repair in Aurora | Foggy Glass, Cranks & Seals",
    metaDescription:
      "Window and door repair in Aurora — foggy sealed units, broken cranks, glass replacement, door inserts. Fast mobile service, available 24/7. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in Aurora",
    heroSubtext:
      "Serving Aurora Village, Bayview Wellington, and all of Aurora with professional glass and window repair. Fix it — don't replace it.",
    intro: [
      "Aurora blends small-town charm with modern suburban growth. Heritage homes near Yonge Street and Wellington have original wood-frame windows that need glass upgrades and hardware repairs. Meanwhile, the subdivisions that grew through the 1990s and 2000s — Bayview Wellington, Hills of St Andrew, Aurora Highlands — are hitting the age where factory-sealed glass units fog up and casement crank operators start to fail.",
      "LuminaSky Glass serves Aurora with a repair-first approach. We replace the sealed glass unit, swap a broken crank operator, or install a new door glass insert — without removing your entire window or door frame. It's faster, cleaner, and typically saves you 60–80% compared to full replacement.",
    ],
    neighborhoods: [
      "Aurora Village",
      "Bayview Wellington",
      "Hills of St Andrew",
      "Aurora Highlands",
      "Aurora Grove",
      "Stonebridge",
      "St. Andrew's on the Hill",
      "Aurora Estates",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Condensation between your window panes signals a broken seal. We replace the insulated glass unit without disturbing the frame — restoring your view and insulation.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Broken or cracked glass in windows, doors, and patio enclosures. We source and install standard, tempered, and custom-sized glass for Aurora homes.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Casement and awning window cranks that have stripped or seized. We swap the mechanism so your window opens and locks properly again.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Replace cracked or outdated decorative door glass with a clean, modern insert. We handle all standard entry door glass sizes.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "Storm door glass replacement, new screen doors, and retractable screen installations for Aurora properties.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Leaking or fogged skylights repaired without a full roof opening. We replace the glazing and re-seal the unit for all skylight brands.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Dealing with foggy glass or a broken window in Aurora? Send us a photo on WhatsApp and get a quote back fast — or call any time.",
    faqs: [
      {
        q: "How fast can you get to Aurora?",
        a: "We service Aurora and the surrounding York Region regularly. Same-day and next-day appointments are common, and emergency calls get a 2-hour response.",
      },
      {
        q: "My windows are builder-grade from the early 2000s — can you fix them?",
        a: "Absolutely. Builder-grade windows from that era are prime candidates for sealed unit replacement. The frames are usually fine — it's the glass seal that fails first.",
      },
      {
        q: "What does foggy window repair cost in Aurora?",
        a: "Most sealed unit replacements run $150–$350 per window depending on size and glass type. Text us a photo for a fast, free estimate.",
      },
      {
        q: "Do you also serve Newmarket and King City?",
        a: "Yes — we cover Newmarket, King City, Richmond Hill, and the entire northern York Region from our mobile service team.",
      },
    ],
  },
  {
    slug: "woodbridge",
    city: "Woodbridge",
    region: "Vaughan",
    metaTitle: "Window & Door Repair in Woodbridge | Glass, Seals & Door Inserts",
    metaDescription:
      "LuminaSky Glass repairs foggy windows, broken cranks, cracked glass & door inserts across Woodbridge. Available 24/7. Call 437-344-8490 for a fast quote.",
    heroHeadline: "Window & Door Repair in Woodbridge",
    heroSubtext:
      "From Sonoma Heights to Islington Woods — fast, professional window and glass repair for Woodbridge homeowners. Repair, not replace.",
    intro: [
      "Woodbridge is one of Vaughan's most established communities, and its homes reflect decades of building. Custom-built estate homes along Islington Avenue sit next to family-friendly subdivisions in Sonoma Heights and Vellore Village, while older properties near the village core along Woodbridge Avenue still carry their original windows. These homes all share one thing in common: windows and doors that eventually need attention.",
      "LuminaSky Glass is Woodbridge's go-to for glass and window repair. We don't sell you a full window replacement when all you need is a new sealed glass unit or a replacement crank operator. Our approach is simple — fix the component that failed, leave everything else alone, and save you time and money in the process.",
    ],
    neighborhoods: [
      "Sonoma Heights",
      "Vellore Village",
      "West Woodbridge",
      "Islington Woods",
      "Pine Valley",
      "Market Lane",
      "Chancellor",
      "Woodbridge Core",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Failed seals let moisture in between panes. We replace the insulated glass unit on-site, leaving your frame and hardware intact — often done the same day.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Cracked, chipped, or broken glass in windows, sidelights, and patio doors. We cut and install replacement glass on-site or order custom tempered panels.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Stuck or stripped crank mechanisms in casement and awning windows. We replace the operator hardware so your window works smoothly again.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Upgrade or replace decorative glass inserts in your front door. We match standard sizes and order custom lites for oversized or arched doors.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "Storm door glass swaps, screen door installation, and retractable screen setups for Woodbridge homes.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Foggy or leaking skylights repaired without opening your roof. Glass replacement and re-sealing for all skylight types and brands.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Have a foggy window or broken door glass in Woodbridge? Text us a photo on WhatsApp for a fast quote — or call us any time, day or night.",
    faqs: [
      {
        q: "How fast can you get to Woodbridge?",
        a: "We're in the Woodbridge and Vaughan area daily. Same-day service is often available, and emergency calls get a 2-hour response.",
      },
      {
        q: "My home has custom oversized windows — can you still repair them?",
        a: "Yes. We order custom-sized sealed glass units and tempered panels to fit non-standard windows. Turnaround depends on the size, but we'll give you a clear timeline upfront.",
      },
      {
        q: "Do you serve both Woodbridge and the rest of Vaughan?",
        a: "Absolutely — Woodbridge, Maple, Kleinburg, Concord, and all of Vaughan are in our core service area. We also cover neighbouring Richmond Hill, King City, and Brampton.",
      },
      {
        q: "What's the difference between replacing the glass unit and replacing the whole window?",
        a: "Replacing the glass unit swaps only the sealed double- or triple-pane panel inside your existing frame. Full window replacement tears out the frame, sash, and trim. If your frame is in good shape, a glass-only swap is faster and far less expensive.",
      },
    ],
  },
  {
    slug: "maple",
    city: "Maple",
    region: "Vaughan",
    metaTitle: "Window & Door Repair in Maple | Foggy Glass, Cranks & More",
    metaDescription:
      "Fast window and door repair in Maple — foggy glass, sealed units, broken cranks, door inserts. Mobile service, available 24/7. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in Maple",
    heroSubtext:
      "Reliable glass and window repair across Maple Village, Eagle Hills, and all of Maple. We fix it on-site — usually the same day you call.",
    intro: [
      "Maple has transformed from a quiet village north of the city into one of Vaughan's fastest-growing communities. Subdivisions in Eagle Hills, Mackenzie Ridge, and Sabatini are filled with family homes built from the late 1990s through the 2010s — homes now old enough that their factory-sealed windows are developing condensation between panes and their crank hardware is wearing out. Closer to the historic Maple Village core, older properties face similar issues with aging glass and hardware.",
      "LuminaSky Glass helps Maple homeowners fix these problems affordably. We replace the failed sealed glass unit or the worn-out crank operator — not the entire window. Your frames stay in place, there's no mess from demolition, and the repair is done in a single visit. It's the practical, cost-effective way to keep your home comfortable and looking sharp.",
    ],
    neighborhoods: [
      "Maple Village",
      "Eagle Hills",
      "Cold Creek",
      "Sabatini",
      "Mackenzie Ridge",
      "Copper Hills",
      "Jackson's Point",
      "Heritage Estates",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Cloudy windows with condensation between the panes? The seal has failed. We replace the glass unit without removing the frame — clean and fast.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Cracked or broken window and door glass replaced on-site. We carry common sizes and source custom tempered, laminated, and Low-E glass.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Casement and awning windows that stick or won't close? We replace the crank mechanism with OEM-compatible parts — no full window swap required.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Replace cracked or outdated decorative glass in your front door with a fresh insert. We work with all standard entry door sizes and styles.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "New screen doors, storm door glass replacement, and retractable screens for Maple homes and townhomes.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Foggy or dripping skylights repaired without a roof opening. We replace the glazing and reseal the unit for all major brands.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Window or door problem in Maple? Snap a photo and send it to us on WhatsApp — we'll reply with a quote fast. Or just call.",
    faqs: [
      {
        q: "Do you serve all of Maple?",
        a: "Yes — Maple Village, Eagle Hills, Cold Creek, Sabatini, Mackenzie Ridge, and every corner of Maple. We also cover nearby Woodbridge, King City, and Richmond Hill.",
      },
      {
        q: "My windows are only 12–15 years old but fogging up. Is that normal?",
        a: "It's more common than people expect. Factory-sealed glass units can fail within 15 years, especially in builder-grade windows. Replacing just the glass unit is straightforward and much cheaper than a full window swap.",
      },
      {
        q: "How much does it cost to repair a foggy window in Maple?",
        a: "Most sealed unit replacements range from $150–$350 per window depending on size and glass type. Send us a photo for a free, no-obligation quote.",
      },
      {
        q: "Can you match the existing glass type in my windows?",
        a: "Yes — we source double-pane, triple-pane, Low-E, and argon-filled units to match your existing setup. Your replacement glass will perform the same or better than the original.",
      },
    ],
  },
  {
    slug: "king-city",
    city: "King City",
    region: "York Region",
    metaTitle: "Window & Door Repair in King City | Glass, Seals & Cranks",
    metaDescription:
      "Window and glass repair in King City — foggy sealed units, broken cranks, door glass inserts. Serving King City, Nobleton & area. Available 24/7. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in King City",
    heroSubtext:
      "Professional glass and window repair for King City, Nobleton, and the surrounding area. Estate homes, hobby farms, and everything in between.",
    intro: [
      "King City and the Township of King are known for large-lot estates, horse properties, and rural acreages set among rolling hills north of Vaughan. Many of these homes are custom-built with oversized windows, decorative door glass, and skylights that offer panoramic views of the countryside. When those sealed glass units fog up, when a crank operator fails on a hard-to-reach casement, or when a front door insert cracks — homeowners need a repair company that comes to them.",
      "LuminaSky Glass makes house calls across King City, Nobleton, and the surrounding area. We replace only the component that failed — the sealed glass unit, the crank hardware, the door lite — so you keep your custom frames and trim intact. No factory orders, no weeks of waiting, and no unnecessary expense.",
    ],
    neighborhoods: [
      "King City proper",
      "Kingscross Estates",
      "Mary Lake",
      "Kingsview",
      "Nobleton",
      "Kettleby",
      "Schomberg",
      "Pottageville",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Failed seals cause condensation between window panes. We replace the insulated glass unit without removing the frame — restoring clarity and insulation.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Broken or cracked glass in windows, sidelights, and patio doors. We handle standard and oversized panels for King City's larger custom homes.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Hard-to-reach casement and awning windows with failed cranks. We replace the operator mechanism so every window in your home opens properly.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Cracked or dated decorative glass in your front door replaced with a modern insert. We handle standard, oversized, and custom-shaped door glass.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "Storm door glass replacement, new screen doors, and retractable screen installations for King City properties.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Leaking or foggy skylights repaired in place — glass replaced and unit re-sealed without opening the roof. All skylight brands covered.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Need window or door repair in King City or Nobleton? Text us a photo on WhatsApp for a fast quote — or call us any time.",
    faqs: [
      {
        q: "Do you travel to King City and Nobleton?",
        a: "Yes — King City, Nobleton, Kettleby, and the surrounding Township of King are all within our regular service area. We also cover Aurora, Newmarket, and Vaughan.",
      },
      {
        q: "Can you handle oversized windows common in estate homes?",
        a: "Absolutely. We order custom-sized sealed glass units and tempered panels to fit non-standard and oversized windows. We'll measure on-site and give you a clear timeline.",
      },
      {
        q: "How soon can you get to King City?",
        a: "We service the King City area regularly. Same-day and next-day appointments are available, and emergency calls get a 2-hour response.",
      },
      {
        q: "Is it worth repairing windows on a rural property or should I replace them?",
        a: "If the frames are solid, repair is almost always the better value — especially for custom or oversized windows where replacement costs are high. We'll inspect and give you an honest recommendation.",
      },
    ],
  },
  {
    slug: "newmarket",
    city: "Newmarket",
    region: "York Region",
    metaTitle: "Window & Door Repair in Newmarket | Foggy Glass, Cranks & Seals",
    metaDescription:
      "LuminaSky Glass serves Newmarket for foggy window repair, glass replacement, door glass & cranks. Available 24/7. Call 437-344-8490 for a fast quote.",
    heroHeadline: "Window & Door Repair in Newmarket",
    heroSubtext:
      "Fast, affordable glass and window repair across Stonehaven, Summerhill Estates, Glenway, and all of Newmarket. Same-day service available.",
    intro: [
      "Newmarket sits at the northern edge of York Region's suburban belt, and its housing tells the story of decades of steady growth. The historic downtown along Main Street has century-old homes with wood-frame windows that need careful glass work. The subdivisions built through the 1980s and 90s — Stonehaven, Glenway, Woodland Hill — have reached the age where sealed glass units fail and crank mechanisms wear out. Even the newer builds in Summerhill Estates and Armitage aren't immune to early seal failures in builder-grade windows.",
      "LuminaSky Glass serves Newmarket with targeted repairs that skip the cost and disruption of full window replacement. We replace the sealed glass unit, swap a broken crank operator, or install a new door glass insert — all on-site, usually in a single visit. Your existing frames and trim stay in place, and the repair costs a fraction of tearing everything out.",
    ],
    neighborhoods: [
      "Stonehaven",
      "Summerhill Estates",
      "Glenway",
      "Woodland Hill",
      "Armitage",
      "Bristol-London",
      "Huron Heights",
      "Gorham-College Manor",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Moisture between your window panes means the factory seal has broken. We replace the insulated glass unit and leave the frame alone — quick and affordable.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Broken, cracked, or scratched glass in windows, patio doors, and sidelights. We source standard, tempered, and Low-E glass for Newmarket homes.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Casement and awning windows with worn-out or stripped cranks. We swap the operator mechanism so your window opens and seals correctly.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Dated or damaged decorative glass in your entry door replaced with a modern insert. We carry standard sizes and order custom lites.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "New screen doors, storm door glass replacement, and retractable screen installations for Newmarket homes.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Foggy or leaking skylights repaired in place. We replace the glass and re-seal the unit without opening up your roof.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Got a window or door issue in Newmarket? Text us a photo on WhatsApp and we'll send you a quote — or call us any time, day or night.",
    faqs: [
      {
        q: "How quickly can you get to Newmarket?",
        a: "We service Newmarket and northern York Region regularly. Same-day and next-day appointments are typical, and emergency calls get a 2-hour response.",
      },
      {
        q: "Do you cover all of Newmarket?",
        a: "Yes — Stonehaven, Summerhill Estates, Glenway, Woodland Hill, Armitage, and every neighbourhood in between. We also serve nearby Aurora, King City, and East Gwillimbury.",
      },
      {
        q: "My windows are builder-grade from the 1990s. Can you fix them?",
        a: "Yes — builder-grade windows from that era are our bread and butter. The frames are usually still solid; it's the sealed glass units and crank hardware that fail first. We replace those components affordably.",
      },
      {
        q: "What does a typical foggy window repair cost?",
        a: "Sealed unit replacements generally range from $150–$350 per window depending on size and glass type. Send us a photo for a free quote.",
      },
    ],
  },
];

export function getCityPageData(slug: string): CityPageData | undefined {
  return CITY_PAGES.find((c) => c.slug === slug);
}
