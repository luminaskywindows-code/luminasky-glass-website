export interface ServiceData {
  slug: string;
  /** URL path for this service page (defaults to `/${slug}` if omitted) */
  urlPath?: string;
  title: string;
  shortTitle?: string;
  heroHeadline: string;
  heroSubtext: string;
  heroImage?: { src: string; alt: string };
  description: string[];
  benefits: string[];
  photos?: { src: string; alt: string; caption?: string }[];
  showcaseImage?: { src: string; alt: string };
  beforeAfterImages?: {
    title: string;
    subtitle: string;
    before: { src: string; alt: string; badge: string; heading: string; caption: string };
    after: { src: string; alt: string; badge: string; heading: string; caption: string };
    emergencyCTA?: { heading: string; body: string };
  };
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
  relatedServices: string[];
  heroCTA?: { primary: string; primaryHref: string };
  midPageCTA?: { text: string; buttonLabel: string; buttonHref: string };
}

export const FOGGY_WINDOWS: ServiceData = {
  slug: "foggy-windows",
  title: "Foggy Glass Repair",
  heroHeadline: "Clear Up Foggy Glass - Without Replacing the Frame",
  heroSubtext:
    "Condensation and cloudiness between glass panes means your window seal has failed. We replace just the glass unit, saving you up to 80% vs. full replacement.",
  heroImage: {
    src: "/images/services/foggy-window-real.jpg",
    alt: "Real foggy window with condensation between panes - failed seal captured on-site",
  },
  photos: [
    {
      src: "/images/services/foggy-leaded-glass.jpg",
      alt: "Double front doors with leaded art deco glass showing haziness and fogging between the panes - seal failure",
      caption: "Foggy/hazy leaded glass doors - the seal has broken and moisture is trapped inside the unit",
    },
    {
      src: "/images/services/foggy-window-condensation.jpg",
      alt: "Interior view of double-pane windows with heavy condensation and water droplets trapped between panes",
      caption: "Heavy condensation between panes - a clear sign the IGU seal has failed",
    },
  ],
  description: [
    "Foggy or cloudy windows happen when the hermetic seal around your insulated glass unit (IGU) breaks down. Moisture seeps between the panes, causing condensation, haze, and reduced insulation - making your home less comfortable and your heating bills higher.",
    "LuminaSky Glass Services specializes in glass unit replacement. We remove the failed glass insert and install a new sealed unit, leaving your existing frame completely intact. Installation takes under an hour per window.",
    "We serve homeowners and property managers across the GTA. Glass is measured first, custom-made, then installed, typically within 5 to 15 business days. Every replacement comes with a warranty.",
  ],
  benefits: [
    "Save 60–80% versus replacing the entire window and frame",
    "Fast turnaround: measured, made and installed within days",
    "Crystal-clear results - restores full visibility and insulation",
    "No mess - we vacuum and clean up after every job",
    "Warranty on all glass unit replacements",
    "Works with all window styles: casement, slider, fixed, bay",
  ],
  process: [
    {
      step: "Free Assessment",
      desc: "We assess the fogging severity and measure the glass unit to confirm we can repair - not replace.",
    },
    {
      step: "Clear Quote",
      desc: "You get a firm, written price upfront before any work begins. No surprises at the door.",
    },
    {
      step: "Glass Removal",
      desc: "We carefully remove the failed glass unit from your existing frame, protecting trim and sills.",
    },
    {
      step: "New Unit Installed",
      desc: "A new sealed insulated glass unit is installed and sealed for maximum energy efficiency.",
    },
    {
      step: "Cleanup & Warranty",
      desc: "We clean up completely and provide your written warranty before we leave.",
    },
  ],
  faqs: [
    {
      q: "Can all foggy windows be repaired without replacing the frame?",
      a: "In 95% of cases, yes. As long as the frame itself is structurally sound, we can replace just the glass unit. We'll confirm this during our free assessment.",
    },
    {
      q: "How long does a foggy window repair take?",
      a: "Most repairs take 30–60 minutes per window. Multiple windows can typically be done in a single visit.",
    },
    {
      q: "Will my new glass be energy efficient?",
      a: "Yes. We install argon-filled, low-E coated glass units that meet or exceed Ontario building code energy requirements.",
    },
    {
      q: "Do you warranty the repair?",
      a: "Yes. All glass unit replacements come with a written warranty against seal failure.",
    },
    {
      q: "Can you match my existing glass type (frosted, tinted, etc.)?",
      a: "In most cases, yes. We carry a range of glass options including clear, privacy frosted, tinted, and decorative patterns.",
    },
  ],
  metaTitle: "Foggy Glass Repair Toronto",
  metaDescription:
    "Foggy or cloudy windows? LuminaSky Glass Services repairs failed glass seals across the Greater Toronto Area. Save vs. full replacement. Call 437-344-8490.",
  relatedServices: [
    "front-door-glass",
    "window-cranks",
    "skylights",
  ],
};


