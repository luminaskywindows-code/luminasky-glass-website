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
    "LuminaSky Glass specializes in glass unit replacement - we remove the failed glass insert and install a new sealed unit, leaving your existing frame completely intact. In most cases, we can complete the repair in under an hour per window.",
    "We serve homeowners and property managers across the GTA, with same-day service available for common glass sizes. Every replacement comes with a warranty.",
  ],
  benefits: [
    "Save 60–80% versus replacing the entire window and frame",
    "Same-day service available for most standard sizes",
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
      desc: "You get a firm price upfront - no surprises. Most repairs cost $150–$350 per unit.",
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
  metaTitle: "Foggy Glass Repair Toronto | Glass Seal Replacement GTA",
  metaDescription:
    "Foggy or cloudy windows? LuminaSky Glass repairs failed glass seals across the Greater Toronto Area. Save vs. full replacement. Call 437-344-8490.",
  relatedServices: [
    "front-door-glass",
    "window-cranks",
    "skylights",
  ],
};

export const INTEGRATED_BLINDS: ServiceData = {
  slug: "integrated-mini-blinds",
  title: "Integrated Mini-Blinds",
  heroHeadline: "Cordless, Dust-Free Blinds Built Inside Your Glass",
  heroSubtext:
    "Integrated between-glass blinds offer privacy on demand with no cords, no dust, and no maintenance - and they look stunning. Now available across the GTA.",
  description: [
    "Integrated mini-blinds are sealed inside the glass unit itself - the blinds sit between two panes of glass and are controlled by a magnetic slider or dial on the frame edge. No cords, no cleaning, no tangling.",
    "They're perfect for front doors, bathroom windows, patio doors, and anywhere you want privacy without sacrificing style. They're also a safety win for homes with young children - no dangling cord hazards.",
    "LuminaSky Glass was among the first to offer this service in the Toronto area. We supply and install integrated blind glass units to fit virtually any window or door opening.",
  ],
  benefits: [
    "Zero cords - completely child and pet safe",
    "Never needs cleaning - blinds are sealed between panes",
    "Perfect privacy control with a simple magnetic slider",
    "Works with any window or door frame",
    "Modern, sleek look that complements any home style",
    "Ideal for bathrooms, front doors, and patio sliders",
  ],
  process: [
    {
      step: "Measure & Quote",
      desc: "We measure your opening precisely and provide a firm quote for the custom glass unit.",
    },
    {
      step: "Unit Fabrication",
      desc: "Your integrated blind glass unit is custom-fabricated to your exact measurements.",
    },
    {
      step: "Frame Preparation",
      desc: "We prep your existing frame for the new unit, ensuring a perfect, weather-tight fit.",
    },
    {
      step: "Installation",
      desc: "The new glass unit is installed, sealed, and tested - blinds slide smoothly from day one.",
    },
    {
      step: "Demonstration",
      desc: "We walk you through how to use and care for your new integrated blinds.",
    },
  ],
  faqs: [
    {
      q: "How do integrated blinds work?",
      a: "The blinds sit inside the sealed glass unit. A magnetic handle on the frame edge controls the blind position from the outside - tilt, raise, or lower without opening the glass.",
    },
    {
      q: "Will they fit my existing window or door frame?",
      a: "Yes. We custom-fabricate each unit to your exact measurements, so they fit any frame size or style.",
    },
    {
      q: "Do they work in doors?",
      a: "Absolutely. Integrated blinds are especially popular for front door glass inserts and patio door panels.",
    },
    {
      q: "What happens if the blinds break?",
      a: "The unit can be replaced. We warranty against manufacturing defects and can supply replacement units.",
    },
  ],
  metaTitle: "Integrated Mini-Blinds Toronto | Between-Glass Blinds GTA",
  metaDescription:
    "Cordless, dust-free integrated mini-blinds built inside the glass. Available across the Greater Toronto Area. Installed by LuminaSky Glass. Call 437-344-8490.",
  relatedServices: ["foggy-windows", "front-door-glass", "screen-storm-doors"],
};

