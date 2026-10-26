export interface LocalCitySection {
  permits: string;
  housingStock: string;
  climate: string;
  responseTime: string;
  neighborhoods: string;
  pricingWarranty: string;
}

export interface LocalCityContent {
  city: string;
  sections: LocalCitySection;
}

const LOCAL_CONTENT: Record<string, LocalCityContent> = {
  vaughan: {
    city: "Vaughan",
    sections: {
      permits:
        "Replacing a sealed glass unit inside an existing frame does not typically require a building permit in Vaughan, because the work involves no structural change to the rough opening. Full window replacement that alters the opening size or affects egress may need a permit. If you are unsure, contact City of Vaughan Building Standards at 905-832-8510 or visit vaughan.ca for current requirements. Heritage properties in Kleinburg may have additional review requirements through the Kleinburg-Nashville Heritage Conservation District.",

      housingStock:
        "About 63% of Vaughan homes are single-detached, and much of the city was built in distinct waves. East Woodbridge and the Woodbridge core feature homes from the 1970s through 1990s, mostly with vinyl and aluminum window frames. Maple expanded through the 1990s and 2000s with vinyl-frame casement and slider windows. Vellore Village and Sonoma Heights are newer subdivisions (2000s to 2010s) with double-pane vinyl windows that are just now entering the age where seal failure begins. Kleinburg has a mix of older rural homes and newer custom builds with larger glass units.",

      climate:
        "Vaughan sits about 30 km inland from Lake Ontario, so it avoids the worst of the direct lake-effect humidity that hits lakeshore cities. Winter temperatures still drop well below freezing (January averages around -1°C high, -9°C low), and daily freeze-thaw cycling is the primary driver of seal failure in this area. South-facing windows absorb hours of direct solar heat, expanding and contracting the glass throughout the day. Summer humidity in the 60% to 80% range works moisture into aging perimeter seals over time.",

      responseTime:
        "LuminaSky is based in Thornhill, right on the Vaughan border. Our team can reach central Vaughan (Jane and Rutherford area) in about 15 to 20 minutes during business hours. Woodbridge core is roughly 20 minutes away, and Kleinburg about 25 minutes. Vaughan is one of our fastest service areas.",

      neighborhoods:
        "We serve all of Vaughan, including Woodbridge, Maple, Kleinburg, Concord, Vellore Village, Sonoma Heights, Patterson, Brownridge, and West Woodbridge. Whether you are in a mature neighborhood near Islington and Highway 7 or a newer development north of Major Mackenzie, our technicians cover the entire city.",

      pricingWarranty:
        "Vaughan repair pricing follows our standard GTA rates. Sealed glass unit replacements typically range from $300 to $1,400 depending on size, glass type, and accessibility. Every sealed glass unit we install carries a 5-year warranty against seal failure. All repair work (hardware, cranks, screens) is covered by a 2-year warranty on parts and labour.",
    },
  },

  toronto: {
    city: "Toronto",
    sections: {
      permits:
        "Replacing a sealed glass unit inside an existing frame does not require a building permit in Toronto. The glass swap involves no structural change, so the Ontario Building Code permit requirements do not apply. Full window replacement in a single-family, semi-detached, or row house also does not require a permit, as long as the opening size and location stay the same. In multi-unit residential buildings (condos, apartments), a permit is required for full window replacement. Condo boards typically require approval before any exterior work, and some buildings maintain preferred vendor lists. Heritage-designated properties may need separate heritage approval even for like-for-like replacements. Contact 311 or visit toronto.ca for details.",

      housingStock:
        "Toronto's housing stock is the most diverse in the GTA. Pre-1920 Victorians in Cabbagetown and Parkdale often have wood-frame windows with single or early double-pane glass. Brick row houses from the 1920s through 1940s in East York and Leaside commonly feature aluminum or wood frames. Mid-century bungalows across Scarborough and North York were built with aluminum-frame sliders and casements. Post-1970s subdivisions and townhome complexes use vinyl frames almost universally. Toronto's high-rise inventory adds another dimension: condo glass on upper floors may require swing-stage or crane access for replacement, which affects scheduling and cost.",

      climate:
        "Lake Ontario has a direct effect on Toronto's climate. Lakeshore neighborhoods (the Beaches, Mimico, the Harbourfront) experience sustained humidity that accelerates seal degradation, especially on south-facing and west-facing windows. Winter freeze-thaw cycles are severe: daily temperature swings of 15 to 20 degrees Celsius are common between January and March, expanding and contracting sealed units repeatedly. South-facing windows in neighborhoods like Cabbagetown and the Danforth absorb direct solar heat for hours each day, which speeds argon loss from the sealed cavity.",

      responseTime:
        "From our Thornhill base, we reach North York (Yonge and Sheppard area) in about 15 to 25 minutes during business hours. Midtown Toronto (Yonge and Eglinton) is roughly 25 to 35 minutes. Downtown Toronto takes 30 to 45 minutes depending on traffic. Scarborough and Etobicoke are typically 35 to 50 minutes. We serve all six former boroughs of Toronto.",

      neighborhoods:
        "We cover all of Toronto, including North York, Scarborough, Etobicoke, East York, Downtown, Midtown, Leslieville, the Beaches, Cabbagetown, Rosedale, High Park, Liberty Village, Parkdale, Leaside, the Danforth, and Forest Hill. Whether you are in a detached home or a condo unit, we bring the same tools and the same service.",

      pricingWarranty:
        "Toronto pricing follows our standard GTA rates for most homes. Condo and high-rise units on upper floors may require swing-stage or crane access, which adds to the cost. Sealed glass unit replacements typically range from $300 to $1,400 for standard residential jobs. Every sealed glass unit we install carries a 5-year warranty against seal failure. All repair work carries a 2-year warranty on parts and labour.",
    },
  },

  mississauga: {
    city: "Mississauga",
    sections: {
      permits:
        "Replacing a sealed glass unit inside an existing frame generally does not require a building permit in Mississauga, because the work does not alter the structure or the rough opening. Full window replacement that changes the opening size may require a permit. Heritage-designated properties in areas like Old Port Credit may have additional requirements through Heritage Mississauga. If you are unsure, contact the City of Mississauga Building Division at 905-615-4311 or visit mississauga.ca for current guidelines.",

      housingStock:
        "Mississauga's residential building boom peaked between the mid-1970s and the late 1990s. Over 27,000 single and semi-detached homes were built in the 1980s alone. Neighborhoods like Erin Mills, Meadowvale, and Rathwood feature homes from this era with vinyl-frame casement and slider windows. The vinyl frames in these homes are typically still in solid condition, but the sealed glass units inside are reaching end of life after 25 to 40 years. Churchill Meadows and Lisgar are newer (late 1990s to 2000s). Port Credit and Lorne Park have older housing stock with some wood and aluminum frames. The City Centre area around Square One has high-rise condos from the 2000s onward.",

      climate:
        "Southern Mississauga sits directly on Lake Ontario. Neighborhoods like Port Credit, Lorne Park, and Clarkson experience higher humidity from the lake, which accelerates the breakdown of window perimeter seals over time. Farther north in Meadowvale and Churchill Meadows, the lake effect is less pronounced, but winter freeze-thaw cycles still stress sealed glass units through repeated expansion and contraction. South-facing and west-facing windows across the city absorb sustained solar heat in summer, which speeds argon loss from the sealed cavity.",

      responseTime:
        "Mississauga is about 35 to 40 km from our Thornhill base. During business hours, we typically reach central Mississauga (Square One area) in 35 to 50 minutes via Highway 407, or 45 to 60 minutes via Highway 401 depending on traffic. Off-peak, the drive is closer to 30 minutes. We schedule Mississauga appointments in clusters to keep response times efficient.",

      neighborhoods:
        "We serve all of Mississauga, including Port Credit, Streetsville, Erin Mills, Clarkson, Meadowvale, Churchill Meadows, Cooksville, Lorne Park, Mineola, City Centre, Rathwood, Mississauga Valleys, Malton, and Lisgar. From lakeshore condos in Port Credit to subdivision homes in Meadowvale, we cover the entire city.",

      pricingWarranty:
        "Mississauga repair pricing follows our standard GTA rates. Sealed glass unit replacements typically range from $300 to $1,400 depending on size, glass type, and accessibility. Every sealed glass unit we install carries a 5-year warranty against seal failure. All repair work (hardware, cranks, screens) is covered by a 2-year warranty on parts and labour.",
    },
  },
};

export function getLocalCityContent(
  slug: string
): LocalCityContent | undefined {
  return LOCAL_CONTENT[slug];
}
