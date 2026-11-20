/**
 * Content pools for the city pages. Each city gets its own mix of questions, steps, problems and
 * closing lines, picked the same way on every build, so no two city pages of one service read alike.
 * Rules: no phone numbers in the text, no "free quote", glass warranty is 2 years parts and labour
 * then up to 5 years on the part, hardware is 1 year.
 */

export type ServiceKey =
  | "window-repair" | "foggy" | "front-door" | "cranks" | "patio" | "skylight" | "commercial" | "emergency";

type QA = { q: string; a: string };

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

/** n items from the pool, in a stable order that depends on the city and the service */
export function pickFor<T>(pool: T[], seed: string, n: number): T[] {
  return pool
    .map((item, i) => ({ item, k: hash(`${seed}#${i}`) }))
    .sort((a, b) => a.k - b.k)
    .slice(0, Math.min(n, pool.length))
    .map((x) => x.item);
}

export function oneFor<T>(pool: T[], seed: string): T {
  return pool[hash(seed) % pool.length];
}

/* ------------------------------------------------------------------ FAQ pools */

export const FAQ_POOL: Record<ServiceKey, QA[]> = {
  "window-repair": [
    { q: "Do you repair the window or replace the whole thing?", a: "We repair first. Most problems are the glass, the seal or the hardware, and the frame is fine. We only suggest a full replacement when the frame itself is rotten, warped or broken." },
    { q: "How long does a window repair visit take?", a: "Hardware swaps like cranks, hinges and locks usually take under an hour. New glass is measured on the first visit, made to size, and installed on a second visit." },
    { q: "What does the $30 visit cover?", a: "A technician comes to the house, checks the window and gives you a written price. If you go ahead with the repair, the $30 comes off the bill." },
    { q: "Can you fix a window that won't lock?", a: "Usually. The lock, the keeper or the sash alignment is the cause. We adjust or replace the part so the window closes and locks properly again." },
    { q: "Is it worth fixing an old window instead of replacing it?", a: "If the frame is solid, yes. New glass or new hardware costs a fraction of a new window and keeps your trim and walls untouched." },
    { q: "Do you work on vinyl, wood and aluminum windows?", a: "Yes. The repair methods differ by frame, and we carry parts for the common vinyl and aluminum systems used in the GTA." },
    { q: "My window lets in a draft. Can that be repaired?", a: "Often it can. Worn weatherstripping, a sash that has dropped out of square or failing hinges are all fixable without replacing the window." },
    { q: "What warranty comes with a window repair?", a: "Glass carries 2 years on parts and labour, then up to 5 years on the part. Hardware like cranks, hinges and locks has 1 year on parts and labour." },
    { q: "Can you send a price from a photo?", a: "For glass and common hardware we can usually give a range from a clear photo. The exact price comes after we measure on site." },
    { q: "Do you fix basement windows?", a: "Yes. Basement sliders and hoppers often have broken glass, failed latches or rotted frames, and most of that can be repaired." },
    { q: "Will you check my other windows while you are here?", a: "Yes. On every visit the technician goes through the windows and doors in the house and tells you what is fine, what needs work now and what to watch." },
    { q: "Do I need to be home for the repair?", a: "Someone needs to let us in and show us the windows. For a second visit to install glass, you can arrange access if you are at work." },
  ],
  foggy: [
    { q: "Why is my window foggy between the panes?", a: "The seal around the edge of the sealed unit has failed. Moist air gets into the gap between the two panes and condenses, and wiping the glass will not reach it." },
    { q: "Can foggy glass be cleaned instead of replaced?", a: "Some companies drill and vent the unit, but it does not restore the seal or the gas fill, and the fog often comes back. Replacing the sealed unit is the lasting fix." },
    { q: "Do I need a new window for foggy glass?", a: "Usually not. We replace only the sealed glass unit and reuse your existing frame and sash." },
    { q: "How long does a sealed unit last?", a: "Most last 10 to 25 years. South-facing windows get the most heat and often fail sooner." },
    { q: "Is foggy glass a problem or just cosmetic?", a: "Once the seal fails, the insulating gas is gone, so the window loses some of its insulating value. The constant moisture can also start to damage the sash." },
    { q: "How long until the new glass is installed?", a: "We measure on the first visit and order a unit made to size. Installation is usually 1 to 2 weeks later." },
    { q: "Will the new glass match my other windows?", a: "Yes. We match the thickness, spacer colour and grilles, and we can upgrade to Low-E or argon if your old unit did not have it." },
    { q: "What warranty do I get on a new sealed unit?", a: "2 years on parts and labour, then up to 5 years on the glass unit itself." },
    { q: "Can you replace glass in a window with grilles?", a: "Yes. Grilles between the panes are built into the new unit, so it looks the same as before." },
    { q: "Why does only one pane in my window fog up?", a: "Each sealed unit fails on its own schedule. One that gets more sun or sits lower on the wall often goes first." },
    { q: "Can you replace foggy glass in winter?", a: "Yes. The swap takes about 30 minutes per window, so the opening is not left exposed for long." },
    { q: "What does the $30 visit include?", a: "We measure the glass, check the frame and give you a written price. The $30 is credited back if you go ahead." },
  ],
  "front-door": [
    { q: "Can you change the glass without replacing my front door?", a: "Yes. We remove the old insert and frame kit and install new glass in the same door, so the door and the frame stay put." },
    { q: "What styles of door glass can I choose?", a: "Clear, frosted, decorative, wrought iron, and privacy glass in many patterns. We bring samples so you can see them against your door." },
    { q: "Is front door glass tempered?", a: "Glass in and next to doors has to be safety glass. Tempered glass is about four times stronger than ordinary glass and breaks into small pieces instead of sharp shards." },
    { q: "How long does a door glass swap take?", a: "Once the insert is ready, installation usually takes one to two hours." },
    { q: "Can you replace the glass in my sidelites too?", a: "Yes. We can match the sidelites to the new door glass or change them all together for one look." },
    { q: "My door glass is cracked. Is that an emergency?", a: "A crack weakens the glass and can let water and drafts in. We can secure it right away and order the replacement." },
    { q: "Will new glass make my door more energy efficient?", a: "Newer inserts are sealed units with better seals and Low-E options, so yes, they usually cut drafts and heat loss compared to an old insert." },
    { q: "Can I go from clear glass to privacy glass?", a: "Yes. Frosted and textured glass let in light while blocking the view inside, which is popular for front doors that face the street." },
    { q: "Do you fix steel and fiberglass doors?", a: "Yes. Most steel and fiberglass doors take standard insert sizes, and we can measure and match them." },
    { q: "How long does it take to get a new insert?", a: "Common sizes and styles take about 1 to 3 weeks. Custom decorative glass can take longer." },
    { q: "What warranty comes with new door glass?", a: "2 years on parts and labour, then up to 5 years on the glass." },
    { q: "Can you add glass to a door that has none?", a: "In many steel and fiberglass doors, yes. We cut an opening and install a frame kit with the glass you choose." },
  ],
  cranks: [
    { q: "How much does a window crank repair cost?", a: "It depends on the operator type and how many windows need work. We give a written price on site before starting, and the $30 visit fee is credited back if you proceed." },
    { q: "Can you fix a crank if the handle broke off?", a: "Usually. If the gears inside are still sound, a new handle is all you need. If they are stripped, we replace the full operator." },
    { q: "Do you repair casement and awning cranks?", a: "Yes. They use different mechanisms, and we stock both types." },
    { q: "Why does my crank spin without moving the window?", a: "The gears inside the operator are stripped. The handle turns but the gear no longer grabs the arm, so the operator needs replacing." },
    { q: "Can you match an old crank that's no longer made?", a: "In most cases we find a modern operator that fits the same screw holes and spline. We bring the common ones on the truck." },
    { q: "My window won't close all the way. Is it the crank?", a: "It can be the crank, the hinges or the lock. We check all three, because stiff hinges often wear out a new operator fast." },
    { q: "How long does a crank replacement take?", a: "About 20 to 30 minutes per window, and we can do several windows in the same visit." },
    { q: "Do you replace hinges too?", a: "Yes. Worn hinges make the window sag and drag, which strains the crank. We replace them in the same visit when needed." },
    { q: "What warranty do you give on crank repairs?", a: "1 year on parts and labour." },
    { q: "Can I just lubricate a stiff crank?", a: "Sometimes cleaning and lubricating the track helps if the operator is not damaged. If the gears grind or slip, lubrication will not fix it." },
    { q: "Do you need to remove the window to replace the crank?", a: "No. The operator is replaced from inside, without taking the sash or frame out." },
    { q: "What brands of operators do you carry?", a: "We carry common operators used in GTA windows, including Truth and Maxim styles, plus handles in several colours." },
  ],
  patio: [
    { q: "Why is my patio door so hard to slide?", a: "Usually worn rollers or a dirty, bent track. New rollers and a cleaned track make the door glide again." },
    { q: "Can you replace the glass in a sliding door?", a: "Yes. We replace the sealed glass panel in the existing door, whether it is broken or foggy." },
    { q: "Do patio doors need tempered glass?", a: "Yes. Building codes require safety glass in sliding doors, so every replacement panel we install is tempered." },
    { q: "Can you fix a patio door lock that won't catch?", a: "Yes. The latch, keeper or door alignment is usually the cause, and all three can be adjusted or replaced." },
    { q: "My patio door glass is foggy. Do I need a new door?", a: "No. We replace only the foggy sealed unit and keep the door frame." },
    { q: "How long does a roller replacement take?", a: "Usually about an hour. We lift the panel out, swap the rollers and adjust the height." },
    { q: "Do you fix French doors and garden doors too?", a: "Yes. We repair glass, hinges and multi-point locks on hinged patio doors as well as sliders." },
    { q: "Can you stop the draft coming through my patio door?", a: "Worn weatherstripping and an out-of-adjustment panel cause most drafts. Both are repairable." },
    { q: "Can you replace the screen on my patio door?", a: "Yes. We rescreen or replace the screen door, including the rollers and handle." },
    { q: "What warranty comes with patio door repairs?", a: "Glass carries 2 years on parts and labour, then up to 5 years on the part. Rollers, locks and handles have 1 year." },
    { q: "How long does new patio door glass take?", a: "We measure on the first visit, and the tempered unit is usually ready in 1 to 3 weeks." },
    { q: "Is it worth repairing an old patio door?", a: "If the frame is square and solid, repairing the rollers, glass or lock costs much less than a new door." },
  ],
  skylight: [
    { q: "Can a leaking skylight be repaired?", a: "Often it can. Failed sealant, a cracked dome or worn flashing can be fixed without replacing the whole skylight." },
    { q: "Why does my skylight drip in winter?", a: "Often it is condensation, not a leak. Warm, damp indoor air hits the cold glass and drips. Better glass and ventilation help." },
    { q: "Can you replace a cracked skylight dome?", a: "Yes. We replace acrylic and polycarbonate domes on flat and low-slope roofs, sized to your curb." },
    { q: "Can you replace foggy glass in a skylight?", a: "Yes. We replace the sealed glass unit in many fixed and venting skylights." },
    { q: "Do you work on flat roofs?", a: "Yes. Domed skylights on flat roofs are common in the GTA, and we replace and reseal them." },
    { q: "How do you get to the skylight?", a: "Most jobs are done from the roof with ladders and safety gear. Higher roofs may need extra equipment, which we include in the price." },
    { q: "Should I replace or repair my skylight?", a: "If the frame and curb are sound, a new dome or glass unit is the cheaper fix. If the curb is rotten, it needs a fuller repair." },
    { q: "How long does a skylight repair take?", a: "Most dome or glass replacements are done in a few hours once the part is ready." },
    { q: "Can you add Low-E glass to my skylight?", a: "Yes. Low-E glass cuts heat gain in summer and heat loss in winter." },
    { q: "What warranty do you give on skylight glass?", a: "2 years on parts and labour, then up to 5 years on the glass or dome." },
    { q: "Do you fix tubular skylights?", a: "We replace damaged domes and seals on tubular units as well." },
    { q: "Is there a best season for skylight work?", a: "We work year round, but heavy snow and ice can delay roof access. Dry days are best for resealing." },
  ],
  commercial: [
    { q: "Do you replace storefront glass?", a: "Yes. We replace broken and foggy storefront glass, glass doors and office windows." },
    { q: "Can you work outside business hours?", a: "Yes. We can schedule early mornings, evenings or weekends so your business stays open." },
    { q: "Do you board up broken commercial glass?", a: "Yes. We secure the opening the same day and come back to install the permanent glass." },
    { q: "Do you work with property managers?", a: "Yes. We work with condo boards and property managers and send written quotes and invoices with HST." },
    { q: "Can you repair commercial door closers and hinges?", a: "Yes. We adjust and replace closers, pivots and hinges on glass and aluminum doors." },
    { q: "What glass do storefronts need?", a: "Doors and glass near doors need safety glass. We replace with tempered or laminated glass as required." },
    { q: "Do you replace glass in office partitions?", a: "Yes. We replace interior glass partitions and office door glass." },
    { q: "How fast can you replace a broken storefront window?", a: "We secure it right away, measure, and install the new glass once it is made, usually within 1 to 3 weeks." },
    { q: "Do you provide invoices for insurance claims?", a: "Yes. We send a detailed written quote and invoice you can submit to your insurer." },
    { q: "Can you replace foggy glass in office windows?", a: "Yes. We replace failed sealed units in commercial windows without replacing the frames." },
    { q: "What warranty do you offer on commercial glass?", a: "2 years on parts and labour, then up to 5 years on the glass." },
    { q: "Do you handle multi-unit buildings?", a: "Yes. We can schedule several units or floors in one visit for condos and offices." },
  ],
  emergency: [
    { q: "How fast can you come for broken glass?", a: "We aim to get a technician out the same day, and we take night calls too." },
    { q: "Do you charge more for emergency calls?", a: "No. We do not have a special emergency price." },
    { q: "What happens on an emergency call?", a: "We clean up the broken glass, secure the opening with a board or polycarbonate, and measure for permanent glass." },
    { q: "Is the board-up weather-tight?", a: "Yes. It keeps out rain, snow and drafts until the new glass is installed." },
    { q: "Can you help with an insurance claim?", a: "Yes. We take photos and give you a written quote and invoice for your insurer." },
    { q: "Do you handle break-ins?", a: "Yes. After a break-in we secure the window or door right away so your home or business is safe overnight." },
    { q: "Can you fix a broken patio door at night?", a: "We can secure it the same night and install new tempered glass once it is made." },
    { q: "What should I do while I wait for you?", a: "Keep people and pets away from the glass, sweep up what you can safely, and tape plastic over the opening if it is raining." },
    { q: "Do you do emergency storefront glass?", a: "Yes. We secure broken storefront glass so the business can stay locked and safe." },
    { q: "How long until the permanent glass is installed?", a: "Usually 1 to 3 weeks, depending on size and glass type." },
    { q: "Can you replace the glass the same day?", a: "Sometimes for small, standard pieces. Most sealed and tempered glass is made to size, so we secure the opening first." },
    { q: "Do you work on weekends and holidays?", a: "Yes. Broken glass does not wait for business hours, and neither do we." },
  ],
};

