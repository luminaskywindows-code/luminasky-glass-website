import { CITY_PAGES } from "./city-pages-data";

function getNeighborhoods(slug: string): string[] {
  const city = CITY_PAGES.find((c) => c.slug === slug);
  return city ? city.neighborhoods : [];
}

export interface PatioDoorCityPageData {
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

export const PATIO_DOOR_CITY_PAGES: PatioDoorCityPageData[] = [
  {
    slug: "toronto",
    city: "Toronto",
    region: "Toronto",
    metaTitle: "Patio Door Repair Toronto | Rollers, Tracks & Glass | LuminaSky",
    metaDescription:
      "Sliding patio door repair in Toronto. LuminaSky replaces rollers, fixes tracks, adjusts panels and replaces glass. Written quote on the spot.",
    intro:
      "Toronto homes run the full range of sliding patio doors. Downtown condos have six- and eight-foot panels on narrow balcony tracks. Midtown semis from the 1960s and 70s still carry the original steel-wheel rollers that seized up years ago. Suburban builds in Scarborough and North York use wider three-panel configurations. Whatever the setup, the fix is almost always the same: new rollers, a clean or capped track, and a proper adjustment so the door slides, seals and locks the way it should.",
    uniqueContent:
      "Older Toronto neighbourhoods like The Beaches, Leslieville and the Danforth have a lot of post-war bungalows and side-splits with six-foot patio doors on steel-wheel rollers. Those rollers corrode once the bearings lose their grease, and the door starts grinding or jumping the track. In midtown, Leaside and Lawrence Park homes often have larger eight-foot openings with heavier panels that put extra load on the rollers. Condo buildings along the waterfront and in CityPlace tend to use narrow-profile tracks where even small debris causes the door to stick. We carry rollers for most major brands and adjust every door to compress the weatherstripping evenly across the bottom rail.",
    neighborhoods: getNeighborhoods("toronto"),
    citySpecificFaq: {
      q: "Do you repair patio doors in Toronto condos?",
      a: "Yes. We work in condo buildings across Toronto. The building may need to approve access, but we handle that with your concierge or property manager. Most condo patio door repairs are done in one visit.",
    },
  },
  {
    slug: "mississauga",
    city: "Mississauga",
    region: "Peel Region",
    metaTitle: "Patio Door Repair Mississauga | Rollers & Tracks | LuminaSky",
    metaDescription:
      "Patio door repair in Mississauga. Roller replacement, track repair, panel adjustment and glass replacement for sliding doors.",
    intro:
      "Mississauga has two decades of heavy residential building, and much of it included sliding patio doors as the default exit to a backyard or balcony. Homes in Erin Mills, Meadowvale and Churchill Meadows from the 1990s and 2000s are now at the age where rollers wear down and tracks collect enough grit to make the door drag. We replace those rollers, clean or cap the track, and get the panel rolling smoothly again.",
    uniqueContent:
      "The 1990s and early 2000s builds in Erin Mills, Meadowvale and Lisgar mostly used six-foot vinyl-frame patio doors with plastic-bodied rollers. Those rollers crack and flatten after 15 to 20 years, which is why so many doors in these neighbourhoods now drag or wobble. Port Credit and Lorne Park have older homes with heavier wood-frame or aluminum-clad sliding doors where the steel rollers corrode from moisture off the lake. Square One condos use narrow-track balcony doors that clog easily with construction dust and road salt. We stock rollers for the common brands in these areas and adjust the panel height so the lock lines up with the keeper again.",
    neighborhoods: getNeighborhoods("mississauga"),
    citySpecificFaq: {
      q: "My Mississauga patio door won't lock. Is it the lock or the rollers?",
      a: "Usually it's the rollers. When they wear down the panel drops, and the latch no longer reaches the keeper on the frame. New rollers and an adjustment bring the panel back to the right height, and the lock works again. If the lock itself is worn, we replace that too.",
    },
  },
  {
    slug: "vaughan",
    city: "Vaughan",
    region: "York Region",
    metaTitle: "Patio Door Repair Vaughan | Rollers, Tracks & Glass | LuminaSky",
    metaDescription:
      "Sliding patio door repair in Vaughan. Roller replacement, track cleaning, panel adjustment and patio door glass made to size.",
    intro:
      "Vaughan grew fast through the 2000s and 2010s, and the patio doors installed during those builds are now old enough to need attention. Rollers that rolled quietly for 15 years start grinding once the bearings wear flat. Tracks in Kleinburg, Woodbridge and Maple collect enough grit from nearby construction to slow the door down. We replace the rollers, clean or cap the track, and set the panel so it glides, seals and locks properly.",
    uniqueContent:
      "Woodbridge and Maple homes from the mid-2000s typically have six- or eight-foot vinyl patio doors with tandem roller assemblies. Those tandem rollers carry twice the weight but also wear out faster under heavy daily use, which is common in larger families. Kleinburg estate homes often have oversized triple-panel configurations or French-style sliding doors where the rollers take more load than a standard setup. Concord condos and townhomes use builder-grade single rollers that flatten within ten years. We carry tandem and single rollers for the brands common in Vaughan, including replacements for discontinued models where the original part is no longer available.",
    neighborhoods: getNeighborhoods("vaughan"),
    citySpecificFaq: {
      q: "Can you fix a triple-panel sliding door in Vaughan?",
      a: "Yes. Triple-panel doors use the same roller and track mechanism as standard two-panel doors, just with an extra moving panel. We lift each panel, replace the rollers, service the track, and adjust all panels so they slide and interlock correctly.",
    },
  },
  {
    slug: "thornhill",
    city: "Thornhill",
    region: "York Region",
    metaTitle: "Patio Door Repair Thornhill | Rollers & Tracks | LuminaSky",
    metaDescription:
      "Patio door repair in Thornhill. We replace rollers, cap tracks, adjust panels and replace patio door glass. Written quote on-site.",
    intro:
      "Thornhill straddles Vaughan and Markham, and the housing stock reflects both sides: 1980s and 1990s builds on the west with aluminum-track patio doors, and newer 2000s developments on the east with vinyl frames. Both end up needing roller replacements around the 15- to 20-year mark. We handle both types and carry the parts to do most repairs on the first visit.",
    uniqueContent:
      "West Thornhill homes along Bathurst and east of Dufferin were mostly built in the late 1980s and early 1990s with aluminum-frame patio doors. Those doors use steel-axle rollers that corrode over time, and the aluminum tracks dent if something heavy drops on them. East Thornhill, closer to Highway 7 and Bayview, has newer vinyl-frame doors where the plastic roller bodies crack after 15 years of thermal cycling. We also see a lot of six-foot doors that were original to the house and never serviced, where the track is packed with 25 years of pet hair, drywall dust and grit. A deep track cleaning, new rollers and an adjustment usually brings these doors back to smooth operation.",
    neighborhoods: getNeighborhoods("thornhill"),
    citySpecificFaq: {
      q: "My Thornhill patio door track is dented. Can you fix it without replacing the whole door?",
      a: "In most cases, yes. We cap the damaged track with a stainless-steel track cover that sits over the dent and gives the rollers a smooth surface to run on. It costs a fraction of replacing the door frame.",
    },
  },
  {
    slug: "richmond-hill",
    city: "Richmond Hill",
    region: "York Region",
    metaTitle: "Patio Door Repair Richmond Hill | LuminaSky Glass Services",
    metaDescription:
      "Sliding patio door repair in Richmond Hill. Roller replacement, track repair, lock adjustment and glass for patio doors.",
    intro:
      "Richmond Hill has a wide mix of housing ages. Oak Ridges and Jefferson Forest have homes from the late 1990s and 2000s with vinyl-frame patio doors. The older neighbourhoods closer to Yonge Street have homes from the 1970s and 1980s with heavier aluminum-frame doors. Both types develop roller and track problems over time, and we repair both.",
    uniqueContent:
      "Oak Ridges and Jefferson Forest homes use builder-standard six-foot vinyl patio doors with spring-loaded rollers. After 15 years those springs weaken and the panel sits lower, dragging on the track and making the lock hard to engage. Older Richmond Hill homes near Mill Pond and along Yonge Street have eight-foot aluminum doors with steel rollers that corrode in the track channel where moisture sits. We also see a fair number of doors in the Bayview and 16th Avenue area where the original weatherstripping has hardened and no longer seals when the door is closed. New rollers bring the panel back to the correct height, which recompresses the weatherstripping and restores the seal without replacing the weatherstrip itself.",
    neighborhoods: getNeighborhoods("richmond-hill"),
    citySpecificFaq: {
      q: "Can you fix the weatherstripping on my Richmond Hill patio door?",
      a: "Often you don't need to. When the panel drops on worn rollers, the weatherstripping stops compressing properly and lets drafts in. New rollers raise the panel back to its correct height, which re-engages the weatherstrip. If the weatherstrip itself is cracked or missing, we replace it.",
    },
  },
  {
    slug: "markham",
    city: "Markham",
    region: "York Region",
    metaTitle: "Patio Door Repair Markham | Rollers, Tracks & Glass | LuminaSky",
    metaDescription:
      "Patio door repair in Markham. Roller and track repair, panel adjustment, and sealed glass replacement for sliding patio doors.",
    intro:
      "Markham's rapid growth from the 1990s onward means thousands of homes hit the 20-year mark at around the same time, and patio doors are one of the first things to show their age. Rollers flatten, tracks fill with grit, and panels start dragging. We replace the worn parts and get the door back to smooth, quiet operation.",
    uniqueContent:
      "Cornell, Berczy Village and Unionville South are full of 2000s-era homes with six-foot vinyl patio doors where the rollers are now 20 years old. The plastic roller bodies in these doors develop flat spots from the weight of the panel, and the door starts vibrating or humming as it slides. Older Markham homes in Unionville and around Main Street Markham have heavier wood-clad or aluminum patio doors with larger roller assemblies. Cathedraltown and Angus Glen have wider eight-foot openings with double-roller setups that wear unevenly, causing the panel to tilt and bind. We match the roller type to the door brand and adjust the panel so both sides sit level in the track.",
    neighborhoods: getNeighborhoods("markham"),
    citySpecificFaq: {
      q: "My Markham patio door hums when I slide it. What causes that?",
      a: "A humming or vibrating sound usually means the rollers have flat spots. The panel bounces over those flat spots as it moves, and the vibration travels through the frame. New rollers with round bearings fix the noise.",
    },
  },
  {
    slug: "brampton",
    city: "Brampton",
    region: "Peel Region",
    metaTitle: "Patio Door Repair Brampton | Rollers & Tracks | LuminaSky",
    metaDescription:
      "Sliding patio door repair in Brampton. Roller replacement, track cleaning, lock adjustment and patio door glass. On-site quotes.",
    intro:
      "Brampton added tens of thousands of homes through the 2000s and 2010s, nearly all of them with sliding patio doors to the backyard. Those doors are now entering the age range where rollers wear out and tracks need attention. We replace the rollers, service the track, and adjust the panel so the door works properly again.",
    uniqueContent:
      "Springdale, Castlemore and Vales of Castlemore have large detached homes with eight-foot patio door openings. The heavier panels in these homes put more stress on the rollers, and we see them wearing out faster than the six-foot versions in older Brampton neighbourhoods like Heart Lake and Bramalea. Sandalwood and Countryside homes from the early 2000s use tandem roller assemblies that are specific to the builder's door supplier, and the replacement parts are not always available at hardware stores. We stock and source rollers for the common Brampton door brands, including several that the original manufacturers no longer make.",
    neighborhoods: getNeighborhoods("brampton"),
    citySpecificFaq: {
      q: "Do you have rollers for newer Brampton homes?",
      a: "Yes. We carry rollers for the door brands common in Brampton's 2000s and 2010s builds, including tandem rollers for larger panels. If your door uses an uncommon part, we source it and come back to install once it arrives.",
    },
  },
  {
    slug: "oakville",
    city: "Oakville",
    region: "Halton Region",
    metaTitle: "Patio Door Repair Oakville | Rollers, Tracks & Glass | LuminaSky",
    metaDescription:
      "Patio door repair in Oakville. We replace rollers, fix tracks, adjust panels and replace glass in sliding patio doors.",
    intro:
      "Oakville homes tend to have well-maintained patio doors, but even a well-cared-for door reaches a point where the rollers wear out. Homes in old Oakville near the lake have had their doors exposed to moisture and salt air for decades. Newer builds in Joshua Creek, River Oaks and East Oakville are now hitting the 15- to 20-year mark. We service both.",
    uniqueContent:
      "Old Oakville and Bronte have homes with heavier wood-frame and aluminum-clad patio doors, some dating back to the 1970s and 1980s. The steel rollers in these doors corrode from lake moisture and the doors get progressively harder to open over the years. River Oaks, Joshua Creek and Iroquois Ridge have newer homes with vinyl-frame doors where the rollers wear from normal use rather than corrosion. Glen Abbey and West Oak Trails have homes with wider door openings and three-panel configurations that use tandem rollers. We carry rollers for all these setups and adjust the panel height and alignment on every repair so the weatherstripping seals evenly.",
    neighborhoods: getNeighborhoods("oakville"),
    citySpecificFaq: {
      q: "Does lake moisture affect patio door rollers in Oakville?",
      a: "It can. Homes near the lake in old Oakville and Bronte are more exposed to moisture and salt air, which corrodes steel rollers faster. We use stainless steel or polymer rollers on replacements in these areas, which resist corrosion better.",
    },
  },
  {
    slug: "burlington",
    city: "Burlington",
    region: "Halton Region",
    metaTitle: "Patio Door Repair Burlington | Rollers & Tracks | LuminaSky",
    metaDescription:
      "Sliding patio door repair in Burlington. Roller replacement, track capping, panel adjustment and glass for patio doors.",
    intro:
      "Burlington's housing stock spans from 1960s bungalows near the lake to new builds in Alton Village. Patio door problems show up at every age, but the fix is usually the same: worn rollers need replacing, the track needs cleaning or capping, and the panel needs adjusting. We handle it all on-site.",
    uniqueContent:
      "Downtown Burlington and Roseland have older homes with aluminum-frame patio doors on steel rollers. Those rollers corrode from moisture and the doors get heavier to slide every year. Tyandaga and Palmer have 1980s and 1990s homes with doors that are now 30 to 40 years old but still in solid frames. Alton Village and Millcroft have newer homes where the rollers are just reaching end of life. We also see a lot of walkout basement patio doors in Burlington, where the lower elevation means the track collects more water, debris and leaves than a main-floor door. Keeping that track clear is part of every repair we do.",
    neighborhoods: getNeighborhoods("burlington"),
    citySpecificFaq: {
      q: "Can you fix a walkout basement patio door in Burlington?",
      a: "Yes. Walkout basement doors collect more debris and moisture in the track than main-floor doors. We clean the track thoroughly, replace the rollers, and cap the track if needed. We also adjust the panel so it seals properly against the higher moisture exposure.",
    },
  },
  {
    slug: "hamilton",
    city: "Hamilton",
    region: "Hamilton",
    metaTitle: "Patio Door Repair Hamilton | Rollers, Tracks & Glass | LuminaSky",
    metaDescription:
      "Patio door repair in Hamilton. Roller replacement, track repair, lock fixes and patio door glass. On-site service.",
    intro:
      "Hamilton has some of the most varied housing stock in the GTA, from century homes on the Mountain to new builds in Binbrook and Waterdown. Sliding patio doors appear in most of these homes, and they all use the same basic mechanism: rollers on a track. When those rollers wear out, we replace them and get the door moving properly.",
    uniqueContent:
      "Homes on Hamilton Mountain from the 1970s and 1980s have aluminum-frame patio doors with steel rollers that are now 40 to 50 years old. Many of these doors have never had their rollers replaced and are grinding metal on metal. Ancaster and Dundas have 1990s and 2000s homes with vinyl-frame doors where the plastic rollers are cracking. Stoney Creek and Binbrook have newer builds where the doors are starting to show their first signs of roller wear. Westdale and Locke Street homes often have renovated interiors with new patio doors installed 10 to 15 years ago that are now due for service. We carry a wide range of roller types and adjust every door so the panel sits level and the lock engages cleanly.",
    neighborhoods: getNeighborhoods("hamilton"),
    citySpecificFaq: {
      q: "Can you fix a very old patio door on Hamilton Mountain?",
      a: "Usually, yes. Even doors from the 1970s and 1980s can be brought back to smooth operation with new rollers and a track cap. The frames and glass on these older doors are often still sound. If the frame is too far gone, we'll tell you honestly.",
    },
  },
  {
    slug: "newmarket",
    city: "Newmarket",
    region: "York Region",
    metaTitle: "Patio Door Repair Newmarket | Rollers & Tracks | LuminaSky",
    metaDescription:
      "Sliding patio door repair in Newmarket. Roller replacement, track repair, panel adjustment and patio door glass replacement.",
    intro:
      "Newmarket grew steadily through the 1990s and 2000s, and those homes are now at the age where patio door rollers start to fail. The door gets harder to slide, the lock stops catching, or the panel starts rattling in the track. We replace the worn rollers, service the track, and adjust the door so it works quietly again.",
    uniqueContent:
      "Bristol-London, Stonehaven and Woodland Hill have homes from the mid-1990s to early 2000s with standard six-foot vinyl patio doors. The rollers in these doors last about 15 to 20 years before the bearings go flat, and many of them are hitting that window now. Upper Canada Mall area and the older core along Main Street have homes with aluminum-frame doors from the 1970s and 1980s. Glenway Estates and the newer sections along Leslie Street have larger homes with eight-foot openings. We carry rollers for all the common door brands used in Newmarket builds and adjust the panel so the handle lock lines up with the keeper.",
    neighborhoods: getNeighborhoods("newmarket"),
    citySpecificFaq: {
      q: "How long do patio door rollers last in Newmarket homes?",
      a: "Rollers in vinyl-frame doors typically last 15 to 20 years with normal use. Most Newmarket homes built in the late 1990s and early 2000s are now reaching that point. A roller replacement is a fraction of the cost of a new door and gets another 15 to 20 years out of it.",
    },
  },
  {
    slug: "scarborough",
    city: "Scarborough",
    region: "Toronto",
    metaTitle: "Patio Door Repair Scarborough | Rollers & Glass | LuminaSky",
    metaDescription:
      "Patio door repair in Scarborough. Roller replacement, track fixes, lock adjustment and patio door glass. Written quotes.",
    intro:
      "Scarborough has a wide range of homes from different eras, and patio doors are a common feature in most of them. Agincourt, Malvern and Rouge have 1980s and 1990s homes where the patio door rollers have been wearing down for years. Highland Creek and West Hill have a mix of older and newer homes. We repair patio doors across all Scarborough neighbourhoods.",
    uniqueContent:
      "Agincourt, Tam O'Shanter and L'Amoreaux have a high concentration of 1980s back-splits and side-splits with six-foot aluminum-track patio doors. The steel rollers in these doors seize after decades of use, and the tracks dent from the grinding. Malvern and Morningside have 1990s homes with vinyl-frame doors where the plastic rollers crack. West Rouge and Highland Creek have newer builds mixed with older properties. Scarborough condos along Kingston Road and in the Golden Mile area have balcony patio doors that clog from city grit. We clean or cap damaged tracks and replace rollers with parts rated for the panel weight, then adjust the door height so it seals and locks correctly.",
    neighborhoods: getNeighborhoods("scarborough"),
    citySpecificFaq: {
      q: "Can you repair patio doors in older Scarborough back-splits?",
      a: "Yes. Back-splits and side-splits in Scarborough typically have six-foot patio doors with aluminum tracks and steel rollers. We replace those rollers and cap the track if it's damaged. The frame is usually still in good shape and doesn't need replacing.",
    },
  },
];

export function getPatioDoorCityPageData(slug: string): PatioDoorCityPageData | undefined {
  return PATIO_DOOR_CITY_PAGES.find((c) => c.slug === slug);
}