export const FRONT_DOOR_GLASS: ServiceData = {
  slug: "front-door-glass",
  title: "Front Door Glass Replacement",
  heroHeadline: "Transform Your Entrance with Beautiful New Door Glass",
  heroSubtext:
    "Cracked, foggy, or outdated front door glass? We replace glass inserts and sidelite panels for all door styles - decorative, frosted, clear, and more.",
  heroImage: {
    src: "/images/services/foggy-leaded-glass.jpg",
    alt: "Double front doors with decorative iron scrollwork glass inserts installed by LuminaSky Glass Services",
  },
  photos: [
    {
      src: "/images/services/foggy-leaded-glass.jpg",
      alt: "Double front doors with decorative wrought iron scrollwork glass inserts installed by LuminaSky Glass Services",
      caption: "Double doors with custom decorative iron scrollwork glass",
    },
    {
      src: "/images/services/front-door-decorative-2.jpg",
      alt: "Double front doors with art deco leaded glass inserts featuring elegant arched design",
      caption: "Art deco leaded glass inserts - full double door replacement",
    },
  ],
  description: [
    "Your front door is the first thing guests and potential buyers see. Cracked, foggy, or outdated glass inserts can make a home look neglected - and compromise security and insulation.",
    "LuminaSky Glass Services replaces glass inserts in all types of front doors: single doors, double doors, doors with sidelites, and transom windows above the door. We carry decorative, frosted, privacy, and clear glass options.",
    "Our technicians work quickly and cleanly, and most replacements are completed in a single visit. Same-day service is available for urgent repairs.",
  ],
  benefits: [
    "Wide selection: decorative, frosted, clear, privacy, and patterned glass",
    "Fits all door brands and styles - no door replacement needed",
    "Improves curb appeal and first impressions immediately",
    "Restores energy efficiency and security",
    "Sidelites and transom windows also serviced",
    "Same-day service available",
  ],
  process: [
    {
      step: "Consultation",
      desc: "We discuss your style preferences and measure the existing glass insert or opening.",
    },
    {
      step: "Glass Selection",
      desc: "Choose from our range of decorative, frosted, clear, and privacy glass options.",
    },
    {
      step: "Removal",
      desc: "The old or damaged glass insert is carefully removed without damaging the door or frame.",
    },
    {
      step: "Installation",
      desc: "Your new glass panel is installed and sealed for a weather-tight, secure fit.",
    },
    {
      step: "Final Inspection",
      desc: "We inspect the installation and clean up before leaving you with a renewed entrance.",
    },
  ],
  faqs: [
    {
      q: "Can you match my existing decorative glass pattern?",
      a: "We carry a wide range of decorative patterns. In most cases we can find a very close match, or offer an upgrade to a similar style.",
    },
    {
      q: "Do you replace sidelite glass too?",
      a: "Yes. Sidelite panels (the narrow windows beside the door) and transom windows above the door are all within our scope.",
    },
    {
      q: "Is this safer than a full door replacement?",
      a: "Glass replacement preserves your existing door frame and hardware - which is often the more secure and cost-effective option if the door structure is sound.",
    },
    {
      q: "How long does the job take?",
      a: "Most single door glass replacements take 45–90 minutes.",
    },
  ],
  beforeAfterImages: {
    title: "Emergency Door Glass Replacement",
    subtitle: "From break-in damage to fully restored security - same-day service available across the GTA.",
    before: {
      src: "/images/services/door-after-repaired.jpg",
      alt: "Shattered commercial front door glass after break-in - glass everywhere, security compromised",
      badge: "Before - Emergency Call",
      heading: "Shattered Glass After Break-In",
      caption: "Business called us at night for emergency board-up and glass replacement. Security compromised, glass everywhere, urgent response needed.",
    },
    after: {
      src: "/images/services/door-before-broken.jpg",
      alt: "Fully restored commercial front door with new tempered glass installed by LuminaSky Glass Services",
      badge: "After - Fully Restored",
      heading: "New Tempered Glass, Security Restored",
      caption: "Same location, next day. Emergency board-up within 2 hours, permanent glass replacement installed the following morning. Business back to normal.",
    },
    emergencyCTA: {
      heading: "Available 24/7, Any Day, Any Time",
      body: "We respond within 2 hours for emergency board-ups across the GTA. Permanent glass replacement scheduled for next-day installation.",
    },
  },
  metaTitle: "Front Door Glass Replacement Toronto",
  metaDescription:
    "Replace cracked or foggy front door glass inserts across the Greater Toronto Area. Decorative, frosted & clear glass. LuminaSky Glass Services - Call 437-344-8490.",
  relatedServices: [
    "foggy-windows",
    "window-cranks",
    "screen-storm-doors",
  ],
};