/* ------------------------------------------------------------------ process variants (4 steps each) */

type Step = { step: string; desc: string };

export const PROCESS_POOL: Record<ServiceKey, Step[][]> = {
  "window-repair": [
    [
      { step: "Send a Photo", desc: "Text or WhatsApp a photo of the window. We tell you what it looks like and what to expect." },
      { step: "Home Visit", desc: "A technician checks the window on site and writes up the price before any work starts." },
      { step: "Repair or Order", desc: "Hardware is often fixed on the spot. Glass is measured and made to size." },
      { step: "Final Check", desc: "We test the window, clean up and walk you through what was done." },
    ],
    [
      { step: "Book a $30 Visit", desc: "Pick a time that works. The $30 is credited back if you go ahead." },
      { step: "Inspect Every Window", desc: "We look at the problem window and the rest of the house, and tell you what is fine." },
      { step: "Written Price", desc: "You get the price in writing on the spot. No pressure to decide that day." },
      { step: "Fix It", desc: "We repair what can be repaired and only replace parts that are done." },
    ],
    [
      { step: "Tell Us What's Wrong", desc: "A quick call or message with a photo is enough to get started." },
      { step: "Diagnose on Site", desc: "Glass, seal, hardware or frame: we find the real cause, not just the symptom." },
      { step: "Clear Quote", desc: "One written price, with the warranty spelled out." },
      { step: "Same Frame, Working Window", desc: "Your trim and walls stay untouched. Only the broken part changes." },
    ],
  ],
  foggy: [
    [
      { step: "Photo First", desc: "Send a picture of the foggy glass and we confirm it is a failed seal." },
      { step: "Measure", desc: "On the $30 visit we measure the sealed unit and check the frame." },
      { step: "Unit Made to Size", desc: "Your new sealed unit is built to match, usually within 1 to 2 weeks." },
      { step: "Swap the Glass", desc: "We remove the old unit and set the new one in the same frame." },
    ],
    [
      { step: "Spot the Fog", desc: "Haze or droplets you cannot wipe off mean the seal has failed." },
      { step: "Visit and Quote", desc: "We measure every foggy unit and give you a written price." },
      { step: "Choose Your Glass", desc: "Keep it the same or upgrade to Low-E and argon." },
      { step: "Install", desc: "About 30 minutes per window, and the frame stays in place." },
    ],
    [
      { step: "Book the Visit", desc: "The $30 visit is credited back when you proceed." },
      { step: "Check the Frame", desc: "We make sure the frame is solid so new glass is worth it." },
      { step: "Order the Unit", desc: "Matched for thickness, spacer and grilles." },
      { step: "Clear View Again", desc: "New glass in, old glass taken away, area cleaned up." },
    ],
  ],
  "front-door": [
    [
      { step: "Pick a Style", desc: "Send a photo of your door and tell us the look you want." },
      { step: "Measure", desc: "We measure the opening and bring samples to see against your door." },
      { step: "Order the Insert", desc: "Your glass and frame kit are made to fit." },
      { step: "Install", desc: "We remove the old insert and set the new one in a few hours." },
    ],
    [
      { step: "Home Visit", desc: "We check the door, the frame kit and the sidelites." },
      { step: "Written Price", desc: "Glass style, size and timing, all in writing." },
      { step: "Deposit and Order", desc: "A 50% deposit places the order with the supplier." },
      { step: "Same Door, New Look", desc: "The door stays in place. Only the glass changes." },
    ],
    [
      { step: "Show Us the Door", desc: "A photo is enough for us to suggest styles and a rough price." },
      { step: "See Samples", desc: "Clear, frosted, decorative or wrought iron, side by side." },
      { step: "Made to Fit", desc: "The insert is built for your door size, usually 1 to 3 weeks." },
      { step: "Installed and Sealed", desc: "We seal it against drafts and water and clean up." },
    ],
  ],
  cranks: [
    [
      { step: "Send a Photo", desc: "Snap the broken crank and send it by text or WhatsApp. We identify the part." },
      { step: "$30 Visit", desc: "Our technician checks the operator and hinges and writes up the price." },
      { step: "$30 Credited Back", desc: "The visit fee comes off the repair if you go ahead." },
      { step: "Repair on the Spot", desc: "We carry common operators and handles, so most cranks are fixed that day." },
    ],
    [
      { step: "Describe the Problem", desc: "Spinning handle, grinding, or a window stuck open, tell us what it does." },
      { step: "Match the Operator", desc: "We match the screw holes, arm length and spline of your old crank." },
      { step: "Check the Hinges", desc: "Stiff hinges kill new cranks, so we check them too." },
      { step: "Test Every Window", desc: "We open and close each repaired window before we leave." },
    ],
    [
      { step: "Book a Time", desc: "One visit handles every crank in the house." },
      { step: "Remove the Old Operator", desc: "Done from inside, without taking the window out." },
      { step: "Fit the New One", desc: "About 20 to 30 minutes per window." },
      { step: "Closed Tight", desc: "The window seals properly again, with a 1-year warranty." },
    ],
  ],
  patio: [
    [
      { step: "Send a Photo or Video", desc: "Show us how the door slides or where the glass is damaged." },
      { step: "On-Site Check", desc: "We check rollers, track, glass, lock and weatherstripping." },
      { step: "Written Price", desc: "You see the full price before any work starts." },
      { step: "Repair", desc: "Rollers and locks are often done the same visit. Glass is made to size." },
    ],
    [
      { step: "Book the $30 Visit", desc: "Credited back when you go ahead with the repair." },
      { step: "Lift and Inspect", desc: "We take the panel off the track to see the rollers." },
      { step: "Replace Worn Parts", desc: "New rollers, latch or weatherstrip as needed." },
      { step: "Adjust", desc: "We set the height so the door glides and locks." },
    ],
    [
      { step: "Tell Us the Symptom", desc: "Sticking, drafts, foggy glass or a lock that won't catch." },
      { step: "Find the Cause", desc: "Track, rollers, glass or alignment, we check all of it." },
      { step: "Tempered Glass if Needed", desc: "Replacement panels are always safety glass." },
      { step: "Back in Use", desc: "Door slides smoothly and locks securely." },
    ],
  ],
  skylight: [
    [
      { step: "Send Photos", desc: "Inside and, if safe, outside shots help us see the problem." },
      { step: "Roof Check", desc: "We inspect the dome or glass, the seals and the flashing." },
      { step: "Written Price", desc: "Including access equipment, so there are no surprises." },
      { step: "Repair or Replace", desc: "New dome, new glass unit or reseal, whichever fixes it." },
    ],
    [
      { step: "Leak or Condensation?", desc: "We find out which it is before quoting anything." },
      { step: "Measure the Curb", desc: "Domes and glass are made to fit your skylight." },
      { step: "Order", desc: "Most parts are ready in 1 to 3 weeks." },
      { step: "Install and Seal", desc: "Done on a dry day so the seal cures properly." },
    ],
    [
      { step: "Book the $30 Visit", desc: "Credited back if you proceed." },
      { step: "Safe Access", desc: "Ladders and fall protection, set up properly." },
      { step: "Fix the Source", desc: "Cracks, failed seals or worn flashing." },
      { step: "Light Without Leaks", desc: "Clean, sealed and tested before we leave." },
    ],
  ],
  commercial: [
    [
      { step: "Call or Message", desc: "Tell us the location, the glass and how urgent it is." },
      { step: "Secure if Needed", desc: "Broken glass is boarded up right away." },
      { step: "Measure and Quote", desc: "A written quote with HST for your records." },
      { step: "Install", desc: "Scheduled around your business hours." },
    ],
    [
      { step: "Site Visit", desc: "We check the glass, frames and door hardware." },
      { step: "Written Quote", desc: "Clear scope and timing for owners and property managers." },
      { step: "Order the Glass", desc: "Tempered or laminated as required." },
      { step: "Off-Hours Install", desc: "Early, late or weekends, so customers are not disrupted." },
    ],
    [
      { step: "Report the Damage", desc: "Photos help us bring the right materials." },
      { step: "Make It Safe", desc: "Clean-up and board-up the same day." },
      { step: "Insurance Paperwork", desc: "Quote, photos and invoice for your claim." },
      { step: "Permanent Glass", desc: "Installed and sealed once it is made." },
    ],
  ],
  emergency: [
    [
      { step: "Call Us", desc: "Day or night. Tell us what broke and where." },
      { step: "Board-Up and Secure", desc: "We cover the opening with plywood or polycarbonate to keep weather and people out." },
      { step: "Measure", desc: "We measure for the permanent glass while we are there." },
      { step: "Install New Glass", desc: "We come back and replace the board with the finished glass." },
    ],
    [
      { step: "Stay Safe", desc: "Keep away from the broken glass until we arrive." },
      { step: "Clean-Up", desc: "We remove the broken pieces from the frame and the floor." },
      { step: "Temporary Cover", desc: "A weather-tight board goes up the same visit." },
      { step: "Permanent Fix", desc: "New tempered or sealed glass, usually in 1 to 3 weeks." },
    ],
    [
      { step: "Describe the Damage", desc: "A photo helps us bring the right board and tools." },
      { step: "Same-Day Response", desc: "We aim to be there the same day." },
      { step: "Secure the Opening", desc: "Locked, covered and safe overnight." },
      { step: "Glass Replaced", desc: "No special emergency price, just our regular rates." },
    ],
  ],
};

