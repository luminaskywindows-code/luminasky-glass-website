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
    metaTitle: "Patio Door Repair Toronto | Rollers & Glass",
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
    metaTitle: "Patio Door Repair Mississauga | Rollers",
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
    metaTitle: "Patio Door Repair Vaughan | Rollers & Glass",
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
    metaTitle: "Patio Door Repair Thornhill | Rollers & Tracks",
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
    metaTitle: "Patio Door Repair Richmond Hill | Rollers",
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
    metaTitle: "Patio Door Repair Markham | Rollers & Glass",
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
    metaTitle: "Patio Door Repair Brampton | Rollers & Tracks",
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
    metaTitle: "Patio Door Repair Oakville | Rollers & Glass",
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
    metaTitle: "Patio Door Repair Burlington | Rollers & Tracks",
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
    metaTitle: "Patio Door Repair Hamilton | Rollers & Glass",
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
    metaTitle: "Patio Door Repair Newmarket | Rollers & Tracks",
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
    metaTitle: "Patio Door Repair Scarborough | Rollers & Glass",
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
  {
    slug: "north-york",
    city: "North York",
    region: "Toronto",
    metaTitle: "Patio Door Repair North York | Rollers & Glass",
    metaDescription:
      "Sliding patio door repair in North York. LuminaSky replaces rollers, fixes tracks, adjusts panels and replaces glass. Written quote on the spot.",
    intro:
      "North York covers a huge stretch of Toronto, from Willowdale to Jane and Finch to Don Mills. The housing mix includes 1960s bungalows, 1980s townhomes, and high-rise condos along Yonge. All of them use patio doors, and all of those doors eventually need new rollers. We service them across the entire district.",
    uniqueContent:
      "Willowdale and Bayview Village homes from the 1960s and 1970s have aluminum-frame patio doors with original steel rollers that have been grinding for years. Don Mills and Parkwoods have a lot of six-foot doors in split-level homes where the track sits at grade level and collects debris from the yard. Downsview and Jane-Finch have townhome complexes with builder-grade vinyl doors where the rollers flatten from daily use across multiple family members. The condo towers along Yonge between Sheppard and Finch have balcony doors that run on narrow tracks that clog with city dust and road salt. We carry rollers to fit all of these setups and adjust the panel height so the lock lines up and the weatherstripping makes full contact.",
    neighborhoods: getNeighborhoods("north-york"),
    citySpecificFaq: {
      q: "Do you repair patio doors in North York condo towers?",
      a: "Yes. We work in condo buildings across North York. Balcony patio doors use the same roller and track mechanism as house doors. Building access is coordinated through your concierge or property manager.",
    },
  },
  {
    slug: "etobicoke",
    city: "Etobicoke",
    region: "Toronto",
    metaTitle: "Patio Door Repair Etobicoke | Rollers & Glass",
    metaDescription:
      "Sliding patio door repair in Etobicoke. Roller replacement, track repair, panel adjustment and glass replacement. Written quote on the spot.",
    intro:
      "Etobicoke is full of 1960s and 1970s homes with original patio doors that have been sliding on the same rollers for decades. Newer areas like Humber Bay and the Kingsway also have doors that are reaching the 15-to-20-year service mark. We replace the rollers, clean or cap the track, and get the door gliding again.",
    uniqueContent:
      "The Kingsway and Princess Anne Manor have larger homes with eight-foot patio door openings and heavier panels. Those panels put extra stress on the rollers and wear them out faster than a standard six-foot door. Rexdale, Islington, and West Deane Park have 1970s and 1980s homes with aluminum-track doors where the steel rollers have corroded from years of condensation pooling in the track channel. Mimico and New Toronto waterfront homes deal with lake moisture that accelerates roller corrosion. Long Branch and Alderwood have bungalows with walkout basement patio doors where the lower track collects more water and debris. We use stainless or polymer rollers where corrosion is a concern, and cap damaged tracks instead of replacing the full frame.",
    neighborhoods: getNeighborhoods("etobicoke"),
    citySpecificFaq: {
      q: "My Etobicoke patio door has been stiff for years. Is it too late to repair?",
      a: "Rarely. Even doors that have been grinding for years can usually be brought back with new rollers and a track cap. The frame and glass are often still in good condition. We assess the full door on the first visit and give you a written quote.",
    },
  },
  {
    slug: "aurora",
    city: "Aurora",
    region: "York Region",
    metaTitle: "Patio Door Repair Aurora | Rollers & Glass",
    metaDescription:
      "Sliding patio door repair in Aurora. LuminaSky replaces rollers, fixes tracks, adjusts panels and replaces glass. Written quote on the spot.",
    intro:
      "Aurora grew significantly through the 1990s and 2000s, and those homes are now squarely in the age bracket where patio door rollers need replacing. The door gets hard to slide, the lock stops engaging, or the panel rattles in the track. We replace the worn parts and bring the door back to quiet operation.",
    uniqueContent:
      "Bayview Northeast and St. Andrew's have homes from the late 1990s with six-foot vinyl patio doors on plastic-body rollers that crack after 20 years of thermal cycling. The Stronach Aurora Recreation Complex area and Highland Gate have larger homes with eight-foot openings where heavier panels accelerate roller wear. Older Aurora homes around Yonge and Wellington have aluminum-frame doors from the 1970s with steel rollers that have corroded in the track channel. The newer sections east of Bayview have doors from the 2010s that are starting to show early signs of roller stiffness. We carry a range of roller sizes to cover all the common Aurora door brands and adjust every panel to sit level in the track.",
    neighborhoods: getNeighborhoods("aurora"),
    citySpecificFaq: {
      q: "How do I know if my Aurora patio door needs new rollers or a new door?",
      a: "If the frame and glass are in good shape, you only need rollers. Check the frame for rot, warping, or cracks. If it is solid, a roller replacement and adjustment will bring the door back to full function at a fraction of the cost of a new door.",
    },
  },
  {
    slug: "woodbridge",
    city: "Woodbridge",
    region: "Vaughan",
    metaTitle: "Patio Door Repair Woodbridge | Rollers & Tracks",
    metaDescription:
      "Patio door repair in Woodbridge. Roller replacement, track cleaning, panel adjustment and patio door glass replacement. Call 437-344-8490.",
    intro:
      "Woodbridge homes from the 1990s and 2000s are reaching the point where patio door rollers start to fail. The door drags, the lock misses the keeper, or the panel shakes when you slide it. We swap the worn rollers, clean the track, and adjust the door so it runs smoothly again.",
    uniqueContent:
      "The older sections of Woodbridge along Kipling and the Humber River have homes from the late 1980s and 1990s with aluminum-track patio doors. The steel rollers in these doors corrode where moisture sits in the track channel, and the doors get stiffer every year. Newer developments near Pine Valley and Highway 7 have vinyl-frame doors with plastic roller bodies that crack from cold-weather cycling. Custom-built homes in the Islington Avenue area often have wider eight-foot openings with heavier panels that put extra load on tandem roller assemblies. We stock rollers for all common Woodbridge door brands and adjust the panel height so the lock catches cleanly.",
    neighborhoods: getNeighborhoods("woodbridge"),
    citySpecificFaq: {
      q: "Can you fix a heavy patio door in a custom Woodbridge home?",
      a: "Yes. Heavier panels use tandem roller assemblies that we stock for the common brands. The replacement process is the same, and we adjust the door so the extra weight is distributed evenly across both rollers.",
    },
  },
  {
    slug: "maple",
    city: "Maple",
    region: "Vaughan",
    metaTitle: "Patio Door Repair Maple | Rollers & Glass",
    metaDescription:
      "Sliding patio door repair in Maple. LuminaSky replaces rollers, fixes tracks, adjusts panels and replaces glass. Written quote on the spot.",
    intro:
      "Maple's residential expansion through the 2000s and 2010s produced thousands of homes with sliding patio doors. Those doors are now entering the 15-to-20-year window where rollers wear down and tracks accumulate enough grit to cause problems. We replace the rollers, clean the track, and get the door working properly.",
    uniqueContent:
      "Eagle Glen, Maple Creek, and the newer sections north of Major Mackenzie have builder-grade vinyl patio doors with plastic-body rollers. Those rollers flatten under the panel weight over time, and the first sign is usually a grinding sound or extra resistance when sliding. Kleinburg Road and the older Maple homes closer to Keele Street have some aluminum-frame doors with steel rollers from the 1990s that have corroded. Townhomes along Jane Street use narrower door configurations with single rollers that wear faster than the tandem setups in detached homes. We carry both roller types and adjust every door so the seal compresses evenly across the bottom rail.",
    neighborhoods: getNeighborhoods("maple"),
    citySpecificFaq: {
      q: "My Maple townhome patio door is hard to open. Is it the rollers?",
      a: "Most likely. Townhome patio doors use single rollers that wear faster than tandem setups in larger homes. A roller replacement typically takes about 30 to 45 minutes and gets the door sliding smoothly again.",
    },
  },
  {
    slug: "king-city",
    city: "King City",
    region: "York Region",
    metaTitle: "Patio Door Repair King City | Rollers & Tracks",
    metaDescription:
      "Patio door repair in King City. Roller replacement, track cleaning, panel adjustment and patio door glass. Call 437-344-8490.",
    intro:
      "King City and King Township have a mix of estate homes and newer subdivision builds, many with large patio door openings. The bigger the panel, the more strain on the rollers. When those rollers wear out, the door drags and the lock stops catching. We replace the rollers on-site and adjust the door for smooth operation.",
    uniqueContent:
      "Estate properties along King Road and Dufferin Street often have oversized sliding doors or multi-panel configurations with heavy glass. These doors use heavy-duty tandem rollers that wear faster under the extra weight. Schomberg-area homes from the 2000s have standard six-foot vinyl doors with builder-grade rollers that are now reaching end of life. Nobleton homes built in the 2010s have newer doors that may need their first adjustment as the house settles. King City's rural properties sometimes have walkout basement patio doors where the lower track collects dirt, leaves, and snow melt. We clean the track thoroughly on every visit and set the rollers to the right height so the panel seals and locks properly.",
    neighborhoods: getNeighborhoods("king-city"),
    citySpecificFaq: {
      q: "Do you service patio doors on rural properties in King Township?",
      a: "Yes. We service patio doors across King City, Nobleton, and Schomberg. Rural properties with walkout basement doors often need extra track cleaning due to exposure, and we handle that as part of the repair.",
    },
  },
  {
    slug: "milton",
    city: "Milton",
    region: "Halton Region",
    metaTitle: "Patio Door Repair Milton | Rollers & Glass",
    metaDescription:
      "Sliding patio door repair in Milton. LuminaSky replaces rollers, fixes tracks, adjusts panels and replaces glass. Written quote on the spot.",
    intro:
      "Milton was one of the fastest-growing towns in Canada through the 2000s and 2010s, and nearly every new home came with a sliding patio door. Those doors are now at the age where the rollers start wearing out. We replace them, service the track, and adjust the panel so the door glides quietly.",
    uniqueContent:
      "Harrison, Willmott, and Beaty neighbourhoods were built out rapidly in the mid-2000s with builder-standard vinyl patio doors. The rollers in these doors are now 15 to 20 years old and showing typical wear: grinding sounds, heavy sliding resistance, and locks that miss the keeper because the panel has dropped. Old Milton near Main Street has some older homes with aluminum-frame doors from the 1980s. Dorset Park and Scott have larger homes with eight-foot openings. The construction dust from Milton's ongoing development can clog tracks on newer homes as well. We carry rollers for the common Milton builders and clean the track on every visit.",
    neighborhoods: getNeighborhoods("milton"),
    citySpecificFaq: {
      q: "Are patio door rollers in Milton's newer homes already wearing out?",
      a: "Many are. Homes from the mid-2000s are now 15 to 20 years old, which is when builder-grade rollers typically start failing. A roller replacement now prevents further damage to the track and keeps the door working for another 15 to 20 years.",
    },
  },
  {
    slug: "ajax",
    city: "Ajax",
    region: "Durham Region",
    metaTitle: "Patio Door Repair Ajax | Rollers & Glass",
    metaDescription:
      "Sliding patio door repair in Ajax. Roller replacement, track repair, panel adjustment and glass. Written quote on the spot.",
    intro:
      "Ajax has a solid base of 1990s and 2000s homes where the patio doors are reaching the age when rollers give out. The door drags, bounces in the track, or will not lock properly. We replace the rollers, clean or cap the track, and adjust the panel so everything lines up again.",
    uniqueContent:
      "South Ajax near the waterfront has homes from the 1980s and 1990s with aluminum-track patio doors that get extra moisture exposure from Lake Ontario. The steel rollers in those doors corrode faster than inland homes. Westney Heights and Village Green have 1990s builds with standard vinyl doors where the plastic rollers are cracking from age. The newer sections along Rossland Road and Taunton Road have homes from the 2000s and 2010s with tandem roller setups. Ajax's ongoing construction means that even newer doors accumulate track grit faster than they would in a settled neighbourhood. We clean the track on every visit and replace rollers with parts rated for the panel weight.",
    neighborhoods: getNeighborhoods("ajax"),
    citySpecificFaq: {
      q: "Does lake proximity affect patio doors in south Ajax?",
      a: "It can. Homes closer to the waterfront deal with more moisture and salt air, which corrodes steel rollers faster. We use corrosion-resistant rollers for replacements in these areas.",
    },
  },
  {
    slug: "pickering",
    city: "Pickering",
    region: "Durham Region",
    metaTitle: "Patio Door Repair Pickering | Rollers & Tracks",
    metaDescription:
      "Patio door repair in Pickering. Roller replacement, track cleaning, panel adjustment and patio door glass. Call 437-344-8490.",
    intro:
      "Pickering homes span from 1960s builds in the south to newer developments in Duffin Heights and Seaton. Patio doors in all of these areas eventually need roller replacement. We handle the repair on-site and carry the common roller types to complete most jobs in a single visit.",
    uniqueContent:
      "Bay Ridges and West Shore have homes from the 1970s and 1980s with original aluminum-frame patio doors. The rollers in those doors have been turning for 40 years or more and are grinding metal on metal. Amberlea and Village East have 1990s homes with vinyl doors where the rollers are cracking from age. Duffin Heights and the newer sections along Taunton are more recent builds where rollers are still within their early lifespan but may need adjustment as the house settles. Rouge Park homes near the valley get extra moisture from the creek system, which can accelerate roller corrosion on ground-level doors. We match the roller type to the door brand and set the panel height so the lock and weatherstripping work properly.",
    neighborhoods: getNeighborhoods("pickering"),
    citySpecificFaq: {
      q: "My Pickering patio door was fine until recently. What changed?",
      a: "Rollers wear gradually, so the door gets a little stiffer each year. Most people notice it suddenly when the rollers cross the threshold from worn to failing. It does not mean the door is broken, it means the rollers need replacing.",
    },
  },
  {
    slug: "caledon",
    city: "Caledon",
    region: "Peel Region",
    metaTitle: "Patio Door Repair Caledon | Rollers & Glass",
    metaDescription:
      "Sliding patio door repair in Caledon. LuminaSky replaces rollers, fixes tracks, adjusts panels and replaces glass. Written quote on the spot.",
    intro:
      "Caledon homes range from rural properties with walkout basements to newer subdivision builds in Bolton and Southfields Village. Patio doors in all of these settings use the same roller and track mechanism, and they all need servicing once the rollers wear out. We replace them on-site.",
    uniqueContent:
      "Bolton-area homes from the 2000s and 2010s have standard six-foot vinyl patio doors with builder-grade rollers. Those rollers are reaching end of life in the older Bolton sections. Southfields Village is newer but some early-phase homes already have doors that need adjustment. Rural Caledon properties along Caledon East and Mono Road often have walkout basement doors where the lower track collects dirt, leaves, and snow melt throughout the year. Palgrave and Inglewood have estate-style homes with larger door openings and heavier panels. We carry rollers for standard and oversized setups and clean every track thoroughly before adjusting the panel.",
    neighborhoods: getNeighborhoods("caledon"),
    citySpecificFaq: {
      q: "Do you come out to rural Caledon for patio door repair?",
      a: "Yes. We service Caledon, Bolton, Palgrave, Inglewood, and Caledon East. Rural walkout doors often need extra track cleaning, and we handle that as part of the repair visit.",
    },
  },
  {
    slug: "whitby",
    city: "Whitby",
    region: "Durham Region",
    metaTitle: "Patio Door Repair Whitby | Rollers & Glass",
    metaDescription:
      "Sliding patio door repair in Whitby. Roller replacement, track repair, panel adjustment and glass. Written quote on the spot.",
    intro:
      "Whitby expanded steadily through the 1990s and 2000s, and those homes are now at the age where patio door rollers start failing. The door gets harder to slide, the panel drops slightly, and the lock stops catching. We replace the rollers and bring the door back to smooth operation.",
    uniqueContent:
      "Brooklin, Blue Grass Meadows, and Williamsburg have homes from the late 1990s and 2000s with six-foot vinyl patio doors on plastic rollers. Those rollers flatten under the panel weight and develop flat spots that cause the door to vibrate as it slides. Downtown Whitby and the older sections near Dundas Street have aluminum-frame doors from the 1970s and 1980s with corroded steel rollers. Lynde Creek and the newer developments near Taunton Road have larger homes with eight-foot openings. We carry rollers for the common Whitby door brands and adjust the panel height so the weatherstripping compresses evenly and the lock lines up with the keeper.",
    neighborhoods: getNeighborhoods("whitby"),
    citySpecificFaq: {
      q: "My Whitby patio door vibrates when I open it. Is that normal?",
      a: "No. Vibration or humming usually means the rollers have flat spots. As the roller rotates, the flat section causes a bounce that vibrates through the panel and frame. New rollers with round bearings fix the noise.",
    },
  },
  {
    slug: "orangeville",
    city: "Orangeville",
    region: "Dufferin County",
    metaTitle: "Patio Door Repair Orangeville | Rollers",
    metaDescription:
      "Patio door repair in Orangeville. Roller replacement, track cleaning, panel adjustment and patio door glass. Call 437-344-8490.",
    intro:
      "Orangeville homes from the 1990s and 2000s are now reaching the point where patio door rollers need attention. The cold winters up the escarpment put extra thermal stress on door components, and rollers that might last 20 years further south can wear out closer to 15 in Orangeville. We replace them on-site.",
    uniqueContent:
      "Montgomery Village and Island Lake have homes from the 1990s with standard vinyl patio doors. The rollers in these doors are now 25 to 30 years old and most have flat spots or cracked housings. Newer sections near Hansen Boulevard and Rolling Hills have homes from the 2000s and 2010s where the rollers are reaching their first service interval. Downtown Orangeville along Broadway has some older homes with aluminum-frame doors from the 1970s. The colder Orangeville winters cause more thermal expansion and contraction in the track, which accelerates roller wear. We carry the common roller types and clean each track before adjusting the panel.",
    neighborhoods: getNeighborhoods("orangeville"),
    citySpecificFaq: {
      q: "Do cold winters in Orangeville affect patio door rollers?",
      a: "They can. Thermal cycling causes the track to expand and contract, which adds stress to the rollers over time. Rollers in colder areas tend to wear slightly faster. The fix is the same: new rollers and a proper adjustment.",
    },
  },
  {
    slug: "oshawa",
    city: "Oshawa",
    region: "Durham Region",
    metaTitle: "Patio Door Repair Oshawa | Rollers & Glass",
    metaDescription:
      "Sliding patio door repair in Oshawa. LuminaSky replaces rollers, fixes tracks, adjusts panels and replaces glass. Written quote on the spot.",
    intro:
      "Oshawa has a mix of older homes in the south end and newer builds in the north. Patio doors across both areas develop the same problems over time: worn rollers, dirty tracks, and panels that no longer lock properly. We fix all of it on-site.",
    uniqueContent:
      "South Oshawa near the lake has homes from the 1960s and 1970s with aluminum-frame patio doors on original steel rollers. Many of these rollers have never been replaced and are grinding through the track. The Simcoe Street corridor and Lakeview Park area have a mix of 1980s and 1990s homes with doors that are due for service. Windfields, Northwood, and the Taunton corridor have newer builds from the 2000s where the builder-grade rollers are now starting to show wear. Oshawa's university district has rental homes where patio doors get heavier daily use and wear out faster. We stock rollers for the common door brands in the area and adjust every panel so the lock catches and the weatherstripping seals.",
    neighborhoods: getNeighborhoods("oshawa"),
    citySpecificFaq: {
      q: "Can you fix a patio door that has been grinding for a long time?",
      a: "Yes. Doors that grind for years wear a groove into the track, but a stainless steel track cap covers the damage and gives the new rollers a smooth surface. This is much cheaper than replacing the full door frame.",
    },
  },
  {
    slug: "halton-hills",
    city: "Halton Hills / Georgetown",
    region: "Halton Region",
    metaTitle: "Patio Door Repair Halton Hills | Rollers",
    metaDescription:
      "Patio door repair in Halton Hills and Georgetown. Roller replacement, track repair, panel adjustment and glass. Call 437-344-8490.",
    intro:
      "Halton Hills, including Georgetown and Acton, has a steady base of 1990s and 2000s homes with sliding patio doors that are now due for roller replacement. We service both communities and carry the common roller types to complete most repairs on the first visit.",
    uniqueContent:
      "Georgetown's Delrex Boulevard and Silver Creek neighbourhoods have homes from the mid-1990s to early 2000s with six-foot vinyl patio doors. The rollers in these doors are 20 to 25 years old and most have developed flat spots or cracked housings. The newer sections of Georgetown along Mountainview Road have homes from the 2010s where rollers are still relatively young but some need adjustment as the foundation settles. Acton homes tend to be slightly older, with some aluminum-frame doors from the 1980s. Rural properties between Georgetown and Acton may have walkout basement doors where the track collects more debris than a main-floor installation. We clean every track thoroughly before setting the new rollers.",
    neighborhoods: getNeighborhoods("halton-hills"),
    citySpecificFaq: {
      q: "Do you service both Georgetown and Acton in Halton Hills?",
      a: "Yes. We cover all of Halton Hills, including Georgetown, Acton, and the rural areas between them. Most patio door repairs are completed in a single visit.",
    },
  },
  {
    slug: "barrie",
    city: "Barrie",
    region: "Simcoe County",
    metaTitle: "Patio Door Repair Barrie | Rollers & Glass",
    metaDescription:
      "Sliding patio door repair in Barrie. LuminaSky replaces rollers, fixes tracks, adjusts panels and replaces glass. Written quote on the spot.",
    intro:
      "Barrie's rapid growth has created a large base of homes with sliding patio doors at various stages of their lifespan. South-end homes from the 1990s are well into the roller replacement zone, while north-end builds from the 2010s are just starting their first decade. We service all areas of Barrie.",
    uniqueContent:
      "South Barrie neighbourhoods like Letitia Heights and Holly have homes from the 1990s with standard vinyl patio doors where the plastic rollers are cracking. Painswick and East Bayfield have homes from the early 2000s with tandem roller setups that wear unevenly. The newer developments in Hewitt's Gate and Salem have doors that may need their first adjustment as the homes settle. Barrie's proximity to Georgian Bay means colder, longer winters with more freeze-thaw cycles, which adds thermal stress to roller bearings and track channels. We carry rollers rated for the heavier use that colder climates demand and adjust every panel for proper seal compression.",
    neighborhoods: getNeighborhoods("barrie"),
    citySpecificFaq: {
      q: "Does Barrie's colder climate affect patio door rollers?",
      a: "Cold temperatures and more freeze-thaw cycles add thermal stress to rollers and tracks. Barrie doors tend to need service slightly earlier than doors in milder parts of the GTA. The repair itself is the same, and we use rollers rated for the conditions.",
    },
  },
  {
    slug: "innisfil",
    city: "Innisfil",
    region: "Simcoe County",
    metaTitle: "Patio Door Repair Innisfil | Rollers & Tracks",
    metaDescription:
      "Patio door repair in Innisfil. Roller replacement, track cleaning, panel adjustment and patio door glass. Call 437-344-8490.",
    intro:
      "Innisfil has grown quickly in recent years, with new homes in Alcona, Cookstown, and the Friday Harbour area joining the existing housing stock around Stroud and Lefroy. Patio doors in the older homes are already needing roller replacement, and the newer builds will follow in time. We service all of Innisfil.",
    uniqueContent:
      "Alcona has the largest concentration of patio doors in Innisfil, with homes from the 2000s and 2010s using builder-standard vinyl doors. The rollers in the older Alcona homes are now 15 to 20 years old and reaching the typical failure point. Stroud and Lefroy have a mix of 1980s and 1990s homes with aluminum-frame doors and steel rollers. Cookstown homes are generally newer but some early 2000s builds need service. Lakefront properties along Lake Simcoe deal with extra moisture exposure that can accelerate roller corrosion in ground-level door installations. We carry rollers for the common brands used by Innisfil builders and clean the track on every visit.",
    neighborhoods: getNeighborhoods("innisfil"),
    citySpecificFaq: {
      q: "Do you service patio doors in lakefront homes in Innisfil?",
      a: "Yes. Lakefront homes near Lake Simcoe sometimes have extra moisture in the track channel. We clean and inspect the track on every visit, and we use corrosion-resistant rollers where needed.",
    },
  },
  {
    slug: "stouffville",
    city: "Stouffville",
    region: "York Region",
    metaTitle: "Patio Door Repair Stouffville | Rollers & Glass",
    metaDescription:
      "Sliding patio door repair in Stouffville. LuminaSky replaces rollers, fixes tracks, adjusts panels and replaces glass. Written quote on the spot.",
    intro:
      "Stouffville has seen steady residential growth over the past two decades. Homes built in the 2000s are now reaching the age where patio door rollers start to fail. We replace the rollers, service the track, and adjust the panel so the door slides and locks properly.",
    uniqueContent:
      "The older sections of Stouffville near Main Street have homes from the 1980s and 1990s with aluminum-track patio doors and steel rollers that corrode over time. The newer subdivisions along Hoover Park Drive and Bethesda Road have homes from the 2000s and 2010s with vinyl-frame doors and plastic rollers that develop flat spots. Some larger homes in the rural edges of Stouffville have wide patio door openings with heavier panels that put extra strain on the roller assemblies. We carry rollers for both standard and heavy-duty setups and adjust the panel so the weatherstripping makes full contact along the bottom and sides.",
    neighborhoods: getNeighborhoods("stouffville"),
    citySpecificFaq: {
      q: "How long does a patio door roller replacement take in Stouffville?",
      a: "Most patio door roller replacements take 30 to 60 minutes per door. If you have multiple doors, we can do them all in the same visit. The repair includes removing the panel, swapping the rollers, cleaning the track, and adjusting the panel height.",
    },
  },
  {
    slug: "east-gwillimbury",
    city: "East Gwillimbury",
    region: "York Region",
    metaTitle: "Patio Door Repair East Gwillimbury | Rollers",
    metaDescription:
      "Patio door repair in East Gwillimbury. Roller replacement, track cleaning, panel adjustment and patio door glass. Call 437-344-8490.",
    intro:
      "East Gwillimbury, including Holland Landing and Sharon, is growing fast with new residential development. Existing homes from the 1990s and 2000s are now at the age where patio door rollers need replacement. We service all communities in East Gwillimbury.",
    uniqueContent:
      "Holland Landing and Sharon have homes from the 1990s and early 2000s with six-foot vinyl patio doors where the rollers are 20 to 25 years old. The plastic roller housings in these doors crack from cold-weather cycling, and the bearings develop flat spots. Queensville and Mount Albert have a mix of older homes with aluminum-frame doors and newer subdivision builds. The ongoing construction in Green Lane and Leslie Street areas means even newer doors can accumulate track grit from nearby building sites. We clean every track before installing new rollers and adjust the panel so the lock engages properly.",
    neighborhoods: getNeighborhoods("east-gwillimbury"),
    citySpecificFaq: {
      q: "Do you service the newer homes in East Gwillimbury?",
      a: "Yes. Even newer doors can need adjustment as the foundation settles, and construction dust from nearby building sites can clog tracks. We clean the track and check the roller condition on every visit.",
    },
  },
  {
    slug: "georgina",
    city: "Georgina / Keswick",
    region: "York Region",
    metaTitle: "Patio Door Repair Georgina | Rollers & Glass",
    metaDescription:
      "Sliding patio door repair in Georgina and Keswick. LuminaSky replaces rollers, fixes tracks, adjusts panels and replaces glass. Written quote on the spot.",
    intro:
      "Georgina, including Keswick and Sutton, has a large base of homes with patio doors that face Lake Simcoe's moisture and York Region's cold winters. Those conditions wear on rollers and tracks over time. We replace the worn parts and get the door gliding smoothly.",
    uniqueContent:
      "Keswick is the largest community in Georgina and has homes from every decade since the 1970s. Older homes along The Queensway and near the waterfront have aluminum-frame patio doors with steel rollers that corrode from lake moisture. The newer sections along Woodbine Avenue and Ravenshoe Road have vinyl-frame doors from the 2000s with plastic rollers reaching end of life. Sutton and Jackson's Point have cottage-country-style homes where patio doors see heavy seasonal use. Pefferlaw has a smaller housing base with a mix of older and newer doors. We carry rollers for the common brands in the area and use corrosion-resistant replacements for lakefront properties.",
    neighborhoods: getNeighborhoods("georgina"),
    citySpecificFaq: {
      q: "Does lake moisture in Georgina damage patio door rollers?",
      a: "It can accelerate corrosion on steel rollers, especially in homes near the Lake Simcoe waterfront. We use stainless steel or polymer rollers for replacements in lakefront areas to resist that corrosion.",
    },
  },
  {
    slug: "bradford",
    city: "Bradford",
    region: "Simcoe County",
    metaTitle: "Patio Door Repair Bradford | Rollers & Tracks",
    metaDescription:
      "Patio door repair in Bradford. Roller replacement, track cleaning, panel adjustment and patio door glass. Call 437-344-8490.",
    intro:
      "Bradford has grown significantly with new residential builds along with its established housing stock. Homes from the 1990s and 2000s are now at the point where patio door rollers start to fail. We replace them on-site and adjust the door for smooth operation.",
    uniqueContent:
      "The older sections of Bradford near Holland Street have homes from the 1980s and 1990s with aluminum-track patio doors and steel rollers that have been wearing for decades. Newer developments along Professor Day Drive and Simcoe Road have homes from the 2000s and 2010s with vinyl-frame doors and plastic rollers that develop flat spots. Bradford's proximity to the Holland Marsh means some homes at lower elevations deal with extra humidity, which can accelerate roller corrosion on ground-level patio doors. We stock rollers for the common builder brands and clean every track thoroughly before setting the new parts.",
    neighborhoods: getNeighborhoods("bradford"),
    citySpecificFaq: {
      q: "My Bradford patio door grinds when I slide it. What is causing that?",
      a: "Grinding usually means the rollers are worn down to the point where the metal axle or housing is contacting the track directly. New rollers restore the smooth rolling surface and stop the grinding noise. If the track has been scored from the grinding, we cap it with a stainless steel cover.",
    },
  },
  {
    slug: "clarington",
    city: "Clarington / Bowmanville",
    region: "Durham Region",
    metaTitle: "Patio Door Repair Clarington | Rollers & Glass",
    metaDescription:
      "Sliding patio door repair in Clarington and Bowmanville. LuminaSky replaces rollers, fixes tracks, adjusts panels and replaces glass. Written quote on the spot.",
    intro:
      "Clarington, including Bowmanville, Courtice, and Newcastle, has a growing housing stock with patio doors at various stages of wear. Older homes need roller replacements now. Newer builds will need them in the coming years. We service all Clarington communities.",
    uniqueContent:
      "Bowmanville's established neighbourhoods along Liberty Street and near the downtown core have homes from the 1980s and 1990s with aluminum-frame patio doors and corroded steel rollers. The newer developments along Green Road and Longworth Avenue have vinyl-frame doors from the 2000s and 2010s with plastic rollers approaching their first service. Courtice homes near Courtice Road and Hancock are a mix of 1990s and 2000s builds with standard roller setups. Newcastle has a smaller base of homes with patio doors that range from 1970s originals to recent builds. We carry rollers for the common brands in Durham Region and adjust every panel so the lock catches and the weatherstripping seals properly.",
    neighborhoods: getNeighborhoods("clarington"),
    citySpecificFaq: {
      q: "Do you service all of Clarington, including Newcastle?",
      a: "Yes. We cover Bowmanville, Courtice, Newcastle, and all of Clarington. Most patio door repairs are completed in a single visit.",
    },
  },
  {
    slug: "uxbridge",
    city: "Uxbridge",
    region: "Durham Region",
    metaTitle: "Patio Door Repair Uxbridge | Rollers & Tracks",
    metaDescription:
      "Patio door repair in Uxbridge. Roller replacement, track cleaning, panel adjustment and patio door glass. Call 437-344-8490.",
    intro:
      "Uxbridge has a mix of older homes in the town centre and newer builds on the outskirts. Patio doors across both areas use the same roller and track mechanism, and they all need servicing once the rollers wear out. We replace them on-site and carry the common roller types.",
    uniqueContent:
      "Downtown Uxbridge homes near Brock Street have some of the oldest patio doors in the area, with aluminum frames and steel rollers from the 1970s and 1980s that have never been replaced. Those rollers are grinding through the track and making the door almost impossible to slide. Newer sections along Reach Street and the east side of town have homes from the 2000s with vinyl-frame doors where the plastic rollers are now at their first service interval. Rural properties around Uxbridge have walkout basement patio doors that collect leaves, dirt, and snow melt in the track. We clean every track before installing new rollers and adjust the panel height so the door seals and locks cleanly.",
    neighborhoods: getNeighborhoods("uxbridge"),
    citySpecificFaq: {
      q: "Can you fix a very old patio door in downtown Uxbridge?",
      a: "Usually, yes. Aluminum-frame doors from the 1970s and 1980s often have frames and glass that are still in good condition. New rollers and a track cap can bring these doors back to smooth operation without a full replacement.",
    },
  },
];

export function getPatioDoorCityPageData(slug: string): PatioDoorCityPageData | undefined {
  return PATIO_DOOR_CITY_PAGES.find((c) => c.slug === slug);
}