export const WINDOW_CRANKS: ServiceData = {
  slug: "window-cranks",
  urlPath: "/cranks",
  title: "Window Crank Repair",
  heroHeadline: "Fix Stiff, Broken, or Missing Window Cranks Fast",
  heroSubtext:
    "Casement and awning window cranks wear out over time. We repair or replace crank operators, handles, and espagnolette hardware - without replacing the window.",
  heroImage: {
    src: "/images/services/window-crank-door.jpg",
    alt: "Old worn window crank operator and espagnolette hardware removed for replacement",
  },
  photos: [
    {
      src: "/images/services/window-crank-door.jpg",
      alt: "Worn casement window crank operator and broken handle alongside old espagnolette bar - all replaced by LuminaSky",
      caption: "Old worn operator, broken handle, and espagnolette bar - we replace all of it",
    },
  ],
  description: [
    "Casement and awning windows rely on a crank operator to open and close. Over time, the gear mechanism wears out, the handle snaps off, or the espagnolette locking bar stops engaging - leaving you with a window that won't open, close, or lock properly.",
    "LuminaSky Glass Services stocks a wide range of crank operators, handles, and hardware for all major window brands. In most cases we can repair or replace your window crank hardware in a single visit.",
    "A properly functioning crank is also a security issue - a window that won't lock fully leaves your home vulnerable. Don't delay a repair.",
  ],
  benefits: [
    "Restores smooth, effortless window operation",
    "Fixes windows that won't fully close or lock",
    "Compatible with all major window brands (Pella, Anderson, Milgard, and more)",
    "More affordable than full window replacement",
    "Same-day service available",
    "Improves home security by ensuring proper lock engagement",
  ],
  process: [
    {
      step: "Diagnosis",
      desc: "We identify the exact operator or hardware that has failed and confirm the correct replacement part.",
    },
    {
      step: "Part Sourcing",
      desc: "We carry a large inventory of operators and hardware for most common window brands.",
    },
    {
      step: "Removal",
      desc: "The damaged operator or handle is carefully removed without damaging the sash or frame.",
    },
    {
      step: "Installation",
      desc: "The new crank operator or handle is installed and adjusted for smooth, correct operation.",
    },
    {
      step: "Lock Test",
      desc: "We test both the opening mechanism and the locking function before completing the job.",
    },
  ],
  faqs: [
    {
      q: "My window crank spins but the window doesn't move - what's wrong?",
      a: "This usually means the gear inside the operator is stripped. The operator needs to be replaced - this is a straightforward repair we do routinely.",
    },
    {
      q: "Can you fix any brand of window?",
      a: "We work with most major brands. If you know your window brand or model, let us know when you call - we'll confirm part availability.",
    },
    {
      q: "My window won't lock fully after repair - is that fixable?",
      a: "Yes. The espagnolette locking bar or the lock strike can be adjusted or replaced to restore full locking engagement.",
    },
    {
      q: "How long does a crank repair take?",
      a: "Most crank repairs take 20–45 minutes per window.",
    },
  ],
  metaTitle: "Window Crank & Operator Repair Toronto",
  metaDescription:
    "Broken window crank or casement operator? LuminaSky Glass Services repairs and replaces window cranks across the Greater Toronto Area. Call 437-344-8490.",
  relatedServices: ["foggy-windows", "screen-storm-doors", "skylights"],
};