/* ------------------------------------------------------------------ problem lists (pick 4) */

export const PROBLEM_POOL: Record<ServiceKey, string[]> = {
  "window-repair": [
    "Cracked or broken glass", "Fog or moisture between the panes", "Window won't lock or latch",
    "Crank spins but window doesn't move", "Sash sagging or dragging", "Drafts around the frame",
    "Basement window latch broken", "Sliding window stuck in the track",
  ],
  foggy: [
    "Haze between the panes that won't wipe off", "Water droplets inside the glass", "White mineral streaks inside the unit",
    "Fog that comes and goes with the weather", "One pane cloudier than the rest", "Cold spots near the glass edge",
    "Condensation at the bottom of the unit", "Visible gap or crack in the edge seal",
  ],
  "front-door": [
    "Cracked or broken door glass", "Foggy insert you can't see through", "Outdated glass style",
    "Drafts around the glass frame", "Not enough privacy from the street", "Loose or rattling insert",
    "Sidelites that don't match the door", "Water leaking around the insert",
  ],
  cranks: [
    "Crank handle spins but window does not move", "Handle snapped off or broken", "Window stuck open or won't close fully",
    "Gears grinding or making noise", "Crank is very stiff to turn", "Arm came off the track",
    "Window sags when it opens", "Lock won't pull the sash tight",
  ],
  patio: [
    "Door hard to slide or stuck", "Rollers grinding on the track", "Lock or latch won't catch",
    "Foggy glass panel", "Cracked or broken glass", "Drafts along the edges",
    "Screen door off its track", "Handle loose or broken",
  ],
  skylight: [
    "Water dripping from the skylight", "Cracked or yellowed dome", "Fog between the glass panes",
    "Condensation running down the shaft", "Stains on the ceiling around the opening", "Venting skylight won't close",
    "Gaps in the flashing or seal", "Too much heat coming through in summer",
  ],
  commercial: [
    "Broken storefront window", "Glass door shattered", "Door closer slamming or not closing",
    "Foggy office window", "Cracked partition glass", "Break-in damage",
    "Pivot or hinge failing on a glass door", "Drafts around storefront frames",
  ],
  emergency: [
    "Window smashed in a break-in", "Patio door glass shattered", "Storefront glass broken overnight",
    "Storm damage to windows", "Front door glass cracked through", "Glass broken by a ball or branch",
    "Basement window kicked in", "Car or object hit the glass",
  ],
};

