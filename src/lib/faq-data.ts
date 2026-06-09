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
        q: "How much does foggy window repair cost in Toronto?",
        a: "Foggy window repair is significantly more affordable than full window replacement - you're paying for just the sealed glass unit and a quick install rather than replacing the entire frame and hardware. The actual cost depends on glass size, type (double or triple pane), and accessibility. LuminaSky provides free quotes - most jobs can be priced from a few photos.",
      },
      {
        q: "Foggy glass repair vs full window replacement - which is right for me?",
        a: "Choose foggy glass repair when the frame is still in good shape and only the sealed glass unit has failed - it keeps your existing frame, sash, and hardware, which makes it a much more affordable option. Choose full replacement when the frame is rotted, severely outdated, or you're upgrading multiple windows for energy efficiency.",
      },
    ],
  },
  {
    title: "Services & Process",
    items: [
      {
        q: "Can foggy windows be fixed without replacing the whole window?",
        a: "Yes. In most cases we replace only the sealed glass unit (the foggy pane itself) while keeping your existing frame, sash, and hardware intact. It's a faster and less invasive process than a full window replacement.",
      },
      {
        q: "What causes condensation between window panes?",
        a: "Foggy windows happen when the seal around the insulated glass unit (IGU) fails, letting moisture get trapped between the panes. Common causes include age, extreme temperature swings, and original manufacturing issues. Once the seal breaks, the fog won't clear on its own - the unit needs to be replaced.",
      },
      {
        q: "How long does foggy glass repair take?",
        a: "The on-site work is usually quick - far less disruption than a full window replacement. After measurements are confirmed, the replacement glass unit needs to be ordered and produced. We'll give you a clear timeline based on your specific glass once we've assessed it.",
      },
      {
        q: "Do you repair window cranks and hardware?",
        a: "Yes. We replace and repair window cranks (operators), locks, hinges, and tilt mechanisms. Crank repair is one of the simpler fixes we offer and can extend the useful life of an otherwise solid window.",
      },
      {
        q: "Can you repair patio door glass?",
        a: "Yes. We replace foggy, cracked, or shattered glass in sliding and French patio doors. Once the replacement glass is ready, installation is straightforward.",
      },
    ],
  },
  {
    title: "Emergency & Service Areas",
    items: [
      {
        q: "Do you offer emergency glass repair services in the GTA?",
        a: "Yes. LuminaSky offers 24/7 emergency response for broken windows and doors across the GTA. We can secure your opening with a board-up and then return to install permanent replacement glass once it's ready.",
      },
      {
        q: "What areas in the GTA do you service?",
        a: "LuminaSky serves the entire Greater Toronto Area, including Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, and surrounding municipalities. Get in touch to confirm availability for your specific location.",
      },
    ],
  },
  {
    title: "Trust & Warranty",
    items: [
      {
        q: "Are you licensed and insured in Ontario?",
        a: "Yes. LuminaSky is fully licensed and insured in Ontario, with liability coverage and WSIB. We're happy to provide documentation on request - especially for commercial clients and property managers.",
      },
      {
        q: "Do you offer warranties on glass repair?",
        a: "Yes. Our sealed glass unit replacements come with a manufacturer's warranty against seal failure, and our workmanship is guaranteed. Specific terms vary based on the supplier and the type of repair - we'll walk you through the details before any work starts.",
      },
      {
        q: "How do I get a quote for window or glass repair?",
        a: "Call 437-344-8490, email Service@Luminasky.com, or fill out the contact form on the website. Most jobs can be quoted from photos. Larger or commercial projects may need a free on-site visit.",
      },
    ],
  },
];

/** All FAQs flattened into a single array */
export const ALL_FAQS: FAQItem[] = FAQ_CATEGORIES.flatMap((c) => c.items);

/** First 5 high-value FAQs for the homepage section */
export const HOMEPAGE_FAQS: FAQItem[] = ALL_FAQS.slice(0, 5);