export const SCREEN_STORM_DOORS: ServiceData = {
  slug: "screen-storm-doors",
  title: "Screen & Storm Doors",
  heroHeadline: "Custom Screen & Storm Doors - Installed Right",
  heroSubtext:
    "Keep bugs out, let fresh air in, and add a layer of weather protection. We supply and install custom-fit screen and storm doors for any entrance.",
  heroImage: {
    src: "/images/services/storm-door-hardware.jpg",
    alt: "White full-view storm door with gold lever handle installed on a brick home in the GTA",
  },
  photos: [
    {
      src: "/images/services/storm-door-hardware.jpg",
      alt: "White aluminum-frame full-view storm door with gold lever handle - installed by LuminaSky Glass Services",
      caption: "Full-view aluminum storm door - protects your entry while keeping natural light",
    },
  ],
  description: [
    "A quality screen or storm door adds fresh air, natural ventilation, bug protection, and an additional layer of weather sealing to your home's entrance. They also add curb appeal and can improve energy efficiency.",
    "LuminaSky Glass Services supplies and installs screen doors and storm doors to fit any door opening size. We carry aluminum-framed screen doors, full-view storm doors, and combination storm/screen doors in multiple finishes.",
    "Existing torn or damaged screen panels can also be re-screened at a fraction of the cost of a full door replacement.",
  ],
  benefits: [
    "Custom sizing to fit any door opening - no gaps, no drafts",
    "Multiple finishes: white, bronze, black, mill aluminum",
    "Full-view storm doors, screen-only, and combination options",
    "Pet-resistant screening upgrade available",
    "Torn screen panels re-screened affordably",
    "Improves ventilation, energy efficiency, and curb appeal",
  ],
  process: [
    {
      step: "Measure",
      desc: "We measure your door opening precisely to ensure a perfect custom fit.",
    },
    {
      step: "Select",
      desc: "Choose your door style, screen type, and finish from our product lineup.",
    },
    {
      step: "Order",
      desc: "Your custom door is ordered or fabricated to your exact specifications.",
    },
    {
      step: "Install",
      desc: "We install the door with proper hardware, closers, and handles for smooth daily use.",
    },
    {
      step: "Adjust",
      desc: "Door closer speed and latch alignment are adjusted to your preference.",
    },
  ],
  faqs: [
    {
      q: "Can you replace just the screen in my existing door?",
      a: "Yes. We can re-screen most aluminum or wood-framed screen doors. This is often the most cost-effective option.",
    },
    {
      q: "Do you install pet screen (heavy-duty screen)?",
      a: "Yes. We offer pet-resistant screen upgrades - ideal for homes with dogs or cats.",
    },
    {
      q: "What finishes are available?",
      a: "We stock doors in white, bronze, mill aluminum, and black. Custom colors may be available on request.",
    },
    {
      q: "How long does installation take?",
      a: "A standard screen or storm door installation takes approximately 1–2 hours.",
    },
  ],
  metaTitle: "Screen & Storm Door Installation Toronto",
  metaDescription:
    "Custom screen and storm door supply and installation across the Greater Toronto Area. LuminaSky Glass Services - Call 437-344-8490.",
  relatedServices: [
    "front-door-glass",
    "window-cranks",
    "skylights",
  ],
};


