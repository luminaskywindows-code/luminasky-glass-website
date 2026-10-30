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
      "Cornell and Cathedraltown were built out rapidly in the 2000s with a limited selection of window models. That means the crank operators across these neighborhoods are largely the same type: AmesburyTruth mechanisms in standard vinyl frames. When one fails, the odds are good that others in the same house will follow within a year or two. LuminaSky offers multi-window pricing for homeowners who want to replace operators preventatively rather than waiting for each one to fail. In Unionville, the older housing stock uses a wider variety of operator types, including some European-style tilt-turn mechanisms that require specialized knowledge. We handle both North American casement operators and European tilt-turn hardware. Markham Centre's condo townhomes use awning windows on upper floors, which have their own operator type. We stock those as well.",
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
      "Etobicoke's established neighborhoods from the Kingsway to Islington Village and out to Rexdale are lined with homes that use casement and awning windows. The crank operators in these windows do not last forever. LuminaSky replaces worn and broken mechanisms without removing the window.",
    uniqueContent:
      "The Kingsway and Humber Valley Village feature well-maintained mid-century homes with quality casement windows that were ahead of their time when installed. The operators in these windows are typically older Truth or Pella-branded mechanisms. They are durable but not immortal. After decades of use, the internal gears wear down and the crank loses its grip. Replacing them requires matching the exact mounting pattern and arm length. In Islington Village, Mimico, and Long Branch, the housing is more mixed, with a blend of postwar detached homes and newer condo townhomes. The operator types vary but are generally more standard. Rexdale and North Etobicoke carry builder-grade windows from the 1970s through 1990s, with operators that are now well past their expected service life. LuminaSky handles all of it. We identify the operator, match the replacement, and install on-site.",
    neighborhoods: getNeighborhoods("etobicoke"),
    citySpecificFaq: {
      q: "Do you work on Pella casement windows in Etobicoke?",
      a: "Yes. We source operators compatible with Pella casement and awning windows, including older models.",
    },
  },
];

export function getCranksCityPageData(slug: string): CranksCityPageData | undefined {
  return CRANKS_CITY_PAGES.find((c) => c.slug === slug);
}
