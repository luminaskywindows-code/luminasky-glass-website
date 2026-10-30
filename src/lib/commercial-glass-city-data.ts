import { CITY_PAGES } from "./city-pages-data";

function getNeighborhoods(slug: string): string[] {
  const city = CITY_PAGES.find((c) => c.slug === slug);
  return city ? city.neighborhoods : [];
}

export interface CommercialGlassCityPageData {
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

export const COMMERCIAL_GLASS_CITY_PAGES: CommercialGlassCityPageData[] = [
  {
    slug: "toronto",
    city: "Toronto",
    region: "Toronto",
    metaTitle: "Commercial Glass Repair Toronto | Storefronts & Doors | LuminaSky",
    metaDescription:
      "Commercial glass repair in Toronto. Storefront glass, door glass, office partitions and emergency board-up. 24/7 response.",
    intro:
      "Toronto's commercial corridors keep us busy year-round. Storefronts along Queen West, Dundas, Bloor and the Danforth need glass replaced after break-ins, accidents or seal failures. Office buildings downtown need lobby glass and partition repairs. Restaurants and cafes need door glass that took a hit from a delivery cart or a kicked-in panel. We handle all of it, with 24/7 emergency board-up when a window or door can't wait.",
    uniqueContent:
      "Queen West and Ossington have older storefronts with large single-pane display windows that crack from settling or impact. The Danforth and Greektown have a mix of older and renovated storefronts where the glass sizes are non-standard and need custom cutting. Kensington Market and Chinatown have narrow storefronts with glass right up to the sidewalk, which makes them vulnerable to pedestrian and cyclist impacts. Financial district office towers need lobby glass and revolving door panel replacements. We board up broken storefronts the same day and measure for the permanent glass on the same visit so there's minimal time with plywood up.",
    neighborhoods: getNeighborhoods("toronto"),
    citySpecificFaq: {
      q: "How fast can you board up a broken storefront in Toronto?",
      a: "We respond to emergency calls 24/7 and aim to be on site as fast as possible. We clean up the broken glass, board up the opening, and measure for the replacement glass on the same visit.",
    },
  },
  {
    slug: "mississauga",
    city: "Mississauga",
    region: "Peel Region",
    metaTitle: "Commercial Glass Repair Mississauga | LuminaSky Glass Services",
    metaDescription:
      "Commercial glass repair in Mississauga. Storefront glass, commercial door glass, office glass and emergency board-up service.",
    intro:
      "Mississauga has a dense concentration of commercial and retail space, from the plazas along Dundas and Hurontario to the office parks near the airport and the retail strips in Port Credit and Streetsville. When a storefront window breaks or a commercial door glass shatters, we board up the same day and replace the glass as soon as the new pane is ready.",
    uniqueContent:
      "The commercial plazas along Dundas Street, Hurontario and Eglinton have high foot traffic and are the most common source of storefront glass calls in Mississauga. Square One area offices and retail units need glass for everything from entrance doors to interior partitions. Port Credit restaurants and shops along Lakeshore have older storefronts with single-pane glass that cracks from thermal stress or impact. Airport-area warehouses and showrooms need large-format glass panels for display rooms and reception areas. We stock standard storefront glass sizes and custom-cut for non-standard openings.",
    neighborhoods: getNeighborhoods("mississauga"),
    citySpecificFaq: {
      q: "Do you service commercial plazas in Mississauga?",
      a: "Yes. We work with plaza owners, property managers and individual tenants across Mississauga. We can invoice the property management company or the tenant directly, whichever you prefer.",
    },
  },
  {
    slug: "vaughan",
    city: "Vaughan",
    region: "York Region",
    metaTitle: "Commercial Glass Repair Vaughan | Storefronts & Doors | LuminaSky",
    metaDescription:
      "Commercial glass repair in Vaughan. Storefront glass replacement, commercial door glass, office glass and 24/7 emergency board-up.",
    intro:
      "Vaughan's commercial areas along Highway 7, Weston Road and in Vaughan Metropolitan Centre keep growing, and so does the demand for glass repair and replacement. Retail plazas in Woodbridge and Maple, office buildings along Highway 7, and restaurants along Islington Avenue all need storefront and door glass service. We provide emergency board-up 24/7 and permanent glass replacement.",
    uniqueContent:
      "Woodbridge commercial plazas along Highway 7 and Islington Avenue have a high concentration of restaurants, salons and retail shops with large storefront windows. Vaughan Metropolitan Centre is adding new commercial space with floor-to-ceiling glass facades. Concord industrial area has showrooms and offices that need display glass and partition replacements. Maple commercial strips along Major Mackenzie have newer retail units with tempered glass doors that need replacing after break-ins or vandalism. We handle the board-up, cleanup and glass replacement as one job.",
    neighborhoods: getNeighborhoods("vaughan"),
    citySpecificFaq: {
      q: "Do you work with insurance companies on commercial glass claims in Vaughan?",
      a: "Yes. We provide the documentation your insurance company needs: photos, measurements, an itemized invoice, and a description of the damage. We deal with this regularly for break-in claims.",
    },
  },
  {
    slug: "markham",
    city: "Markham",
    region: "York Region",
    metaTitle: "Commercial Glass Repair Markham | LuminaSky Glass Services",
    metaDescription:
      "Commercial glass repair in Markham. Storefront windows, commercial doors, office glass and emergency board-up. Fast response.",
    intro:
      "Markham's commercial areas along Highway 7, Markville and in the older downtown core all rely on glass storefronts and entry doors. When glass breaks from a break-in, an accident or simple wear, we board up the opening, clean up the debris, and replace the glass. Most commercial glass jobs in Markham are completed within days of the initial call.",
    uniqueContent:
      "Highway 7 between Warden and McCowan has one of the highest densities of commercial storefronts in York Region. The restaurants, clinics and retail shops along this corridor call us for everything from cracked display windows to shattered door glass. Markville area has retail plazas with large glass facades. Downtown Markham along Main Street has heritage-style storefronts with larger single-pane windows. Pacific Mall and Market Village area has smaller retail units with glass doors that take heavy daily traffic. We carry tempered safety glass in standard commercial door and storefront sizes for faster turnaround.",
    neighborhoods: getNeighborhoods("markham"),
    citySpecificFaq: {
      q: "Can you match the existing glass in a Markham storefront?",
      a: "Yes. We match the glass type, thickness and tint of the existing panes so the replacement blends in with the rest of the storefront. For tinted or low-e glass, we order to match.",
    },
  },
  {
    slug: "brampton",
    city: "Brampton",
    region: "Peel Region",
    metaTitle: "Commercial Glass Repair Brampton | Storefronts & Doors | LuminaSky",
    metaDescription:
      "Commercial glass repair in Brampton. Storefront glass, door glass, plaza glass and emergency board-up. Available 24/7.",
    intro:
      "Brampton's commercial plazas are spread across the city, from Queen Street and Main Street in the core to newer retail along Bovaird, Williams Parkway and Countryside Drive. Break-ins, vandalism and accidental damage keep us busy with storefront and door glass replacements. We board up broken glass on an emergency basis and replace it as soon as the new pane is ready.",
    uniqueContent:
      "Downtown Brampton along Queen and Main has older commercial buildings with single-pane storefront glass that's vulnerable to impact and thermal cracking. The plazas along Bovaird Drive and Steeles Avenue have newer retail units with tempered glass doors and sidelites. Bramalea City Centre area has a mix of retail and office space. Industrial areas near the airport have warehouses with showroom and reception glass. We stock standard commercial glass sizes for Brampton's common storefront and door configurations, which means faster turnaround on most jobs.",
    neighborhoods: getNeighborhoods("brampton"),
    citySpecificFaq: {
      q: "Can you replace glass in a commercial plaza door in Brampton?",
      a: "Yes. We replace glass in standard commercial aluminum-frame doors, including narrow-stile and wide-stile doors. We also replace the closer and hardware if needed.",
    },
  },
  {
    slug: "oakville",
    city: "Oakville",
    region: "Halton Region",
    metaTitle: "Commercial Glass Repair Oakville | LuminaSky Glass Services",
    metaDescription:
      "Commercial glass repair in Oakville. Storefront glass, commercial doors, office partitions and emergency board-up service.",
    intro:
      "Oakville's commercial areas along Lakeshore Road, Kerr Street, and in the retail plazas along Trafalgar and Dundas need glass service for storefronts, office doors and display windows. We provide emergency board-up for break-ins and accidents, and replace the glass with tempered safety glass made to size.",
    uniqueContent:
      "Lakeshore Road and Kerr Village have boutique storefronts with large display windows, often in older buildings where the glass sizes are non-standard. Trafalgar Road and Dundas Street plazas have newer retail units with standard commercial door glass. Oakville Place area has office and medical buildings with lobby glass and partition needs. The QEW-corridor office parks have reception areas with floor-to-ceiling glass panels. We custom-cut for Oakville's older commercial buildings and carry standard sizes for the newer plazas.",
    neighborhoods: getNeighborhoods("oakville"),
    citySpecificFaq: {
      q: "Do you service boutique storefronts in downtown Oakville?",
      a: "Yes. We work with many small businesses along Lakeshore and Kerr Street. We custom-cut glass for older storefront frames and match the existing glass type so the replacement looks right.",
    },
  },
  {
    slug: "hamilton",
    city: "Hamilton",
    region: "Hamilton",
    metaTitle: "Commercial Glass Repair Hamilton | Storefronts & Doors | LuminaSky",
    metaDescription:
      "Commercial glass repair in Hamilton. Storefront glass replacement, door glass, office glass and 24/7 emergency board-up.",
    intro:
      "Hamilton's commercial areas are spread from the downtown core along James and King Streets to the plazas on the Mountain and the retail strips in Dundas, Ancaster and Stoney Creek. Break-ins and accidental damage are the most common reasons for commercial glass calls. We board up broken glass the same day and replace it as quickly as the new pane can be made.",
    uniqueContent:
      "Downtown Hamilton along James Street North and King William has a mix of heritage and renovated storefronts. The heritage buildings have large single-pane windows that need careful handling. Upper James and the Mountain plazas have standard commercial glass and door configurations. Locke Street and Ottawa Street shops have smaller, character storefronts. Dundas and Ancaster have medical and professional offices that need lobby and partition glass. The industrial areas along Burlington Street and near the port have warehouses with showroom glass. We handle all of these and can board up the same day for any emergency.",
    neighborhoods: getNeighborhoods("hamilton"),
    citySpecificFaq: {
      q: "Can you replace glass in a heritage storefront in Hamilton?",
      a: "Yes. We've worked on storefronts in James Street North and other heritage areas. We match the glass thickness and type to what the building requires. If the frame needs work, we can advise on that too.",
    },
  },
  {
    slug: "north-york",
    city: "North York",
    region: "Toronto",
    metaTitle: "Commercial Glass Repair North York | LuminaSky Glass Services",
    metaDescription:
      "Commercial glass repair in North York. Storefront glass, office doors, lobby glass and emergency board-up. 24/7 service.",
    intro:
      "North York has a high concentration of commercial space along Yonge Street, in the office towers near Sheppard and Finch, and in the retail plazas throughout the area. Storefront glass, commercial door glass and office partition repairs are regular calls for us. We respond to emergencies 24/7 and replace glass as soon as the new pane is ready.",
    uniqueContent:
      "Yonge and Sheppard, Yonge and Finch, and the North York City Centre area have office towers and retail at grade that need lobby glass, revolving door panels, and storefront replacements. The plazas along Bathurst, Wilson and Steeles have high-turnover retail units where door glass takes a lot of abuse. Bayview Village and York Mills area has upscale retail and medical office buildings. Jane and Finch and Keele and Wilson areas have older commercial plazas where the glass and frames are decades old. We handle all commercial glass sizes in North York, from small door lites to full storefront panes.",
    neighborhoods: getNeighborhoods("north-york"),
    citySpecificFaq: {
      q: "Do you replace lobby glass in North York office buildings?",
      a: "Yes. We work in office buildings across North York. We coordinate with building management for access and timing, and install the glass with minimal disruption to tenants.",
    },
  },
  {
    slug: "scarborough",
    city: "Scarborough",
    region: "Toronto",
    metaTitle: "Commercial Glass Repair Scarborough | LuminaSky Glass Services",
    metaDescription:
      "Commercial glass repair in Scarborough. Storefront windows, commercial doors, office glass and 24/7 emergency board-up.",
    intro:
      "Scarborough's commercial areas along Kingston Road, Lawrence, Eglinton and in the Golden Mile have a steady need for storefront and door glass repairs. Break-ins are the most common reason, followed by accidental damage and seal failures. We board up the same day and replace the glass as soon as it's ready.",
    uniqueContent:
      "The Golden Mile along Eglinton East has older commercial buildings with large storefront windows. Kingston Road from the Bluffs to Highland Creek has a long stretch of retail and restaurants. Lawrence Avenue East and Markham Road plazas have high foot traffic and frequent door glass replacements. Scarborough Town Centre area has office and retail units with standard commercial glass. Morningside and Sheppard area has newer retail plazas alongside older strip malls. We stock standard sizes and custom-cut for Scarborough's older commercial buildings.",
    neighborhoods: getNeighborhoods("scarborough"),
    citySpecificFaq: {
      q: "Do you offer emergency board-up for Scarborough businesses after a break-in?",
      a: "Yes. We respond 24/7 to board up broken storefronts and doors after a break-in. We clean up the glass, secure the opening with plywood, and measure for the replacement glass on the same visit.",
    },
  },
  {
    slug: "etobicoke",
    city: "Etobicoke",
    region: "Toronto",
    metaTitle: "Commercial Glass Repair Etobicoke | LuminaSky Glass Services",
    metaDescription:
      "Commercial glass repair in Etobicoke. Storefront glass, door glass, office partitions and 24/7 emergency service.",
    intro:
      "Etobicoke's commercial corridors along Bloor West, The Queensway, Dundas and in the industrial areas around Dixon Road and the airport need reliable glass service. We repair and replace storefront glass, commercial door glass, office partitions and lobby glass. Emergency board-up is available around the clock.",
    uniqueContent:
      "The Queensway and Islington area has retail plazas and auto dealerships with large display windows. Bloor West Village has boutique storefronts that need careful glass matching. Six Points and Kipling area has older commercial buildings being redeveloped. Dixon Road and the airport strip have hotels, offices and showrooms with commercial glass needs. The Stockyards and Weston Road area has a mix of retail and warehouse space. Mimico and Long Branch along Lake Shore have restaurants and shops with storefront glass. We service all of Etobicoke and carry standard commercial glass sizes for faster turnaround.",
    neighborhoods: getNeighborhoods("etobicoke"),
    citySpecificFaq: {
      q: "Can you replace display glass at an Etobicoke auto dealership?",
      a: "Yes. We replace showroom glass panels for auto dealerships and other businesses with large display windows. We custom-cut to size and use tempered safety glass as required by code.",
    },
  },
];

export function getCommercialGlassCityPageData(slug: string): CommercialGlassCityPageData | undefined {
  return COMMERCIAL_GLASS_CITY_PAGES.find((c) => c.slug === slug);
}
