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
    metaTitle: "Skylight Repair Toronto | Leaks, Glass & Seals | LuminaSky",
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
    metaTitle: "Skylight Repair Mississauga | LuminaSky Glass Services",
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
    metaTitle: "Skylight Repair Vaughan | Leaks & Glass | LuminaSky",
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
    metaTitle: "Skylight Repair Thornhill | LuminaSky Glass Services",
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
    metaTitle: "Skylight Repair Richmond Hill | LuminaSky Glass Services",
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
    metaTitle: "Skylight Repair Markham | Leaks & Glass | LuminaSky",
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
    metaTitle: "Skylight Repair Brampton | LuminaSky Glass Services",
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
    metaTitle: "Skylight Repair Oakville | Leaks & Glass | LuminaSky",
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
    metaTitle: "Skylight Repair Hamilton | LuminaSky Glass Services",
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
    metaTitle: "Skylight Repair North York | LuminaSky Glass Services",
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
];

export function getSkylightCityPageData(slug: string): SkylightCityPageData | undefined {
  return SKYLIGHT_CITY_PAGES.find((c) => c.slug === slug);
}