export const SKYLIGHTS: ServiceData = {
  slug: "skylights",
  title: "Skylight Repair & Replacement",
  shortTitle: "Skylights",
  heroHeadline: "Skylight Leaking or Foggy? We Fix It - No Full Replacement Needed",
  heroSubtext:
    "Cracked glass, failed seals, or persistent leaks around your skylight? LuminaSky Glass Services repairs and replaces skylight glass units across the GTA.",
  heroImage: {
    src: "/images/services/skylight-foggy-before.jpg",
    alt: "Foggy skylight with heavy condensation between panes - failed seal causing fogging and reduced light",
  },
  description: [
    "Skylights are a beautiful source of natural light - but when the glass seal fails, condensation appears between the panes, or the frame develops a leak, they become a headache. LuminaSky Glass Services specializes in skylight glass replacement and leak repair without requiring a full skylight tearout.",
    "We replace the insulated glass unit (IGU) inside your existing skylight frame, restoring clarity and energy efficiency. For leaks caused by failed flashing or sealant, we diagnose and repair the source - not just patch the symptom.",
    "We service all major skylight brands including Velux, Fakro, ODL, and custom installations. Whether it's a flat roof skylight, vaulted ceiling model, or a tubular daylight device, we have the experience to fix it right.",
  ],
  benefits: [
    "Replace just the glass unit - keep the existing frame and flashing",
    "Eliminate condensation and fogging between panes",
    "Diagnose and repair leaks at the source",
    "All major skylight brands serviced - Velux, Fakro, ODL, and more",
    "Energy-efficient argon-filled, low-E replacement glass available",
    "Roof-safe installation - fully insured for at-height work",
  ],
  process: [
    {
      step: "Inspection",
      desc: "We inspect the skylight from inside and outside to identify the glass failure or leak source.",
    },
    {
      step: "Quote",
      desc: "You receive a clear, itemized quote for glass replacement or leak repair - no surprises.",
    },
    {
      step: "Glass Removal",
      desc: "The failed IGU is carefully removed from the frame without disturbing the surrounding roofing.",
    },
    {
      step: "Installation",
      desc: "A new sealed, energy-efficient glass unit is installed and fully sealed against weather.",
    },
    {
      step: "Leak Test",
      desc: "We test for leaks and confirm the repair is weathertight before completing the job.",
    },
  ],
  faqs: [
    {
      q: "My skylight is foggy - do I need to replace the whole unit?",
      a: "In most cases, no. Fogging between the panes means the glass seal has failed, but the frame is often fine. We replace just the glass insert (IGU), which is significantly cheaper.",
    },
    {
      q: "Can you fix a leaking skylight?",
      a: "Yes. We diagnose whether the leak is from the glass seal, the frame, or the surrounding flashing - and repair the actual source rather than just applying a temporary patch.",
    },
    {
      q: "Do you service Velux skylights?",
      a: "Yes. We service all major brands including Velux, Fakro, ODL, and custom installations.",
    },
    {
      q: "Is skylight work safe? Are you insured?",
      a: "Yes. LuminaSky Glass Services is fully insured for at-height work, and our technicians are experienced with roof-level installations across all residential property types.",
    },
    {
      q: "How long does a skylight glass replacement take?",
      a: "Most skylight glass replacements take 1–2 hours, depending on the unit size and accessibility.",
    },
  ],
  showcaseImage: {
    src: "/images/skylight-before-after.png",
    alt: "Skylight restoration process - Before: dirty and damaged, In Progress: technician working, After: fully restored and crystal clear",
  },
  metaTitle: "Skylight Repair & Replacement Toronto",
  metaDescription:
    "Foggy or leaking skylight? LuminaSky Glass Services repairs and replaces skylight glass units across Toronto and the GTA. All brands serviced. Call 437-344-8490.",
  relatedServices: ["foggy-windows", "front-door-glass", "screen-storm-doors"],
};

export const WINDOW_SCREENS: ServiceData = {
  slug: "window-screens",
  title: "Window & Door Screens",
  shortTitle: "Window Screens",
  heroHeadline: "Window & Door Screen Repair and Replacement",
  heroSubtext:
    "A torn screen is a small problem that ruins a whole summer. Bugs get in, pets push through, and a bent frame stops the door from sliding. We repair and replace screens for windows, sliding patio doors and entry doors across the GTA.\n\nWe measure on site, so the screen fits the opening you actually have, not the one it was supposed to have.",
  heroImage: {
    src: "/images/services/window-screens-service.jpg",
    alt: "Sliding patio door with screen door. Window and Door Screens service by LuminaSky",
  },
  description: [
    "Whether your screen has a small tear, a bent frame, or has gone missing entirely, we handle it. We re-screen existing frames, build new ones to your exact measurements, and repair sliding patio door screens that have jumped their tracks or lost their rollers.",
    "We carry multiple mesh options so you can choose what fits your situation: standard fiberglass for most homes, pet-resistant mesh for households with dogs and cats, solar mesh to cut heat on south-facing windows, and fine mesh for areas with smaller insects.",
  ],
  benefits: [
    "We measure and install ourselves, no subcontractors in your home",
    "Frame colour matched to your existing windows",
    "One visit for the whole house instead of one screen at a time",
    "Pet-resistant and solar mesh options available",
    "Sliding patio door screen rollers and tracks repaired",
  ],
  process: [
    { step: "Send a Photo", desc: "Text us a photo of the screen and the rough size on WhatsApp." },
    { step: "Get a Quote", desc: "We reply with a price. No visit needed for most screen quotes." },
    { step: "We Measure", desc: "On install day we measure on-site so the screen fits perfectly." },
    { step: "Install", desc: "New mesh or frame installed on the spot. Clean up and done." },
  ],
  faqs: [
    {
      q: "Can you repair my screen or do I need a new one?",
      a: "If the frame is straight and the corners are solid, we usually just replace the mesh. If the frame is bent, cracked or the corners have failed, a new frame costs less than repeated repairs.",
    },
    {
      q: "Do I have to be home?",
      a: "For most ground-floor screens, no. We can measure and install from outside if you leave the screens accessible.",
    },
    {
      q: "Do you do apartment and condo screens?",
      a: "Yes. We work with individual owners, condo boards and property managers across the GTA.",
    },
  ],
  midPageCTA: {
    text: "Send us a photo of the screen and the rough size, and we will give you a price. No visit needed for a quote.",
    buttonLabel: "Get a Screen Quote",
    buttonHref: "/contact",
  },
  metaTitle: "Window Screen Repair & Replacement Toronto",
  metaDescription:
    "Torn, bent or missing window screens? LuminaSky repairs and replaces window and patio door screens across Vaughan, Thornhill, Richmond Hill, Markham and North York.",
  relatedServices: ["screen-storm-doors", "foggy-windows", "window-cranks"],
};

