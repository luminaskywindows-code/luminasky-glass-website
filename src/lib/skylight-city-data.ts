import { CITY_PAGES } from "./city-pages-data";

function getNeighborhoods(slug: string): string[] {
  const city = CITY_PAGES.find((c) => c.slug === slug);
  return city ? city.neighborhoods : [];
}

export interface SkylightCityPageData {
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

export const SKYLIGHT_CITY_PAGES: SkylightCityPageData[] = [
  {
    slug: "toronto",
    city: "Toronto",
    region: "Toronto",
    metaTitle: "Skylight Repair Toronto | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Toronto. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Toronto's freeze-thaw cycles put skylights through more stress than most homeowners realize. Ice dams, UV-baked sealant, and decades of thermal expansion crack seals and flashing across every neighbourhood. We repair leaking skylights, replace fogged or cracked glass units, fix flashing and re-seal frames across Toronto, from older homes in the Annex and Riverdale to newer builds in Liberty Village and the waterfront condos.",
    uniqueContent:
      "Homes built in Toronto during the 1980s and 1990s are the ones we see most often for skylight work. The Annex, High Park, Leaside and Riverdale all have a large stock of skylights that are 25-35 years old, right in the window where IGU seals start failing. Midtown and North Toronto townhomes tend to have larger skylights in vaulted ceilings that are harder to access from inside, which means we work from the roof. Downtown condos and lofts have fixed skylights and glass towers where the sealed units fog up but the aluminum frames are still in good shape. We replace the glass and re-seal the frame so the skylight is weathertight again.",
    neighborhoods: getNeighborhoods("toronto"),
    citySpecificFaq: {
      q: "How fast can you respond to a skylight leak in Toronto?",
      a: "We respond 24/7 for active leaks. If a permanent repair can't be done the same day, we tarp or temporarily seal the skylight to stop the water and return as soon as materials are ready.",
    },
  },
  {
    slug: "mississauga",
    city: "Mississauga",
    region: "Peel Region",
    metaTitle: "Skylight Repair Mississauga | Leaks & Glass",
    metaDescription:
      "Skylight repair in Mississauga. Leaks, fogged glass, flashing and seal replacement. 24/7 emergency service across Mississauga.",
    intro:
      "Mississauga has a wide range of housing stock with skylights, from the split-levels and raised ranches in Erin Mills and Meadowvale to newer builds in Churchill Meadows and the condos along the waterfront. We repair leaking skylights, replace fogged glass units, fix flashing problems and re-seal frames across every part of the city.",
    uniqueContent:
      "Erin Mills, Meadowvale and Streetsville homes from the 1980s and 1990s are where we do the most skylight work in Mississauga. Many have kitchen or bathroom skylights with original sealed units that are now fogged or leaking. Port Credit and Lakeshore homes get extra wind and moisture exposure from the lake, which accelerates seal breakdown. The newer builds in Churchill Meadows and Lisgar tend to have Velux venting skylights where the operator hardware fails before the glass does. We repair or replace the hardware so the skylight opens and seals properly again.",
    neighborhoods: getNeighborhoods("mississauga"),
    citySpecificFaq: {
      q: "Do you repair venting skylight hardware in Mississauga?",
      a: "Yes. We replace operators, cranks and hinges on venting skylights from Velux, Fakro and other brands. If the hardware is no longer available, we source compatible replacements.",
    },
  },
  {
    slug: "vaughan",
    city: "Vaughan",
    region: "York Region",
    metaTitle: "Skylight Repair Vaughan | Leaks & Glass",
    metaDescription:
      "Skylight repair in Vaughan. Leak repair, glass replacement, flashing and seals. Serving Woodbridge, Maple, Kleinburg and Concord.",
    intro:
      "Vaughan's housing stock ranges from estate homes in Kleinburg with large architectural skylights to production builds in Maple and Vellore with standard kitchen and bathroom skylights. We handle everything from a single fogged unit in a powder room to multi-skylight leak investigations on steep-pitch roofs. Emergency tarp-ups are available around the clock.",
    uniqueContent:
      "Kleinburg and the Nashville area have estate homes with oversized skylights and glass towers that need larger custom glass units and sometimes scaffolding or safety systems for roof access. Woodbridge homes from the late 1980s and 1990s along Islington and Highway 7 are hitting the age where skylight seals fail in clusters, so homeowners often ask us to do several units at once. Maple subdivisions north of Major Mackenzie have standard Velux and Fakro skylights where the glass units are a common size and turnaround is faster. Concord industrial buildings have flat-roof skylights and dome skylights on warehouse roofs.",
    neighborhoods: getNeighborhoods("vaughan"),
    citySpecificFaq: {
      q: "Can you repair large architectural skylights in Vaughan?",
      a: "Yes. We work on oversized and custom skylights, including glass towers and pyramid skylights. For large units, we measure on site and order custom glass to exact dimensions.",
    },
  },
  {
    slug: "thornhill",
    city: "Thornhill",
    region: "York Region",
    metaTitle: "Skylight Repair Thornhill | Leaks & Glass",
    metaDescription:
      "Skylight repair in Thornhill. Fogged glass, leaks, flashing and seal replacement. Serving all of Thornhill, Vaughan and Markham sides.",
    intro:
      "Thornhill straddles Vaughan and Markham, and both sides have plenty of skylights that need attention. Homes along Bathurst, Bayview and in the Thornhill Woods and Henderson areas were built in the late 1980s through the 2000s, putting their skylights right in the failure window. We repair leaks, replace fogged glass, fix flashing and replace hardware across all of Thornhill.",
    uniqueContent:
      "The Bathurst corridor from Clark to Centre Street has a high concentration of two-storey homes with skylights over staircases and foyers. These are tricky to reach from inside, so we work from the roof. Thornhill Woods and the Henderson neighbourhood have newer homes where Velux venting skylights are common. Bayview and John Street area has older homes where wood-framed skylights sometimes need frame repair along with the glass. The condos along Yonge near Steeles have common-area skylights where we work with property managers for scheduling and access.",
    neighborhoods: getNeighborhoods("thornhill"),
    citySpecificFaq: {
      q: "My skylight is over a staircase in Thornhill. Can you still repair it?",
      a: "Yes. Skylights over staircases are hard to reach from inside, so we do most of the work from the roof. We bring our own safety equipment and protect your interior during the job.",
    },
  },
  {
    slug: "richmond-hill",
    city: "Richmond Hill",
    region: "York Region",
    metaTitle: "Skylight Repair Richmond Hill | Leaks & Glass",
    metaDescription:
      "Skylight repair in Richmond Hill. Leaks, fogged glass, flashing, seal replacement and emergency service.",
    intro:
      "Richmond Hill has a solid mix of 1980s, 1990s and 2000s homes, many with skylights that are now reaching the end of their seal life. From Elgin Mills down to Highway 7, and from Bayview west to Bathurst, we repair leaking and fogged skylights across the city. Emergency tarp-up service is available 24/7 for active leaks.",
    uniqueContent:
      "The Bayview and 16th Avenue area has larger homes with multiple skylights, often in vaulted family rooms and master bathrooms. Oak Ridges has homes on wooded lots where falling branches and debris cause skylight damage more often than elsewhere. The older parts of Richmond Hill along Yonge Street south of Major Mackenzie have bungalows and side-splits with original 1970s and 1980s skylights where the frames are sometimes wood and need inspection along with the glass. Mill Pond and Lake Wilcox area homes have a mix of flat and venting skylights.",
    neighborhoods: getNeighborhoods("richmond-hill"),
    citySpecificFaq: {
      q: "Can you upgrade my skylight glass to low-E in Richmond Hill?",
      a: "Yes. When we replace the sealed unit, you can upgrade to low-E coated or argon-filled glass for better energy performance. It costs a bit more than standard glass, and we quote the upgrade alongside the standard option so you can compare.",
    },
  },
  {
    slug: "markham",
    city: "Markham",
    region: "York Region",
    metaTitle: "Skylight Repair Markham | Leaks & Glass",
    metaDescription:
      "Skylight repair in Markham. Leak repair, glass replacement, flashing and hardware. Serving Unionville, Cornell, Berczy and all of Markham.",
    intro:
      "Markham's subdivisions from the 1990s and 2000s are packed with skylights, from the Velux units in Berczy and Cornell to the larger custom skylights in Unionville and Cachet. We repair leaks, replace fogged or cracked glass, fix flashing and handle venting hardware across all of Markham.",
    uniqueContent:
      "Unionville and the older part of Markham around Main Street have heritage and character homes where the skylight frames are sometimes wood-clad and need checking for moisture damage. Berczy Village and Cornell have production homes from the 2000s with standard Velux or Fakro skylights, which means common glass sizes and faster turnaround. Cachet and Angus Glen have larger homes with architectural skylights and glass features. Markham's industrial areas along Highway 7 and Woodbine have commercial skylights in warehouse and office settings.",
    neighborhoods: getNeighborhoods("markham"),
    citySpecificFaq: {
      q: "How long does skylight glass replacement take in Markham?",
      a: "After we measure on site, the glass is typically ready in 5-15 business days depending on size and type. Standard sizes used in most Markham subdivisions tend to be on the faster end of that range.",
    },
  },
  {
    slug: "brampton",
    city: "Brampton",
    region: "Peel Region",
    metaTitle: "Skylight Repair Brampton | Leaks & Glass",
    metaDescription:
      "Skylight repair in Brampton. Leaks, fogged glass, flashing and seal repair. Emergency skylight service available 24/7.",
    intro:
      "Brampton's rapid growth over the past two decades means a lot of homes have skylights installed during the 2000s and 2010s that are now showing their first signs of seal failure. We also see plenty of 1990s homes in the Bramalea and Heart Lake areas where the skylights are well past their expected seal life. We repair leaks, replace glass, fix flashing and re-seal frames across all of Brampton.",
    uniqueContent:
      "Heart Lake and Bramalea have 1990s homes where skylights are 25-30 years old and the seals are failing. The fog and condensation between the panes is the most common call we get from these areas. Castlemore and Credit Valley have larger homes built in the 2000s with multiple skylights that are now starting to show early seal failure, especially on south-facing roofs where UV exposure is highest. Mount Pleasant and Vales of Castlemore have newer builds where venting skylight hardware is the main issue rather than the glass. Downtown Brampton has older homes where wood-framed skylights sometimes need frame repair.",
    neighborhoods: getNeighborhoods("brampton"),
    citySpecificFaq: {
      q: "Why are my Brampton skylights fogging up already? The house is only 15 years old.",
      a: "South-facing skylights take more UV and heat than any other window in the house, which breaks down seals faster. In Brampton's newer subdivisions, we see skylights fail at 12-18 years on south-facing roofs. We replace the glass unit and the new seal is rated to last longer.",
    },
  },
  {
    slug: "oakville",
    city: "Oakville",
    region: "Halton Region",
    metaTitle: "Skylight Repair Oakville | Leaks & Glass",
    metaDescription:
      "Skylight repair in Oakville. Leak repair, glass replacement, flashing and seals. Serving all of Oakville and surrounding Halton Region.",
    intro:
      "Oakville's housing stock includes a lot of custom and semi-custom homes with larger skylights, plus plenty of production homes with standard kitchen and bathroom units. Lake Ontario proximity adds wind-driven rain exposure that tests skylight seals harder than inland locations. We repair leaks, replace fogged glass, fix flashing and handle hardware across all of Oakville.",
    uniqueContent:
      "Old Oakville and Bronte have older homes with wood-framed skylights where we often need to inspect the frame for rot before quoting the glass work. Glen Abbey and River Oaks have homes from the 1980s and 1990s where the skylights are right in the peak failure window. Iroquois Ridge and Clearview have newer builds with Velux venting skylights. Joshua Creek and Palermo have estate-style homes with large architectural skylights and glass features. Oakville's proximity to the lake means more wind-driven rain hits skylights from the side, which finds any gap in flashing or sealant that an inland skylight might not show for another few years.",
    neighborhoods: getNeighborhoods("oakville"),
    citySpecificFaq: {
      q: "Does lake proximity affect skylight lifespan in Oakville?",
      a: "Yes. Wind-driven rain from Lake Ontario hits skylights from angles that test flashing and sealant more aggressively than inland. Homes south of the QEW tend to need flashing and seal work sooner than identical homes farther north.",
    },
  },
  {
    slug: "hamilton",
    city: "Hamilton",
    region: "Hamilton",
    metaTitle: "Skylight Repair Hamilton | Leaks & Glass",
    metaDescription:
      "Skylight repair in Hamilton. Leaks, fogged glass, flashing and seal replacement. Serving the Mountain, Dundas, Ancaster, Stoney Creek and Waterdown.",
    intro:
      "Hamilton has a wide range of housing ages and styles, from the century homes on the Mountain to the newer builds in Waterdown and upper Stoney Creek. Skylights in Hamilton deal with lake-effect snow, ice dams, and the escarpment's wind exposure. We repair leaking skylights, replace fogged glass, fix flashing and handle hardware across all of Hamilton and its surrounding communities.",
    uniqueContent:
      "The Mountain and central Hamilton have older homes from the 1960s through 1980s where skylights were sometimes added during renovations with less-than-perfect flashing details. These are the most common leak calls we get in Hamilton. Dundas and Ancaster have custom homes on wooded lots where trees drop debris onto skylights and shade causes moss growth around the flashing. Stoney Creek and Winona have homes from the 1990s and 2000s with production skylights that are now at seal-failure age. Waterdown has newer builds where the skylights are holding up but some homeowners want to upgrade the glass to low-E for energy savings. The escarpment face gets heavier wind and weather, which accelerates seal breakdown on exposed skylights.",
    neighborhoods: getNeighborhoods("hamilton"),
    citySpecificFaq: {
      q: "Do ice dams cause skylight damage in Hamilton?",
      a: "Yes. Hamilton gets heavy lake-effect snow, and ice dams are a common cause of skylight leaks. Water backs up under the flashing and forces its way in around the frame. We repair the damage and re-flash the skylight to prevent a repeat.",
    },
  },
  {
    slug: "north-york",
    city: "North York",
    region: "Toronto",
    metaTitle: "Skylight Repair North York | Leaks & Glass",
    metaDescription:
      "Skylight repair in North York. Leaks, fogged glass, flashing and seal work. Serving Willowdale, Don Mills, Bayview Village and all of North York.",
    intro:
      "North York has one of the highest concentrations of skylights in the GTA. The bungalows and side-splits in Willowdale, Don Mills and Bayview Village almost always have at least one skylight, and many were installed in the 1980s and 1990s. We repair leaks, replace fogged glass units, fix flashing and handle hardware across all of North York.",
    uniqueContent:
      "Willowdale and the Sheppard corridor have a large number of bungalows being renovated or rebuilt. In homes that are being kept, the skylights are often the first thing to need attention because the seals have been failing for years. Don Mills and the Parkway area have side-splits and back-splits with skylights over kitchens and stairwells. Bayview Village and York Mills have larger homes with multiple skylights and glass features. The condo towers along Yonge Street have penthouse and common-area skylights where we work with property managers. North York's flat-roofed commercial buildings along Steeles and Finch also call us for dome and flat skylights.",
    neighborhoods: getNeighborhoods("north-york"),
    citySpecificFaq: {
      q: "Can you repair skylights in a North York bungalow being renovated?",
      a: "Yes. If the skylight is staying, we can replace the glass and re-seal it as part of your renovation timeline. If the skylight is being moved or resized, we can install a new one to your contractor's rough opening.",
    },
  },
  {
    slug: "burlington",
    city: "Burlington",
    region: "Halton Region",
    metaTitle: "Skylight Repair Burlington | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Burlington. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Burlington sits between the Niagara Escarpment and Lake Ontario, and that geography creates specific challenges for skylights. Escarpment-facing homes in Tyandaga and the upper parts of the city deal with heavy wind exposure, while lakeside homes in Roseland and the downtown core get wind-driven rain and salt air. We repair leaking skylights, replace fogged or cracked glass units, fix flashing and re-seal frames across all of Burlington.",
    uniqueContent:
      "Roseland, Shoreacres and downtown Burlington have older homes from the 1950s through 1970s where skylights were often added during kitchen or bathroom renovations. These retrofit skylights sometimes have flashing details that were not done to current standards, and they are the source of most leak calls we get in Burlington. Tyandaga and Mountainside homes sit higher on the escarpment and take heavier wind, which accelerates seal and flashing breakdown. Alton Village, Millcroft and the newer subdivisions in north Burlington have production homes with standard Velux or Fakro skylights that are now 15-20 years old and entering the seal failure window. The Plains Road corridor has a mix of commercial and residential buildings with flat-roof skylights.",
    neighborhoods: getNeighborhoods("burlington"),
    citySpecificFaq: {
      q: "Does the escarpment affect skylight condition in Burlington?",
      a: "Yes. Homes on the escarpment face stronger wind loads, which stress skylight flashing and seals more than sheltered locations. We see earlier seal failure in these areas and recommend checking skylights every few years if your home is on an exposed slope.",
    },
  },
  {
    slug: "etobicoke",
    city: "Etobicoke",
    region: "Toronto",
    metaTitle: "Skylight Repair Etobicoke | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Etobicoke. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Etobicoke has some of Toronto's most established residential neighbourhoods, and many homes from the 1950s through the 1980s have skylights that were either original or added during renovations decades ago. From The Kingsway and Sunnylea to the lakeshore communities of Mimico and Long Branch, we repair leaking skylights, replace fogged glass units, fix flashing and re-seal frames across all of Etobicoke.",
    uniqueContent:
      "The Kingsway, Sunnylea, Alderwood and Thorncrest Village have mature housing stock where skylights are often 30-40 years old. In these homes, we frequently find that the flashing has corroded and the sealant around the frame has dried out, letting water in during heavy rain or snowmelt. Mimico, New Toronto and Long Branch sit along the lakeshore where wind-driven rain is more aggressive, so skylights on south-facing roofs deteriorate faster. Rexdale, Humber Heights and Islington Village have a mix of bungalows and two-storey homes where skylights over kitchens and hallways are common. The condo developments along the Humber and in Mimico have common-area skylights and glass features where we work with property management for scheduling and access.",
    neighborhoods: getNeighborhoods("etobicoke"),
    citySpecificFaq: {
      q: "My Etobicoke home has a wood-framed skylight. Can you still repair it?",
      a: "Yes. We inspect the wood frame for moisture damage before quoting the glass work. If the frame is sound, we replace the glass and re-seal it. If there is rot or soft wood, we repair or replace the damaged framing before installing the new sealed unit.",
    },
  },
  {
    slug: "scarborough",
    city: "Scarborough",
    region: "Toronto",
    metaTitle: "Skylight Repair Scarborough | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Scarborough. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Scarborough's housing stock spans post-war bungalows in Birch Cliff and Guildwood, 1970s and 1980s side-splits in Bendale and Woburn, and newer builds in Rouge and Highland Creek. Many of these homes have skylights that were installed during original construction or added in renovations, and after decades of Toronto weather, the seals and flashing need attention. We repair leaking skylights, replace fogged glass, fix flashing and re-seal frames across all of Scarborough.",
    uniqueContent:
      "Birch Cliff, Guildwood and Cliffside have older homes where skylights are sometimes retrofit installations with non-standard flashing that causes chronic leaks. These are common repair calls for us in Scarborough. Agincourt and Tam O'Shanter have a high concentration of homes from the 1970s and 1980s with original skylights that are well past their seal life. The Highland Creek and Rouge areas have newer homes where the skylights are younger but south-facing units still fail sooner than expected from UV exposure. Scarborough's condo and townhouse complexes along Kingston Road and in the Scarborough Town Centre area have common-area skylights where we coordinate with property managers. The Bluffs communities get extra wind exposure from the lake, which accelerates seal breakdown.",
    neighborhoods: getNeighborhoods("scarborough"),
    citySpecificFaq: {
      q: "Do you service skylights in Scarborough townhouse complexes?",
      a: "Yes. We work with property managers and condo boards to schedule skylight repairs in common areas and individual units. We carry our own safety equipment and coordinate access as needed.",
    },
  },
  {
    slug: "aurora",
    city: "Aurora",
    region: "York Region",
    metaTitle: "Skylight Repair Aurora | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Aurora. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Aurora grew steadily through the 1990s and 2000s, and many of those homes came with standard kitchen and bathroom skylights that are now reaching the age where seals fail and glass fogs. The older homes near Yonge Street and Wellington have skylights that are even further along. We repair leaking skylights, replace fogged or cracked glass units, fix flashing and re-seal frames across all of Aurora.",
    uniqueContent:
      "Bayview Wellington and the Hills of St Andrew have homes from the late 1990s and 2000s with Velux and Fakro skylights that are hitting the 20-year mark. These are standard sizes, so turnaround on replacement glass is typically on the faster end. Aurora Highlands and Aurora Village have older homes where the skylights may be original to the house and the frames need inspection alongside the glass. The heritage area near Yonge and Wellington has character homes where skylights were added during renovations, sometimes with flashing that does not meet current standards. St Andrew's on the Hill and Stonebridge have larger custom homes with architectural skylights and vaulted ceilings. Aurora's exposure to open-field wind from the north can stress skylight seals, especially on homes backing onto farmland.",
    neighborhoods: getNeighborhoods("aurora"),
    citySpecificFaq: {
      q: "My aurora home backs onto open land. Does that affect the skylight?",
      a: "Yes. Homes on the edge of Aurora with open exposure to the north take more wind load on the roof, which stresses skylight flashing and seals. We recommend periodic inspections if your home is in an exposed location.",
    },
  },
  {
    slug: "woodbridge",
    city: "Woodbridge",
    region: "Vaughan",
    metaTitle: "Skylight Repair Woodbridge | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Woodbridge. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Woodbridge is one of Vaughan's most established communities, with housing that ranges from custom estate homes along Islington Avenue to family subdivisions in Sonoma Heights and Vellore Village. Many of these homes have skylights that are 20-35 years old, and after decades of freeze-thaw cycles, the seals and flashing are showing their age. We repair leaking skylights, replace fogged glass units, fix flashing and re-seal frames across all of Woodbridge.",
    uniqueContent:
      "Homes along Islington Avenue and in the Woodbridge core from the late 1980s and 1990s are where we do the most skylight work. The sealed glass units in these homes are right in the peak failure window, and many homeowners call us after noticing fog between the panes or water stains on the ceiling. Sonoma Heights, Vellore Village and Islington Woods have slightly newer homes where the skylights are starting to show early signs of seal breakdown, particularly on south-facing roof slopes. Pine Grove and the Kipling corridor have a mix of older and newer homes with both fixed and venting skylights. For venting skylights where the operator hardware has failed, we repair or replace the mechanism so the skylight opens and closes properly. The Woodbridge village area has older commercial buildings with flat-roof dome skylights that we service as well.",
    neighborhoods: getNeighborhoods("woodbridge"),
    citySpecificFaq: {
      q: "Can you repair multiple skylights at once in Woodbridge?",
      a: "Yes. Many Woodbridge homes have several skylights of the same age, and homeowners often ask us to replace the glass in all of them at the same time. Doing them together saves on setup time and we pass that saving along in the quote.",
    },
  },
  {
    slug: "maple",
    city: "Maple",
    region: "Vaughan",
    metaTitle: "Skylight Repair Maple | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Maple. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Maple grew quickly through the late 1990s and 2000s, and the subdivisions north of Major Mackenzie are packed with homes that came with standard skylights from the builder. Those skylights are now 15-25 years old, and the seals are starting to fail. We repair leaking skylights, replace fogged glass, fix flashing and handle venting hardware across all of Maple.",
    uniqueContent:
      "Eagle Hills, Mackenzie Ridge and Maple Village have production homes with standard Velux and Fakro skylights. Because these units are common sizes, the replacement glass is usually ready faster than for custom units. Teston Village and the newer builds along Teston Road have skylights that are still relatively young, but south-facing units are already showing early condensation between the panes. Maple's homes north of Major Mackenzie tend to have steeper roof pitches, which makes roof access trickier. We bring our own safety systems and work from the roof on these jobs. The older parts of Maple near Keele Street and McNaughton Road have homes from the 1980s with skylights that are well past their expected seal life and often need both glass replacement and flashing work.",
    neighborhoods: getNeighborhoods("maple"),
    citySpecificFaq: {
      q: "Are Maple subdivision skylights all the same size?",
      a: "Many are. Builder-grade skylights in Maple subdivisions tend to use a few standard Velux and Fakro sizes. That means the replacement glass is a common dimension, which speeds up turnaround. We confirm the exact size during our on-site measurement.",
    },
  },
  {
    slug: "king-city",
    city: "King City",
    region: "York Region",
    metaTitle: "Skylight Repair King City | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in King City. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "King City and the Township of King are known for large-lot estates, horse properties, and rural acreages with custom-built homes. Many of these properties have oversized skylights, glass towers and architectural glass features that need specialized attention when seals fail or flashing deteriorates. We repair leaking skylights, replace fogged glass, fix flashing and re-seal frames across King City, Nobleton and the surrounding area.",
    uniqueContent:
      "Kingscross Estates, King Heights and the properties along Dufferin Street and Keele Street have custom homes with oversized skylights and pyramid glass features. These larger units require custom glass that is measured on site and made to exact dimensions. The glass is heavier and the installation may require additional safety systems for roof access. Nobleton homes tend to be slightly smaller but many still have skylights from the 1990s and 2000s that are in the seal failure window. King City's rural properties and hobby farms sometimes have barn conversions and workshop buildings with skylights that need commercial-grade glass. The rolling terrain and open exposure mean roofs take more wind, which tests flashing integrity. We carry the safety equipment needed for steep-pitch roofs and tall rooflines that are common on King City estates.",
    neighborhoods: getNeighborhoods("king-city"),
    citySpecificFaq: {
      q: "Do you handle oversized skylights on King City estate homes?",
      a: "Yes. We work on skylights of all sizes, including the oversized and custom units found on King City properties. We measure on site, order custom glass to exact specifications, and bring the safety equipment needed for large roofs.",
    },
  },
  {
    slug: "newmarket",
    city: "Newmarket",
    region: "York Region",
    metaTitle: "Skylight Repair Newmarket | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Newmarket. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Newmarket has a broad mix of housing, from heritage homes along Main Street and Bogart to the production subdivisions in Stonehaven, Summerhill Estates and Glenway. Skylights in Newmarket homes from the 1990s and 2000s are now hitting the age where seals break down and condensation appears between the panes. We repair leaking skylights, replace fogged glass, fix flashing and handle hardware across all of Newmarket.",
    uniqueContent:
      "Stonehaven and Summerhill Estates have a large number of homes with standard builder-grade skylights from the late 1990s and 2000s. These are common Velux and Fakro sizes, so replacement glass is typically available on a faster turnaround. Glenway and Bristol are older areas where the skylights may be 25-30 years old and the frames need inspection alongside the glass. Downtown Newmarket and the Main Street heritage area have character homes where skylights were added during renovations, sometimes with improvised flashing that leaks. Upper Canada Mall area has commercial buildings with flat-roof and dome skylights. Newmarket sits far enough north that winter weather is a bit harsher than communities closer to the lake, and ice damming on north-facing roof slopes is a common cause of skylight leaks we see here.",
    neighborhoods: getNeighborhoods("newmarket"),
    citySpecificFaq: {
      q: "Does Newmarket's colder winters cause more skylight problems?",
      a: "Newmarket gets slightly more snow and colder temperatures than communities closer to the lake. This means more ice damming on north-facing roof slopes, which is a common cause of skylight leaks. Proper flashing and seal maintenance helps prevent ice-related damage.",
    },
  },
  {
    slug: "milton",
    city: "Milton",
    region: "Halton Region",
    metaTitle: "Skylight Repair Milton | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Milton. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Milton has grown rapidly over the past two decades, and the subdivisions that went up during the 2000s and 2010s are now seeing their first round of skylight seal failures. The older parts of Milton near Main Street and the escarpment have homes with skylights that are even further along. We repair leaking skylights, replace fogged glass units, fix flashing and re-seal frames across all of Milton.",
    uniqueContent:
      "Timberlea, Scott, Harrison and Beaty are the newer subdivisions where production homes came with standard builder-grade skylights. These units are 10-20 years old and the seals are starting to fail, especially on south-facing roof slopes that take the most UV. Old Milton near Main Street and the heritage area has older homes where skylights were sometimes added during renovations with flashing details that do not meet current standards. Escarpment-area homes in Nassagaweya and the rural parts of Milton sit on higher ground with more wind exposure, which accelerates seal and flashing breakdown. Derry Green and the industrial corridor have commercial buildings with flat-roof and dome skylights. Milton's location at the base of the escarpment means it catches weather coming off the ridge, and homes on the west side of town tend to take more wind-driven rain than those sheltered farther east.",
    neighborhoods: getNeighborhoods("milton"),
    citySpecificFaq: {
      q: "My Milton home is only 12 years old. Why is the skylight already fogging?",
      a: "South-facing skylights absorb more UV and heat than any other glass in the house. In Milton's newer subdivisions, we regularly see skylights fail at 10-15 years on south-facing roofs. The seal breaks down, moisture enters between the panes, and the glass fogs. We replace the sealed unit with a new one that carries a 5-year warranty.",
    },
  },
  {
    slug: "ajax",
    city: "Ajax",
    region: "Durham Region",
    metaTitle: "Skylight Repair Ajax | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Ajax. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Ajax stretches from the Lake Ontario waterfront up through established neighbourhoods and newer subdivisions in the north end. Homes across Applecroft, Central Ajax, Duffin Heights and Pickering Beach all have skylights dealing with Durham Region weather, from lake-effect moisture to freeze-thaw cycles. We repair leaking skylights, replace fogged glass units, fix flashing and re-seal frames across all of Ajax.",
    uniqueContent:
      "Applecroft and Central Ajax have homes from the 1980s and 1990s where skylights are 25-35 years old and past their expected seal life. These are the most common calls we get in Ajax: fogged glass between the panes, water stains around the frame, or active dripping during rain. Duffin Heights and the north-end subdivisions have newer homes with builder-grade skylights that are starting to show early seal failure on south-facing roofs. The waterfront areas near Pickering Beach and along Lakeridge Road get more wind-driven rain from the lake, which finds any gap in skylight flashing. Ajax's commercial areas along Bayly Street and the Highway 2 corridor have flat-roof buildings with dome and curb-mounted skylights that we service for business owners and property managers. We carry safety systems for all roof types and pitches.",
    neighborhoods: getNeighborhoods("ajax"),
    citySpecificFaq: {
      q: "Does lake proximity affect skylights in south Ajax?",
      a: "Yes. Homes near the Lake Ontario waterfront in Ajax get more wind-driven rain and moisture exposure. Skylights on south-facing roofs in these areas tend to need flashing and seal attention sooner than identical units on homes farther from the lake.",
    },
  },
  {
    slug: "pickering",
    city: "Pickering",
    region: "Durham Region",
    metaTitle: "Skylight Repair Pickering | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Pickering. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Pickering homes from the 1970s through the 2010s carry skylights in various stages of life. The older units in Bay Ridges and Pickering Village are well past their expected seal life, while newer installations in Seaton and Duffin Heights are just beginning to show wear. LuminaSky repairs leaking skylights, replaces fogged glass, fixes flashing and re-seals frames across Pickering.",
    uniqueContent:
      "Bay Ridges and the Liverpool Road corridor have homes from the 1970s and 1980s with original skylights that have logged 40-plus years of service. The seals and flashing on these units are long overdue for attention. In Amberlea and the central Pickering neighbourhoods, the homes are from the 1990s with skylights that are now in their second decade of seal failure. The Seaton development is bringing newer homes with current-generation skylights, but some early installations are already showing condensation between the panes on south-facing roofs. Pickering's proximity to Lake Ontario means more wind-driven rain from the south, which tests flashing integrity. We inspect curb and step flashing during every skylight visit and quote any repairs needed to prevent future leaks. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("pickering"),
    citySpecificFaq: {
      q: "Can you repair skylights on older Pickering Village homes?",
      a: "Yes. We service skylights of all ages, including older units from the 1970s and 1980s. If the frame is still sound, we replace the glass and re-seal it. If the frame needs replacement, we will tell you during the assessment.",
    },
  },
  {
    slug: "whitby",
    city: "Whitby",
    region: "Durham Region",
    metaTitle: "Skylight Repair Whitby | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Whitby. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Whitby's steady residential growth means skylights of all ages are installed across town. From the older homes near downtown to the newer subdivisions along Taunton Road, LuminaSky repairs leaks, replaces fogged glass, fixes flashing and re-seals skylight frames throughout Whitby.",
    uniqueContent:
      "The established neighbourhoods around Brooklin and downtown Whitby have homes from the 1970s through the 1990s with skylights that have been in service for decades. The seals on these units are reaching or past the end of their useful life, and leaks during spring thaw are common. In the newer developments along Taunton Road and around the Whitby GO station, the homes are from the 2000s and 2010s with skylights that are beginning to show early condensation between the panes. South-facing skylights fail first because UV exposure breaks down sealant faster. We carry safety systems for all roof types and pitches across Whitby. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("whitby"),
    citySpecificFaq: {
      q: "My Whitby skylight leaks only during spring thaw. Is that a seal issue?",
      a: "Usually it is a flashing issue rather than a glass seal issue. Ice dams push water under the flashing during thaw cycles. We inspect and repair both the flashing and the glass seal during every visit.",
    },
  },
  {
    slug: "oshawa",
    city: "Oshawa",
    region: "Durham Region",
    metaTitle: "Skylight Repair Oshawa | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Oshawa. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Oshawa homes from the south-end waterfront neighbourhoods to the north-end subdivisions carry skylights in various condition. The older units near Simcoe Street are long overdue for service, while newer installations along Taunton and Conlin are starting to show wear. LuminaSky repairs leaks, replaces glass, and fixes flashing across Oshawa.",
    uniqueContent:
      "The south end of Oshawa near the waterfront and around Simcoe Street has homes dating back to the 1950s and 1960s, some with skylights added during renovations in the 1980s and 1990s. These units are well past their expected seal life. In the central and north-end neighbourhoods along Taunton Road and Conlin Road, the housing is from the 1990s and 2000s with builder-grade skylights now entering their first round of failures. The Windfields and Kedron areas have newer homes with current-generation skylights that should have years of life left. Oshawa gets heavier snowfall than communities closer to Lake Ontario, which increases ice dam risk on north-facing roof slopes. We inspect flashing and seal condition during every visit. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("oshawa"),
    citySpecificFaq: {
      q: "My Oshawa skylight has condensation inside the glass. Is that repairable?",
      a: "Condensation between the panes means the sealed unit has failed. We replace the glass unit with a new sealed panel. If the frame and flashing are in good shape, that is all that is needed.",
    },
  },
  {
    slug: "barrie",
    city: "Barrie",
    region: "Simcoe County",
    metaTitle: "Skylight Repair Barrie | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Barrie. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Barrie's waterfront homes and south-end subdivisions both carry skylights exposed to Lake Simcoe winds and heavy Simcoe County snowfall. LuminaSky repairs leaks, replaces fogged glass, fixes flashing and re-seals frames across Barrie.",
    uniqueContent:
      "The older residential areas along the Barrie waterfront and in the Allandale neighbourhood have homes from the 1960s through the 1980s with skylights that have logged decades of service. The seals and flashing on these units are well past their expected life. In the south end, the rapid growth along Mapleview Drive and in the Hewitt's Gate and Salem areas brought thousands of new homes, many with builder-grade skylights now 10 to 20 years old. Barrie gets more snow than communities farther south, and the lake-effect moisture from Lake Simcoe adds to the freeze-thaw stress on skylight seals and flashing. Ice dams are a common cause of skylight leaks here. We inspect and repair both the glass seal and the roof flashing during every Barrie visit. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("barrie"),
    citySpecificFaq: {
      q: "Does Barrie's heavier snowfall affect skylight lifespan?",
      a: "It can. Heavier snow loads and more freeze-thaw cycles put extra stress on skylight seals and flashing. South-facing skylights in Barrie tend to fail sooner than identical units in milder areas farther south.",
    },
  },
  {
    slug: "stouffville",
    city: "Stouffville",
    region: "York Region",
    metaTitle: "Skylight Repair Stouffville | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Stouffville. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Stouffville's blend of village homes and newer suburban developments means skylights of various ages are installed across the community. LuminaSky repairs leaks, replaces fogged glass, fixes flashing and re-seals skylight frames throughout Stouffville.",
    uniqueContent:
      "The original village core of Stouffville around Main Street has homes from the mid-1900s, some with skylights added during renovations decades ago. These older units often have outdated flashing details that let water in during heavy rain or snowmelt. In the newer subdivisions along Hoover Park Drive and near the Stouffville GO station, the homes are from the 2000s and 2010s with builder-grade skylights now entering their first service window. South-facing units on these newer homes are showing early signs of seal failure: condensation between the panes that clears by afternoon but returns every morning. We replace the sealed glass unit and inspect the flashing and frame as part of every repair. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("stouffville"),
    citySpecificFaq: {
      q: "My Stouffville skylight fogs up in the morning but clears later. Does it need repair?",
      a: "Morning fog between the panes that clears as the sun warms the glass is an early sign of seal failure. The seal has a small breach that lets moisture in overnight. Replacing the glass unit now prevents it from worsening.",
    },
  },
  {
    slug: "bradford",
    city: "Bradford",
    region: "Simcoe County",
    metaTitle: "Skylight Repair Bradford | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Bradford. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Bradford's mix of established homes and newer developments includes skylights at various stages of their lifespan. LuminaSky repairs leaks, replaces fogged glass, fixes flashing and re-seals skylight frames across Bradford and the surrounding area.",
    uniqueContent:
      "The older sections of Bradford near Holland Street have homes from the 1980s and 1990s with skylights that are well past the typical seal lifespan. Condensation between the panes, water stains on the ceiling below, and visible flashing deterioration are common in these homes. The newer developments along Professor Day Drive and Simcoe Road have homes from the 2000s and 2010s with builder-grade skylights now approaching their first service window. Bradford's proximity to the Holland Marsh creates pockets of higher humidity at lower elevations, which can accelerate seal deterioration on skylights. We inspect both the glass seal and the roof flashing on every visit to catch problems early. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("bradford"),
    citySpecificFaq: {
      q: "Does Bradford's humidity from the Holland Marsh affect skylights?",
      a: "Homes at lower elevations near the marsh can experience slightly higher ambient moisture, which adds stress to skylight seals over time. Regular inspection catches seal failures early before they cause interior water damage.",
    },
  },
  {
    slug: "caledon",
    city: "Caledon",
    region: "Peel Region",
    metaTitle: "Skylight Repair Caledon | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Caledon. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Caledon homes range from rural properties with large skylights to newer subdivision builds in Bolton and Southfields Village. LuminaSky repairs leaks, replaces fogged glass, fixes flashing and re-seals skylight frames across all of Caledon.",
    uniqueContent:
      "Bolton-area homes from the 2000s and 2010s often have builder-grade skylights that are entering their first service interval. The older sections of Bolton have units from the 1990s where seals are already failing. Rural Caledon properties along Caledon East and Mono Road include estate-style homes with larger or multiple skylights that see more exposure to wind and weather. Palgrave and Inglewood sit at a higher elevation along the Niagara Escarpment, where heavier snow loads and wind-driven rain put extra stress on skylight flashing. Ice dams are a concern on north-facing roof slopes in these areas. We inspect the flashing, frame, and glass seal on every visit and recommend preventive repairs where we see early deterioration. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("caledon"),
    citySpecificFaq: {
      q: "Are skylights on rural Caledon properties more exposed to weather?",
      a: "They can be. Rural homes on higher ground or with more wind exposure tend to see faster flashing wear. We inspect the full skylight assembly, not just the glass, on every visit to catch flashing problems before they become leaks.",
    },
  },
  {
    slug: "clarington",
    city: "Clarington / Bowmanville",
    region: "Durham Region",
    metaTitle: "Skylight Repair Clarington | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Clarington and Bowmanville. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Clarington, including Bowmanville, Courtice, and Newcastle, has a growing housing stock with skylights at various stages of wear. LuminaSky repairs leaks, replaces fogged glass, fixes flashing and re-seals skylight frames across all Clarington communities.",
    uniqueContent:
      "Bowmanville's established neighbourhoods along Liberty Street and near the downtown core have homes from the 1980s and 1990s with skylights that have been exposed to decades of weather. The seals on these units are past their expected life and many show condensation between the panes. Courtice homes near Courtice Road have a mix of 1990s and 2000s builds where skylights are entering the failure window. The newer developments along Green Road and Longworth Avenue in Bowmanville have builder-grade units that may need their first service soon. Newcastle has a smaller housing base with skylights ranging from 1970s originals to recent installations. We check the flashing, curb, and glass seal on every skylight we inspect. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("clarington"),
    citySpecificFaq: {
      q: "Do you service skylights in all Clarington communities?",
      a: "Yes. We cover Bowmanville, Courtice, Newcastle, and all of Clarington. Most skylight repairs are completed in a single visit once the replacement glass is ready.",
    },
  },
  {
    slug: "east-gwillimbury",
    city: "East Gwillimbury",
    region: "York Region",
    metaTitle: "Skylight Repair East Gwillimbury | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in East Gwillimbury. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "East Gwillimbury, including Holland Landing and Sharon, is growing rapidly with new residential development alongside established homes. LuminaSky repairs leaks, replaces fogged glass, fixes flashing and re-seals skylight frames across the community.",
    uniqueContent:
      "Holland Landing and Sharon have homes from the 1990s and early 2000s with skylights now 20 to 25 years old. The seals on these units are reaching end of life, and many homeowners notice condensation between the panes on cool mornings. Queensville and Mount Albert have a mix of older homes with skylights added during renovations and newer builds with factory-installed units. The ongoing construction in the Green Lane and Leslie Street areas means even newer homes may have skylights that need adjustment as the roof structure settles. We inspect the full skylight assembly on every visit, checking the glass seal, flashing, and curb condition. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("east-gwillimbury"),
    citySpecificFaq: {
      q: "My East Gwillimbury skylight leaks only during heavy rain. Is that a flashing issue?",
      a: "Usually, yes. Leaks that appear only during heavy rain or wind-driven rain are typically caused by deteriorated flashing rather than a failed glass seal. We inspect the flashing on every visit and repair or replace it as needed.",
    },
  },
  {
    slug: "georgina",
    city: "Georgina / Keswick",
    region: "York Region",
    metaTitle: "Skylight Repair Georgina | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Georgina and Keswick. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Georgina, including Keswick and Sutton, has homes with skylights that face Lake Simcoe's moisture and York Region's cold winters. Those conditions accelerate seal and flashing wear. LuminaSky repairs leaks, replaces fogged glass, fixes flashing and re-seals skylight frames across Georgina.",
    uniqueContent:
      "Keswick has the largest concentration of skylights in Georgina, with homes from every decade since the 1970s. Older homes along The Queensway and near the waterfront have skylights with outdated flashing details and seals that have been exposed to lake moisture for decades. The newer sections along Woodbine Avenue and Ravenshoe Road have homes from the 2000s with builder-grade skylights approaching their first service interval. Sutton and Jackson's Point have cottage-country-style homes where skylights may have been added during renovations with varying quality of installation. Lake Simcoe's proximity means more moisture in the air year-round, which adds stress to seals. We inspect every skylight thoroughly and recommend repairs based on what we find. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("georgina"),
    citySpecificFaq: {
      q: "Does Lake Simcoe moisture affect skylights in Georgina?",
      a: "It can. Homes closer to the lake deal with more ambient moisture, which adds stress to skylight seals over time. Waterfront properties in Keswick and Sutton tend to need skylight service earlier than inland homes.",
    },
  },
  {
    slug: "halton-hills",
    city: "Halton Hills / Georgetown",
    region: "Halton Region",
    metaTitle: "Skylight Repair Halton Hills | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Halton Hills and Georgetown. Leak repair, glass replacement, flashing and seals. 24/7 emergency. 5-year warranty.",
    intro:
      "Halton Hills, including Georgetown and Acton, has a solid base of 1990s and 2000s homes with skylights now entering the service window. LuminaSky repairs leaks, replaces fogged glass, fixes flashing and re-seals skylight frames across both communities.",
    uniqueContent:
      "Georgetown's Delrex Boulevard and Silver Creek neighbourhoods have homes from the mid-1990s to early 2000s with skylights that are 20 to 25 years old. Many of these units show condensation between the panes and minor flashing wear. The newer sections along Mountainview Road have homes from the 2010s where skylights are still relatively young but may need adjustment as the roof settles. Acton homes tend to be slightly older, with some skylights from the 1980s where both the seal and the flashing are past their expected life. Georgetown sits along the Niagara Escarpment, where wind exposure on higher ground can accelerate flashing deterioration. We check the glass seal, flashing, and curb on every visit. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("halton-hills"),
    citySpecificFaq: {
      q: "Do you service both Georgetown and Acton skylights?",
      a: "Yes. We cover all of Halton Hills, including Georgetown, Acton, and the rural areas between them. Most skylight repairs are completed in a single visit once the replacement glass is ready.",
    },
  },
  {
    slug: "innisfil",
    city: "Innisfil",
    region: "Simcoe County",
    metaTitle: "Skylight Repair Innisfil | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Innisfil. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Innisfil has grown quickly in recent years, with new homes in Alcona and the Friday Harbour area joining the existing housing stock around Stroud and Lefroy. LuminaSky repairs leaks, replaces fogged glass, fixes flashing and re-seals skylight frames across all of Innisfil.",
    uniqueContent:
      "Alcona has the largest concentration of skylights in Innisfil, with homes from the 2000s and 2010s using builder-grade units. The older Alcona homes are now 15 to 20 years old, putting their skylights squarely in the seal failure window. Stroud and Lefroy have a mix of 1980s and 1990s homes where skylights are well past their expected seal life. Lakefront properties along Lake Simcoe deal with extra moisture exposure and wind that accelerates flashing wear on skylights. Innisfil's Simcoe County location means heavier snow loads than communities farther south, increasing the risk of ice dams around skylight curbs. We inspect the full assembly on every visit. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("innisfil"),
    citySpecificFaq: {
      q: "Do lakefront skylights in Innisfil need more frequent service?",
      a: "Homes closer to Lake Simcoe may see faster seal and flashing wear from moisture and wind exposure. We recommend checking lakefront skylights every few years to catch early seal failure before it causes interior water damage.",
    },
  },
  {
    slug: "orangeville",
    city: "Orangeville",
    region: "Dufferin County",
    metaTitle: "Skylight Repair Orangeville | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Orangeville. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Orangeville homes sit at a higher elevation on the Niagara Escarpment, where colder winters and heavier snow loads put extra stress on skylight seals and flashing. LuminaSky repairs leaks, replaces fogged glass, fixes flashing and re-seals skylight frames across Orangeville.",
    uniqueContent:
      "Montgomery Village and Island Lake have homes from the 1990s with skylights that are now 25 to 30 years old. Most of these units have seals that are past their expected life, and condensation between the panes is common. The newer sections near Hansen Boulevard and Rolling Hills have homes from the 2000s and 2010s with builder-grade skylights entering their first service window. Downtown Orangeville along Broadway has older homes where skylights were added during renovations with varying quality of installation. Orangeville's higher elevation means more snow, more freeze-thaw cycles, and more ice dam risk around skylight curbs. North-facing roof slopes are especially prone to ice buildup that forces water under the flashing. We inspect the flashing, curb, and glass seal on every visit. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("orangeville"),
    citySpecificFaq: {
      q: "Are ice dams a concern for Orangeville skylights?",
      a: "Yes. Orangeville's heavier snowfall and colder temperatures increase the risk of ice dams around skylight curbs, especially on north-facing roof slopes. Properly maintained flashing and a sealed curb help prevent ice dam leaks.",
    },
  },
  {
    slug: "uxbridge",
    city: "Uxbridge",
    region: "Durham Region",
    metaTitle: "Skylight Repair Uxbridge | Leaks, Glass & Seals",
    metaDescription:
      "Skylight repair in Uxbridge. Leak repair, glass replacement, flashing and seal work. 24/7 emergency response. 5-year warranty on sealed glass.",
    intro:
      "Uxbridge has a mix of older homes in the town centre and newer builds on the outskirts, many with skylights that add natural light to kitchens, bathrooms, and stairwells. LuminaSky repairs leaks, replaces fogged glass, fixes flashing and re-seals skylight frames across Uxbridge.",
    uniqueContent:
      "Downtown Uxbridge homes near Brock Street include some of the oldest skylights in the area, installed during renovations in the 1970s and 1980s. These units have seals and flashing that are decades past their expected life. The newer sections along Reach Street and the east side of town have homes from the 2000s with builder-grade skylights now approaching their first service interval. Rural properties around Uxbridge may have skylights on steeper roof pitches or in harder-to-reach locations. Uxbridge sits on higher ground in Durham Region, which means slightly more snow and wind exposure than communities closer to the lake. We bring all necessary equipment to access skylights safely and inspect the full assembly. Glass is measured on-site, custom-made, then installed.",
    neighborhoods: getNeighborhoods("uxbridge"),
    citySpecificFaq: {
      q: "Can you repair skylights on steep roofs in Uxbridge?",
      a: "Yes. We bring the equipment needed to safely access skylights on any roof pitch. Steep roofs are common in rural Uxbridge, and we handle the access logistics as part of the repair visit.",
    },
  },
];

export function getSkylightCityPageData(slug: string): SkylightCityPageData | undefined {
  return SKYLIGHT_CITY_PAGES.find((c) => c.slug === slug);
}

