/**
 * "The area" paragraph for each city page: how and when the homes were built, the neighbourhoods,
 * the landscape and the roads our crews drive. Written from public sources (Wikipedia and the
 * municipalities), so every city page carries text that only that city has.
 */
export interface CityArea {
  /** How the city grew and what that means for the windows and doors in it */
  growth: string;
  /** Landscape, water and weather that matter for glass */
  land: string;
  /** How our crews get there */
  route: string;
  /** One practical local tip */
  tip?: string;
}

export const CITY_AREA: Record<string, CityArea> = {
  toronto: {
    growth: "Toronto's homes were built over 150 years, and you can read the decade from the windows. Victorian and Edwardian houses downtown still have wood sashes and old door glass. The postwar bungalows of the inner suburbs went up with aluminum sliders, and the condo towers along the waterfront and Yonge Street run on sealed units that are now 10 to 25 years old.",
    land: "The lake keeps downtown a little milder in winter, but it also keeps the air damp. Ravines like the Don Valley and the Humber cut through the city, so many homes back onto shaded slopes where windows stay cold and wet longer.",
    route: "We come down Yonge Street or the 404 and the Don Valley Parkway, and use the 401 to cross to the east and west ends.",
  },
  "north-york": {
    growth: "North York was farmland until a housing shortage in the late 1940s and 1950s turned it into a suburb almost overnight. Most detached homes here date from those postwar decades, and many still have their second or third set of windows. Newer condo towers around Yonge and Sheppard and Yonge and Finch added thousands of sealed units since the 1990s.",
    land: "The Don River branches run through North York in deep ravines. Homes that back onto them get less sun and more moisture on the rear windows, which is where we see the most fogged glass and swollen wood frames.",
    route: "North York is right below our base, so we usually come straight down Yonge or Bayview. The 401 through here carries over 400,000 vehicles a day, so we plan routes around it.",
  },
  scarborough: {
    growth: "Scarborough grew fast as a suburb after 1967, and much of its farmland became subdivisions in the late 20th century. That means a lot of homes from the 1960s to the 1980s with aluminum and early vinyl windows, plus townhouse complexes in Malvern and Agincourt that were all glazed at the same time and now wear out together.",
    land: "The Scarborough Bluffs rise more than 60 metres over the lake in places, and homes near the shore take the wind and damp air straight off the water. Rouge Park on the east side keeps the northeast edge green and exposed to open wind.",
    route: "We reach Scarborough along Steeles or the 401, and through the 404 and Highway 7 for the northern neighbourhoods.",
  },
  etobicoke: {
    growth: "Etobicoke mixes three eras. Mimico, New Toronto and Long Branch were separate lakeshore towns with older brick homes. The Kingsway developed from about 1900 with larger houses, and Rexdale in the north grew after the Second World War. Newer condo towers now line the waterfront at Humber Bay.",
    land: "Lake Ontario forms the southern edge and the Humber River the eastern one, with Mimico Creek in between. Homes close to the water deal with more humidity and wind-driven rain on the south and west sides.",
    route: "We cross on the 401 and come down the 427, or take the QEW and Gardiner corridor for the lakeshore neighbourhoods.",
  },
  mississauga: {
    growth: "Mississauga was orchards and small villages until after the Second World War. Applewood Acres near the QEW and Dixie was the first big planned subdivision, then Erin Mills and Meadowvale were planned as new towns starting in 1968 and 1969. Most of the city was built out by 2005, so a huge share of its windows date from the 1970s to the 1990s.",
    land: "The city fronts about 13 km of Lake Ontario, and the Credit River valley splits the west side from the centre. Fog is more common along the lakeshore and in the Credit Valley in spring and fall, which keeps glass in those areas damp for longer.",
    route: "We get there on the 401, the 403 through the City Centre, or the 407 along the north edge. Port Credit and Lakeview are reached by the QEW.",
  },
  brampton: {
    growth: "Bramalea was planned in the 1950s as Canada's first satellite community, so east Brampton has some of the oldest suburban homes in Peel. Springdale started in 1991, and development reached Mayfield Road by 1999. Brampton grew 10.6% between 2016 and 2021, the fastest rate among Canada's 25 largest cities, so there is a big band of newer builder-grade windows too.",
    land: "Heart Lake and Claireville conservation areas break up the subdivisions. Open fields to the north and west mean wind hits the newest streets harder than the older, tree-lined ones.",
    route: "Highway 410 runs straight through the middle of the city, and we reach it from the 407 along the south.",
  },
  oakville: {
    growth: "Oakville grew from about 10,000 people in 1961 to over 210,000 today. Old Oakville and Kerr Village hold the historic houses near the harbour, Glen Abbey and Iroquois Ridge filled in during the 1980s and 1990s, and West Oak Trails and the Uptown Core are newer still. Each era has its own window brands and its own problems.",
    land: "Sixteen Mile Creek and Bronte Creek cut through town on their way to Lake Ontario. Homes along the lake and the creek valleys see more wind and moisture than the inland streets north of Upper Middle Road.",
    route: "The QEW and 403 run together through most of Oakville, and we use the 407 for the northern neighbourhoods.",
  },
  burlington: {
    growth: "Burlington grew quickly after the Second World War, with most of its population boom in the 1950s and 1960s. Many homes from that period are now on their second set of windows, and the newer subdivisions in the north end are reaching the age where their first sealed units start to fail.",
    land: "The Niagara Escarpment runs through the western side, and the land slopes down to the Lake Ontario shore. Homes up near the escarpment catch more wind, while those near the lake deal with damp air.",
    route: "We reach Burlington by the QEW, the 403 or the 407, which all meet near the north end of the city.",
  },
  hamilton: {
    growth: "Hamilton has some of the oldest housing we work on. The lower city has brick homes and storefronts from the late 1800s and early 1900s, while the suburbs above the escarpment are mostly postwar and newer. Dundas, Westdale and Ainslie Wood each have their own mix of older wood windows and replacement vinyl.",
    land: "The Niagara Escarpment splits the city into upper and lower parts, rising about 250 metres above Lake Ontario. Homes on the edge of the escarpment take strong winds, and the harbour keeps the lower city damp.",
    route: "We come in on the 403 or the QEW, and use the Lincoln Alexander and Red Hill Valley parkways to get around the upper city.",
  },
  milton: {
    growth: "Milton was Canada's fastest-growing municipality between 2001 and 2011, and it grew another 20.7% from 2016 to 2021. Old Milton was built mostly between 1850 and 1890, but Hawthorne Village, Beaty, Dempsey and Willmott are all recent subdivisions with builder-grade windows that are only now hitting their first seal failures.",
    land: "Milton sits against the Niagara Escarpment, with Kelso and Rattlesnake Point right on the edge of town. Open fields around the newer streets mean little shelter from wind and driving snow.",
    route: "Highway 401 cuts through the middle of town, and we use the 407 to reach it from the east.",
  },
  "halton-hills": {
    growth: "Halton Hills was settled in the 1820s and is centred on two towns, Georgetown and Acton, with hamlets like Glen Williams and Limehouse in between. Older homes in the town cores sit next to newer subdivisions on the edges of Georgetown.",
    land: "The Niagara Escarpment cuts through the town and the northern half drains into the Credit River. Rolling, open land means windows on exposed sides take more wind and sun than in denser suburbs.",
    route: "We get there along Highway 7, which links Georgetown and Acton, or come up from the 401.",
  },
  vaughan: {
    growth: "Vaughan was mostly farmland until the 1990s. It was the fastest-growing municipality in Ontario from 1996 to 2006, growing more than 80% in ten years, so most of its homes and windows are 20 to 30 years old right now. The old village cores of Woodbridge, Kleinburg and Thornhill are much older than the subdivisions around them.",
    land: "The east branch of the Humber River runs through the west side of the city. Vaughan gets about a metre of snow a year, and two tornadoes hit it in August 2009, damaging hundreds of homes.",
    route: "We are based right next door. Highway 400 and Highway 7 get us almost anywhere in Vaughan in under half an hour.",
  },
  woodbridge: {
    growth: "Woodbridge was farmland until the 1970s. Suburban growth spread west to Martin Grove Road, and in the 1980s and 1990s development reached Rutherford and Weston Road with Vellore, Sonoma Heights and Woodbridge Highlands. Many of those homes are custom builds with larger-than-standard windows and doors.",
    land: "The neighbourhood sits on rolling hills in the Humber River valley, with floodplain land along the river. Homes on the valley slopes get more wind and moisture on the exposed side.",
    route: "Highway 400 forms the east edge, Highway 7 runs just south of the old downtown, and the 427 now reaches up into the area.",
  },
  maple: {
    growth: "Maple started with small developments in the 1960s, larger ones in the 1980s, and fast growth from the late 1990s. Canada's Wonderland opened in 1981 on farmland just west of the 400, and the subdivisions filled in around it. Most homes here have vinyl casements and sliders from those growth waves.",
    land: "North of Teston Road the land opens up into rural Vaughan, so the newest streets on the edge of Maple have little shelter from wind and blowing snow.",
    route: "We take Highway 400 to Major Mackenzie or Rutherford, then Keele Street to the old village crossroads.",
  },
  "king-city": {
    growth: "King City was settled in 1836 and stayed small and rural for most of its history. A sewer project in 2005 opened the door to new subdivisions, so the town now mixes old farmhouses and stables with newer detached homes and townhouses.",
    land: "King sits on the southern slope of the Oak Ridges Moraine, with rolling hills and kettle lakes. Larger lots and open land mean windows face more sun, wind and snow than in the city.",
    route: "We reach King City by Highway 400 to King Road, or up Keele and Dufferin from Vaughan.",
  },
  thornhill: {
    growth: "Thornhill is split down Yonge Street, with the west side in Vaughan and the east side in Markham. The old village, where churches from the 1830s and 1840s still stand, is surrounded by subdivisions built from the 1960s onward. That puts a lot of homes on their second or third generation of windows.",
    land: "The East Don River valley runs through the area, and homes along the ravines get more shade and moisture on their back windows.",
    route: "Thornhill is home base for LuminaSky. Our crews are minutes away along Yonge, Bathurst, Highway 7 and the 407.",
  },
  "richmond-hill": {
    growth: "Richmond Hill roughly doubled in the 1990s, from about 80,000 people in 1991 to 132,000 by 2001. Bayview Hill went up in the early 1990s with large homes, Jefferson was first occupied in 2007, and Mill Pond and the old Yonge Street strip hold the older houses. Most windows here are from that 1990s and 2000s boom.",
    land: "The northern third of the city sits on the Oak Ridges Moraine, with kettle lakes like Lake Wilcox. At about 233 metres it is one of the higher points in York Region, so homes on the ridge take more wind and snow.",
    route: "We drive up Yonge Street, Bayview or the 404, which forms the city's east edge.",
  },
  markham: {
    growth: "Markham was mostly farmland and marsh until the 1970s, and its population has grown more than five times since 1976. South Unionville started in the 1990s, Cornell and Berczy Village followed, and the heritage cores of Markham Village, Unionville and Thornhill are much older. A lot of Markham's windows are from the same building waves, so they tend to fail on the same schedule.",
    land: "The Don and Rouge rivers cross the city, and the Oak Ridges Moraine rises to the north. Markham gets about 146 cm of snow a year and is usually a degree or two colder than downtown Toronto.",
    route: "The 404 runs along the west edge, and Highway 7 and the 407 take us across the city. Heritage streets like Main Street Unionville need careful parking and access.",
  },
  stouffville: {
    growth: "Whitchurch-Stouffville more than doubled its homes in twenty years, from about 7,600 dwellings in 2001 to over 16,700 in 2021. Most of that growth is new subdivisions around the town of Stouffville, next to an older Main Street and smaller communities like Ballantrae and Musselman's Lake.",
    land: "Most of the town sits on the Oak Ridges Moraine, a landscape of hills and kettle lakes. Open land around the new streets means more wind and snow load on windows and doors.",
    route: "We take Highway 48 or the 404 north, depending on which side of town the job is on.",
  },
  aurora: {
    growth: "Aurora more than doubled in the 1960s during the postwar suburban boom, and areas like Aurora North and the streets near Bathurst and St. John's Sideroad were built in the 1980s. Development has since pushed east to Highway 404. Northeast Old Aurora has been a heritage conservation district since 2006.",
    land: "Part of the town sits on the Oak Ridges Moraine and it is surrounded by the Greenbelt, so homes on the edges face open country and colder winter winds.",
    route: "The 404 forms Aurora's east border, and we use Yonge, Bayview and Bathurst to get across town.",
  },
  newmarket: {
    growth: "Newmarket had a suburban building boom in the 1950s, and from the 1980s it became mostly a commuter town. Neighbourhoods along Yonge and Davis filled in during those decades. Downtown Main Street became a heritage conservation district in 2013, so its older storefronts and homes follow heritage rules.",
    land: "The East Holland River runs through town and the southwest corner sits on the Oak Ridges Moraine. Lower areas near the river stay damper, which shows up as fogged glass and condensation.",
    route: "We take the 404 to Davis Drive or Mulock, or come straight up Yonge Street.",
  },
  "east-gwillimbury": {
    growth: "East Gwillimbury grew 44% between 2016 and 2021, one of the fastest rates in Ontario. Most of the new homes are around Holland Landing, Queensville, Sharon and Mount Albert, next to older rural houses and the Sharon Temple, built between 1825 and 1831.",
    land: "The East Holland River runs through the town and much of the land is open and rural, so homes take the full force of winter wind.",
    route: "We drive up the 404, which runs through the town, or come up Yonge Street through Newmarket.",
  },
  georgina: {
    growth: "Georgina is the northernmost town in York Region, centred on Keswick and Sutton with smaller communities like Pefferlaw. Many homes started as summer cottages along Lake Simcoe and were later turned into year-round houses, so their windows and doors were never built for full winters.",
    land: "Lake Simcoe forms the whole northern edge of the town. Homes near the shore take wind and lake-effect snow straight off the water.",
    route: "We get there by the 404 north and Woodbine Avenue or Highway 48.",
  },
  "bradford": {
    growth: "Bradford West Gwillimbury grew 21% from 2016 to 2021, with about 13,900 homes now. Most of the new subdivisions are around Bradford itself, next to older homes in the town core and in Bond Head.",
    land: "The Holland Marsh, some of the richest farmland in Ontario, lies partly in the town along the Holland River. Open, flat land around it lets wind travel a long way before it hits a house.",
    route: "We take Highway 400 to Highway 88, or Highway 9 from the east.",
  },
  innisfil: {
    growth: "Innisfil is a string of communities along Lake Simcoe: Alcona, Lefroy, Stroud and Cookstown, plus Friday Harbour, which opened on Big Bay Point in 2017. Many older lakeside cottages have been converted into year-round homes, often with windows that were never meant for a full Ontario winter.",
    land: "The town lies on the western shore of Lake Simcoe, near Kempenfelt Bay, and gets heavy lake-effect snow in winter.",
    route: "Highway 400 runs along the west side of the town, and we come off at Innisfil Beach Road for Alcona.",
  },
  barrie: {
    growth: "Barrie's population roughly tripled over the 1980s and 1990s and reached about 148,000 in 2021. Allandale and the downtown streets hold older homes, while Painswick, Holly and the south end are mostly subdivisions from that growth period.",
    land: "Barrie sits on Kempenfelt Bay in a snowbelt that gets around 286 cm of lake-effect snow a year. Snow load, ice and long cold spells are hard on window seals, cranks and door glass.",
    route: "Highway 400 runs straight through the city. Locally, Highway 26 is Bayfield Street and Highway 11 is Yonge Street.",
  },
  orangeville: {
    growth: "Orangeville has about 11,000 homes around a historic core at Broadway and First Street, where the 1908 Carnegie library and the restored Opera House still stand. Newer subdivisions ring the older streets.",
    land: "At about 411 metres, Orangeville is one of the highest towns in southern Ontario, and it averages around 150 cm of snow a year. Cold, wind and snow at that elevation are hard on older sealed units.",
    route: "We drive up Highway 10, which runs along the town's east side. Broadway was once Highway 9.",
  },
  caledon: {
    growth: "Caledon is mostly rural, with farms between the villages. Bolton is the main town, Caledon East is the service centre, and Belfountain, Cheltenham and Inglewood are small villages. Homes range from century farmhouses to large newer houses on big lots.",
    land: "The Forks of the Credit runs through the town, and the rolling countryside leaves many homes fully exposed to sun, wind and snow on every side.",
    route: "Highway 10 runs north through Caledon and becomes Highway 410 to the south. We use Peel Road 50 for Bolton.",
  },
  pickering: {
    growth: "Pickering's first postwar subdivisions went up around Frenchman's Bay and spread across the south end. The population grew from about 38,000 in 1981 to 99,000 in 2021, and the new Seaton community is planned for over 20,000 homes. Whitevale and Claremont are older rural heritage hamlets.",
    land: "Lake Ontario forms the southern boundary, and homes near Frenchman's Bay and the shore deal with damp air and wind off the water.",
    route: "We come along the 401 near the south end, or the 407 through the middle of the city.",
  },
  ajax: {
    growth: "Ajax began as housing for workers at a Second World War munitions plant. After the plant closed in 1945, the site was planned as a modern town. Subdivisions spread through central Ajax in the 1970s, and larger homes went up on the south side in the early 1980s.",
    land: "Ajax sits on the Lake Ontario shore, with Duffins Creek and Carruthers Creek running through it. Homes near the waterfront trail take more wind and humidity.",
    route: "Highway 401 runs east to west through the town, with Kingston Road parallel to it.",
  },
  whitby: {
    growth: "Whitby's downtown dates back to 1836, and its subdivisions have been spreading north since the 1990s, including around Brooklin. The town reached about 138,500 people in 2021. Trafalgar Castle, built in 1859 to 1862, is still standing.",
    land: "Whitby sits on Lake Ontario's north shore with a natural harbour. The northern subdivisions near Brooklin are more open and take more wind.",
    route: "Highway 401 crosses the south end, and the 407 and 412, both opened in 2016, reach the northern neighbourhoods.",
  },
  oshawa: {
    growth: "Oshawa grew with the auto industry. The population jumped from about 4,000 to 16,000 in the 1920s, and postwar growth followed the opening of Highway 401 in 1947. That gives Oshawa a large stock of older homes alongside newer subdivisions to the north.",
    land: "The city fronts Lake Ontario, with Lakeview Park's beach on the shore. Lakeside neighbourhoods see more damp air and wind than the north end.",
    route: "We reach Oshawa by the 401 or the 407, with the 412 and 418 linking them.",
  },
  clarington: {
    growth: "Clarington is made up of Bowmanville, Courtice, Newcastle and Orono, with rural areas in between. It grew 10% from 2016 to 2021 to over 101,000 people, with most new homes going up in Bowmanville and Courtice.",
    land: "Lake Ontario moderates winters along the shore near Darlington, while the northern villages are colder and more exposed.",
    route: "Highway 401 crosses the whole municipality, and the 418 links it to the 407. Highways 35 and 115 start at the 401 in Newcastle.",
  },
  uxbridge: {
    growth: "Uxbridge is a rural township with about 8,300 homes, most of them in and around the town of Uxbridge. Many are older farmhouses and village homes, with newer subdivisions on the edges of town.",
    land: "The Oak Ridges Trail runs through the township, which earned it the title Trail Capital of Canada in 2009. Hilly, open land means exposed windows and long winters.",
    route: "We drive up from Stouffville on Highway 47 into the town of Uxbridge.",
  },
};