export const FRONT_DOOR_GLASS: ServiceData = {
  slug: "front-door-glass",
  title: "Front Door Glass Replacement",
  heroHeadline: "Transform Your Entrance with Beautiful New Door Glass",
  heroSubtext:
    "Cracked, foggy, or outdated front door glass? We replace glass inserts and sidelite panels for all door styles - decorative, frosted, clear, and more.",
  heroImage: {
    src: "/images/services/foggy-leaded-glass.jpg",
    alt: "Double front doors with decorative iron scrollwork glass inserts installed by LuminaSky Glass",
  },
  photos: [
    {
      src: "/images/services/foggy-leaded-glass.jpg",
      alt: "Double front doors with decorative wrought iron scrollwork glass inserts installed by LuminaSky Glass",
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
    "LuminaSky Glass replaces glass inserts in all types of front doors: single doors, double doors, doors with sidelites, and transom windows above the door. We carry decorative, frosted, privacy, and clear glass options.",
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
      alt: "Fully restored commercial front door with new tempered glass installed by LuminaSky Glass",
      badge: "After - Fully Restored",
      heading: "New Tempered Glass, Security Restored",
      caption: "Same location, next day. Emergency board-up within 2 hours, permanent glass replacement installed the following morning. Business back to normal.",
    },
    emergencyCTA: {
      heading: "24/7 Emergency Response Available",
      body: "We respond within 2 hours for emergency board-ups across the GTA. Permanent glass replacement scheduled for next-day installation.",
    },
  },
  metaTitle: "Front Door Glass Replacement Toronto | Door Glass GTA",
  metaDescription:
    "Replace cracked or foggy front door glass inserts across the Greater Toronto Area. Decorative, frosted & clear glass. LuminaSky Glass - Call 437-344-8490.",
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
    "LuminaSky Glass stocks a wide range of crank operators, handles, and hardware for all major window brands. In most cases we can repair or replace your window crank hardware in a single visit.",
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
  metaTitle: "Window Crank Repair Toronto | Casement Operator Replacement GTA",
  metaDescription:
    "Broken window crank or casement operator? LuminaSky Glass repairs and replaces window cranks across the Greater Toronto Area. Call 437-344-8490.",
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
      alt: "White aluminum-frame full-view storm door with gold lever handle - installed by LuminaSky Glass",
      caption: "Full-view aluminum storm door - protects your entry while keeping natural light",
    },
  ],
  description: [
    "A quality screen or storm door adds fresh air, natural ventilation, bug protection, and an additional layer of weather sealing to your home's entrance. They also add curb appeal and can improve energy efficiency.",
    "LuminaSky Glass supplies and installs screen doors and storm doors to fit any door opening size. We carry aluminum-framed screen doors, full-view storm doors, and combination storm/screen doors in multiple finishes.",
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
  metaTitle: "Screen & Storm Door Installation Toronto | GTA",
  metaDescription:
    "Custom screen and storm door supply and installation across the Greater Toronto Area. LuminaSky Glass - Call 437-344-8490.",
  relatedServices: [
    "front-door-glass",
    "window-cranks",
    "skylights",
  ],
};

export const GARAGE_DOORS: ServiceData = {
  slug: "garage-doors",
  title: "Garage Door Glass",
  heroHeadline: "Garage Door Glass Panels - Replaced & Restored",
  heroSubtext:
    "Cracked or broken garage door glass panels replaced efficiently. We also install decorative window inserts to upgrade the look of any garage door.",
  description: [
    "Garage door glass panels can crack from impact, extreme temperature swings, or just age. Replacing a single cracked panel is far more affordable than replacing the whole door - and we can usually match the existing glass style.",
    "We also offer decorative glass insert upgrades for existing garage doors. Adding arched, frosted, or clear glass inserts transforms a plain steel door into an attractive architectural feature.",
    "We work with all major residential garage door brands and styles - single panel, raised panel, carriage-house, and more.",
  ],
  benefits: [
    "Single panel replacement - no need to replace the whole door",
    "Wide range of glass styles: clear, frosted, tinted, decorative",
    "Compatible with all major garage door brands and styles",
    "Decorative inserts available to upgrade any existing door",
    "Improves natural light inside your garage",
    "Fast service - most jobs completed same-day",
  ],
  process: [
    {
      step: "Assessment",
      desc: "We assess the damage and measure the panel to be replaced or the opening for a new insert.",
    },
    {
      step: "Glass Match",
      desc: "We source matching or upgraded glass for your specific door model.",
    },
    {
      step: "Panel Removal",
      desc: "The damaged panel or insert is carefully removed without affecting adjacent panels.",
    },
    {
      step: "Installation",
      desc: "The new glass panel or decorative insert is installed and sealed.",
    },
    {
      step: "Inspection",
      desc: "We inspect the full door for alignment and ensure the repair is seamless.",
    },
  ],
  faqs: [
    {
      q: "Can you match my existing garage door glass style?",
      a: "We carry a wide range of garage door glass options. In most cases we can find a close or exact match.",
    },
    {
      q: "Can I add windows to a garage door that doesn't have any?",
      a: "Yes. Many steel and fiberglass garage doors can be retrofitted with decorative glass inserts using a router cut. We assess this on-site.",
    },
    {
      q: "How long does the repair take?",
      a: "Single panel replacements typically take 30–60 minutes.",
    },
  ],
  metaTitle: "Garage Door Glass Replacement Toronto | GTA",
  metaDescription:
    "Cracked garage door glass panels replaced across the Greater Toronto Area. Decorative inserts also available. LuminaSky Glass - Call 437-344-8490.",
  relatedServices: ["front-door-glass", "screen-storm-doors", "locksmith"],
};