export const WINDOW_REPLACEMENT: ServiceData = {
  slug: "window-replacement",
  title: "Full Window Replacement",
  shortTitle: "Window Replacement",
  heroHeadline: "Full Window Replacement",
  heroSubtext:
    "Sometimes glass and hardware are not the answer. If the frame itself is rotted, warped or so old that parts no longer exist, replacing the window is the cheaper decision over the next ten years.\n\nWe are a repair company first, which means we will tell you when a repair is enough. When it is not, we handle the replacement from measurement to cleanup.",
  heroImage: {
    src: "/images/services/window-replacement-service.jpg",
    alt: "LuminaSky team member installing new window frame with professional flashing tape during full window replacement",
  },
  heroCTA: {
    primary: "Book a Measurement",
    primaryHref: "/contact",
  },
  description: [
    "We replace windows when repair no longer makes financial sense: when the frame is rotted, warped, or so old that replacement parts are discontinued. Our focus on repair means we will always tell you honestly which option saves you more over the long run.",
    "We handle the full job: measure, order, remove the old window, install the new one, finish the interior and exterior trim, and haul away the debris. One crew, one visit for the install, no subcontractors.",
  ],
  benefits: [
    "Honest assessment: we quote both repair and replacement when both are realistic",
    "A written fixed price before any work begins",
    "Family-run crew: the people who quote are the people who install",
    "All window types: casement, hung, slider, fixed, bay, bow, basement",
    "Old window removed, new one installed, trim finished, debris taken away",
  ],
  process: [
    { step: "Book a Visit", desc: "We come to your home to measure and assess. No all-day sales presentation." },
    { step: "Fixed Quote", desc: "You get a written, fixed price for the job before any work begins." },
    { step: "Order & Schedule", desc: "We order your windows and book the install date that works for you." },
    { step: "Install & Cleanup", desc: "We remove the old window, install the new one, finish the trim, and take the debris." },
  ],
  faqs: [
    {
      q: "When does replacement make sense over repair?",
      a: "When the frame is rotted, cracked, or out of square. When the window will not open, close, or lock properly and parts are discontinued. When you feel a draft along the frame even with the window shut. When condensation and mould keep coming back on the frame itself.",
    },
    {
      q: "What types of windows do you install?",
      a: "Casement and awning, double and single hung, sliders, fixed and picture windows, bay and bow windows, and basement and egress windows.",
    },
    {
      q: "Will you try to upsell me on a replacement?",
      a: "No. Our business runs on repeat customers and referrals, so talking you into a project you do not need would cost us more than it makes us. We quote both repair and replacement when both are realistic and tell you honestly which we would choose.",
    },
  ],
  midPageCTA: {
    text: "Book a free on-site measurement and get a written, fixed-price quote.",
    buttonLabel: "Book a Measurement",
    buttonHref: "/contact",
  },
  metaTitle: "Window Replacement in Vaughan & Toronto",
  metaDescription:
    "Full window replacement for GTA homes. LuminaSky replaces old, drafty and failing windows with a fixed quote and no pressure sales.",
  relatedServices: ["foggy-windows", "window-cranks", "skylights"],
};

export const ALL_SERVICES_DATA: ServiceData[] = [
  FOGGY_WINDOWS,
  FRONT_DOOR_GLASS,
  WINDOW_CRANKS,
  SCREEN_STORM_DOORS,
  SKYLIGHTS,
  WINDOW_SCREENS,
  WINDOW_REPLACEMENT,
];
