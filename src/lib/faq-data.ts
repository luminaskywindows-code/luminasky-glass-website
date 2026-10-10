export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    title: "Pricing & Cost",
    items: [
      {
        q: "How much does a window repair cost?",
        a: "It depends on the part and the type of repair. Send us a photo for a free quote, or book a $30 site visit that gets credited toward your repair. You always receive a written price before any work starts, so there are no surprises.",
      },
      {
        q: "Is there a service call fee and is it credited?",
        a: "We offer free photo quotes for most jobs. If a site visit is needed, the fee is $30, and it is fully credited toward the repair if you go ahead. You get a written price before anything is done.",
      },
      {
        q: "Will I get a price before work starts?",
        a: "Yes, always. We provide a written price before any work begins. Nothing is done without your approval. No surprises at the door.",
      },
      {
        q: "Foggy glass repair vs full window replacement: which is right for me?",
        a: "Choose foggy glass repair when the frame is still in good shape and only the sealed glass unit has failed. It keeps your existing frame, sash, and hardware, which makes it a much more affordable option. Choose full replacement when the frame is rotted, severely outdated, or you are upgrading multiple windows for energy efficiency.",
      },
    ],
  },
  {
    title: "Repairs & Process",
    items: [
      {
        q: "Can you repair my window instead of replacing it?",
        a: "Yes. If a repair is enough, we say so. We only recommend replacement when a part truly cannot be fixed. Most window hardware issues, including cranks, hinges, locks, and handles, can be repaired or replaced without touching the frame.",
      },
      {
        q: "Do you repair windows you didn't install?",
        a: "Yes. We repair windows regardless of who installed them. If the hardware is discontinued, we source compatible replacements or custom-fit alternatives. Brand does not matter.",
      },
      {
        q: "Can you fix it on the first visit?",
        a: "Most window hardware repairs, including cranks, hinges, locks, and handles, are completed on the same day, on the first visit. Glass work is different: the glass is measured first, custom-made, then installed on a second visit.",
      },
      {
        q: "Can foggy windows be fixed without replacing the whole window?",
        a: "Yes. In most cases we replace only the sealed glass unit (the foggy pane itself) while keeping your existing frame, sash, and hardware intact. It is a faster and less invasive process than a full window replacement.",
      },
      {
        q: "What causes condensation between window panes?",
        a: "Foggy windows happen when the seal around the insulated glass unit (IGU) fails, letting moisture get trapped between the panes. Common causes include age, temperature swings, and manufacturing issues. Once the seal breaks, the fog will not clear on its own. The unit needs to be replaced.",
      },
      {
        q: "Why is my window foggy? Do I need a new window?",
        a: "A foggy window usually means the sealed glass unit has failed, not the entire window. In most cases, we replace just the glass unit and keep your existing frame. You do not need a full window replacement unless the frame itself is damaged.",
      },
      {
        q: "My sliding door came off the track. Can it be fixed?",
        a: "Yes. A sliding door off the track is one of the most common calls we get. We realign the door, inspect the rollers and track for damage, and replace any worn parts so the door glides smoothly and locks securely.",
      },
      {
        q: "How long does foggy glass repair take?",
        a: "The on-site installation is usually quick. After measurements are confirmed, the replacement glass unit needs to be ordered and produced. We give you a clear timeline based on your specific glass once we have assessed it.",
      },
      {
        q: "Do you repair window cranks and hardware?",
        a: "Yes. We replace and repair window cranks (operators), locks, hinges, and tilt mechanisms. Most hardware repairs are completed same day, on the first visit.",
      },
      {
        q: "Can you repair patio door glass?",
        a: "Yes. We replace foggy, cracked, or shattered glass in sliding and French patio doors. Once the replacement glass is ready, installation is straightforward.",
      },
    ],
  },
  {
    title: "Specialty & Condo",
    items: [
      {
        q: "What if my window hardware is discontinued?",
        a: "We specialize in sourcing compatible replacements for discontinued hardware. If an exact match is not available, we custom-fit a modern alternative that works with your existing window. Brand and age do not matter.",
      },
      {
        q: "Do you service condos and high-rise buildings?",
        a: "Yes. We service condos and high-rise buildings on any floor. We carry specialty crank operators and hinge systems common in condo windows. We coordinate with property management and follow building access procedures.",
      },
    ],
  },
  {
    title: "Trust & Warranty",
    items: [
      {
        q: "What does your warranty cover?",
        a: "Window hardware repairs are covered for 1 year on parts and labour. Sealed glass units carry a 3-year warranty against fogging and seal failure, and 1 year on breakage. Full details are printed on your invoice.",
      },
      {
        q: "What happens if something breaks during the repair?",
        a: "If glass breaks during our work, we order a new one right away and replace it at no cost to you. We photograph the window's condition before we start so there is a clear record.",
      },
      {
        q: "Are you licensed and insured in Ontario?",
        a: "Yes. LuminaSky is fully licensed and insured in Ontario, with liability coverage and WSIB. We are happy to provide documentation on request, especially for commercial clients and property managers.",
      },
      {
        q: "Do you offer warranties on glass repair?",
        a: "Yes. Sealed glass unit replacements carry a 3-year warranty against fogging and seal failure, and 1 year on breakage. Window hardware repairs are warranted for 1 year on parts and labour.",
      },
    ],
  },
  {
    title: "Availability & Service Areas",
    items: [
      {
        q: "Are you available evenings and weekends?",
        a: "Yes. LuminaSky is available 24 hours a day, 7 days a week, including evenings, weekends, and holidays. For emergencies, we can secure your opening right away and return to install permanent glass once it is ready.",
      },
      {
        q: "Do you offer emergency glass repair services in the GTA?",
        a: "Yes. LuminaSky is available 24/7 for both emergency and scheduled repairs across the GTA. For emergencies, we can secure your opening with a board-up and then return to install permanent replacement glass once it is ready.",
      },
      {
        q: "What areas in the GTA do you service?",
        a: "LuminaSky serves the entire Greater Toronto Area, including Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Etobicoke, North York, Scarborough, Thornhill, Woodbridge, Aurora, Newmarket, and surrounding municipalities. Get in touch to confirm availability for your specific location.",
      },
      {
        q: "How do I get a quote for window or glass repair?",
        a: "Call 437-344-8490, email Service@Luminasky.com, or fill out the contact form on the website. Most jobs can be quoted from photos. If a site visit is needed, it is $30 and gets credited toward the repair.",
      },
    ],
  },
];

/** All FAQs flattened into a single array */
export const ALL_FAQS: FAQItem[] = FAQ_CATEGORIES.flatMap((c) => c.items);

/** First 5 high-value FAQs for the homepage section */
export const HOMEPAGE_FAQS: FAQItem[] = ALL_FAQS.slice(0, 5);
