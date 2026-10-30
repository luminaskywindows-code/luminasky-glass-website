import { CITY_PAGES } from "./city-pages-data";

export interface FrontDoorGlassCityPageData {
  slug: string;
  city: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  uniqueContent: string;
  neighborhoods: string[];
  citySpecificFaq: { q: string; a: string };
}

function getNeighborhoods(slug: string): string[] {
  const city = CITY_PAGES.find((c) => c.slug === slug);
  return city ? city.neighborhoods : [];
}

export const FRONT_DOOR_GLASS_CITY_PAGES: FrontDoorGlassCityPageData[] = [
  {
    slug: "toronto",
    city: "Toronto",
    region: "Toronto",
    metaTitle: "Front Door Glass Replacement in Toronto",
    metaDescription:
      "Front door glass replacement in Toronto. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Toronto entry doors take a beating. Salt spray off the sidewalk, courier traffic, raccoons testing the glass at 2 a.m. Whether it is a cracked insert on a Victorian rowhouse in the Annex or a foggy sidelite on a detached home in North York, LuminaSky replaces the glass panel without touching the door itself. Your frame, hardware, and paint stay exactly as they are.",
    uniqueContent:
      "Toronto's front door glass runs the full gamut. Pre-war homes along the Danforth and in Leslieville often have original leaded or textured glass that has cracked along a lead line or lost a pane entirely. Mid-century homes in Don Mills and Scarborough carry standard rectangular inserts that are straightforward to replace. Newer builds in Liberty Village and the waterfront feature oversized clear glass panels that let light into narrow floor plans. Each type needs a different approach. Leaded glass gets measured panel by panel so the replacement matches the original pattern. Standard inserts get swapped in a single visit. Oversized panels require tempered safety glass cut to the exact opening. LuminaSky handles all three. We measure on-site, order to size, and install without removing the door from the hinges. Most Toronto homeowners get a quote the same day they send photos.",
    neighborhoods: getNeighborhoods("toronto"),
    citySpecificFaq: {
      q: "Do you replace glass in condo lobby and vestibule doors in Toronto?",
      a: "Yes. We work with condo corporations and property managers across Toronto for lobby door glass, vestibule panels, and suite entry door inserts.",
    },
  },
  {
    slug: "mississauga",
    city: "Mississauga",
    region: "Peel Region",
    metaTitle: "Front Door Glass Replacement in Mississauga",
    metaDescription:
      "Front door glass replacement in Mississauga. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Mississauga's subdivisions from Erin Mills to Meadowvale share a common trait: the front door glass insert installed 20 to 30 years ago is now cloudy, cracked, or just plain dated. LuminaSky replaces the glass panel only, keeping your existing door, frame, and lockset intact. New glass, same door.",
    uniqueContent:
      "Builders across Mississauga in the 1980s and 1990s favoured decorative glass inserts with brass caming and bevelled edges. That style had its moment, and plenty of homeowners are ready for something cleaner. Others just have a cracked or fogged panel and want a match. Either way, the door itself is usually fine. The fibreglass and steel entry doors common in Lisgar, Streetsville, and Port Credit are built to last decades. It is the glass insert that ages out first. LuminaSky replaces it on-site without removing the door. We carry samples of popular privacy and decorative glass styles for homeowners who want to see options in person. For a straight replacement, send a photo of your current insert and we will match the design and dimensions.",
    neighborhoods: getNeighborhoods("mississauga"),
    citySpecificFaq: {
      q: "Can you replace just the sidelite glass on my Mississauga front door?",
      a: "Yes. Sidelites are replaced independently of the main door insert. We can do one or both at the same time.",
    },
  },
  {
    slug: "vaughan",
    city: "Vaughan",
    region: "York Region",
    metaTitle: "Front Door Glass Replacement in Vaughan",
    metaDescription:
      "Front door glass replacement in Vaughan. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Vaughan homeowners put serious thought into their front doors. From the ornate wrought-iron inserts in Woodbridge to the minimalist frosted panels in the VMC condos, the glass is the centrepiece of the entrance. When it cracks, fogs, or just looks tired, LuminaSky replaces the glass insert without swapping the whole door.",
    uniqueContent:
      "Woodbridge estates are known for grand double-door entrances with intricate wrought-iron and decorative glass inserts. These are not off-the-shelf panels. Each one is sized to the opening and matched to the ironwork pattern. When one cracks or the sealed unit fogs up, replacing it means getting the dimensions right down to the millimetre. LuminaSky measures on-site and orders each panel to fit. In Maple and Kleinburg, the housing stock leans toward builder-grade single-door entries with standard rectangular inserts. These are faster to measure and turn around. Vellore Village sits somewhere in between, with semi-custom homes that carry slightly oversized inserts. Across all of Vaughan, the approach is the same: measure the glass opening, not the door, order to size, and install without pulling the door off its hinges.",
    neighborhoods: getNeighborhoods("vaughan"),
    citySpecificFaq: {
      q: "Can you match the wrought-iron glass pattern on my Woodbridge double doors?",
      a: "Yes. We measure the glass panels around the existing ironwork and order replacement glass sized to fit. The iron stays in place.",
    },
  },
  {
    slug: "thornhill",
    city: "Thornhill",
    region: "York Region",
    metaTitle: "Front Door Glass Replacement in Thornhill",
    metaDescription:
      "Front door glass replacement in Thornhill. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Thornhill sits at the crossroads of old and new. Brick bungalows along Centre Street have original door glass from the 1960s. Larger homes in Royal Orchard carry decorative inserts that were the height of fashion 25 years ago. LuminaSky replaces the glass in both without touching the door, frame, or hardware.",
    uniqueContent:
      "The split between Vaughan-side Thornhill and Markham-side Thornhill means two slightly different building profiles. West of Yonge, homes tend to be larger with custom entry doors that feature oversized glass panels, sometimes triple-pane for sound insulation along Bathurst. East of Yonge, the housing mix includes more townhomes and smaller detached homes with standard-sized inserts. Both sides share the same problem: sealed glass units in door inserts fail the same way window glass does. Moisture gets between the panes, and the fog never clears. LuminaSky replaces the sealed unit inside the door without removing the door. For decorative glass, we match the existing pattern. For homeowners looking for an update, we carry frosted, rain, and privacy glass options that fit the same opening.",
    neighborhoods: getNeighborhoods("thornhill"),
    citySpecificFaq: {
      q: "My Thornhill door has triple-pane glass. Can you replace just the glass unit?",
      a: "Yes. We replace triple-pane sealed units in door inserts. The replacement is sized to fit your existing frame.",
    },
  },
  {
    slug: "richmond-hill",
    city: "Richmond Hill",
    region: "York Region",
    metaTitle: "Front Door Glass Replacement in Richmond Hill",
    metaDescription:
      "Front door glass replacement in Richmond Hill. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Richmond Hill homes along the Bayview corridor and up through Oak Ridges often have large entry doors with decorative glass panels that were installed during the building boom of the early 2000s. Those inserts are now hitting the age where seals fail and designs start to look dated. LuminaSky replaces the glass panel and leaves the door.",
    uniqueContent:
      "The estate homes along Bayview Avenue in Richmond Hill typically feature double-door entries with tall glass panels. The glass in these doors is often decorative with caming or textured patterns, and the panels are taller than standard. A replacement needs to match both the dimensions and the aesthetic. Farther north in Oak Ridges, homes sit higher and catch more wind. Front door glass here takes more thermal stress than in sheltered subdivisions closer to Yonge. LuminaSky uses Low-E coated, argon-filled sealed units in door glass replacements where the original spec calls for it. Around Richmond Hill Centre, newer townhomes use simpler frosted or clear panels that are quicker to size and install. Whatever the style, the process is the same: we measure the glass opening on-site, order to exact size, and install without removing the door.",
    neighborhoods: getNeighborhoods("richmond-hill"),
    citySpecificFaq: {
      q: "Can I upgrade my Richmond Hill door glass to something more modern?",
      a: "Yes. If your door opening accepts a standard insert size, we can fit a different style. We bring samples so you can see the options against your door.",
    },
  },
  {
    slug: "markham",
    city: "Markham",
    region: "York Region",
    metaTitle: "Front Door Glass Replacement in Markham",
    metaDescription:
      "Front door glass replacement in Markham. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Markham's entry doors reflect the city's mix of heritage and suburban. Unionville's century homes have wooden doors with character glass that deserves careful handling. Cornell and Cathedraltown have thousands of builder-grade steel doors with inserts that are now fogging up or cracking. LuminaSky replaces the glass in both.",
    uniqueContent:
      "Main Street Unionville's heritage homes carry front doors that are part of the streetscape. The glass in these doors is often original or early replacement, sometimes with a textured pattern that is no longer in production. LuminaSky sources the closest match available and sizes it to fit the existing wooden sash. We do not force a modern panel into a heritage frame. In the newer subdivisions, Berczy Village, Cornell, and Cathedraltown, the situation is more straightforward. Builder-grade inserts in steel doors are standardized enough that replacements can be turned around quickly. Fogged inserts are the most common call we get from these neighborhoods. The sealed unit fails, condensation clouds the glass, and the front of the house looks neglected. A glass swap fixes it in a single visit. We measure, order, and install without removing the door from the frame.",
    neighborhoods: getNeighborhoods("markham"),
    citySpecificFaq: {
      q: "Can you replace the glass in a heritage door in Unionville without damaging the door?",
      a: "Yes. We remove the glass from the existing sash carefully and fit a replacement to the same dimensions. The door stays on its hinges.",
    },
  },
  {
    slug: "brampton",
    city: "Brampton",
    region: "Peel Region",
    metaTitle: "Front Door Glass Replacement in Brampton",
    metaDescription:
      "Front door glass replacement in Brampton. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Brampton's housing boom from the late 1990s through the 2010s produced entire neighborhoods of homes with nearly identical front door glass inserts. Two decades later, those inserts are fogging, cracking, or just looking outdated. LuminaSky replaces them one at a time or in batches for homeowners who want to refresh their entrance.",
    uniqueContent:
      "Drive through Springdale, Castlemore, or Sandalwood and you will see the same few front door glass patterns repeated block after block. Builders used a handful of decorative insert designs across thousands of homes. That uniformity works in your favour when it comes to replacement: the sizes are predictable, the frames are standard, and turnaround is fast. Brampton's newer communities around Mount Pleasant and Heritage Heights use a slightly different door profile with taller glass panels, but the replacement process is the same. LuminaSky measures the glass opening, not the door, so we get an exact fit regardless of the door manufacturer. For homeowners who want a different look, switching from a dated brass-caming pattern to a clean frosted panel takes the same amount of effort as a straight replacement. We bring glass samples to your door so you can compare before ordering.",
    neighborhoods: getNeighborhoods("brampton"),
    citySpecificFaq: {
      q: "My Brampton neighbours and I all have the same foggy door glass. Can you do several houses at once?",
      a: "Yes. We handle multi-house orders regularly. Measuring several doors in one trip keeps costs down and speeds up the process.",
    },
  },
  {
    slug: "oakville",
    city: "Oakville",
    region: "Halton Region",
    metaTitle: "Front Door Glass Replacement in Oakville",
    metaDescription:
      "Front door glass replacement in Oakville. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Oakville's established neighborhoods along Lakeshore and up through Glen Abbey feature some of the GTA's most impressive front entrances. When the glass in those doors cracks, fogs, or chips, the whole facade suffers. LuminaSky replaces the glass panel and restores the entrance to its original standard.",
    uniqueContent:
      "Old Oakville and Bronte Village homes often have custom wooden entry doors with leaded or stained glass that cannot be sourced off the shelf. These panels are measured to the exact opening and ordered as custom pieces. The lead time is longer, but the result matches the character of the home. In newer Oakville subdivisions like River Oaks and Joshua Creek, the entry doors are typically steel or fibreglass with standard decorative inserts. Replacements for these are faster to source and install. Regardless of the neighborhood, LuminaSky's approach is to keep the door in place. We remove the old glass insert from the frame, fit the new one, and seal it for weather protection. The door never comes off the hinges.",
    neighborhoods: getNeighborhoods("oakville"),
    citySpecificFaq: {
      q: "Can you source custom leaded glass for a heritage home in Old Oakville?",
      a: "Yes. We work with glass fabricators who produce custom leaded and decorative panels to match heritage designs.",
    },
  },
  {
    slug: "burlington",
    city: "Burlington",
    region: "Halton Region",
    metaTitle: "Front Door Glass Replacement in Burlington",
    metaDescription:
      "Front door glass replacement in Burlington. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Burlington's lakeside location means front door glass gets hit with moisture, wind off the lake, and temperature swings that inland cities avoid. Sealed glass inserts in Burlington homes fail faster on the lake-facing side of the house. LuminaSky replaces the glass panel without swapping the door.",
    uniqueContent:
      "The stretch of Burlington south of the QEW, particularly around Roseland and the downtown core, catches lake-effect weather head-on. Front doors facing north or east toward the lake absorb more moisture and thermal stress than those facing away. That directional wear pattern means some Burlington homeowners see their door glass fog on one sidelite while the other stays clear for years. LuminaSky replaces whichever panel has failed, and we can do both if you want them to match. Farther up the escarpment in Alton Village and Millcroft, the conditions are calmer but the housing age puts door glass inserts right in the seal-failure window. These neighborhoods were built primarily in the 1990s and 2000s, and the factory-installed door glass is reaching end of life. The replacement process is the same everywhere in Burlington: we measure on-site, order to size, and install in a single return visit.",
    neighborhoods: getNeighborhoods("burlington"),
    citySpecificFaq: {
      q: "Does the lake climate in Burlington affect how long replacement door glass lasts?",
      a: "We use sealed units rated for the climate. Properly installed replacement glass with a modern seal performs well in lakeside conditions. Our 5-year warranty covers seal failure.",
    },
  },
  {
    slug: "hamilton",
    city: "Hamilton",
    region: "Hamilton",
    metaTitle: "Front Door Glass Replacement in Hamilton",
    metaDescription:
      "Front door glass replacement in Hamilton. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Hamilton's housing tells a story of industrial prosperity and waves of growth. Westdale's stone-clad homes, the Locke Street row houses, and the newer builds on the Mountain all have front door glass that eventually needs replacing. LuminaSky handles all of it, from heritage panels on Aberdeen to standard inserts in Stoney Creek.",
    uniqueContent:
      "The lower city around Locke Street, James Street North, and Westdale has a concentration of pre-war and early post-war homes with character doors. The glass in these doors is often non-standard in size and sometimes includes textured or patterned glass that was common in the 1940s and 1950s. LuminaSky sources replacement glass that fits these older openings and matches the original character where possible. On Hamilton Mountain and in the Ancaster, Dundas, and Stoney Creek areas, the housing is newer and the door glass is more predictable. Builder-grade steel and fibreglass doors with standard inserts dominate. These are the calls where we can often quote from a photo and turn the replacement around in days. Hamilton's industrial heritage also means we see more emergency door glass calls here than in some other GTA cities. Break-ins and accidental impacts are part of the landscape. LuminaSky provides board-up and permanent replacement for emergency situations.",
    neighborhoods: getNeighborhoods("hamilton"),
    citySpecificFaq: {
      q: "Do you handle emergency door glass replacement in Hamilton?",
      a: "Yes. We secure the opening first with a temporary board-up, then install permanent replacement glass. Available day and night.",
    },
  },
  {
    slug: "newmarket",
    city: "Newmarket",
    region: "York Region",
    metaTitle: "Front Door Glass Replacement in Newmarket",
    metaDescription:
      "Front door glass replacement in Newmarket. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Newmarket's mix of heritage homes on Main Street South and mid-2000s subdivisions around Upper Canada Mall creates two distinct pools of front door glass work. LuminaSky replaces both: the careful, character-matched panels for older homes and the straightforward insert swaps for newer ones.",
    uniqueContent:
      "Main Street South in Newmarket has some of the best-preserved Victorian and Edwardian homes in York Region. The front doors on these houses are part of the heritage look, and their glass panels, sometimes featuring coloured or textured glass, contribute to the streetscape. When that glass cracks or a pane goes missing, the replacement needs to respect the original. LuminaSky sources glass that matches the texture and dimensions of the original insert. In the subdivisions west of Yonge and around Bayview and Mulock, the homes are 10 to 25 years old with standard builder doors. The glass inserts in these neighborhoods are hitting their replacement window now. Fog between the panes is the most common issue, followed by stress cracks from thermal cycling. Both are solved by replacing the glass unit without touching the door.",
    neighborhoods: getNeighborhoods("newmarket"),
    citySpecificFaq: {
      q: "Can you match the heritage glass on a Main Street South Newmarket home?",
      a: "We source textured and patterned glass to match heritage designs. Send us a photo of the existing panel and we will find the closest available match.",
    },
  },
  {
    slug: "aurora",
    city: "Aurora",
    region: "York Region",
    metaTitle: "Front Door Glass Replacement in Aurora",
    metaDescription:
      "Front door glass replacement in Aurora. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Aurora's homes cluster into a few distinct eras: the historic core around Yonge and Wellington, the 1980s and 1990s builds in south Aurora, and the newer developments along St. John's Sideroad. Each era carries its own front door glass, and LuminaSky replaces all of them.",
    uniqueContent:
      "The historic centre of Aurora along Yonge Street features homes with solid wooden doors and original or early replacement glass panels. Some of these carry textured or seeded glass that gives the entrance a vintage feel. Replacing one panel without altering the rest requires precise measurement and a well-matched glass type. South Aurora, built out through the 1980s and 1990s, uses the decorative brass-caming inserts that were popular across the GTA in that era. Many of these homeowners are now choosing to swap the dated decorative look for a simpler frosted or rain glass panel that still provides privacy but feels more current. The process is the same: measure the existing opening, order new glass to fit, and install without removing the door. Aurora's newer subdivisions north of Wellington use contemporary door styles with clean-line glass panels. Replacements here are the most straightforward, with standard sizing and shorter lead times.",
    neighborhoods: getNeighborhoods("aurora"),
    citySpecificFaq: {
      q: "Can I change the style of my Aurora front door glass without changing the door?",
      a: "Yes, as long as the opening dimensions stay the same. We can fit a different glass style into your existing door frame.",
    },
  },
  {
    slug: "pickering",
    city: "Pickering",
    region: "Durham Region",
    metaTitle: "Front Door Glass Replacement in Pickering",
    metaDescription:
      "Front door glass replacement in Pickering. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Pickering's residential pockets run from the lakefront homes near Frenchman's Bay to the growing subdivisions around Seaton. Front door glass across the city ranges from original 1970s panels in Bay Ridges to builder-grade inserts in Duffin Heights. LuminaSky replaces all of them without swapping the door.",
    uniqueContent:
      "Bay Ridges and the Pickering Village area carry the city's oldest housing stock. The front doors here are a mix of solid wood and early steel, with glass inserts that range from plain clear panels to decorative designs typical of the 1970s and 1980s. Many of these inserts have never been replaced, and the seals have long since failed. Duffin Heights and the areas around Pickering Town Centre are newer, with homes built in the 2000s and 2010s. The door glass here is standard builder-issue, and it is now entering the age where fogging becomes common. Seaton, Pickering's newest community, is still under construction in parts, but even the earliest phases are approaching the decade mark. LuminaSky serves all of Pickering, from the older lakefront homes to the newest builds. The process does not change with the age of the home: we measure the glass opening, order to exact size, and install on a return visit.",
    neighborhoods: getNeighborhoods("pickering"),
    citySpecificFaq: {
      q: "Do you serve the newer Seaton community in Pickering?",
      a: "Yes. We work across all of Pickering, including Seaton, Duffin Heights, Bay Ridges, and Pickering Village.",
    },
  },
  {
    slug: "oshawa",
    city: "Oshawa",
    region: "Durham Region",
    metaTitle: "Front Door Glass Replacement in Oshawa",
    metaDescription:
      "Front door glass replacement in Oshawa. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Oshawa's residential footprint stretches from the older neighborhoods near downtown and the waterfront up to the newer developments in the north end. Front door glass across the city shows the wear of Ontario winters. LuminaSky replaces cracked, foggy, and outdated door glass inserts without removing the door.",
    uniqueContent:
      "Downtown Oshawa and the established neighborhoods around Gibb and King Street carry older homes with solid wooden and early steel entry doors. The glass panels in these doors are often single-pane or early sealed units that have been in place for decades. Replacement glass is cut to fit the original opening, preserving the look of the home without requiring a new door. The north Oshawa subdivisions built through the 2000s and 2010s, including Windfields, Samac, and Northglen, use standard builder-grade door inserts. These are now entering the age where seal failures show up as fog between the panes. The fix is a glass unit swap that takes a single visit to install. Oshawa also generates a fair number of emergency calls: impacts from weather events, break-ins, or accidents. LuminaSky boards up and replaces door glass on an emergency basis across the city.",
    neighborhoods: getNeighborhoods("oshawa"),
    citySpecificFaq: {
      q: "How quickly can you replace emergency door glass in Oshawa?",
      a: "We board up the same day and install permanent replacement glass as soon as the new unit is ready. Emergency calls are taken day and night.",
    },
  },
  {
    slug: "scarborough",
    city: "Scarborough",
    region: "Toronto",
    metaTitle: "Front Door Glass Replacement in Scarborough",
    metaDescription:
      "Front door glass replacement in Scarborough. Decorative, frosted and clear glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Scarborough's postwar bungalows and split-levels carry some of the oldest front door glass in the GTA. Many homes in Agincourt, Wexford, and Guildwood still have their original door inserts from the 1950s and 1960s. LuminaSky replaces aged, cracked, and foggy door glass across Scarborough without disturbing the door or frame.",
    uniqueContent:
      "Scarborough's residential landscape is dominated by postwar single-family homes built between the 1950s and 1980s. The front doors in Birch Cliff, Cliffcrest, and the Bluffs area often feature narrow glass panels or half-lite inserts in solid wood doors. These openings are non-standard by modern measures, which means a replacement needs to be cut to the exact dimensions of the original. LuminaSky measures on-site rather than working from catalogue sizes. In Agincourt and Milliken, the housing includes more recent townhome and semi-detached builds with standard steel door frames and factory inserts. Replacements here are faster to source. Across all of Scarborough, we see a mix of decorative, privacy, and clear glass in door inserts. Whatever the style, the replacement process keeps the door in place and on its hinges. We remove the old glass, fit the new panel, and seal it against the weather.",
    neighborhoods: getNeighborhoods("scarborough"),
    citySpecificFaq: {
      q: "Can you replace the narrow glass panel in a 1960s Scarborough bungalow door?",
      a: "Yes. We measure non-standard openings on-site and order replacement glass to fit. Older doors with narrow or unusual inserts are a regular part of our work.",
    },
  },
];

export function getFrontDoorGlassCityPageData(slug: string): FrontDoorGlassCityPageData | undefined {
  return FRONT_DOOR_GLASS_CITY_PAGES.find((c) => c.slug === slug);
}
