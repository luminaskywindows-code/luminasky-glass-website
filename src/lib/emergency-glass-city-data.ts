import { CITY_PAGES } from "./city-pages-data";

export interface EmergencyGlassCityPageData {
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

export const EMERGENCY_GLASS_CITY_PAGES: EmergencyGlassCityPageData[] = [
  {
    slug: "toronto",
    city: "Toronto",
    region: "Toronto",
    metaTitle: "Emergency Glass Repair Toronto | 24/7 Board-Up & Glass",
    metaDescription:
      "Emergency glass repair in Toronto. 24/7 board-up service, storm damage, break-in repair, shattered windows. Call 437-344-8490 any time.",
    intro:
      "When a window breaks in the middle of the night or a storm sends debris through your patio door, you need someone who picks up the phone at 2 AM. LuminaSky provides 24/7 emergency glass repair across Toronto. We board up the opening to secure your home immediately, then measure and order custom replacement glass so the permanent fix is done right.",
    uniqueContent:
      "Toronto sees a wide range of glass emergencies. Downtown condos and townhomes along the waterfront get hit by wind-driven debris during storms off the lake. Older homes in the Annex, Roncesvalles and High Park have single-pane and early double-pane windows that shatter more easily on impact. North Toronto and Leaside homes tend to have larger picture windows and sidelites that are expensive to leave exposed overnight. Break-ins are common across the city, and the first priority is always securing the opening. We board up with plywood or polycarbonate sheeting, clean up the glass inside and out, and then measure for permanent replacement glass. Standard sealed units are often in stock locally. Oversized or custom shapes take 5 to 15 business days.",
    neighborhoods: getNeighborhoods("toronto"),
    citySpecificFaq: {
      q: "How quickly can you board up a broken window in Toronto?",
      a: "We respond 24/7 for board-up calls across Toronto. Response time depends on traffic and current call volume, but we treat every emergency as a priority.",
    },
  },
  {
    slug: "mississauga",
    city: "Mississauga",
    region: "Peel Region",
    metaTitle: "Emergency Glass Repair Mississauga | 24/7 Service",
    metaDescription:
      "Emergency glass repair in Mississauga. 24/7 board-up, storm damage and break-in glass replacement. Call 437-344-8490.",
    intro:
      "A shattered window or smashed patio door in Mississauga needs immediate attention, whether it happened at noon or midnight. LuminaSky responds around the clock to board up the opening, secure your home, and arrange permanent glass replacement. We serve every neighbourhood in Mississauga from Port Credit to Churchill Meadows.",
    uniqueContent:
      "Mississauga's mix of housing creates different emergency glass situations. The townhome complexes in Erin Mills, Meadowvale and Lisgar have standard-size windows that we can often replace from local stock within days. Port Credit and Lakeshore homes face more storm exposure from the lake, and the older windows in these areas are more prone to cracking under pressure. The high-rise condos along Hurontario and near Square One have sealed units that require exact measurements. Churchill Meadows and newer subdivisions use larger patio doors and transom windows that need custom glass. In every case, the first step is the same: board up, clean up, measure, and order.",
    neighborhoods: getNeighborhoods("mississauga"),
    citySpecificFaq: {
      q: "Do you handle emergency glass repair for Mississauga condos?",
      a: "Yes. We work with condo management and individual unit owners. We handle the board-up and coordinate access for the permanent glass installation.",
    },
  },
  {
    slug: "vaughan",
    city: "Vaughan",
    region: "York Region",
    metaTitle: "Emergency Glass Repair Vaughan | 24/7 Board-Up",
    metaDescription:
      "Emergency glass repair in Vaughan. 24/7 response for broken windows, storm damage and break-ins. Serving Woodbridge, Maple, Kleinburg. Call 437-344-8490.",
    intro:
      "LuminaSky is based in Thornhill and responds quickly to emergency glass calls across Vaughan. Whether a break-in smashed your front door sidelite in Woodbridge or a fallen branch cracked a window in Kleinburg, we board up the opening to secure your home and then handle the permanent glass replacement.",
    uniqueContent:
      "Vaughan's residential areas each have their own typical emergencies. Woodbridge homes along Islington and Highway 7 are mostly 1990s builds with standard sealed units that we can source quickly. Maple subdivisions north of Major Mackenzie have newer vinyl windows with larger glass panels. Kleinburg and the Nashville area have estate homes with oversized windows, sidelites and transom glass that require custom orders. Concord's commercial and industrial properties sometimes need storefront glass boarded up after hours. Our shop is nearby, so Vaughan emergency calls are among the fastest for us to reach.",
    neighborhoods: getNeighborhoods("vaughan"),
    citySpecificFaq: {
      q: "How fast can you get to Vaughan for an emergency board-up?",
      a: "We are based near Vaughan, so response times are typically among our shortest. We respond 24/7 and prioritize active emergencies.",
    },
  },
  {
    slug: "thornhill",
    city: "Thornhill",
    region: "York Region",
    metaTitle: "Emergency Glass Repair Thornhill | 24/7 Response",
    metaDescription:
      "Emergency glass repair in Thornhill. 24/7 board-up and glass replacement for break-ins, storms and accidents. Call 437-344-8490.",
    intro:
      "Thornhill is our home base. When a window breaks in Thornhill, day or night, we are minutes away. LuminaSky provides 24/7 emergency board-up service and handles the permanent glass replacement from measurement through installation.",
    uniqueContent:
      "Thornhill straddles Vaughan and Markham, and both sides have homes from the late 1980s through the 2000s with sealed glass units that can shatter on impact. Homes along Bathurst, Bayview and in the Thornhill Woods area have a mix of casement, picture and patio door glass. The townhome communities along Centre Street and near Promenade Mall have standard-size windows that we can often replace from stock. Break-ins and accidental damage from sports equipment, fallen branches and wildlife are the most common emergency calls we get from Thornhill. Being based here means we can usually reach the site faster than anywhere else we serve.",
    neighborhoods: getNeighborhoods("thornhill"),
    citySpecificFaq: {
      q: "Can you do same-day board-up in Thornhill?",
      a: "Yes. Thornhill is our home base, and we respond to emergency calls here around the clock. Board-up is always the first step to secure the opening.",
    },
  },
  {
    slug: "richmond-hill",
    city: "Richmond Hill",
    region: "York Region",
    metaTitle: "Emergency Glass Repair Richmond Hill | 24/7",
    metaDescription:
      "Emergency glass repair in Richmond Hill. 24/7 board-up service for broken windows, storm damage and break-ins. Call 437-344-8490.",
    intro:
      "Richmond Hill homeowners call us when a window breaks unexpectedly, whether from a storm, a break-in, or an accident. LuminaSky provides 24/7 emergency response across Richmond Hill. We board up the opening right away and then handle the glass replacement from start to finish.",
    uniqueContent:
      "Richmond Hill's housing stock ranges from the older homes south of Major Mackenzie with original sealed units to the newer builds in Oak Ridges and along Bayview with large picture windows. The homes in the Richvale and Westbrook areas tend to have standard sizes that we can source from local suppliers quickly. Oak Ridges and Jefferson have larger custom windows and front door sidelites that take longer to replace. The Yonge Street corridor has commercial storefronts that sometimes need emergency boarding after break-ins or accidents. We handle both residential and commercial emergency glass calls in Richmond Hill.",
    neighborhoods: getNeighborhoods("richmond-hill"),
    citySpecificFaq: {
      q: "Do you charge extra for after-hours emergency glass repair in Richmond Hill?",
      a: "No. There is no after-hours surcharge. The same rates apply whether you call at 2 PM or 2 AM.",
    },
  },
  {
    slug: "markham",
    city: "Markham",
    region: "York Region",
    metaTitle: "Emergency Glass Repair Markham | 24/7 Service",
    metaDescription:
      "Emergency glass repair in Markham. 24/7 board-up, broken window and patio door glass replacement. Call 437-344-8490.",
    intro:
      "When glass breaks in Markham, the priority is securing the opening. LuminaSky responds 24/7 for emergency board-up and glass replacement across Markham, from Unionville to Cornell to the older neighbourhoods around Main Street. We secure the opening first, then measure and order permanent replacement glass.",
    uniqueContent:
      "Markham has one of the most diverse housing stocks in York Region. The heritage homes in Unionville have unique glass shapes and sizes that need careful measurement. Homes in Cathedraltown and Angus Glen are newer builds with large sealed units and tall sidelites. Cornell and Berczy have production homes with standard vinyl windows. The commercial areas along Highway 7 and in the Markham Road corridor have storefronts and office buildings that sometimes need emergency glass service after hours. We carry plywood and polycarbonate sheeting for board-ups and handle permanent glass replacement for all window types found in Markham.",
    neighborhoods: getNeighborhoods("markham"),
    citySpecificFaq: {
      q: "Can you replace heritage window glass in Markham?",
      a: "Yes. We measure and order custom glass to match the existing window profile. Heritage and non-standard sizes are available as custom orders.",
    },
  },
  {
    slug: "brampton",
    city: "Brampton",
    region: "Peel Region",
    metaTitle: "Emergency Glass Repair Brampton | 24/7 Board-Up",
    metaDescription:
      "Emergency glass repair in Brampton. 24/7 board-up and glass replacement for storms, break-ins and accidents. Call 437-344-8490.",
    intro:
      "Brampton homeowners and business owners can call LuminaSky any time for emergency glass repair. We respond 24/7 to board up broken windows and doors, secure the property, and arrange permanent glass replacement. No after-hours surcharge.",
    uniqueContent:
      "Brampton's rapid growth means the city has a wide range of housing ages. The older homes in downtown Brampton and the Bramalea area have windows from the 1970s and 1980s that are more fragile. The large subdivisions in Springdale, Sandalwood and Castlemore have newer sealed units in standard sizes. The newer builds in Mount Pleasant and Heritage Heights have tall windows and oversized patio doors. On the commercial side, the industrial areas along Steeles, Queen Street and along Highway 410 have storefront and warehouse glass that sometimes needs emergency service. We board up the opening to make it secure, then come back with the replacement glass once it is ready.",
    neighborhoods: getNeighborhoods("brampton"),
    citySpecificFaq: {
      q: "Do you handle commercial emergency glass in Brampton?",
      a: "Yes. We board up storefronts, office windows and warehouse glass after hours. The process is the same: secure the opening first, then arrange permanent replacement.",
    },
  },
  {
    slug: "oakville",
    city: "Oakville",
    region: "Halton Region",
    metaTitle: "Emergency Glass Repair Oakville | 24/7 Response",
    metaDescription:
      "Emergency glass repair in Oakville. 24/7 board-up service, broken window and door glass replacement. Call 437-344-8490.",
    intro:
      "Oakville homes often have large windows, custom glass and premium entry doors that are expensive to leave exposed after a break. LuminaSky provides 24/7 emergency glass repair across Oakville. We board up the opening immediately and then measure for permanent replacement glass.",
    uniqueContent:
      "Oakville's lakefront properties and the estates along the Sixteen Mile Creek corridor have some of the largest residential glass panels we work with. These homes often have floor-to-ceiling windows, custom-shaped transoms and oversized patio doors that require exact measurements and custom glass orders. The Bronte, Kerr Village and Old Oakville areas have a mix of older and renovated homes with both standard and specialty glass. Glen Abbey and River Oaks homes tend to have standard production sizes that are easier to source quickly. When a window breaks in any of these areas, the first step is always a board-up to secure the home, followed by careful measurement for permanent glass.",
    neighborhoods: getNeighborhoods("oakville"),
    citySpecificFaq: {
      q: "Can you replace oversized window glass in Oakville?",
      a: "Yes. We measure and order custom glass for any size. Large sealed units are made to order and typically take 5 to 15 business days after measurement.",
    },
  },
  {
    slug: "north-york",
    city: "North York",
    region: "Toronto",
    metaTitle: "Emergency Glass Repair North York | 24/7",
    metaDescription:
      "Emergency glass repair in North York. 24/7 board-up and glass replacement for homes and businesses. Call 437-344-8490.",
    intro:
      "North York has everything from high-rise condos to detached homes, and glass emergencies can happen in any of them. LuminaSky responds 24/7 across North York for emergency board-up and glass replacement. We secure the opening first, then handle the permanent fix.",
    uniqueContent:
      "North York's housing diversity means we see a wide range of emergency glass situations. The detached homes in Willowdale, Bayview Village and Don Mills have sealed units from the 1990s and 2000s that can shatter from impact. The condo towers along Yonge Street and in the Sheppard corridor have sealed units that need exact measurements and coordination with building management. The bungalows and split-levels in the Finch and Jane area have standard window sizes. Bathurst Manor and Downsview homes are a mix of ages with different glass types. In every case, the priority is boarding up the opening to keep the home secure and weather-tight until the permanent glass is ready.",
    neighborhoods: getNeighborhoods("north-york"),
    citySpecificFaq: {
      q: "Do you work with North York condo buildings for emergency glass?",
      a: "Yes. We coordinate with building management for access and handle all the measurement and replacement. Board-up comes first to secure the unit.",
    },
  },
  {
    slug: "scarborough",
    city: "Scarborough",
    region: "Toronto",
    metaTitle: "Emergency Glass Repair Scarborough | 24/7",
    metaDescription:
      "Emergency glass repair in Scarborough. 24/7 board-up, storm damage and break-in glass replacement. Call 437-344-8490.",
    intro:
      "Scarborough stretches from the Bluffs to the Rouge Valley, and glass emergencies happen across the entire area. LuminaSky provides 24/7 emergency glass repair in Scarborough. We board up broken windows and doors immediately and then arrange permanent replacement glass.",
    uniqueContent:
      "Scarborough's housing stock is one of the most varied in Toronto. The bungalows and semi-detached homes in Birch Cliff, Cliffside and Wexford date back to the 1950s and 1960s and have been renovated with a mix of window types over the decades. The townhomes in Agincourt, Tam O'Shanter and Malvern have standard sealed units from the 1980s and 1990s. The newer builds along the Sheppard and McCowan corridors have larger windows. The commercial plazas along Kingston Road, Lawrence East and Markham Road sometimes need emergency storefront boarding. We handle all of these, starting with a board-up to secure the property.",
    neighborhoods: getNeighborhoods("scarborough"),
    citySpecificFaq: {
      q: "Do you cover all of Scarborough for emergency glass?",
      a: "Yes. We serve every part of Scarborough, from the Bluffs and Guildwood to Highland Creek, Agincourt and Malvern. 24/7 response.",
    },
  },
  {
    slug: "etobicoke",
    city: "Etobicoke",
    region: "Toronto",
    metaTitle: "Emergency Glass Repair Etobicoke | 24/7",
    metaDescription:
      "Emergency glass repair in Etobicoke. 24/7 board-up and glass replacement for homes and businesses. Call 437-344-8490.",
    intro:
      "Etobicoke homeowners and business owners call LuminaSky when glass breaks unexpectedly. We respond 24/7 across Etobicoke, from the Kingsway to Rexdale. Board-up first, then permanent glass replacement.",
    uniqueContent:
      "Etobicoke has distinct residential areas that each present different glass emergency scenarios. The Kingsway and Princess Anne Manor have larger homes with custom windows and decorative glass that need careful replacement. Mimico and New Toronto along the lakeshore have a mix of older homes and newer condos. Islington Village and Bloor West have standard-size windows in well-maintained homes. Rexdale and the areas along Kipling have townhome complexes and commercial properties. The Humber Bay Shores condo corridor has high-rise sealed units. We board up any opening to secure it, then measure and order the correct replacement glass for the specific window type.",
    neighborhoods: getNeighborhoods("etobicoke"),
    citySpecificFaq: {
      q: "Can you board up commercial glass in Etobicoke after hours?",
      a: "Yes. We provide 24/7 commercial board-up service across Etobicoke. We secure the storefront or office and then arrange permanent glass replacement.",
    },
  },
  {
    slug: "hamilton",
    city: "Hamilton",
    region: "Hamilton",
    metaTitle: "Emergency Glass Repair Hamilton | 24/7 Service",
    metaDescription:
      "Emergency glass repair in Hamilton. 24/7 board-up and glass replacement for broken windows. Call 437-344-8490.",
    intro:
      "Hamilton's weather and older housing stock make glass emergencies more common than you might expect. LuminaSky provides 24/7 emergency glass repair across Hamilton, from the Mountain to Dundas to Stoney Creek. We board up the opening immediately and handle permanent glass replacement.",
    uniqueContent:
      "Hamilton has a large stock of older homes on the Mountain, in Westdale, in the North End and across the lower city. Many of these homes still have original or early-replacement sealed units that are more vulnerable to impact and thermal stress. The newer subdivisions in Stoney Creek, Binbrook and upper Ancaster have standard-size sealed units. Dundas and Waterdown have a mix of heritage and modern homes. The commercial areas along James Street, Barton and Upper James have storefronts that sometimes need emergency boarding. Hamilton also gets heavier weather than much of the GTA, with lake-effect snow and wind that can drive debris into windows. We handle the full process: board-up, measurement, custom glass order, and installation.",
    neighborhoods: getNeighborhoods("hamilton"),
    citySpecificFaq: {
      q: "Do you serve all of Hamilton for emergency glass, including the Mountain?",
      a: "Yes. We cover all of Hamilton: downtown, the Mountain, Stoney Creek, Dundas, Ancaster, Waterdown and Flamborough. 24/7 response.",
    },
  },
  {
    slug: "burlington",
    city: "Burlington",
    region: "Halton Region",
    metaTitle: "Emergency Glass Repair Burlington | 24/7",
    metaDescription:
      "Emergency glass repair in Burlington. 24/7 board-up, storm damage and broken window replacement. Call 437-344-8490.",
    intro:
      "Burlington sits between the lake and the escarpment, and both create weather patterns that put glass at risk. LuminaSky provides 24/7 emergency glass repair across Burlington. We board up the opening right away and then handle permanent glass replacement.",
    uniqueContent:
      "Burlington's lakeside homes in Roseland, LaSalle Park and the downtown waterfront area face storm exposure from Lake Ontario, and wind-driven debris is a real risk during severe weather. The homes along the escarpment in Tyandaga and Alton Village are exposed to stronger gusts that can push objects into windows. Central Burlington, the Orchard and Palmer areas have well-maintained homes with standard-size sealed units. The newer builds in Alton Village and Millcroft have larger patio doors and picture windows. Commercial properties along Brant Street, Fairview Street and the QEW corridor sometimes need emergency boarding after break-ins or vehicle incidents. We secure the opening first, then measure and order replacement glass.",
    neighborhoods: getNeighborhoods("burlington"),
    citySpecificFaq: {
      q: "Do you handle storm damage glass repair in Burlington?",
      a: "Yes. Storm damage is one of the most common reasons Burlington homeowners call us. We board up immediately and order replacement glass as soon as measurements are done.",
    },
  },
  {
    slug: "ajax",
    city: "Ajax",
    region: "Durham Region",
    metaTitle: "Emergency Glass Repair Ajax | 24/7 Board-Up",
    metaDescription:
      "Emergency glass repair in Ajax. 24/7 board-up and glass replacement for broken windows and doors. Call 437-344-8490.",
    intro:
      "Ajax homeowners can call LuminaSky any time for emergency glass repair. We provide 24/7 board-up service across Ajax and handle permanent glass replacement from measurement through installation. No after-hours surcharge.",
    uniqueContent:
      "Ajax's housing is predominantly suburban homes built from the 1980s onward. The neighbourhoods along Bayly Street and Harwood have a mix of older homes with standard sealed units. South Ajax near the waterfront gets more weather exposure. The newer developments in the north end of Ajax have larger windows and modern patio doors. Salem and Westney Heights have townhome clusters with standard-size glass. Most Ajax homes use common sealed unit sizes that we can source from local suppliers relatively quickly. Custom shapes and oversized units take longer but are available. We board up the opening on the first visit and return with the permanent glass once it is ready.",
    neighborhoods: getNeighborhoods("ajax"),
    citySpecificFaq: {
      q: "How long does permanent glass replacement take after a board-up in Ajax?",
      a: "Standard sealed unit sizes are often available within a few days. Custom or oversized glass takes 5 to 15 business days after measurement. The board-up keeps your home secure in the meantime.",
    },
  },
  {
    slug: "pickering",
    city: "Pickering",
    region: "Durham Region",
    metaTitle: "Emergency Glass Repair Pickering | 24/7",
    metaDescription:
      "Emergency glass repair in Pickering. 24/7 board-up and glass replacement for broken windows. Call 437-344-8490.",
    intro:
      "Pickering is a growing city with a mix of established neighbourhoods and new developments. LuminaSky provides 24/7 emergency glass repair across Pickering. We board up broken windows and doors immediately and handle permanent glass replacement.",
    uniqueContent:
      "Pickering has two distinct housing zones that affect emergency glass work. The established neighbourhoods in south Pickering, including the Village East, Rougemount and Bay Ridges areas, have homes from the 1970s through the 1990s with standard sealed units. The newer developments in Seaton and the north end of Pickering have modern homes with larger windows and energy-efficient glass. The commercial areas along Kingston Road and the Pickering Town Centre corridor have storefronts and office buildings. Liverpool Road and the waterfront area face weather exposure from the lake. We handle all of these with the same approach: board-up first, then measurement and custom glass order for the permanent fix.",
    neighborhoods: getNeighborhoods("pickering"),
    citySpecificFaq: {
      q: "Do you serve both south and north Pickering for emergency glass?",
      a: "Yes. We cover all of Pickering, from the waterfront and Bay Ridges to Seaton and the newer developments in the north. 24/7 response.",
    },
  },
];

export function getEmergencyGlassCityPageData(
  slug: string
): EmergencyGlassCityPageData | undefined {
  return EMERGENCY_GLASS_CITY_PAGES.find((c) => c.slug === slug);
}
