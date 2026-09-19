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
  {
    slug: "toronto",
    city: "Toronto",
    region: "Toronto",
    metaTitle:
      "Window & Door Repair in Toronto | Foggy Glass, Cranks & Seals | LuminaSky",
    metaDescription:
      "Fast, affordable window and door repair across Toronto. LuminaSky replaces sealed glass units, fixes cranks and hardware, and repairs door glass. Available 24/7 across the GTA. Fix it — don't replace it.",
    heroHeadline: "Window & Door Repair in Toronto",
    heroSubtext:
      "From century homes in Cabbagetown to condos along the Danforth — professional glass and window repair across all of Toronto. Repair first, replace only when necessary.",
    intro: [
      "Toronto homes come in every era — from century-old Cabbagetown row houses to mid-rise condos along the Danforth, post-war bungalows in the Beaches, and Edwardian semis in Roncesvalles. What they share is windows that eventually need attention. Foggy sealed units, jammed cranks, cracked door glass — we repair all of it without replacing what still works.",
      "LuminaSky Glass serves homeowners and condo residents across Toronto with targeted repairs instead of costly full replacements. We replace the sealed glass unit, swap a worn crank operator, or install a new door glass insert — on-site, usually in a single visit. We handle high-rise units too, working with property managers and condo boards to get the job done with minimal disruption.",
    ],
    neighborhoods: [
      "Downtown",
      "Leslieville",
      "Danforth",
      "Riverdale",
      "The Beaches",
      "Cabbagetown",
      "Roncesvalles",
      "High Park",
      "Bloor West Village",
      "The Annex",
      "Rosedale",
      "Forest Hill",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Condensation between your window panes means a failed seal. We replace the insulated glass unit without removing the frame — keeping your home's character intact.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Cracked, broken, or scratched glass in windows, doors, sidelights, and patio enclosures. We source and install standard, tempered, and custom glass for Toronto homes and condos.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Casement and awning window cranks that won't turn or have stripped gears. We replace the operator mechanism so the window opens and locks properly again.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Cracked or dated decorative door glass replaced with a modern insert. We work with all standard entry door sizes and heritage door profiles.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "Storm door glass swaps, new screen doors, and retractable screen installations for Toronto houses and townhomes.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Foggy or leaking skylights repaired without a full roof tear-out. We replace the glass and re-seal the unit on all major skylight brands.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Need a window or door fixed in Toronto? Text us a photo on WhatsApp for a fast quote — or call us any time, day or night.",
    faqs: [
      {
        q: "Do you work in condo buildings?",
        a: "Yes. We handle condo window and door repairs across Toronto. If your building requires insurance documentation or management approval, we provide everything you need.",
      },
      {
        q: "Do you cover all of Toronto?",
        a: "Yes — Downtown, Leslieville, the Danforth, the Beaches, Cabbagetown, Roncesvalles, High Park, Bloor West Village, the Annex, and every neighbourhood in between. We also serve North York, Scarborough, and Etobicoke.",
      },
      {
        q: "Can you work on older heritage windows?",
        a: "Absolutely. Many Toronto homes have original wood-frame windows worth preserving. We replace the glass and repair hardware without altering the frame — keeping the look your home was built with.",
      },
      {
        q: "Do I need to replace the whole window or just the glass?",
        a: "If the frame and sash are structurally sound, replacing just the sealed glass unit restores clarity and insulation at a fraction of the cost of full window replacement.",
      },
    ],
  },
  {
    slug: "mississauga",
    city: "Mississauga",
    region: "Peel Region",
    metaTitle:
      "Window & Door Repair in Mississauga | Foggy Glass, Cranks & Seals | LuminaSky",
    metaDescription:
      "Fast, affordable window and door repair across Mississauga. LuminaSky replaces sealed glass units, fixes cranks and hardware, and repairs door glass. Available 24/7 across the GTA. Fix it — don't replace it.",
    heroHeadline: "Window & Door Repair in Mississauga",
    heroSubtext:
      "Serving Port Credit, Streetsville, Erin Mills, Meadowvale, and all of Mississauga with professional glass and window repair. Fix it — don't replace it.",
    intro: [
      "Mississauga is the GTA's second-largest city, and its housing stock stretches across every decade — from the established homes of Port Credit and Lorne Park to the sprawling 1980s and 90s subdivisions of Erin Mills, Meadowvale, and Churchill Meadows. Homes from that era are now hitting the 25- to 40-year mark, which is exactly when factory-sealed glass units start fogging up and crank operators begin to fail.",
      "LuminaSky Glass helps Mississauga homeowners fix these problems without the cost and disruption of full window replacement. We replace only the failed component — the insulated glass unit, the crank mechanism, or the door lite — leaving your frames, trim, and siding untouched. One visit, one repair, and you're done.",
    ],
    neighborhoods: [
      "Port Credit",
      "Streetsville",
      "Meadowvale",
      "Erin Mills",
      "Clarkson",
      "Cooksville",
      "Malton",
      "Lorne Park",
      "Applewood",
      "Mineola",
      "Sheridan",
      "Churchill Meadows",
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
          "Cracked, shattered, or scratched glass in windows, patio doors, and sidelights. We measure, source, and install replacement glass for Mississauga homes.",
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
          "Storm door glass swaps, new screen doors, and retractable screen installations for Mississauga homes and townhomes.",
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
      "Dealing with foggy windows or broken door glass in Mississauga? Send us a photo on WhatsApp for a fast quote — or call any time.",
    faqs: [
      {
        q: "How fast can you get to Mississauga?",
        a: "We serve Mississauga regularly. Most appointments are scheduled for the same day or next day, and emergency calls get a response within 2 hours.",
      },
      {
        q: "My windows are from the 1980s — can you still get parts?",
        a: "Yes. We stock a wide range of crank operators, sealed units, and glass types compatible with the window brands installed in Mississauga's older subdivisions.",
      },
      {
        q: "Do you serve all of Mississauga?",
        a: "Yes — Port Credit, Streetsville, Meadowvale, Erin Mills, Clarkson, Cooksville, Lorne Park, Applewood, Churchill Meadows, and everywhere in between.",
      },
      {
        q: "Is it cheaper to repair or replace a foggy window?",
        a: "If the frame and sash are in good condition, repairing — replacing just the sealed glass unit — is significantly less expensive than full window replacement and restores full clarity and insulation.",
      },
    ],
  },
  {
    slug: "etobicoke",
    city: "Etobicoke",
    region: "Toronto",
    metaTitle:
      "Window & Door Repair in Etobicoke | Foggy Glass, Cranks & Seals | LuminaSky",
    metaDescription:
      "Fast, affordable window and door repair across Etobicoke. LuminaSky replaces sealed glass units, fixes cranks and hardware, and repairs door glass. Available 24/7 across the GTA. Fix it — don't replace it.",
    heroHeadline: "Window & Door Repair in Etobicoke",
    heroSubtext:
      "Professional glass and window repair across The Kingsway, Mimico, Long Branch, and all of Etobicoke. We fix it on-site — usually the same day you call.",
    intro: [
      "Etobicoke's established neighbourhoods — The Kingsway, Sunnylea, Alderwood, Thorncrest Village — are home to some of the GTA's most mature housing stock. Many of these homes still carry their original casement windows, crank operators, and decorative door glass from the 1950s through the 1980s. Along the lakeshore in Mimico, New Toronto, and Long Branch, a mix of older bungalows and newer condo developments brings its own set of window challenges.",
      "LuminaSky Glass specializes in the kind of repair work Etobicoke homeowners need most: replacing sealed glass units that have fogged over, swapping out crank mechanisms that have seized or stripped, and installing new door glass inserts to replace dated or cracked originals. We repair the component that failed — not the whole window — saving you time, money, and the hassle of a full tearout.",
    ],
    neighborhoods: [
      "The Kingsway",
      "Mimico",
      "New Toronto",
      "Long Branch",
      "Islington-City Centre",
      "Humber Bay",
      "Alderwood",
      "Sunnylea",
      "Princess Anne Manor",
      "Markland Wood",
      "Richview",
      "Thorncrest Village",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Failed window seals let moisture in between panes, clouding your view. We replace the sealed unit without disturbing the frame — restoring clarity and insulation.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Broken or cracked window and door glass replaced on-site. We handle standard, tempered, and custom-sized glass for Etobicoke's diverse housing stock.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Etobicoke's older casement windows often have worn-out crank operators. We replace the mechanism with compatible hardware so the window opens and closes smoothly again.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Replace cracked or outdated decorative door glass with a clean, modern insert. We work with all standard entry door sizes and styles.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "Storm door glass replacement, new screen doors, and retractable screen installations for Etobicoke homes.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Leaking or fogged skylights repaired without opening the roof. We replace the glazing and re-seal the unit for all skylight brands.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Need window or door repair in Etobicoke? Text us a photo on WhatsApp for a fast quote — or call us any time, day or night.",
    faqs: [
      {
        q: "How fast can you get to Etobicoke?",
        a: "We're in the Etobicoke area regularly. Most appointments are same-day or next-day, and emergency calls get a 2-hour response.",
      },
      {
        q: "My home has original 1960s windows — can you still repair them?",
        a: "In many cases, yes. If the frames are sound, we can replace the glass and hardware. If the frames are too far gone, we'll tell you honestly and recommend replacement.",
      },
      {
        q: "Do you cover all of Etobicoke?",
        a: "Yes — The Kingsway, Mimico, New Toronto, Long Branch, Humber Bay, Alderwood, Sunnylea, Markland Wood, and every neighbourhood in between. We also serve downtown Toronto, Mississauga, and North York.",
      },
      {
        q: "What's the advantage of repairing instead of replacing?",
        a: "If your frame and sash are solid, replacing just the sealed glass unit or the crank mechanism costs a fraction of a full window replacement — and keeps the original look and trim of your home intact.",
      },
    ],
  },
  {
    slug: "brampton",
    city: "Brampton",
    region: "Peel Region",
    metaTitle:
      "Window & Door Repair in Brampton | Foggy Glass, Cranks & Seals | LuminaSky",
    metaDescription:
      "Fast, affordable window and door repair across Brampton. LuminaSky replaces sealed glass units, fixes cranks and hardware, and repairs door glass. Available 24/7 across the GTA. Fix it — don't replace it.",
    heroHeadline: "Window & Door Repair in Brampton",
    heroSubtext:
      "Serving Bramalea, Heart Lake, Mount Pleasant, Castlemore, and all of Brampton with fast, professional window and glass repair.",
    intro: [
      "Brampton is one of the GTA's fastest-growing cities, with a housing mix that ranges from established 1970s subdivisions in Bramalea and Heart Lake to newer developments in Castlemore, Fletcher's Meadow, and Vales of Castlemore. Whether your home is 10 years old or 40, windows and doors eventually need attention — foggy sealed units, broken crank mechanisms, and cracked door glass are problems we see across every Brampton neighbourhood.",
      "LuminaSky Glass serves both homeowners and property managers across Brampton. We replace only the failed component — the insulated glass unit, the crank hardware, or the door insert — without tearing out the whole window or door frame. It's the practical, affordable approach, and we back every repair with a warranty.",
    ],
    neighborhoods: [
      "Bramalea",
      "Heart Lake",
      "Mount Pleasant",
      "Springdale",
      "Fletcher's Meadow",
      "Castlemore",
      "Bram West",
      "Downtown Brampton",
      "Sandalwood",
      "Vales of Castlemore",
      "Snelgrove",
      "Peel Village",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Cloudy windows with moisture between the panes? The factory seal has failed. We replace the insulated glass unit and leave the frame alone — clean and affordable.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Broken, cracked, or damaged glass in windows, patio doors, and sidelights. We source standard, tempered, and custom glass for residential and light commercial properties.",
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
          "Replace cracked or outdated decorative glass in your entry door. We handle standard sizes and order custom lites for non-standard doors.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "New screen doors, storm door glass replacement, and retractable screen installations for Brampton homes and townhomes.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Foggy or leaking skylights repaired in place — glass replaced and unit re-sealed without opening the roof.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Window or door problem in Brampton? Snap a photo and send it to us on WhatsApp — we'll reply with a quote fast. Or just call.",
    faqs: [
      {
        q: "Do you serve all of Brampton?",
        a: "Yes — Bramalea, Heart Lake, Mount Pleasant, Springdale, Castlemore, Fletcher's Meadow, Downtown Brampton, and every corner of the city. We also cover nearby Mississauga, Caledon, and Vaughan.",
      },
      {
        q: "Do you work with property managers and landlords?",
        a: "Absolutely. We handle residential and light commercial window and door repairs across Brampton. We can provide quotes per unit for multi-property work and carry full insurance documentation.",
      },
      {
        q: "My windows are builder-grade from the early 2000s — can you fix them?",
        a: "Yes. Builder-grade windows from that era are prime candidates for sealed unit replacement. The frames are usually fine — it's the glass seal and crank hardware that fail first.",
      },
      {
        q: "What areas near Brampton do you also cover?",
        a: "We serve the full GTA — Mississauga, Caledon, Vaughan, Toronto, and beyond. All from one mobile team.",
      },
    ],
  },
  {
    slug: "oakville",
    city: "Oakville",
    region: "Halton Region",
    metaTitle:
      "Window & Door Repair in Oakville | Foggy Glass, Cranks & Seals | LuminaSky",
    metaDescription:
      "Fast, affordable window and door repair across Oakville. LuminaSky replaces sealed glass units, fixes cranks and hardware, and repairs door glass. Available 24/7 across the GTA. Fix it — don't replace it.",
    heroHeadline: "Window & Door Repair in Oakville",
    heroSubtext:
      "Quality glass and window repair for Oakville homeowners — from Old Oakville to Glen Abbey. Family-run, no pressure, honest recommendations.",
    intro: [
      "Oakville homeowners invest in their properties — and they expect tradespeople who take the same care. Whether you're in a lakeside home in Bronte, a family neighbourhood in Glen Abbey or River Oaks, or a newer build in Joshua Creek, your windows and doors are a big part of your home's comfort and curb appeal. When sealed units fog up, cranks stop turning, or door glass cracks, you want it fixed right — not oversold on a full replacement you don't need.",
      "LuminaSky Glass is a family-run repair company that serves Oakville with a straightforward approach: we fix the part that's broken. If it's the sealed glass unit, we replace it. If it's the crank operator, we swap it. If it's the door insert, we install a new one. We'll always tell you honestly whether repair or replacement is the better call — and most of the time, repair is the answer.",
    ],
    neighborhoods: [
      "Bronte",
      "Kerr Village",
      "Old Oakville",
      "Glen Abbey",
      "River Oaks",
      "Iroquois Ridge",
      "West Oak Trails",
      "Joshua Creek",
      "Palermo",
      "Uptown Core",
      "College Park",
      "Falgarwood",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Condensation between your window panes signals a broken seal. We replace the insulated glass unit on-site, restoring your view and insulation without touching the frame.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Cracked, broken, or scratched glass in windows, sidelights, and patio doors. We source and install standard, tempered, and custom glass with care for your home's finish.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Casement and awning windows with seized or stripped cranks. We replace the operator mechanism with compatible hardware — no full window swap required.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Replace cracked or dated decorative glass in your front door with a clean, modern insert. We handle all standard entry door sizes and custom profiles.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "Storm door glass replacement, new screen doors, and retractable screen installations for Oakville homes.",
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
      "Need window or door repair in Oakville? Text us a photo on WhatsApp for a fast quote — or call any time, day or night.",
    faqs: [
      {
        q: "How soon can you get to Oakville?",
        a: "We service Oakville regularly. Most appointments are same-day or next-day, and emergency calls get a 2-hour response.",
      },
      {
        q: "Do you cover all of Oakville?",
        a: "Yes — Bronte, Kerr Village, Old Oakville, Glen Abbey, River Oaks, Iroquois Ridge, West Oak Trails, Joshua Creek, Palermo, and every neighbourhood in between. We also serve Burlington, Mississauga, and Milton.",
      },
      {
        q: "Will you tell me honestly if I need replacement instead of repair?",
        a: "Always. We're a repair-first company, but if the frame is rotted, warped, or structurally compromised, we'll recommend replacement and explain why. No pressure, no upsell.",
      },
      {
        q: "Can you match the glass type in my existing windows?",
        a: "Yes — we source double-pane, triple-pane, Low-E, and argon-filled units to match your existing setup. Your replacement glass will perform the same or better than the original.",
      },
    ],
  },
  {
    slug: "burlington",
    city: "Burlington",
    region: "Halton Region",
    metaTitle: "Window & Door Repair in Burlington | Foggy Glass, Cranks & Seals | LuminaSky",
    metaDescription:
      "Window and door repair in Burlington — foggy sealed units, broken cranks, glass replacement, door inserts across Roseland, Aldershot & Tyandaga. Available 24/7. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in Burlington",
    heroSubtext:
      "Serving Roseland, Aldershot, Tyandaga, and all of Burlington with fast, professional glass and window repair. Fix it — don't replace it.",
    intro: [
      "Burlington offers a mix of housing that few GTA cities can match — heritage homes along the lakeshore in Roseland and LaSalle Park, established 1970s and 80s suburban streets in Tyandaga and Palmer, and newer family subdivisions in Alton Village and Orchard. Each generation of home brings its own window headaches. Older lakefront properties contend with original casement windows and decorative door glass past its prime. The mid-century suburbs are squarely in the fog zone — sealed glass units installed 30 to 40 years ago losing their seals in waves.",
      "LuminaSky Glass serves Burlington homeowners with targeted repairs that skip the expense and disruption of full window replacement. We replace the sealed glass unit, swap a failing crank operator, or install a new door glass insert — on-site, usually in a single visit. Frames, trim, and siding stay untouched, and you save 60–80% compared to ripping everything out.",
    ],
    neighborhoods: [
      "Aldershot",
      "Downtown Burlington",
      "Roseland",
      "Tyandaga",
      "Millcroft",
      "Alton Village",
      "Orchard",
      "Headon Forest",
      "Palmer",
      "Dynes",
      "Mountainside",
      "LaSalle Park",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Condensation between your window panes means the seal has failed. We replace the insulated glass unit without disturbing the frame — restoring clarity and insulation.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Cracked, broken, or scratched glass in windows, patio doors, and sidelights. We source and install standard, tempered, and custom glass for Burlington homes.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Casement and awning window cranks that have seized or stripped. We swap the mechanism so your window opens and locks properly again.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Replace cracked or outdated decorative door glass with a clean, modern insert. We handle all standard entry door sizes and heritage door profiles.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "Storm door glass replacement, new screen doors, and retractable screen installations for Burlington properties.",
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
      "Dealing with foggy glass or a broken window in Burlington? Send us a photo on WhatsApp and get a quote back fast — or call any time.",
    faqs: [
      {
        q: "How fast can you get to Burlington?",
        a: "We service Burlington and Halton Region regularly. Same-day and next-day appointments are common, and emergency calls get a 2-hour response.",
      },
      {
        q: "Do you cover all of Burlington?",
        a: "Yes — Aldershot, Downtown Burlington, Roseland, Tyandaga, Millcroft, Alton Village, and every neighbourhood in between. We also serve nearby Oakville, Hamilton, and Milton.",
      },
      {
        q: "My lakefront home has large picture windows — can you repair them?",
        a: "Absolutely. We handle oversized sealed glass units and picture windows regularly. We measure on-site and order custom-sized replacement panels.",
      },
      {
        q: "Is it worth repairing older windows or should I replace them?",
        a: "If the frames and sashes are solid, repairing — replacing just the sealed glass unit — is significantly cheaper and preserves the look of your home. We'll tell you honestly if replacement is the better call.",
      },
    ],
  },
  {
    slug: "milton",
    city: "Milton",
    region: "Halton Region",
    metaTitle: "Window & Door Repair in Milton | Foggy Glass, Cranks & Seals | LuminaSky",
    metaDescription:
      "Window and door repair in Milton — foggy sealed units, broken cranks, glass replacement across Beaty, Scott, Timberlea & Old Milton. Available 24/7. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in Milton",
    heroSubtext:
      "Fast, affordable glass and window repair across Old Milton, Beaty, Scott, Timberlea, and all of Milton. Same-day service available.",
    intro: [
      "Milton has been one of Ontario's fastest-growing cities for over a decade, and its housing stock reflects that explosive expansion. Post-2000 subdivisions in Beaty, Coates, Scott, and Ford are filled with family homes whose builder-grade windows are now 15 to 20 years old — exactly the age when factory seals start failing, cranks strip, and door glass shows its wear. Closer to the Old Milton core, heritage homes along Main Street carry original wood-frame windows that need careful glass work and hardware repairs.",
      "LuminaSky Glass brings repair-first service to Milton homeowners. Instead of quoting full window replacement, we diagnose the actual problem — a failed seal, a worn crank, a cracked door lite — and fix only that component. Your frames stay in place, the job is done in one visit, and you keep thousands in your pocket compared to a tearout.",
    ],
    neighborhoods: [
      "Old Milton",
      "Beaty",
      "Coates",
      "Scott",
      "Ford",
      "Willmott",
      "Bowes",
      "Harrison",
      "Dempsey",
      "Timberlea",
      "Bronte Meadows",
      "Clarke",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Moisture between your double-pane glass means the seal has failed. We replace the insulated glass unit on-site — your frame stays untouched.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Cracked, broken, or damaged glass in windows, patio doors, and sidelights. We source standard, tempered, and custom glass for Milton homes.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Casement and awning windows that won't budge? We replace the worn-out crank operator with compatible hardware — no full window swap needed.",
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
          "Storm door glass swaps, new screen doors, and retractable screen installations for Milton homes and townhomes.",
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
      "Window or door problem in Milton? Snap a photo and send it to us on WhatsApp — we'll reply with a quote fast. Or just call.",
    faqs: [
      {
        q: "How quickly can you get to Milton?",
        a: "We service Milton and Halton Region regularly. Same-day and next-day appointments are typical, and emergency calls get a 2-hour response.",
      },
      {
        q: "My home is from a newer Milton subdivision — can builder-grade windows be repaired?",
        a: "Absolutely. Builder-grade windows from the 2000s and 2010s are prime candidates for sealed unit replacement. The vinyl frames are usually fine — it is the factory glass seal that fails first.",
      },
      {
        q: "Do you cover all of Milton?",
        a: "Yes — Old Milton, Beaty, Coates, Scott, Ford, Timberlea, Bronte Meadows, and every neighbourhood in between. We also serve nearby Oakville, Burlington, and Georgetown.",
      },
      {
        q: "What does foggy window repair cost in Milton?",
        a: "Most sealed unit replacements range from $150–$350 per window depending on size and glass type. Send us a photo for a free, no-obligation quote.",
      },
    ],
  },
  {
    slug: "ajax",
    city: "Ajax",
    region: "Durham Region",
    metaTitle: "Window & Door Repair in Ajax | Foggy Glass, Cranks & Seals | LuminaSky",
    metaDescription:
      "Window and door repair in Ajax — foggy sealed units, broken cranks, glass replacement across Duffin Heights, Applecroft & Downtown Ajax. Available 24/7. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in Ajax",
    heroSubtext:
      "Serving Applecroft, Duffin Heights, Central Ajax, and all of Ajax with fast, reliable glass and window repair. Fix it — don't replace it.",
    intro: [
      "Ajax sits on the eastern edge of the GTA, and its housing tells the story of two decades of steady suburban growth. The 1990s and 2000s brought waves of single-family homes and townhome complexes across Applecroft, Central Ajax, and Northeast Ajax — working-family neighbourhoods now hitting the 20- to 30-year mark where factory-sealed windows start to fog and crank operators wear thin. Newer builds in Duffin Heights push that timeline out, but even recent subdivisions aren't immune to early seal failures in builder-grade windows.",
      "LuminaSky Glass serves Ajax homeowners who want their windows fixed, not oversold on a full replacement. We replace only the failed component — the insulated glass unit, the crank mechanism, or the door insert — on-site in a single visit. Your frames and trim stay put, and the repair costs a fraction of tearing the whole window out.",
    ],
    neighborhoods: [
      "Downtown Ajax",
      "Applecroft",
      "Central Ajax",
      "Northeast Ajax",
      "Southeast Ajax",
      "Duffin Heights",
      "Riverside",
      "Central West Ajax",
      "Nottingham",
      "Pickering Village",
      "Audley",
      "Salem",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Cloudy windows with moisture between the panes? The factory seal has failed. We replace the insulated glass unit and leave the frame alone — clean and affordable.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Broken, cracked, or damaged glass in windows, patio doors, and sidelights. We source standard, tempered, and custom glass for Ajax homes and townhomes.",
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
          "Replace cracked or outdated decorative glass in your entry door. We handle standard sizes and order custom lites for non-standard doors.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "New screen doors, storm door glass replacement, and retractable screen installations for Ajax homes.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Foggy or leaking skylights repaired in place — glass replaced and unit re-sealed without opening the roof.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Need a window or door fixed in Ajax? Text us a photo on WhatsApp for a fast quote — or call us any time, day or night.",
    faqs: [
      {
        q: "How fast can you get to Ajax?",
        a: "We service Ajax and Durham Region regularly. Same-day and next-day appointments are typical, and emergency calls get a 2-hour response.",
      },
      {
        q: "Do you serve all of Ajax?",
        a: "Yes — Downtown Ajax, Applecroft, Duffin Heights, Central Ajax, Nottingham, Salem, and every neighbourhood in between. We also serve nearby Pickering, Whitby, and Scarborough.",
      },
      {
        q: "Do you work on townhome complexes?",
        a: "Absolutely. Townhome window repairs are a large part of our Ajax work. We handle individual units and can coordinate with property management for multi-unit projects.",
      },
      {
        q: "Is repairing a foggy window worth it in Ajax?",
        a: "If the frame and sash are in good condition, replacing just the sealed glass unit is significantly less expensive than full window replacement and restores full clarity and insulation.",
      },
    ],
  },
  {
    slug: "pickering",
    city: "Pickering",
    region: "Durham Region",
    metaTitle: "Window & Door Repair in Pickering | Foggy Glass, Cranks & Seals | LuminaSky",
    metaDescription:
      "Window and door repair in Pickering — foggy sealed units, broken cranks, glass replacement across Bay Ridges, Amberlea & Duffin Heights. Available 24/7. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in Pickering",
    heroSubtext:
      "Professional glass and window repair for Bay Ridges, Amberlea, Brock Ridge, and all of Pickering. Same-day service available.",
    intro: [
      "Pickering stretches from Lake Ontario's waterfront at Bay Ridges north through established 1980s and 90s subdivisions in Amberlea, Liverpool, and Brock Ridge, all the way to rural properties in Whitevale. Waterfront homes contend with harsh lake-effect weather that accelerates seal failure in double-pane windows. Inland, the mature suburban housing stock is hitting the 30- to 40-year mark where foggy glass, seized cranks, and cracked door inserts become constant headaches.",
      "LuminaSky Glass serves Pickering homeowners with a repair-first approach that saves time and money. We replace the sealed glass unit, swap a worn crank operator, or install new door glass — on-site, without removing your frames or disrupting your home. Most jobs are completed in a single visit, and you save 60–80% compared to full window replacement.",
    ],
    neighborhoods: [
      "Amberlea",
      "Bay Ridges",
      "Brock Ridge",
      "Highbush",
      "Liverpool",
      "Rosebank",
      "Rougemount",
      "Whitevale",
      "West Shore",
      "Duffin Heights",
      "Woodlands",
      "Village East",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Failed window seals let moisture in between panes, clouding your view. We replace the sealed unit without disturbing the frame — restoring clarity and insulation.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Broken or cracked window and door glass replaced on-site. We handle standard, tempered, and custom-sized glass for Pickering homes.",
        href: "/front-door-glass",
      },
      {
        name: "Window Crank & Operator Repair",
        description:
          "Casement and awning windows with seized or stripped cranks. We replace the operator mechanism with compatible hardware — no full window swap required.",
        href: "/cranks",
      },
      {
        name: "Front Door Glass Inserts",
        description:
          "Replace cracked or dated decorative glass in your front door with a clean, modern insert. We handle all standard entry door sizes.",
        href: "/front-door-glass",
      },
      {
        name: "Screen & Storm Doors",
        description:
          "Storm door glass replacement, new screen doors, and retractable screen installations for Pickering properties.",
        href: "/screen-storm-doors",
      },
      {
        name: "Skylight Repair",
        description:
          "Leaking or fogged skylights repaired without opening the roof. We replace the glazing and re-seal the unit for all skylight brands.",
        href: "/skylights",
      },
    ],
    closingCTA:
      "Need window or door repair in Pickering? Text us a photo on WhatsApp for a fast quote — or call us any time, day or night.",
    faqs: [
      {
        q: "How soon can you get to Pickering?",
        a: "We service Pickering and Durham Region regularly. Same-day and next-day appointments are available, and emergency calls get a 2-hour response.",
      },
      {
        q: "Do you handle waterfront properties in Bay Ridges?",
        a: "Yes. Waterfront homes with larger windows and exposure to lake-effect weather are a regular part of our work. We source durable replacement glass suited to the conditions.",
      },
      {
        q: "Do you cover all of Pickering?",
        a: "Yes — Amberlea, Bay Ridges, Brock Ridge, Liverpool, Highbush, Duffin Heights, and every neighbourhood in between. We also serve Ajax, Scarborough, and Markham.",
      },
      {
        q: "Can you match the glass in my existing windows?",
        a: "Yes — we source double-pane, triple-pane, Low-E, and argon-filled units to match your existing setup. Your replacement glass will perform the same or better than the original.",
      },
    ],
  },
  {
    slug: "caledon",
    city: "Caledon",
    region: "Peel Region",
    metaTitle: "Window & Door Repair in Caledon | Foggy Glass, Cranks & Seals | LuminaSky",
    metaDescription:
      "Window and door repair in Caledon — foggy sealed units, broken cranks, glass replacement across Bolton, Caledon East & Palgrave. Available 24/7. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in Caledon",
    heroSubtext:
      "Serving Bolton, Caledon East, Palgrave, and all of Caledon with professional glass and window repair. Estate homes, country properties, and everything in between.",
    intro: [
      "Caledon is Peel Region's rural heart — a municipality of rolling hills, horse farms, and small-town villages spread across a vast area. Bolton serves as the commercial hub, with a mix of historic main-street buildings and newer residential developments. Caledon East, Palgrave, and Inglewood feature century homes alongside modern custom builds. Throughout the area, oversized picture windows on country properties, heritage glass in village homes, and builder-grade sealed units in Mayfield West subdivisions all eventually need repair.",
      "LuminaSky Glass travels throughout Caledon to bring repair-first service to rural and village homeowners. We replace the sealed glass unit, swap a failing crank operator, or install new door glass — without tearing out your window frames. For estate homes with oversized or custom windows, we measure on-site and order panels sized to fit. One visit, one repair, and your windows are clear again.",
    ],
    neighborhoods: [
      "Bolton",
      "Caledon East",
      "Palgrave",
      "Alton",
      "Cheltenham",
      "Inglewood",
      "Belfountain",
      "Terra Cotta",
      "Mono Mills",
      "Caledon Village",
      "Mayfield West",
      "Southfields Village",
    ],
    services: [
      {
        name: "Foggy Glass / Sealed Unit Replacement",
        description:
          "Condensation between your window panes signals a broken seal. We replace the insulated glass unit on-site, restoring your view and insulation without touching the frame.",
        href: "/foggy-windows",
      },
      {
        name: "Glass Replacement",
        description:
          "Cracked, broken, or scratched glass in windows, sidelights, and patio doors. We handle standard and oversized panels for Caledon's larger custom homes.",
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
          "Storm door glass replacement, new screen doors, and retractable screen installations for Caledon properties.",
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
      "Need window or door repair in Caledon? Text us a photo on WhatsApp for a fast quote — or call us any time.",
    faqs: [
      {
        q: "Do you travel to all of Caledon?",
        a: "Yes — Bolton, Caledon East, Palgrave, Alton, Cheltenham, Inglewood, Belfountain, Terra Cotta, and the surrounding rural areas are all within our service zone.",
      },
      {
        q: "Can you handle oversized picture windows on rural properties?",
        a: "Absolutely. Country homes and estates with large picture windows or feature glass are a regular part of our work. We measure on-site and order custom-sized sealed units.",
      },
      {
        q: "How soon can you get to Caledon?",
        a: "We service Caledon regularly. Same-day and next-day appointments are available, and emergency calls get a 2-hour response.",
      },
      {
        q: "What areas near Caledon do you also cover?",
        a: "We serve the full surrounding area — Brampton, Orangeville, Bolton, Georgetown, and Vaughan are all in our regular service zone.",
      },
    ],
  },
  {
    slug: "whitby",
    city: "Whitby",
    region: "Durham Region",
    metaTitle: "Window & Door Repair in Whitby | Foggy Glass, Cranks & Seals | LuminaSky",
    metaDescription:
      "Window and door repair in Whitby — foggy sealed units, broken cranks, glass replacement across Brooklin, Pringle Creek & Port Whitby. Available 24/7. Call 437-344-8490.",
    heroHeadline: "Window & Door Repair in Whitby",
    heroSubtext:
      "Reliable glass and window repair across Brooklin, Downtown Whitby, Port Whitby, and all of Whitby. We fix it on-site — usually the same day you call.",
    intro: [
      "Whitby bridges Durham Region's suburban communities with small-town Ontario charm. Brooklin to the north retains its heritage village character with century homes along Baldwin Street and newer family subdivisions surrounding it. Downtown Whitby and Port Whitby along the lakefront feature a mix of mature 1970s and 80s housing. Further north, Taunton North is filled with newer family builds from the 2010s. Across all of these areas, windows and doors eventually need attention — foggy sealed units, stripped cranks, and cracked door glass are problems we solve every week.",
      "LuminaSky Glass helps Whitby homeowners get these issues fixed affordably. We replace only the component that's failed — the sealed glass unit, the crank operator, or the door insert — leaving your frames and trim untouched. Heritage Brooklin homes get glass-only repairs that preserve their character. Newer Taunton builds get quick seal replacements that skip the cost of a full window swap.",
    ],
    neighborhoods: [
      "Downtown Whitby",
      "Brooklin",
      "Pringle Creek",
      "Blue Grass Meadows",
      "Rolling Acres",
      "Williamsburg",
      "Lynde Creek",
      "Port Whitby",
      "Taunton North",
      "West Lynde",
      "Otter Creek",
      "Rossland",
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
          "Cracked, shattered, or scratched glass in windows, patio doors, and sidelights. We measure, source, and install replacement glass for Whitby homes.",
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
          "Storm door glass swaps, new screen doors, and retractable screen installations for Whitby homes and townhomes.",
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
      "Dealing with foggy windows or broken door glass in Whitby? Send us a photo on WhatsApp for a fast quote — or call any time.",
    faqs: [
      {
        q: "How fast can you get to Whitby?",
        a: "We service Whitby and Durham Region regularly. Most appointments are scheduled for the same day or next day, and emergency calls get a response within 2 hours.",
      },
      {
        q: "Do you serve both Brooklin and downtown Whitby?",
        a: "Yes — Brooklin, Downtown Whitby, Port Whitby, Taunton North, and every neighbourhood in between. We also serve nearby Ajax, Oshawa, and Pickering.",
      },
      {
        q: "Can you work on older heritage windows in Brooklin?",
        a: "Absolutely. Heritage homes with original wood-frame windows are ideal candidates for glass-only repair. We replace the sealed unit while preserving the frame and the character of the home.",
      },
      {
        q: "What does foggy window repair cost in Whitby?",
        a: "Most sealed unit replacements range from $150–$350 per window depending on size and glass type. Send us a photo for a free, no-obligation quote.",
      },
    ],
  },
];

export function getCityPageData(slug: string): CityPageData | undefined {
  return CITY_PAGES.find((c) => c.slug === slug);
}