export const LOCKSMITH: ServiceData = {
  slug: "locksmith",
  title: "Locksmith Services",
  heroHeadline: "Fast, Reliable Locksmith Services Across the GTA",
  heroSubtext:
    "Locked out? Need new locks after a move? We provide professional locksmith services including lock changes, re-keying, and 24/7 emergency lockout assistance.",
  description: [
    "LuminaSky Glass offers professional locksmith services as a natural extension of our door and glass work. Whether you've just moved in and want the locks changed, need re-keying after losing a key, or are locked out and need immediate help - we're available across the GTA.",
    "We install deadbolts, knob locks, lever handles, smart locks, and electronic keypad systems. We also repair damaged or difficult-to-turn locks without full replacement where possible.",
    "All our locksmith work is performed by experienced, background-checked technicians. Emergency lockout service is available 24 hours a day, 7 days a week.",
  ],
  benefits: [
    "24/7 emergency lockout service across the GTA",
    "Lock changes and re-keying for move-ins and key replacements",
    "Deadbolt installation and upgrades",
    "Smart lock and keypad installation",
    "Master key systems for landlords and property managers",
    "All lock brands and styles serviced",
  ],
  process: [
    {
      step: "Dispatch",
      desc: "Call us and describe your situation - we dispatch the nearest available technician immediately.",
    },
    {
      step: "Arrival",
      desc: "Our technician arrives at your location, typically within 30–60 minutes in the GTA.",
    },
    {
      step: "Assessment",
      desc: "We assess the lock situation - lockout, broken lock, or requested change/upgrade.",
    },
    {
      step: "Resolution",
      desc: "We unlock, repair, or replace the lock using professional tools and quality hardware.",
    },
    {
      step: "Keys & Documentation",
      desc: "You receive all new keys, and we document the work performed for your records.",
    },
  ],
  faqs: [
    {
      q: "How fast can you arrive for a lockout?",
      a: "We aim to arrive within 30–60 minutes anywhere in the GTA. Exact timing depends on location and time of day.",
    },
    {
      q: "Is it cheaper to re-key than replace the lock?",
      a: "Yes. Re-keying changes the internal pins so old keys no longer work - it's significantly cheaper than a full lock replacement and just as secure.",
    },
    {
      q: "Can you install smart locks?",
      a: "Yes. We install a range of smart locks and electronic keypad systems from leading brands.",
    },
    {
      q: "Do you service commercial properties?",
      a: "Yes. We service both residential and commercial properties across the GTA.",
    },
    {
      q: "What identification do you need for a lockout?",
      a: "We'll ask for government-issued ID and proof of residency (mail, lease, etc.) to verify you own or occupy the property.",
    },
  ],
  metaTitle: "Locksmith Services Toronto | Emergency Lockout GTA",
  metaDescription:
    "Professional locksmith services across the Greater Toronto Area. 24/7 emergency lockout, lock changes, re-keying. LuminaSky Glass - Call 437-344-8490.",
  relatedServices: ["front-door-glass", "window-cranks", "screen-storm-doors"],
};

export const SKYLIGHTS: ServiceData = {
  slug: "skylights",
  title: "Skylight Repair & Replacement",
  shortTitle: "Skylights",
  heroHeadline: "Skylight Leaking or Foggy? We Fix It - No Full Replacement Needed",
  heroSubtext:
    "Cracked glass, failed seals, or persistent leaks around your skylight? LuminaSky Glass repairs and replaces skylight glass units across the GTA.",
  heroImage: {
    src: "/images/services/skylight-foggy-before.jpg",
    alt: "Foggy skylight with heavy condensation between panes - failed seal causing fogging and reduced light",
  },
  description: [
    "Skylights are a beautiful source of natural light - but when the glass seal fails, condensation appears between the panes, or the frame develops a leak, they become a headache. LuminaSky Glass specializes in skylight glass replacement and leak repair without requiring a full skylight tearout.",
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
      a: "Yes. LuminaSky Glass is fully insured for at-height work, and our technicians are experienced with roof-level installations across all residential property types.",
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
  metaTitle: "Skylight Repair & Replacement Toronto | Glass Seal & Leak Fix GTA",
  metaDescription:
    "Foggy or leaking skylight? LuminaSky Glass repairs and replaces skylight glass units across Toronto and the GTA. All brands serviced. Call 437-344-8490.",
  relatedServices: ["foggy-windows", "front-door-glass", "screen-storm-doors"],
};

export const ALL_SERVICES_DATA: ServiceData[] = [
  FOGGY_WINDOWS,
  INTEGRATED_BLINDS,
  FRONT_DOOR_GLASS,
  WINDOW_CRANKS,
  SCREEN_STORM_DOORS,
  GARAGE_DOORS,
  LOCKSMITH,
  SKYLIGHTS,
];
