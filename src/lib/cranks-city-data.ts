import { CITY_PAGES } from "./city-pages-data";

export interface CranksCityPageData {
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

export const CRANKS_CITY_PAGES: CranksCityPageData[] = [
  {
    slug: "toronto",
    city: "Toronto",
    region: "Toronto",
    metaTitle: "Window Crank Repair in Toronto",
    metaDescription:
      "Window crank repair in Toronto. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Casement and awning windows are everywhere in Toronto. They tilt out for ventilation, seal tight when closed, and look clean from the curb. But the crank mechanism inside has a limited lifespan. When the gears strip or the handle snaps, the window is stuck. LuminaSky replaces the operator on-site, usually in a single visit.",
    uniqueContent:
      "Toronto's crank window population spans decades of building. The older casements in High Park and Roncesvalles homes often run on Maxim or early Truth operators that have been turning since the 1980s. The gears inside are nylon, and after 30-plus years of use they strip down to the point where the crank spins freely and the sash does not budge. Mid-2000s builds in the waterfront and Liberty Village tend to use AmesburyTruth operators in vinyl frames. These are still relatively young, but some have already failed due to overtightening or paint buildup on the hinge track. The fix in both cases is the same: identify the operator model, match the spline pattern, and swap the mechanism. LuminaSky carries a stock of the most common operators and handles, so many Toronto crank repairs are completed in a single visit without a return trip.",
    neighborhoods: getNeighborhoods("toronto"),
    citySpecificFaq: {
      q: "My Toronto condo has casement windows I can barely reach. Can you still repair the crank?",
      a: "Yes. We work on casement and awning windows at any height. If the window is accessible from inside, we can replace the operator.",
    },
  },
  {
    slug: "mississauga",
    city: "Mississauga",
    region: "Peel Region",
    metaTitle: "Window Crank Repair in Mississauga",
    metaDescription:
      "Window crank repair in Mississauga. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Mississauga's suburban homes from the 1980s through the 2000s are full of casement and awning windows with crank operators. After 20 to 30 years of daily use, those operators wear out. The gears strip, the handle breaks, or the arm disconnects. LuminaSky replaces the mechanism without touching the window frame.",
    uniqueContent:
      "The vinyl casement windows installed across Erin Mills, Meadowvale, and Churchill Meadows during Mississauga's building boom are now squarely in the age bracket where crank failures become routine. The operators in these windows are typically AmesburyTruth or Encore mechanisms with nylon gears that wear down with regular use. The symptom is always the same: the handle turns but the window does not move, or the handle snaps off entirely. In some cases the hinge side of the window has also stiffened, which puts extra load on the operator and accelerates the failure. LuminaSky checks both the operator and the hinges during every crank repair visit. If the hinges are contributing to the problem, we flag it and quote the full repair. Most Mississauga crank repairs are completed in one visit. We carry the common operator sizes and handle types on every truck.",
    neighborhoods: getNeighborhoods("mississauga"),
    citySpecificFaq: {
      q: "My Mississauga casement window crank handle broke off. Can you fix it without replacing the whole mechanism?",
      a: "Sometimes a handle-only replacement is enough. We check the operator gears first. If the mechanism is still sound, a new handle is all you need.",
    },
  },
  {
    slug: "vaughan",
    city: "Vaughan",
    region: "York Region",
    metaTitle: "Window Crank Repair in Vaughan",
    metaDescription:
      "Window crank repair in Vaughan. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Vaughan's newer homes in Vellore Village and Kleinburg use casement windows almost exclusively on the main and upper floors. The crank operators in these windows are good for 15 to 20 years before the gears give out. LuminaSky replaces them without removing the window from the wall.",
    uniqueContent:
      "Woodbridge's custom-built homes often have oversized casement windows with heavy sashes that put extra stress on the crank operator. The operator has to push more weight with every turn, and the gears wear faster than in a standard-sized window. When the crank fails on a large casement, the window is stuck partially open or shut, which is a security and weather concern. LuminaSky stocks heavy-duty operators for oversized casements and replaces them on-site. In Maple and Vellore Village, the windows are typically builder-grade vinyl casements with standard operators. These are the most common crank repair we do in Vaughan. The replacement takes about 20 to 30 minutes per window, and we can do multiple windows in the same visit. Concord's industrial-residential mix includes some commercial-grade awning windows that use a different operator type. We handle those as well.",
    neighborhoods: getNeighborhoods("vaughan"),
    citySpecificFaq: {
      q: "Can you repair cranks on oversized casement windows in Woodbridge?",
      a: "Yes. We stock heavy-duty operators for oversized casements. The replacement process is the same regardless of window size.",
    },
  },
  {
    slug: "thornhill",
    city: "Thornhill",
    region: "York Region",
    metaTitle: "Window Crank Repair in Thornhill",
    metaDescription:
      "Window crank repair in Thornhill. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Thornhill homes built from the 1980s onward are stocked with casement and awning windows whose crank operators have a finite life. When the handle spins without moving the window, or snaps off entirely, LuminaSky replaces the mechanism on-site.",
    uniqueContent:
      "The homes along Clark Avenue and Centre Street in Thornhill were built in the 1970s and 1980s with aluminum-frame casement windows. The operators in these windows are older-generation Truth or Maxim mechanisms that can be difficult to source off the shelf. LuminaSky maintains a supplier network for discontinued and hard-to-find operators, so even older Thornhill windows can be repaired rather than replaced. In Thornhill Woods and Beverley Glen, the homes are newer and the operators are standard AmesburyTruth units. These are straightforward swaps that we complete in a single visit. One issue we see regularly in Thornhill is paint or caulk buildup around the window sash that makes the crank work harder than it should. We clean the track and lubricate the hinge points as part of every crank repair, which reduces the load on the new operator and extends its life.",
    neighborhoods: getNeighborhoods("thornhill"),
    citySpecificFaq: {
      q: "Can you find replacement parts for older aluminum casement windows in Thornhill?",
      a: "Yes. We maintain a supplier network for discontinued operators. If a direct match is not available, we source the closest compatible replacement.",
    },
  },
  {
    slug: "richmond-hill",
    city: "Richmond Hill",
    region: "York Region",
    metaTitle: "Window Crank Repair in Richmond Hill",
    metaDescription:
      "Window crank repair in Richmond Hill. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Richmond Hill homes, especially in the Oak Ridges and Bayview corridor areas, rely heavily on casement windows for ventilation. The crank operators in these windows last about 15 to 20 years before the gears wear out. LuminaSky replaces the mechanism without removing the window.",
    uniqueContent:
      "Oak Ridges sits at a higher elevation than the rest of Richmond Hill, and the homes there are exposed to stronger winds. That wind load makes casement windows harder to close, which puts extra strain on the crank operator. We see a higher rate of stripped gears in Oak Ridges casements than in homes sheltered in lower-lying parts of the city. The fix is the same, a new operator, but we make a point of checking the hinges for wear too, since a stiff hinge compounds the problem. Along Bayview, the estate homes have large casement windows with premium operators that are more expensive to replace but also more durable. These tend to fail later, around the 20 to 25 year mark. In the townhome complexes around Richmond Hill Centre, the windows are standard-issue with standard operators. These are the quickest repairs: identify the model, swap the mechanism, test the window, done.",
    neighborhoods: getNeighborhoods("richmond-hill"),
    citySpecificFaq: {
      q: "Why do my Richmond Hill casement cranks seem to fail faster than expected?",
      a: "If your home is in an exposed location like Oak Ridges, wind load puts extra strain on the operator. Stiff hinges make it worse. We check both during every repair visit.",
    },
  },
  {
    slug: "markham",
    city: "Markham",
    region: "York Region",
    metaTitle: "Window Crank Repair in Markham",
    metaDescription:
      "Window crank repair in Markham. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Markham's subdivisions from Cornell to Berczy Village are packed with vinyl casement windows that are now 10 to 20 years old. The crank operators in these windows are reaching the end of their useful life. LuminaSky replaces them on-site, keeping the window frame and glass untouched.",
    uniqueContent:
      "Cornell and Cathedraltown were built out rapidly in the 2000s with a limited selection of window models. That means the crank operators across these neighbourhoods are largely the same type: AmesburyTruth mechanisms in standard vinyl frames. When one fails, the odds are good that others in the same house will follow within a year or two. LuminaSky offers multi-window pricing for homeowners who want to replace operators preventatively rather than waiting for each one to fail. In Unionville, the older housing stock uses a wider variety of operator types, including some European-style tilt-turn mechanisms that require specialised knowledge. We handle both North American casement operators and European tilt-turn hardware. Markham Centre's condo townhomes use awning windows on upper floors, which have their own operator type. We stock those as well.",
    neighborhoods: getNeighborhoods("markham"),
    citySpecificFaq: {
      q: "Can I replace all my Markham window cranks at once before they fail?",
      a: "Yes. If one operator has failed, the others are likely close behind. We offer multi-window pricing for preventative replacement.",
    },
  },
  {
    slug: "brampton",
    city: "Brampton",
    region: "Peel Region",
    metaTitle: "Window Crank Repair in Brampton",
    metaDescription:
      "Window crank repair in Brampton. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Brampton's rapid expansion over the past two decades means thousands of casement windows installed in the same era are now failing at the same time. The crank handle spins, the window stays put. LuminaSky replaces the operator on-site and gets the window working again.",
    uniqueContent:
      "The Springdale and Castlemore subdivisions in Brampton were built with vinyl casement and awning windows that use the same handful of operator models. After 15 to 20 years, the nylon gears inside those operators strip, and the crank loses its grip on the sash. It is the single most common window hardware failure we see in Brampton. The repair is straightforward: remove the old operator, match the spline pattern and arm length, install the replacement, and test the window through its full range of motion. In Mount Pleasant and the newer builds along Countryside Drive, the windows are younger, but some have already failed due to manufacturing defects or overtightening. We see the occasional brand-new window with a failed operator that should be covered under the builder's warranty. LuminaSky will let you know if that is the case rather than charging for a repair the builder should cover.",
    neighborhoods: getNeighborhoods("brampton"),
    citySpecificFaq: {
      q: "My Brampton home is only 10 years old but the crank already failed. Is that normal?",
      a: "Not typical, but not rare either. Some operators fail early due to manufacturing issues. If your home is still under builder warranty, the manufacturer may cover it. We can advise.",
    },
  },
  {
    slug: "oakville",
    city: "Oakville",
    region: "Halton Region",
    metaTitle: "Window Crank Repair in Oakville",
    metaDescription:
      "Window crank repair in Oakville. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Oakville homes along Lakeshore and through Glen Abbey use casement windows that give clean sight lines and good ventilation. The crank operators behind them do not last forever. LuminaSky replaces worn and broken operators without removing the window.",
    uniqueContent:
      "Oakville's premium homes, particularly in Old Oakville and along the lakefront, often have high-end casement windows with Roto or premium AmesburyTruth operators. These mechanisms are built to tighter tolerances than builder-grade hardware, but they still wear out. When they do, the replacement needs to match the original spec, or the window will not operate smoothly. LuminaSky sources the exact operator model rather than fitting a generic substitute. In Glen Abbey, River Oaks, and Bronte, the windows are more typical of GTA suburban construction: vinyl frames with standard operators. These are the repairs we do most often in Oakville, and they are completed in a single visit. We carry the common sizes on our truck so there is rarely a need for a return trip.",
    neighborhoods: getNeighborhoods("oakville"),
    citySpecificFaq: {
      q: "My Oakville casement windows have Roto operators. Can you source replacements?",
      a: "Yes. We source Roto operators through our supplier network. They are less common than AmesburyTruth, but we carry them and can get them in quickly.",
    },
  },
  {
    slug: "burlington",
    city: "Burlington",
    region: "Halton Region",
    metaTitle: "Window Crank Repair in Burlington",
    metaDescription:
      "Window crank repair in Burlington. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Burlington's residential stretch from the lakeshore up to the escarpment is full of casement and awning windows. The crank mechanisms that drive them wear out after 15 to 25 years. LuminaSky replaces the operator and gets the window turning again.",
    uniqueContent:
      "The homes between Plains Road and Lakeshore in Burlington catch wind off Lake Ontario that makes casement windows harder to close. That constant resistance wears the operator gears faster than in sheltered locations. We see more stripped operators in lake-facing casements than in windows that face away from the water. Farther up the escarpment in Alton Village, the wind is less of a factor but the housing age puts many operators right at the end of their expected life. Millcroft and Headon Forest homes from the 1990s and 2000s are the sweet spot for crank failures: old enough for the gears to have worn, young enough for the frames to be in solid shape. LuminaSky replaces the operator and checks the hinges as part of every visit, because a stiff hinge puts extra load on the new mechanism. Most Burlington repairs are same-day completions.",
    neighborhoods: getNeighborhoods("burlington"),
    citySpecificFaq: {
      q: "Does the lake wind in Burlington cause window cranks to wear out faster?",
      a: "It can. Lake-facing casements work against wind resistance every time you close them, which wears the operator gears faster. We check for hinge stiffness too.",
    },
  },
  {
    slug: "hamilton",
    city: "Hamilton",
    region: "Hamilton",
    metaTitle: "Window Crank Repair in Hamilton",
    metaDescription:
      "Window crank repair in Hamilton. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Hamilton's housing stretches from pre-war homes in the lower city to newer subdivisions on the Mountain. Casement and awning windows across the city rely on crank operators that eventually wear out. LuminaSky replaces them without removing the window.",
    uniqueContent:
      "The lower city around Locke Street, Westdale, and Dundurn has some of the oldest casement windows in the region. The operators in these windows are frequently original 1970s or 1980s hardware that has been turning for decades. Finding replacements for these older mechanisms takes supplier know-how that LuminaSky has built up over years of serving Hamilton homeowners. On the Mountain, in Ancaster, and in Stoney Creek, the housing is newer and the operators are more standard. These are fast repairs. Dundas and Flamborough carry a mix of both old and new, with some heritage homes in downtown Dundas that have wooden casement windows with vintage operators. We handle those as carefully as the heritage context requires. Across Hamilton, we also see awning windows in basements and above kitchen counters. These use a different operator type than casements, and we stock both.",
    neighborhoods: getNeighborhoods("hamilton"),
    citySpecificFaq: {
      q: "Can you repair vintage crank operators in older Hamilton homes?",
      a: "If the original operator can be sourced or a compatible replacement found, yes. If no match exists, we discuss the options with you before proceeding.",
    },
  },
  {
    slug: "north-york",
    city: "North York",
    region: "Toronto",
    metaTitle: "Window Crank Repair in North York",
    metaDescription:
      "Window crank repair in North York. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "North York is a patchwork of 1960s bungalows in Willowdale, high-rise condos along Yonge, and newer homes in Downsview Park. Casement and awning windows across all of them use crank operators that wear out with time. LuminaSky replaces them on-site.",
    uniqueContent:
      "Willowdale and Bayview Village are full of mid-century homes with aluminum-frame casement windows that have been in service for 40 to 50 years. The operators in these windows are often an older generation of Truth hardware that predates the AmesburyTruth merger. Finding replacements takes some effort, but LuminaSky keeps a network of suppliers for discontinued parts. When a direct match is not available, we source the closest compatible operator and confirm it fits before installing. In the townhome and low-rise developments around Sheppard and Finch, the windows are newer and the operators are standard. These repairs are quick. North York's condo buildings along the Yonge corridor occasionally need crank repairs on individual units, and we work with condo owners and property managers to coordinate access.",
    neighborhoods: getNeighborhoods("north-york"),
    citySpecificFaq: {
      q: "Can you find operators for 1960s aluminum casement windows in North York?",
      a: "In most cases, yes. We maintain a supplier network for older and discontinued operators. If no direct match exists, we source a compatible replacement.",
    },
  },
  {
    slug: "etobicoke",
    city: "Etobicoke",
    region: "Toronto",
    metaTitle: "Window Crank Repair in Etobicoke",
    metaDescription:
      "Window crank repair in Etobicoke. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Etobicoke's established neighbourhoods from the Kingsway to Islington Village and out to Rexdale are lined with homes that use casement and awning windows. The crank operators in these windows do not last forever. LuminaSky replaces worn and broken mechanisms without removing the window.",
    uniqueContent:
      "The Kingsway and Humber Valley Village feature well-maintained mid-century homes with quality casement windows that were ahead of their time when installed. The operators in these windows are typically older Truth or Pella-branded mechanisms. They are durable but not immortal. After decades of use, the internal gears wear down and the crank loses its grip. Replacing them requires matching the exact mounting pattern and arm length. In Islington Village, Mimico, and Long Branch, the housing is more mixed, with a blend of postwar detached homes and newer condo townhomes. The operator types vary but are generally more standard. Rexdale and North Etobicoke carry builder-grade windows from the 1970s through 1990s, with operators that are now well past their expected service life. LuminaSky handles all of it. We identify the operator, match the replacement, and install on-site.",
    neighborhoods: getNeighborhoods("etobicoke"),
    citySpecificFaq: {
      q: "Do you work on Pella casement windows in Etobicoke?",
      a: "Yes. We source operators compatible with Pella casement and awning windows, including older models.",
    },
  },
  {
    slug: "scarborough",
    city: "Scarborough",
    region: "Toronto",
    metaTitle: "Window Crank Repair in Scarborough",
    metaDescription:
      "Window crank repair in Scarborough. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Scarborough's sprawling residential areas from the Bluffs to Agincourt are home to decades of casement and awning windows. The crank operators behind them wear out with age. LuminaSky replaces the mechanism on-site, and most window hardware repairs are completed on the same day, on the first visit.",
    uniqueContent:
      "The homes along the Scarborough Bluffs and in Guildwood date from the 1950s and 1960s, with aluminum-frame casement windows running original operators that are long overdue for replacement. These older mechanisms use mounting patterns that differ from modern standards, so finding the right part matters. LuminaSky sources discontinued and hard-to-find operators through a network of specialty suppliers. In Agincourt and Milliken, the housing stock is newer, mostly 1980s and 1990s detached homes with vinyl casements using standard AmesburyTruth operators. These are fast, straightforward repairs. The townhome developments around Morningside and Highland Creek carry builder-grade casements with operators that begin failing around the 15-year mark. We carry the common replacement sizes and handle types on every service call.",
    neighborhoods: getNeighborhoods("scarborough"),
    citySpecificFaq: {
      q: "Can you repair the crank on my older aluminum casement windows in Scarborough?",
      a: "Yes. We source operators for older aluminum frames through our specialty supplier network. If a direct match is not available, we find the closest compatible replacement.",
    },
  },
  {
    slug: "aurora",
    city: "Aurora",
    region: "York Region",
    metaTitle: "Window Crank Repair in Aurora",
    metaDescription:
      "Window crank repair in Aurora. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Aurora's established neighbourhoods and newer subdivisions alike rely on casement windows for ventilation and curb appeal. The crank operators that drive them have a limited lifespan. LuminaSky replaces worn operators on-site, and most window hardware repairs are completed on the same day, on the first visit.",
    uniqueContent:
      "The heritage homes in Aurora's old town along Yonge Street and Wellington carry a mix of wood and aluminum casement windows with older-generation operators. These require careful sourcing to find a compatible replacement. Farther north, the subdivisions around Bayview and St. John's Sideroad are filled with 2000s-era vinyl casements using standard operators that are now entering the failure window. The symptoms are consistent: the crank handle spins freely, or the window only opens partway before the mechanism binds. In the newer developments near Stronach Aurora Recreation Complex, the windows are younger, but early failures do happen, often from overtightening the handle or paint in the track. LuminaSky inspects the full mechanism during every visit, including the hinges and track, to make sure the new operator is not working against a secondary problem.",
    neighborhoods: getNeighborhoods("aurora"),
    citySpecificFaq: {
      q: "My Aurora home has wood casement windows. Can you replace just the crank mechanism?",
      a: "Yes. Wood casement windows use the same style of crank operator as vinyl frames. The mechanism is replaced without affecting the wood frame or finish.",
    },
  },
  {
    slug: "woodbridge",
    city: "Woodbridge",
    region: "Vaughan",
    metaTitle: "Window Crank Repair in Woodbridge",
    metaDescription:
      "Window crank repair in Woodbridge. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Woodbridge homes are known for their custom builds and oversized windows. Many of those windows are casements with crank operators that carry heavier sashes than standard models. When the gears wear out, LuminaSky replaces the mechanism on-site.",
    uniqueContent:
      "Custom-built homes along Islington Avenue and in the Market Lane area of Woodbridge often feature large casement windows with heavy glass panels. The extra weight accelerates wear on the crank operator, and failures tend to happen sooner than in standard-sized windows. LuminaSky stocks heavy-duty operators designed for oversized casements and replaces them without removing the window. In the established subdivisions near Pine Valley Drive and along Highway 7, the homes are from the 1980s and 1990s with standard vinyl casements. The operators in these windows are reaching or past their expected life. We see a steady flow of crank repairs from these neighbourhoods. Most Woodbridge window hardware repairs are completed on the same day, on the first visit, because we carry the common operator models on every truck.",
    neighborhoods: getNeighborhoods("woodbridge"),
    citySpecificFaq: {
      q: "My Woodbridge home has extra-large casement windows. Do you carry heavy-duty crank operators?",
      a: "Yes. We stock heavy-duty operators specifically for oversized casements. The replacement process is the same, just a sturdier mechanism.",
    },
  },
  {
    slug: "maple",
    city: "Maple",
    region: "Vaughan",
    metaTitle: "Window Crank Repair in Maple",
    metaDescription:
      "Window crank repair in Maple. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Maple's rapid residential growth over the past 15 years means a large number of casement windows were installed in a short period. Those crank operators are now starting to fail in waves. LuminaSky replaces the mechanism and gets the window working again.",
    uniqueContent:
      "The subdivisions around Major Mackenzie Drive and Dufferin Street in Maple were built out between 2005 and 2015 with vinyl casement windows using a handful of common operator models. As these windows pass the 10 to 15 year mark, crank failures are becoming routine. The gears strip, the handle loses its grip, and the window stays shut. Because so many homes in Maple use the same operator types, LuminaSky can often complete multiple repairs in one visit without needing to return. We also service the older homes in the original Maple village core, where the casement windows may predate the vinyl era and use aluminum or wood frames with different operator mounting patterns. Most window hardware repairs in Maple are completed on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("maple"),
    citySpecificFaq: {
      q: "My Maple home is only 12 years old. Is it normal for the crank to fail already?",
      a: "Builder-grade operators can start failing around the 10 to 15 year mark, especially with daily use. It is one of the most common repairs we do in newer Maple subdivisions.",
    },
  },
  {
    slug: "king-city",
    city: "King City",
    region: "York Region",
    metaTitle: "Window Crank Repair in King City",
    metaDescription:
      "Window crank repair in King City. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "King City and the surrounding King Township are home to estate properties and custom-built homes that frequently use casement windows. The crank operators in these windows wear out over time, and LuminaSky replaces them on-site.",
    uniqueContent:
      "The estate homes along King Road and in Nobleton tend to have large, high-end casement windows with premium operator hardware. These operators are built to last, but after 15 to 25 years even the best mechanisms show wear. The internal gears lose their bite, and the crank handle starts slipping. Replacing operators on estate windows requires matching the exact model, since premium hardware uses specific mounting patterns and arm lengths. LuminaSky sources the correct part and installs it without disturbing the frame or interior trim. In the newer subdivisions closer to Highway 400, the windows are more standard, with builder-grade operators that follow the same failure pattern as the rest of the GTA. Most King City window hardware repairs are completed on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("king-city"),
    citySpecificFaq: {
      q: "Do you service estate homes in King City with premium casement windows?",
      a: "Yes. We source operators for premium and custom casement windows, including models from European manufacturers that are less common in standard housing.",
    },
  },
  {
    slug: "newmarket",
    city: "Newmarket",
    region: "York Region",
    metaTitle: "Window Crank Repair in Newmarket",
    metaDescription:
      "Window crank repair in Newmarket. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Newmarket's mix of established homes near Main Street and newer developments along Davis Drive means a wide range of casement window ages and operator types. LuminaSky handles them all, replacing worn crank mechanisms on-site.",
    uniqueContent:
      "The older residential streets around Main Street South and Huron Heights in Newmarket carry homes from the 1970s and 1980s with casement windows whose operators have been in service for over 30 years. These mechanisms are often Maxim or early Truth models with nylon gears that have worn smooth. In the subdivisions along Bayview and Leslie, the homes are from the 1990s and 2000s with standard AmesburyTruth operators in vinyl frames. These are entering the typical failure window. Upper Canada Mall area and the Bristol Road corridor feature newer townhomes with awning windows above kitchen counters that use their own operator type. LuminaSky stocks both casement and awning operators and completes most Newmarket window hardware repairs on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("newmarket"),
    citySpecificFaq: {
      q: "Do you repair both casement and awning window cranks in Newmarket?",
      a: "Yes. Casement and awning windows use different operator types. We carry both and replace them on-site.",
    },
  },
  {
    slug: "milton",
    city: "Milton",
    region: "Halton Region",
    metaTitle: "Window Crank Repair in Milton",
    metaDescription:
      "Window crank repair in Milton. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Milton grew fast in the 2000s and 2010s, and most of those new homes came with casement windows. The crank operators in these windows are now starting to fail. LuminaSky replaces them without removing the window from the frame.",
    uniqueContent:
      "The massive subdivisions in Willmott, Harrison, and Timberlea were built out rapidly with a limited selection of window manufacturers. That means the crank operators across these neighbourhoods are largely identical: standard AmesburyTruth mechanisms in vinyl frames. When they fail, the symptoms are the same everywhere. The handle spins, the gears are stripped, and the window is stuck. LuminaSky keeps these common operators in stock, so most Milton repairs are completed in a single visit. In the older parts of Milton near Main Street and around the fairgrounds, the homes predate the building boom and carry a wider variety of window types, including some aluminum-frame casements with older operators. We source parts for those as well. Milton's escarpment exposure means some homes face strong westerly winds that put extra load on crank mechanisms. We inspect the hinges as part of every repair to ensure the new operator is not working against a binding sash.",
    neighborhoods: getNeighborhoods("milton"),
    citySpecificFaq: {
      q: "My Milton home was built in 2008 and several cranks are failing. Is that common?",
      a: "Yes. Homes from that era are right on schedule for operator failures. If one has failed, others are likely close behind. We can replace multiple operators in one visit.",
    },
  },
  {
    slug: "ajax",
    city: "Ajax",
    region: "Durham Region",
    metaTitle: "Window Crank Repair in Ajax",
    metaDescription:
      "Window crank repair in Ajax. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Ajax's residential growth from the 1990s through the 2010s brought thousands of casement windows into the community. The crank mechanisms inside them are now reaching the end of their useful life. LuminaSky replaces worn operators on-site.",
    uniqueContent:
      "The homes along Kingston Road and in the Westney Heights area date from the 1980s and 1990s, with vinyl casement windows carrying operators that have been in use for 25 to 35 years. These are well past their expected service life, and the stripped-gear problem is widespread. In the newer developments near Salem Road and in the Audley Recreation corridor, the windows are from the 2000s and 2010s. The operators are younger but beginning to show wear, particularly in homes where the windows face Lake Ontario's prevailing winds. LuminaSky services Ajax regularly and carries the common operator models for both older and newer installations. Most window hardware repairs in Ajax are completed on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("ajax"),
    citySpecificFaq: {
      q: "Does proximity to Lake Ontario in Ajax affect how quickly window cranks wear out?",
      a: "It can. Homes with lake-facing casements experience more wind resistance when closing, which adds strain to the operator gears over time.",
    },
  },
  {
    slug: "pickering",
    city: "Pickering",
    region: "Durham Region",
    metaTitle: "Window Crank Repair in Pickering",
    metaDescription:
      "Window crank repair in Pickering. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Pickering homes across the city, from the older neighbourhoods near the village core to the newer builds in Seaton and Duffin Heights, rely on casement windows with crank operators. LuminaSky replaces worn mechanisms on-site.",
    uniqueContent:
      "Pickering Village and the Bay Ridges area have homes from the 1960s through the 1980s with aluminum-frame casement windows and older-generation operators. Sourcing replacements for these takes a supplier network that covers discontinued models. LuminaSky maintains those connections. In the Amberlea and Liverpool areas, the housing is from the 1980s and 1990s with standard vinyl casements. The operators are at or past their expected life. The Seaton development is bringing newer homes with current-generation operators that should last 15 to 20 years, but the existing Pickering housing stock is firmly in repair territory. We carry the most common operator sizes on our truck and complete most Pickering window hardware repairs on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("pickering"),
    citySpecificFaq: {
      q: "Can you source crank operators for older Pickering Village homes with aluminum windows?",
      a: "Yes. We source operators for older aluminum-frame casements through our specialty supplier network, including discontinued models.",
    },
  },
  {
    slug: "caledon",
    city: "Caledon",
    region: "Peel Region",
    metaTitle: "Window Crank Repair in Caledon",
    metaDescription:
      "Window crank repair in Caledon. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Caledon's rural estates and the growing subdivisions in Bolton use casement windows that rely on crank operators. When the mechanism wears out, LuminaSky comes to you and replaces it on-site.",
    uniqueContent:
      "The estate properties along Mississauga Road and Charleston Sideroad in Caledon often feature oversized casement windows with premium operators. These windows carry heavier glass panels, which means the operator gears take on more load with every turn. Failures tend to happen a few years earlier than in standard-sized windows. LuminaSky stocks heavy-duty replacement operators for this reason. In Bolton, the newer subdivisions along King Street and Queen Street use standard builder-grade vinyl casements with AmesburyTruth operators. These are entering their failure window as the homes reach 10 to 15 years of age. Inglewood and the rural hamlets throughout Caledon carry an older mix of window types. We service the full range and complete most Caledon window hardware repairs on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("caledon"),
    citySpecificFaq: {
      q: "Do you travel out to rural properties in Caledon for crank repairs?",
      a: "Yes. We service Caledon including Bolton, Inglewood, Cheltenham, and the rural estate properties throughout the township.",
    },
  },
  {
    slug: "whitby",
    city: "Whitby",
    region: "Durham Region",
    metaTitle: "Window Crank Repair in Whitby",
    metaDescription:
      "Window crank repair in Whitby. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Whitby's steady residential growth means casement windows of all ages are in service across the town. The crank operators inside them wear out with time. LuminaSky replaces worn mechanisms on-site, usually in a single visit.",
    uniqueContent:
      "The established neighbourhoods around Brooklin and downtown Whitby have homes from the 1970s through the 1990s with casement windows that have logged decades of service. The operators in these windows are reaching or past the end of their expected life. In the newer developments along Taunton Road and around the Whitby GO station, the homes are from the 2000s and 2010s with current-generation operators that are beginning to show early wear. The pattern is consistent across Durham Region: after 15 to 20 years of daily use, the nylon gears inside the operator strip and the crank loses its hold. LuminaSky carries the common replacement operators and completes most Whitby window hardware repairs on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("whitby"),
    citySpecificFaq: {
      q: "How long does a window crank repair take in Whitby?",
      a: "Most repairs take 20 to 30 minutes per window. If you have multiple windows, we can do them all in one visit.",
    },
  },
  {
    slug: "orangeville",
    city: "Orangeville",
    region: "Dufferin County",
    metaTitle: "Window Crank Repair in Orangeville",
    metaDescription:
      "Window crank repair in Orangeville. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Orangeville homes from the 1970s through the 2010s use casement and awning windows with crank operators that wear out over time. LuminaSky travels to Orangeville for crank repairs and gets the job done on-site.",
    uniqueContent:
      "The residential streets around Broadway and First Street in Orangeville carry homes from the 1970s and 1980s with aluminum and early-generation vinyl casement windows. The operators in these windows are well past their expected life, and finding the right replacement part can take some effort. LuminaSky maintains supplier contacts for older and discontinued operators. In the newer subdivisions on the east side of town near the Orangeville Mall and along Riddell Road, the homes use standard builder-grade vinyl casements with AmesburyTruth operators. These are straightforward repairs. Orangeville sits at a higher elevation than much of the GTA, and the winter temperature swings can cause window frames to expand and contract, putting extra stress on the operator mechanism. We check for sash binding as part of every visit. Most Orangeville window hardware repairs are completed on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("orangeville"),
    citySpecificFaq: {
      q: "Do you service Orangeville even though it is outside the main GTA?",
      a: "Yes. We travel to Orangeville regularly for window hardware repairs. The visit fee is the same: $30, credited toward the repair if you proceed.",
    },
  },
  {
    slug: "oshawa",
    city: "Oshawa",
    region: "Durham Region",
    metaTitle: "Window Crank Repair in Oshawa",
    metaDescription:
      "Window crank repair in Oshawa. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Oshawa's residential areas from the older south-end neighbourhoods to the newer north-end subdivisions are filled with casement and awning windows whose crank operators wear out. LuminaSky replaces them on-site.",
    uniqueContent:
      "The south end of Oshawa near the waterfront and around Simcoe Street has homes dating back to the 1950s and 1960s. The casement windows in these homes run on original operators that are overdue for replacement. In the central and north-end neighbourhoods along Taunton Road and Conlin Road, the housing is from the 1990s and 2000s with standard vinyl casements. The operators in these windows are beginning to fail in the predictable pattern: stripped nylon gears, spinning handle, stuck sash. The newer builds in the Windfields and Kedron areas carry current-generation operators that should have years of life left. LuminaSky services Oshawa regularly and stocks the common operator types. Most window hardware repairs in Oshawa are completed on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("oshawa"),
    citySpecificFaq: {
      q: "My Oshawa bungalow has awning windows in the basement. Can you repair the cranks on those?",
      a: "Yes. Awning windows use a different operator type than casements, but we carry both and replace them on-site.",
    },
  },
  {
    slug: "halton-hills",
    city: "Halton Hills / Georgetown",
    region: "Halton Region",
    metaTitle: "Window Crank Repair in Halton Hills",
    metaDescription:
      "Window crank repair in Halton Hills and Georgetown. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Halton Hills, including Georgetown and Acton, has a range of housing from heritage properties to newer subdivisions. Casement windows across the community rely on crank operators that eventually need replacing. LuminaSky handles the swap on-site.",
    uniqueContent:
      "Georgetown's established neighbourhoods along Guelph Street and in the Delrex area carry homes from the 1960s through the 1980s with casement windows running older-generation operators. These mechanisms are often past the point where lubrication alone can keep them going. The gears are worn, and a full operator replacement is the reliable fix. In the newer developments along Mountainview Road and near Georgetown's south end, the homes use standard vinyl casements with current-generation operators that are younger but approaching the 10 to 15 year mark. Acton's smaller residential core has a mix of older and mid-age homes with various operator types. LuminaSky services all of Halton Hills and completes most window hardware repairs on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("halton-hills"),
    citySpecificFaq: {
      q: "Do you service both Georgetown and Acton for window crank repairs?",
      a: "Yes. We cover all of Halton Hills, including Georgetown, Acton, and the surrounding rural areas.",
    },
  },
  {
    slug: "barrie",
    city: "Barrie",
    region: "Simcoe County",
    metaTitle: "Window Crank Repair in Barrie",
    metaDescription:
      "Window crank repair in Barrie. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Barrie's waterfront homes and its expanding south-end subdivisions all use casement and awning windows with crank operators. When the mechanism wears out, LuminaSky replaces it on-site.",
    uniqueContent:
      "The older residential areas along the Barrie waterfront and in the Allandale neighbourhood have homes from the 1960s through the 1980s with casement windows that have been in service for decades. The operators are long past their expected life, and finding the right replacement can require specialty sourcing. In the south end, the rapid growth along Mapleview Drive and in the Hewitt's Gate and Salem areas brought thousands of new homes with vinyl casement windows. These are now 10 to 20 years old, and crank failures are becoming routine. Barrie's exposure to Lake Simcoe winds, particularly on the east side of the city, adds extra resistance when closing casement windows, which accelerates operator wear. LuminaSky inspects the hinges alongside the operator to make sure the new mechanism is not fighting a binding sash. Most Barrie window hardware repairs are completed on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("barrie"),
    citySpecificFaq: {
      q: "Does the lake wind in Barrie affect window crank lifespan?",
      a: "It can. East-facing casements near Lake Simcoe work against wind resistance when closing, which puts extra load on the operator gears over time.",
    },
  },
  {
    slug: "innisfil",
    city: "Innisfil",
    region: "Simcoe County",
    metaTitle: "Window Crank Repair in Innisfil",
    metaDescription:
      "Window crank repair in Innisfil. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Innisfil's growing residential areas, from the waterfront communities on Lake Simcoe to the newer subdivisions near the GO station, use casement windows with crank operators that wear out with age. LuminaSky replaces them on-site.",
    uniqueContent:
      "The lakefront communities in Innisfil, including Alcona and Big Bay Point, have homes from a range of eras. The older cottages converted to year-round homes often carry casement windows with vintage operators that need specialty sourcing. The newer homes built along the 20th Sideroad and near the Innisfil GO station are standard builder-grade vinyl casements with current-generation operators. These are entering their first round of crank failures as they pass 10 to 15 years of age. The exposure to Lake Simcoe winds puts extra load on casements that face the water. LuminaSky checks both the operator and the hinges during every visit. Most Innisfil window hardware repairs are completed on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("innisfil"),
    citySpecificFaq: {
      q: "Can you repair cranks on converted cottage windows in Innisfil?",
      a: "In most cases, yes. If the window uses a standard operator type, we can replace it. If the mechanism is uncommon, we source the closest compatible part.",
    },
  },
  {
    slug: "stouffville",
    city: "Stouffville",
    region: "York Region",
    metaTitle: "Window Crank Repair in Stouffville",
    metaDescription:
      "Window crank repair in Stouffville. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Stouffville's blend of older village homes and newer suburban developments means casement windows of all ages are in service. The crank operators inside them wear out with time. LuminaSky replaces them on-site.",
    uniqueContent:
      "The original village core of Stouffville around Main Street has homes from the mid-1900s with casement windows carrying older operators. These mechanisms can be harder to match, but LuminaSky sources discontinued parts through a network of specialty suppliers. In the newer subdivisions along Hoover Park Drive and near the Stouffville GO station, the homes are from the 2000s and 2010s with standard vinyl casements. The operators are young but beginning to show wear, especially in homes where the windows see daily use for ventilation. The rural properties surrounding Stouffville occasionally have European-style tilt-turn windows with their own mechanism type. We handle those as well. Most Stouffville window hardware repairs are completed on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("stouffville"),
    citySpecificFaq: {
      q: "My Stouffville home has tilt-turn windows instead of standard casements. Can you repair those?",
      a: "Yes. Tilt-turn windows use a different mechanism than casement cranks, but we service both types and source the correct replacement hardware.",
    },
  },
  {
    slug: "east-gwillimbury",
    city: "East Gwillimbury",
    region: "York Region",
    metaTitle: "Window Crank Repair in East Gwillimbury",
    metaDescription:
      "Window crank repair in East Gwillimbury. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "East Gwillimbury, including Holland Landing and Sharon, has seen steady residential growth. The casement windows in these homes use crank operators that wear out over time. LuminaSky replaces them on-site.",
    uniqueContent:
      "The newer subdivisions in Holland Landing and Queensville are built with standard vinyl casement windows using AmesburyTruth operators. As these homes pass the 10 to 15 year mark, the first wave of crank failures is arriving. The symptoms are consistent: the handle spins freely because the nylon gears have stripped, or the window opens partway and then binds. The older homes in Sharon and along the main roads carry a mix of window types, including some with aluminum frames and older operator models. LuminaSky sources the correct replacement for each type and completes most East Gwillimbury window hardware repairs on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("east-gwillimbury"),
    citySpecificFaq: {
      q: "My Holland Landing home is fairly new. Why did the crank already fail?",
      a: "Builder-grade operators can begin failing around 10 to 15 years. Daily use and temperature changes accelerate the wear. It is a common repair in newer subdivisions.",
    },
  },
  {
    slug: "georgina",
    city: "Georgina / Keswick",
    region: "York Region",
    metaTitle: "Window Crank Repair in Georgina",
    metaDescription:
      "Window crank repair in Georgina and Keswick. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Georgina, including Keswick, Sutton, and Jackson's Point, has a mix of year-round homes and converted cottages that use casement windows. The crank operators wear out with age. LuminaSky replaces them on-site.",
    uniqueContent:
      "Keswick's residential growth over the past two decades brought standard builder-grade vinyl casements with AmesburyTruth operators. These windows are now entering the age where crank failures become routine. In Sutton and Jackson's Point, the housing stock includes older homes and converted lakefront cottages with a wider variety of window types. Some of these carry vintage operators that require specialty sourcing. The lakefront exposure means windows facing Lake Simcoe work against wind resistance, which accelerates operator wear. LuminaSky inspects both the crank mechanism and the hinge system during every visit. Most Georgina window hardware repairs are completed on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("georgina"),
    citySpecificFaq: {
      q: "Do you travel to Sutton and Jackson's Point for crank repairs?",
      a: "Yes. We service all of Georgina, including Keswick, Sutton, Jackson's Point, and Pefferlaw.",
    },
  },
  {
    slug: "bradford",
    city: "Bradford",
    region: "Simcoe County",
    metaTitle: "Window Crank Repair in Bradford",
    metaDescription:
      "Window crank repair in Bradford. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Bradford's expanding residential areas are filled with casement and awning windows that use crank operators. When the mechanism wears out, LuminaSky replaces it on-site, and most repairs are done in a single visit.",
    uniqueContent:
      "The newer subdivisions along Dissette Street and County Road 88 in Bradford carry homes from the 2000s and 2010s with standard vinyl casement windows. The AmesburyTruth operators in these windows are approaching the 10 to 15 year mark where failures begin. The older residential core of Bradford, centred around Holland Street, has a mix of housing ages with casement windows running operators from various eras. Some of these older mechanisms require specialty sourcing. Bradford's position in the Holland Marsh area means temperature swings can be more pronounced than elsewhere in the GTA, which stresses window seals and operator mechanisms. LuminaSky checks the full mechanism, including hinges and track condition, during every crank repair. Most Bradford window hardware repairs are completed on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("bradford"),
    citySpecificFaq: {
      q: "My Bradford window crank is very stiff but has not completely failed. Should I replace it now?",
      a: "A stiff crank usually means the gears are wearing down or the hinge track is dirty. Replacing the operator now prevents a full failure later. We can assess and advise during a visit.",
    },
  },
  {
    slug: "clarington",
    city: "Clarington / Bowmanville",
    region: "Durham Region",
    metaTitle: "Window Crank Repair in Clarington",
    metaDescription:
      "Window crank repair in Clarington and Bowmanville. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Clarington, including Bowmanville, Courtice, and Newcastle, has a growing number of homes with casement windows whose crank operators are reaching the end of their service life. LuminaSky replaces them on-site.",
    uniqueContent:
      "Bowmanville's established neighbourhoods along Liberty Street and around the conservation area carry homes from the 1970s through the 1990s with casement windows running operators that are well past their prime. The newer developments in Courtice along Bloor Street and in the Newcastle area use standard vinyl casements with current-generation operators. These are younger but beginning to show the early signs of wear. Clarington's easterly position in the GTA means longer travel times for some service providers, but LuminaSky covers the full municipality. We carry the common operator models on every truck and complete most Clarington window hardware repairs on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("clarington"),
    citySpecificFaq: {
      q: "Do you cover Courtice and Newcastle in addition to Bowmanville?",
      a: "Yes. We service all of Clarington, including Bowmanville, Courtice, Newcastle, and Orono.",
    },
  },
  {
    slug: "uxbridge",
    city: "Uxbridge",
    region: "Durham Region",
    metaTitle: "Window Crank Repair in Uxbridge",
    metaDescription:
      "Window crank repair in Uxbridge. Casement and awning operator replacement. 1-Year Warranty. $30 visit credited back. Call 437-344-8490.",
    intro:
      "Uxbridge's small-town residential areas and surrounding rural properties use casement and awning windows with crank operators that wear out over time. LuminaSky replaces the mechanism on-site.",
    uniqueContent:
      "The homes in Uxbridge's town core along Brock Street and Toronto Street include a mix of heritage and mid-century properties with casement windows carrying older operators. Finding replacement parts for these can take specialty sourcing, which LuminaSky handles through its supplier network. The newer subdivisions on the north and east edges of town use standard vinyl casements with builder-grade operators. These are entering the typical failure window as they pass 10 to 15 years. The rural properties surrounding Uxbridge occasionally have European-style hardware or custom window configurations that require a careful assessment before ordering parts. Most Uxbridge window hardware repairs are completed on the same day, on the first visit.",
    neighborhoods: getNeighborhoods("uxbridge"),
    citySpecificFaq: {
      q: "Do you travel to Uxbridge for window crank repairs?",
      a: "Yes. We service Uxbridge and the surrounding area. The visit fee is the same: $30, credited toward the repair if you proceed.",
    },
  },
];

export function getCranksCityPageData(slug: string): CranksCityPageData | undefined {
  return CRANKS_CITY_PAGES.find((c) => c.slug === slug);
}