/* ------------------------------------------------------------------ closing lines */

export const CTA_POOL: Record<ServiceKey, string[]> = {
  "window-repair": [
    "Send us a photo of the window and we'll tell you what it needs. The $30 visit is credited back when you go ahead.",
    "Most window problems are a part, not a whole window. Book a $30 visit and get a written price on the spot.",
    "Fix it, don't replace it. A technician can check every window in the house on one visit.",
    "Tell us what the window is doing and we'll come check it. You get the price in writing before any work starts.",
  ],
  foggy: [
    "Foggy glass is a glass problem, not a window problem. Send a photo and we'll confirm it.",
    "Keep your frames and replace only the glass. The $30 visit is credited back when you proceed.",
    "Book a visit and we'll measure every foggy unit in one trip.",
    "Get a clear view again without a full window replacement. Send us a picture to start.",
  ],
  "front-door": [
    "Same door, new glass. Send a photo and we'll suggest styles that suit it.",
    "Change the look of your entrance without replacing the door. Book a visit to see samples.",
    "Tell us the look you want and we'll bring the glass to match.",
    "A new insert makes an old door look new. Start with a photo.",
  ],
  cranks: [
    "Send us a photo of the broken crank. We identify the part and give you a clear price.",
    "One visit can fix every crank in the house. The $30 visit is credited back when you proceed.",
    "Don't replace the window for a broken crank. We swap the operator in about half an hour.",
    "Window stuck open? Tell us what it's doing and we'll bring the right part.",
  ],
  patio: [
    "Make your patio door glide again. Send a short video of it sliding.",
    "Rollers, locks and glass are all repairable. Book a visit and see the price first.",
    "Keep the door, fix the part. The $30 visit is credited back when you go ahead.",
    "Tell us what your patio door is doing and we'll bring what it needs.",
  ],
  skylight: [
    "Leak or condensation? We'll find out before quoting anything.",
    "Keep the light, lose the leak. Send us photos of the skylight to start.",
    "A new dome or glass unit costs far less than a new skylight. Book a visit.",
    "We handle the roof and the ladder part. You get a written price first.",
  ],
  commercial: [
    "Keep your business open while we fix the glass. Tell us what broke.",
    "Written quotes with HST for owners and property managers. Send us the details.",
    "We work around your hours. Book an early, late or weekend visit.",
    "Broken storefront glass? We secure it first and replace it after.",
  ],
  emergency: [
    "Broken glass? We'll secure it today and replace it after. No special emergency price.",
    "Call us day or night and we'll board it up and measure for new glass.",
    "Don't leave a broken window open overnight. We come out and make it safe.",
    "Tell us what broke and we'll bring the board, the tools and the tape measure.",
  ],
};

export function cityFaqs(service: ServiceKey, slug: string, n = 2): QA[] {
  return pickFor(FAQ_POOL[service], `${service}:faq:${slug}`, n);
}
export function cityProcess(service: ServiceKey, slug: string): Step[] {
  return oneFor(PROCESS_POOL[service], `${service}:process:${slug}`);
}
export function cityProblems(service: ServiceKey, slug: string, n = 3): string[] {
  return pickFor(PROBLEM_POOL[service], `${service}:problems:${slug}`, n);
}
export function cityCta(service: ServiceKey, slug: string, city?: string, hoods?: string[]): string {
  const base = oneFor(CTA_POOL[service], `${service}:cta:${slug}`);
  const hs = hoods ? pickFor(hoods, `${service}:ctahoods:${slug}`, 2) : [];
  if (!city || hs.length < 2) return base;
  const local = oneFor([
    `We're in ${hs[0]} and ${hs[1]} most weeks, and anywhere else in ${city}.`,
    `From ${hs[0]} to ${hs[1]}, we cover all of ${city}.`,
    `${hs[0]}, ${hs[1]} or anywhere in ${city}: same crew, same price.`,
  ], `${service}:ctaline:${slug}`);
  return `${base} ${local}`;
}
