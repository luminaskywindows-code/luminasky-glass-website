import { CITY_PAGES } from "./city-pages-data";

export interface FoggyGlassCityPageData {
  slug: string;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  neighborhoods: string[];
  citySpecificFaq: { q: string; a: string };
}

function getNeighborhoods(slug: string): string[] {
  const city = CITY_PAGES.find((c) => c.slug === slug);
  return city ? city.neighborhoods : [];
}

export const FOGGY_GLASS_CITY_PAGES: FoggyGlassCityPageData[] = [
  {
    slug: "toronto",
    city: "Toronto",
    region: "Toronto",
    metaTitle: "Foggy Glass Repair in Toronto | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Toronto — Cabbagetown, the Danforth, the Beaches and beyond. Fix the seal failure without replacing the whole window. Free photo quote.",
    intro:
      "Toronto's housing stock spans more than a century — from pre-war brick row houses in Cabbagetown and Riverdale to mid-century bungalows in the Beaches and modern mid-rise condos along the Danforth. What they all share is windows that eventually fog up. LuminaSky replaces the failed sealed glass unit without touching the frame, sash, or hardware — saving Toronto homeowners 60–80% vs full window replacement.",
    neighborhoods: getNeighborhoods("toronto"),
    citySpecificFaq: {
      q: "Do you handle condo and high-rise foggy glass in Toronto?",
      a: "Yes. We work with condo boards, property managers, and individual unit owners across Toronto. High-rise access is handled with proper equipment and building coordination.",
    },
  },
  {
    slug: "mississauga",
    city: "Mississauga",
    region: "Peel Region",
    metaTitle: "Foggy Glass Repair in Mississauga | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Mississauga — Erin Mills, Port Credit, Meadowvale and more. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Mississauga's massive inventory of 1970s through 1990s subdivisions — Erin Mills, Meadowvale, Churchill Meadows — puts thousands of homes squarely in the prime window-fog age bracket. Sealed glass units installed 25 to 40 years ago are failing in waves across the city. LuminaSky swaps out the clouded IGU on-site, leaving the frame and hardware untouched, so Mississauga homeowners restore clarity at a fraction of full window replacement cost.",
    neighborhoods: getNeighborhoods("mississauga"),
    citySpecificFaq: {
      q: "Do you service Mississauga condo buildings for foggy glass repair?",
      a: "Yes. We work with individual condo owners and property management companies across Mississauga. We can coordinate with building management as needed.",
    },
  },
  {
    slug: "vaughan",
    city: "Vaughan",
    region: "York Region",
    metaTitle: "Foggy Glass Repair in Vaughan | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Vaughan — Woodbridge, Maple, Kleinburg, Concord. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Vaughan's housing runs the full spectrum — mature custom estates along Islington in Woodbridge, mid-2000s family homes in Vellore Village, and newer VMC condos near the subway. Sealed glass units in Vaughan homes of all ages eventually lose their seal and fog over. LuminaSky replaces only the failed glass unit, keeping your existing frames and trim intact, so Vaughan homeowners save 60–80% compared to tearing the whole window out.",
    neighborhoods: getNeighborhoods("vaughan"),
    citySpecificFaq: {
      q: "Can you handle custom-sized windows common in Woodbridge estate homes?",
      a: "Yes. We order custom-sized sealed glass units to fit non-standard and oversized windows. We measure on-site and give you a clear timeline for the replacement unit.",
    },
  },
  {
    slug: "thornhill",
    city: "Thornhill",
    region: "York Region",
    metaTitle: "Foggy Glass Repair in Thornhill | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Thornhill — Royal Orchard, Thornlea, Beverley Glen. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Thornhill straddles the Vaughan-Markham border, and its housing reflects that dual character — established mid-century brick bungalows along Centre Street, large estate homes in Royal Orchard, and modern townhomes near the Promenade. Many of these homes carry original double-pane windows now well past their seal lifespan. LuminaSky restores foggy windows across Thornhill by replacing only the sealed glass unit, leaving frames and trim untouched.",
    neighborhoods: getNeighborhoods("thornhill"),
    citySpecificFaq: {
      q: "My Thornhill home has original 1970s windows — can you still replace the glass?",
      a: "Yes. If the frames and sashes are structurally sound, we replace the sealed glass unit with a new IGU sized to fit. Older frames that are still solid are ideal candidates for glass-only repair.",
    },
  },
  {
    slug: "richmond-hill",
    city: "Richmond Hill",
    region: "York Region",
    metaTitle: "Foggy Glass Repair in Richmond Hill | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Richmond Hill — Oak Ridges, Bayview Hill, Mill Pond. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Richmond Hill's rapid growth over the past two decades means even relatively new homes are showing seal failures. In Oak Ridges and Jefferson, sealed units installed during the 2000s building boom are now fogging up on schedule. Along the mature Bayview corridor, larger estate windows with premium Low-E glass are losing their argon fill. LuminaSky replaces the failed glass unit on-site — no frame removal, no disruption to your landscaping or interior trim.",
    neighborhoods: getNeighborhoods("richmond-hill"),
    citySpecificFaq: {
      q: "My Richmond Hill windows have Low-E coating — can you match that in the replacement?",
      a: "Yes. We source Low-E coated, argon-filled replacement units that match or exceed the performance of your original glass. Your replacement will be fully energy-efficient.",
    },
  },
  {
    slug: "markham",
    city: "Markham",
    region: "York Region",
    metaTitle: "Foggy Glass Repair in Markham | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Markham — Unionville, Cornell, Milliken, Berczy Village. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Markham's diversity extends to its housing — century homes along Main Street Unionville, townhouse complexes in Milliken, and sprawling new subdivisions in Cornell and Cathedraltown. Each generation of window eventually fogs. Unionville's older wooden frames need careful glass sizing; Cornell's builder-grade vinyl units are hitting the 15-year mark where seals start to fail. LuminaSky handles both, replacing only the sealed glass unit while preserving the frame and hardware.",
    neighborhoods: getNeighborhoods("markham"),
    citySpecificFaq: {
      q: "Can you repair foggy windows in newer Markham subdivisions like Cornell or Cathedraltown?",
      a: "Absolutely. Builder-grade windows from the 2000s and 2010s are prime candidates for sealed unit replacement. The vinyl frames are usually fine — it is the factory glass seal that fails first.",
    },
  },
  {
    slug: "north-york",
    city: "North York",
    region: "Toronto",
    metaTitle: "Foggy Glass Repair in North York | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in North York — Willowdale, Don Mills, Bayview Village. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "North York packs three distinct housing eras into one district. Post-war bungalows in Don Mills and Bayview Village carry original sealed units from the 1960s and 70s. The 1980s split-levels along Finch have double-pane glass now well past warranty. And along the Yonge corridor, condo towers with floor-to-ceiling glazing face seal failures at scale. LuminaSky serves all three — replacing the failed IGU on-site while the frame, sash, and balcony hardware stay in place.",
    neighborhoods: getNeighborhoods("north-york"),
    citySpecificFaq: {
      q: "Do you handle foggy glass in North York condo towers?",
      a: "Yes. We work with individual condo owners, property managers, and condo boards across North York. We carry insurance for at-height work and coordinate with building management as needed.",
    },
  },
  {
    slug: "scarborough",
    city: "Scarborough",
    region: "Toronto",
    metaTitle: "Foggy Glass Repair in Scarborough | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Scarborough — Agincourt, Birch Cliff, Guildwood, Malvern. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Scarborough's post-war bungalows in Birch Cliff and Guildwood, 1970s and 80s side-splits across Bendale, and high-rise clusters in Malvern represent decades of sealed glass units reaching end of life at the same time. Many Scarborough homeowners are quoted full window replacement when all they need is a new glass unit. LuminaSky replaces just the sealed IGU — keeping your existing frames, trim, and brick mould intact — at a fraction of the cost.",
    neighborhoods: getNeighborhoods("scarborough"),
    citySpecificFaq: {
      q: "My Scarborough home has older aluminum-frame windows — can you still replace the glass?",
      a: "Yes. Aluminum frames from the 1970s and 80s are often structurally solid even when the glass seal has failed. We replace the sealed unit inside the existing aluminum frame.",
    },
  },
  {
    slug: "etobicoke",
    city: "Etobicoke",
    region: "Toronto",
    metaTitle: "Foggy Glass Repair in Etobicoke | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Etobicoke — The Kingsway, Mimico, Long Branch, Sunnylea. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Etobicoke's established neighbourhoods — The Kingsway, Sunnylea, Alderwood, Thorncrest Village — contain some of the GTA's most mature housing stock, with original casement windows from the 1950s through 1980s. Along the lakeshore in Mimico and Long Branch, a wave of newer condo developments adds modern sealed units to the mix. Both old and new eventually fog. LuminaSky replaces the failed glass unit in place, preserving the character of heritage homes and the clean lines of modern builds alike.",
    neighborhoods: getNeighborhoods("etobicoke"),
    citySpecificFaq: {
      q: "Can you match heritage-style glass in Etobicoke's older homes?",
      a: "Yes. We source clear, Low-E, and specialty glass types sized to fit older frames. The replacement glass unit performs better than the original while maintaining the look of your home.",
    },
  },
  {
    slug: "brampton",
    city: "Brampton",
    region: "Peel Region",
    metaTitle: "Foggy Glass Repair in Brampton | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Brampton — Bramalea, Heart Lake, Castlemore, Mount Pleasant. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Brampton's housing boom from the 1990s through the 2010s means thousands of single-family homes and townhomes are now entering the window-fog zone — the 15- to 25-year mark where factory sealed units start failing. From established Bramalea subdivisions to newer builds in Castlemore and Fletcher's Meadow, foggy windows are becoming a common complaint. LuminaSky replaces the sealed glass unit on-site, so Brampton homeowners restore their view without the cost of ripping out the entire window.",
    neighborhoods: getNeighborhoods("brampton"),
    citySpecificFaq: {
      q: "Do you work with Brampton property managers and landlords for multi-unit foggy glass repair?",
      a: "Yes. We handle multi-unit residential work across Brampton. We can provide per-unit pricing and coordinate access with property management companies.",
    },
  },
  {
    slug: "oakville",
    city: "Oakville",
    region: "Halton Region",
    metaTitle: "Foggy Glass Repair in Oakville | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Oakville — Old Oakville, Glen Abbey, Bronte, River Oaks. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Oakville homeowners invest in their properties, and windows are a big part of that investment. Heritage homes in Old Oakville and Bronte carry original sealed glass now decades past its lifespan. In Glen Abbey and River Oaks, builder-grade units from the 1990s are fogging up as the perimeter seals break down. Newer estates in Joshua Creek are not immune either — even premium glass eventually fails. LuminaSky replaces the sealed unit while keeping your frames and trim intact, restoring clarity at a fraction of full replacement cost.",
    neighborhoods: getNeighborhoods("oakville"),
    citySpecificFaq: {
      q: "Do you service large picture windows common in Oakville waterfront homes?",
      a: "Yes. Oversized picture windows and feature glass are within our regular scope. We order custom-sized sealed units to match and can handle larger panels that other companies turn away.",
    },
  },
  {
    slug: "aurora",
    city: "Aurora",
    region: "York Region",
    metaTitle: "Foggy Glass Repair in Aurora | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Aurora — Aurora Village, Bayview Wellington, Hills of St Andrew. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Aurora's mix of established Aurora Village homes and newer Bayview Wellington subdivisions means sealed glass units of all ages are failing. Heritage homes near Yonge and Wellington have older wooden frames with glass long overdue for replacement, while the subdivisions built through the 1990s and 2000s are hitting the mark where factory seals give out. LuminaSky restores clarity to foggy windows across Aurora without full window replacement — the same repair-first approach that has saved GTA homeowners thousands.",
    neighborhoods: getNeighborhoods("aurora"),
    citySpecificFaq: {
      q: "Do you serve rural Aurora properties with oversized windows?",
      a: "Yes. Larger estate windows and oversized panes are within our regular scope. Send us photos with rough dimensions and we will quote the specific unit.",
    },
  },
  {
    slug: "woodbridge",
    city: "Woodbridge",
    region: "Vaughan",
    metaTitle: "Foggy Glass Repair in Woodbridge | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Woodbridge — Sonoma Heights, Vellore Village, Islington Woods. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Woodbridge is one of Vaughan's most established communities, and its mature housing stock shows it around the windows. Custom-built homes along Islington in Sonoma Heights often have oversized sealed units that are expensive to replace entirely. Family homes in Vellore Village, built in the early 2000s, are now past the 20-year mark where builder-grade seals fail. LuminaSky replaces only the clouded glass unit — no frame removal, no siding damage, no multi-week wait.",
    neighborhoods: getNeighborhoods("woodbridge"),
    citySpecificFaq: {
      q: "Can you replace foggy glass in Woodbridge homes with custom or oversized windows?",
      a: "Yes. We order custom-sized sealed glass units to fit non-standard openings. Woodbridge estate homes with larger windows are a regular part of our work — we measure on-site and give you a clear timeline.",
    },
  },
  {
    slug: "maple",
    city: "Maple",
    region: "Vaughan",
    metaTitle: "Foggy Glass Repair in Maple | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Maple — Eagle Hills, Mackenzie Ridge, Sabatini. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Maple's growth from a quiet village into one of Vaughan's busiest communities happened fast — and the homes built during that boom are now old enough to show it. Subdivisions in Eagle Hills, Mackenzie Ridge, and Sabatini are filled with post-2000 family homes whose factory-sealed windows are developing condensation between the panes right on schedule. LuminaSky replaces the failed sealed glass unit on-site, leaving the vinyl frames and hardware untouched. No tearout, no reframing, and far less cost than starting from scratch.",
    neighborhoods: getNeighborhoods("maple"),
    citySpecificFaq: {
      q: "My Maple home is less than 20 years old — should the windows be fogging already?",
      a: "Unfortunately it is common. Factory-sealed glass units can fail within 15 years, especially builder-grade windows. The good news is replacing just the glass unit is straightforward and far cheaper than a full window swap.",
    },
  },
  {
    slug: "king-city",
    city: "King City",
    region: "York Region",
    metaTitle: "Foggy Glass Repair in King City | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in King City — Kingscross Estates, Nobleton, Kettleby. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "King City and the Township of King are known for large-lot estates, horse properties, and rural acreages with panoramic windows that frame the countryside. When those oversized sealed glass units fog up, homeowners face steep replacement quotes because of the sheer size of the glass. LuminaSky replaces only the sealed unit — even on extra-large picture windows and feature glass — keeping your custom frames and trim intact and saving substantially on what would otherwise be a five-figure replacement project.",
    neighborhoods: getNeighborhoods("king-city"),
    citySpecificFaq: {
      q: "Do you handle oversized estate windows in King City?",
      a: "Yes. King City's larger properties often have oversized picture windows or feature glass. We handle these regularly — send photos with dimensions and we will quote the specific unit.",
    },
  },
  {
    slug: "newmarket",
    city: "Newmarket",
    region: "York Region",
    metaTitle: "Foggy Glass Repair in Newmarket | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Newmarket — Stonehaven, Glenway, Summerhill Estates. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Newmarket sits at the northern edge of York Region's suburban belt with housing that tells a story of steady growth. The historic downtown along Main Street has century-old homes with wood-frame windows that benefit from modern glass upgrades. The 1980s and 90s subdivisions of Stonehaven, Glenway, and Woodland Hill have hit the age where factory seals fail en masse. Even newer builds in Summerhill Estates are not immune to early seal breakdown in builder-grade windows. LuminaSky handles all of it — replacing the sealed glass unit on-site without disturbing your frames.",
    neighborhoods: getNeighborhoods("newmarket"),
    citySpecificFaq: {
      q: "Do you also serve East Gwillimbury and areas north of Newmarket?",
      a: "Yes. Newmarket, East Gwillimbury, and the surrounding area are within our regular service zone. We also cover Aurora, King City, and the rest of northern York Region.",
    },
  },
  {
    slug: "burlington",
    city: "Burlington",
    region: "Halton Region",
    metaTitle: "Foggy Glass Repair in Burlington | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Burlington — Roseland, Aldershot, Tyandaga, Alton Village. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Burlington's housing blends established lakefront heritage in Roseland and LaSalle Park with mid-century suburban streets in Tyandaga and Palmer and newer family subdivisions in Alton Village and Orchard. Older homes along the lake carry original sealed glass that has been fighting moisture for decades. The 1970s and 80s suburbs are hitting peak fog season — sealed units installed 30 to 40 years ago failing in clusters. LuminaSky replaces the clouded glass unit on-site, leaving Burlington homeowners' frames and trim untouched at a fraction of full window replacement cost.",
    neighborhoods: getNeighborhoods("burlington"),
    citySpecificFaq: {
      q: "Do you service Burlington lakefront condos and heritage homes for foggy glass repair?",
      a: "Yes. We handle lakefront heritage homes with original sealed glass and modern condo units alike. Whether the frame is original wood or newer vinyl, we replace the sealed glass unit to restore clarity.",
    },
  },
  {
    slug: "milton",
    city: "Milton",
    region: "Halton Region",
    metaTitle: "Foggy Glass Repair in Milton | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Milton — Beaty, Coates, Scott, Old Milton. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Milton is one of Ontario's fastest-growing cities, and most of its housing is barely two decades old. Post-2000 subdivisions in Beaty, Coates, Scott, and Ford are packed with builder-grade windows now entering the 15- to 20-year fog zone — the age bracket where factory-installed seals begin to break down. Closer to the Old Milton core, heritage homes along Main Street carry older sealed units and wood frames that have long outlasted their original glass. LuminaSky replaces the failed sealed glass unit on-site in both cases — preserving frames, skipping the cost of full replacement, and getting Milton homeowners back to clear windows fast.",
    neighborhoods: getNeighborhoods("milton"),
    citySpecificFaq: {
      q: "Do you handle foggy glass in newer Milton subdivisions with warranty concerns?",
      a: "Yes. Builder-grade windows often fog up before homeowners expect. We replace the sealed glass unit regardless of whether the original manufacturer warranty has expired — our repair comes with its own warranty.",
    },
  },
  {
    slug: "ajax",
    city: "Ajax",
    region: "Durham Region",
    metaTitle: "Foggy Glass Repair in Ajax | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Ajax — Applecroft, Duffin Heights, Central Ajax. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Ajax's housing is overwhelmingly suburban — 1990s and 2000s single-family homes and townhome complexes spread across Applecroft, Central Ajax, and Northeast Ajax that form the backbone of this working-family community. These homes are now 20 to 30 years old, which puts their factory-sealed windows squarely in the failure zone. Condensation between the panes, hazy views, and reduced insulation are becoming common complaints across Ajax neighbourhoods. LuminaSky swaps out the failed IGU on-site without removing the frame — a practical, affordable fix that skips the cost of ripping out and replacing the entire window.",
    neighborhoods: getNeighborhoods("ajax"),
    citySpecificFaq: {
      q: "Do you service Ajax family homes and townhome complexes for foggy glass?",
      a: "Yes. Townhome and single-family window repairs are a large part of our Ajax work. We handle individual homes and can coordinate with property management for multi-unit townhome projects.",
    },
  },
  {
    slug: "pickering",
    city: "Pickering",
    region: "Durham Region",
    metaTitle: "Foggy Glass Repair in Pickering | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Pickering — Bay Ridges, Amberlea, Brock Ridge. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Pickering spans from the Lake Ontario waterfront at Bay Ridges and West Shore north through established 1980s and 90s subdivisions in Amberlea, Liverpool, and Brock Ridge to newer builds in Duffin Heights and rural estates in Whitevale. Waterfront properties face accelerated seal failure from lake-effect humidity and temperature swings. Inland, the mature suburban stock is hitting 30 to 40 years — the age where sealed glass units fog in waves. LuminaSky replaces the failed IGU on-site, keeping Pickering homeowners' frames intact and saving 60–80% versus full window replacement.",
    neighborhoods: getNeighborhoods("pickering"),
    citySpecificFaq: {
      q: "Do you handle waterfront Pickering properties with oversized windows?",
      a: "Yes. Bay Ridges and West Shore waterfront homes with larger windows and exposure to lake conditions are a regular part of our work. We order custom-sized sealed units built for durability.",
    },
  },
  {
    slug: "caledon",
    city: "Caledon",
    region: "Peel Region",
    metaTitle: "Foggy Glass Repair in Caledon | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Caledon — Bolton, Caledon East, Palgrave, Mayfield West. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Caledon's rural landscape is dotted with estate properties, horse farms, and village homes whose oversized picture windows frame views of the Niagara Escarpment and rolling countryside. When those panoramic sealed glass units fog up, homeowners face steep replacement quotes driven by the sheer size of the glass. In Bolton and Mayfield West, newer subdivisions carry builder-grade windows hitting the 15-year fog mark. LuminaSky replaces only the sealed unit — even on extra-large picture windows and feature glass — keeping Caledon homeowners' custom frames and trim intact at a fraction of full replacement cost.",
    neighborhoods: getNeighborhoods("caledon"),
    citySpecificFaq: {
      q: "Do you service rural Caledon estates with oversized picture windows?",
      a: "Yes. Estate properties and country homes with large picture windows or feature glass are a regular part of our Caledon work. We measure on-site and order custom-sized sealed units to fit.",
    },
  },
  {
    slug: "whitby",
    city: "Whitby",
    region: "Durham Region",
    metaTitle: "Foggy Glass Repair in Whitby | Seal Failure Fix | LuminaSky",
    metaDescription:
      "LuminaSky repairs foggy sealed glass units in Whitby — Brooklin, Pringle Creek, Port Whitby, Rolling Acres. Fix the seal without replacing the window. Free photo quote.",
    intro:
      "Whitby straddles two worlds — heritage village character in Brooklin with century homes along Baldwin Street, and Durham Region's suburban growth in Rolling Acres, Pringle Creek, and Taunton North. Brooklin's older wood-frame windows carry original sealed glass now decades past its lifespan. The 1980s and 90s subdivisions around Pringle Creek and Rolling Acres are in the peak fog zone, with factory seals breaking down on schedule. Even the newer Taunton North builds are not immune. LuminaSky replaces the sealed glass unit on-site — preserving Brooklin's heritage frames and saving Whitby's suburban homeowners the cost of unnecessary full window replacement.",
    neighborhoods: getNeighborhoods("whitby"),
    citySpecificFaq: {
      q: "Do you handle heritage Brooklin homes and modern Whitby subdivisions?",
      a: "Yes. Heritage homes with original wood-frame windows get glass-only repairs that preserve their character. Newer subdivision homes get quick sealed unit swaps that skip the cost of full replacement. We handle both regularly.",
    },
  },
];

export function getFoggyGlassCityPageData(
  slug: string
): FoggyGlassCityPageData | undefined {
  return FOGGY_GLASS_CITY_PAGES.find((c) => c.slug === slug);
}