export const CITY_TIPS: Record<string, string> = {
  "toronto": "Older Toronto houses often have non-standard window sizes, so we measure every piece on site rather than guess from a photo.",
  "north-york": "If your home backs onto a ravine, check the rear windows first each spring. That is where fog and soft wood show up earliest.",
  "scarborough": "Townhouse complexes here often had every window installed the same year. When one unit fogs, the neighbours usually follow within a few years.",
  "etobicoke": "Lakeshore homes in Mimico and Long Branch take damp air off the lake, so their south-facing seals tend to go first. A quick check every few years catches it early.",
  "mississauga": "Erin Mills and Meadowvale homes from the 1970s and 1980s are often on their second set of windows, and those are now reaching the age for new seals and cranks.",
  "brampton": "Newer Brampton homes come with builder-grade hardware. Cranks and patio rollers are usually the first things to wear out, well before the glass.",
  "oakville": "In Old Oakville, check heritage rules before changing the look of a front door or window. Glass-only repairs inside the existing frame rarely need approval.",
  "burlington": "Homes near the escarpment take strong westerly winds. Tight-closing cranks and good weatherstripping make a noticeable difference there in winter.",
  "hamilton": "Lower-city homes often have old wood sashes. Many can keep their frames with new glass and hardware instead of full replacement.",
  "milton": "Most Milton homes are new enough that a foggy unit is often still under the builder or manufacturer warranty, so check your paperwork before paying for glass.",
  "halton-hills": "Georgetown and Acton homes on open lots get full sun on the south side, which is usually the first place sealed units fail.",
  "vaughan": "Many Vaughan subdivisions were built in the same few years, so if one window fails, plan to check the others on that wall too.",
  "woodbridge": "Custom homes in Woodbridge often have oversized windows and doors, so parts are ordered to size rather than taken off the shelf.",
  "maple": "Builder-grade casements in Maple subdivisions are now around 20 years old, which is right when cranks and hinges start to give out.",
  "king-city": "On larger rural lots, windows face open wind and snow from every side. A yearly look at seals and weatherstripping saves bigger repairs later.",
  "thornhill": "Thornhill homes from the 1960s and 1970s are often on their second or third set of windows, and the hardware on those is usually the weak point now.",
  "richmond-hill": "Homes on the Oak Ridges Moraine sit higher and colder. Watch for condensation on the inside of the glass, which points to humidity, not a failed seal.",
  "markham": "If several windows in your Markham home were installed together, one failed seal is often an early warning for the rest.",
  "stouffville": "Brand new homes still need care: adjusting a sliding door or a stiff crank early keeps it from wearing out.",
  "aurora": "In Old Aurora's heritage district, keep the original look of doors and windows. Replacing only the glass is often the easiest way to stay within the rules.",
  "newmarket": "Homes near the Holland River sit in lower, damper ground. Good ventilation indoors cuts down on window condensation in winter.",
  "east-gwillimbury": "With so many brand new homes, most problems we see here are adjustments: doors that stick, cranks that bind, and seals that were never set right.",
  "georgina": "Converted cottages often have thin, old glass. New sealed units in the existing frames make a big difference in a Lake Simcoe winter.",
  "bradford": "Wind across the open marsh land is hard on doors. Check that storm and patio doors close and latch fully before winter.",
  "innisfil": "If your home started as a cottage, its windows may not be built for winter. New sealed glass in the existing frame is often the cheapest upgrade.",
  "barrie": "With close to three metres of snow a year, keep snow cleared off low windows and skylights. Melt and refreeze around the frame is hard on seals.",
  "orangeville": "At Orangeville's elevation, winters are colder and longer than in the city. Upgrading to Low-E glass when a unit fails is worth considering.",
  "caledon": "Century farmhouses and newer estate homes need very different parts. Send us a photo first so we bring the right ones.",
  "pickering": "Homes near Frenchman's Bay deal with damp lake air. If a south or east window fogs, check the others facing the water.",
  "ajax": "Many Ajax homes are from the 1970s and early 1980s and may still have original aluminum-spacer glass, which often leaves condensation along the bottom edge.",
  "whitby": "Newer homes up near Brooklin face open fields, so drafty doors and loose cranks are the most common complaints there.",
  "oshawa": "Older Oshawa homes near the core often have original wood windows that can be saved with new glass and hardware.",
  "clarington": "Bowmanville and Courtice have many newer homes, while Newcastle and Orono have older ones. The repair depends a lot on which part of Clarington you are in.",
  "uxbridge": "Older farmhouses and village homes in Uxbridge often have unusual window sizes, so we measure everything on site."
};

export function getCityArea(slug: string): CityArea | undefined {
  const a = CITY_AREA[slug];
  return a ? { ...a, tip: CITY_TIPS[slug] } : undefined;
}
