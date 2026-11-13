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
      "Main Street Unionville's heritage homes carry front doors that are part of the streetscape. The glass in these doors is often original or early replacement, sometimes with a textured pattern that is no longer in production. LuminaSky sources the closest match available and sizes it to fit the existing wooden sash. We do not force a modern panel into a heritage frame. In the newer subdivisions, Berczy Village, Cornell, and Cathedraltown, the situation is more straightforward. Builder-grade inserts in steel doors are standardized enough that replacements can be turned around quickly. Fogged inserts are the most common call we get from these neighbourhoods. The sealed unit fails, condensation clouds the glass, and the front of the house looks neglected. A glass swap fixes it in a single visit. We measure, order, and install without removing the door from the frame.",
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
      "Brampton's housing boom from the late 1990s through the 2010s produced entire neighbourhoods of homes with nearly identical front door glass inserts. Two decades later, those inserts are fogging, cracking, or just looking outdated. LuminaSky replaces them one at a time or in batches for homeowners who want to refresh their entrance.",
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
      "Oakville's established neighbourhoods along Lakeshore and up through Glen Abbey feature some of the GTA's most impressive front entrances. When the glass in those doors cracks, fogs, or chips, the whole facade suffers. LuminaSky replaces the glass panel and restores the entrance to its original standard.",
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
      "The stretch of Burlington south of the QEW, particularly around Roseland and the downtown core, catches lake-effect weather head-on. Front doors facing north or east toward the lake absorb more moisture and thermal stress than those facing away. That directional wear pattern means some Burlington homeowners see their door glass fog on one sidelite while the other stays clear for years. LuminaSky replaces whichever panel has failed, and we can do both if you want them to match. Farther up the escarpment in Alton Village and Millcroft, the conditions are calmer but the housing age puts door glass inserts right in the seal-failure window. These neighbourhoods were built primarily in the 1990s and 2000s, and the factory-installed door glass is reaching end of life. The replacement process is the same everywhere in Burlington: we measure on-site, order to size, and install in a single return visit.",
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
      "Main Street South in Newmarket has some of the best-preserved Victorian and Edwardian homes in York Region. The front doors on these houses are part of the heritage look, and their glass panels, sometimes featuring coloured or textured glass, contribute to the streetscape. When that glass cracks or a pane goes missing, the replacement needs to respect the original. LuminaSky sources glass that matches the texture and dimensions of the original insert. In the subdivisions west of Yonge and around Bayview and Mulock, the homes are 10 to 25 years old with standard builder doors. The glass inserts in these neighbourhoods are hitting their replacement window now. Fog between the panes is the most common issue, followed by stress cracks from thermal cycling. Both are solved by replacing the glass unit without touching the door.",
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
      "Oshawa's residential footprint stretches from the older neighbourhoods near downtown and the waterfront up to the newer developments in the north end. Front door glass across the city shows the wear of Ontario winters. LuminaSky replaces cracked, foggy, and outdated door glass inserts without removing the door.",
    uniqueContent:
      "Downtown Oshawa and the established neighbourhoods around Gibb and King Street carry older homes with solid wooden and early steel entry doors. The glass panels in these doors are often single-pane or early sealed units that have been in place for decades. Replacement glass is cut to fit the original opening, preserving the look of the home without requiring a new door. The north Oshawa subdivisions built through the 2000s and 2010s, including Windfields, Samac, and Northglen, use standard builder-grade door inserts. These are now entering the age where seal failures show up as fog between the panes. The fix is a glass unit swap that takes a single visit to install. Oshawa also generates a fair number of emergency calls: impacts from weather events, break-ins, or accidents. LuminaSky boards up and replaces door glass on an emergency basis across the city.",
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
  {
    slug: "north-york",
    city: "North York",
    region: "Toronto",
    metaTitle: "Front Door Glass Replacement in North York",
    metaDescription:
      "Front door glass replacement in North York. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "North York stretches from the Yonge corridor towers to the quiet residential streets of Willowdale, Bayview Village, and Don Mills. The front door glass across these neighbourhoods runs from original 1950s panels in bungalows to modern inserts in newer infill builds. LuminaSky replaces the glass without swapping the door.",
    uniqueContent:
      "Willowdale and Bayview Village carry a large stock of 1960s and 1970s detached homes with single-door entries and half-lite or three-quarter-lite inserts. The glass in these doors is often the original factory installation, and after five decades the seals have failed entirely. Don Mills homes from the original planned community era have a distinctive mid-century aesthetic, and some homeowners want replacement glass that respects that look. LuminaSky sources textured and patterned glass to match older designs when requested. Along the Yonge corridor and in the Sheppard area, newer condo townhomes use contemporary frosted and clear panels that are faster to size and replace. Regardless of the era, the process starts with an on-site measurement, followed by a custom order and a single installation visit.",
    neighborhoods: getNeighborhoods("north-york"),
    citySpecificFaq: {
      q: "Can you replace glass in the sidelites of my North York front door?",
      a: "Yes. Sidelite panels are measured and replaced independently. We can do one or both alongside the main insert if needed.",
    },
  },
  {
    slug: "etobicoke",
    city: "Etobicoke",
    region: "Toronto",
    metaTitle: "Front Door Glass Replacement in Etobicoke",
    metaDescription:
      "Front door glass replacement in Etobicoke. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Etobicoke's housing spans wartime bungalows in Long Branch, mid-century ranchers in Eatonville, and estate homes in Princess Anne Manor. The front door glass in each era has its own character and its own failure modes. LuminaSky replaces all of them while keeping the door in place.",
    uniqueContent:
      "Long Branch and New Toronto have a concentration of smaller wartime and postwar homes whose front doors carry narrow single-lite or half-lite glass panels. These are non-standard sizes that need exact on-site measurement. Islington Village and the Kingsway feature larger homes with custom entry doors, some with leaded glass inserts that match the Tudor and Colonial Revival architecture common in the area. When one panel cracks, matching the decorative pattern requires sourcing from specialty fabricators. Rexdale and the Woodbine corridor lean more toward builder-grade steel doors with standard inserts that are faster to measure and replace. Across all of Etobicoke, LuminaSky measures the glass opening on-site, orders the replacement to exact dimensions, and installs it without pulling the door off its hinges.",
    neighborhoods: getNeighborhoods("etobicoke"),
    citySpecificFaq: {
      q: "Do you replace leaded glass panels in Kingsway-area doors in Etobicoke?",
      a: "Yes. We source custom leaded and decorative glass panels to match heritage and character home designs.",
    },
  },
  {
    slug: "woodbridge",
    city: "Woodbridge",
    region: "Vaughan",
    metaTitle: "Front Door Glass Replacement in Woodbridge",
    metaDescription:
      "Front door glass replacement in Woodbridge. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Woodbridge is known for grand entrances. Double doors with wrought-iron inserts, oversized single doors with ornate glass panels, and custom entries that reflect the homeowner's taste. When that glass cracks or fogs, LuminaSky replaces the panel without disturbing the ironwork or the door itself.",
    uniqueContent:
      "The custom homes along Islington Avenue and in the Vellore Woods area feature some of the most elaborate front door glass in the GTA. Double-door entries with wrought-iron frames and sealed decorative glass panels are standard in this part of Woodbridge. Replacing the glass in these doors requires measuring around the ironwork precisely, because the glass sits in custom-shaped openings rather than standard rectangles. LuminaSky handles these measurements on-site with the door in place. In the older established streets near Market Lane, the homes are more modest but still carry decorative inserts from the 1980s and 1990s that are now showing their age. Fogged glass and cracked panels are common calls from this area. The replacement is straightforward: remove the old insert frame, fit the new glass, and seal. No paint touch-ups, no hardware changes, no door removal.",
    neighborhoods: getNeighborhoods("woodbridge"),
    citySpecificFaq: {
      q: "Can you replace the glass around wrought-iron inserts in my Woodbridge double doors?",
      a: "Yes. We measure the glass panels around the existing ironwork and order replacements to fit each shaped opening.",
    },
  },
  {
    slug: "maple",
    city: "Maple",
    region: "Vaughan",
    metaTitle: "Front Door Glass Replacement in Maple",
    metaDescription:
      "Front door glass replacement in Maple. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Maple grew rapidly through the 2000s and 2010s, producing block after block of detached homes with builder-grade entry doors. The glass inserts in those doors are now hitting their replacement age. LuminaSky replaces foggy, cracked, and dated front door glass without swapping the door.",
    uniqueContent:
      "Most of Maple's residential stock was built in the subdivision boom around Major Mackenzie and Rutherford Road. The entry doors in these homes are predominantly steel or fibreglass with standard decorative inserts featuring brass or pewter caming. After 15 to 20 years, the sealed glass units are failing. Fog between the panes is the most common issue, followed by cracks in the outer pane from thermal stress. The older pocket of Maple near the historic village core along Keele Street has a few century homes and mid-century bungalows with non-standard door glass. These require on-site measurement for an exact fit. For the subdivision homes, the sizing is predictable and turnaround is fast. LuminaSky brings glass samples for homeowners who want to update the style while replacing a failed panel.",
    neighborhoods: getNeighborhoods("maple"),
    citySpecificFaq: {
      q: "Can I switch from a dated decorative insert to frosted glass on my Maple front door?",
      a: "Yes. If the opening dimensions are the same, we can fit a different glass style into your existing door. We bring samples so you can compare.",
    },
  },
  {
    slug: "king-city",
    city: "King City",
    region: "York Region",
    metaTitle: "Front Door Glass Replacement in King City",
    metaDescription:
      "Front door glass replacement in King City. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "King City's estate homes and acreage properties often feature custom entry doors with large glass panels. When that glass fogs or cracks, replacing the panel is far more practical than sourcing a new custom door. LuminaSky measures on-site and orders to exact dimensions.",
    uniqueContent:
      "The estate lots along King Road and Keele Street feature some of the largest front door glass panels in York Region. These are not standard catalogue inserts. Double-door entries with oversized decorative glass, full-length sidelites, and transoms are common. Each piece needs to be measured individually because the openings are custom-framed. King City's rural setting also means more exposure to wind and temperature extremes than sheltered urban lots, so replacement glass here benefits from argon-filled sealed units for thermal performance. Nobleton, part of the Township of King, has a tighter mix of village homes and newer subdivisions where the door glass is more standardized. LuminaSky serves both ends of the spectrum. The approach is always the same: measure the glass, not the door, order to size, and install without removing the door from the frame.",
    neighborhoods: getNeighborhoods("king-city"),
    citySpecificFaq: {
      q: "Can you replace the transom glass above my King City front door?",
      a: "Yes. Transom panels are measured and replaced independently, or together with the main insert and sidelites if all need attention.",
    },
  },
  {
    slug: "milton",
    city: "Milton",
    region: "Halton Region",
    metaTitle: "Front Door Glass Replacement in Milton",
    metaDescription:
      "Front door glass replacement in Milton. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Milton has been one of the fastest-growing towns in Ontario for over a decade. That means thousands of homes built in quick succession, all with builder-grade entry doors whose glass inserts are now reaching the age where seals fail. LuminaSky replaces the glass and keeps the door.",
    uniqueContent:
      "Neighbourhoods like Harrison, Willmott, and Scott Boulevard were built from the mid-2000s onward. The entry doors in these homes are nearly all steel or fibreglass with standard-sized decorative inserts. The same handful of glass patterns appear across entire streets. That predictability makes replacement straightforward: the dimensions are consistent and sourcing is fast. Old Milton around Main Street has a smaller stock of older homes with wooden doors and non-standard glass openings. These need on-site measurement for a proper fit. Milton's elevation on the Niagara Escarpment also brings more wind exposure than lower-lying towns, which can accelerate seal deterioration on south- and west-facing doors. LuminaSky uses sealed units designed for the climate and provides a written quote after measuring on-site.",
    neighborhoods: getNeighborhoods("milton"),
    citySpecificFaq: {
      q: "My Milton home is only 10 years old but the door glass is already foggy. Is that normal?",
      a: "Seal failures at 10 to 15 years are common in builder-grade door inserts. The glass unit can be replaced without changing the door.",
    },
  },
  {
    slug: "ajax",
    city: "Ajax",
    region: "Durham Region",
    metaTitle: "Front Door Glass Replacement in Ajax",
    metaDescription:
      "Front door glass replacement in Ajax. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Ajax homes built through the 1980s, 1990s, and 2000s fill the streets from the waterfront up to Rossland Road. The front door glass inserts in these homes are now in the zone where fog and cracks start appearing. LuminaSky replaces the glass panel without swapping the door.",
    uniqueContent:
      "The lakefront neighbourhoods near Ajax waterfront park have older bungalows and split-levels with solid wood doors and original glass panels dating back to the 1960s and 1970s. These require precise measurement for a proper fit. Farther north, the subdivisions around Salem and Westney Heights were built in the 1990s with standard builder-grade entry doors. The decorative glass inserts in these homes are now reaching end-of-life. Pickering Village, which straddles the Ajax and Pickering border, has a few heritage properties with character door glass that LuminaSky matches carefully during replacement. The newest builds near Audley Road use contemporary door styles with cleaner glass lines. LuminaSky serves all areas of Ajax, measuring each door glass opening on-site and ordering to the exact dimensions.",
    neighborhoods: getNeighborhoods("ajax"),
    citySpecificFaq: {
      q: "Do you work in the older lakefront area of Ajax?",
      a: "Yes. We serve all of Ajax, from the lakefront homes through the newer subdivisions north of Highway 2.",
    },
  },
  {
    slug: "caledon",
    city: "Caledon",
    region: "Peel Region",
    metaTitle: "Front Door Glass Replacement in Caledon",
    metaDescription:
      "Front door glass replacement in Caledon. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Caledon's rural estates and village homes feature front doors built for presence. Large glass panels, sidelites, and transoms are common on the bigger properties. When the glass fogs or cracks, LuminaSky replaces it without touching the door or its hardware.",
    uniqueContent:
      "Bolton, the largest community in Caledon, has a mix of established village homes and newer subdivision builds. The older Bolton homes along Queen Street carry wooden doors with non-standard glass openings that need precise measurement. The newer phases in Bolton and the surrounding area use steel and fibreglass doors with standard inserts that are faster to replace. Outside Bolton, Caledon's rural properties and estate lots along Highway 10 and the Caledon East corridor feature custom entry doors with oversized glass panels. These homes sit on open land with more wind exposure than urban lots, which can stress door glass seals. LuminaSky measures each opening on-site and orders to the exact dimensions. For homeowners looking to update the style, we carry samples of privacy, frosted, and textured glass that fit standard openings.",
    neighborhoods: getNeighborhoods("caledon"),
    citySpecificFaq: {
      q: "Can you replace door glass on a rural Caledon property?",
      a: "Yes. We serve all of Caledon, including Bolton, Caledon East, Inglewood, and rural estate lots.",
    },
  },
  {
    slug: "whitby",
    city: "Whitby",
    region: "Durham Region",
    metaTitle: "Front Door Glass Replacement in Whitby",
    metaDescription:
      "Front door glass replacement in Whitby. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Whitby's residential growth from the 1980s through the 2010s has produced a large stock of homes whose front door glass inserts are now showing their age. Fog between the panes, cracked panels, and outdated designs are the most common calls we get. LuminaSky replaces the glass and leaves the door.",
    uniqueContent:
      "Downtown Whitby along Brock and Dundas has older homes with character doors whose glass panels may be original to the house. These non-standard openings need careful measurement for a proper replacement. Brooklin, north of Highway 407, is one of the fastest-growing communities in Durham Region, and its homes from the 2000s and 2010s use standard builder-grade door inserts that are already starting to fog. The Shores of Whitby near the waterfront and Pringle Creek to the west have a mix of townhomes and detached houses with a variety of insert styles. LuminaSky approaches every Whitby door glass job the same way: measure the glass opening on-site, order to exact dimensions, and install on a return visit without removing the door.",
    neighborhoods: getNeighborhoods("whitby"),
    citySpecificFaq: {
      q: "Do you serve the Brooklin area in Whitby?",
      a: "Yes. We serve all of Whitby, including Brooklin, downtown Whitby, the Shores, and all surrounding neighbourhoods.",
    },
  },
  {
    slug: "orangeville",
    city: "Orangeville",
    region: "Dufferin County",
    metaTitle: "Front Door Glass Replacement in Orangeville",
    metaDescription:
      "Front door glass replacement in Orangeville. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Orangeville sits at the edge of the GTA where the suburban subdivisions meet the rural townships. The town's front door glass ranges from heritage panels in the Broadway core to builder-grade inserts in newer subdivisions. LuminaSky replaces both without swapping the door.",
    uniqueContent:
      "The older part of Orangeville around Broadway and Mill Street has Victorian and Edwardian homes with wooden entry doors. The glass panels in these doors are part of the home's character, and replacements need to respect the original proportions and style. LuminaSky sources textured and patterned glass to match when standard options fall short. In the newer subdivisions along Hansen Boulevard and Alder Street, the housing stock is 10 to 25 years old with standard steel and fibreglass entry doors. Foggy inserts are a common call from these areas. Orangeville's location in the headwaters region brings cold winters and significant wind, which puts extra stress on door glass seals. We use sealed units rated for the conditions and provide a written quote after measuring on-site.",
    neighborhoods: getNeighborhoods("orangeville"),
    citySpecificFaq: {
      q: "Do you travel to Orangeville for door glass replacement?",
      a: "Yes. Orangeville is within our regular service area. We schedule Orangeville visits on our Dufferin County route.",
    },
  },
  {
    slug: "halton-hills",
    city: "Halton Hills / Georgetown",
    region: "Halton Region",
    metaTitle: "Front Door Glass Replacement in Georgetown",
    metaDescription:
      "Front door glass replacement in Georgetown and Halton Hills. Decorative, frosted, clear and privacy inserts. 5-Year Warranty. 437-344-8490.",
    intro:
      "Georgetown and Acton form the core of Halton Hills, with a mix of historic village homes and newer subdivision builds. The front door glass across these communities ranges from century-home panels to modern factory inserts. LuminaSky replaces all of them on-site.",
    uniqueContent:
      "Georgetown's downtown along Main Street has a collection of older homes whose wooden doors carry glass panels that predate modern sealed units. These are single-pane or early double-pane inserts that benefit from an upgrade to a modern sealed unit sized to fit the original opening. The subdivisions east and west of downtown, built from the 1990s through the 2010s, use standard builder-grade entry doors with decorative inserts that are now reaching replacement age. Acton, the smaller community to the west, has a similar mix of older village homes and newer builds. Halton Hills sits at a higher elevation than the lakeshore communities, which brings colder winter temperatures and more freeze-thaw stress on door glass seals. LuminaSky measures on-site, orders to the exact dimensions, and installs the replacement glass in a single return visit.",
    neighborhoods: getNeighborhoods("halton-hills"),
    citySpecificFaq: {
      q: "Do you serve both Georgetown and Acton in Halton Hills?",
      a: "Yes. We cover all of Halton Hills, including Georgetown, Acton, Glen Williams, and the surrounding rural areas.",
    },
  },
  {
    slug: "barrie",
    city: "Barrie",
    region: "Simcoe County",
    metaTitle: "Front Door Glass Replacement in Barrie",
    metaDescription:
      "Front door glass replacement in Barrie. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Barrie's housing boom over the past two decades has produced subdivisions stretching from the south end near Highway 400 to the growing communities in the northeast. The front door glass in these homes is builder-grade, and it is now reaching the age where seals fail. LuminaSky replaces the glass on-site.",
    uniqueContent:
      "South Barrie, around Mapleview Drive and along the Highway 400 corridor, was developed rapidly through the 2000s and 2010s. Entire streets share the same entry door and glass insert design. When the sealed unit in one starts fogging, the neighbours are usually not far behind. LuminaSky handles multi-home orders in the area for efficiency. Downtown Barrie along Dunlop Street and the Allandale waterfront area has older homes with wooden doors and non-standard glass panels that need careful on-site measurement. The north end of Barrie, including Hewitt's Gate and the Essa Road corridor, continues to expand with new builds. Barrie's proximity to Georgian Bay brings colder and windier winters than communities farther south, which increases the thermal load on door glass seals. We use sealed units appropriate for the conditions.",
    neighborhoods: getNeighborhoods("barrie"),
    citySpecificFaq: {
      q: "Is Barrie within your service area for front door glass replacement?",
      a: "Yes. We serve Barrie and schedule visits on our Simcoe County route. The process is the same: on-site measurement, then a return visit for installation.",
    },
  },
  {
    slug: "innisfil",
    city: "Innisfil",
    region: "Simcoe County",
    metaTitle: "Front Door Glass Replacement in Innisfil",
    metaDescription:
      "Front door glass replacement in Innisfil. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Innisfil has grown from a rural township to a fast-developing residential community. The homes along the Alcona waterfront and in the newer subdivisions around the Friday Harbour area have front door glass that LuminaSky replaces without swapping the door.",
    uniqueContent:
      "Alcona, Innisfil's largest community, sits on the shore of Lake Simcoe. The lakefront cottages and year-round homes here face moisture and wind off the water that accelerates door glass seal deterioration. Farther inland, the subdivisions along Innisfil Beach Road and around the Cookstown area feature newer builder-grade homes with standard entry door inserts. These are 10 to 20 years old and entering the common window for seal failure. Innisfil's mix of older cottage country properties and newer suburban homes means LuminaSky sees both custom-measurement and standard-replacement work here. The measurement and installation process does not change: we come to the property, measure the glass opening, order to size, and return to install.",
    neighborhoods: getNeighborhoods("innisfil"),
    citySpecificFaq: {
      q: "Do you replace door glass in lakefront cottages in Innisfil?",
      a: "Yes. We work on both year-round homes and seasonal properties in Innisfil, including Alcona, Big Bay Point, and the lakefront areas.",
    },
  },
  {
    slug: "stouffville",
    city: "Stouffville",
    region: "York Region",
    metaTitle: "Front Door Glass Replacement in Stouffville",
    metaDescription:
      "Front door glass replacement in Stouffville. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Stouffville has grown from a small village into a substantial residential community over the past 15 years. The homes in its newer subdivisions have builder-grade entry doors with glass inserts that are now starting to fog and crack. LuminaSky replaces the glass without touching the door.",
    uniqueContent:
      "The historic village core of Stouffville along Main Street has a handful of older homes with character doors and non-standard glass panels. These need on-site measurement to get the replacement dimensions right. The bulk of Stouffville's housing, though, is in the subdivisions that expanded rapidly south and west of the village between 2005 and 2020. Homes in these areas carry standard steel and fibreglass entry doors with decorative inserts from a limited set of builder patterns. The glass inserts in the earliest phases are now firmly in the seal-failure zone. Fog between the panes is the leading complaint, followed by cracks from thermal stress. LuminaSky measures the glass opening, orders the replacement unit, and installs it on a return visit. The door stays on its hinges throughout.",
    neighborhoods: getNeighborhoods("stouffville"),
    citySpecificFaq: {
      q: "My Stouffville subdivision home has a builder-grade door insert that fogged up. Can you match the design?",
      a: "Yes. Builder-grade inserts use a small set of standard patterns that we source regularly. We can match the existing design or fit a new style into the same opening.",
    },
  },
  {
    slug: "east-gwillimbury",
    city: "East Gwillimbury",
    region: "York Region",
    metaTitle: "Front Door Glass in East Gwillimbury",
    metaDescription:
      "Front door glass replacement in East Gwillimbury. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "East Gwillimbury's communities of Holland Landing, Sharon, and Queensville are growing steadily. The newer homes have builder-grade entry door glass that will need replacing within the next decade, and the older village homes already do. LuminaSky handles both.",
    uniqueContent:
      "Holland Landing, the most established community in East Gwillimbury, has a core of older homes along the river with wooden entry doors and glass panels that may be original to the house. These need on-site measurement for an exact fit. The newer subdivisions spreading south toward Newmarket and east toward Mount Albert use standard builder-grade entry doors with factory inserts. Sharon and Queensville have a similar mix: small village centres with older homes surrounded by newer residential development. The front door glass across all these communities faces the same Ontario winter conditions, and the same seal-failure timeline applies. LuminaSky measures on-site, orders to the exact opening, and installs without removing the door from its hinges.",
    neighborhoods: getNeighborhoods("east-gwillimbury"),
    citySpecificFaq: {
      q: "Do you serve Holland Landing and Queensville?",
      a: "Yes. We cover all of East Gwillimbury, including Holland Landing, Sharon, Queensville, and Mount Albert.",
    },
  },
  {
    slug: "georgina",
    city: "Georgina / Keswick",
    region: "York Region",
    metaTitle: "Front Door Glass Replacement in Keswick",
    metaDescription:
      "Front door glass replacement in Keswick and Georgina. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Georgina's communities along the south shore of Lake Simcoe, including Keswick, Sutton, and Jackson's Point, have a mix of year-round homes and former cottages that have been converted to permanent residences. The front door glass in both styles eventually needs replacement, and LuminaSky handles it on-site.",
    uniqueContent:
      "Keswick, Georgina's largest community, has a core of older homes near the waterfront with wooden and early steel entry doors. The glass panels in these doors are often non-standard sizes that require on-site measurement. Newer subdivisions along Woodbine Avenue and The Queensway use builder-grade steel and fibreglass doors with standard inserts that are easier to match and replace. Sutton and Jackson's Point on the east side of Georgina lean toward cottage and village-style homes where front door glass is often simpler: half-lite clear or frosted panels rather than the decorative designs common farther south. The lake proximity means more moisture exposure on door glass seals, particularly for homes facing the water. LuminaSky uses sealed units suited to the conditions and measures every opening on-site for an exact fit.",
    neighborhoods: getNeighborhoods("georgina"),
    citySpecificFaq: {
      q: "Do you travel to Sutton and Jackson's Point for door glass replacement?",
      a: "Yes. We serve all of Georgina, including Keswick, Sutton, Jackson's Point, Pefferlaw, and the surrounding lakeshore areas.",
    },
  },
  {
    slug: "bradford",
    city: "Bradford",
    region: "Simcoe County",
    metaTitle: "Front Door Glass Replacement in Bradford",
    metaDescription:
      "Front door glass replacement in Bradford. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Bradford has expanded rapidly from its village core into a growing suburban community. The newer homes lining the streets around County Road 88 and Professor Day Drive have builder-grade entry doors with glass inserts now entering their replacement window. LuminaSky replaces the glass on-site.",
    uniqueContent:
      "The older part of Bradford along Holland Street has a small stock of village homes with wooden doors and non-standard glass panels. These need precise on-site measurement to fit a replacement properly. The subdivisions built from the early 2000s through the 2010s dominate the town's housing supply and use standard steel and fibreglass entry doors with factory-installed decorative inserts. After 15 to 20 years, the sealed glass units in these inserts start to fail. Fog between the panes is the most common symptom, followed by hairline cracks from seasonal temperature swings. Bradford's location at the northern edge of the commuter belt means slightly colder winter conditions than towns closer to Toronto, which adds stress to door glass seals. LuminaSky measures on-site, orders to exact dimensions, and installs in a single return visit.",
    neighborhoods: getNeighborhoods("bradford"),
    citySpecificFaq: {
      q: "How far in advance do I need to book for door glass replacement in Bradford?",
      a: "Bradford is on our regular Simcoe County route. Most bookings are scheduled within a week, and the installation visit follows once the glass is ready.",
    },
  },
  {
    slug: "clarington",
    city: "Clarington / Bowmanville",
    region: "Durham Region",
    metaTitle: "Front Door Glass Replacement in Bowmanville",
    metaDescription:
      "Front door glass replacement in Bowmanville and Clarington. Decorative, frosted, clear and privacy inserts. 5-Year Warranty. 437-344-8490.",
    intro:
      "Clarington's communities of Bowmanville, Courtice, and Newcastle have grown substantially over the past two decades. The front door glass in these homes is builder-grade and now entering the age where seals fail and styles feel dated. LuminaSky replaces the glass without replacing the door.",
    uniqueContent:
      "Bowmanville, Clarington's largest community, has an older village core along King Street with heritage homes whose wooden doors carry glass panels that predate modern sealed units. Replacements for these need to be measured to the exact opening, as the sizes do not match current standards. The newer subdivisions in north Bowmanville, Courtice, and around Green Road use standard builder-grade entry doors with factory inserts. These homes were built from the 2000s onward, and the glass inserts are now entering the typical failure period. Newcastle, the smaller community to the east, has a similar profile. Clarington's location at the eastern edge of the GTA means fewer glass service providers cover the area. LuminaSky schedules Clarington visits on our Durham Region route and handles the measurement and installation on separate trips.",
    neighborhoods: getNeighborhoods("clarington"),
    citySpecificFaq: {
      q: "Do you cover Courtice and Newcastle as well as Bowmanville?",
      a: "Yes. We serve all of Clarington, including Bowmanville, Courtice, Newcastle, Orono, and the surrounding areas.",
    },
  },
  {
    slug: "uxbridge",
    city: "Uxbridge",
    region: "Durham Region",
    metaTitle: "Front Door Glass Replacement in Uxbridge",
    metaDescription:
      "Front door glass replacement in Uxbridge. Decorative, frosted, clear and privacy glass inserts for entry doors. 5-Year Warranty. Call 437-344-8490.",
    intro:
      "Uxbridge's small-town character includes a historic downtown, established residential streets, and newer subdivisions on the town's edges. The front door glass in these homes ranges from heritage panels on Brock Street to standard builder inserts in newer areas. LuminaSky replaces all of them on-site.",
    uniqueContent:
      "The downtown core of Uxbridge along Brock Street has Victorian and early 20th-century homes with wooden doors and character glass panels. Replacements here need to respect the proportions and style of the original, and LuminaSky sources textured or patterned glass when a standard clear or frosted panel would look out of place. The newer subdivisions in south and east Uxbridge use builder-grade steel and fibreglass doors with standard decorative inserts. These are the most common calls from the area: foggy glass between the panes, or a style update from brass-caming decorative to a cleaner frosted look. Uxbridge's rural surroundings and elevation bring cold winters and wind exposure that put additional stress on door glass seals. We use sealed units rated for the conditions and measure on-site for every job.",
    neighborhoods: getNeighborhoods("uxbridge"),
    citySpecificFaq: {
      q: "Is Uxbridge within your service area?",
      a: "Yes. Uxbridge is on our Durham Region route. We schedule measurement and installation visits on regular service days.",
    },
  },
];

export function getFrontDoorGlassCityPageData(slug: string): FrontDoorGlassCityPageData | undefined {
  return FRONT_DOOR_GLASS_CITY_PAGES.find((c) => c.slug === slug);
}
