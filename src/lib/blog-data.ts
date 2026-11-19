export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readingTime: number;
  coverImage?: string;
  tags: string[];
  sections: { id: string; title: string }[];
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "window-repair-vs-replacement-toronto",
    title: "Window Repair vs Replacement: Which One Do You Actually Need?",
    metaTitle: "Window Repair vs Replacement in Toronto",
    metaDescription:
      "Not every broken window needs replacing. Learn when repair saves money, when replacement makes sense, and how to tell the difference.",
    excerpt:
      "A cracked seal, a stuck crank, condensation between the panes. Your first instinct might be to replace the whole window. But in many cases, a targeted repair costs a fraction of the price and solves the problem completely.",
    publishedAt: "2026-10-01",
    updatedAt: "2026-11-02",
    author: "Dan",
    readingTime: 12,
    coverImage: "/images/bright-windows-section.webp",
    tags: ["window repair", "window replacement", "toronto", "homeowner guide"],
    sections: [
      { id: "not-every-window-needs-replacing", title: "Not Every Window Needs Replacing" },
      { id: "how-windows-are-built", title: "How Windows Are Actually Built" },
      { id: "foggy-glass-seal-failure", title: "Foggy Glass and Seal Failure" },
      { id: "broken-cranks-and-hardware", title: "Broken Cranks, Hinges, and Hardware" },
      { id: "cracked-or-broken-glass", title: "Cracked or Broken Glass" },
      { id: "drafts-and-air-leaks", title: "Drafts and Air Leaks" },
      { id: "when-replacement-makes-sense", title: "When Full Replacement Makes Sense" },
      { id: "repair-vs-replacement-comparison", title: "Repair vs Replacement: Side-by-Side" },
      { id: "what-about-energy-efficiency", title: "What About Energy Efficiency?" },
      { id: "condo-and-highrise-considerations", title: "Condo and High-Rise Considerations" },
      { id: "how-to-get-an-honest-answer", title: "How to Get an Honest Answer" },
      { id: "bottom-line", title: "The Bottom Line" },
    ],
    content: `
<p>A cracked seal, a stuck crank, condensation between the panes. Your first instinct might be to replace the whole window. But in many cases, a targeted repair costs a fraction of the price and solves the problem completely.</p>

<p>The window industry has a replacement bias. That makes sense for companies that sell windows. But if your frame is solid and the problem is limited to one component, replacing the entire unit is like buying a new car because the battery died.</p>

<p>This guide breaks down the most common window problems Toronto homeowners face, explains which ones call for repair, which ones call for replacement, and how to tell the difference before you spend a dollar.</p>

<h2 id="not-every-window-needs-replacing">Not Every Window Needs Replacing</h2>

<p>Most windows are designed to last 20 to 30 years. But individual components, like the glass, the seals, and the hardware, wear out on different timelines. A seal might fail at year 12. A crank might break at year 8. That does not mean the window itself is done.</p>

<p>When only one part has failed, replacing just that part restores the window to full function. You keep the frame, the trim, and the installation. The repair is faster, less disruptive, and significantly less expensive than a full swap.</p>

<p>The key question is not "how old is this window?" It is "what exactly is wrong with it?"</p>

<h2 id="how-windows-are-built">How Windows Are Actually Built</h2>

<p>Understanding window anatomy helps you make better decisions. A typical residential window has three main systems:</p>

<ul>
  <li><strong>The frame:</strong> vinyl, aluminum, or wood. This is the structural shell that sits in the wall opening. Frames rarely fail unless there is water damage or severe warping.</li>
  <li><strong>The glass unit (sealed unit or IGU):</strong> two or three panes of glass with an insulating air or gas gap between them. The panes are bonded at the edges with a sealant. When that sealant breaks down, moisture gets in and the glass fogs up.</li>
  <li><strong>The hardware:</strong> cranks, hinges, locks, handles, balancers, rollers, and weatherstripping. These are the moving parts that let you open, close, lock, and seal the window.</li>
</ul>

<p>Each system can be serviced independently. A failed seal does not mean the frame is compromised. A broken crank does not mean the glass needs replacing. Knowing which layer has the problem is the first step toward the right fix.</p>

<h2 id="foggy-glass-seal-failure">Foggy Glass and Seal Failure</h2>

<p><a href="/foggy-windows">Foggy windows</a> are one of the most common issues in the GTA. You see condensation, haze, or a milky film trapped between the panes. It looks terrible and it means the insulating seal has failed. Moisture has entered the space where argon gas used to be.</p>

<p><strong>Can it be repaired?</strong> Yes. The glass unit (the sealed unit) can be replaced without touching the frame. A technician measures the opening, orders a custom-made replacement glass unit, and installs it into your existing frame. The process takes two visits: one to measure, one to install.</p>

<p><strong>When does this not work?</strong> If the frame itself is rotted, warped, or structurally compromised, the new glass will not seal properly. In that case, full window replacement is the better path. But for the majority of foggy windows, the frame is perfectly fine. Only the sealed unit needs to go.</p>

<p>Glass is measured first, custom-made to your exact dimensions, then installed. This approach preserves your existing frame and trim, avoids drywall or casing damage, and costs significantly less than a full replacement.</p>

<h2 id="broken-cranks-and-hardware">Broken Cranks, Hinges, and Hardware</h2>

<p>Casement and awning windows rely on <a href="/cranks">crank operators</a> and hinges to open and close. Over time, these parts wear down. You might notice the handle spinning without engaging, the window not closing flush, or the hinge arm bending when you try to open it.</p>

<p><strong>Can it be repaired?</strong> Almost always. Window hardware, including cranks, hinges, locks, handles, and balancers, can be replaced individually. A technician identifies the part, sources a compatible replacement (even for discontinued models), and installs it on site.</p>

<p>Most window hardware repairs are completed on the same day, on the first visit. There is no waiting for custom parts in most cases, because common operators and hardware are carried in stock.</p>

<p><strong>When does this not work?</strong> If the frame around the hardware mount point is cracked or stripped to the point where new hardware cannot anchor securely, the window may need replacing. This is uncommon but does happen with older wood frames that have moisture damage.</p>

<h2 id="cracked-or-broken-glass">Cracked or Broken Glass</h2>

<p>A stray baseball, a pressure crack from temperature swings, or impact damage from a storm. Broken glass is urgent because it compromises security, insulation, and safety.</p>

<p><strong>Can it be repaired?</strong> The glass itself cannot be patched. But the <a href="/glass-replacement">sealed unit can be replaced</a> without replacing the window. As with foggy glass, the opening is measured, a new unit is custom-made, and it gets installed into your existing frame.</p>

<p>For single-pane glass (common in older homes, storm doors, and sidelights), replacement is even simpler. The broken pane is removed and a new one is cut and installed, often in a single visit.</p>

<p><strong>When does this not work?</strong> If the impact also damaged the frame, bent the sash, or cracked the structural components of the window, the whole unit may need replacing. A technician can assess this during a site visit.</p>

<h2 id="drafts-and-air-leaks">Drafts and Air Leaks</h2>

<p>Cold air leaking around a closed window is one of the most frustrating problems, especially heading into a Toronto winter. But drafts have multiple causes, and many of them are fixable without replacing the window.</p>

<p><strong>Common causes of drafts:</strong></p>

<ul>
  <li><strong>Worn weatherstripping:</strong> the rubber or foam gasket that seals the sash to the frame dries out and compresses over time. Replacing it restores the seal.</li>
  <li><strong>Hardware misalignment:</strong> if the lock or latch does not pull the sash tight against the frame, air gets through. Adjusting or replacing the hardware fixes this.</li>
  <li><strong>Failed glass seal:</strong> a broken seal reduces the insulating value of the glass, making the area near the window feel colder, even if no air is physically leaking through.</li>
  <li><strong>Frame deterioration:</strong> gaps between the frame and the rough opening, or cracks in the frame itself, allow air infiltration. This is the one scenario where replacement is usually the right answer.</li>
</ul>

<p>Start with the simplest explanation. Weatherstripping and hardware adjustments are inexpensive and effective. If those do not solve the problem, a technician can diagnose whether the issue is the glass, the frame, or the installation.</p>

<h2 id="when-replacement-makes-sense">When Full Replacement Makes Sense</h2>

<p>Replacement is the right call when the frame itself is the problem. Here are the situations where repair will not cut it:</p>

<ul>
  <li><strong>Rotted or warped frames:</strong> wood frames exposed to moisture can rot to the point where they cannot hold hardware or glass securely. Vinyl frames can warp from prolonged heat exposure.</li>
  <li><strong>Multiple simultaneous failures:</strong> if the glass is foggy, the hardware is broken, the weatherstripping is gone, and the frame is sagging, the cumulative repair cost may approach or exceed replacement cost. At that point, a new window makes more financial sense.</li>
  <li><strong>Structural frame damage:</strong> if the frame has cracked at a joint, separated at a corner, or pulled away from the wall, patching it is not a long-term solution.</li>
  <li><strong>Upgrading window type:</strong> if you want to change from a single-hung to a casement, or from a fixed pane to an operable window, that requires a new unit regardless of condition.</li>
  <li><strong>Major renovation:</strong> if you are already tearing open the wall for insulation, siding, or structural work, it often makes sense to install new windows at the same time.</li>
</ul>

<p>Outside of these situations, repair is almost always the more practical choice.</p>

<h2 id="repair-vs-replacement-comparison">Repair vs Replacement: Side-by-Side</h2>

<p>Here is a quick comparison to help you weigh the two options:</p>

<table>
  <thead>
    <tr>
      <th>Factor</th>
      <th>Repair</th>
      <th>Replacement</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Typical timeline</td>
      <td>Same day to two visits</td>
      <td>Several weeks (measure, order, install)</td>
    </tr>
    <tr>
      <td>Disruption</td>
      <td>Minimal, interior work only</td>
      <td>Significant, may involve trim, drywall, caulking</td>
    </tr>
    <tr>
      <td>Frame preserved</td>
      <td>Yes</td>
      <td>No, old frame is removed</td>
    </tr>
    <tr>
      <td>Cost</td>
      <td>Fraction of replacement</td>
      <td>Higher per window</td>
    </tr>
    <tr>
      <td>Best for</td>
      <td>Isolated component failures</td>
      <td>Frame damage or total window failure</td>
    </tr>
    <tr>
      <td>Lifespan extension</td>
      <td>10 to 15+ years for the repaired component</td>
      <td>20 to 30 years for the new unit</td>
    </tr>
  </tbody>
</table>

<p>The right choice depends on what is actually wrong. A $30 site visit gives you an honest assessment from a technician who does both repairs and replacements, so there is no incentive to push you toward the more expensive option.</p>

<h2 id="what-about-energy-efficiency">What About Energy Efficiency?</h2>

<p>One of the most common arguments for replacement is energy efficiency. "Your old windows are costing you money in heating bills." While that can be true, the savings are often overstated.</p>

<p>Modern low-E glass with argon fill does outperform older double-pane glass. But if your current glass units are intact (no seal failure, no fogging), the performance difference may not justify the cost of full replacement. The biggest energy losses in a home typically come from the attic, basement, and air leaks around doors, not from the glass itself.</p>

<p>If your sealed units have failed, replacing just the glass with new low-E argon-filled units gives you most of the energy upgrade without replacing the frame. You get modern glass performance in your existing window.</p>

<p>If your windows are single-pane, the efficiency argument for replacement is much stronger. Upgrading from single-pane to double or triple-pane glass makes a noticeable difference in comfort and heating costs.</p>

<h2 id="condo-and-highrise-considerations">Condo and High-Rise Considerations</h2>

<p>Condo owners face unique challenges. Your windows might be on the 15th floor. The building may have specific rules about what you can and cannot change. And accessing the exterior side of the glass often requires specialised equipment.</p>

<p>The good news: most condo window problems are repairable from the interior. Crank operators, hinges, locks, and sealed glass units can all be replaced without exterior access in the majority of condo window systems. The technician works from inside your unit.</p>

<p>Full window replacement in a condo is more complicated. It may require board approval, coordination with the property manager, and compliance with the building's window specifications. Before going down that road, check whether a targeted repair solves the problem. It usually does.</p>

<h2 id="how-to-get-an-honest-answer">How to Get an Honest Answer</h2>

<p>The best way to find out whether your window needs repair or replacement is to have someone look at it who does both. A company that only sells replacement windows will always recommend replacement. A company that only does repairs might push a repair that is not going to last.</p>

<p>Look for a service provider that offers the full range: glass replacement, hardware repair, and full window replacement. That way, the recommendation matches the problem, not the business model.</p>

<p>A few things to ask during the assessment:</p>

<ul>
  <li>What specifically is wrong? Is it the glass, the hardware, or the frame?</li>
  <li>If you recommend repair, how long should it last?</li>
  <li>If you recommend replacement, why can this not be repaired instead?</li>
  <li>Can I see the damage you are describing?</li>
</ul>

<p>A trustworthy technician will show you exactly what is failing and explain your options without pressure. Book a $30 site visit to get a straightforward diagnosis. That fee gets credited toward whatever work you decide to do.</p>

<h2 id="bottom-line">The Bottom Line</h2>

<p>Most window problems in Toronto homes do not require full replacement. Foggy glass, broken cranks, worn weatherstripping, stuck hinges, and faulty locks can all be fixed by replacing just the affected component. The frame stays. The trim stays. The cost stays down.</p>

<p>Replacement makes sense when the frame is compromised, when multiple systems have failed at once, or when you are changing the window type entirely. For everything else, repair is the faster, cheaper, and less disruptive option.</p>

<p>If you are not sure which category your window falls into, that is exactly what a site visit is for. A technician inspects the window, identifies the root cause, and gives you a written quote before any work begins. No pressure, no upselling, just a clear answer.</p>

<p>We serve homeowners across the GTA, including <a href="/window-repair-toronto">Toronto</a>, <a href="/window-repair-vaughan">Vaughan</a>, <a href="/window-repair-mississauga">Mississauga</a>, <a href="/window-repair-markham">Markham</a>, and <a href="/window-repair-richmond-hill">Richmond Hill</a>. Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a quote online</a> to book your assessment.</p>

<p>Related reading: <a href="/blog/foggy-window-repair-cost-gta">What does foggy window repair cost in the GTA?</a> and <a href="/blog/broken-window-crank-what-to-do">What to do about a broken window crank</a>.</p>
`,
  },
  {
    slug: "winter-window-checklist-gta",
    coverImage: "/images/bright-windows-section.webp",
    title: "Winter Window Checklist for GTA Homes: 10 Things to Check Before the First Freeze",
    metaTitle: "Winter Window Checklist for Toronto Homes",
    metaDescription:
      "Before the cold sets in, check these 10 things on your windows, doors and skylights. A simple winter checklist for Vaughan, Thornhill and GTA homeowners.",
    excerpt:
      "Ontario winters are hard on windows. A 20-minute walk around your home now can prevent drafts, water damage, and emergency calls in January. Here are 10 things every GTA homeowner should check before the temperature drops.",
    publishedAt: "2026-10-07",
    updatedAt: "2026-11-02",
    author: "Dan",
    readingTime: 7,
    tags: ["winter", "window maintenance", "foggy glass", "window cranks", "drafts"],
    sections: [
      { id: "why-check-now", title: "Why Check Your Windows Now?" },
      { id: "condensation-between-panes", title: "1. Condensation Between the Panes" },
      { id: "drafts-around-frames", title: "2. Drafts Around the Frame" },
      { id: "crank-handles", title: "3. Crank Handles That Spin or Stick" },
      { id: "locks-that-dont-latch", title: "4. Locks That Don't Latch" },
      { id: "weatherstripping", title: "5. Worn or Missing Weatherstripping" },
      { id: "cracked-glass", title: "6. Cracked or Chipped Glass" },
      { id: "sliding-doors", title: "7. Sliding Doors That Drag" },
      { id: "skylights", title: "8. Skylights: Leaks and Condensation" },
      { id: "storm-doors-and-screens", title: "9. Storm Doors and Screens" },
      { id: "balcony-doors", title: "10. Balcony Door Seals" },
      { id: "what-to-do-next", title: "What to Do Next" },
    ],
    content: `
<p>Ontario winters are hard on windows. Temperatures swing from mild fall days to deep freezes overnight, and that cycle puts stress on every seal, hinge, and pane in your home. A 20-minute walk around your house now can prevent drafts, water damage, and emergency calls in January.</p>

<p>This checklist covers the 10 most common issues we see every fall in Vaughan, Thornhill, Richmond Hill, and across the GTA. Most are easy to spot. Some you can feel with your hand. All of them are cheaper to fix before winter than during it.</p>

<h2 id="why-check-now">Why Check Your Windows Now?</h2>

<p>Cold air finds every gap. A small draft you barely notice in October becomes a steady stream of cold air by December. Moisture that seeps through a failed seal freezes, expands, and can crack the glass or warp the frame. And once snow is on the ground, scheduling a repair takes longer and costs more.</p>

<p>Catching problems now means you have time to get them fixed while the weather is still cooperative. Most window hardware repairs are completed on the same day, on the first visit. Glass replacements require a measurement visit first, since sealed units are custom-made to fit your exact opening.</p>

<h2 id="condensation-between-panes">1. Condensation Between the Panes</h2>

<p>If you see fog, moisture, or a milky haze trapped between the two layers of glass, the sealed unit has failed. The insulating gas has escaped and outside air has gotten in. Wiping the glass does not help because the moisture is inside the unit. If you're not sure whether the fog is between the panes or just surface condensation on cold glass, see our guide on <a href="/blog/window-condensation-in-winter">window condensation in winter</a>.</p>

<p>This is the single most common window issue in the GTA, especially in homes built between 2000 and 2015. The good news: you almost never need to replace the whole window. The <a href="/foggy-windows">sealed glass unit can be replaced</a> on its own. The frame stays, the trim stays, and the job typically takes under an hour once the new glass arrives.</p>

<p>Check every window in your home, including basement windows. Pay extra attention to south-facing and west-facing glass, which takes the most sun exposure and tends to fail first.</p>

<h2 id="drafts-around-frames">2. Drafts Around the Frame</h2>

<p>Hold your hand along the edges of each window on a cool day. If you feel air movement, something is not sealing properly. Common culprits include worn weatherstripping, a lock that no longer pulls the sash tight, or old caulking that has cracked and separated from the frame.</p>

<p>Small drafts add up fast. A few leaky windows can increase your heating bill noticeably and make certain rooms uncomfortable all winter. In many cases, replacing the weatherstripping or adjusting the hardware is all it takes to restore the seal.</p>

<h2 id="crank-handles">3. Crank Handles That Spin or Stick</h2>

<p>Casement and awning windows use a crank operator to open and close. Over time, the gears wear down. You will notice the handle spinning without moving the sash, or the window not closing all the way. A window that does not close flush is a window that leaks air and water.</p>

<p>This is a <a href="/cranks">window hardware repair</a>, not a window replacement. The operator mechanism is a replaceable part. Most window hardware repairs are completed on the same day, on the first visit.</p>

<p>Test every crank in your home. Open the window, close it, and make sure it pulls tight against the frame with no gaps. For a full breakdown of which crank part failed and how, see our guide on <a href="/blog/window-crank-repair-toronto">window crank repair in Toronto</a>.</p>

<h2 id="locks-that-dont-latch">4. Locks That Don't Latch</h2>

<p>Window locks do more than keep intruders out. They pull the sash tight against the weatherstripping, creating the air seal your window depends on. A lock that does not engage, or one that closes but feels loose, means the sash is not compressing the seal properly.</p>

<p>Try every lock. If it does not click firmly into place, or if you can still wiggle the sash after locking, the lock mechanism likely needs replacing. Like cranks, this is a hardware repair that can usually be done in a single visit.</p>

<h2 id="weatherstripping">5. Worn or Missing Weatherstripping</h2>

<p>Weatherstripping is the rubber or foam gasket that runs along the edges of your window sash. It compresses when the window closes to create a tight seal. After years of opening and closing, it flattens, cracks, or pulls away from the frame entirely.</p>

<p>Look at the stripping around each window. If it is cracked, compressed flat, torn, or missing in sections, it needs to be replaced. This is one of the most affordable fixes and makes an immediate difference in comfort and energy efficiency.</p>

<h2 id="cracked-glass">6. Cracked or Chipped Glass</h2>

<p>A small crack might seem harmless, but temperature changes cause glass to expand and contract. A chip that survives September can spider across the pane during the first hard freeze. Once a crack reaches the edge of the glass, the pane can fail completely.</p>

<p>If you have any cracked or chipped glass, get it assessed before winter. Glass is measured first, custom-made, then installed. Starting the process now means your new glass arrives before the cold does.</p>

<h2 id="sliding-doors">7. Sliding Doors That Drag</h2>

<p>Sliding patio doors ride on rollers along a bottom track. Over time, the rollers wear out and the door starts dragging. A door that does not slide smoothly is a door that does not close tightly, and that means drafts along the entire bottom edge.</p>

<p>Test your sliding doors. They should glide easily with one hand. If you need to lift, jerk, or force the door, the rollers or track likely need attention. Also check the latch. It should pull the door snug against the frame when locked.</p>

<h2 id="skylights">8. Skylights: Leaks and Condensation</h2>

<p><a href="/skylights">Skylights</a> take more abuse than any other window in your home. They sit at an angle, collecting rain, snow, ice, and direct sun. The seals around skylights fail faster than vertical windows, and leaks can go unnoticed until water stains appear on the ceiling below.</p>

<p>Look at the interior frame of each skylight. Any discolouration, bubbling paint, or soft drywall is a sign of water getting in. From outside, check that the flashing around the skylight is intact and that no caulking has pulled away.</p>

<p>Condensation inside a skylight follows the same rules as any window. If the fog is between the panes, the sealed unit has failed and needs replacing. Our post on <a href="/blog/skylights-in-winter-leaks-ice-dams-condensation">skylights in winter</a> explains how to tell a leak from condensation.</p>

<h2 id="storm-doors-and-screens">9. Storm Doors and Screens</h2>

<p>If you have <a href="/screen-storm-doors">storm doors</a>, fall is the time to swap the screen panel for the glass insert. A storm door with a glass panel adds a layer of insulation to your entry door and cuts drafts significantly.</p>

<p>Check the door closer, the latch, and the weatherstripping around the frame. A storm door that does not close fully or that has gaps around the edges is not doing its job. Also inspect <a href="/window-screens">window screens</a> and decide whether to remove and store them for winter. Screens left on through winter collect ice and can get damaged.</p>

<h2 id="balcony-doors">10. Balcony Door Seals</h2>

<p>If you live in a condo or townhouse, check the seal around your balcony door. Balcony doors are exposed to wind on upper floors and often develop drafts along the bottom or the hinge side. The weatherstripping compresses faster on doors that get opened and closed frequently.</p>

<p>Close the door and run your hand along all four edges. Any air movement means the seal needs attention. Also check that the door handle pulls the door tight when locked. A loose multi-point lock is a common source of cold air in high-rise units.</p>

<h2 id="what-to-do-next">What to Do Next</h2>

<p>Walk through your home with this list. For most people, the inspection takes about 20 minutes. Make a note of anything that feels off: a draft, a sticky handle, fog between panes, a lock that does not latch.</p>

<p>If everything checks out, you are set for winter. If you find one or two issues, getting them fixed now is straightforward. Most hardware repairs are same-day. Glass replacements typically take one to two weeks from measurement to installation. See our guide on <a href="/blog/replace-window-glass-in-winter">replacing window glass in winter</a>.</p>

<p>For anything on this list, we can help. Book a $30 site visit and a technician will inspect the problem, explain your options, and give you a written quote. That $30 gets credited toward whatever work you decide to do.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a quote online</a> to get your windows winter-ready.</p>
`,
  },
  {
    slug: "window-condensation-in-winter",
    title: "Window Condensation in Winter: Normal, or a Failed Seal?",
    metaTitle: "Window Condensation in Winter: Causes + Fixes",
    metaDescription:
      "Water on your windows in winter? Learn what condensation inside, outside and between the panes means, and when a foggy window needs a new sealed glass unit.",
    excerpt:
      "Water on your windows when the temperature drops does not always mean something is wrong. But sometimes it does. The difference depends on where the moisture is: inside the room, outside on the glass, or trapped between the panes.",
    publishedAt: "2026-10-07",
    updatedAt: "2026-11-02",
    author: "Dan",
    readingTime: 5,
    coverImage: "/images/gallery/foggy-window-before.webp",
    tags: ["winter", "condensation", "foggy glass", "sealed unit", "IGU"],
    sections: [
      { id: "why-windows-sweat", title: "Why Windows Sweat in Winter" },
      { id: "condensation-on-the-inside", title: "Condensation on the Inside Surface" },
      { id: "condensation-on-the-outside", title: "Condensation on the Outside Surface" },
      { id: "condensation-between-the-panes", title: "Condensation Between the Panes" },
      { id: "how-sealed-units-fail", title: "How Sealed Units Fail" },
      { id: "can-a-foggy-window-be-repaired", title: "Can a Foggy Window Be Repaired?" },
      { id: "can-you-replace-glass-in-winter", title: "Can You Replace Glass in Winter?" },
      { id: "faq", title: "Common Questions" },
      { id: "not-sure", title: "Not Sure What You're Looking At?" },
    ],
    content: `
<p>Water on your windows when the temperature drops does not always mean something is wrong. But sometimes it does. The difference depends on where the moisture is: inside the room, outside on the glass, or trapped between the panes.</p>

<p>Each type of condensation has a different cause and a different fix. This guide explains all three so you can tell what is normal, what is not, and when you need a professional.</p>

<h2 id="why-windows-sweat">Why Windows Sweat in Winter</h2>

<p>Condensation forms when warm, moist air hits a cold surface. In winter, your window glass is the coldest surface in the room. When indoor humidity is high enough, water droplets collect on the glass the same way they form on a cold drink in summer.</p>

<p>This is basic physics, not a defect. But the location of the moisture tells you whether the window is working as designed or whether something has failed.</p>

<h2 id="condensation-on-the-inside">Condensation on the Inside Surface</h2>

<p>If water forms on the interior surface of the glass, the side you can touch from inside your home, the window is doing its job. The glass is cold, the indoor air is humid, and the moisture lands on the coldest available surface.</p>

<p>This is most common in kitchens, bathrooms, and bedrooms. Cooking, showering, and even breathing raise indoor humidity. New homes and recently renovated homes tend to be more airtight, which traps more moisture inside.</p>

<p>What to do about it:</p>

<ul>
  <li>Run exhaust fans in kitchens and bathrooms during and after cooking or showering.</li>
  <li>Open a window briefly to exchange humid indoor air for dry outdoor air.</li>
  <li>Use a dehumidifier if the problem is widespread.</li>
  <li>Make sure your dryer vents to the outside, not into the house.</li>
</ul>

<p>If interior condensation only appears on one or two windows while the rest stay dry, those windows may have a weaker thermal seal than the others. It does not necessarily mean they are broken, but it is worth watching.</p>

<h2 id="condensation-on-the-outside">Condensation on the Outside Surface</h2>

<p>Moisture on the exterior surface of the glass, the side facing your yard, is actually a sign that your window is working well. It means the outer pane is staying cool because the insulating gas between the panes is preventing heat from transferring through.</p>

<p>Exterior condensation usually appears on cool, clear mornings and burns off once the sun hits the glass. It is most common on high-performance windows with low-E coatings. No action is needed.</p>

<h2 id="condensation-between-the-panes">Condensation Between the Panes</h2>

<p>This is the one that matters. If you see fog, haze, or moisture trapped between the two layers of glass, and you cannot wipe it away from either side, the sealed unit has failed.</p>

<p>Modern windows use two or three panes of glass separated by a spacer and sealed at the edges. The gap between the panes is filled with argon or air to provide insulation. When the perimeter seal breaks down, that insulating gas escapes and outside air gets in, bringing moisture with it.</p>

<p>A failed seal means:</p>

<ul>
  <li>The window has lost its insulating value. You are now looking through two single panes instead of one insulated unit.</li>
  <li>The fog will get worse over time, not better. Some days it may look clear, but the seal is permanently broken.</li>
  <li>Energy costs go up because the window is no longer blocking heat transfer the way it was designed to.</li>
</ul>

<p>This is the most common window problem in the GTA. If your home was built between 2000 and 2015, check every window. South-facing and west-facing glass tends to fail first because of repeated sun exposure. For a deeper look at why this happens, see our guide on <a href="/blog/why-windows-fog-between-panes">why windows fog up between the panes</a>.</p>

<h2 id="how-sealed-units-fail">How Sealed Units Fail</h2>

<p>The sealant around the edge of a sealed glass unit is designed to last 15 to 25 years. Over time, UV exposure, temperature cycling, and moisture break it down. Once the seal cracks or separates from the spacer, the unit is compromised.</p>

<p>Common reasons seals fail earlier than expected:</p>

<ul>
  <li>Direct, prolonged sun exposure, especially on south and west elevations.</li>
  <li>Poor original manufacturing or installation.</li>
  <li>Dark-coloured window frames that absorb more heat.</li>
  <li>Pressure washing or cleaning chemicals applied directly to the seal edge.</li>
</ul>

<p>Once the seal is broken, there is no way to reseal it from the outside. The glass unit needs to be replaced.</p>

<h2 id="can-a-foggy-window-be-repaired">Can a Foggy Window Be Repaired?</h2>

<p>The sealed glass unit can be replaced without replacing the entire window. The frame stays. The trim stays. Only the glass is swapped out.</p>

<p>A technician measures the exact opening, orders a new sealed unit made to those dimensions, and installs it once the glass arrives. The process is called a <a href="/foggy-windows">sealed unit replacement</a>, and it is a fraction of the cost of a full window replacement.</p>

<p>Glass is measured first, custom-made, then installed. From measurement to installation, expect one to two weeks depending on the glass type and size.</p>

<h2 id="can-you-replace-glass-in-winter">Can You Replace Glass in Winter?</h2>

<p>Yes. Because the new glass is made to measure before installation day, the opening is only exposed for a short time while each unit is swapped. We cover this in detail in our guide on <a href="/blog/replace-window-glass-in-winter">replacing window glass in winter</a>.</p>

<p>For a full pre-winter check of your windows, doors, skylights and hardware, see our <a href="/blog/winter-window-checklist-gta">winter window checklist for GTA homes</a>.</p>

<h2 id="faq">Common Questions</h2>

<p><strong>My windows fog up every morning but clear by noon. Is the seal broken?</strong></p>
<p>Probably not. If the moisture is on the inside surface and you can wipe it with a cloth, that is interior condensation caused by humidity. Reduce indoor moisture with exhaust fans and ventilation.</p>

<p><strong>The fog is between the panes but it comes and goes. Does that mean the seal is fine?</strong></p>
<p>No. A failed seal lets moisture in and out depending on temperature and humidity. The fog disappearing temporarily does not mean the seal has recovered. Once broken, it stays broken.</p>

<p><strong>Can I just drill a hole to let the moisture out?</strong></p>
<p>Some companies offer this as a service, but it removes the insulating gas permanently and does not restore the seal. The window ends up with two uninsulated single panes. Replacing the sealed unit is the proper fix.</p>

<p><strong>Do I need to replace the whole window?</strong></p>
<p>Almost never. If the frame is in good condition, only the sealed glass unit needs replacing. See our <a href="/foggy-windows">foggy window repair</a> page for details.</p>

<p><strong>Where can I get foggy glass repaired near me?</strong></p>
<p>We serve the entire GTA. Here are some of the areas we cover:</p>
<ul>
  <li><a href="/foggy-glass-repair-vaughan">Foggy glass repair in Vaughan</a></li>
  <li><a href="/foggy-glass-repair-thornhill">Foggy glass repair in Thornhill</a></li>
  <li><a href="/foggy-glass-repair-richmond-hill">Foggy glass repair in Richmond Hill</a></li>
  <li><a href="/foggy-glass-repair-markham">Foggy glass repair in Markham</a></li>
  <li><a href="/foggy-glass-repair-aurora">Foggy glass repair in Aurora</a></li>
  <li><a href="/foggy-glass-repair-newmarket">Foggy glass repair in Newmarket</a></li>
  <li><a href="/foggy-glass-repair-north-york">Foggy glass repair in North York</a></li>
</ul>

<h2 id="not-sure">Not Sure What You're Looking At?</h2>

<p>If you cannot tell whether your condensation is on the surface or between the panes, a quick site visit will give you a clear answer. A technician inspects the window, identifies whether the seal has failed, and gives you a written quote if work is needed. We serve <a href="/window-repair-vaughan">Vaughan</a>, <a href="/window-repair-toronto">Toronto</a>, <a href="/window-repair-mississauga">Mississauga</a>, and the entire GTA.</p>

<p>Book a $30 site visit. That fee gets credited toward whatever work you decide to do.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a quote online</a>.</p>
`,
  },
  {
    slug: "replace-window-glass-in-winter",
    coverImage: "/images/services/foggy-window-real.webp",
    title: "Can You Replace Window Glass in Winter? A Guide for GTA Homeowners",
    metaTitle: "Can You Replace Window Glass in Winter?",
    metaDescription:
      "Yes, foggy and broken window glass can be replaced in winter. Here's how cold-weather glass replacement works, how long it takes and how to prepare.",
    excerpt:
      "Yes. Foggy sealed units, cracked panes, and broken glass can all be replaced during winter. The process is designed so your home stays warm throughout. Here is how it works.",
    publishedAt: "2026-10-07",
    updatedAt: "2026-11-02",
    author: "Dan",
    readingTime: 6,
    tags: ["winter", "glass replacement", "foggy glass", "broken glass", "sealed unit"],
    sections: [
      { id: "short-answer", title: "The Short Answer" },
      { id: "how-winter-glass-replacement-works", title: "How Winter Glass Replacement Works" },
      { id: "what-about-the-cold-air", title: "What About the Cold Air?" },
      { id: "types-of-glass-replaced-in-winter", title: "Types of Glass Replaced in Winter" },
      { id: "does-cold-weather-affect-the-seal", title: "Does Cold Weather Affect the Seal?" },
      { id: "how-long-does-it-take", title: "How Long Does It Take?" },
      { id: "how-to-prepare-your-home", title: "How to Prepare Your Home" },
      { id: "other-winter-repairs", title: "Other Winter Repairs We Do" },
      { id: "faq", title: "Common Questions" },
      { id: "dont-wait", title: "Don't Wait Until Spring" },
    ],
    content: `
<p>Yes. Foggy sealed units, cracked panes, and broken glass can all be replaced during winter. The process is designed so your home stays warm throughout. Here is how it works.</p>

<h2 id="short-answer">The Short Answer</h2>

<p>Window glass replacement can be done year-round, including through the coldest months of a GTA winter. The reason is simple: the new glass is manufactured and ready before the technician arrives. On installation day, the old unit comes out and the new one goes in. The opening is exposed for minutes, not hours.</p>

<p>This applies to <a href="/foggy-windows">foggy sealed units</a>, cracked panes, broken glass, and most other glass-related repairs. If the frame is intact, the glass can be swapped without removing the window from the wall.</p>

<h2 id="how-winter-glass-replacement-works">How Winter Glass Replacement Works</h2>

<p>The process has two stages, separated by a manufacturing period:</p>

<p><strong>Stage 1: Measurement.</strong> A technician visits your home, inspects the window, and takes precise measurements of the glass opening. This visit also confirms whether the frame is in good condition and whether any hardware needs attention. The $30 site visit fee covers this assessment, and it gets credited toward the final cost if you proceed.</p>

<p><strong>Stage 2: Installation.</strong> Once the new sealed unit is manufactured to your exact dimensions, the technician returns to install it. The old glass is removed, the new unit is set into the frame, and the glazing is sealed. For a standard window, installation takes 20 to 40 minutes per unit.</p>

<p>The gap between measurement and installation is typically one to two weeks, depending on the glass type, size, and any special coatings like low-E or tinted glass.</p>

<h2 id="what-about-the-cold-air">What About the Cold Air?</h2>

<p>This is the question homeowners ask most. The concern is understandable: nobody wants a window-sized hole in their wall when it is minus 15 outside.</p>

<p>In practice, the exposure time is very short. The technician prepares everything before removing the old glass. The new unit is standing by, ready to go in. The swap itself takes a few minutes per pane. For most jobs, the room temperature barely changes.</p>

<p>If you are replacing multiple windows in the same home, the technician works one window at a time, finishing each before starting the next. Your home is never left with more than one opening exposed.</p>

<h2 id="types-of-glass-replaced-in-winter">Types of Glass Replaced in Winter</h2>

<p>Nearly every type of residential glass can be replaced in cold weather:</p>

<ul>
  <li><strong>Foggy sealed units (IGUs):</strong> the most common winter job. Failed seals let moisture in, and the fog is most visible in winter because of the temperature difference. See our page on <a href="/foggy-windows">foggy window repair</a>.</li>
  <li><strong>Cracked or broken panes:</strong> whether from impact, thermal stress, or a failed seal that let moisture freeze and expand.</li>
  <li><strong><a href="/front-door-glass">Front door glass</a>:</strong> decorative and sidelite panels can be replaced without removing the door.</li>
  <li><strong><a href="/skylights">Skylight glass</a>:</strong> skylights take heavy abuse from snow and ice, and their seals tend to fail faster than vertical windows.</li>
  <li><strong><a href="/screen-storm-doors">Storm door glass</a>:</strong> cracked or foggy storm door panels are replaced the same way.</li>
</ul>

<h2 id="does-cold-weather-affect-the-seal">Does Cold Weather Affect the Seal?</h2>

<p>Modern glazing sealants are formulated to cure in a wide range of temperatures. Professional-grade silicone and polyurethane sealants bond properly in cold conditions. The sealed unit itself is manufactured in a climate-controlled facility regardless of the season, so the insulating gas fill and edge seal are identical to what you would get in summer.</p>

<p>The only weather condition that may delay installation is extreme wind or heavy precipitation, because moisture on the frame surface can interfere with sealant adhesion. Light snow and normal winter cold are not a problem.</p>

<h2 id="how-long-does-it-take">How Long Does It Take?</h2>

<p>From first call to finished installation, expect two to three weeks:</p>

<ul>
  <li><strong>Measurement visit:</strong> usually scheduled within a few days of your call.</li>
  <li><strong>Manufacturing:</strong> one to two weeks for standard sealed units. Specialty glass (oversized, shaped, tinted, or triple-pane) may take slightly longer.</li>
  <li><strong>Installation:</strong> 20 to 40 minutes per window on site. Most homes with one to three windows are done in under two hours.</li>
</ul>

<p>If you have a broken window that is letting cold air or water in right now, let us know when you call. We can often arrange a temporary seal or board-up until the new glass arrives.</p>

<h2 id="how-to-prepare-your-home">How to Prepare Your Home</h2>

<p>There is not much to do, but a few things help the process go smoothly:</p>

<ul>
  <li>Clear the area around the window. Move furniture, curtains, and anything fragile away from the work zone.</li>
  <li>Keep the room warm. The technician will work quickly, but starting from a warm room means any brief cold air exposure has less impact.</li>
  <li>Make sure the technician can access the window from inside. If the window is above a counter or bathtub, clear the surface.</li>
  <li>If the window is on an upper floor, let us know in advance so the crew brings the right equipment.</li>
</ul>

<h2 id="other-winter-repairs">Other Winter Repairs We Do</h2>

<p>Glass replacement is not the only repair that can be done in cold weather. These are also common winter calls:</p>

<ul>
  <li><a href="/cranks">Window crank and hardware repair</a>: a broken crank means a window that does not close, which means drafts. Most window hardware repairs are completed on the same day, on the first visit.</li>
  <li>Weatherstripping replacement: restores the seal around your window sash without replacing any glass or hardware.</li>
  <li><a href="/skylights">Skylight seal and glass repair</a>: skylights are exposed to snow, ice, and freeze-thaw cycles that accelerate seal failure.</li>
  <li><a href="/screen-storm-doors">Storm door glass and screen doors</a>: swap a cracked storm door panel or install the glass insert for winter.</li>
</ul>

<p>Not sure if your foggy glass is from a failed seal or just normal condensation? See our guide on <a href="/blog/window-condensation-in-winter">window condensation in winter</a>. For a full pre-winter check of everything on your windows, doors, and skylights, see our <a href="/blog/winter-window-checklist-gta">winter window checklist for GTA homes</a>.</p>

<h2 id="faq">Common Questions</h2>

<p><strong>Will my house get cold during installation?</strong></p>
<p>Briefly. The opening is exposed for only a few minutes per window. Most homeowners do not notice a meaningful temperature change in the room.</p>

<p><strong>Can you replace glass when it is snowing?</strong></p>
<p>Light snow is fine. Heavy snow or ice storms may require rescheduling to ensure proper sealant adhesion and safe working conditions.</p>

<p><strong>Is winter glass replacement more expensive?</strong></p>
<p>No. The cost is the same year-round. The glass is manufactured the same way regardless of season.</p>

<p><strong>What if my window is broken right now and letting in cold air?</strong></p>
<p>Call us and let us know it is urgent. We can arrange a temporary seal or board-up within a day or two while the new glass is being made.</p>

<p><strong>Do I need to replace the whole window?</strong></p>
<p>Almost never. If the frame is in good condition, only the glass unit needs to be replaced. The frame stays, the trim stays, and the cost is a fraction of full window replacement.</p>

<p><strong>Where do you do winter glass replacement?</strong></p>
<p>We serve the entire GTA, including:</p>
<ul>
  <li><a href="/window-repair-vaughan">Window repair in Vaughan</a></li>
  <li><a href="/window-repair-thornhill">Window repair in Thornhill</a></li>
  <li><a href="/window-repair-richmond-hill">Window repair in Richmond Hill</a></li>
  <li><a href="/window-repair-markham">Window repair in Markham</a></li>
  <li><a href="/window-repair-aurora">Window repair in Aurora</a></li>
  <li><a href="/window-repair-newmarket">Window repair in Newmarket</a></li>
</ul>

<h2 id="dont-wait">Don't Wait Until Spring</h2>

<p>A foggy or broken window is not just a cosmetic issue. It is costing you heat every day it stays unrepaired. The longer you wait, the more energy you lose and the higher the chance of secondary damage from moisture getting into the frame.</p>

<p>Winter is actually one of the best times to deal with window glass problems, because the symptoms are most visible and the motivation is immediate. You can see the fog, feel the draft, and measure the difference once the new glass is in.</p>

<p>Book a $30 site visit and a technician will inspect the problem, explain your options, and give you a written quote. That $30 gets credited toward whatever work you decide to do.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a quote online</a>.</p>
`,
  },
  {
    slug: "skylights-in-winter-leaks-ice-dams-condensation",
    title: "Skylights in Winter: Leaks, Ice Dams and Condensation Explained",
    metaTitle: "Skylights in Winter: Leaks and Condensation",
    metaDescription:
      "Water dripping from your skylight? Learn how to tell condensation from a real leak, how ice dams affect skylights and when to repair or replace.",
    excerpt:
      "Water around your skylight in winter can mean condensation, a failed seal, a flashing leak, or ice dam backup. Each has a different cause and a different fix. This guide helps you figure out which one you are dealing with.",
    publishedAt: "2026-10-07",
    updatedAt: "2026-11-02",
    author: "Dan",
    readingTime: 6,
    coverImage: "/images/services/skylight-foggy-before.webp",
    tags: ["winter", "skylights", "skylight leak", "ice dams", "condensation"],
    sections: [
      { id: "why-skylights-struggle", title: "Why Skylights Struggle in Winter" },
      { id: "condensation-vs-leak", title: "Condensation vs. a Real Leak" },
      { id: "skylight-condensation", title: "Skylight Condensation" },
      { id: "fogged-skylight-glass", title: "Fogged Skylight Glass" },
      { id: "flashing-leaks", title: "Flashing Leaks" },
      { id: "ice-dams", title: "Ice Dams and Skylights" },
      { id: "when-to-repair-vs-replace", title: "When to Repair vs. Replace a Skylight" },
      { id: "what-you-can-do-now", title: "What You Can Do Now" },
      { id: "faq", title: "Common Questions" },
      { id: "worried", title: "Worried About Your Skylight?" },
    ],
    content: `
<p>Water around your skylight in winter can mean condensation, a failed seal, a flashing leak, or ice dam backup. Each has a different cause and a different fix. This guide helps you figure out which one you are dealing with.</p>

<h2 id="why-skylights-struggle">Why Skylights Struggle in Winter</h2>

<p><a href="/skylights">Skylights</a> sit at an angle on your roof, which means they collect everything vertical windows avoid: rain pools, snow loads, ice buildup, and direct UV at steep angles. The seals, flashing, and glass all take more abuse than any other window in the house.</p>

<p>In winter, the problems multiply. Warm air rises to the ceiling where the skylight sits, creating the biggest temperature difference in the home. Snow melts on the glass, refreezes at the edges, and puts pressure on every joint. Condensation forms on the coldest surface in the room, which is almost always the skylight.</p>

<p>The result: skylights are the window most likely to show water problems in winter, and homeowners often cannot tell whether the water is condensation, a seal failure, or a genuine roof leak.</p>

<h2 id="condensation-vs-leak">Condensation vs. a Real Leak</h2>

<p>The fastest way to tell the difference:</p>

<ul>
  <li><strong>Condensation</strong> appears as a fine mist, small droplets, or frost on the interior surface of the glass. You can wipe it with a cloth. It tends to appear in the morning and clear up as the room warms.</li>
  <li><strong>A leak</strong> produces running water, drips, or stains that appear on the frame, the drywall around the skylight, or the ceiling below. It gets worse during rain, snowmelt, or freeze-thaw cycles.</li>
  <li><strong>A failed seal</strong> shows fog or haze trapped between the panes that you cannot wipe from either side. This looks like condensation but is inside the glass unit itself.</li>
</ul>

<p>Each of these has a different fix. Treating one as another wastes time and money.</p>

<h2 id="skylight-condensation">Skylight Condensation</h2>

<p>Warm, humid indoor air rises to the ceiling and hits the cold skylight glass. Water droplets form on the surface. This is normal physics, not a defect.</p>

<p>Skylight condensation is most common in:</p>

<ul>
  <li>Kitchens and bathrooms, where cooking and showering add moisture to the air.</li>
  <li>Bedrooms, especially with the door closed overnight.</li>
  <li>New or recently renovated homes that are more airtight than older ones.</li>
</ul>

<p>What helps:</p>

<ul>
  <li>Run exhaust fans during and after cooking or showering.</li>
  <li>Open a window briefly each day to exchange humid air for dry outdoor air.</li>
  <li>Use a dehumidifier if condensation appears on multiple skylights or windows.</li>
  <li>If your skylight has a built-in vent, open it when the weather allows.</li>
</ul>

<p>For a deeper explanation of the three types of window condensation, see our guide on <a href="/blog/window-condensation-in-winter">window condensation in winter</a>.</p>

<h2 id="fogged-skylight-glass">Fogged Skylight Glass</h2>

<p>If the fog is between the two panes of glass, not on the interior surface, the sealed unit has failed. The insulating gas has escaped and outside moisture has gotten in. No amount of ventilation will fix this because the problem is inside the glass unit.</p>

<p>The sealed glass unit can be replaced without replacing the entire skylight frame, as long as the frame is still in good condition. Glass is measured first, custom-made to the exact opening, then installed. If you decide to replace a fogged skylight unit, we explain the cold-weather process in our guide on <a href="/blog/replace-window-glass-in-winter">replacing window glass in winter</a>.</p>

<p>Skylight seals tend to fail earlier than vertical window seals because of the angle of exposure. South-facing skylights fail first.</p>

<h2 id="flashing-leaks">Flashing Leaks</h2>

<p>Flashing is the metal or rubber membrane that seals the joint between the skylight frame and the roof. Over time, flashing can lift, crack, or separate from the frame, especially after years of thermal expansion and contraction.</p>

<p>Signs of a flashing leak:</p>

<ul>
  <li>Water stains or drips appearing on the drywall around the skylight, not on the glass itself.</li>
  <li>Water that appears during or shortly after rain, or during snowmelt.</li>
  <li>Discolouration, soft spots, or bubbling paint on the ceiling near the skylight.</li>
</ul>

<p>Flashing leaks are a roofing issue at the junction point. In some cases, the flashing can be resealed. In others, the flashing kit needs to be replaced entirely. If the skylight frame itself is damaged or warped from prolonged water exposure, the entire unit may need replacing.</p>

<h2 id="ice-dams">Ice Dams and Skylights</h2>

<p>An ice dam forms when heat escaping through the roof melts snow from underneath. The meltwater runs down to the eaves, where it refreezes into a ridge of ice. Water pools behind the dam and can back up under shingles and around skylight flashing.</p>

<p>Skylights are especially vulnerable because:</p>

<ul>
  <li>They create a warm spot on the roof surface, accelerating snowmelt directly around the frame.</li>
  <li>The flashing joint is a natural weak point where backed-up water can penetrate.</li>
  <li>Ice forming around the skylight frame puts mechanical pressure on the seal.</li>
</ul>

<p>Short-term, you can carefully remove snow from around the skylight with a roof rake (never use a shovel or ice pick on the glass). Long-term, ice dams are usually an insulation and ventilation problem in the attic. Improving attic insulation reduces heat loss through the roof and prevents the melt-refreeze cycle that creates dams.</p>

<h2 id="when-to-repair-vs-replace">When to Repair vs. Replace a Skylight</h2>

<p><strong>Repair makes sense when:</strong></p>

<ul>
  <li>The glass unit has fogged but the frame is solid. Replace the sealed unit only.</li>
  <li>The flashing has separated but the frame and glass are fine. Reseal or replace the flashing.</li>
  <li>Condensation is the issue. Improve ventilation, no parts needed.</li>
  <li>A single component has failed (handle, hinge, seal) but the rest is intact.</li>
</ul>

<p><strong>Replacement makes sense when:</strong></p>

<ul>
  <li>The frame is warped, rotted, or water-damaged.</li>
  <li>Multiple components have failed at once (glass, seal, flashing, hardware).</li>
  <li>The skylight is 25+ years old and showing several of the problems above.</li>
  <li>You want to upgrade to a more energy-efficient unit with better low-E coating or triple-pane glass.</li>
</ul>

<h2 id="what-you-can-do-now">What You Can Do Now</h2>

<p>Before winter sets in, do a quick skylight inspection:</p>

<ul>
  <li>From inside, look at the glass. Any fog between the panes means a failed seal.</li>
  <li>Check the drywall and paint around the skylight frame. Stains, bubbling, or soft spots mean water has been getting in.</li>
  <li>From outside (if safely accessible), check that the flashing sits flat against the roof and the skylight frame with no gaps or lifted edges.</li>
  <li>Clear any debris from around the skylight. Leaves and branches trap moisture and accelerate seal breakdown.</li>
  <li>If your skylight has a crank or handle, test it. A skylight that does not close fully will leak.</li>
</ul>

<p>For a full pre-winter check of your windows, doors and skylights together, see our <a href="/blog/winter-window-checklist-gta">winter window checklist for GTA homes</a>.</p>

<h2 id="faq">Common Questions</h2>

<p><strong>My skylight drips every morning but stops by noon. Is it leaking?</strong></p>
<p>Probably not. That pattern is typical of condensation. Warm air rises overnight, moisture collects on the cold glass, and it drips as it accumulates. It clears when the sun warms the glass. Try improving ventilation in the room.</p>

<p><strong>There is frost on the inside of my skylight. Is that normal?</strong></p>
<p>It can be, especially on very cold nights in rooms with higher humidity. Frost on the interior surface is condensation that froze. It melts and drips as the room warms. If frost appears between the panes, the seal has failed.</p>

<p><strong>Can a skylight leak be fixed without replacing the whole unit?</strong></p>
<p>Often, yes. If the leak is from flashing failure and the frame and glass are fine, resealing or replacing the flashing kit is the fix. If the glass unit has fogged, only the sealed unit needs replacing. Full skylight replacement is only needed when the frame itself is compromised.</p>

<p><strong>How much snow on a skylight is too much?</strong></p>
<p>Skylights are engineered to handle normal snow loads. But if snow is piling up around the frame and not sliding off, clearing it with a roof rake reduces the risk of ice dam formation and pressure on the seal. Never walk on or near a skylight to clear snow.</p>

<p><strong>My skylight is 20 years old. Should I replace it before winter?</strong></p>
<p>Not necessarily. If the glass is clear, the frame is solid, the flashing is intact, and it opens and closes properly, it may have years of life left. A $30 site visit can tell you exactly what condition it is in and whether any preventive work is worth doing now.</p>

<h2 id="worried">Worried About Your Skylight?</h2>

<p>If you are seeing water, fog, frost, or stains around your skylight, a quick inspection will tell you exactly what is going on. We handle <a href="/skylight-repair-vaughan">skylight repair in Vaughan</a>, <a href="/skylight-repair-toronto">Toronto</a>, <a href="/skylight-repair-mississauga">Mississauga</a>, and across the GTA. A technician checks the glass, the seal, the flashing, and the frame, then gives you a clear answer and a written quote if work is needed.</p>

<p>Book a $30 site visit. That fee gets credited toward whatever work you decide to do.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a quote online</a>.</p>
`,
  },
  {
    slug: "window-crank-repair-toronto",
    title: "Why Your Window Crank Broke, and What Actually Needs Fixing",
    metaTitle: "Window Crank Repair in Toronto",
    metaDescription:
      "The handle spins or won't turn. What actually failed inside your casement window crank, how to tell which part broke, and why repair beats replacement.",
    excerpt:
      "You turn the handle and nothing happens. Or it spins freely without moving the window. Crank failure is the single most common window repair we are called out for across the GTA, and almost every homeowner asks the same thing: does this mean I need a new window? Almost never.",
    publishedAt: "2026-10-18",
    updatedAt: "2026-11-02",
    author: "Dan",
    readingTime: 4,
    coverImage: "/images/services/window-crank-door.webp",
    tags: ["window crank", "casement window", "hardware", "repair"],
    sections: [
      { id: "what-is-actually-inside-a-casement-window", title: "What Is Actually Inside a Casement Window" },
      { id: "how-to-tell-which-one-failed", title: "How to Tell Which One Failed" },
      { id: "why-it-is-worth-repairing", title: "Why It Is Worth Repairing" },
      { id: "why-doing-several-at-once-makes-sense", title: "Why Doing Several at Once Makes Sense" },
      { id: "can-you-fix-it-yourself", title: "Can You Fix It Yourself?" },
      { id: "before-winter-specifically", title: "Before Winter Specifically" },
    ],
    content: `
<p>You turn the handle and nothing happens. Or it spins freely without moving the window. Or it moves, grinding, and stops halfway. Crank failure is the single most common window repair we are called out for across the GTA, and almost every homeowner who calls asks the same thing first: does this mean I need a new window?</p>

<p>Almost never.</p>

<h2 id="what-is-actually-inside-a-casement-window">What Is Actually Inside a Casement Window</h2>

<p>A casement window, the kind that swings out like a door, is operated by three separate parts that people tend to lump together as "the crank."</p>

<p>The <strong>handle</strong> is the part you touch. It is the simplest part, and it is almost never the real problem.</p>

<p>The <strong>operator</strong> is the gearbox behind the handle, bolted inside the frame. It contains a worm gear that converts your turning into a push along an arm. This is what usually fails. The gear teeth wear down, strip, or the housing cracks.</p>

<p>The <strong>hinges</strong>, sometimes called hinge arms or the track, carry the weight of the sash as it swings. When these wear or bend, the window gets heavy and stiff, and that extra load is what kills the operator in the first place.</p>

<h2 id="how-to-tell-which-one-failed">How to Tell Which One Failed</h2>

<p><strong>The handle spins freely with no resistance.</strong> The gear inside the operator has stripped. The operator needs replacing.</p>

<p><strong>The handle turns but feels gritty and the window crawls.</strong> Worn gear teeth, or the hinges are binding and overloading the operator. Both need looking at, because replacing only the operator on bad hinges means you will be calling again next year.</p>

<p><strong>The handle will not turn at all.</strong> Usually a seized operator, or a hinge arm that has come off its track. Do not force it. Forcing a seized operator is how a repair becomes a replacement.</p>

<p><strong>The window opens but will not pull tight against the seal.</strong> That is usually a lock or keeper problem, not the crank at all, and it is the simplest of the three to fix.</p>

<h2 id="why-it-is-worth-repairing">Why It Is Worth Repairing</h2>

<p>The window itself is fine. The glass is fine, the frame is fine, the seal is fine. What failed is a gearbox the size of your palm. Replacing the whole window because of it is like replacing a car because the window winder broke.</p>

<p>There is one exception worth being honest about. If the frame itself is rotted or out of square, the hardware will keep failing no matter how many times it is replaced, because the window is no longer carrying its own weight properly. We will tell you that on site if we see it.</p>

<h2 id="why-doing-several-at-once-makes-sense">Why Doing Several at Once Makes Sense</h2>

<p>Almost everything in a repair visit is travel and setup. Once a technician is at your home with parts on the truck, the second and third window take far less time than the first.</p>

<p>If you have one window that is clearly broken and two more that feel stiff, it is worth doing all three in one visit rather than calling again in six months. Windows in the same house were installed at the same time and tend to wear out on the same schedule.</p>

<h2 id="can-you-fix-it-yourself">Can You Fix It Yourself?</h2>

<p>Sometimes. The difficulty is not the labour, it is getting the right part. Casement operators are not universal. They vary by manufacturer, by model year, by handing, and by the shape of the arm. The common outcome of a do-it-yourself crank repair is a part that arrives in a week, does not fit, and a window that is now half disassembled going into a cold weekend.</p>

<p>If you want to try, take the operator off, photograph both sides including any stamped numbers, and bring it to a hardware supplier rather than ordering by eye.</p>

<h2 id="before-winter-specifically">Before Winter Specifically</h2>

<p>A window that does not pull tight against its seal leaks heat all winter. <a href="/cranks">The crank, the hinges and the lock</a> are the three parts that control that seal. All three are small repairs compared with what a bad seal costs you over four months of heating.</p>

<p>For a full pre-winter check of your windows, see our <a href="/blog/winter-window-checklist-gta">winter window checklist for GTA homes</a>.</p>

<p>Not sure which part failed? We handle <a href="/window-crank-repair-vaughan">crank repairs in Vaughan</a>, <a href="/window-crank-repair-toronto">Toronto</a>, <a href="/window-crank-repair-mississauga">Mississauga</a>, and across the GTA. Send us a photo of the handle and the open window on WhatsApp and we will tell you what we are looking at. Call <a href="tel:+14373448490">437-344-8490</a>.</p>
`,
  },
  {
    slug: "condo-window-repair-who-pays-ontario",
    coverImage: "/images/services/foggy-window-condensation.webp",
    title: "Who Pays for Window Repairs in a Condo: the Unit Owner or the Corporation?",
    metaTitle: "Who Pays for Condo Window Repairs in Ontario?",
    metaDescription:
      "Window broken in your Ontario condo? Here is how to figure out whether the unit owner or the corporation pays, and what to do when it is unclear.",
    excerpt:
      "The glass in your condo has gone cloudy, or the crank has stopped working, and you are not sure whether to call a repair company or call the property manager. Here is how to find your answer quickly.",
    publishedAt: "2026-10-18",
    updatedAt: "2026-11-02",
    author: "Dan",
    readingTime: 4,
    tags: ["condo", "property management", "ontario", "responsibility"],
    sections: [
      { id: "the-general-shape-of-it-in-ontario", title: "The General Shape of It in Ontario" },
      { id: "how-to-find-out-in-ten-minutes", title: "How to Find Out in Ten Minutes" },
      { id: "where-it-gets-tricky", title: "Where It Gets Tricky" },
      { id: "a-note-for-boards-and-property-managers", title: "A Note for Boards and Property Managers" },
      { id: "if-it-turns-out-to-be-yours", title: "If It Turns Out to Be Yours" },
    ],
    content: `
<p>The glass in your condo has gone cloudy, or the crank has stopped working, and you are not sure whether to call a repair company or call the property manager. It is one of the most common questions we get from condo residents across the GTA, and the honest answer is that it depends on documents specific to your building.</p>

<p>Here is how to find your answer quickly.</p>

<h2 id="the-general-shape-of-it-in-ontario">The General Shape of It in Ontario</h2>

<p>Ontario condominiums are governed by the Condominium Act and, more importantly for this question, by each corporation's own <strong>declaration</strong>. The declaration is the founding document that defines what is a unit, what is common element, and what is exclusive-use common element.</p>

<p>Windows usually fall into one of three categories, and which one decides who pays.</p>

<p><strong>Common element.</strong> The corporation is responsible for repair and maintenance, funded through condo fees or the reserve fund. This is common in older high-rises where the whole facade is treated as one system.</p>

<p><strong>Exclusive-use common element.</strong> This is the middle ground, and where most of the confusion lives. The window belongs to the building, but only your unit uses it. Declarations often split the duty here: the corporation handles the structure and the glass, the owner handles day to day maintenance, or some similar division. The exact wording matters.</p>

<p><strong>Part of the unit.</strong> The owner is responsible. More common in townhouse-style condominiums and some newer stacked developments.</p>

<p>There is no single rule that covers every building in Ontario. This is general information, not legal advice, and your declaration governs.</p>

<h2 id="how-to-find-out-in-ten-minutes">How to Find Out in Ten Minutes</h2>

<p><strong>Read your declaration and your status certificate.</strong> Search the document for "window" and for "exclusive use." The answer is usually within a few lines of that phrase.</p>

<p><strong>Email the property manager and ask directly.</strong> A short, specific question gets a fast answer: "Is the glass in unit 1204 a common element, exclusive-use common element, or part of the unit under our declaration?"</p>

<p><strong>Ask whether there is a standing vendor.</strong> Many corporations already have a glass contractor they work with. If so, going through them is faster than arranging your own.</p>

<h2 id="where-it-gets-tricky">Where It Gets Tricky</h2>

<p><strong>Failed sealed units.</strong> A window that has fogged between the panes has failed as a component rather than been damaged. Corporations often handle these even in buildings where owners handle the hardware.</p>

<p><strong>Hardware.</strong> <a href="/cranks">Cranks</a>, hinges, locks and rollers are frequently treated as owner responsibility even where the glass is not, because they are wear items used by the occupant.</p>

<p><strong>Damage from inside the unit.</strong> If a window broke because of something that happened in your unit, expect to pay for it regardless of what the declaration says about maintenance.</p>

<p><strong>Timing.</strong> Even where the corporation is responsible, the work has to fit their schedule and budget. Owners sometimes choose to pay for a faster repair themselves. If you do, get written permission first, because unapproved work on a common element can be reversed at your expense.</p>

<h2 id="a-note-for-boards-and-property-managers">A Note for Boards and Property Managers</h2>

<p>The pattern we see most often in GTA buildings is a backlog of small glass and hardware issues, each one feeling too minor to schedule, until collectively they are a long and expensive list.</p>

<p>Handling them in batches costs dramatically less than one at a time, because most of the cost in any service visit is getting a technician on site. A morning spent across eight units is not eight visits.</p>

<p>We work with <a href="/property-managers">condo boards and property management companies</a> across the GTA on exactly this kind of batched work: sealed unit replacement, hardware repairs across multiple units, and glass for common areas and entrances.</p>

<h2 id="if-it-turns-out-to-be-yours">If It Turns Out to Be Yours</h2>

<p>If responsibility lands with you as the owner, the repair is usually smaller than you expect. A <a href="/foggy-windows">fogged sealed unit is replaced without touching the frame</a>. A failed crank is a part, not a window.</p>

<p>Send us a photo on WhatsApp and we will tell you what you are dealing with. Call <a href="tel:+14373448490">437-344-8490</a>.</p>
`,
  },
  {
    slug: "why-windows-fog-between-panes",
    title: "Why Windows Fog Up Between the Panes, and Why Cleaning Never Works",
    metaTitle: "Why Windows Fog Between the Panes",
    metaDescription:
      "The haze between your window panes is not dirt. Here is what happens inside a failed sealed glass unit and what the repair actually involves.",
    excerpt:
      "You have cleaned it twice. You have cleaned it from the outside. The haze is still there. It is not dirt, and you are not going to reach it. Here is what is actually happening inside that window.",
    publishedAt: "2026-10-18",
    updatedAt: "2026-11-02",
    author: "Dan",
    readingTime: 4,
    coverImage: "/images/services/foggy-window-condensation.webp",
    tags: ["foggy glass", "sealed unit", "IGU", "repair"],
    sections: [
      { id: "what-a-modern-window-is-made-of", title: "What a Modern Window Is Made Of" },
      { id: "what-fails", title: "What Fails" },
      { id: "what-makes-it-happen-sooner", title: "What Makes It Happen Sooner" },
      { id: "why-it-costs-you-more-than-appearance", title: "Why It Costs You More Than Appearance" },
      { id: "what-the-repair-actually-involves", title: "What the Repair Actually Involves" },
      { id: "when-replacing-the-glass-is-not-the-answer", title: "When Replacing the Glass Is Not the Answer" },
      { id: "how-to-check-your-own-house-this-week", title: "How to Check Your Own House This Week" },
    ],
    content: `
<p>You have cleaned it twice. You have cleaned it from the outside. The haze is still there, and in certain light it looks like a film that will not come off.</p>

<p>It is not dirt, and you are not going to reach it. Here is what is actually happening inside that window.</p>

<h2 id="what-a-modern-window-is-made-of">What a Modern Window Is Made Of</h2>

<p>The glass in your window is not one sheet. It is a <strong>sealed unit</strong>: two panes of glass, sometimes three, held apart by a spacer around the edge, with the gap filled with gas and the whole perimeter sealed shut.</p>

<p>The glass is not what insulates. The trapped gas layer is. The glass is there to hold the gas still.</p>

<p>Along the edge of that unit sits a sealant, and inside the spacer sits a desiccant, a drying agent whose job is to absorb the small amount of moisture sealed in at the factory so the inside surfaces stay clear.</p>

<h2 id="what-fails">What Fails</h2>

<p>Over years of expansion and contraction, every day, summer and winter, the edge seal eventually gives way. Once it does, two things happen at once.</p>

<p>The gas escapes, so the unit stops insulating the way it was built to. And outside air starts moving in and out, carrying moisture. The desiccant absorbs what it can until it is saturated, and after that the moisture has nowhere to go. It condenses on the inner surfaces of the glass, where nothing can reach it.</p>

<p>That is the haze. It is on the inside faces of two panes that are sealed together, which is why no amount of cleaning will touch it, and why it cannot be dried out.</p>

<h2 id="what-makes-it-happen-sooner">What Makes It Happen Sooner</h2>

<p><strong>Direct sun.</strong> South and west facing windows cook all afternoon and fail earlier than north facing ones in the same house.</p>

<p><strong>Big temperature swings.</strong> Ontario is hard on sealed units. A thirty degree summer day and a minus twenty winter night work the seal in both directions every year.</p>

<p><strong>Age.</strong> Sealed units have a service life. Most windows in a GTA home were installed at the same time, which is why they tend to start fogging within a few years of each other.</p>

<p><strong>Installation.</strong> A unit that was handled badly or installed under stress fails early.</p>

<h2 id="why-it-costs-you-more-than-appearance">Why It Costs You More Than Appearance</h2>

<p>People tend to treat fogging as a cosmetic problem and live with it for years. It is not cosmetic.</p>

<p>A failed sealed unit has lost the gas layer that did the insulating. That window is now performing closer to a single sheet of glass than to the double pane you paid for. In January, that is heat leaving the house through the window all day and all night.</p>

<p>It is also the reason that room always feels colder than the rest of the house, and the reason there is sometimes condensation on the room side of that window in winter when no other window in the house has it.</p>

<h2 id="what-the-repair-actually-involves">What the Repair Actually Involves</h2>

<p>This is where most people are relieved. The frame is not the problem. The sash is not the problem. The hardware is not the problem.</p>

<p>The <a href="/foggy-windows">sealed unit is removed from the existing frame</a> and a new one goes in. Your window stays where it is. From inside the room, nothing changes except that you can see through it again.</p>

<p>The new unit has to be made to the exact dimensions of the old one, so there is an ordering period between the measurement and the install. That is normal and it applies to every company.</p>

<h2 id="when-replacing-the-glass-is-not-the-answer">When Replacing the Glass Is Not the Answer</h2>

<p>We would rather tell you this up front than on site.</p>

<p>Replacing just the glass is the wrong call if the frame is rotted, warped, or no longer square; if the window is a very old single pane with no sealed unit to replace; if you are already planning to renovate that wall; or if you want a different window altogether, a different size or a different opening style.</p>

<p>In those cases you are better off replacing the window, and glass alone would be money spent twice.</p>

<h2 id="how-to-check-your-own-house-this-week">How to Check Your Own House This Week</h2>

<p>Walk the house on a bright day and look at each window at an angle rather than straight on. Seal failure shows up far more clearly off-angle, and in its early stages it looks like a faint smear near one corner rather than full fog.</p>

<p>Finding it early does not change the repair. It does mean you stop paying to heat the outdoors sooner.</p>

<p>If you want to understand which glass spec to put back in, see our guide on <a href="/blog/double-vs-triple-pane-low-e-argon">double, triple, Low-E and argon</a>. For the winter picture of this problem, see our guide on <a href="/blog/window-condensation-in-winter">window condensation in winter</a>.</p>

<p>Send us a photo on WhatsApp and we will tell you whether you are looking at a failed seal. Call <a href="tel:+14373448490">437-344-8490</a>.</p>
`,
  },
  {
    slug: "storefront-glass-emergency-board-up",
    coverImage: "/images/services/foggy-leaded-glass.webp",
    title: "Your Storefront Glass Broke After Hours. Here Is What to Do Tonight",
    metaTitle: "Storefront Glass Emergency Board-Up Toronto",
    metaDescription:
      "Broken storefront glass after hours? Step-by-step guide for GTA business owners: safety, board-up, insurance and permanent glass replacement.",
    excerpt:
      "A break-in, a vehicle in the entrance, or a pane that finally let go. If you are a business owner reading this at eleven at night, here is the order of operations.",
    publishedAt: "2026-10-18",
    updatedAt: "2026-11-02",
    author: "Dan",
    readingTime: 4,
    tags: ["storefront", "commercial", "emergency", "board-up", "break-in"],
    sections: [
      { id: "people-first-then-the-site", title: "1. People First, Then the Site" },
      { id: "call-the-police-if-it-was-a-break-in", title: "2. Call the Police If It Was a Break-In" },
      { id: "photograph-everything-before-you-touch-it", title: "3. Photograph Everything Before You Touch It" },
      { id: "get-it-boarded-up", title: "4. Get It Boarded Up" },
      { id: "call-your-insurer-in-the-morning-not-tonight", title: "5. Call Your Insurer in the Morning, Not Tonight" },
      { id: "understand-what-glass-has-to-go-back-in", title: "6. Understand What Glass Has to Go Back In" },
      { id: "watch-for-frame-damage", title: "7. Watch for Frame Damage" },
      { id: "worth-doing-before-anything-breaks", title: "Worth Doing Before Anything Breaks" },
    ],
    content: `
<p>A break-in, a vehicle in the entrance, or a pane that finally let go. If you are a business owner reading this at eleven at night, here is the order of operations.</p>

<h2 id="people-first-then-the-site">1. People First, Then the Site</h2>

<p>Keep everyone away from the opening. Tempered safety glass breaks into small pieces, but the frame will still have shards held in it, and a partly broken pane can let go later without warning. If a pane is cracked but still standing, do not lean anything against it and do not try to push it out.</p>

<h2 id="call-the-police-if-it-was-a-break-in">2. Call the Police If It Was a Break-In</h2>

<p>Get a report number. Your insurer will ask for it.</p>

<h2 id="photograph-everything-before-you-touch-it">3. Photograph Everything Before You Touch It</h2>

<p>Wide shots and close ups. The glass, the frame, the surrounding area, any damage inside. Do this before cleanup, because once it is swept you cannot go back. Insurers assess from photographs far more often than from site visits.</p>

<h2 id="get-it-boarded-up">4. Get It Boarded Up</h2>

<p>This is the step people delay, and it is the expensive one to delay.</p>

<p>An open storefront overnight is an invitation. Most commercial policies also carry a duty on you to take reasonable steps to prevent further loss, so if a second incident happens through an opening you left unsecured, that conversation with your insurer goes badly.</p>

<p>A proper board-up is cut to fit, fastened to the frame, and sealed well enough to keep weather out. In winter that matters more than people think: an open front with the heat running will empty a space's temperature in an hour, and in an older building that can put pipes at risk.</p>

<p>We keep plywood stocked specifically so board-ups do not have to wait for suppliers to open in the morning. We board up across the GTA 24/7.</p>

<h2 id="call-your-insurer-in-the-morning-not-tonight">5. Call Your Insurer in the Morning, Not Tonight</h2>

<p>Unless your policy requires immediate notice, there is nothing a midnight call achieves that a nine o'clock call does not. Have ready: the police report number, your photographs, the approximate dimensions of the glass, and the board-up invoice.</p>

<h2 id="understand-what-glass-has-to-go-back-in">6. Understand What Glass Has to Go Back In</h2>

<p>This is where business owners get surprised, so it is worth knowing before the quote arrives.</p>

<p>Commercial entrance and storefront glass is not the same as residential glass. Glass in doors, in panels beside doors, and in large areas at floor level is generally required to be safety glass, which in practice means tempered.</p>

<p>Tempered glass cannot be cut to size after it is made. It is manufactured to exact dimensions and then heat treated, which is what gives it its strength. That means it has to be ordered, and it will not be same day.</p>

<p>That gap between the board-up and the permanent glass is normal, and it is exactly why the board-up has to be done properly rather than quickly.</p>

<h2 id="watch-for-frame-damage">7. Watch for Frame Damage</h2>

<p>Frame damage is the variable that moves a job from straightforward to significant. A vehicle into an entrance almost always bends the frame, and a bent frame has to be repaired or replaced before new glass will sit correctly. Glass installed into a distorted frame sits under stress and does not last.</p>

<p>If the door still operates but feels different, say so when you call. It changes what we bring.</p>

<h2 id="worth-doing-before-anything-breaks">Worth Doing Before Anything Breaks</h2>

<p>Photograph and measure your storefront glass now, while it is intact, and keep it with your insurance documents. When a pane breaks at midnight, having the dimensions already written down takes a day off the order.</p>

<p>Broken glass now? Call <a href="tel:+14373448490">437-344-8490</a>. We handle <a href="/emergency-glass-repair">emergency glass repair</a> and <a href="/commercial-glass-repair">commercial glass repair</a> across the GTA, any hour. We serve <a href="/commercial-glass-repair-vaughan">Vaughan</a>, <a href="/window-repair-toronto">Toronto</a>, <a href="/window-repair-mississauga">Mississauga</a>, and surrounding areas.</p>

<p>Related reading: <a href="/blog/emergency-glass-repair-toronto">Emergency glass repair: what to expect</a>.</p>
`,
  },
  {
    slug: "double-vs-triple-pane-low-e-argon",
    coverImage: "/images/services/foggy-window-condensation.webp",
    title: "Double, Triple, Low-E and Argon: What You Are Actually Paying For",
    metaTitle: "Double vs Triple Pane Glass Explained",
    metaDescription:
      "Comparing window glass quotes? What double-pane, triple-pane, Low-E and argon fill actually do in an Ontario winter and which upgrades are worth it.",
    excerpt:
      "When you get a quote for new glass, you are handed a list of options with names that sound technical and no explanation of what any of them do. Here is what each one does in an Ontario winter, and which ones are worth paying for.",
    publishedAt: "2026-10-18",
    updatedAt: "2026-11-02",
    author: "Dan",
    readingTime: 4,
    tags: ["glass", "double pane", "triple pane", "Low-E", "argon", "spec"],
    sections: [
      { id: "panes-double-or-triple", title: "Panes: Double or Triple" },
      { id: "low-e-coating", title: "Low-E Coating" },
      { id: "argon-fill", title: "Argon Fill" },
      { id: "the-part-that-actually-decides-how-long-it-lasts", title: "The Part That Actually Decides How Long It Lasts" },
      { id: "tempered-laminated-and-obscure", title: "Tempered, Laminated and Obscure" },
      { id: "what-we-would-specify-for-a-typical-gta-home", title: "What We Would Specify for a Typical GTA Home" },
    ],
    content: `
<p>When you get a quote for new glass, you are handed a list of options with names that sound technical and no explanation of what any of them do. Here is what each one does in an Ontario winter, and which ones are worth paying for.</p>

<h2 id="panes-double-or-triple">Panes: Double or Triple</h2>

<p>A sealed unit is two or three panes of glass separated by a spacer, with the gaps filled with gas and sealed at the edge. The insulating work is done by the gas layers, not by the glass.</p>

<p><strong>Double pane</strong> is the standard across most GTA housing. Two panes, one gas layer.</p>

<p><strong>Triple pane</strong> adds a third pane and a second gas layer. It insulates better, cuts outside noise noticeably, and is heavier and more expensive. The weight matters more than people expect. A heavier sash is harder on hinges and operators, and not every existing frame is built to carry it.</p>

<p>Our honest read for most Toronto area homes: triple pane makes clear sense on north facing walls, on large expanses of glass, on anything facing a busy road where noise is the real complaint, and in new construction where the frames are specified for it. For a one-off replacement of a fogged unit in an existing frame, double pane with a good coating gets you most of the benefit.</p>

<h2 id="low-e-coating">Low-E Coating</h2>

<p>Low-E is a microscopically thin metallic coating on one of the glass surfaces. It is close to invisible. What it does is let visible light through while reflecting heat back toward the side it came from.</p>

<p>In winter it reflects your indoor heat back inside instead of letting it radiate out through the glass. In summer it reflects solar heat back outside. In a climate that demands both, it is the most cost effective glass upgrade available.</p>

<p>If you make one upgrade, make it this one.</p>

<h2 id="argon-fill">Argon Fill</h2>

<p>Argon is a harmless, colourless gas, denser than air, used to fill the space between panes. Because it transfers heat less readily than air does, it improves the insulating value of the unit for very little extra.</p>

<p>It is usually bundled with Low-E and priced together, and it is worth having.</p>

<p>The common worry is that argon leaks out over time. A small amount does escape slowly through any sealed unit, but that slow loss is not what decides when a window fails. What decides that is the edge seal, which brings us to the part nobody quotes you on.</p>

<h2 id="the-part-that-actually-decides-how-long-it-lasts">The Part That Actually Decides How Long It Lasts</h2>

<p>Every sealed unit eventually fails at the edge seal. That is what causes the <a href="/blog/why-windows-fog-between-panes">fogging you see in older windows</a>. How long it takes depends on the quality of the spacer and the sealant, how much direct sun the unit takes, and how well it was installed.</p>

<p>This is why a cheaper unit that fails in eight years is not cheaper than a better one that lasts twenty.</p>

<p>When you are comparing two quotes with very different numbers, ask what the warranty covers on seal failure specifically, not just on breakage. That answer tells you more about the product than the spec sheet does.</p>

<h2 id="tempered-laminated-and-obscure">Tempered, Laminated and Obscure</h2>

<p><strong>Tempered</strong> is safety glass, required in certain locations: in and beside doors, at low heights, near stairs, and in bathrooms. It breaks into small blunt pieces instead of shards. It cannot be cut after manufacture, so it must be ordered to exact size.</p>

<p><strong>Laminated</strong> has a plastic interlayer that holds the glass together when it breaks. It is used for security and noise reduction, and it blocks almost all UV.</p>

<p><strong>Frosted or obscure</strong> is for privacy, most often bathrooms. It is a surface treatment or a pattern, not an insulating change.</p>

<h2 id="what-we-would-specify-for-a-typical-gta-home">What We Would Specify for a Typical GTA Home</h2>

<p>Double pane, Low-E, argon filled, in a quality sealed unit from a supplier who stands behind the seal. Tempered where it is required. Triple pane where noise, or a very large north facing expanse, justifies it.</p>

<p>That is not the most expensive option on any quote sheet, and that is the point. The upgrades that matter most are not the ones that cost the most.</p>

<p><a href="/foggy-windows">Replacing a fogged unit</a> and not sure what to specify? Whether you need <a href="/glass-replacement">glass replacement</a> for your home or a sealed unit upgrade, send us a photo and the rough dimensions on WhatsApp and we will tell you what is in there now and what we would put back. We serve <a href="/window-repair-toronto">Toronto</a>, <a href="/window-repair-vaughan">Vaughan</a>, <a href="/window-repair-mississauga">Mississauga</a>, and the entire GTA. Call <a href="tel:+14373448490">437-344-8490</a>.</p>

<p>Related reading: <a href="/blog/foggy-window-repair-cost-gta">Foggy window repair cost in the GTA</a> and <a href="/blog/why-windows-fog-between-panes">Why windows fog between the panes</a>.</p>
`,
  },
  {
    slug: "sliding-patio-door-wont-slide",
    coverImage: "/images/services/door-before-broken.webp",
    title: "Patio Door That Will Not Slide: Rollers, Tracks, and What Is Really Wrong",
    metaTitle: "Patio Door Won't Slide: How to Fix It",
    metaDescription:
      "Patio door jamming or dragging? The three-stage failure: dirty track, worn rollers, dropped panel. What to fix yourself and when to call a pro.",
    excerpt:
      "You put your shoulder into it and it moves in jerks. Or it comes off its line halfway and jams. Sliding patio doors are among the heaviest moving parts in a house, and when they go wrong the instinct is to assume the whole door is finished. It usually is not.",
    publishedAt: "2026-10-18",
    updatedAt: "2026-11-02",
    author: "Dan",
    readingTime: 4,
    tags: ["patio door", "sliding door", "rollers", "track", "repair"],
    sections: [
      { id: "what-is-carrying-the-weight", title: "What Is Carrying the Weight" },
      { id: "what-to-try-yourself-first", title: "What to Try Yourself First" },
      { id: "what-replacement-involves", title: "What Replacement Involves" },
      { id: "when-the-door-really-does-need-replacing", title: "When the Door Really Does Need Replacing" },
      { id: "before-winter", title: "Before Winter" },
    ],
    content: `
<p>You put your shoulder into it and it moves in jerks. Or it comes off its line halfway and jams. Or it slides but will not lock any more.</p>

<p>Sliding patio doors are among the heaviest moving parts in a house, and when they go wrong the instinct is to assume the whole door is finished. It usually is not. The glass and the frame outlast the moving parts by decades. If your <a href="/patio-door-repair">patio door</a> is dragging, the fix is almost always the rollers, the track, or both.</p>

<h2 id="what-is-carrying-the-weight">What Is Carrying the Weight</h2>

<p>A sliding door panel sits on <strong>rollers</strong>, small wheels in housings at the bottom of the panel, which run along a <strong>track</strong> set into the sill. The rollers are adjustable for height, which is how the panel is squared up so it meets the lock and compresses the weatherstripping properly.</p>

<p>Three things go wrong, and they go wrong in sequence.</p>

<p><strong>The track fills with grit.</strong> Sand, salt, pet hair, whatever comes in off the deck. The rollers grind through it instead of rolling over it.</p>

<p><strong>The rollers wear out.</strong> Running through grit flattens them, seizes the bearings, or cracks the housing. Now the panel is dragging on its housings rather than rolling.</p>

<p><strong>The panel sits wrong.</strong> With worn rollers, the panel drops. Now it does not meet the lock keeper, does not compress the weatherstripping, and lets air in all winter.</p>

<p>Most people call at stage three, having lived through stages one and two for a couple of years.</p>

<h2 id="what-to-try-yourself-first">What to Try Yourself First</h2>

<p><strong>Clean the track properly.</strong> Vacuum it out, scrub it with a stiff brush and soapy water, then dry it. Do not grease it. Grease collects more grit and makes the problem worse six months later. If you lubricate at all, use a dry silicone spray.</p>

<p><strong>Check the adjustment screws.</strong> There is usually a small screw at each end of the bottom edge of the panel, sometimes behind a plug. Turning them raises and lowers that corner. If the panel is dragging, a small lift on both sides sometimes buys another season. Go a quarter turn at a time and test as you go.</p>

<p><strong>Look at the track itself.</strong> If the metal lip the rollers run on is dented or folded over, no amount of new rollers will fix it. The track has to be repaired or capped.</p>

<p>If cleaning and adjustment do not do it, the rollers are worn out and they need replacing.</p>

<h2 id="what-replacement-involves">What Replacement Involves</h2>

<p>The panel has to come out of the opening to reach the rollers, which is what makes this a two person job. A standard sliding patio door panel is heavy, mostly glass, and awkward. Dropping one is both dangerous and expensive.</p>

<p>Once it is out, the old rollers come off, new ones go on, the track is cleaned or capped, the panel goes back in, and it is adjusted until it meets the lock and seals at the top and bottom.</p>

<p>As with most of our work, doing two doors on one visit is far more efficient than two separate visits.</p>

<h2 id="when-the-door-really-does-need-replacing">When the Door Really Does Need Replacing</h2>

<p>The frame is rotted or out of square. The track is integral to the frame and badly damaged along its length. The glass is fogged <strong>and</strong> the hardware is finished <strong>and</strong> the door is old, at which point you are replacing everything piece by piece anyway. Or it is a very old single pane unit.</p>

<h2 id="before-winter">Before Winter</h2>

<p>A patio door is one of the largest openings in the house, and the <a href="/blog/winter-window-checklist-gta">weatherstripping only works when the panel sits where it should</a>.</p>

<p>If the lock has become hard to engage, that is the panel telling you it has dropped. A door that does not lock properly is a door that is not sealed, which makes it a heating question and a security question at the same time. It is a small fix now and a bigger one after another winter of being forced.</p>

<p>We handle <a href="/patio-door-repair">patio door repairs</a> across <a href="/window-repair-toronto">Toronto</a>, <a href="/window-repair-vaughan">Vaughan</a>, <a href="/window-repair-mississauga">Mississauga</a>, and the entire GTA. Not sure if it is rollers or track? Send a photo of the bottom track and the panel edge on WhatsApp and we will tell you what we are looking at. Call <a href="tel:+14373448490">437-344-8490</a>.</p>
`,
  },
  {
    slug: "winter-window-prep-gta",
    coverImage: "/images/bright-windows-section.webp",
    title: "Winter Window Prep: 5 Things Every GTA Homeowner Should Check",
    metaTitle: "Winter Window Prep: 5 Things to Check",
    metaDescription:
      "Five window checks before the first hard frost. Caulk, hardware, foggy panes, weatherstripping. Catch problems in October, not January.",
    excerpt:
      "It is late October. The first hard frost in the GTA is days away, not weeks. Here are five things to check on your windows right now, before cold weather turns a small problem into an expensive one.",
    publishedAt: "2026-10-27",
    updatedAt: "2026-11-02",
    author: "Dan",
    readingTime: 4,
    tags: ["winter", "maintenance", "weatherstripping", "caulking", "frost"],
    sections: [
      { id: "caulking-and-sealant", title: "1. Caulking and Sealant" },
      { id: "hardware-that-does-not-close-tight", title: "2. Hardware That Does Not Close Tight" },
      { id: "foggy-or-failed-panes", title: "3. Foggy or Failed Panes" },
      { id: "weatherstripping", title: "4. Weatherstripping" },
      { id: "frost-on-the-inside", title: "5. Frost on the Inside" },
      { id: "the-october-rule", title: "The October Rule" },
    ],
    content: `
<p>It is late October. The first hard frost in the GTA is days away, not weeks. If something is wrong with your windows, you want to find out now, while there is still time to fix it before the heating bill arrives and the real cold sets in.</p>

<p>Here are five things to walk through this weekend. None of them take special tools. All of them can save you a phone call in January.</p>

<h2 id="caulking-and-sealant">1. Caulking and Sealant</h2>

<p>Look at the exterior caulking around every window frame. What you are looking for is cracking, peeling, or gaps where the caulk has pulled away from the frame or the siding.</p>

<p>Caulk does not last forever. Sun, rain, and freeze/thaw cycles break it down over five to ten years. Once a gap opens, water gets behind the frame. In winter, that water freezes, expands, and makes the gap bigger. By spring you have a moisture problem that started as a hairline crack in October.</p>

<p>If the caulk is cracked but the frame and siding are sound, a fresh bead of exterior silicone caulk is a fifteen minute fix per window. If the wood behind the caulk is soft or discoloured, that is a sign water has already been getting in, and you want a professional to look at it before you seal over the damage.</p>

<h2 id="hardware-that-does-not-close-tight">2. Hardware That Does Not Close Tight</h2>

<p>Go window by window and close each one. Lock it. Does the lock engage smoothly? Does the sash pull tight against the frame, or does it sit loose with play in it?</p>

<p>A window that does not close fully is a window that is not sealed. The lock is not just for security. It is what compresses the weatherstripping and creates the air barrier. If the crank spins without drawing the sash in, or the lock does not catch, cold air is getting through all winter.</p>

<p>Most <a href="/cranks">window hardware</a> problems are repairable. Cranks, hinges, locks, and operators can be replaced individually without touching the glass or the frame. Most window hardware repairs are completed on the same day, on the first visit.</p>

<h2 id="foggy-or-failed-panes">3. Foggy or Failed Panes</h2>

<p>Stand inside and look through every window. If you see haze, condensation, or a milky film trapped between the panes, the sealed unit has failed. Moisture has entered the insulating gap and the gas fill is gone.</p>

<p>A <a href="/foggy-windows">foggy window</a> is not just ugly. It has lost a significant portion of its insulating value. The surface facing your room runs colder, which means more condensation on the inside in winter, and more heat loss you are paying for.</p>

<p>The fix is replacing the sealed glass unit, not the whole window. Glass is measured first, custom-made to your exact dimensions, then installed into your existing frame. The frame stays, the trim stays, and the window works properly again.</p>

<p>Order now and the new glass arrives before the worst of winter. Wait until January and you are heating a house with a failed window for two extra months.</p>

<h2 id="weatherstripping">4. Weatherstripping</h2>

<p>Weatherstripping is the rubber or foam gasket that runs around the sash where it meets the frame. It compresses when the window closes to create a seal against air and water.</p>

<p>Over time it dries out, flattens, cracks, or tears. You can usually see the damage if you open the window and look at the strip. If it is compressed flat, brittle, or missing in sections, it is not doing its job.</p>

<p>The test is simple: close the window, lock it, and hold your hand near the edges. If you feel cold air moving on a windy day, the weatherstripping is likely the cause. A lit candle or incense stick near the frame makes even small drafts visible.</p>

<p>On most window types, weatherstripping can be replaced without removing the window. It is one of the least expensive repairs and one of the most effective for comfort and energy savings.</p>

<h2 id="frost-on-the-inside">5. Frost on the Inside</h2>

<p>This one shows up after the first few cold nights. If you see frost or heavy condensation forming on the inside surface of the glass, not between the panes but on the room side, something is wrong.</p>

<p>Interior frost means the inside surface of the glass is getting cold enough to hit the dew point of your indoor air. In a double-pane window that is working properly, the inside surface stays warm enough that this should not happen except in extreme cold.</p>

<p>Common causes: a failed sealed unit (the insulating gas is gone), a window that is not closing fully (cold air bypassing the glass entirely), or a single-pane window in a space that needs an upgrade.</p>

<p>Interior frost is not cosmetic. The water it produces when it melts runs into the frame, the sill, and eventually the wall below. Left alone for a full winter, it causes paint damage, mould, and wood rot.</p>

<h2 id="the-october-rule">The October Rule</h2>

<p>Every window problem is easier and cheaper to fix in October than in January. Caulking cures better in mild weather. Parts are in stock before the winter rush. Scheduling is open. And you are not losing heat and money while you wait.</p>

<p>If your walk-through turned up anything on this list, check our <a href="/winter-ready">winter ready page</a> for a full breakdown of what we handle, or call us directly. All of our work is backed by our <a href="/warranty">warranty</a>.</p>

<p>We serve <a href="/window-repair-vaughan">Vaughan</a>, <a href="/window-repair-toronto">Toronto</a>, <a href="/window-repair-thornhill">Thornhill</a>, <a href="/window-repair-mississauga">Mississauga</a>, and the entire GTA. Call <a href="tel:+14373448490">437-344-8490</a> or send a photo on WhatsApp and we will tell you what you are looking at.</p>

<p>Related reading: <a href="/blog/winter-window-checklist-gta">Winter window checklist for GTA homes</a> and <a href="/blog/window-condensation-in-winter">Window condensation in winter: what it means</a>.</p>
`,
  },
  {
    slug: "front-door-glass-insert-replacement",
    title: "Front Door Glass Insert Replacement: Keep the Door, Change the Glass",
    metaTitle: "Front Door Glass Insert Replacement",
    metaDescription:
      "Cracked, foggy or dated glass in your front door? You can replace just the glass insert and keep the door. What it involves and costs.",
    excerpt:
      "A lot of people call us thinking they need a new front door. The door opens fine, it locks fine, it seals fine. The problem is the glass. It cracked, it fogged up inside, or it just looks like 1998. In most of those cases you do not need a new door. You need a new glass insert.",
    publishedAt: "2026-10-27",
    updatedAt: "2026-11-02",
    author: "Dan",
    readingTime: 4,
    coverImage: "/images/services/front-door-glass-before.webp",
    tags: ["front door glass", "door insert", "foggy glass", "entry door"],
    sections: [
      { id: "what-a-door-glass-insert-is", title: "What a Door Glass Insert Is" },
      { id: "signs-it-is-time-to-replace-the-insert", title: "Signs It Is Time to Replace the Insert" },
      { id: "how-the-replacement-works", title: "How the Replacement Works" },
      { id: "what-it-costs", title: "What It Costs" },
      { id: "when-the-whole-door-needs-to-go", title: "When the Whole Door Needs to Go" },
      { id: "warranty", title: "Warranty" },
      { id: "get-it-looked-at", title: "Get It Looked At" },
    ],
    content: `
<p>A lot of people call us thinking they need a new front door. The door opens fine, it locks fine, it seals fine. The problem is the glass. It cracked, it fogged up inside, or it just looks like 1998.</p>

<p>In most of those cases you do not need a new door. You need a new glass insert.</p>

<h2 id="what-a-door-glass-insert-is">What a Door Glass Insert Is</h2>

<p>The glass in most steel and fibreglass entry doors is a separate unit. It sits in a frame that is screwed together through the door, one half on the inside and one half on the outside. Take the screws out and the whole insert comes out as one piece.</p>

<p>That means the glass can be replaced without touching the door slab, the hinges, the lock or the weatherstripping. The door stays. Only the glass changes.</p>

<h2 id="signs-it-is-time-to-replace-the-insert">Signs It Is Time to Replace the Insert</h2>

<ul>
  <li><strong>The glass is cracked.</strong> Even a small crack spreads with the cold. It also makes the door easier to break into.</li>
  <li><strong>There is fog or haze between the panes.</strong> Many inserts are sealed units, the same as a window. Once the seal fails, moisture gets in and you cannot clean it off.</li>
  <li><strong>The frame around the glass is loose or rattles.</strong> Water and drafts find that gap fast in a GTA winter.</li>
  <li><strong>You want a different look or more privacy.</strong> Clear glass you can see straight through, frosted or textured glass for privacy, or a decorative pattern. You can change the whole front of the house with one piece of glass.</li>
</ul>

<h2 id="how-the-replacement-works">How the Replacement Works</h2>

<p>First we come out and measure the insert. Door glass is made to size, so the measurement has to be exact. We also show you the glass options so you can see what you are choosing.</p>

<p>Once the new insert is ready, we come back to install it. We remove the old insert, clean the opening, set the new one in place, seal it and screw the frame back together. The door is back in use the same day.</p>

<p>You can watch a short video of the swap on our <a href="/front-door-glass">front door glass page</a>.</p>

<h2 id="what-it-costs">What It Costs</h2>

<p>The cost depends on the size of the insert, the type of glass and whether you pick a decorative design. A new entry door costs significantly more than replacing just the insert, and then it has to be installed, trimmed and painted. If the door itself is in good shape, replacing the glass is almost always the better deal.</p>

<p>The first visit is $30, and it is credited toward the job if you go ahead. You get a written quote on the spot after the assessment, before any work begins. You can read more about how we price on our <a href="/window-repair-cost">window repair cost page</a>.</p>

<h2 id="when-the-whole-door-needs-to-go">When the Whole Door Needs to Go</h2>

<p>Sometimes the glass is not the real problem. If the door is rotted at the bottom, rusted through, warped so it will not close properly, or the frame around the door is damaged, a new insert will not fix it. We will tell you that on the first visit.</p>

<h2 id="warranty">Warranty</h2>

<p>The new sealed glass unit comes with a warranty against seal failure. The full terms are on our <a href="/warranty">warranty page</a>.</p>

<h2 id="get-it-looked-at">Get It Looked At</h2>

<p>If your front door glass is cracked, foggy or just not what you want anymore, <a href="/contact">book a visit</a> and we will take a look. We serve <a href="/window-repair-vaughan">Vaughan</a>, <a href="/window-repair-toronto">Toronto</a>, <a href="/window-repair-mississauga">Mississauga</a>, <a href="/window-repair-oakville">Oakville</a>, and the entire GTA.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a quote online</a>.</p>

<p>Related reading: <a href="/blog/front-door-glass-styles-guide">Front door glass styles guide</a> and <a href="/blog/double-vs-triple-pane-low-e-argon">Double, triple, Low-E and argon explained</a>.</p>
`,
  },
  {
    slug: "foggy-window-repair-cost-gta",
    title: "How Much Does Foggy Window Repair Cost in the GTA? (2026 Guide)",
    metaTitle: "Foggy Window Repair Cost: 2026 Pricing",
    metaDescription:
      "What does foggy window repair actually cost in Toronto and the GTA? We break down pricing by window type, size, and what affects your final quote.",
    excerpt:
      "You wake up one morning, glance out the window, and notice a milky haze between the panes that no amount of wiping will fix. That fog means the sealed unit has failed. The good news: you almost never need to replace the entire window.",
    publishedAt: "2026-11-12",
    author: "Dan",
    readingTime: 5,
    coverImage: "/images/services/foggy-window-real.webp",
    tags: ["foggy windows", "sealed unit replacement", "window repair cost", "GTA"],
    sections: [
      { id: "what-affects-the-price", title: "What Affects the Price?" },
      { id: "sealed-unit-vs-full-replacement", title: "Sealed Unit Replacement vs. Full Window Replacement" },
      { id: "when-is-full-replacement-worth-it", title: "When Is a Full Replacement Actually Worth It?" },
      { id: "how-to-get-an-accurate-quote", title: "How to Get an Accurate Quote" },
      { id: "how-long-does-the-repair-take", title: "How Long Does the Repair Take?" },
      { id: "warranty", title: "Does It Come with a Warranty?" },
      { id: "faq", title: "FAQ" },
    ],
    content: `
<p>You wake up one morning, glance out the window, and notice a milky haze between the panes that no amount of wiping will fix. That fog means the <a href="/foggy-windows">sealed unit</a> has failed. Moisture has crept between the two layers of glass, and the argon gas that once insulated your home is gone.</p>

<p>The good news: you almost never need to replace the entire window. In most cases, only the glass unit (the sealed IGU) needs to be swapped out, and that costs a fraction of a full window replacement.</p>

<h2 id="what-affects-the-price">What Affects the Price?</h2>

<p>Every foggy window job is different. Here are the factors that move the number:</p>

<ul>
  <li><strong>Window size.</strong> A small bathroom casement and a 6-foot patio door panel are very different jobs. Larger glass units cost more to manufacture and require more labour to handle safely.</li>
  <li><strong>Glass type.</strong> Standard double-pane clear glass is the baseline. Low-E coatings, triple-pane units, tinted glass, or tempered safety glass all add to the cost of the replacement sealed unit.</li>
  <li><strong>Accessibility.</strong> A ground-floor window that opens easily is straightforward. A fixed picture window on the second floor, or one behind landscaping, adds time and sometimes equipment.</li>
  <li><strong>Number of windows.</strong> Doing several windows in one visit is more efficient. The per-unit cost typically comes down when you bundle multiple foggy windows into one service call.</li>
  <li><strong>Frame condition.</strong> If the frame, sash, or hardware is damaged, that may need attention before or during the glass swap. Rotted wood frames or corroded aluminium can complicate things.</li>
</ul>

<h2 id="sealed-unit-vs-full-replacement">Sealed Unit Replacement vs. Full Window Replacement</h2>

<p>This is the single biggest decision, and the one where homeowners save the most money. Window companies often push full replacements because the markup is higher. But if your frame is in good shape, replacing just the glass unit makes far more sense.</p>

<p><strong>Sealed unit replacement</strong> keeps your existing frame, trim, and hardware intact. There is no drywall patching, no repainting, no exterior caulking redo. Glass is measured first, custom-made to your exact dimensions, then installed. The technician removes the old glass, and the new sealed unit goes in, typically in under an hour per window.</p>

<p><strong>Full window replacement</strong> tears out the entire assembly: frame, trim, and all. It involves carpentry, exterior finishing, and often interior touch-ups. It makes sense when the frame itself is failing, but if the frame is sound, you are paying significantly more for work that is not needed.</p>

<h2 id="when-is-full-replacement-worth-it">When Is a Full Replacement Actually Worth It?</h2>

<ul>
  <li>The frame is visibly rotted, warped, or structurally compromised</li>
  <li>You want to change the window style (e.g., casement to slider)</li>
  <li>The window is single-pane and you want to upgrade to double or triple</li>
  <li>You are doing a full renovation and the frames are being moved anyway</li>
</ul>

<p>In every other case, <a href="/foggy-windows">sealed unit replacement</a> is the smarter, faster, and far less expensive option.</p>

<h2 id="how-to-get-an-accurate-quote">How to Get an Accurate Quote</h2>

<p>The most reliable way to know what your specific windows will cost is to have a technician come out, measure, and assess the condition of the frames. At LuminaSky, the assessment comes at no charge and no obligation. We measure, explain the options, and give you a written quote before any work begins.</p>

<p>You can also send us a photo of your foggy window via WhatsApp for a preliminary estimate. Include a measurement or hold a tape measure in the photo so we can gauge the size.</p>

<h2 id="how-long-does-the-repair-take">How Long Does the Repair Take?</h2>

<p>Once the replacement sealed unit is manufactured (typically 5 to 10 business days for custom sizes), the actual installation takes about 30 to 60 minutes per window. Most homes with 2 to 4 foggy windows are done in a single morning visit.</p>

<h2 id="warranty">Does It Come with a Warranty?</h2>

<p>Every sealed unit replacement from LuminaSky comes with our 5-year seal warranty and 2-year workmanship warranty. Full terms are on our <a href="/warranty">warranty page</a>.</p>

<h2 id="faq">FAQ</h2>

<h3>Can I just repair the seal instead of replacing the glass?</h3>

<p>Once the seal has failed and moisture has entered, the only lasting fix is to replace the sealed glass unit. "Defogging" services drill holes and try to remove moisture, but the insulating gas is already gone and the fog almost always returns. A new sealed unit restores both clarity and insulation.</p>

<h3>How do I know if my foggy window needs the glass replaced or the whole window?</h3>

<p>Check the frame. If the wood or vinyl frame is solid, no rot, no warping, and the hardware works fine, you only need the glass unit replaced. If the frame is crumbling, cracked, or pulling away from the wall, a full replacement may make more sense. A technician can confirm during a no-obligation assessment.</p>

<p>Ready to find out what your foggy windows will cost? We serve the entire GTA, including <a href="/foggy-glass-repair-vaughan">Vaughan</a>, <a href="/foggy-glass-repair-toronto">Toronto</a>, <a href="/foggy-glass-repair-mississauga">Mississauga</a>, and <a href="/foggy-glass-repair-markham">Markham</a>. <a href="/contact">Request a quote</a> or call <a href="tel:+14373448490">437-344-8490</a>.</p>
`,
  },
  {
    slug: "broken-window-crank-what-to-do",
    title: "Window Crank Broken? Here's What to Do Before Calling a Repair Company",
    metaTitle: "Broken Window Crank? What to Do Next",
    metaDescription:
      "Window crank stuck or broken? Learn what you can check yourself, when you need a pro, and how crank mechanism replacement works for casement windows.",
    excerpt:
      "Casement windows are popular across the GTA for good reason. They seal tightly, offer excellent ventilation, and let you control exactly how far the window opens. But the crank mechanism is a mechanical part, and mechanical parts eventually wear out.",
    publishedAt: "2026-11-12",
    author: "Dan",
    readingTime: 5,
    coverImage: "/images/services/crank-before.webp",
    tags: ["window crank", "casement window", "window hardware", "crank repair"],
    sections: [
      { id: "identify-the-problem", title: "Step 1: Identify What Is Actually Wrong" },
      { id: "quick-fixes", title: "Step 2: Try These Quick Fixes" },
      { id: "when-to-call-a-pro", title: "Step 3: Know When to Call a Professional" },
      { id: "how-replacement-works", title: "How Crank Mechanism Replacement Works" },
      { id: "handle-only", title: "Can I Just Replace the Handle?" },
      { id: "faq", title: "FAQ" },
    ],
    content: `
<p><a href="/cranks">Casement windows</a>, the kind that swing open with a hand crank, are popular across the <a href="/window-repair-toronto">GTA</a> for good reason. They seal tightly, offer excellent ventilation, and let you control exactly how far the window opens. But the crank mechanism is a mechanical part, and mechanical parts eventually wear out.</p>

<p>If your window crank is stiff, grinding, spinning freely, or completely snapped off, here is what to check before picking up the phone.</p>

<h2 id="identify-the-problem">Step 1: Identify What Is Actually Wrong</h2>

<p>Not every crank problem needs a professional. Start by figuring out which part has failed:</p>

<ul>
  <li><strong>The handle spins but nothing moves.</strong> The gears inside the operator mechanism are stripped. The operator needs to be replaced.</li>
  <li><strong>The handle is stiff or grinding.</strong> The arm track may be dirty, corroded, or the operator gears are wearing down. Sometimes cleaning and lubricating the track fixes it. If not, the operator is failing.</li>
  <li><strong>The handle broke off.</strong> If the handle snapped but the internal operator still works, you may only need a replacement handle. Test by turning the shaft with pliers.</li>
  <li><strong>The window will not close all the way.</strong> The arm may be bent, or the hinge shoes (the small pieces that slide in the track at the top and bottom of the sash) may be broken or out of their track.</li>
</ul>

<h2 id="quick-fixes">Step 2: Try These Quick Fixes</h2>

<h3>Clean the track</h3>

<p>Open the window as far as it will go. Look at the metal track where the scissor arm slides. Use a stiff brush to clear debris, then apply a silicone-based lubricant (not WD-40, as it attracts dust). Close and open the window several times to work the lubricant in.</p>

<h3>Tighten the screws</h3>

<p>The operator is held to the frame by screws that can loosen over years of use. If the whole mechanism wobbles, tighten them. If the screw holes are stripped, you may need longer screws or a toothpick-and-glue repair for the holes.</p>

<h3>Check if the sash is binding</h3>

<p>Sometimes the problem is not the crank at all. The window sash may have shifted. Look for uneven gaps around the frame. If the sash is sagging, the hinge shoes at the top and bottom may need replacement.</p>

<h2 id="when-to-call-a-pro">Step 3: Know When to Call a Professional</h2>

<p>Call a repair company when:</p>

<ul>
  <li>The operator gears are stripped (handle spins freely)</li>
  <li>The scissor arm is bent or broken</li>
  <li>You cannot identify the operator brand or model to order parts</li>
  <li>The window is stuck open and you cannot secure your home</li>
  <li>The window is on a second floor or in a hard-to-reach location</li>
</ul>

<p>If the window is stuck open and your home is exposed, that may qualify as an <a href="/emergency-glass-repair">emergency service call</a>.</p>

<h2 id="how-replacement-works">How Crank Mechanism Replacement Works</h2>

<p>A technician will identify the operator type (there are dozens of brands and configurations used across GTA homes), source the correct replacement, and swap it out. The old operator is unscrewed, the new one is positioned and secured, and the arm is reconnected to the sash bracket.</p>

<p>Most <a href="/cranks">window hardware repairs</a> are completed on the same day, on the first visit. If the operator is a common type, the technician may carry a replacement on the truck. Unusual or discontinued models need to be ordered, which adds 5 to 10 business days.</p>

<h2 id="handle-only">Can I Just Replace the Handle?</h2>

<p>If only the handle broke and the internal mechanism still turns, yes. A handle-only replacement is quick and inexpensive. But if the gears inside are stripped or the arm is bent, the handle is not the problem. Replacing just the handle in that case will not fix anything.</p>

<h2 id="faq">FAQ</h2>

<h3>How do I know what brand of crank operator I have?</h3>

<p>Open the window and look for a stamp or label on the operator housing. Common brands in GTA homes include Truth, Roto, Ashland, and Entrygard. If you cannot find a label, take a photo of the operator and send it to a repair service. An experienced technician can usually identify the type from the shape and arm style.</p>

<h3>Is replacing a crank cheaper than replacing the whole window?</h3>

<p>Significantly cheaper. A <a href="/cranks">crank mechanism replacement</a> is a fraction of the cost of a full window replacement. If the glass is clear and the frame is solid, there is no reason to replace the entire window just because the crank failed.</p>

<p>We handle <a href="/window-crank-repair-vaughan">crank repairs in Vaughan</a>, <a href="/window-crank-repair-toronto">Toronto</a>, <a href="/window-crank-repair-mississauga">Mississauga</a>, and across the GTA. Need help with a broken crank? Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a quote online</a>.</p>

<p>Related reading: <a href="/blog/window-crank-repair-toronto">Window crank repair in Toronto</a> and <a href="/blog/window-repair-vs-replacement-toronto">Window repair vs replacement</a>.</p>
`,
  },
  {
    slug: "replace-vs-repair-windows-toronto",
    coverImage: "/images/services/window-replacement-service.webp",
    title: "When to Replace vs. Repair Your Windows: A Toronto Homeowner's Guide",
    metaTitle: "Replace vs. Repair Windows in Toronto",
    metaDescription:
      "Not sure whether to repair or replace your windows? This guide helps Toronto homeowners decide based on the actual condition, not a salesperson's pitch.",
    excerpt:
      "Every year, thousands of Toronto-area homeowners are told they need full window replacements when a targeted repair would have solved the problem at a fraction of the cost. This guide helps you evaluate your windows honestly.",
    publishedAt: "2026-11-12",
    author: "Dan",
    readingTime: 6,
    tags: ["window repair", "window replacement", "Toronto", "home maintenance"],
    sections: [
      { id: "signs-repair", title: "Signs Your Windows Need Repair (Not Replacement)" },
      { id: "signs-replace", title: "Signs Your Windows Actually Need Replacement" },
      { id: "salesperson-test", title: "The Salesperson Test" },
      { id: "toronto-climate", title: "The Toronto Climate Factor" },
      { id: "honest-assessment", title: "How to Get an Honest Assessment" },
      { id: "faq", title: "FAQ" },
    ],
    content: `
<p>Every year, thousands of <a href="/window-repair-toronto">Toronto-area</a> homeowners are told they need full window replacements when a targeted repair would have solved the problem at a fraction of the cost. The window replacement industry is large and sales-driven, and full replacements carry much higher margins than repairs.</p>

<p>This guide helps you evaluate your windows honestly, so you spend money only where it actually matters.</p>

<h2 id="signs-repair">Signs Your Windows Need Repair (Not Replacement)</h2>

<p>If any of these describe your situation, repair is almost certainly the right call:</p>

<ul>
  <li><strong>Fog between the panes.</strong> The <a href="/foggy-windows">sealed unit</a> (IGU) has failed, but the frame is fine. Replace just the glass. This is the single most common window issue in GTA homes.</li>
  <li><strong>Drafts around the edges.</strong> Weatherstripping wears out over time. Replacing the weatherstrip or re-caulking the exterior is far cheaper than a new window.</li>
  <li><strong><a href="/cranks">Crank mechanism</a> is stiff or broken.</strong> The operator hardware can be replaced without touching the glass or the frame.</li>
  <li><strong>Condensation on the inside surface.</strong> This is usually a humidity problem in the home, not a window failure. A dehumidifier or improved bathroom ventilation often solves it.</li>
  <li><strong>One broken pane.</strong> A single cracked or shattered pane (<a href="/front-door-glass">front door insert</a>, sidelight, <a href="/patio-door-glass">patio door</a>) can be replaced individually.</li>
  <li><strong>Window does not lock properly.</strong> Lock hardware can be repaired or replaced independently.</li>
</ul>

<h2 id="signs-replace">Signs Your Windows Actually Need Replacement</h2>

<p>Full replacement makes sense when the frame itself is the problem:</p>

<ul>
  <li><strong>Wood frames are rotted through.</strong> Surface paint peeling is cosmetic and can be repaired. But if a screwdriver pushes into soft, crumbling wood, the structural integrity is compromised.</li>
  <li><strong>The frame is visibly warped or pulling away from the wall.</strong> This means the frame can no longer hold a sealed unit properly. Air and water infiltration will continue regardless of what glass you put in.</li>
  <li><strong>Single-pane windows.</strong> If you still have original single-pane glass from the 1970s or earlier, upgrading to double- or triple-pane sealed units is worth the investment for energy savings alone.</li>
  <li><strong>You are changing the window style.</strong> If you want to go from a fixed picture window to an operable casement, that requires a new frame.</li>
  <li><strong>Renovation with structural changes.</strong> If the wall opening is being resized, you need a new window anyway.</li>
</ul>

<h2 id="salesperson-test">The Salesperson Test</h2>

<p>A reliable way to evaluate advice: if someone tells you to replace all your windows, ask them <strong>which specific windows need replacement and why each one cannot be repaired</strong>. A knowledgeable, honest professional can answer that question window by window. A salesperson working on commission often cannot, because the recommendation is not based on the condition of each window but on the total sale value.</p>

<h2 id="toronto-climate">The Toronto Climate Factor</h2>

<p>Toronto's winters put real stress on windows. Freeze-thaw cycles work on seals, temperature swings flex frames, and humidity challenges condensation thresholds. But these same conditions also mean that a properly repaired window, with a new sealed unit and fresh weatherstripping, performs just as well as a brand-new window. The glass and the seal do the insulating work, not the frame.</p>

<h2 id="honest-assessment">How to Get an Honest Assessment</h2>

<p>Look for a company that does <strong>both</strong> repairs and replacements. A company that only sells new windows has no financial incentive to tell you a repair will work. A company that specialises in glass repair will evaluate the frame honestly and recommend replacement only when it is genuinely warranted.</p>

<p>At LuminaSky, we look at each window individually. If the frame is good, we tell you, and we repair just what needs fixing. If the frame is failing, we will say so and explain why. When replacement is the right call, we handle the full job from measurement to cleanup. See our <a href="/window-replacement">window replacement service</a> for details. Our assessments come at no charge and no obligation.</p>

<h2 id="faq">FAQ</h2>

<h3>How many years do repaired windows last compared to new ones?</h3>

<p>A new sealed glass unit in an existing frame typically lasts 15 to 25 years. That is the same lifespan as the sealed unit in a brand-new window, because it is the same product. The difference is that you kept your existing frame, trim, and interior finish instead of tearing everything out.</p>

<h3>Will repairing windows instead of replacing them affect my home's resale value?</h3>

<p>Buyers care about clear glass, proper insulation, and windows that operate smoothly. A repaired window with a new sealed unit meets all three criteria. What hurts resale value is foggy, broken, or drafty windows, not whether the fix was a repair or a replacement.</p>

<p>We serve <a href="/window-repair-toronto">Toronto</a>, <a href="/window-repair-vaughan">Vaughan</a>, <a href="/window-repair-mississauga">Mississauga</a>, <a href="/window-repair-brampton">Brampton</a>, and the entire GTA. Want an honest assessment of your windows? <a href="/contact">Book a visit</a> or call <a href="tel:+14373448490">437-344-8490</a>.</p>

<p>Related reading: <a href="/blog/window-repair-vs-replacement-toronto">Window repair vs replacement: which one do you need?</a> and <a href="/blog/foggy-window-repair-cost-gta">Foggy window repair cost in the GTA</a>.</p>
`,
  },
  {
    slug: "front-door-glass-styles-guide",
    title: "Front Door Glass Styles: Choosing the Right Insert for Your Home",
    metaTitle: "Front Door Glass Styles: Choosing Inserts",
    metaDescription:
      "Choosing a front door glass insert? From clear to textured to decorative, here is what Toronto homeowners need to know about style, privacy, and light.",
    excerpt:
      "Your front door is the first thing visitors see. And for most GTA homes, the glass insert is the centrepiece of that first impression. Whether you are replacing a cracked panel, updating a dated design, or choosing glass for a new door, the options are wider than most homeowners expect.",
    publishedAt: "2026-11-12",
    author: "Dan",
    readingTime: 5,
    coverImage: "/images/services/front-door-decorative-1.webp",
    tags: ["front door glass", "door glass insert", "decorative glass", "home exterior"],
    sections: [
      { id: "glass-types", title: "Glass Types at a Glance" },
      { id: "sizing-and-fit", title: "Sizing and Fit" },
      { id: "privacy", title: "Privacy Considerations" },
      { id: "matching-style", title: "Matching Your Home's Style" },
      { id: "sidelights-and-transoms", title: "What About Sidelights and Transoms?" },
      { id: "how-replacement-works", title: "How Replacement Works" },
      { id: "faq", title: "FAQ" },
    ],
    content: `
<p>Your front door is the first thing visitors see. And for most <a href="/window-repair-toronto">GTA</a> homes, the glass insert is the centrepiece of that first impression. Whether you are replacing a cracked panel, updating a dated design, or choosing glass for a new door, the options are wider than most homeowners expect.</p>

<h2 id="glass-types">Glass Types at a Glance</h2>

<h3>Clear Glass</h3>

<p>Maximum light, zero privacy. Works well for doors with sidelights in low-traffic areas, or when paired with a storm door. Clear inserts are the least expensive option and let the most natural light into your foyer.</p>

<h3>Textured / Obscure Glass</h3>

<p>This category includes dozens of patterns: rain glass, reed glass, pinhead, glue chip, and more. Each diffuses light differently while blocking the view from outside. Textured glass is the most popular choice for front doors in suburban GTA homes because it balances light and privacy naturally.</p>

<h3>Decorative / Leaded Glass</h3>

<p>These inserts feature patterns made with zinc or brass caming (the metal strips between glass pieces), often combined with bevelled glass elements. Styles range from traditional Victorian to clean contemporary geometric designs. Decorative inserts are the premium option and can transform a plain door into a statement piece.</p>

<h3>Frosted Glass</h3>

<p>A uniform, sandblasted finish that blocks visibility completely while allowing soft, even light through. Frosted glass works well for modern and minimalist homes. It is available in full-frost or partial-frost patterns.</p>

<h3>Low-E and Energy-Efficient Glass</h3>

<p>Regardless of the decorative style, <a href="/front-door-glass">front door inserts</a> should include Low-E coatings for energy efficiency. In Toronto's climate, Low-E glass reduces heat loss in winter and solar heat gain in summer. Most quality inserts include this coating.</p>

<h2 id="sizing-and-fit">Sizing and Fit</h2>

<p>Front door glass inserts are not one-size-fits-all. They come in standard sizes (common formats like half-lite, three-quarter lite, and full-lite), but the exact measurements vary by door manufacturer. A replacement insert needs to match the existing opening precisely.</p>

<p>This is why accurate measurement matters. At LuminaSky, glass is measured first, custom-made to the exact dimensions, then installed. There is no trimming, no shimming, and no gaps.</p>

<h2 id="privacy">Privacy Considerations</h2>

<p>Think about when privacy matters most. Your front door faces the street, and at night, interior lights make clear glass work in reverse. You can see out during the day, but at night, anyone outside can see in.</p>

<p>For front-facing doors, textured glass, obscure glass, or a decorative insert with privacy-level opacity is the practical choice. Reserve clear glass for back doors, internal doors, or doors protected by a covered porch.</p>

<h2 id="matching-style">Matching Your Home's Style</h2>

<ul>
  <li><strong>Craftsman / Traditional:</strong> Bevelled leaded inserts with warm zinc caming, classic rectangular or fan patterns</li>
  <li><strong>Modern / Contemporary:</strong> Frosted panels, narrow reed glass, frameless designs with clean lines</li>
  <li><strong>Colonial / Georgian:</strong> Divided-lite patterns (grilles), clear or lightly textured glass</li>
  <li><strong>Transitional:</strong> Simple geometric patterns that bridge traditional and modern, often with nickel-finish caming</li>
</ul>

<h2 id="sidelights-and-transoms">What About Sidelights and Transoms?</h2>

<p>If your door has sidelights (the narrow glass panels beside the door) or a transom (the window above), matching the glass style across all pieces creates a cohesive look. Most decorative glass manufacturers offer coordinated sidelight and transom designs that pair with each door insert pattern.</p>

<h2 id="how-replacement-works">How Replacement Works</h2>

<p><a href="/front-door-glass">Front door glass inserts</a> are replaceable without replacing the door itself. The old insert and its frame are removed, and the new unit is fitted into the existing door opening. The process typically takes about an hour and does not require removing the door from its hinges.</p>

<p>If you are unsure what style to choose, you can send a photo of your current door to LuminaSky via WhatsApp and we will suggest options that match your home's architecture. The consultation is at no charge and no obligation.</p>

<h2 id="faq">FAQ</h2>

<h3>Can I change the glass style in my front door without replacing the door?</h3>

<p>Yes. The glass insert is a separate unit that sits inside the door. Replacing it gives you a completely new look without the cost or hassle of a new door. The insert is measured, ordered, and installed, typically in about an hour.</p>

<h3>How do I choose between textured and decorative glass for my front door?</h3>

<p>Textured glass is simpler and more affordable. It provides privacy and lets in light, with a clean, understated look. Decorative (leaded) glass is a design feature. It adds visual interest and curb appeal but comes at a higher price. Choose textured for a subtle upgrade, decorative for a statement.</p>

<p>We replace front door glass inserts across <a href="/window-repair-vaughan">Vaughan</a>, <a href="/window-repair-toronto">Toronto</a>, <a href="/window-repair-mississauga">Mississauga</a>, and the entire GTA. Want to see options for your door? <a href="/contact">Book a visit</a> or call <a href="tel:+14373448490">437-344-8490</a>.</p>

<p>Related reading: <a href="/blog/front-door-glass-insert-replacement">Front door glass insert replacement</a> and <a href="/blog/double-vs-triple-pane-low-e-argon">Double, triple, Low-E and argon explained</a>.</p>
`,
  },
  {
    slug: "emergency-glass-repair-toronto",
    coverImage: "/images/services/foggy-leaded-glass.webp",
    title: "Emergency Glass Repair Toronto: What to Expect at 2 AM",
    metaTitle: "Emergency Glass Repair Toronto: What to Expect",
    metaDescription:
      "Broken window in the middle of the night? Here is exactly what happens when you call for emergency glass repair in Toronto, from response times to process.",
    excerpt:
      "A rock hits your window. A break-in attempt shatters the glass. A storm blows debris through your patio door at midnight. When glass breaks unexpectedly, you need two things fast: your home secured, and a plan for permanent repair.",
    publishedAt: "2026-11-12",
    author: "Dan",
    readingTime: 5,
    tags: ["emergency glass repair", "broken window", "board up", "Toronto"],
    sections: [
      { id: "first-30-minutes", title: "The First 30 Minutes: Securing the Opening" },
      { id: "what-happens-when-you-call", title: "What Happens When You Call" },
      { id: "what-counts-as-emergency", title: "What Counts as a Glass Emergency?" },
      { id: "insurance", title: "Insurance and Documentation" },
      { id: "preventing-repeat", title: "Preventing Repeat Emergencies" },
      { id: "faq", title: "FAQ" },
    ],
    content: `
<p>A rock hits your window. A break-in attempt shatters the glass. A storm blows debris through your <a href="/patio-door-glass">patio door</a> at midnight. When glass breaks unexpectedly, you need two things fast: your home secured, and a plan for permanent repair.</p>

<p>Here is exactly what the process looks like when you call for <a href="/emergency-glass-repair">emergency glass service</a> in <a href="/window-repair-toronto">Toronto</a>.</p>

<h2 id="first-30-minutes">The First 30 Minutes: Securing the Opening</h2>

<p>Safety comes first. If there is broken glass on the floor, keep children and pets away. Wear shoes and gloves if you need to move through the area. Do not try to remove large pieces of glass from the frame. They can shift and cause serious cuts.</p>

<p><strong>If you can, cover the opening temporarily.</strong> A heavy garbage bag and duct tape will keep wind and rain out until help arrives. For larger openings, a piece of cardboard or plywood from the garage works. This is a temporary measure. Do not leave plastic sheeting as a long-term solution.</p>

<h2 id="what-happens-when-you-call">What Happens When You Call</h2>

<p>When you contact an emergency glass service:</p>

<ol>
  <li><strong>You describe the damage.</strong> What broke, how big is the opening, is your home secure? A photo sent via text or WhatsApp helps the technician prepare.</li>
  <li><strong>Response time is confirmed.</strong> For emergencies, most services aim for same-day or next-morning response. True middle-of-the-night arrivals depend on the company and the severity.</li>
  <li><strong>The technician boards up or secures the opening.</strong> If permanent glass cannot be installed immediately (custom sizes need to be ordered), the opening is boarded up with plywood or a temporary panel to secure your home.</li>
  <li><strong>Measurements are taken for permanent glass.</strong> The replacement sealed unit or pane is ordered to the exact dimensions. Glass is measured first, custom-made to size, then installed.</li>
  <li><strong>Permanent glass is installed.</strong> Typically within 5 to 10 business days for custom sizes. Standard sizes may be available sooner.</li>
</ol>

<h2 id="what-counts-as-emergency">What Counts as a Glass Emergency?</h2>

<p>Not every broken window is an emergency. Here is how to assess the urgency:</p>

<ul>
  <li><strong>Immediate / same-day.</strong> The opening cannot be secured on your own, your home is exposed to weather or intruders, ground-floor glass is shattered, or a child or pet could access broken glass.</li>
  <li><strong>Next business day.</strong> The opening is small, you have temporarily boarded it up, and your home is secure. A cracked (but intact) pane that is not letting air in.</li>
  <li><strong>Schedule at convenience.</strong> A chip or hairline crack in a double-pane unit where the glass is still structurally sound and the seal is intact.</li>
</ul>

<h2 id="insurance">Insurance and Documentation</h2>

<p>If the break was caused by a storm, attempted break-in, or vandalism, your home insurance may cover the repair. Before the technician arrives:</p>

<ul>
  <li>Take photos of the damage from multiple angles</li>
  <li>Note the time and what caused it (if known)</li>
  <li>If it was a break-in attempt, file a police report first. Your insurer will ask for the report number</li>
  <li>Keep the receipt from the board-up and the permanent glass installation</li>
</ul>

<h2 id="preventing-repeat">Preventing Repeat Emergencies</h2>

<p>Some glass emergencies are preventable:</p>

<ul>
  <li><strong>Tempered glass</strong> for ground-floor windows in high-traffic areas. It is much stronger than standard glass and breaks into safe, rounded pieces if it does fail.</li>
  <li><strong>Laminated glass</strong> for windows facing streets or alleys. Even if struck, the glass holds together on the interlayer instead of shattering.</li>
  <li><strong>Storm-rated sealed units</strong> for windows exposed to prevailing winds.</li>
  <li><strong>Window film</strong> as an added layer. Security film holds shattered glass in place, buying time in a break-in.</li>
</ul>

<h2 id="faq">FAQ</h2>

<h3>How quickly can emergency glass be replaced permanently?</h3>

<p>The opening is secured (boarded up) on the first visit, which usually happens same-day or next morning. Permanent replacement glass takes 5 to 10 business days for custom-sized <a href="/foggy-windows">sealed units</a>. If the size matches a standard in-stock unit, it can sometimes be installed on the first visit.</p>

<h3>Does home insurance cover emergency glass repair?</h3>

<p>In most cases, yes, if the damage was caused by a covered peril like a storm, vandalism, or attempted break-in. Contact your insurer and provide photos, a police report number (for break-ins), and the repair receipt. Your deductible still applies. Accidental damage from inside (a ball hitting the window, furniture falling into it) is often covered too, depending on your policy.</p>

<p>Glass emergency? Call <a href="tel:+14373448490">437-344-8490</a> any time, day or night. We respond to emergencies across the Greater Toronto Area.</p>
`,
  },
  {
    slug: "window-repair-vaughan-neighbourhood-guide",
    coverImage: "/images/services/foggy-window-real.webp",
    title: "Window Repair in Vaughan: A Neighbourhood-by-Neighbourhood Guide",
    metaTitle: "Window Repair Vaughan: Guide by Neighbourhood",
    metaDescription:
      "Window repair across Vaughan's neighbourhoods. Learn what issues Woodbridge, Maple, Kleinburg and Concord homes face and how to fix them.",
    excerpt:
      "Every neighbourhood in Vaughan has its own housing stock and its own set of window problems. Here is what we see in Woodbridge, Maple, Kleinburg, Concord, Thornhill and Vellore.",
    publishedAt: "2026-11-12",
    author: "Dan",
    readingTime: 7,
    tags: ["vaughan", "window repair", "neighbourhoods", "sealed units"],
    sections: [
      { id: "vaughan-housing-stock", title: "Vaughan's Housing Stock at a Glance" },
      { id: "woodbridge", title: "Woodbridge" },
      { id: "maple", title: "Maple" },
      { id: "kleinburg", title: "Kleinburg and Nashville" },
      { id: "concord", title: "Concord" },
      { id: "thornhill-vaughan-side", title: "Thornhill (Vaughan Side)" },
      { id: "vellore", title: "Vellore and Castlemore North" },
      { id: "common-problems", title: "The Most Common Problems Across Vaughan" },
      { id: "getting-started", title: "Getting Started" },
    ],
    content: `
<p>Vaughan covers a lot of ground, from the older Italian-built homes of Woodbridge to the estate lots in Kleinburg and the fast-growing subdivisions north of Major Mackenzie. Every area has different housing stock, different window brands, and different problems that show up at different times. This guide walks through what we see in each neighbourhood so you know what to expect when something goes wrong with your windows.</p>

<h2 id="vaughan-housing-stock">Vaughan's Housing Stock at a Glance</h2>

<p>Vaughan grew in waves. Woodbridge and Concord filled in through the 1970s, 1980s and 1990s. Maple expanded rapidly in the early 2000s. Kleinburg stayed low-density but added estate subdivisions. Vellore and the areas north of Rutherford Road are still building. Each wave brought a different set of window manufacturers, glass types and hardware systems, which means the repair approach changes from one street to the next.</p>

<h2 id="woodbridge">Woodbridge</h2>

<p>Woodbridge is the heart of older Vaughan. Homes along Islington Avenue, Kipling Avenue and the streets between Pine Valley and Highway 27 were mostly built between 1980 and 1998. These homes carry the first or second generation of double-pane sealed glass units, and many of those seals have already failed or are close to it.</p>

<p>The most common call we get from Woodbridge is <a href="/foggy-glass-repair-vaughan">foggy glass</a>: condensation trapped between the two panes of a sealed unit. The glass is not cracked and the frame is usually fine. The seal around the perimeter has broken down after 20-plus years of freeze-thaw cycling, letting moisture in. We measure the glass, order a replacement sealed unit to the exact size, and install it into the existing frame. The frame stays, the fog is gone, and the window is weathertight again. You can learn more about the process on our <a href="/foggy-windows">foggy window repair</a> page.</p>

<p>Casement windows with <a href="/cranks">crank operators</a> are also common in Woodbridge. The original cranks, usually Truth Hardware or Roto, wear out after 15 to 25 years of daily use. The gears strip, the arm bends, or the track corrodes. We carry the most common <a href="/window-crank-repair-vaughan">crank replacements</a> and complete most hardware repairs on the same visit.</p>

<h2 id="maple">Maple</h2>

<p>Maple grew fast from the late 1990s through the 2010s. The subdivisions north of Major Mackenzie Drive, along Peter Rupert Avenue, Dufferin Street and west toward Keele, are filled with builder-grade windows from that era. These windows are newer than Woodbridge stock, but the quality of the original hardware was often lower.</p>

<p>Patio door rollers are a frequent issue in Maple. The sliding patio doors in these homes use small nylon or steel rollers that wear flat after 10 to 15 years of daily use. The door gets heavy, sticks on the track, and eventually will not lock properly. We replace the rollers and adjust the door so it slides and locks like new.</p>

<p>Builder-grade casement cranks also show up early in Maple because the original hardware was the lightest option available at the time. Replacement with a heavier-duty operator is straightforward and keeps the window working for another 15-plus years.</p>

<h2 id="kleinburg">Kleinburg and Nashville</h2>

<p>Kleinburg and the Nashville area are where Vaughan's largest homes are. Lot sizes are bigger, the houses are bigger, and the windows are bigger. Many of these homes have floor-to-ceiling glass walls, large picture windows, and architectural <a href="/skylight-repair-vaughan">skylights</a> that need ladder or roof access for service. Our <a href="/skylights">skylight repair</a> team handles everything from minor seal replacements to full glass swaps on steep-pitch roofs.</p>

<p>The glass units in estate homes are often oversized, which means they are custom-ordered for every <a href="/glass-replacement">glass replacement</a>. Standard sizes do not apply. We measure on site, order the glass to exact dimensions, and return for installation once the unit is ready. Turnaround depends on size and glass type, but most custom units arrive within 5 to 15 business days.</p>

<p>Skylight work in Kleinburg often involves steep-pitch roofs and sometimes requires safety systems or scaffolding. We assess the access before quoting so there are no surprises on installation day.</p>

<h2 id="concord">Concord</h2>

<p>Concord sits between Highway 7 and Steeles Avenue, east of Highway 400. It is a mix of residential streets, townhouse complexes and commercial or industrial buildings. The residential stock is similar in age to Woodbridge, with many homes from the 1980s and 1990s, so the same sealed-unit and hardware failures apply.</p>

<p>The commercial side of Concord adds storefront glass, warehouse windows and automatic door glass to the mix. Businesses along Interchange Way, Millway Avenue and the Highway 7 corridor call us for broken storefront panels, failed <a href="/commercial-glass-repair">commercial sealed units</a> and <a href="/emergency-glass-repair">emergency board-ups</a> after break-ins.</p>

<h2 id="thornhill-vaughan-side">Thornhill (Vaughan Side)</h2>

<p>Thornhill straddles the Vaughan-Markham border. The Vaughan side, roughly west of Yonge Street, includes the Thornhill Woods, Patterson and Brownridge areas. Homes here were built from the late 1980s through the 2000s. The older homes along Bathurst and Centre Street have the same seal failures as Woodbridge. The newer Thornhill Woods homes are starting to see hardware problems as they hit the 15 to 20 year mark.</p>

<p>Large bay windows and two-storey foyer windows are common in Thornhill homes. These are more involved to service because the glass is heavy and the access is high, but the repair principle is the same: measure, order, install.</p>

<h2 id="vellore">Vellore and Castlemore North</h2>

<p>Vellore, north of Rutherford Road between Weston and Jane, is one of Vaughan's newest areas. Homes here are typically less than 15 years old. Window problems at this age are less about seal failure and more about hardware defects, poor installation by the original builder, or damage from settling.</p>

<p>We see a fair number of windows that were installed slightly out of square, which causes the sash to bind and makes the crank work harder than it should. Adjusting or shimming the sash and replacing a stressed operator fixes the problem before it causes seal damage down the road.</p>

<h2 id="common-problems">The Most Common Problems Across Vaughan</h2>

<ul>
<li><strong>Foggy or cloudy glass:</strong> failed seals on double-pane units. We replace the sealed glass unit while keeping the frame. Covered by a 5-year seal warranty.</li>
<li><strong>Broken or stiff cranks:</strong> worn gears, bent arms, corroded tracks. Most <a href="/window-crank-repair-vaughan">crank repairs</a> are completed on the same day, on the first visit.</li>
<li><strong>Patio doors that stick or won't lock:</strong> worn rollers, damaged tracks or misaligned frames.</li>
<li><strong>Drafts around the sash:</strong> can be caused by failed weatherstripping, a warped sash, or a seal that has pulled away from the frame.</li>
<li><strong>Cracked or broken glass:</strong> from impact, thermal stress or failed tempered units. We measure and order replacement glass to the exact size.</li>
</ul>

<h2 id="getting-started">Getting Started</h2>

<p>Send us a few photos of the problem and we will tell you what is going on and what it will take to fix it. No charge for the photo assessment. If we need to come out, the visit is $30, credited toward the repair if you go ahead.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or visit our <a href="/window-repair-vaughan">Vaughan window repair</a> page for more details. We are available 24/7 and serve every neighbourhood in Vaughan.</p>
`,
  },
  {
    slug: "vaughan-sealed-unit-replacement-winter",
    coverImage: "/images/gallery/foggy-window-before.webp",
    title: "Why Vaughan Homes Need Sealed Unit Replacement Before Winter",
    metaTitle: "Sealed Unit Replacement Vaughan: Winter",
    metaDescription:
      "Vaughan homeowners: replace failed sealed glass units before winter. Learn the signs, timing and process for foggy window repair.",
    excerpt:
      "A fogged window in September becomes a cold, drafty window in January. Here is why fall is the best time to replace failed sealed units in Vaughan, and what happens if you wait.",
    publishedAt: "2026-11-12",
    author: "Dan",
    readingTime: 6,
    tags: ["vaughan", "sealed units", "winter", "foggy glass", "energy efficiency"],
    sections: [
      { id: "why-vaughan-winters-matter", title: "Why Vaughan Winters Are Hard on Windows" },
      { id: "how-sealed-units-fail", title: "How Sealed Units Fail" },
      { id: "signs-of-failure", title: "Signs Your Sealed Units Have Failed" },
      { id: "what-happens-if-you-wait", title: "What Happens If You Wait Until Winter" },
      { id: "fall-replacement", title: "Why Fall Is the Right Time" },
      { id: "the-replacement-process", title: "How Sealed Unit Replacement Works" },
      { id: "which-homes-are-most-at-risk", title: "Which Vaughan Homes Are Most at Risk" },
      { id: "get-a-quote", title: "Get a Quote" },
    ],
    content: `
<p>If you have noticed fog, condensation or a milky haze between the two panes of a window, the sealed unit has failed. It might not feel like an emergency right now. The window still closes, the house is still comfortable, and the fog comes and goes with the weather. But once November hits and Vaughan's temperatures drop below freezing, that failed seal turns into a real problem: cold drafts, frost on the inside of the glass, and heating bills that climb higher than they should.</p>

<h2 id="why-vaughan-winters-matter">Why Vaughan Winters Are Hard on Windows</h2>

<p>Vaughan sits far enough north of Lake Ontario that it does not get the same moderating effect as downtown Toronto. Winter temperatures regularly hit -15 to -20 degrees Celsius, and wind chill makes it feel colder. The proximity to Lake Simcoe brings additional moisture and heavier snowfall than areas further south.</p>

<p>This combination of cold, moisture and repeated freeze-thaw cycles puts enormous stress on window seals. The glass expands and contracts with every temperature swing. The sealant around the perimeter of the sealed unit flexes, hardens and eventually cracks. Once the seal breaks, moist air gets between the panes and the insulating gas (usually argon) escapes. The window loses a significant portion of its insulating value.</p>

<h2 id="how-sealed-units-fail">How Sealed Units Fail</h2>

<p>A sealed glass unit, also called an insulated glass unit or IGU, is two panes of glass separated by a spacer bar and sealed at the edges. The space between the panes is filled with dry air or argon gas, which slows heat transfer. The perimeter seal keeps moisture out and the gas in.</p>

<p>Over time, UV exposure, temperature cycling and simple age break down the sealant material. The seal cracks or pulls away from the glass, letting the gas out and letting humid air in. The moisture condenses on the inner surfaces of the glass, creating the fog or haze you see. Once this happens, the unit cannot be resealed. The glass unit needs to be replaced.</p>

<h2 id="signs-of-failure">Signs Your Sealed Units Have Failed</h2>

<ul>
<li><strong>Fog or condensation between the panes</strong> that you cannot wipe off from either side. This is the clearest sign.</li>
<li><strong>A milky or cloudy film</strong> that is always visible, even on dry days. This means mineral deposits have formed on the inner glass surfaces.</li>
<li><strong>Visible moisture droplets</strong> between the panes, especially in the morning or during temperature changes.</li>
<li><strong>Frost or ice on the inside surface</strong> of the inner pane during cold weather. This means the window has lost most of its insulating ability.</li>
<li><strong>A noticeable cold spot</strong> when you stand near the window, even when it is closed and locked.</li>
</ul>

<h2 id="what-happens-if-you-wait">What Happens If You Wait Until Winter</h2>

<p>A failed sealed unit in the fall is an inconvenience. The same failed unit in January is a comfort and cost problem. Here is what changes once the cold arrives:</p>

<p><strong>Drafts increase.</strong> Without the insulating gas layer, the inner pane of glass drops close to the outdoor temperature. This creates a cold downdraft as warm room air hits the cold glass and sinks to the floor. You feel a draft even though the window is closed tight.</p>

<p><strong>Heating costs rise.</strong> Your furnace works harder to compensate for the heat loss through the failed glass. One or two failed units might not change your bill much, but many Vaughan homes have five, ten or more units that are all the same age and failing together.</p>

<p><strong>Condensation and frost appear on the inside.</strong> When the inner glass surface drops below the dew point of the room air, water condenses on it. In cold enough weather, that condensation freezes. This can damage the window frame, the sill and the wall below if it drips consistently.</p>

<p><strong>Scheduling gets harder.</strong> Glass replacement requires measuring, ordering a custom unit, and a return visit for installation. In winter, demand is higher, weather delays are more common, and the turnaround takes longer. Replacing in fall gives you the best selection of scheduling options.</p>

<h2 id="fall-replacement">Why Fall Is the Right Time</h2>

<p>September through November is the ideal window for sealed unit replacement in Vaughan. The weather is still mild enough for comfortable installation. Caulking and sealants cure properly in moderate temperatures. Scheduling is more flexible because demand has not spiked yet. And you go into winter with fully insulating glass instead of patching the problem with plastic film or heavy curtains.</p>

<h2 id="the-replacement-process">How Sealed Unit Replacement Works</h2>

<p>The process is simpler than most homeowners expect. We do not remove or replace the entire window. Here is how it works:</p>

<ol>
<li><strong>Photo assessment:</strong> Send us photos of the affected windows. We can usually confirm seal failure and provide a ballpark from photos alone, at no charge.</li>
<li><strong>On-site measurement:</strong> We visit, confirm the diagnosis, and measure the exact dimensions of the glass unit. If a site visit is needed, the fee is $30, credited toward the repair.</li>
<li><strong>Custom glass order:</strong> We order a new sealed unit made to the exact size. Standard sizes are often in stock. Custom sizes typically take 5 to 15 business days.</li>
<li><strong>Installation:</strong> We remove the failed unit from the frame, install the new glass, reseal the frame and clean up. The frame, trim and hardware all stay in place.</li>
</ol>

<p>Every new sealed unit carries a 5-year warranty against seal failure and a 2-year warranty on workmanship.</p>

<h2 id="which-homes-are-most-at-risk">Which Vaughan Homes Are Most at Risk</h2>

<p>Homes built between 1985 and 2000 are in the highest-risk window right now. That covers large parts of Woodbridge, Concord, the Vaughan side of Thornhill, and the older sections of Maple. The original sealed units in these homes are 25 to 40 years old, well past the typical lifespan of the perimeter seal.</p>

<p>If you are in one of these areas and you have not replaced any glass yet, it is worth checking all of your windows at once. Seal failure tends to happen across the house within a few years, because all the units were made at the same time with the same materials. Replacing them together is more efficient and often more cost-effective than doing them one at a time over several years.</p>

<h2 id="get-a-quote">Get a Quote</h2>

<p>Send us photos of your fogged or failed windows and we will get back to you with a quote. No obligation, no pressure. Visit our <a href="/foggy-glass-repair-vaughan">Vaughan foggy glass repair</a> page or call <a href="tel:+14373448490">437-344-8490</a>. We also handle <a href="/glass-replacement">full glass replacement</a> and <a href="/window-repair-vaughan">general window repair</a> across every neighbourhood in Vaughan.</p>
`,
  },
  {
    slug: "commercial-glass-repair-vaughan-guide",
    coverImage: "/images/services/foggy-leaded-glass.webp",
    title: "Commercial Glass Repair in Vaughan: Storefronts, Offices and Plazas",
    metaTitle: "Commercial Glass Repair Vaughan",
    metaDescription:
      "Commercial glass repair in Vaughan. Storefront glass, office partitions, plaza entrances and emergency board-ups across the Highway 7 corridor.",
    excerpt:
      "Vaughan's commercial corridors run from Highway 7 to Steeles, packed with plazas, storefronts and office buildings. Here is how we handle commercial glass repair across the city.",
    publishedAt: "2026-11-12",
    author: "Dan",
    readingTime: 6,
    tags: ["vaughan", "commercial glass", "storefronts", "business"],
    sections: [
      { id: "vaughan-commercial-landscape", title: "Vaughan's Commercial Landscape" },
      { id: "highway-7-corridor", title: "The Highway 7 Corridor" },
      { id: "woodbridge-commercial", title: "Woodbridge Commercial District" },
      { id: "maple-commercial", title: "Maple Commercial Areas" },
      { id: "types-of-commercial-glass", title: "Types of Commercial Glass Work" },
      { id: "emergency-board-ups", title: "Emergency Board-Ups" },
      { id: "the-process", title: "How Commercial Glass Repair Works" },
      { id: "get-a-quote", title: "Get a Quote" },
    ],
    content: `
<p>Vaughan is one of the fastest-growing commercial centres in the GTA. Between the Highway 7 corridor, the Vaughan Mills area, the Colossus Centre, Woodbridge's retail strips and Maple's expanding commercial district, there are thousands of businesses with glass that needs maintaining, repairing or replacing. We handle commercial glass repair across all of these areas, from a single cracked storefront panel to a full board-up after a break-in.</p>

<h2 id="vaughan-commercial-landscape">Vaughan's Commercial Landscape</h2>

<p>Commercial glass in Vaughan falls into a few main categories. There are retail storefronts in strip plazas along major roads. There are office buildings and professional centres with large glass facades. There are restaurants and food businesses with display windows and glass entrance doors. And there are industrial and warehouse buildings in Concord and along Highway 400 with everything from small office windows to large loading dock glass.</p>

<p>Each type has different glass specifications, different framing systems, and different urgency levels when something breaks. A restaurant with a shattered front window cannot wait two weeks for a replacement. An office building with a fogged sealed unit can schedule the work at a convenient time. We handle both ends of the spectrum.</p>

<h2 id="highway-7-corridor">The Highway 7 Corridor</h2>

<p>Highway 7 from Weston Road to Highway 404 is Vaughan's main commercial artery. Plazas, car dealerships, banks, restaurants and professional offices line both sides. The glass in these buildings ranges from standard single-pane storefront panels to large double-pane sealed units in newer construction.</p>

<p>Common issues along Highway 7 include cracked storefront glass from impact or thermal stress, failed sealed units in office facades, <a href="/front-door-glass-vaughan">broken entrance door glass</a> (both manual and automatic doors), and vandalism or break-in damage overnight. The high traffic volume means broken glass needs to be addressed quickly for safety and appearance.</p>

<h2 id="woodbridge-commercial">Woodbridge Commercial District</h2>

<p>Woodbridge has a dense concentration of retail and service businesses along Islington Avenue, Kipling Avenue, Woodbridge Avenue and the surrounding streets. Many of these storefronts are in older plazas from the 1980s and 1990s with aluminum-framed glass that has been in place for decades.</p>

<p>The most common work in Woodbridge commercial properties is replacing fogged or cracked sealed units in storefront windows, repairing or replacing glass in entrance doors, and upgrading single-pane glass to double-pane for energy efficiency and noise reduction. Some older storefronts still have original single-pane glass that fogs on the inside during winter, creating a visibility problem for the business.</p>

<h2 id="maple-commercial">Maple Commercial Areas</h2>

<p>Maple's commercial areas along Major Mackenzie Drive and around the Maple GO station are newer, with most construction from the 2000s and 2010s. The glass in these buildings is generally in better condition, but hardware failures on commercial entrance doors are common. Hydraulic closers wear out, pivot hinges loosen, and the tempered glass panels in automatic sliding doors crack from repeated impact or misalignment.</p>

<p>The plazas along Peter Rupert Avenue and Dufferin Street south of Major Mackenzie also see a fair amount of vandalism damage, particularly overnight. We provide <a href="/emergency-glass-repair-vaughan">emergency glass repair</a> and temporary board-up service around the clock for these situations.</p>

<h2 id="types-of-commercial-glass">Types of Commercial Glass Work</h2>

<ul>
<li><strong>Storefront glass replacement:</strong> Single-pane or sealed unit replacement in aluminum storefront framing. We measure the opening, order tempered or laminated glass to size, and install it.</li>
<li><strong>Entrance door glass:</strong> Tempered glass panels in commercial entrance doors, both manual swing doors and automatic sliding doors. We replace the glass and check the door hardware and alignment.</li>
<li><strong>Office partition glass:</strong> Interior glass walls and partitions in office spaces. These are usually tempered glass panels held by clamps or channels.</li>
<li><strong>Display window glass:</strong> Large format glass for retail displays. Often requires tempered or laminated safety glass depending on the size and location.</li>
<li><strong>Sealed unit replacement:</strong> Double-pane glass in office and retail facades where the seal has failed and the glass is fogged. Same process as residential: measure, order, install.</li>
</ul>

<h2 id="emergency-board-ups">Emergency Board-Ups</h2>

<p>A broken storefront window is a security risk. It cannot wait until morning, and it cannot wait for custom glass to arrive. We provide emergency board-up service across Vaughan 24 hours a day, 7 days a week. We secure the opening with plywood, clean up the broken glass, measure for the replacement, and return to install the new glass as soon as it is ready.</p>

<p>For break-in damage, we recommend photographing everything before cleanup and filing a police report. Your commercial insurance policy will likely cover the glass replacement, and the police report number speeds up the claim. We can provide the documentation your insurer needs, including photos, measurements and an itemized invoice.</p>

<h2 id="the-process">How Commercial Glass Repair Works</h2>

<ol>
<li><strong>Assessment:</strong> Send photos or call us. For straightforward replacements, we can often quote from photos. For larger or more complex jobs, we visit the site to assess the framing, glass type and access requirements. The site visit fee is $30, credited toward the work.</li>
<li><strong>Measurement and order:</strong> We measure the exact dimensions and specify the glass type (tempered, laminated, sealed unit, tinted, Low-E). Glass is custom-made to the exact size needed.</li>
<li><strong>Scheduling:</strong> We schedule installation at a time that works for your business. For retail and restaurants, that often means early morning before opening or after closing.</li>
<li><strong>Installation and cleanup:</strong> We install the new glass, dispose of the old material, and clean up the work area. Every job carries a warranty: 5 years on sealed glass units, 2 years on workmanship.</li>
</ol>

<h2 id="get-a-quote">Get a Quote</h2>

<p>Whether you have one cracked panel or a full storefront that needs replacing, send us photos and we will get you a written quote. Visit our <a href="/commercial-glass-repair-vaughan">Vaughan commercial glass repair</a> page or call <a href="tel:+14373448490">437-344-8490</a>. For after-hours emergencies, the same number reaches us around the clock.</p>
`,
  },
  {
    slug: "types-of-window-glass-explained",
    coverImage: "/images/services/window-replacement-service.webp",
    title: "Types of Window Glass: What Every Homeowner Should Know",
    metaTitle: "Types of Window Glass Explained for Toronto Homeowners",
    metaDescription:
      "Learn the difference between tempered, laminated, Low-E, and insulated glass. Know what type of glass is in your windows and what to ask for when replacing.",
    excerpt:
      "Not all window glass is the same. Knowing the difference between tempered, laminated, Low-E, and insulated glass helps you make smarter decisions when it is time for a repair or replacement.",
    publishedAt: "2026-11-16",
    author: "Dan",
    readingTime: 14,
    tags: ["window glass", "glass types", "toronto", "homeowner guide", "glass replacement"],
    sections: [
      { id: "why-glass-type-matters", title: "Why Glass Type Matters" },
      { id: "a-brief-history", title: "A Brief History of Window Glass" },
      { id: "float-annealed-glass", title: "Float (Annealed) Glass" },
      { id: "tempered-glass", title: "Tempered Glass" },
      { id: "laminated-glass", title: "Laminated Glass" },
      { id: "low-e-coated-glass", title: "Low-E Coated Glass" },
      { id: "insulated-glass-units", title: "Insulated Glass Units (Sealed Units)" },
      { id: "argon-and-gas-fills", title: "Argon and Gas Fills" },
      { id: "obscure-textured-glass", title: "Obscure and Textured Glass" },
      { id: "wired-glass", title: "Wired Glass" },
      { id: "energy-star-windows-canada", title: "Energy Star Windows in Canada" },
      { id: "how-to-identify-your-glass", title: "How to Identify What You Have" },
      { id: "what-to-ask-for-when-replacing", title: "What to Ask for When Replacing Glass" },
      { id: "get-a-quote", title: "Get a Quote" },
    ],
    content: `
<p>When a window breaks or fogs up, most homeowners think about "getting the glass replaced." But glass is not a single product. There are several types, each made for a different purpose. The glass in your bathroom window is not the same as the glass in your patio door, and the glass beside your front entrance has to meet specific safety requirements under the Ontario Building Code.</p>

<p>According to Natural Resources Canada (NRCan), windows can account for up to 25% of total heat loss in a home. That figure alone explains why the type of glass in your windows matters so much. Understanding the basics helps you have a better conversation with your glass technician, avoid overpaying for features you do not need, and make sure your replacement glass meets code where it matters.</p>

<p>Here is a comprehensive breakdown of every type of residential window glass, with the science and history behind each one.</p>

<h2 id="why-glass-type-matters">Why Glass Type Matters</h2>

<p>Glass type affects four things in your home: safety, energy efficiency, noise, and privacy. A window near a staircase needs glass that will not send large shards flying if someone falls into it. A window facing a busy road benefits from glass that dampens sound. A south-facing window in summer needs glass that reflects heat.</p>

<p>When you replace glass, the new pane needs to match or exceed what was there before. If your original glass was tempered because the building code required it in that location, the replacement must also be tempered. Getting the type wrong is not just a performance issue. It can be a code violation. For a full list of locations where safety glass is mandatory, see our guide to <a href="/blog/safety-glass-ontario-building-code">safety glass requirements under the Ontario Building Code</a>.</p>

<p>Energy efficiency is an equally important factor. Construction Canada modelling has shown that in a typical wood-frame house, windows can be responsible for up to 72% of envelope heat loss despite making up only 20% of the wall area. The glass you choose, and the coatings and gas fills you specify, directly affect how much of your heating and cooling bill goes out the window.</p>

<h2 id="a-brief-history">A Brief History of Window Glass</h2>

<p>Glass has been used in windows for centuries, but the modern window industry traces back to two key inventions.</p>

<p>The first is the float glass process, conceived by Sir Alastair Pilkington in June 1952 at his factory in St. Helens, England. After seven years of secret development, the process was publicly announced on 20 January 1959. The idea was deceptively simple: pour molten glass onto a bath of molten tin, where it floats and spreads into a perfectly flat, uniform sheet. By the early 1960s, every major flat glass manufacturer in the world had licensed the Pilkington process. It remains the universal method for producing flat glass to this day.</p>

<p>The second is the insulated glass unit, or sealed unit. The concept of trapping air between two panes for insulation goes back further than most people realize. Thomas D. Stetson filed the first patent for a hermetically sealed double-pane window in 1865. But it took until 1934, when Charles D. Haven patented the "Thermopane" system, for the technology to become commercially viable. Mass production began in the late 1930s. Double glazing gained traction slowly through the 1950s and 1960s in North America, but it was the 1973 oil crisis that pushed energy-efficient windows into the mainstream. By 2012, roughly 80% of homes in the UK had double glazing, and similar adoption had occurred across Canada.</p>

<p>Today, every type of window glass described below is manufactured using the float process as a starting point, then treated, coated, or assembled to meet specific performance needs.</p>

<h2 id="float-annealed-glass">Float (Annealed) Glass</h2>

<p>Float glass is the starting point for almost all other glass types. It is made by floating molten glass on a bed of molten tin at approximately 1,100°C, which produces a perfectly flat, uniform sheet with consistent thickness. After cooling slowly in a controlled oven (a process called annealing), it becomes the basic, everyday glass you see in older homes, picture frames, and cabinet doors.</p>

<p><strong>How it breaks:</strong> into large, sharp shards that can cause serious lacerations. This is the main reason float glass has been replaced by safety glass in many residential applications. If a child runs into a floor-to-ceiling float glass panel, the shards can cause injuries severe enough to require emergency medical attention. Research from multiple children's hospitals has confirmed that a significant proportion of glass-related injuries in homes involve non-safety glazing in locations where safety glass should have been installed.</p>

<p><strong>Where you still find it:</strong> upper-storey windows that are not near doors or stairs, some older homes that have not been renovated, and non-safety-critical applications like cabinet doors and shelving. Many Toronto homes built before the 1990s still have annealed glass in locations that would require safety glazing under the current Ontario Building Code.</p>

<p><strong>Cost:</strong> float glass is the least expensive type to manufacture, which is why it was used everywhere before safety codes tightened. When replacing glass in a location that does not require safety glazing, float glass (as part of a sealed unit) is a cost-effective option.</p>

<h2 id="tempered-glass">Tempered Glass</h2>

<p>Tempered glass starts as regular float glass, then gets heated to about 620°C and rapidly cooled with jets of air in a process called quenching. This puts the outer surfaces into compression and the interior into tension. The result: glass that is roughly four to five times stronger than annealed glass of the same thickness.</p>

<p>The numbers back this up. Under the ASTM C1048 standard (the benchmark for heat-treated flat glass), fully tempered glass must achieve a minimum surface compression of 10,000 psi (69 MPa). Testing data from major glass manufacturers shows that under uniform static loads, the breakage probability for annealed glass is approximately 47 per thousand, compared to just 1 per million for tempered glass under the same conditions. That is a dramatic difference in structural reliability.</p>

<p><strong>How it breaks:</strong> into small, roughly cube-shaped pieces with blunt edges. You have probably seen this if you have ever seen a shattered car side window. The small pieces are far less likely to cause serious cuts compared to the jagged shards of float glass.</p>

<p><strong>Where it is required:</strong> the Ontario Building Code (OBC Section 9.6.1.4) requires safety glazing, which includes tempered glass, in several residential locations:</p>

<ul>
  <li>Glass in or within 600 mm of a door</li>
  <li>Glass panels that extend close to the floor where someone could walk into them</li>
  <li>Glass adjacent to staircases, ramps, and landings</li>
  <li>Shower enclosures and bathtub surrounds</li>
  <li>Sidelights beside entry doors</li>
</ul>

<p>If your window is in one of these locations and you need a <a href="/glass-replacement">glass replacement</a>, the new glass must be tempered (or laminated). A reputable glass company will know which locations require safety glass and will not install standard float glass where code demands otherwise.</p>

<p><strong>One drawback:</strong> tempered glass cannot be cut or drilled after tempering. The internal stress pattern that gives it strength also means that any attempt to modify the pane after manufacture causes the entire piece to shatter instantly. If the dimensions are wrong, the entire pane must be remanufactured. This is one reason precision measurement matters. Glass is measured first, custom-made to your exact dimensions, then installed.</p>

<p><strong>Spontaneous breakage:</strong> in rare cases, tempered glass can break on its own due to nickel sulfide (NiS) inclusions. These are microscopic contaminants that can expand over time and cause the pane to shatter without impact. The phenomenon is well documented in the glass industry. Inclusions larger than 55 micrometres in the tension zone of the glass cause nearly all heat-soak breakages. The risk is estimated at roughly 1 breakage per 1,100 tonnes of glass produced. While rare in residential windows, it has caused notable incidents in high-rise balcony panels, particularly in Toronto condos during 2011 and 2012. This risk is one reason laminated glass is increasingly preferred for balcony guards and railings.</p>

<h2 id="laminated-glass">Laminated Glass</h2>

<p>Laminated glass is made by bonding two (or more) sheets of glass together with a plastic interlayer, typically polyvinyl butyral (PVB). Think of it as a glass sandwich with a tough, flexible layer in the middle.</p>

<p>The concept has a fascinating origin. In 1903, French chemist Édouard Bénédictus accidentally knocked a glass flask off a shelf in his laboratory. The flask shattered but held its shape instead of scattering into pieces. He discovered that it had been coated with cellulose nitrate, a liquid plastic that had dried to form a thin film inside the flask. Bénédictus patented the concept in 1909 and developed the first commercial laminated glass under the brand name "Triplex" in 1910, initially using a gelatin interlayer. The technology saw its first major adoption in World War I, where it was used in gas mask eyepieces to prevent shrapnel injuries. By the 1930s, PVB had replaced gelatin as the interlayer material, and laminated glass became the standard for automobile windshields.</p>

<p><strong>How it breaks:</strong> the glass cracks, but the pieces stay stuck to the interlayer instead of falling out. If someone throws a rock through a laminated window, the glass spider-webs but largely stays in the frame. This makes it excellent for security and for locations where falling glass shards would be dangerous.</p>

<p><strong>Noise reduction:</strong> the PVB interlayer absorbs sound vibrations, making laminated glass one of the best options for reducing outside noise. Standard monolithic glass at 1/4 inch thickness achieves an STC (Sound Transmission Class) rating of about 31. A laminated assembly of similar total thickness reaches an STC of 38. That difference is more significant than it sounds. In acoustics, every 10-point increase in STC roughly halves the perceived sound level. Homes near highways, flight paths, or busy intersections see a noticeable improvement with laminated sealed units compared to standard tempered sealed units. Acoustic-grade PVB interlayers and assemblies with unequal glass thickness can push performance even higher by disrupting the coincidence frequency where sound passes through most easily.</p>

<p><strong>Where it is used:</strong> <a href="/front-door-glass">front door glass panels</a> and sidelights (security), ground-floor windows in high-traffic areas, glass railings and guards (the OBC increasingly requires laminated glass for guard applications at height), and any window where the homeowner wants improved sound insulation or break-in resistance.</p>

<p>Laminated glass also qualifies as safety glass under the Ontario Building Code, so it can be used anywhere tempered glass is required. For guard and railing applications at height, it is often the preferred choice over tempered glass precisely because it stays in place when broken, maintaining the barrier even after impact.</p>

<h2 id="low-e-coated-glass">Low-E Coated Glass</h2>

<p>Low-E stands for low emissivity. It refers to a microscopically thin metallic oxide coating applied to one surface of the glass. The coating is invisible to the eye but reflects a significant portion of infrared radiation (heat), either keeping heat inside your home in winter or reflecting solar heat away in summer, depending on which glass surface the coating is applied to.</p>

<p><strong>How it works:</strong> without Low-E coating, glass absorbs and re-emits heat freely in both directions. The coating acts as a selective filter: it lets visible light pass through while reflecting infrared radiation. The measurable impact is significant. A standard clear double-pane sealed unit has a centre-of-glass U-value of approximately 0.48 W/m²·K. Adding a pyrolytic Low-E coating to one pane reduces that to about 0.33 W/m²·K, a roughly 30% improvement in thermal performance from a single coating layer. Depending on the home, climate, and window orientation, Low-E glass can reduce heating and cooling costs by 10 to 30%.</p>

<p><strong>Types of Low-E coating:</strong> there are two main categories. Hard-coat (pyrolytic) Low-E is applied during the glass manufacturing process and is bonded directly to the hot glass surface. It is durable and can be used on exposed surfaces. Soft-coat (sputtered) Low-E is applied after manufacturing in a vacuum chamber and offers better thermal performance, but it is more delicate and must be sealed inside a double or triple-pane unit where it is protected from contact and weathering. Most modern residential sealed units use soft-coat Low-E for maximum efficiency.</p>

<p><strong>Levels of Low-E:</strong> coatings come in different performance grades. Some manufacturers label them Low-E, Low-E2, or Low-E3 based on the number of coating layers. More layers generally means better thermal performance, but also slightly reduced visible light transmission. The right choice depends on the window's orientation and your priorities.</p>

<p><strong>Important note:</strong> Low-E coating is an upgrade option, not a given. When ordering replacement sealed units, ask your glass technician whether Low-E makes sense for your specific windows. South and west-facing windows benefit the most from solar-control Low-E. North-facing windows benefit from heat-retention Low-E in winter. A basement window that gets almost no direct sun may not justify the added cost. Your technician can recommend the right configuration based on your specific situation.</p>

<h2 id="insulated-glass-units">Insulated Glass Units (Sealed Units)</h2>

<p>An insulated glass unit, also called a sealed unit or IGU, is what most people mean when they say "window glass" in a modern home. It consists of two or three panes of glass separated by a spacer bar and sealed together at the edges. The space between the panes is filled with air or an inert gas like argon, which insulates better than air alone.</p>

<p><strong>How they work:</strong> the trapped gas layer slows heat transfer between indoors and outdoors by reducing convection and conduction between the panes. A single pane of glass provides almost no insulation (roughly R-1). A standard air-filled double-pane sealed unit achieves approximately R-2 to R-4. Add Low-E coating and argon gas fill, and performance climbs to R-3 to R-5. Triple-pane units with Low-E and argon can reach R-5 to R-8. Each upgrade narrows the gap between your window's performance and your insulated wall, which typically falls between R-12 and R-24.</p>

<p><strong>How long they last:</strong> a well-made sealed unit has a planning lifespan of 20 to 25 years under normal conditions. A major field study conducted by Oak Ridge National Laboratory (ORNL) tracked 10,944 insulated glass units and found a failure rate of just 1% at the 15-year mark. A separate study of over 14,000 units confirmed similar numbers. That said, lower-quality units with basic spacer systems showed 3 to 4 times higher failure rates compared to premium units. The spacer bar material, sealant quality, and manufacturing standards all influence how long a sealed unit lasts.</p>

<p><strong>When they fail:</strong> the sealant that bonds the panes together breaks down over time due to UV exposure and thermal cycling (the constant expansion and contraction from temperature changes). Once the seal fails, moisture enters the gap and you see <a href="/foggy-windows">fog or condensation trapped between the panes</a>. The insulating gas escapes and the unit loses much of its thermal performance.</p>

<p><strong>Repair:</strong> a failed sealed unit does not mean you need a new window. In most cases, only the glass unit itself needs replacing. The frame stays. Glass is measured first, custom-made to your exact opening dimensions, then installed into the existing frame. This costs a fraction of full window replacement and restores both clarity and insulation. Every sealed unit we install carries a 5-year seal warranty and 2-year workmanship warranty.</p>

<p>Sealed units can incorporate any combination of the glass types above. You can have a sealed unit with one tempered pane and one standard pane, or with Low-E coating on one surface, or with one laminated pane for noise reduction. The sealed unit is the assembly. The panes inside it can be specified to match your needs.</p>

<h2 id="argon-and-gas-fills">Argon and Gas Fills</h2>

<p>The space between the panes in a sealed unit is not just empty air (although air-filled units exist and work fine). Most modern sealed units offer the option of argon gas fill, which provides better insulation than air.</p>

<p><strong>Why argon works:</strong> argon is an inert, non-toxic, colourless, odourless gas that is denser than air. Its thermal conductivity is roughly two-thirds that of air, meaning heat moves through it more slowly. In practical terms, argon gas fill improves a sealed unit's thermal performance by approximately 10 to 15% compared to air. When combined with Low-E coating, the improvement is even more pronounced: a 90% argon fill with Low-E can deliver roughly a 16% insulating improvement over a comparable air-filled unit.</p>

<p><strong>Gap width matters:</strong> the optimal gap between panes for argon fill is approximately 11 to 12 mm. For air-filled units, the optimal gap is slightly wider, around 13 mm. Going too narrow reduces insulation; going too wide allows convection currents to form inside the unit, which also reduces insulation. This is one reason sealed units are engineered to specific tolerances, not simply assembled from whatever glass is on hand.</p>

<p><strong>Does argon leak out?</strong> Yes, slowly. Industry data indicates that argon leaks from a sealed unit at a rate of approximately 1% per year under normal conditions. Once the fill drops below about 80%, the thermal benefit diminishes noticeably. At that point the unit still functions as an air-filled sealed unit, which is perfectly adequate. It just loses the incremental argon advantage.</p>

<p><strong>Important note:</strong> argon gas fill is an upgrade option. It is available when ordering new sealed units and is worth discussing with your glass technician. For south and west-facing windows where energy efficiency matters most, argon plus Low-E is a strong combination. For a small basement window or a rarely used room, the standard air-filled option may be more practical.</p>

<h2 id="obscure-textured-glass">Obscure and Textured Glass</h2>

<p>Obscure glass (also called privacy glass or patterned glass) lets light through while distorting the view. It is used in bathrooms, front door sidelights, and anywhere you want natural light without sacrificing privacy.</p>

<p><strong>Common patterns:</strong></p>

<ul>
  <li><strong>Frosted:</strong> uniform, smooth opacity. The most common choice for bathroom windows.</li>
  <li><strong>Rain:</strong> vertical lines that mimic rain running down the glass. Popular in front door inserts.</li>
  <li><strong>Reed:</strong> vertical ridges that distort the view horizontally. Often used in <a href="/front-door-glass">front door glass panels</a>.</li>
  <li><strong>Glue chip:</strong> a fern-like, organic pattern created by applying animal glue to the glass surface. Used in decorative applications.</li>
  <li><strong>Satin etch:</strong> acid-etched for a smooth, translucent finish. More expensive than sandblasted frosting but more durable and easier to clean.</li>
</ul>

<p>Obscure glass can be tempered or laminated if the location requires safety glazing. It can also be incorporated into sealed units for insulation. When replacing a patterned glass panel, bring a photo of the existing pattern. Your technician can match it or suggest the closest available alternative.</p>

<h2 id="wired-glass">Wired Glass</h2>

<p>Wired glass has a grid of thin metal wire embedded inside it. For decades, it was the standard fire-rated glass used in commercial buildings, schools, and apartment corridors. The wire holds the glass together when it cracks from heat, keeping flames and smoke from passing through the opening for a rated period.</p>

<p><strong>The catch:</strong> wired glass is actually weaker than standard float glass. The wire creates stress points that make it easier to break on impact. It also does not qualify as safety glass despite looking like it should, since it breaks into large, dangerous pieces (with wire attached). Data from Ontario school boards documented over 100 wired glass injury claims between 1987 and 2000, costing millions in settlements. Experts have estimated roughly one wired glass injury per day in Canadian schools during the period when it was still widely installed. That track record is why wired glass has been losing its safety designation in Canadian building codes.</p>

<p><strong>What is replacing it:</strong> modern fire-rated ceramic glass and fire-rated tempered glass products provide the same fire resistance without the safety drawbacks. These products meet both fire ratings and impact safety requirements. If you have wired glass in your building and need a replacement, ask about modern fire-rated alternatives. For <a href="/commercial-glass-repair">commercial glass repairs</a>, we can source the correct fire-rated replacement that meets both code requirements.</p>

<h2 id="energy-star-windows-canada">Energy Star Windows in Canada</h2>

<p>When shopping for replacement windows or sealed units, you will encounter the Energy Star label. In Canada, the Energy Star program for fenestration (windows, doors, and skylights) is administered by Natural Resources Canada (NRCan).</p>

<p>Canadian Energy Star windows are evaluated using two metrics: U-factor (how much heat passes through the window, lower is better) and Energy Rating (ER), which is a composite score that accounts for heat gain from sunlight, heat loss through the glass, and air leakage. A higher ER number means a more efficient window overall.</p>

<p>Canada is divided into three climate zones for Energy Star purposes, with Zone 1 being the warmest (southern British Columbia, parts of southern Ontario) and Zone 3 being the coldest (northern Canada). The Greater Toronto Area falls in Zone 2 for most Energy Star purposes, with current qualifying thresholds around U-factor 0.21 W/m²·K or ER 34 for the highest tier.</p>

<p>What does this mean for glass replacement? When you replace just the sealed unit (not the full window), the glass specifications, including whether it has Low-E coating and what type of gas fill, determine the thermal performance of that unit. While you cannot slap an Energy Star label on a replacement sealed unit the same way you can on a whole window, you can achieve equivalent glass performance by specifying the right combination of Low-E coating, argon fill, and spacer type. Your glass technician can recommend the configuration that makes sense for your specific situation and budget.</p>

<h2 id="how-to-identify-your-glass">How to Identify What You Have</h2>

<p>You do not need to be a glass expert to figure out what is in your windows. Here are a few ways to check:</p>

<ul>
  <li><strong>Look for etch marks:</strong> tempered glass almost always has a small stamp or etch in one corner that says "tempered," "safety," or shows a certification mark (look for CSA or ANSI Z97.1). It is subtle, so check all four corners.</li>
  <li><strong>Check the edge:</strong> if you can see the glass edge (in a door panel or frameless shower, for example), tempered glass has smooth, polished edges. Float glass edges look green and may have a sharper profile.</li>
  <li><strong>Count the panes:</strong> look at your window from an angle and count the reflections of a flame (a lighter or candle works). Two reflections means single pane. Four reflections means double pane (sealed unit). Six reflections means triple pane.</li>
  <li><strong>Look for the spacer bar:</strong> sealed units have a visible metallic or black spacer running around the perimeter between the panes. If you see it, you have an insulated glass unit.</li>
  <li><strong>Feel for texture:</strong> run your hand over both sides of the glass. If one side is smooth and the other is textured, you have obscure or patterned glass.</li>
  <li><strong>Check for Low-E:</strong> hold a flame near the glass and look at the reflections. Standard glass shows the same colour for all reflections. Low-E coated glass shows one reflection with a slightly different colour (often pinkish or purplish) because the coating reflects differently.</li>
  <li><strong>Check for lamination:</strong> if you can see the edge of the glass (in a door insert, for example), laminated glass shows a thin, slightly visible interlayer between two sheets. It may also feel very slightly thicker and heavier than a single pane of the same size.</li>
</ul>

<h2 id="what-to-ask-for-when-replacing">What to Ask for When Replacing Glass</h2>

<p>When you call for a <a href="/glass-replacement">glass replacement</a>, your technician will assess the situation and recommend the right glass type. But it helps to know the basics so you can ask informed questions:</p>

<ol>
  <li><strong>Is this a safety glass location?</strong> If the window is near a door, staircase, or close to the floor, it needs tempered or laminated glass. Do not accept standard float glass in these spots. See our <a href="/blog/safety-glass-ontario-building-code">safety glass guide</a> for the full list.</li>
  <li><strong>Do I need Low-E coating?</strong> For south and west-facing windows, Low-E can reduce the centre-of-glass U-value by roughly 30%. For north-facing windows or windows that get very little direct sun, the benefit may not justify the cost. Ask your technician for their recommendation based on your specific window orientation.</li>
  <li><strong>Would laminated glass help with noise?</strong> If traffic or airport noise is a concern, laminated sealed units can boost the STC rating by 7 or more points compared to standard glass, roughly halving the perceived sound level. Ask about acoustic-grade PVB for even better results.</li>
  <li><strong>Should I add argon gas fill?</strong> Argon improves thermal performance by 10 to 15%, and the benefit compounds with Low-E coating. It is available as an option when ordering new sealed units. Discuss with your technician whether it makes sense for your situation.</li>
  <li><strong>What spacer type does the sealed unit use?</strong> Warm-edge spacers (made from materials like stainless steel or structural foam rather than aluminium) reduce heat loss at the edge of the glass and improve condensation resistance. If you are investing in Low-E and argon, a warm-edge spacer completes the package.</li>
  <li><strong>Can you match my existing glass?</strong> For patterned or obscure glass, bring a photo. For tinted glass, note the colour. A good technician can match or recommend the closest option from current suppliers.</li>
</ol>

<p>The right glass depends on the location, orientation, and function of each window. There is no single "best" option for every situation.</p>

<h2 id="get-a-quote">Get a Quote</h2>

<p>If you are not sure what type of glass your windows have, or which type you need for a replacement, we can help. LuminaSky Glass Services handles all types of residential glass across Toronto, Vaughan, Richmond Hill, Markham, Mississauga, and the wider GTA. Glass is measured first, custom-made to your exact specifications, then installed. Every sealed unit we install carries a 5-year seal warranty and 2-year workmanship warranty.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or visit our <a href="/contact">contact page</a> to get a written quote on the spot. We are available 24/7. Family-Owned Since 2024. 76 5-Star Google Reviews.</p>
`,
  },
  {
    slug: "home-insurance-broken-window-ontario",
    coverImage: "/images/services/foggy-window-real.webp",
    title: "Does Home Insurance Cover a Broken Window in Ontario?",
    metaTitle: "Does Home Insurance Cover Broken Windows in Ontario?",
    metaDescription:
      "Learn when Ontario home insurance covers broken window glass, what is excluded, how deductibles work, the claims process step by step, and when paying out of pocket is smarter.",
    excerpt:
      "A rock from the lawnmower, a tree branch in a storm, or a break-in overnight. When window glass breaks suddenly, most Ontario homeowners wonder if insurance will cover the repair. The answer depends on what caused the damage, what type of policy you have, and whether the math makes filing a claim worthwhile. This guide walks through it all with real Ontario data.",
    publishedAt: "2026-11-16",
    author: "Dan",
    readingTime: 14,
    tags: ["home insurance", "broken window", "ontario", "glass repair", "claims", "deductible", "storm damage", "condo glass"],
    sections: [
      { id: "the-short-answer", title: "The Short Answer" },
      { id: "how-ontario-home-insurance-works", title: "How Ontario Home Insurance Works for Glass" },
      { id: "policy-types-explained", title: "Ontario Home Insurance Policy Types Explained" },
      { id: "what-insurance-covers", title: "What Home Insurance Typically Covers" },
      { id: "weather-claims-ontario", title: "Storm and Weather Damage in Ontario" },
      { id: "water-damage-and-glass", title: "Water Damage, Glass, and the 48 Percent Problem" },
      { id: "what-insurance-does-not-cover", title: "What Insurance Does Not Cover" },
      { id: "deductible-math", title: "The Deductible Math" },
      { id: "filing-vs-paying-out-of-pocket", title: "Filing vs. Paying Out of Pocket" },
      { id: "claims-process-step-by-step", title: "The Claims Process Step by Step" },
      { id: "how-to-document-the-damage", title: "How to Document the Damage" },
      { id: "will-a-claim-raise-your-premiums", title: "Will a Claim Raise Your Premiums?" },
      { id: "protecting-your-premiums", title: "How to Protect Your Premiums Long Term" },
      { id: "condos-who-pays", title: "Condos: Who Pays for the Glass?" },
      { id: "glass-types-and-code", title: "Glass Types and Building Code Considerations" },
      { id: "what-we-provide-for-your-claim", title: "What We Provide for Your Claim" },
      { id: "next-steps", title: "Next Steps" },
    ],
    content: `
<p>A rock from the lawnmower, a tree branch in a storm, or a break-in overnight. When window glass breaks suddenly, most Ontario homeowners wonder the same thing: will my insurance cover this?</p>

<p>With Ontario home insurance premiums averaging between $1,565 and $2,235 per year (varying by region, coverage level, and claims history), the question is worth asking carefully. You are paying for coverage, and you should know exactly when you can use it, when you should use it, and when paying out of pocket is the smarter financial move.</p>

<p>This guide covers everything an Ontario homeowner needs to know about glass damage and insurance: policy types, what is covered and what is not, the deductible calculation, storm damage trends backed by Insurance Bureau of Canada (IBC) data, condo-specific rules under the Ontario Condominium Act, the full claims process, and strategies for keeping your premiums under control.</p>

<h2 id="the-short-answer">The Short Answer</h2>

<p>Ontario home insurance covers broken window glass when the damage was caused by a sudden, accidental event. It does not cover gradual wear, aging seals, or maintenance issues like <a href="/foggy-windows">condensation between panes</a>.</p>

<p>The distinction comes down to one question: was the damage sudden and unexpected, or did it develop over time? A tree branch through the window during an ice storm is covered. Foggy glass from a seal that failed over five years is not.</p>

<p>But even when the damage is covered, filing a claim is not always the right move. A single property claim can add roughly $386 per year to your premium, an increase of about 19 to 20 percent that typically stays on your record for three to five years. For a single broken window, the deductible alone may exceed the repair cost. The sections below help you run the numbers and decide.</p>

<h2 id="how-ontario-home-insurance-works">How Ontario Home Insurance Works for Glass</h2>

<p>Home insurance in Ontario is regulated provincially but sold by private insurers. Every standard homeowner policy includes "dwelling" coverage, which protects the physical structure of your home. Windows, including the glass, frame, and sealed unit, are part of the dwelling. When a covered peril damages your window glass, the dwelling portion of your policy pays for the repair or replacement, minus your deductible.</p>

<p>The key word in that sentence is "covered peril." Not every type of damage qualifies. Ontario policies are built around one of three coverage forms, and each form defines which perils (causes of damage) trigger a payout. Understanding which form you hold is the first step.</p>

<p>Your policy also includes "contents" coverage (your belongings inside the home) and "liability" coverage (if someone is injured on your property). Glass damage falls under dwelling coverage, so contents and liability limits are not relevant here. The deductible that applies is your dwelling deductible, which is printed on your declarations page.</p>

<p>One common point of confusion: your policy covers the cost to restore the glass to its pre-loss condition, not to upgrade it. If you had a standard double-pane sealed unit and want to upgrade to triple-pane or add a Low-E coating during the repair, the insurer pays only for the equivalent replacement. The upgrade cost is yours.</p>

<h2 id="policy-types-explained">Ontario Home Insurance Policy Types Explained</h2>

<p>Not all home insurance policies offer the same level of protection. In Ontario, residential property policies generally fall into three categories, and the type you hold determines which causes of glass damage are covered.</p>

<h3>Comprehensive (All-Risk)</h3>

<p>This is the broadest and most expensive type. It covers your dwelling and your contents against all risks except those specifically excluded in the policy wording. If a cause of damage is not listed as an exclusion, it is covered. Most newer homeowner policies in Ontario are comprehensive.</p>

<p>For glass damage, comprehensive coverage is the most forgiving. A stray baseball, a neighbour's tree limb, a bird strike, accidental impact from inside the house: all covered unless the policy explicitly excludes the cause. The exclusions you need to watch for are wear and tear, gradual deterioration, faulty workmanship, and intentional damage by the policyholder.</p>

<h3>Broad Form</h3>

<p>A middle-ground policy. Your dwelling (including windows, walls, and the structure itself) gets all-risk coverage, but your contents are covered only under named perils. This means the glass in your window is likely covered the same way it would be under a comprehensive policy, but items damaged inside the house may not be.</p>

<p>For a broken window specifically, broad form and comprehensive often produce the same result. The difference shows up when both the glass and your belongings are damaged in the same event. Under broad form, the glass repair is covered but the water-damaged hardwood floor beneath a shattered window might not be, depending on the named perils listed for contents.</p>

<h3>Named Perils (Basic)</h3>

<p>The most affordable option, and the most limited. Both your dwelling and contents are covered only for risks specifically listed in the policy. Common named perils include fire, lightning, windstorm, hail, vandalism, theft, and impact by vehicles or aircraft. If the cause of your glass breakage is not on the list, it is not covered.</p>

<p>This matters for glass damage in a few specific ways. A windstorm that drives debris through your window is covered (windstorm is a named peril). But a neighbourhood kid's baseball through the same window might not be, because "accidental impact" may not appear on the list. Read your named perils schedule carefully.</p>

<h3>What All Three Types Exclude</h3>

<p>All three types exclude the same gradual-damage categories: wear and tear, lack of maintenance, and defects in construction or materials. And all three typically require add-on coverage (called endorsements or riders) for sewer backup and overland flooding, which are not included by default.</p>

<p>If you are unsure which type of policy you have, check the declarations page. This is the summary at the front of your policy documents. It will state the form clearly, along with your deductible amounts, coverage limits, and any endorsements you have added.</p>

<h2 id="what-insurance-covers">What Home Insurance Typically Covers</h2>

<p>Across all three policy types, window glass damage from the following causes is generally covered:</p>

<ul>
  <li><strong>Vandalism:</strong> Someone deliberately broke your window. This is one of the most common glass claims filed in Ontario. A police report is required.</li>
  <li><strong>Storm damage:</strong> Wind-blown debris, hail, or ice that cracks or shatters a pane. Ontario's hail season runs primarily from May through October, and the province has seen record-setting storm losses in recent years (details below).</li>
  <li><strong>Break-ins:</strong> Forced entry that damages door glass, sidelites, or window panes. Covered under theft or vandalism perils. A police report is required here as well.</li>
  <li><strong>Falling objects:</strong> A tree branch, a piece of a neighbour's siding, or any object that strikes the glass from outside.</li>
  <li><strong>Accidental impact:</strong> A stray baseball, a rock from the mower, or something falling against the window from inside the house. Covered under comprehensive and broad-form policies. May not be covered under named perils unless "accidental impact" is listed.</li>
  <li><strong>Fire and smoke:</strong> Heat damage that cracks or destroys window glass.</li>
  <li><strong>Weight of ice or snow:</strong> Accumulation that causes structural pressure and cracks a pane, particularly skylights, low-slope windows, and large picture windows.</li>
  <li><strong>Vehicle impact:</strong> A car that leaves the road and strikes your home, or a vehicle in your own driveway that rolls into the structure.</li>
  <li><strong>Explosion:</strong> Rare, but covered. A gas explosion or similar event that shatters glass throughout the home.</li>
</ul>

<p>The common thread is that the damage happened suddenly, from an identifiable event. If you can point to a specific incident that caused the glass to break, your policy will likely cover it. The nature of the break matters too. An impact break (radiating cracks from a central point) tells a clear story. A stress crack with no impact point raises questions about whether the cause was sudden or gradual.</p>

<h2 id="weather-claims-ontario">Storm and Weather Damage in Ontario</h2>

<p>Ontario has experienced a sharp increase in severe weather events over the past decade, and the financial data tells the story clearly. According to the Insurance Bureau of Canada (IBC), insured losses from severe weather across Canada reached a record $8.5 billion in 2024, roughly triple the losses recorded in 2023. Ontario alone accounted for 26.3 percent of all national personal property insured losses between 2008 and 2024.</p>

<p>Some recent events that affected homeowners across the GTA and southern Ontario:</p>

<ul>
  <li><strong>Summer 2024 Ontario floods:</strong> 22,400 claims were filed with an average payout of roughly $39,000, totalling $899 million in insured losses. Many of these claims included window and door damage from wind-driven rain and debris.</li>
  <li><strong>April 2025 Ontario-Quebec ice storm:</strong> $466 million in insured losses, making it Ontario's sixth costliest insured weather event on record. Ice accumulation cracked skylights, shattered single-pane windows, and caused tree limbs to fall through glass across the region.</li>
  <li><strong>Summer 2025 storms:</strong> $439 million in insured damage across Ontario and Quebec from a series of wind and hail events.</li>
</ul>

<p>These events do not just break windows. They rip off siding, topple trees onto roofs, and drive debris through glass at high speed. But for many homeowners, a cracked or shattered window is the most visible and immediate damage. It needs to be addressed before anything else can be repaired, because an open or compromised window exposes the interior to further water damage, temperature swings, and security risks.</p>

<p>When an event is widespread (a hail storm that affects a whole neighbourhood, for example), insurers sometimes process claims differently. Adjusters may be dispatched to assess multiple homes in the same area, and the turnaround on approvals can be faster. Weather-related claims are also sometimes treated more favourably at renewal than claims for isolated incidents like vandalism, because the insurer understands the cause was beyond your control and affected many policyholders at once.</p>

<p>If a severe weather event damages your windows, document the damage immediately and report it to your insurer within 24 hours. Widespread events generate high claim volumes, and early reports are processed sooner. Keep in mind that after major storms, glass repair companies across the GTA experience high demand. Calling early helps you get on the schedule faster. Our <a href="/emergency-glass-repair">emergency glass repair service</a> operates 24/7 for exactly these situations.</p>

<h2 id="water-damage-and-glass">Water Damage, Glass, and the 48 Percent Problem</h2>

<p>Water damage accounts for 48 percent of all home insurance claims in Canada, according to IBC data. While most of those claims involve burst pipes, sewer backup, or overland flooding, broken window glass plays a role more often than people expect.</p>

<p>When a window is shattered by a storm and left open to rain, the water damage to floors, walls, and furnishings can far exceed the cost of the glass itself. Insurers expect you to take "reasonable steps" to prevent further damage after the initial loss. This is called your duty to mitigate. If you leave a broken window open to the elements for days without covering it, the insurer can deny the secondary water damage claim on the grounds that it was preventable.</p>

<p>This is why emergency board-up service matters. Boarding up a broken window the same day it breaks accomplishes two things: it protects your home from further damage, and it demonstrates to the insurer that you met your duty to mitigate. The cost of the board-up is typically reimbursable as part of your claim.</p>

<p>If a broken window has let water into your home, document the water damage separately from the glass damage. Photograph the water line on walls, damaged flooring, and any belongings affected. These are separate line items on your claim and may fall under different coverage sections (dwelling for the glass and structure, contents for your belongings).</p>

<h2 id="what-insurance-does-not-cover">What Insurance Does Not Cover</h2>

<p>Insurers classify the following as "wear and tear" or "lack of maintenance." These are excluded from virtually every standard home insurance policy in Ontario, regardless of which policy type you hold:</p>

<ul>
  <li><strong>Failed window seals:</strong> When the seal between double or triple panes breaks down over time and moisture gets inside. Industry studies have tracked failure rates of roughly 1 percent at 15 years for quality sealed units, rising to around 14 percent by the 25-year mark. This gradual process is a maintenance issue, not an insurable event. For more on the different glass configurations and how they age, see our guide to <a href="/blog/types-of-window-glass-explained">types of window glass explained</a>.</li>
  <li><strong>Condensation between panes:</strong> <a href="/foggy-windows">Foggy windows</a> are caused by gradual seal degradation. No sudden event caused the damage, so no policy covers it. <a href="/blog/exterior-window-condensation-normal">Exterior condensation</a> is a different issue entirely and is not a defect at all.</li>
  <li><strong>Age-related deterioration:</strong> Glass that has become hazy, discoloured, or weakened over decades of UV exposure.</li>
  <li><strong>Poor installation:</strong> If the glass was installed incorrectly and fails as a result, the original installer's warranty (not your home insurance) is the appropriate recourse.</li>
  <li><strong>Settling cracks:</strong> Hairline cracks caused by foundation movement or structural settling over time.</li>
  <li><strong>Thermal stress cracks:</strong> Cracks that develop from extreme temperature differences across the glass surface (one part shaded, one part in direct sun). These are considered a product of normal conditions, not a sudden event. They often appear as a single crack running from the edge of the glass without a visible impact point.</li>
  <li><strong>Intentional damage by the policyholder:</strong> If the homeowner or a household member deliberately broke the glass, there is no coverage.</li>
  <li><strong>Damage during renovations:</strong> If glass breaks during a renovation or construction project, the contractor's insurance (not your homeowner policy) should cover it.</li>
</ul>

<p>If your windows are fogging up between the panes, that is a seal failure. It is fixable, and the repair is more affordable than most people expect. <a href="/glass-replacement">Replacing the glass</a> (the sealed unit only) costs a fraction of a full window replacement because the frame, hardware, and trim all stay in place. Glass is measured first, custom-made to your exact dimensions, then installed in your existing frame.</p>

<h2 id="deductible-math">The Deductible Math</h2>

<p>Before filing a claim, check your policy's deductible. Most Ontario home insurance policies carry a deductible between $500 and $2,500. Some policies apply different deductibles for different types of damage (a higher deductible for water, a separate deductible for earthquake coverage if you have it). Here is why the number matters.</p>

<p>Your insurer only pays the portion of the repair cost that exceeds the deductible. If your deductible is $1,000 and the glass repair costs $800, you pay the full amount yourself and the insurer pays nothing. Filing a claim in that scenario gains you nothing but adds a claim to your record.</p>

<p>Even when the repair cost is above the deductible, the payout may be small. If the repair is $1,400 and your deductible is $1,000, you are filing a claim for $400 of coverage. Meanwhile, that claim can cost you far more at renewal.</p>

<p>Here is the math laid out plainly. A single wind or hail claim adds roughly $386 per year to your premium. Over three years (the minimum period most insurers keep the surcharge active), that is $1,158 in extra premiums. Over five years, it is $1,930. Add the $1,000 deductible you paid, and your total cost for that $1,400 repair is between $2,158 and $2,930, depending on how long the surcharge lasts. You would have been better off paying $1,400 out of pocket.</p>

<p>The break-even point shifts when multiple windows are damaged, when the glass type is expensive (large tempered panels, laminated safety glass, oversized sealed units), or when the damage extends beyond just the glass to include the frame, wall, or interior finishes. For multi-window storm damage, the claim math usually works in your favour.</p>

<h2 id="filing-vs-paying-out-of-pocket">Filing vs. Paying Out of Pocket</h2>

<p>This is the calculation most homeowners skip, and it matters more than the coverage question itself.</p>

<p><strong>The rule of thumb used by many Ontario insurance brokers:</strong> if the repair cost is less than double your deductible, pay out of pocket. File a claim only when the damage is extensive: multiple windows, a large commercial panel, combined damage from a break-in, or a major storm event that also damaged siding, roofing, or interior finishes.</p>

<p>Keep in mind that many Ontario insurers offer a claims-free discount of 20 to 30 percent off your base premium. This discount requires three to five consecutive claims-free years to build. A single small claim resets that clock and costs you the discount for years. On a premium of $1,800, a 25 percent claims-free discount saves you $450 per year. Losing that discount for three years costs $1,350, on top of the premium surcharge from the claim itself.</p>

<p>Statistics Canada data shows that home insurance costs in Ontario climbed 31 percent between 2021 and 2025. With premiums already rising due to increased severe weather losses (the IBC's $8.5 billion in 2024 losses gets spread across all policyholders), protecting your claims-free status is one of the few levers you have to keep your own costs in check.</p>

<p>When you call us for a quote, we give you the numbers you need to make this decision. The written quote shows exactly what the repair will cost. You can then compare that number to your deductible and projected premium increase and decide whether to file or pay out of pocket. Either way, you get the same quality repair and the same warranty.</p>

<h2 id="claims-process-step-by-step">The Claims Process Step by Step</h2>

<p>If you decide to file a claim, here is the process from start to finish:</p>

<ol>
  <li><strong>Report the incident to your insurer.</strong> Call your insurance company or broker as soon as possible, ideally within 24 hours. Most policies require "prompt notification." You will be assigned a claim number. Reporting is not the same as filing a formal claim. You can report an incident and decide later whether to proceed.</li>
  <li><strong>An adjuster is assigned.</strong> For a straightforward glass claim, the adjuster may handle everything by phone or email. For larger losses (multiple windows, combined damage), they may visit your property. After major weather events, adjusters are often dispatched to affected neighbourhoods.</li>
  <li><strong>Provide documentation.</strong> The adjuster will ask for photos, a police report (if applicable), and a repair quote. See the documentation section below for what to prepare.</li>
  <li><strong>The adjuster reviews and approves.</strong> They verify that the damage falls under a covered peril, check your deductible, and confirm the repair cost is reasonable. For glass repairs, this step is usually straightforward if you have clear photos and an itemized quote.</li>
  <li><strong>Choose your repair company.</strong> In Ontario, you have the right to choose your own contractor. Your insurer may suggest a "preferred vendor," but you are not required to use one. You can use any licensed, insured glass repair company.</li>
  <li><strong>Get the repair done.</strong> Schedule the repair and have the work completed. Keep all receipts and invoices.</li>
  <li><strong>Submit the invoice for reimbursement.</strong> Your insurer pays the approved amount minus your deductible. Some insurers pay the contractor directly if arrangements are made in advance. Most reimburse the homeowner after the work is complete.</li>
</ol>

<p>The timeline from report to reimbursement is typically two to four weeks for a simple glass claim. Complex claims with multiple damage types take longer. After major weather events, the volume of claims can extend timelines to six weeks or more.</p>

<h2 id="how-to-document-the-damage">How to Document the Damage</h2>

<p>If the damage is significant enough to file a claim, proper documentation makes the process faster and reduces the chance of a dispute. Here is what to do immediately after the damage occurs:</p>

<ol>
  <li><strong>Photograph everything before cleanup.</strong> Take wide shots showing the full window and surrounding area, plus close-ups of the broken glass, the frame, and any damage to the wall or floor. Include photos from both inside and outside. Photograph the cause too: the tree branch, the hailstones, the pry marks from a break-in. Use your phone's timestamp feature or take a screenshot of the date and time alongside the photos.</li>
  <li><strong>Keep broken glass pieces if safe to do so.</strong> Some adjusters want to see the type of glass and the nature of the break (impact point, crack pattern). If you need to clean up for safety, photograph the pieces first with a ruler or coin for scale.</li>
  <li><strong>File a police report for vandalism or break-ins.</strong> Your insurer will almost certainly require a police report number for any claim involving criminal damage. Call your local police non-emergency line or file online through your municipal police service. In Toronto, non-emergency reports can be filed at torontopolice.on.ca. Keep the report number and a copy of the report for your claim file.</li>
  <li><strong>Contact your insurer within 24 hours.</strong> Most policies require prompt notification. Even if you are not sure whether you will file a claim, report the incident. You can decide later whether to proceed with a formal claim. Reporting is not the same as filing.</li>
  <li><strong>Get a written repair quote.</strong> Your insurer will want an itemized quote showing what needs to be replaced, the type of glass (<a href="/blog/safety-glass-ontario-building-code">tempered, laminated</a>, Low-E, standard sealed unit), the dimensions, and the cost. We provide this on every job.</li>
  <li><strong>Secure the opening immediately.</strong> If the glass is broken and the opening is exposed, board it up or cover it with plywood. Insurers expect you to take reasonable steps to prevent further damage from rain, theft, or animals. Failing to secure the opening can jeopardize your claim, because the insurer can argue that the secondary damage (water on the floor, stolen items) was preventable.</li>
  <li><strong>Save receipts for temporary repairs.</strong> If you pay for emergency boarding or tarping, keep the receipt. These costs are typically reimbursable as part of your claim because they fall under your duty to mitigate further loss.</li>
  <li><strong>Do not dispose of damaged materials until the adjuster approves.</strong> Some adjusters want to inspect the damage in person or may request that you retain certain items (the broken sealed unit, the damaged frame section) until the claim is closed.</li>
</ol>

<h2 id="will-a-claim-raise-your-premiums">Will a Claim Raise Your Premiums?</h2>

<p>In most cases, yes. Ontario home insurance premiums are risk-priced, and filing a claim signals higher risk to your insurer. Here is what the data shows:</p>

<ul>
  <li><strong>Single claim impact:</strong> A single wind or hail damage claim adds an estimated $386 per year to Ontario premiums, roughly a 19 to 20 percent increase. Water damage claims add approximately $376 per year. These surcharges remain on your record for three to five years, depending on the insurer.</li>
  <li><strong>First claim forgiveness:</strong> Some insurers offer "first claim forgiveness" that absorbs one claim without a premium increase. Check if your policy includes this. If it does, it may make sense to use it strategically for a larger loss rather than a small glass repair.</li>
  <li><strong>Claims frequency:</strong> Two or more claims within three to five years can lead to significant premium increases, surcharges, or non-renewal. Some Ontario insurers will not renew a policy after three claims within five years.</li>
  <li><strong>Claim type matters:</strong> Weather-related claims that affect many policyholders in the same area are sometimes treated more favourably than isolated incidents like vandalism or accidental damage. Insurers recognize that widespread events are not a reflection of the individual homeowner's risk profile.</li>
  <li><strong>Claims-free discount:</strong> Ontario insurers commonly offer 20 to 30 percent off for a clean claims record. This discount builds over three to five claims-free years. A single claim resets the clock and eliminates the discount until you rebuild your claims-free streak.</li>
</ul>

<p>Speak with your insurance broker before filing. A good broker will run the numbers with you: what is the payout after the deductible, how much will your premium increase, and how long will that increase last. The answer often points to paying out of pocket for single-window repairs and reserving your claims record for major events.</p>

<h2 id="protecting-your-premiums">How to Protect Your Premiums Long Term</h2>

<p>Ontario homeowners are facing steady premium increases driven by rising severe weather losses across the country. The IBC's 2024 data ($8.5 billion in insured losses nationally) shows that this trend is not slowing down. Here are practical steps to keep your own premiums as low as possible:</p>

<ul>
  <li><strong>Maintain your claims-free discount.</strong> This is the single most valuable premium reduction available to you. A claims-free discount of 20 to 30 percent on a $2,000 annual premium saves $400 to $600 per year. Protect it by paying out of pocket for small repairs.</li>
  <li><strong>Increase your deductible.</strong> Raising your deductible from $500 to $1,000 or $2,000 lowers your annual premium. It also eliminates the temptation to file small claims that would cost you more in surcharges than you would recover.</li>
  <li><strong>Bundle your policies.</strong> Most Ontario insurers offer a discount for bundling home and auto insurance. The savings typically range from 5 to 15 percent.</li>
  <li><strong>Install protective features.</strong> Monitored alarm systems, water leak detectors, and deadbolt locks can qualify you for additional discounts. Some insurers also offer discounts for impact-resistant windows or storm shutters.</li>
  <li><strong>Review your policy annually.</strong> Coverage needs change as your home ages and as your belongings change in value. An annual review with your broker ensures you are not over-insured (paying for coverage you do not need) or under-insured (exposed to a gap).</li>
  <li><strong>Shop around at renewal.</strong> Ontario's insurance market is competitive. Getting quotes from two or three insurers at renewal keeps your current insurer honest on pricing and may reveal better rates elsewhere.</li>
</ul>

<p>The goal is to treat insurance as protection against catastrophic loss, not as a maintenance fund. Small glass repairs are maintenance. A tree through three windows during an ice storm is catastrophic. File claims for the second category and pay for the first.</p>

<h2 id="condos-who-pays">Condos: Who Pays for the Glass?</h2>

<p>If you live in a condominium, the question of who pays for broken window glass is more complicated than it is for a detached home. The answer depends on your condo corporation's declaration and standard unit bylaw.</p>

<p>Under the Ontario Condominium Act, Section 89(1), the corporation is obligated to repair the units and common elements after damage. However, Section 89(2) allows corporations to pass certain deductibles and repair costs back to unit owners, particularly for damage to improvements or for losses that the corporation's policy does not cover.</p>

<p>In practice, the responsibility depends on how your condo classifies window components:</p>

<ul>
  <li><strong>Corporation responsibility:</strong> In many Ontario condos, the glass in exterior windows is the corporation's responsibility because it is part of the building envelope and the common elements. The corporation's master insurance policy covers the repair, subject to the corporation's deductible.</li>
  <li><strong>Unit owner responsibility:</strong> In other condos, the unit owner is responsible for the glass while the corporation handles the frame. Some condos assign all window components to the unit owner.</li>
  <li><strong>Deductible chargebacks:</strong> Even when the corporation's insurance covers the glass, Section 89(2) of the Condominium Act allows the corporation to charge back the deductible to the unit owner whose unit sustained the damage. Corporation deductibles can run from $5,000 to $50,000 or more, which means you could face a significant bill even though the corporation's policy technically covers the loss.</li>
</ul>

<p>The key document is the standard unit bylaw. If your condo corporation has not passed a standard unit bylaw, the default rule under the Act makes the corporation responsible for repairing everything in the unit except the owner's contents and improvements.</p>

<p>As a condo owner, your personal condo insurance policy (often called an HO-6 or unit owner policy) should include "loss assessment" coverage. This covers your share of the corporation's deductible when it is charged back to you. It should also include "improvements and betterments" coverage for any upgrades you have made to the unit, including upgraded windows.</p>

<p>Before paying for a repair yourself or filing a claim on your personal condo insurance, check with your property manager or review your declaration and standard unit bylaw. Getting this wrong can mean paying for something the corporation should have covered, or vice versa.</p>

<h2 id="glass-types-and-code">Glass Types and Building Code Considerations</h2>

<p>When a window breaks and you file an insurance claim, the replacement glass must meet Ontario Building Code requirements for the specific location. This is not optional, and it can affect the cost of the repair.</p>

<p>The Ontario Building Code requires <a href="/blog/safety-glass-ontario-building-code">safety glass</a> (tempered or laminated) in several locations throughout a home:</p>

<ul>
  <li>Glass in doors and sidelites</li>
  <li>Glass within 500 mm of a door</li>
  <li>Glass panels adjacent to stairs, ramps, and landings</li>
  <li>Bathroom glass (shower enclosures, glass near tubs)</li>
  <li>Glass at or below 450 mm from the floor (low panels that someone could walk into or fall against)</li>
</ul>

<p>If the broken window is in a code-required safety glass location, the replacement must be tempered or laminated glass, even if the original pane was standard annealed glass. This is relevant for insurance claims because safety glass costs more than standard glass. Your repair quote should specify the glass type and reference the code requirement. Adjusters approve safety glass upgrades when code compliance demands it.</p>

<p>For a full breakdown of where safety glass is required and how to identify what you currently have, read our guide: <a href="/blog/safety-glass-ontario-building-code">Where Ontario Building Code Requires Safety Glass in Your Home</a>.</p>

<p>Different <a href="/blog/types-of-window-glass-explained">types of window glass</a> also have different replacement timelines. Standard sealed units are typically available within a few business days. Tempered glass and laminated glass require custom fabrication and may take one to two weeks. Oversized panels, decorative glass, and specialty coatings can take longer. If your broken window is in a location that requires safety glass, plan for the longer lead time and use a temporary board-up in the meantime.</p>

<h2 id="what-we-provide-for-your-claim">What We Provide for Your Claim</h2>

<p>Whether you are filing an insurance claim or paying out of pocket, here is what LuminaSky Glass Services provides:</p>

<ul>
  <li><strong>Emergency board-up service:</strong> We secure broken windows and doors 24/7 across Toronto and the GTA. If your glass breaks overnight or during a storm, call <a href="tel:+14373448490">437-344-8490</a> and we will board up the opening to protect your home while you arrange the permanent repair. <a href="/emergency-glass-repair">Learn more about our emergency service.</a></li>
  <li><strong>Written quote on the spot:</strong> We provide a detailed, itemized quote that you can submit directly to your insurance company. It includes the glass type, dimensions, and a breakdown of materials and labour. Adjusters process itemized quotes faster than vague estimates.</li>
  <li><strong>Documentation support:</strong> We photograph the damage during our assessment and can provide before-and-after photos for your claim file. If your adjuster needs additional documentation (glass type verification, code compliance notes, measurement details), we provide it.</li>
  <li><strong>Direct billing guidance:</strong> While we do not bill insurers directly, we format our quotes and invoices to include the information adjusters need: glass specifications, the reason for the specific glass type (safety glass in code-required locations, for example), and a clear cost breakdown. This speeds up reimbursement.</li>
  <li><strong>Code-compliant replacement:</strong> Every replacement we install meets current Ontario Building Code requirements. If the broken pane was in a safety glass location, we install the correct tempered or laminated glass and note the code reference on your invoice so the adjuster can see why the specific glass type was required.</li>
</ul>

<p>Glass is measured first, custom-made to fit your exact opening, then installed. Every sealed unit we install carries a 5-year seal warranty and 2-year workmanship warranty. Hardware repairs carry a 1-year warranty. These warranties cover manufacturing defects and workmanship, not vandalism, impact damage, or physical breakage.</p>

<h2 id="next-steps">Next Steps</h2>

<p>If your window glass is broken right now, here is the priority order:</p>

<ol>
  <li>Photograph the damage before touching anything. Inside, outside, and the cause if visible.</li>
  <li>If the opening is exposed, call us at <a href="tel:+14373448490">437-344-8490</a> for an emergency board-up. We are available 24/7.</li>
  <li>File a police report if vandalism or a break-in was involved.</li>
  <li>Check your deductible amount and run the math before deciding to file a claim. If the repair cost is less than double your deductible, paying out of pocket is almost always the better financial decision.</li>
  <li>Call your insurance broker to discuss whether filing makes sense for your situation. Ask about first claim forgiveness and your current claims-free discount.</li>
  <li><a href="/contact">Contact us for a written quote on the spot.</a> Whether you file a claim or pay out of pocket, you will have an itemized quote your insurer can process. See our <a href="/insurance-claims">insurance claims page</a> for details on how we support the process.</li>
</ol>

<p>If your windows are not broken but are foggy, hazy, or showing condensation between the panes, that is a seal failure, not an insurance matter. Visit our <a href="/foggy-windows">foggy window repair page</a> or our guide to <a href="/blog/exterior-window-condensation-normal">exterior window condensation</a> to learn what is happening and how we fix it.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or email <a href="mailto:service@luminasky.com">service@luminasky.com</a>. LuminaSky Glass Services handles residential and <a href="/commercial-glass-repair">commercial glass repairs</a> across Toronto, Vaughan, Richmond Hill, Markham, Mississauga, and the wider GTA. Available 24/7. Family-Owned Since 2024. 76 5-Star Google Reviews.</p>
`,
  },
  {
    slug: "safety-glass-ontario-building-code",
    coverImage: "/images/services/window-replacement-service.webp",
    title: "Safety Glass Requirements Under the Ontario Building Code",
    metaTitle: "Safety Glass Requirements: Ontario Building Code Guide",
    metaDescription:
      "Complete guide to Ontario Building Code safety glass requirements. Covers OBC Sections 9.6 and 9.8, tempered vs laminated glass, NiS spontaneous breakage, condo balcony incidents, and what homeowners need to know for replacements.",
    excerpt:
      "The Ontario Building Code mandates tempered or laminated safety glass in dozens of locations throughout your home, from door sidelights to balcony railings. This guide covers every OBC section that applies, the century-old science behind each glass type, the Toronto balcony incidents that changed the code, and what it all means when you need a replacement.",
    publishedAt: "2026-11-16",
    author: "Dan",
    readingTime: 14,
    tags: ["safety glass", "building code", "ontario", "tempered glass", "laminated glass", "homeowner guide", "OBC", "NiS inclusions", "balcony glass", "wired glass"],
    sections: [
      { id: "what-is-safety-glass", title: "What Is Safety Glass?" },
      { id: "obc-scope", title: "OBC Scope: Which Sections Apply" },
      { id: "history-of-safety-glass", title: "The History of Safety Glass" },
      { id: "tempered-glass-in-detail", title: "Tempered Glass in Detail" },
      { id: "laminated-glass-in-detail", title: "Laminated Glass in Detail" },
      { id: "heat-strengthened-glass", title: "Heat-Strengthened Glass: The Third Option" },
      { id: "near-doors", title: "Glass Near Doors" },
      { id: "near-floors", title: "Glass Near the Floor" },
      { id: "stairs-ramps-landings", title: "Near Stairs, Ramps, and Landings" },
      { id: "bathrooms", title: "Bathrooms: Showers and Bathtub Enclosures" },
      { id: "glass-guards-railings", title: "Glass Guards and Railings" },
      { id: "nickel-sulfide-spontaneous-breakage", title: "Nickel Sulfide Inclusions and Spontaneous Breakage" },
      { id: "toronto-balcony-incidents", title: "The Toronto Balcony Glass Incidents" },
      { id: "wired-glass-phase-out", title: "Wired Glass: Why It Is Being Phased Out" },
      { id: "window-fall-prevention", title: "Window Fall Prevention (Recent OBC Updates)" },
      { id: "sealed-unit-longevity", title: "Sealed Unit Longevity and Safety Glass" },
      { id: "how-to-verify-safety-glass", title: "How to Verify If Your Glass Is Safety Glass" },
      { id: "replacing-glass-safety-locations", title: "Replacing Glass in Safety-Critical Locations" },
      { id: "insurance-and-code-compliance", title: "Insurance and Code Compliance" },
      { id: "get-a-quote", title: "Get a Quote" },
    ],
    content: `
<p>Not all glass in your home is the same. Standard annealed glass, the kind used in most older windows, breaks into large jagged shards capable of causing deep lacerations. Safety glass is engineered to break differently: either into small, blunt granules (tempered) or to stay held together by a tough plastic interlayer (laminated). The Ontario Building Code (OBC) requires safety glass in specific locations throughout residential and commercial buildings where the risk of someone falling into, through, or against a pane is highest.</p>

<p>The science behind safety glass stretches back more than 350 years, and the regulations governing its use in Ontario have been shaped by real incidents, including a wave of spontaneous balcony glass failures across Toronto high-rises that led to 16 building orders in a single year. This guide covers the full picture: the history, the specific OBC sections, every location where safety glass is mandatory, the differences between tempered, laminated, and heat-strengthened glass with real performance data, the nickel sulfide problem, the wired glass injuries that cost Ontario schools millions, and what all of it means when you need a <a href="/glass-replacement">glass replacement</a>.</p>

<h2 id="what-is-safety-glass">What Is Safety Glass?</h2>

<p>Safety glass is any glass product designed to reduce the risk of serious injury when it breaks. The Ontario Building Code, specifically Article 9.6.1.4, requires safety glazing in locations it designates as "hazardous." Safety glazing in Canada must comply with CAN/CGSB-12.1, the national standard for safety glass tested against human impact. The standard assigns two impact classes: Class A (higher impact resistance, tested with a larger drop height) and Class B (standard impact resistance). Both classes must break in a way that minimises the risk of serious laceration.</p>

<p>The OBC recognises two main types of safety glazing for residential use:</p>

<ul>
  <li><strong>Tempered glass:</strong> Heated to roughly 650 degrees Celsius during manufacturing and then rapidly cooled with jets of air, a process called quenching. This creates high compression on the outer surfaces and tension in the interior, making the glass 4 to 5 times stronger than regular annealed glass of the same thickness. Under ASTM C1048 (the standard specification for heat-treated flat glass), fully tempered glass must achieve a minimum surface compression of 10,000 psi. When it does break, it shatters into small, roughly cube-shaped pieces with blunt edges instead of dangerous shards.</li>
  <li><strong>Laminated glass:</strong> Two or more panes of glass bonded together with a polyvinyl butyral (PVB) interlayer, typically 0.76mm thick for residential applications. When laminated glass breaks, the fragments stick to the interlayer and the pane holds its shape. This makes it excellent for security, noise reduction, and overhead applications where falling glass would be dangerous.</li>
</ul>

<p>The difference in breakage behaviour is dramatic. Under the same load, annealed glass fails at a rate of roughly 47 per thousand panels. Tempered glass of the same thickness and size fails at approximately 1 per million panels. That gap in performance is why the building code mandates tempered or laminated glass anywhere someone might collide with a pane.</p>

<h2 id="obc-scope">OBC Scope: Which Sections Apply</h2>

<p>Several sections of the Ontario Building Code work together to govern safety glass requirements in residential and low-rise construction. Understanding which section applies helps you know what your installer should be referencing when they specify glass for your project.</p>

<p><strong>Section 9.6.1.1 (Scope):</strong> This section establishes that Part 9 glazing requirements apply to all residential and small building construction covered by Part 9 of the OBC. That includes most single-family homes, townhouses, duplexes, and small apartment buildings up to three storeys and 600 square metres in building area.</p>

<p><strong>Article 9.6.1.4 (Safety Glazing):</strong> This is the core article. It lists every "hazardous location" where safety glazing is required, including glass near doors, glass near floors, glass adjacent to stairs and ramps, glass in bathrooms, and glass in other locations where human impact is foreseeable. Each hazardous location has specific measurement criteria that determine whether a given pane falls within the requirement.</p>

<p><strong>Article 9.8.8.1 (Guards):</strong> This article governs guards, including glass guards and railings on balconies, mezzanines, and elevated walkways. The guard requirements intersect with the glazing requirements because glass used as a structural guard must meet both the structural load requirements of Part 4 and the safety glazing requirements of Section 9.6. This is the article that was amended after the Toronto balcony incidents.</p>

<p>The 2024 Ontario Building Code (O.Reg. 163/24), effective January 1, 2025, is the current edition. It incorporates all the post-Toronto amendments for glass guards and adds new window fall prevention requirements. If you are doing any glass work in Ontario, this is the code edition that applies.</p>

<h2 id="history-of-safety-glass">The History of Safety Glass</h2>

<p>The science behind safety glass is older than most people realise, and both tempered and laminated glass have origin stories rooted in accidental discovery.</p>

<h3>Prince Rupert's Drops and the Birth of Tempering</h3>

<p>The underlying principle of tempered glass was observed as far back as 1661 with the study of "Prince Rupert's drops." These are tadpole-shaped glass droplets formed by dripping molten glass into cold water. The rapid cooling creates extreme compression on the outer surface and tension in the interior. The bulbous end of a Prince Rupert's drop can withstand a hammer blow, but snapping the thin tail releases all that stored energy at once and the entire drop explodes into powder. This is the same principle at work in modern tempered glass: controlled surface compression creates strength, but once the tension zone is breached, the glass disintegrates completely.</p>

<p>Scientists studied Prince Rupert's drops for centuries, but commercial glass tempering did not arrive until 1935, when the first patent for the modern tempering process was filed. The technology required precise control of heating and quenching that was not practical at an industrial scale until the mid-twentieth century. By the 1950s and 1960s, tempered glass was standard in automotive side windows and was making its way into building codes.</p>

<h3>The Flask That Started Laminated Glass</h3>

<p>Laminated glass has a more colourful origin. In 1903, French chemist Edouard Benedictus accidentally knocked a glass flask off a shelf in his laboratory. The flask cracked but held its shape instead of scattering fragments across the floor. The reason: a thin film of cellulose nitrate had dried inside the flask after a previous experiment, bonding the glass fragments to it like glue. Benedictus recognised the safety potential immediately. He filed a patent in 1909 and introduced "Triplex" branded laminated glass in 1910, initially using a gelatin interlayer between two sheets of glass.</p>

<p>The first major commercial application came during World War I, when laminated glass was used in gas mask eyepieces to prevent fragments from injuring soldiers' eyes after an explosion. Automotive manufacturers adopted it for windshields in the 1920s. By 1936, American manufacturers had switched from gelatin to polyvinyl butyral (PVB), the same interlayer material used in laminated glass today. It is also the reason your car windshield spider-webs on impact instead of sending shards into the cabin.</p>

<p>For a broader overview of every glass type used in residential windows, including float, tempered, laminated, Low-E coatings, and sealed units, see our companion guide: <a href="/blog/types-of-window-glass-explained">Types of Window Glass Explained</a>.</p>

<h2 id="tempered-glass-in-detail">Tempered Glass in Detail</h2>

<p>Tempered glass is produced by heating annealed glass to approximately 650 degrees Celsius and then rapidly cooling it with high-pressure air jets directed at both surfaces. This process, called quenching, locks the outer surfaces into compression while the interior remains in tension. The result is a pane that is 4 to 5 times stronger than annealed glass of the same thickness.</p>

<p>Under ASTM C1048 (Standard Specification for Heat-Treated Flat Glass), fully tempered glass must achieve a minimum surface compression of 10,000 psi (69 MPa). This high compression is what gives tempered glass its characteristic breakage pattern: when the tension zone is breached at any point, the entire pane disintegrates into small, roughly cubic granules with blunt edges. A single tempered pane typically produces thousands of these small pieces, none large enough to cause the deep lacerations associated with annealed glass shards.</p>

<p>There is an important limitation, though. Once glass has been tempered, it cannot be cut, drilled, or ground. Any attempt to modify a tempered pane after manufacturing will shatter it. This means tempered glass must be cut to its exact final dimensions before the tempering process. When you order a tempered replacement pane, the glass is measured first, custom-made to the precise dimensions of your opening, then installed. There is no trimming on site.</p>

<p>Tempered glass also has a known vulnerability: spontaneous breakage caused by nickel sulfide inclusions. This is covered in detail in a <a href="#nickel-sulfide-spontaneous-breakage">later section</a>.</p>

<h2 id="laminated-glass-in-detail">Laminated Glass in Detail</h2>

<p>Laminated glass consists of two or more glass plies bonded together with one or more interlayers, most commonly polyvinyl butyral (PVB). The standard residential laminated configuration uses two plies of annealed glass with a 0.76mm PVB interlayer, though thicker interlayers (1.14mm, 1.52mm) are available for enhanced security or acoustic performance.</p>

<p>The key safety advantage of laminated glass is post-breakage behaviour. When one or both plies crack, the fragments adhere to the PVB interlayer. The pane stays in its frame and continues to function as a barrier. This is why laminated glass is required by code in guard applications: even after breakage, the barrier remains in place and prevents falls.</p>

<p>Laminated glass also offers several secondary benefits that tempered glass does not:</p>

<ul>
  <li><strong>UV filtration:</strong> The PVB interlayer blocks approximately 99% of UV radiation, reducing fading of furniture, flooring, and artwork.</li>
  <li><strong>Sound reduction:</strong> The PVB layer dampens sound transmission. Laminated glass typically provides 3 to 5 decibels more sound reduction than monolithic glass of the same thickness.</li>
  <li><strong>Security:</strong> Because laminated glass holds together after impact, it resists forced entry better than tempered glass, which shatters completely and leaves an open hole.</li>
  <li><strong>Overhead safety:</strong> In skylights and overhead glazing, laminated glass prevents broken pieces from falling onto people below.</li>
</ul>

<p>Unlike tempered glass, laminated glass can be cut after manufacturing (the glass plies can be scored and snapped, and the PVB interlayer cut with a blade). This gives installers slightly more flexibility, though factory-cut laminated panels with polished edges are standard for most residential applications.</p>

<h2 id="heat-strengthened-glass">Heat-Strengthened Glass: The Third Option</h2>

<p>Between annealed and fully tempered glass sits a third category: heat-strengthened glass. It is produced using the same furnace and quenching process as tempered glass, but with a slower cooling rate that produces lower surface compression. Under ASTM C1048, heat-strengthened glass must achieve a surface compression between 3,500 and 7,500 psi, compared to the 10,000+ psi required for fully tempered.</p>

<p>The practical differences are significant:</p>

<ul>
  <li><strong>Strength:</strong> Heat-strengthened glass is roughly twice as strong as annealed glass, compared to the 4-to-5 times strength increase of fully tempered.</li>
  <li><strong>Breakage pattern:</strong> When heat-strengthened glass breaks, it fractures into large pieces similar to annealed glass, not into the small granules of tempered. Because of this breakage pattern, heat-strengthened glass does NOT qualify as safety glass under the building code. You cannot use it alone in a hazardous location.</li>
  <li><strong>Spontaneous breakage:</strong> This is the decisive advantage. Heat-strengthened glass is essentially immune to spontaneous breakage caused by nickel sulfide (NiS) inclusions. The lower internal tension means that even if an NiS inclusion undergoes its phase transformation and expands, the stress is not sufficient to shatter the pane.</li>
</ul>

<p>So why does heat-strengthened glass exist if it is not safety glass on its own? Because when you laminate it, the combination provides the best of both worlds. The laminated interlayer provides the safety function (holding fragments in place after breakage), while the heat-strengthened glass provides immunity to NiS spontaneous failure. This is exactly why the OBC now requires laminated heat-strengthened glass for many guard applications, particularly balcony railings at height. The Toronto balcony incidents made the case definitively.</p>

<h2 id="near-doors">Glass Near Doors</h2>

<p>This is the most common safety glass requirement homeowners encounter. Under OBC Article 9.6.1.4, any glass that meets these conditions must be safety glazing:</p>

<ul>
  <li>Glass within a door panel: sidelights, door inserts, full glass doors, and decorative glass panels set into the door itself</li>
  <li>Glass within 600mm (about 2 feet) of a door, measured horizontally from the nearest door edge to the nearest edge of the glass</li>
  <li>Glass in a fixed panel adjacent to a door where the panel could be mistaken for an opening or a walkway</li>
</ul>

<p>The logic is straightforward. People walk into glass near doors, especially children running through a room or someone losing their balance while reaching for a handle. If that glass is standard annealed, the result can be a trip to the emergency room. A Children's Hospital study spanning 1995 to 2007 found that half of glass-table impact injuries would have been preventable or less severe if safety glass had been used. The same principle applies to door glass.</p>

<p>This applies to all exterior and interior doors, including <a href="/front-door-glass">front door glass inserts</a>, patio door sidelights, French door panels, and sliding glass doors. If you are replacing a cracked sidelight or a broken door insert, the replacement must be tempered or laminated. The 600mm measurement zone around doors catches a lot of windows that homeowners do not realise are in a hazardous location: the window right beside your front door, the glass panel flanking your patio slider, or the decorative window next to your side entrance.</p>

<h2 id="near-floors">Glass Near the Floor</h2>

<p>Windows and glass panels that extend close to floor level are classified as hazardous locations under OBC Section 9.6. The concern is that someone could trip, stumble, or fall directly into the glass.</p>

<p>The code requires safety glazing when the bottom edge of the glass is less than a specified height above the finished floor and the glass is in an area where people walk. This typically applies to:</p>

<ul>
  <li>Floor-to-ceiling windows in living rooms and bedrooms</li>
  <li>Glass panels beside staircases that start near floor level</li>
  <li>Large picture windows where the glass extends below knee height</li>
  <li>Sidelights flanking entry doors that reach close to the floor</li>
  <li>Glass panels in room dividers or partition walls</li>
</ul>

<p>Older homes often have standard annealed glass in these locations because they were built before the current code requirements. When that glass breaks and needs replacing, the new pane must meet the current safety standard, not the standard that was in effect when the house was built. This is a point that catches many homeowners off guard: the replacement glass must comply with today's code, regardless of what was originally installed. A building inspector will note this during a home inspection, and it can complicate a sale.</p>

<h2 id="stairs-ramps-landings">Near Stairs, Ramps, and Landings</h2>

<p>Windows and glass panels adjacent to staircases, ramps, and landings require safety glazing under OBC Article 9.6.1.4. Someone stumbling on stairs can fall sideways into a window with significant force. Standard glass in this location is a serious hazard.</p>

<p>The code applies this requirement to glass that is:</p>

<ul>
  <li>Within reach of a staircase, ramp, or landing</li>
  <li>At a height where someone falling could strike the glass</li>
  <li>Adjacent to any change in elevation where a person's momentum could carry them into the pane</li>
</ul>

<p>Basement staircases with a window at the bottom or halfway up are a common example. So are split-level homes where a large window sits right next to a half-flight of stairs. In many older homes across the GTA, the glass at the bottom of a basement staircase is original annealed glass from the 1970s or 1980s. If you are renovating or if that glass breaks, the replacement must be safety-rated.</p>

<p>Half-storey landing windows in two-storey homes are another frequently overlooked location. The window on the landing between the first and second floor often sits at a height where someone tripping on the upper stairs could fall directly into it. If that window contains a standard annealed sealed unit that has failed and <a href="/foggy-windows">gone foggy</a>, the replacement sealed unit needs to incorporate safety glass.</p>

<h2 id="bathrooms">Bathrooms: Showers and Bathtub Enclosures</h2>

<p>All glass in shower enclosures and bathtub surrounds must be tempered safety glass. No exceptions. This includes:</p>

<ul>
  <li>Shower doors, both hinged and sliding</li>
  <li>Fixed glass shower panels</li>
  <li>Glass bathtub enclosures and screens</li>
  <li>Glass block panels used in shower surrounds (the individual blocks must meet impact requirements)</li>
  <li>Any glass within the bathtub or shower zone, including windows that fall within the splash area</li>
</ul>

<p>Wet, soapy surfaces make slipping almost inevitable over time. Tempered glass ensures that if someone does fall into the enclosure, the glass breaks into blunt granules instead of jagged shards. Laminated glass is also acceptable, but tempered is the standard choice for shower applications because of its strength, clean breakage pattern, and ease of cleaning (no interlayer edge to trap moisture).</p>

<p>If you have an older home with a glass bathtub enclosure that is not tempered, it is worth replacing proactively. This is one location where you do not want to wait for the glass to break first. A fall against annealed glass in a wet bathtub can produce deep lacerations from large shards, and the combination of water and broken glass makes evacuation dangerous.</p>

<h2 id="glass-guards-railings">Glass Guards and Railings</h2>

<p>Glass railings and guards on balconies, mezzanines, and interior lofts have stricter requirements than other glazing locations. Following amendments introduced after the Toronto balcony glass incidents (described below), the OBC requires glass guard panels in many applications to be laminated heat-strengthened glass rather than monolithic tempered.</p>

<p>The requirement is specified in OBC Supplementary Standard SB-13, which applies Part 4 structural design requirements to glass used as a guard. Under Article 9.8.8.1, guards must resist specific horizontal loads, and the glass configuration must maintain the guard function even after breakage. The logic is straightforward: when a fully tempered glass railing panel shatters, the entire panel disintegrates and disappears within seconds. That leaves an open gap where a person can fall from height. Laminated glass, even when cracked, stays in place because the PVB interlayer holds the fragments together. The barrier remains functional even after the glass is broken.</p>

<p>This is especially important for:</p>

<ul>
  <li>Balcony guards on upper floors of residential and commercial buildings</li>
  <li>Interior loft or mezzanine railings</li>
  <li>Glass panels along elevated walkways</li>
  <li><a href="/commercial-glass-repair">Commercial glass railings</a> in offices, retail spaces, and restaurants</li>
  <li>Pool fencing that uses glass panels</li>
</ul>

<p>If you need a glass railing panel replaced, the type of glass matters. A standard monolithic tempered panel may no longer meet code for your specific application. The replacement needs to match or exceed the current requirement, which in most guard applications means laminated. For balcony railings at height, the preferred configuration is laminated heat-strengthened glass, which resists both impact and NiS spontaneous breakage.</p>

<h2 id="nickel-sulfide-spontaneous-breakage">Nickel Sulfide Inclusions and Spontaneous Breakage</h2>

<p>One of the more unsettling phenomena in the glass industry is spontaneous breakage of fully tempered glass. A panel that has been installed for months or years can suddenly shatter with no apparent cause, often in the middle of the night or during a temperature change. The culprit, in most cases, is a microscopic nickel sulfide (NiS) inclusion trapped inside the glass during manufacturing.</p>

<p>Nickel sulfide inclusions form when trace amounts of nickel (from stainless steel components in the furnace) combine with sulphur (from the raw materials) during the melting process. The resulting NiS particles are tiny, often smaller than a grain of sand. During the rapid cooling phase of tempering, these particles get locked in a high-temperature crystalline form (the alpha phase) that is unstable at room temperature. Over time, sometimes months and sometimes years, the particles slowly transform to the stable low-temperature form (the beta phase), expanding by roughly 4% as they do.</p>

<p>The location and size of the inclusion determine whether breakage occurs. Research has established two critical thresholds:</p>

<ul>
  <li><strong>Inclusions larger than 55 micrometres</strong> that sit in the tension zone at the centre of the glass cause nearly all heat-soak related breakages. The tension zone is where the internal stress is highest, so any expansion from an NiS phase transformation has the greatest effect there.</li>
  <li><strong>Inclusions larger than 450 micrometres</strong> carry a breakage risk exceeding 90%. At this size, the expansion force during phase transformation is almost always sufficient to exceed the glass's fracture threshold.</li>
</ul>

<p>Heat-soak testing is the industry's primary defence. Tempered panels are placed in a heat-soak oven and held at approximately 290 degrees Celsius for several hours. This accelerates the NiS phase transformation, causing panels with dangerous inclusions to break in the oven rather than after installation. Heat-soak testing catches a significant proportion of defective panels, but it is not a guarantee. Not all manufacturers heat-soak their glass, and the test is not required by all building codes for all applications.</p>

<p>This is precisely why heat-strengthened glass is preferred over fully tempered glass in guard applications. Heat-strengthened glass, with its lower internal tension (3,500 to 7,500 psi vs 10,000+ psi), does not store enough energy for an NiS inclusion to trigger catastrophic breakage. Combined with a laminated interlayer, it provides both breakage resistance and post-failure safety.</p>

<h2 id="toronto-balcony-incidents">The Toronto Balcony Glass Incidents</h2>

<p>Between 2011 and 2012, Toronto experienced a wave of spontaneous balcony glass breakages across multiple high-rise condominium buildings. Tempered glass panels on balcony guards shattered without warning, sending granular glass fragments raining down onto sidewalks, patios, and parking areas below. The fragments were small and blunt (the characteristic tempered breakage pattern), but they fell from considerable heights and accumulated in public areas. Toronto Building issued 16 orders to affected properties requiring inspection and remediation.</p>

<p>Investigations identified nickel sulfide inclusions as the primary cause. The affected panels were monolithic tempered glass: a single sheet of fully tempered glass with no laminated interlayer. When the NiS inclusion triggered the phase transformation, the entire panel disintegrated and there was nothing holding the fragments together. One manufacturer had supplied tempered glass panels to more than 200 high-rise condominium projects across the GTA, raising concerns about the scope of the problem.</p>

<p>Ontario assembled an expert advisory panel to review the building code requirements for glass guards. The panel examined the NiS phenomenon, the adequacy of heat-soak testing, and the alternative glass configurations available. Their recommendations led directly to OBC amendments that now require laminated glass configurations for many guard applications, particularly at height. The logic: even if one lite of a laminated panel breaks due to NiS, the interlayer holds the fragments in place and the guard remains functional. No glass rains down. No gap opens. No fall hazard is created.</p>

<p>These amendments are incorporated into the current 2024 Ontario Building Code (O.Reg. 163/24), effective January 1, 2025. If you live in a GTA condo with tempered balcony glass and are concerned about whether your panels meet current standards, a glass professional can assess the glass type and advise on options. Replacement guard glass in these applications is now typically laminated heat-strengthened, which addresses both the NiS risk and the post-breakage safety requirement.</p>

<h2 id="wired-glass-phase-out">Wired Glass: Why It Is Being Phased Out</h2>

<p>Wired glass has a grid of thin metal wire embedded inside the pane. For decades, it was the standard fire-rated glass in schools, hospitals, apartment corridors, and stairwell doors. The wire holds the glass together when it cracks from heat exposure, maintaining a barrier against flames and smoke for a rated period.</p>

<p>The problem: wired glass is actually weaker than standard annealed glass. The wire creates stress concentrations at every intersection that lower the glass's impact resistance by roughly half. When someone falls into a wired glass panel, it breaks into large shards, and the embedded wire can cause deep, complex lacerations that are difficult to treat because the wire catches and tears tissue on the way through.</p>

<p>The injury data from Ontario schools made the case for change. The Ontario School Boards' Insurance Exchange documented 107 wired glass injury claims between 1987 and 2000. The total cost exceeded $3 million in settlements and medical expenses. A University of Toronto expert estimated that wired glass caused roughly one injury per day in Canadian schools during the period it was in widespread use.</p>

<p>As a result, wired glass has been losing its designation as an acceptable safety glazing product across North America. Modern alternatives provide the same fire resistance without the impact safety drawbacks:</p>

<ul>
  <li><strong>Fire-rated ceramic glass:</strong> Clear, wire-free glass that can achieve fire ratings up to 3 hours while also passing the human impact test (CAN/CGSB-12.1). It is significantly more expensive than wired glass but eliminates the laceration risk.</li>
  <li><strong>Fire-rated tempered glass:</strong> Modified tempered glass products rated for fire endurance that also meet safety glazing standards. These pass both the fire test and the impact test.</li>
  <li><strong>Fire-rated laminated glass:</strong> Laminated configurations with intumescent interlayers that expand and opacify when exposed to heat, blocking flames and radiant heat while maintaining impact safety.</li>
</ul>

<p>If you have wired glass in your home, apartment building, or <a href="/commercial-glass-repair">commercial property</a>, particularly in a door, corridor, or stairwell, consider replacing it with a modern fire-rated alternative the next time it needs attention. The safety improvement is substantial, and the replacement glass will meet both fire and impact requirements.</p>

<h2 id="window-fall-prevention">Window Fall Prevention (Recent OBC Updates)</h2>

<p>The 2024 OBC also includes updated requirements for window fall prevention in residential buildings. Under Article 9.8.8.1, openable windows where the sill is less than 900mm above the interior floor and the bottom of the opening is 1.8 metres or more above the exterior grade now require one of the following:</p>

<ul>
  <li>A window opening limiter that restricts the opening to 100mm or less</li>
  <li>A guard (like a railing or bar) in front of or below the window</li>
  <li>A sill height of at least 900mm above the finished floor</li>
</ul>

<p>Clause 9.8.8.1.(4)(b) adds a critical detail: any window opening limiter must require a tool or special knowledge to release. This is based on ASTM F2090, the standard for window fall prevention devices, and is designed so that a young child cannot defeat the limiter. The release mechanism must be something a small child would not figure out on their own.</p>

<p>This applies primarily to bedrooms and living areas in upper storeys and is focused on preventing children from falling. If you are replacing a window in one of these locations, or installing a new window, the new installation must comply with these fall prevention requirements. This is separate from the safety glazing requirements, but the two often overlap: an upper-storey bedroom window that needs fall prevention hardware may also be in a hazardous glazing location that requires safety glass.</p>

<h2 id="sealed-unit-longevity">Sealed Unit Longevity and Safety Glass</h2>

<p>Most modern residential windows use insulated glass units (IGUs), also called sealed units: two panes of glass separated by a spacer bar and sealed around the perimeter. The space between the panes is filled with air or argon gas for improved insulation. When a sealed unit incorporates safety glass, one or both panes will be tempered or laminated.</p>

<p>Sealed units do not last forever. Data from the Insulating Glass Manufacturers Alliance (IGMA) and Oak Ridge National Laboratory (ORNL) indicates that approximately 1% of sealed units will fail within 15 years. That failure rate increases over time, reaching up to 14% at 25 years. Seal failure allows moisture to enter the space between the panes, resulting in the <a href="/foggy-windows">foggy, cloudy appearance</a> that signals the unit has lost its insulating capacity.</p>

<p>When a sealed unit with safety glass fails, the replacement unit must also incorporate safety glass if the location requires it. This is straightforward for a glass company that knows the code, but it is worth verifying. If your foggy window is next to a door (within 600mm), near a staircase, or close to floor level, the replacement sealed unit needs tempered or laminated glass in the appropriate pane or panes. Glass is measured first, the sealed unit is custom-made to the exact dimensions of your frame, then installed.</p>

<h2 id="how-to-verify-safety-glass">How to Verify If Your Glass Is Safety Glass</h2>

<p>You can usually tell whether your existing glass is tempered or laminated by checking for a small etched or printed stamp in one corner of the pane. In Canada, safety glass carries a certification mark from the Canadian General Standards Board (CGSB) or displays compliance with CAN/CGSB-12.1. You may also see the manufacturer's name, the word "tempered" or "safety," or a reference to ANSI Z97.1 (the American safety glazing standard, which is also widely accepted in Canada).</p>

<p>Here are the methods you can use to identify your glass type:</p>

<ul>
  <li><strong>Corner stamp:</strong> Look at all four corners of the pane. Tempered glass almost always has a small etched or sandblasted mark. It may be subtle and hard to see without the right angle of light. Some stamps are only visible from the interior side.</li>
  <li><strong>Edge inspection:</strong> If you can see the edge of the glass (in a door insert or exposed-edge panel), laminated glass will show a visible interlayer sandwiched between two glass plies. It looks like a thin, slightly translucent line running along the edge.</li>
  <li><strong>Sound test:</strong> Tap the glass gently with your knuckle. Tempered glass rings with a sharper, higher-pitched sound than annealed glass. Laminated glass produces a duller, more muted thud because the PVB interlayer dampens vibration.</li>
  <li><strong>Polarised light:</strong> If you wear polarised sunglasses and look at the glass at an angle, tempered glass often shows faint patterns of light and dark bands (called quench marks or iridescence). These are caused by the stress pattern created during the tempering process and are not visible in annealed or laminated glass.</li>
</ul>

<p>If there is no stamp and the glass is in a hazardous location, it may be older annealed glass that predates the current code. That is not an emergency on its own, but if the glass ever needs replacing, the new pane must be safety glazing. If you are selling your home, an inspector may flag non-safety glass in these locations, so it is worth knowing what you have.</p>

<p>When in doubt, ask during your next glass repair or inspection. We can identify the glass type on site and advise whether an upgrade is needed.</p>

<h2 id="replacing-glass-safety-locations">Replacing Glass in Safety-Critical Locations</h2>

<p>When you call for a <a href="/glass-replacement">glass replacement</a>, the new glass must meet the building code requirements for that specific location. If your broken window is next to a door, near a staircase, or in a bathroom, the replacement pane needs to be safety glass, even if the original was not. This is a code requirement, not a suggestion.</p>

<p>All windows sold in Canada must meet the harmonised CSA A440 / NAFS standard (formally AAMA/WDMA/CSA 101/I.S.2/A440), which covers structural performance, air leakage, and water penetration. When factory-built windows are tested and certified to this standard, they satisfy the performance requirements of OBC Section 9.6. But the glass type still needs to be correct for the location: a CSA A440-certified window with standard annealed glass cannot go in a hazardous location that requires safety glazing.</p>

<p>A glass company that understands the code will specify the correct glass type as part of the measurement and ordering process. Glass is measured first, custom-made to the exact dimensions of your opening, then installed. If safety glass is required, that is factored into the order from the start. The process is the same whether you need a single tempered pane for a door insert or a laminated heat-strengthened panel for a balcony guard.</p>

<p>This is one reason it matters who does the work. Installing standard annealed glass in a code-required location creates a liability for the homeowner and a safety risk for the household. It can also create problems during a future home inspection, insurance claim, or property sale. A knowledgeable installer will reference the applicable OBC sections, specify the correct glass type, and document the installation.</p>

<h2 id="insurance-and-code-compliance">Insurance and Code Compliance</h2>

<p>Building code compliance and home insurance intersect more often than homeowners expect. If a glass-related injury occurs in your home and the glass in that location does not meet the OBC safety glazing requirements, you could face liability issues. Insurance adjusters reviewing a claim may note whether the glass was code-compliant, and non-compliant glass in a hazardous location could affect the outcome of a claim.</p>

<p>Similarly, if you are filing an <a href="/blog/home-insurance-broken-window-ontario">insurance claim for a broken window</a>, the replacement glass must meet current code. Your insurer will typically cover the cost of the code-compliant replacement, not just a like-for-like replacement with the same (possibly non-compliant) glass type that was originally installed. This is actually a benefit: if your old glass was annealed and the code now requires tempered, the upgrade to safety glass should be covered under the claim.</p>

<p>When selling a home, inspection reports that flag non-safety glass in hazardous locations can slow or complicate the transaction. Buyers and their agents may request that the glass be replaced before closing. Knowing what you have, and replacing non-compliant glass proactively, avoids this friction.</p>

<h2 id="get-a-quote">Get a Quote</h2>

<p>If you have broken or damaged glass in any of the locations listed above, the replacement needs to be done right. We handle safety glass replacements across Toronto and the GTA, including tempered sealed units, laminated panels, <a href="/front-door-glass">door glass inserts</a>, shower enclosures, and balcony guard glass. Glass is measured first, custom-made to your exact specifications, then installed.</p>

<p>Our warranties: 5-year seal warranty on sealed glass units, 2-year warranty on glass workmanship, and 1-year warranty on hardware repairs. All warranties exclude vandalism, impact damage, and physical breakage.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or email <a href="mailto:service@luminasky.com">service@luminasky.com</a> to get a written quote on the spot. You can also reach us through our <a href="/contact">contact page</a>. LuminaSky Glass Services is available 24/7, serving Toronto, Vaughan, Richmond Hill, Markham, Mississauga, and the wider GTA. 76 5-Star Google Reviews. Family-Owned Since 2024.</p>
`,
  },
  {
    slug: "exterior-window-condensation-normal",
    title: "Condensation on the Outside of Your Windows? Here Is Why.",
    metaTitle: "Exterior Window Condensation Explained for Ontario Homeowners",
    metaDescription:
      "Moisture on the outside of your windows is usually a good sign. Learn the physics of dew point and radiative cooling, the three types of window condensation, and when fog actually signals a failed seal.",
    excerpt:
      "Waking up to foggy windows on the outside can look alarming. Exterior condensation is usually a sign that your insulated glass is doing its job well. Here is a complete guide to the science behind it, the Toronto-area climate patterns that trigger it, and how to tell the difference between normal morning dew and a real problem.",
    publishedAt: "2026-11-16",
    author: "Dan",
    readingTime: 12,
    coverImage: "/images/services/toronto-foggy-glass-replacement-before.webp",
    tags: ["condensation", "window glass", "toronto", "homeowner guide", "energy efficiency", "sealed units", "low-e glass", "humidity"],
    sections: [
      { id: "what-exterior-condensation-looks-like", title: "What Exterior Condensation Looks Like" },
      { id: "dew-point-explained", title: "Dew Point: The Number That Decides Everything" },
      { id: "the-physics-of-radiative-cooling", title: "The Physics of Radiative Cooling" },
      { id: "why-it-means-your-windows-work", title: "Why It Means Your Windows Are Working" },
      { id: "low-e-the-paradox", title: "Low-E Glass: The Condensation Paradox" },
      { id: "argon-gas-and-sealed-unit-design", title: "Argon Gas and Sealed Unit Design" },
      { id: "toronto-climate-and-condensation", title: "Toronto Climate and Condensation Patterns" },
      { id: "which-windows-get-it-most", title: "Which Windows Get It Most" },
      { id: "when-it-clears", title: "When It Clears" },
      { id: "three-types-of-condensation", title: "Three Types of Window Condensation" },
      { id: "interior-condensation-and-humidity", title: "Interior Condensation and Humidity Control" },
      { id: "between-the-panes-failed-seal", title: "Between the Panes: What a Failed Seal Looks Like" },
      { id: "sealed-unit-lifespan", title: "How Long Do Sealed Units Last?" },
      { id: "argon-loss-over-time", title: "Argon Loss Over Time" },
      { id: "when-to-worry", title: "When to Actually Worry" },
      { id: "quick-reference", title: "Quick Reference: Where Is the Moisture?" },
      { id: "what-to-do-next", title: "What to Do Next" },
    ],
    content: `
<p>You wake up on a cool autumn morning, glance outside, and notice moisture covering the outer surface of your windows. The glass looks fogged over, almost like someone sprayed it with water overnight. Your first thought: something is wrong with my windows.</p>

<p>In most cases, nothing is wrong at all. Exterior condensation is one of the most misunderstood window topics in residential construction. It catches homeowners off guard every year, especially those who have recently installed new high-performance windows or had their sealed units replaced. The moisture you see is actually evidence that your glass is insulating your home properly.</p>

<p>This post explains the science in plain language. We will cover the physics of dew point and radiative cooling, the specific climate conditions in the Toronto area that trigger condensation season after season, the three types of window condensation and what each one means, and the clear warning signs that separate harmless morning dew from a real problem that needs repair.</p>

<h2 id="what-exterior-condensation-looks-like">What Exterior Condensation Looks Like</h2>

<p>Exterior condensation appears as a film of moisture or water droplets on the outside surface of the glass. It often covers the entire pane evenly, like dew on a car windshield parked overnight. You will typically notice it in the early morning, particularly during spring and autumn when overnight temperatures drop but daytime humidity stays relatively high.</p>

<p>It may appear on some windows and not others. That is normal, and the reason comes down to which direction each window faces, how much shade it gets, and what type of glass is installed. We will cover all of those factors below.</p>

<p>In some cases, the moisture is heavy enough to form rivulets that run down the glass, similar to what you see on a cold drink on a humid summer day. That, too, is exterior condensation and not a sign of a failed seal. The water is on the surface. You can reach out and wipe it with your finger. If you can touch the moisture, it is on the outside of the glass, and there is nothing to fix.</p>

<h2 id="dew-point-explained">Dew Point: The Number That Decides Everything</h2>

<p>Before getting into the physics of why your windows fog up on the outside, it helps to understand a single concept: dew point.</p>

<p>The dew point is the temperature at which water vapour in the air condenses into liquid water. Air always contains some amount of moisture in the form of invisible water vapour. When the air cools, it can hold less moisture. At the dew point temperature, the air becomes fully saturated, and the excess moisture has to go somewhere. It condenses onto the nearest cold surface as liquid water.</p>

<p>You already know this from everyday experience. A cold glass of water "sweats" on a warm day because the glass surface is below the dew point of the surrounding air. The glass did not create the moisture. The moisture was already in the air. The cold surface simply gave it somewhere to condense.</p>

<p>Your window glass works the same way. When the outer surface of the glass drops below the dew point of the outdoor air, moisture condenses onto it. The question is: why does the glass get cold enough for that to happen?</p>

<h2 id="the-physics-of-radiative-cooling">The Physics of Radiative Cooling</h2>

<p>The answer is a phenomenon called radiative cooling. Every object emits infrared radiation as a function of its temperature. This is not visible light. It is heat energy radiating outward in all directions. Your window glass emits infrared radiation toward the sky all night long.</p>

<p>On a clear night, the sky is a very poor reflector of that energy. Most of the infrared radiation your glass emits passes straight through the atmosphere and escapes into space. The glass loses heat faster than the surrounding air can replace it. The result: the outer surface of your glass cools to a temperature well below the ambient air temperature around it.</p>

<p>How much colder can it get? Research has measured surfaces cooling as much as 10 degrees Celsius below ambient air temperature under clear skies. The net radiative cooling power of a high-emissivity surface facing a clear night sky is approximately 100 to 135 watts per square metre. That is a substantial amount of heat being radiated away from your glass every second.</p>

<p>When that surface temperature drops below the dew point of the surrounding air, condensation forms. The relationship is simple: if the glass surface temperature is at or below the dew point, you get dew. If it is above the dew point, you do not.</p>

<p>Cloud cover changes the equation entirely. Clouds act as an infrared blanket, reflecting some of that radiated heat back toward the ground. On overcast nights, the glass does not cool as far below ambient temperature, and condensation is less likely. That is why you see the most exterior condensation after clear, calm nights, and rarely after cloudy or rainy ones.</p>

<p>Wind also plays a role. Moving air constantly replaces the thin boundary layer of cold air next to the glass surface with warmer air from the surroundings. On windy nights, the glass cannot cool as effectively because convective heat transfer from the air partially offsets the radiative losses. Calm conditions let the glass cool uninterrupted.</p>

<p>One striking detail worth noting: radiative cooling can bring a surface below the freezing point even when the air temperature is above 0 degrees Celsius. This is the same mechanism that creates black ice on bridges and exposed pavement on clear autumn mornings. Your window glass is subject to the same physics, and on the right night, frost can form on the outer pane while the thermometer reads 3 or 4 degrees above zero.</p>

<h2 id="why-it-means-your-windows-work">Why It Means Your Windows Are Working</h2>

<p>Here is the part that surprises most homeowners. Exterior condensation is a sign that your insulated glass is performing well. Window manufacturers consistently describe it as an indicator of good thermal performance, not a defect.</p>

<p>Modern double-pane and triple-pane sealed units are designed to block heat transfer between the inside and outside of your home. The insulating gas between the panes and any Low-E coating on the glass keep indoor heat inside. That means very little warmth reaches the outer pane. The outer pane stays cold, cools below the dew point more easily through radiative cooling, and moisture collects on it.</p>

<p>Older single-pane windows rarely show exterior condensation. Why? Because heat from inside the home leaks straight through the glass and keeps the outer surface warm. That warmth prevents the outer surface from dropping below the dew point. But that is not a feature. That is wasted energy. According to Natural Resources Canada (NRCan), windows can account for up to 25% of total heat loss in a home. If your old windows never fogged on the outside, it is because they were letting your heating dollars escape through the glass all night.</p>

<p>When homeowners upgrade their windows or have sealed units replaced with higher-performance glass, exterior condensation often appears for the first time. This is one of the most common post-installation questions we receive. The answer is always the same: the new glass is doing exactly what it was designed to do. It is keeping heat inside your home so effectively that the outer pane gets cold enough to collect dew.</p>

<p>Think of it this way. A well-insulated wall does not feel warm on the outside during winter. Neither should a well-insulated window. The exterior condensation is proof that the thermal barrier between inside and outside is working.</p>

<h2 id="low-e-the-paradox">Low-E Glass: The Condensation Paradox</h2>

<p>Low-E (low emissivity) coatings deserve their own section because they create a counterintuitive situation. Installing Low-E glass to improve your home's energy efficiency can actually increase exterior condensation. Understanding why requires a closer look at how the coating works.</p>

<p>A Low-E coating is a microscopically thin metallic oxide layer applied to one surface of the glass inside the sealed unit. Its primary job is to reflect infrared heat energy while allowing visible light to pass through. In winter, the coating reflects heat from your furnace back into the room instead of letting it pass through the glass and escape outside. In summer, it reflects solar heat away from your home.</p>

<p>A standard clear double-pane sealed unit has a centre-of-glass U-value of roughly 0.48 W/m2K. Adding a Low-E coating drops that to about 0.33 W/m2K, a roughly 30% improvement in thermal performance. That is a significant gain in insulating value.</p>

<p>But here is the paradox. Because the Low-E coating is so effective at blocking heat from reaching the outer pane, the outer pane stays much colder than it would on a standard clear unit. A colder outer pane drops below the dew point more easily. The result: more exterior condensation, not less.</p>

<p>Homeowners sometimes interpret this increased condensation as a problem with the new glass. It is the opposite. The Low-E coating is working exactly as intended. The condensation is a visible side effect of superior thermal insulation. For a deeper look at how different types of glass perform in residential windows, see our guide on <a href="/blog/types-of-window-glass-explained">types of window glass explained</a>.</p>

<p>One note: Low-E coating is an upgrade option, not a standard feature on every sealed unit. When ordering replacement glass, discuss this option with your technician based on the window's orientation and your priorities.</p>

<h2 id="argon-gas-and-sealed-unit-design">Argon Gas and Sealed Unit Design</h2>

<p>Argon gas fill is another upgrade that improves a sealed unit's insulating performance. Argon is an inert, non-toxic gas that is about 33 to 34% less thermally conductive than air. When the gap between the panes of a sealed unit is filled with argon instead of air, heat transfers more slowly across the gap. The practical result is a 5 to 15% improvement in U-value, depending on the unit's overall design.</p>

<p>The optimal gap width for argon-filled units is about 11 to 12 mm. This is slightly narrower than the ideal gap for air-filled units, which is closer to 13 mm. The narrower gap works because argon's lower conductivity means less convective circulation within the gas space. At the right gap width, the gas stays relatively still instead of forming convection currents that transfer heat.</p>

<p>Like Low-E coatings, argon fill contributes to a colder outer pane and therefore more exterior condensation on the right mornings. And like Low-E, it is an upgrade option to discuss with your technician when ordering replacement sealed units, not something that comes standard on every unit.</p>

<p>The combined effect of Low-E coating and argon gas is a sealed unit that keeps your home measurably warmer in winter and cooler in summer. That same thermal performance keeps the outer pane colder at night, making exterior condensation more likely. It is a worthwhile trade-off for the energy savings and comfort you gain.</p>

<h2 id="toronto-climate-and-condensation">Toronto Climate and Condensation Patterns</h2>

<p>The Greater Toronto Area's climate creates ideal conditions for exterior condensation during certain seasons. Here is what the numbers look like and why the pattern repeats so predictably each year.</p>

<p>In September, the average dew point in Toronto sits around 12 degrees Celsius. Overnight temperatures frequently drop into the low single digits while humidity remains moderate to high. The gap between the glass surface temperature (which can be 10 degrees Celsius below air temperature on a clear night) and the dew point closes quickly. Once the glass surface temperature crosses below the dew point, condensation forms.</p>

<p>Consider a typical September night in the GTA. The air temperature drops to about 8 degrees Celsius overnight. The dew point is 12 degrees Celsius. On a clear, calm night, the outer surface of a well-insulated window cools by radiative losses to roughly 0 degrees Celsius, well below the dew point. Heavy condensation forms. In fact, frost is possible in that scenario, even though the air temperature is comfortably above freezing.</p>

<p>By December, the average dew point drops to roughly negative 4 degrees Celsius. The air is much drier in winter, so exterior condensation becomes less common. Instead, the condensation problem shifts indoors. Dry outdoor air and sealed-up homes create a large humidity difference between inside and outside, and moisture from cooking, showers, and daily living condenses on the cooler interior glass surface.</p>

<p>The peak seasons for exterior condensation in the GTA are April through May and September through October. These transitional months bring the right combination of cool nights, moderate humidity, and clear skies. Environment Canada records indicate Toronto averages about 35 fog days per year, most concentrated in autumn and early spring. That fog frequency tracks closely with when homeowners notice exterior condensation on their windows.</p>

<p>Lake Ontario adds another layer. Homes near the lakeshore experience higher overnight humidity than homes further inland. The lake moderates temperatures and adds moisture to the air, creating conditions where exterior condensation can be heavier and more persistent along the waterfront compared to neighbourhoods just a few kilometres north.</p>

<h2 id="which-windows-get-it-most">Which Windows Get It Most</h2>

<p>Not every window in your home will show exterior condensation at the same time. Several factors determine which ones are more likely to fog up on any given morning:</p>

<ul>
  <li><strong>North-facing and east-facing windows:</strong> These receive the least direct sunlight in the morning, so the glass stays cold longer. South and west-facing windows warm up faster after sunrise and clear their condensation sooner. If you notice condensation lingering on the north side of the house while the south side is already dry, that is simply a matter of sun exposure.</li>
  <li><strong>Windows shaded by trees, fences, or neighbouring buildings:</strong> Anything that blocks the morning sun delays the warming of the outer pane. Shade from evergreen trees can extend the condensation period by an hour or more. Deciduous trees that have dropped their leaves offer less shade, which is why you may notice a change in condensation patterns between summer and autumn.</li>
  <li><strong>Newly installed high-performance glass:</strong> If you recently had your sealed units replaced or upgraded to Low-E glass, the improved insulation means less heat reaches the exterior surface. Exterior condensation often appears for the first time after an upgrade, and it can be alarming if you are not expecting it. It is not a defect in the new glass.</li>
  <li><strong>Ground-floor windows near gardens or lawns:</strong> Vegetation and moist soil raise the humidity in the microclimate right around those windows. A garden bed directly below a window can noticeably increase dew formation on that pane compared to a window above a driveway or paved walkway.</li>
  <li><strong>Windows facing open sky:</strong> A window that "sees" a wide expanse of open sky radiates heat more freely than one partially sheltered by an overhang or neighbouring roofline. More sky exposure means more radiative cooling and more condensation.</li>
  <li><strong>Bedroom windows:</strong> In many homes, bedrooms are kept cooler than living areas, especially at night. Less indoor heat near the window means even less warmth reaching the outer pane, which can make bedroom windows slightly more prone to exterior condensation than windows in heated living spaces.</li>
</ul>

<p>If you notice condensation on some windows but not others, check whether the dry windows face south or west, sit in direct morning sun, or are sheltered by an overhang. That difference in exposure explains the uneven pattern almost every time.</p>

<h2 id="when-it-clears">When It Clears</h2>

<p>Exterior condensation is temporary. Once the sun hits the glass or the air temperature rises above the dew point, the moisture evaporates. On most mornings in the Toronto area, it clears within one to two hours of sunrise.</p>

<p>You do not need to wipe it off. You do not need to treat the glass with any coating or spray. The moisture will return on the next cool, clear night and disappear again the following morning. This cycle is completely normal and does not damage the glass, the seal, or the frame. No special maintenance is required.</p>

<p>Some products are marketed as anti-condensation sprays for window glass. These are unnecessary for exterior condensation. The moisture is harmless and temporary, and applying coatings to the outer pane of a sealed unit can interfere with the glass's optical properties or leave residue that attracts dirt.</p>

<h2 id="three-types-of-condensation">Three Types of Window Condensation</h2>

<p>The location of the moisture tells you everything you need to know. There are three distinct types of window condensation, and they mean very different things. Learning to distinguish between them can save you from unnecessary worry, or alert you to a problem that does need attention.</p>

<p><strong>1. Exterior condensation (outside surface of the glass)</strong></p>
<p>Moisture on the outer pane, the side facing the weather. Caused by the glass cooling below the outdoor dew point through radiative cooling. This is normal. It is a sign of well-insulated glass doing its job. The condensation clears on its own as the morning warms up. No action is needed, and no repair is required.</p>

<p><strong>2. Interior condensation (inside surface of the glass)</strong></p>
<p>Moisture on the inner pane, the side you can touch from inside your home. This means the indoor humidity is too high relative to the glass surface temperature. It is most common in winter when homes are sealed up and moisture from cooking, showers, laundry, and breathing accumulates indoors. The fix is better ventilation and humidity control, which we cover in the next section.</p>

<p><strong>3. Condensation between the panes</strong></p>
<p>Moisture trapped inside the sealed unit, between the two or three layers of glass. You cannot wipe it from either side. This is not a humidity issue or a temperature issue. It means the seal around the glass unit has failed, allowing moist air to enter the space where insulating gas used to be. The unit has lost much of its thermal performance and needs to be replaced. We cover this in detail in the section on <a href="#between-the-panes-failed-seal">failed seals</a>.</p>

<p>The finger test is the simplest diagnostic. Go to the window showing moisture. Can you touch the water and wipe it away from the outside? Exterior condensation. Can you touch it from the inside? Interior condensation. If you cannot reach the moisture from either side, it is between the panes, and that unit needs replacing.</p>

<h2 id="interior-condensation-and-humidity">Interior Condensation and Humidity Control</h2>

<p>While exterior condensation is harmless, interior condensation can lead to real problems if left unchecked. Understanding the humidity guidelines and practical steps to manage moisture in your home is worth the effort.</p>

<p>Health Canada recommends maintaining indoor relative humidity between 30% and 50%. This range balances comfort, health, and building protection. Below 30%, the air becomes uncomfortably dry and can irritate respiratory passages, dry out skin, and cause static electricity. Above 50%, excess moisture promotes mould growth, dust mite populations, and condensation on cool surfaces including window glass.</p>

<p>In very cold weather, the Canada Mortgage and Housing Corporation (CMHC) advises that you may need to drop below 30% to prevent condensation from forming on window glass. When outdoor temperatures plunge to negative 20 or negative 30 degrees Celsius, even a well-insulated window's inner surface gets cold enough that moderate indoor humidity will condense on it.</p>

<p>Persistent interior condensation creates the conditions for mould growth on window frames, sills, and surrounding drywall. Health Canada states that mould growth in a home may pose a health hazard, and Canadian health surveys have found a strong correlation between dampness, mould, and respiratory disease.</p>

<p>Practical steps to manage indoor humidity in winter:</p>

<ul>
  <li>Run bathroom exhaust fans during and for 15 to 20 minutes after every shower or bath.</li>
  <li>Use the range hood exhaust fan while cooking, especially when boiling water or using the oven.</li>
  <li>Open a window briefly (even for 5 to 10 minutes) each day to exchange humid indoor air for drier outdoor air.</li>
  <li>Use a dehumidifier in basements or laundry areas where moisture tends to accumulate.</li>
  <li>Make sure your dryer vents to the outside, not into the house.</li>
  <li>Keep furniture and curtains pulled slightly away from windows so air can circulate along the glass surface.</li>
  <li>If you use a humidifier, monitor the humidity level with a hygrometer and do not let it climb above 50%.</li>
</ul>

<p>One benefit of energy-efficient windows: NRCan notes that ENERGY STAR qualified windows keep the inner glass surface warmer than standard windows, which allows a higher indoor humidity level before condensation occurs. Upgrading your sealed units can actually reduce your risk of interior condensation and the mould that follows.</p>

<p>If you are seeing mould around your window frames, the problem is not the glass itself. It is the humidity level in the room. Address the ventilation issue first. If mould has already established itself, clean it and then control the moisture source to prevent it from returning.</p>

<h2 id="between-the-panes-failed-seal">Between the Panes: What a Failed Seal Looks Like</h2>

<p>Condensation between the panes is the one type that does signal a real problem. If you see moisture, fog, or a milky haze trapped inside the sealed unit where you cannot reach it from either side, the perimeter seal has failed.</p>

<p>A sealed glass unit consists of two or three panes of glass separated by a spacer bar around the edges. The spacer contains a desiccant (a moisture-absorbing material) and the entire assembly is sealed with butyl and polysulphide or silicone sealant. The space between the panes is filled with air or argon gas at the factory, and the seal keeps that gas in and moisture out.</p>

<p>When the seal breaks down, moist outdoor air gradually enters the unit. The desiccant absorbs moisture for a while, but once it is saturated, moisture starts condensing on the inner surfaces of the glass. At first you may notice a slight haze that comes and goes. Over time, the fogging becomes more persistent and more visible until it is obvious on most days.</p>

<p>A failed seal also means the insulating gas has escaped. For argon-filled units, this means a measurable drop in thermal performance. Even for air-filled units, the constant exchange of humid air through the broken seal degrades the unit's ability to insulate. For more on what foggy windows mean and how the problem develops, see our detailed page on <a href="/foggy-windows">foggy window repair</a>.</p>

<p>The important thing to know: a failed sealed unit does not usually mean you need a new window. In most cases, only the glass needs replacing, not the frame. Glass is measured first, custom-made to your exact opening dimensions, then installed into your existing frame. You keep your frame, your hardware, and your trim. Visit our <a href="/glass-replacement">glass replacement</a> page for more information on the process.</p>

<h2 id="sealed-unit-lifespan">How Long Do Sealed Units Last?</h2>

<p>When homeowners see condensation between the panes, the common fear is that the whole window is finished and they are facing a major expense. Understanding typical sealed unit lifespans helps put the situation in perspective.</p>

<p>A major field study conducted by Oak Ridge National Laboratory (ORNL) tracked 10,944 insulated glass units over time and found a seal failure rate of just 1% at 15 years. A second study of over 14,000 units confirmed similar numbers. After 25 years, 80% of the buildings in the study had experienced zero seal failures across all their windows.</p>

<p>The practical planning range for a quality sealed unit is 20 to 25 years. Some last longer, some fail sooner. The variables that affect lifespan include the quality of the spacer system, the amount of direct UV exposure the unit receives, the degree of thermal cycling (the daily expansion and contraction from temperature swings), and the quality of the original factory seal.</p>

<p>South-facing and west-facing windows tend to experience the most thermal stress because they absorb the most solar heat during the day. This repeated heating and cooling cycle puts more strain on the seal over time. North-facing windows, by contrast, experience less extreme temperature swings and their seals tend to last longer.</p>

<p>If one sealed unit in your home fails, it does not mean the rest are about to follow. Each unit ages independently based on its own exposure conditions. It is common to replace one or two failed units while the rest of the windows in the house remain perfectly functional for years or even decades longer. For more on what your home insurance may or may not cover when glass needs replacing, see our post on <a href="/blog/home-insurance-broken-window-ontario">home insurance and broken windows in Ontario</a>.</p>

<h2 id="argon-loss-over-time">Argon Loss Over Time</h2>

<p>If your sealed units contain argon gas fill, it is worth understanding how the gas behaves over the years. Argon does not stay at 100% concentration indefinitely. It leaks out through the seal at a rate of approximately 1% per year. This is a normal characteristic of sealed glass units, not a defect.</p>

<p>At that rate, a sealed unit retains about 85% of its original argon fill after 15 years and about 75% after 25 years. Industry guidance suggests that thermal performance begins to decline noticeably once the argon concentration drops below about 80%. At that point, the unit still insulates better than a plain air-filled unit, but the advantage is diminishing.</p>

<p>This gradual argon loss does not mean the seal has failed. A failed seal allows rapid air and moisture exchange, which shows up as visible fogging between the panes. Slow argon diffusion through an intact seal is invisible. You will not see any condensation or fogging from argon loss alone. The only sign is a gradual, subtle decrease in thermal performance that you are unlikely to notice on any single day.</p>

<p>When a sealed unit with argon fill does eventually need replacement due to age or seal failure, the new unit can be ordered with fresh argon fill. Discuss this option with your technician when ordering replacement glass.</p>

<h2 id="when-to-worry">When to Actually Worry</h2>

<p>Exterior condensation by itself is not a problem. But it is worth paying attention to what else is happening with your windows. Here are the situations that do need attention:</p>

<ul>
  <li><strong>Fog between the panes that never clears:</strong> This is a failed seal. The sealed unit needs to be replaced. The good news: you typically do not need to replace the entire window. The glass is measured first, custom-made to your exact dimensions, then installed into your existing frame. Visit our <a href="/foggy-windows">foggy window repair</a> page for more information.</li>
  <li><strong>Persistent interior condensation with mould growth:</strong> If moisture on the inside surface of the glass is constant and you see mould forming around the frame or sill, you have a ventilation problem that needs to be addressed before it causes structural damage. Keep indoor humidity between 30% and 50% as Health Canada recommends, and run exhaust fans after cooking and showering.</li>
  <li><strong>Condensation plus visible damage to the frame:</strong> If you see moisture combined with rotting wood, warped vinyl, or crumbling caulking, the frame may need repair or the window may need full replacement.</li>
  <li><strong>Exterior condensation that persists all day:</strong> True exterior dew clears once the glass warms up. If moisture stays on the outer surface throughout the day, it may actually be between the panes, not on the outside. Run your finger along the outer glass. If the moisture is on the surface, it is exterior condensation. If you cannot touch it, it is inside the sealed unit and the seal has failed.</li>
  <li><strong>Condensation on only one pane in a row of identical windows:</strong> If all your windows are the same age and type, but one consistently fogs between the panes while the others do not, that one unit has likely failed. The others are fine. Only the failed unit needs replacing.</li>
  <li><strong>Water pooling on the sill or running down the wall:</strong> A small amount of condensation dripping off the glass is normal during heavy dew. But if water is pooling inside the window frame, running down the interior wall, or staining the drywall below the window, there may be a leak in the frame, the weatherstripping, or the flashing above the window. That is a different issue from condensation and should be inspected.</li>
</ul>

<h2 id="quick-reference">Quick Reference: Where Is the Moisture?</h2>

<table>
  <thead>
    <tr>
      <th>Location</th>
      <th>Cause</th>
      <th>Action Needed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Outside surface</td>
      <td>Glass cooled below outdoor dew point through radiative cooling (up to 10 degrees Celsius below air temperature on clear nights)</td>
      <td>None. Normal and temporary. Sign of good insulation. Clears within 1 to 2 hours of sunrise.</td>
    </tr>
    <tr>
      <td>Inside surface</td>
      <td>Indoor humidity too high relative to glass surface temperature. Most common in winter.</td>
      <td>Improve ventilation. Run exhaust fans. Keep humidity between 30% and 50% per Health Canada guidelines.</td>
    </tr>
    <tr>
      <td>Between the panes</td>
      <td>Failed seal on the sealed unit. Average sealed unit lifespan is 20 to 25 years. ORNL data shows 1% failure rate at 15 years.</td>
      <td><a href="/glass-replacement">Replace the sealed glass unit</a>. Frame can usually stay. Glass is measured, custom-made, then installed.</td>
    </tr>
  </tbody>
</table>

<h2 id="what-to-do-next">What to Do Next</h2>

<p>If your windows show exterior condensation on cool mornings, there is nothing to fix. Your glass is insulating properly, and the dew will clear on its own within an hour or two of sunrise. This is especially common after upgrading to Low-E glass or argon-filled sealed units, and it is a sign that your investment in better glass is paying off.</p>

<p>If you are seeing fog between the panes, or persistent moisture on the interior that is causing mould or water damage, that is a different situation entirely. <a href="/foggy-windows">Foggy sealed units</a> can be replaced without removing the frame. We measure on site, order custom glass to your exact dimensions, and install it into your existing frame. The process typically takes two visits: one to measure and one to install. Every sealed unit we install carries a 5-year seal warranty and a 2-year glass workmanship warranty. Hardware repairs carry a 1-year warranty. All warranties exclude vandalism, impact damage, and physical breakage.</p>

<p>Not sure which type of condensation you are dealing with? Send us a photo or call <a href="tel:+14373448490">437-344-8490</a>. You can also reach us at <a href="mailto:service@luminasky.com">service@luminasky.com</a>. We are available 24/7 and can usually tell from a photo whether you need service or just reassurance.</p>

<p>LuminaSky Glass Services. Family-Owned Since 2024. 76 5-Star Google Reviews. <a href="/contact">Get a Written Quote on the Spot</a>.</p>
`,
  },
  {
    slug: "window-screen-repair-vs-replacement",
    title: "Window Screen Repair vs Replacement: When to Fix and When to Get New Screens",
    metaTitle: "Window Screen Repair vs Replacement Toronto",
    metaDescription:
      "Torn or sagging window screen? Learn when a screen repair makes sense, when replacement is the better call, and what to expect from the process in Toronto.",
    excerpt:
      "A small tear, a bent frame, mesh pulling away from the edges. Screen damage is one of the most common window issues Toronto homeowners deal with, but it does not always mean you need a brand new screen. Here is how to decide.",
    publishedAt: "2026-11-18",
    author: "Dan",
    readingTime: 7,
    coverImage: "/images/services/window-screens-service.webp",
    tags: ["Window Screens", "Repair Tips"],
    sections: [
      { id: "common-screen-damage", title: "Common Types of Screen Damage" },
      { id: "when-repair-makes-sense", title: "When Repair Makes Sense" },
      { id: "when-to-replace", title: "When Replacement Is the Better Call" },
      { id: "screen-materials", title: "Screen Materials: Fibreglass vs Aluminum" },
      { id: "pet-resistant-screens", title: "Pet-Resistant and Heavy-Duty Options" },
      { id: "patio-door-screens", title: "Patio Door Screens: A Special Case" },
      { id: "what-the-process-looks-like", title: "What the Process Looks Like" },
      { id: "seasonal-timing", title: "Best Time of Year for Screen Work in Toronto" },
      { id: "what-to-do-next", title: "What to Do Next" },
    ],
    content: `
<p>Window screens take a beating. Between Toronto's freeze-thaw winters, summer storms, pets, kids, and years of opening and closing windows, it is only a matter of time before something goes wrong. A tear in the mesh, a bent frame, a screen that no longer sits flush in the track. The question most homeowners ask is straightforward: can this be fixed, or do I need a new one?</p>

<p>The answer depends on what is damaged, how badly, and whether the frame is still in good shape. In many cases, a screen repair is all you need. In others, replacement is faster, cleaner, and more cost-effective. This guide walks through both options so you can make a confident decision.</p>

<h2 id="common-screen-damage">Common Types of Screen Damage</h2>

<p>Before deciding between repair and replacement, it helps to identify exactly what you are dealing with. Here are the most common screen problems we see across the GTA:</p>

<ul>
<li><strong>Small tears or punctures:</strong> A hole from a branch, a pet claw, or a stray ball. The mesh is damaged but the frame is intact.</li>
<li><strong>Mesh sagging or pulling away from the frame:</strong> The spline (the rubber cord that holds the mesh in the channel) has shrunk, hardened, or come loose. The screen looks wavy or baggy.</li>
<li><strong>Bent or warped frame:</strong> The aluminum frame itself is bent at a corner or bowed along one side. This usually happens from impact or from forcing a screen into the wrong opening.</li>
<li><strong>Broken corner joints:</strong> The plastic or metal corners that hold the frame together have cracked or separated. The frame feels loose and wobbly.</li>
<li><strong>Corroded or pitted frame:</strong> Years of moisture exposure have degraded the aluminum. The frame is rough, chalky, or has visible pitting.</li>
<li><strong>Missing or stuck rollers on sliding screens:</strong> The screen does not slide smoothly in its track, or it jumps off the track entirely.</li>
</ul>

<h2 id="when-repair-makes-sense">When Repair Makes Sense</h2>

<p>Screen repair works well when the frame is still straight, square, and structurally sound. If the frame is good, we can re-screen it with new mesh and spline. This is the most common service we perform on <a href="/window-screens">window and door screens</a>.</p>

<p>Repair is typically the right choice when:</p>

<ul>
<li>The mesh is torn, sagging, or pulling away, but the frame is straight and the corners are solid.</li>
<li>The spline has hardened or shrunk with age. New spline and new mesh solve the problem completely.</li>
<li>A single corner joint has loosened but the frame is otherwise intact. The corner can often be re-seated or replaced.</li>
<li>The screen rollers on a sliding screen are worn or stuck. New rollers restore smooth operation.</li>
</ul>

<p>Re-screening an existing frame is straightforward. The old mesh and spline are removed, new mesh is stretched across the frame, and new spline is pressed into the channel to hold it tight. The result is a screen that looks and performs like new, using the original frame that already fits your window perfectly.</p>

<h2 id="when-to-replace">When Replacement Is the Better Call</h2>

<p>Replacement makes sense when the frame itself is the problem. No amount of new mesh will fix a frame that is bent, corroded, or falling apart at the corners.</p>

<p>Replace the entire screen when:</p>

<ul>
<li>The frame is bent or bowed and cannot be straightened without cracking.</li>
<li>Multiple corner joints have failed and the frame is no longer square.</li>
<li>The aluminum is corroded, pitted, or chalky from years of weather exposure.</li>
<li>The frame dimensions no longer match the window opening. This happens when windows are replaced but the original screens are kept.</li>
<li>You want to upgrade from standard fibreglass mesh to something more durable, like aluminum or pet-resistant mesh, and the current frame does not accommodate the thicker material.</li>
</ul>

<p>A replacement screen is built to your exact window measurements. We measure the opening, fabricate the frame with the correct colour match, install the mesh you choose, and fit it into your window. No generic off-the-shelf sizing.</p>

<h2 id="screen-materials">Screen Materials: Fibreglass vs Aluminum</h2>

<p>When re-screening or ordering a new screen, you have a choice of mesh material. The two most common options are fibreglass and aluminum, and each has clear strengths.</p>

<p><strong>Fibreglass mesh</strong> is the standard choice for most residential windows. It is flexible, easy to work with, does not crease or dent, and comes in charcoal grey (which offers better outward visibility than silver). It resists corrosion well, which matters in Toronto's humid summers. The main drawback: it tears more easily than aluminum. A pet claw or a sharp branch can puncture it without much effort.</p>

<p><strong>Aluminum mesh</strong> is more rigid and significantly more tear-resistant. It holds up better against physical impact and lasts longer in high-traffic areas. The trade-off is that it can dent if pushed hard, and the silver colour is slightly more visible from inside the room. Aluminum mesh is a good choice for ground-floor windows, windows near walkways, or any location where the screen takes regular contact.</p>

<p>Both materials block insects equally well. The choice comes down to durability needs and personal preference. We stock both and can advise based on where the screen will be installed.</p>

<h2 id="pet-resistant-screens">Pet-Resistant and Heavy-Duty Options</h2>

<p>If you have cats or dogs that like to lean against screens, scratch at them, or push their noses into the mesh, standard fibreglass will not hold up. Pet-resistant screen mesh is made from heavier-gauge polyester or vinyl-coated polyester that is significantly harder to tear or puncture.</p>

<p>Pet screen is about seven times stronger than standard fibreglass mesh. It can handle claws, paws, and repeated pressure without tearing. The mesh is thicker and slightly less transparent than standard screen, so there is a small trade-off in visibility and airflow. For most pet owners, the durability is well worth it.</p>

<p>We can install pet-resistant mesh in both new frames and existing frames during a re-screen. If your current screens are constantly getting shredded by a determined cat, this upgrade solves the problem.</p>

<h2 id="patio-door-screens">Patio Door Screens: A Special Case</h2>

<p>Sliding patio door screens deserve a separate mention because they take more abuse than any other screen in the house. They are opened and closed multiple times a day, exposed to foot traffic, and their rollers wear out faster than window screen hardware.</p>

<p>Common patio door screen problems include bent tracks, worn rollers, torn mesh from pets or kids running through, and frames that have been knocked off their track one too many times. If the frame is straight and the track is undamaged, a re-screen with new rollers usually restores full function. If the frame is bent or the track is damaged, a full replacement door screen is the cleaner fix.</p>

<p>For more on patio door issues beyond the screen, see our page on <a href="/patio-door-repair">patio door repair</a>. Problems with the main door sliding, locking, or sealing are separate from the screen and may involve the rollers, track, or weatherstripping on the door itself.</p>

<h2 id="what-the-process-looks-like">What the Process Looks Like</h2>

<p>Whether you need a repair or a full replacement, the process is simple:</p>

<ol>
<li><strong>Assessment:</strong> We look at the screen, check the frame, and determine whether repair or replacement is the right approach. You get a written quote before any work starts.</li>
<li><strong>Measurement:</strong> For replacements, we measure the window opening on site. Every screen is custom-made to fit your exact dimensions. No guessing, no trimming to fit.</li>
<li><strong>Fabrication and installation:</strong> Re-screens are typically completed on the same visit. Replacement screens that need a new frame are fabricated and installed on a return visit.</li>
</ol>

<p>We measure and install everything ourselves. No subcontractors in your home. The frame colour is matched to your existing windows so the new screen blends in with the rest of your home.</p>

<h2 id="seasonal-timing">Best Time of Year for Screen Work in Toronto</h2>

<p>Screen repairs and replacements can be done year-round, but spring is the busiest season. Most homeowners notice screen damage when they open their windows for the first time after winter. By May and June, the backlog grows.</p>

<p>If you know your screens need attention, booking in late winter or early spring means shorter wait times. That said, we handle screen work through autumn and into winter as well. If you need a screen fixed before mosquito season, the earlier you call, the better.</p>

<p>One tip: take a walk around your home in early spring and check every screen. Open each window, inspect the mesh for tears or sag, and test sliding screens for smooth operation. Catching a small problem now prevents a bigger headache in July when you actually need the airflow. For window hardware that is sticking or grinding when you open the window itself, that is a separate issue covered on our <a href="/cranks">window crank repair</a> page.</p>

<h2 id="what-to-do-next">What to Do Next</h2>

<p>If you have a torn, sagging, or damaged screen, send us a photo and we can usually tell you right away whether it needs a repair or a replacement. Call <a href="tel:+14373448490">437-344-8490</a> or email <a href="mailto:service@luminasky.com">service@luminasky.com</a>. We are available 24/7.</p>

<p>For a full overview of our screen services, including window screens, patio door screens, and storm door screens, visit our <a href="/window-screens">Window Screens</a> page.</p>

<p>LuminaSky Glass Services. Family-Owned Since 2024. 76 5-Star Google Reviews. <a href="/contact">Get a Written Quote on the Spot</a>.</p>
`,
  },
  {
    slug: "patio-door-glass-replacement-guide",
    title: "Patio Door Glass Replacement: What Toronto Homeowners Need to Know",
    metaTitle: "Patio Door Glass Replacement Toronto",
    metaDescription:
      "When does a patio door need new glass? Learn the signs, the replacement process, and what to expect from a Toronto glass repair company.",
    excerpt:
      "A foggy, cracked or drafty patio door does not always mean you need a brand new door. In many cases, replacing the glass panel alone restores the seal, the view and the insulation at a fraction of the cost.",
    publishedAt: "2026-11-18",
    author: "Dan",
    readingTime: 8,
    coverImage: "/images/services/door-before-broken.webp",
    tags: ["Patio Doors", "Glass Replacement"],
    sections: [
      { id: "signs-you-need-replacement", title: "Signs Your Patio Door Glass Needs Replacing" },
      { id: "sliding-vs-swing", title: "Sliding Doors vs Swing Patio Doors" },
      { id: "foggy-patio-door", title: "Foggy Patio Door Glass" },
      { id: "the-replacement-process", title: "How Patio Door Glass Replacement Works" },
      { id: "security-and-safety", title: "Security and Safety Glass" },
      { id: "timeline-and-what-to-expect", title: "Timeline and What to Expect" },
    ],
    content: `
<p>Patio doors are one of the largest glass surfaces in a Toronto home. They let in natural light, connect your living space to the backyard, and take a beating from Ontario weather year after year. When something goes wrong with the glass, the instinct is often to replace the entire door. But in most cases, the glass panel itself can be swapped out while keeping the frame, track and hardware you already have.</p>

<p>This guide covers the signs that your patio door glass needs attention, how the replacement process works, and what Toronto homeowners should know before booking a service call.</p>

<h2 id="signs-you-need-replacement">Signs Your Patio Door Glass Needs Replacing</h2>

<p>Some problems are obvious. A crack running across the panel or a shattered pane after a stray hockey puck clearly needs new glass. But other signs are easier to miss:</p>

<ul>
<li><strong>Condensation between the panes.</strong> If moisture appears between the two layers of glass (not on the inside surface), the sealed unit has failed. No amount of cleaning will fix it because the fog is trapped inside. This is the same issue that affects <a href="/foggy-windows">foggy windows</a> throughout the home.</li>
<li><strong>Drafts near the door.</strong> A failed seal lets outside air in. You may feel cold air along the bottom or sides of the glass, even when the door is fully closed and locked.</li>
<li><strong>Visible haze or white residue.</strong> Over time, moisture inside a failed sealed unit leaves mineral deposits on the inner glass surfaces. The glass looks permanently dirty or cloudy.</li>
<li><strong>Higher energy bills.</strong> A sealed unit that has lost its argon fill or has a broken seal no longer insulates properly. Your furnace and air conditioner work harder to compensate.</li>
<li><strong>Chips or scratches that weaken the panel.</strong> Small chips near the edge of tempered glass can spread over time, especially through freeze-thaw cycles in a Toronto winter.</li>
</ul>

<p>If you are unsure whether your patio door glass needs replacing, send us a photo. We can usually tell from a picture whether the sealed unit has failed or whether something else is going on.</p>

<h2 id="sliding-vs-swing">Sliding Doors vs Swing Patio Doors</h2>

<p>The replacement process differs slightly depending on your door type.</p>

<p><strong>Sliding patio doors</strong> are the most common style in Toronto homes. The moving panel rides on a bottom track. In many models, the glass panel can be removed from the frame on site, measured, and replaced without removing the entire door assembly. Some older sliding doors have the glass bonded directly into the sash, which means the sash and glass are replaced together.</p>

<p><strong>Swing (hinged) patio doors</strong>, including French-style doors, typically have one or two panels that swing inward or outward on hinges. The glass in these doors is usually held in place by stops or glazing beads. Replacing the sealed unit involves removing the stops, taking out the old glass, and installing the new panel with fresh glazing tape.</p>

<p>Both types use standard sealed units (also called insulated glass units or IGUs). The key measurements are the width, height and thickness of the glass, plus the spacer bar width between the two panes. Getting these right is critical, which is why we always measure on site rather than working from homeowner-supplied dimensions.</p>

<h2 id="foggy-patio-door">Foggy Patio Door Glass</h2>

<p>Foggy glass is the number one reason Toronto homeowners call about their patio doors. The fog appears when the perimeter seal around the sealed unit breaks down. Moisture from the air enters the gap between the panes and condenses, creating that cloudy look.</p>

<p>Seal failures happen for several reasons. Age is the most common. UV exposure, temperature swings and simple wear break down the sealant over the years. Patio doors are especially vulnerable because they face direct sun for hours each day and handle more thermal stress than a typical window.</p>

<p>The fix is straightforward: replace the sealed unit. The frame stays. The hardware stays. The track stays. You get a brand new, factory-sealed glass panel with a clear view and proper insulation. If multiple windows in the home are showing the same fog, it may be worth addressing them all at once. See our <a href="/foggy-windows">foggy glass repair</a> page for more detail on how sealed unit replacement works across the home.</p>

<h2 id="the-replacement-process">How Patio Door Glass Replacement Works</h2>

<p>Every patio door glass replacement follows the same three-step process:</p>

<ol>
<li><strong>Measure.</strong> A technician visits your home and takes precise measurements of the existing glass panel, including the overall dimensions, glass thickness, spacer bar width and any special coatings (Low-E, tinted, obscure). These measurements determine the replacement unit.</li>
<li><strong>Custom order.</strong> Sealed units are built to order. Your replacement glass is fabricated to match the exact specifications of your door. This typically takes 5 to 10 business days depending on the glass type.</li>
<li><strong>Install.</strong> The technician returns, removes the failed glass panel and installs the new sealed unit. The work is done on site and usually takes under an hour for a single patio door. We clean up, test the door operation and make sure everything slides or swings smoothly before leaving.</li>
</ol>

<p>This process is the same whether you have a sliding door, a French door, or a single swing panel. The glass is always measured first, custom-made, then installed.</p>

<h2 id="security-and-safety">Security and Safety Glass</h2>

<p>Patio doors are required by the Ontario Building Code to use safety glass, specifically tempered glass. Tempered glass is four to five times stronger than regular glass. When it does break, it shatters into small, rounded pieces rather than sharp shards, which reduces the risk of injury.</p>

<p>If security is a concern, you can upgrade to laminated glass. Laminated glass has a plastic interlayer bonded between two glass panes. Even when broken, the glass stays attached to the interlayer instead of falling out of the frame. This makes it much harder for someone to push through the opening. It also reduces noise, which is a bonus if your patio faces a busy street.</p>

<p>For ground-floor patio doors in areas where break-ins are a worry, laminated glass is worth considering during your replacement. The cost is higher than standard tempered glass, but it adds a real layer of physical security without changing the look of the door. If your patio door was damaged in a break-in or storm, our <a href="/emergency-glass-repair">emergency glass repair</a> service can board up the opening and get you on the schedule for a permanent replacement.</p>

<h2 id="timeline-and-what-to-expect">Timeline and What to Expect</h2>

<p>From the first call to finished install, most patio door glass replacements in the GTA take about two weeks. Here is what that looks like:</p>

<ul>
<li><strong>Day 1: Site visit and measurement.</strong> We come out, inspect the door, take measurements and give you a written quote on the spot. No surprises later.</li>
<li><strong>Days 2 to 10: Fabrication.</strong> Your sealed unit is custom-built. Standard clear and Low-E units are usually ready within a week. Specialty glass (tinted, laminated, obscure patterns) can take a few extra days.</li>
<li><strong>Day 10 to 14: Installation.</strong> We schedule the install at a time that works for you. Most single-door replacements are done in under an hour.</li>
</ul>

<p>If your patio door glass is cracked and you are concerned about security or weather exposure while waiting for the replacement unit, we can install a temporary board-up on the same day.</p>

<p>Have questions about your patio door? Call <a href="tel:+14373448490">437-344-8490</a> or email <a href="mailto:service@luminasky.com">service@luminasky.com</a>. You can also send us a photo for a quick assessment. Visit our <a href="/patio-door-repair">patio door repair</a> page to see the full range of patio door services we offer.</p>

<p>LuminaSky Glass Services. Family-Owned Since 2024. 76 5-Star Google Reviews. <a href="/contact">Get a Written Quote on the Spot</a>.</p>
`,
  },
  {
    slug: "storm-door-glass-screen-insert-swap",
    title: "Storm Door Glass vs Screen Insert: Seasonal Swap Guide for Ontario Homeowners",
    metaTitle: "Storm Door Glass vs Screen Insert Swap Guide",
    metaDescription:
      "Learn when and how to swap your storm door glass and screen inserts for each Ontario season. Common problems, maintenance tips, and when to call a pro.",
    excerpt:
      "Most storm doors come with interchangeable glass and screen inserts. Swapping them at the right time keeps your home comfortable year-round, but broken clips and cracked panels can turn a simple job into a headache.",
    publishedAt: "2026-11-18",
    author: "Dan",
    readingTime: 6,
    coverImage: "/images/services/front-door-storm.webp",
    tags: ["Storm Doors", "Seasonal Tips"],
    sections: [
      { id: "when-to-swap", title: "When to Swap: Glass In, Screen Out (and Vice Versa)" },
      { id: "how-to-swap", title: "How to Remove and Install Storm Door Inserts" },
      { id: "common-problems", title: "Common Problems During the Swap" },
      { id: "when-to-call-a-pro", title: "When to Call a Pro" },
      { id: "maintenance-tips", title: "Maintenance Tips to Extend Insert Life" },
    ],
    content: `
<p>Storm doors are one of those home features that do their job so well you barely think about them. The glass panel keeps cold air out in winter. The screen panel lets fresh air in during summer. But the swap between the two is where things can go wrong, especially on older doors where hardware has seen a few too many Ontario winters.</p>

<p>This guide covers the right timing for each swap, how to do it yourself, and the common issues that might mean it is time to call in help.</p>

<h2 id="when-to-swap">When to Swap: Glass In, Screen Out (and Vice Versa)</h2>

<p>The timing depends more on temperature than the calendar. Here is the general rule for the GTA and surrounding areas:</p>

<ul>
<li><strong>Glass panel in (fall):</strong> Once overnight lows start dropping below 10°C consistently, usually late October to mid-November. The glass panel adds a layer of insulation between your front door and the outside air, reducing drafts and heat loss.</li>
<li><strong>Screen panel in (spring):</strong> Once daytime highs are regularly above 15°C and you want cross-ventilation through the house. For most of Ontario, that is late April to mid-May.</li>
</ul>

<p>Leaving the glass panel in too long in spring can trap heat between the storm door and your entry door, which can warp vinyl frames or damage weatherstripping. If your entry door faces south or west, make the swap a bit earlier.</p>

<h2 id="how-to-swap">How to Remove and Install Storm Door Inserts</h2>

<p>Most modern <a href="/screen-storm-doors">storm doors</a> use a retainer clip system. The glass and screen inserts slide into channels on the door frame and lock in place with small metal or plastic clips. Here is the basic process:</p>

<ol>
<li><strong>Open the storm door fully</strong> and prop it in place so it does not swing while you work.</li>
<li><strong>Find the retainer clips.</strong> They are usually along the bottom rail, sometimes on the sides. Squeeze or slide them to release.</li>
<li><strong>Slide the insert upward</strong> into the top channel, then pull the bottom edge toward you and lift the panel out.</li>
<li><strong>Clean both the insert you are putting in and the channels</strong> before installing. Dirt and debris in the channels make the panel sit unevenly.</li>
<li><strong>Slide the new insert into the top channel first,</strong> then swing the bottom into place and re-engage the retainer clips.</li>
</ol>

<p>The whole job takes about five minutes when everything works smoothly. When it does not, the next section covers why.</p>

<h2 id="common-problems">Common Problems During the Swap</h2>

<p><strong>Broken or missing retainer clips.</strong> This is the most common issue. The small plastic clips become brittle after a few years of UV exposure and temperature swings. Without them, the insert rattles in the frame or can fall out entirely. Replacement clips are specific to the door brand and model, which can make finding the right ones tricky.</p>

<p><strong>Cracked or shattered glass insert.</strong> Tempered safety glass is standard in storm door panels, but it still breaks. A crack from a stray hockey puck, a package delivery gone wrong, or just thermal stress from years of service. Once tempered glass cracks, it shatters into small pieces. You will need a replacement panel cut to your door's exact dimensions.</p>

<p><strong>Torn or sagging screen mesh.</strong> Screen inserts take a beating from pets, kids, and wind-blown debris. Small tears grow into large ones quickly. Re-screening the insert is straightforward for a pro and gives you a tighter, cleaner result than patch kits.</p>

<p><strong>Inserts that will not slide.</strong> Bent channels, paint buildup, or corrosion in the frame tracks can make it impossible to remove or install a panel. Forcing it usually makes things worse. A careful cleaning with a stiff brush and some silicone lubricant often solves the problem.</p>

<p><strong>Weatherstripping gaps.</strong> Over time the foam or rubber seal around the insert compresses and stops making contact. Cold drafts around the edges of the glass panel in winter are a sure sign.</p>

<h2 id="when-to-call-a-pro">When to Call a Pro</h2>

<p>Some storm door issues are easy DIY jobs. Others are not worth the frustration. Call a professional when:</p>

<ul>
<li>The glass insert is cracked or shattered and needs a custom replacement panel</li>
<li>Retainer clips are broken and you cannot identify the brand or model for replacements</li>
<li>The door frame channels are bent or corroded and panels will not seat properly</li>
<li>The <a href="/window-screens">screen mesh needs re-screening</a> and you want it done cleanly</li>
<li>Your storm door closer or hinge hardware is also failing, making the whole door unstable</li>
</ul>

<p>At LuminaSky, we handle storm door glass replacement, screen re-meshing, and hardware repairs across the GTA. We carry common insert sizes and can order custom panels for less common door models. Send us a photo of your door and the issue, and we can usually tell you what is needed before we arrive.</p>

<h2 id="maintenance-tips">Maintenance Tips to Extend Insert Life</h2>

<p><strong>Store the off-season insert properly.</strong> Stand it upright in a dry, protected area like a garage or basement. Laying glass panels flat invites something heavy to land on them. Leaning screen panels against rough surfaces tears the mesh.</p>

<p><strong>Clean the channels twice a year.</strong> When you remove one insert and before you put the other in, wipe the channels with a damp cloth and apply a thin coat of silicone spray. This keeps the panels sliding smoothly and prevents corrosion.</p>

<p><strong>Inspect clips and weatherstripping each swap.</strong> It takes thirty seconds and saves you from discovering a problem in January when cold air is pouring through the gaps.</p>

<p><strong>Wash glass inserts before storing.</strong> Dirt left on the glass for months can etch the surface. A quick wipe with glass cleaner before you put it away keeps it clear for next season.</p>

<p>Need a storm door glass insert replacement, screen repair, or help with a door that is not cooperating? Call us at <a href="tel:+14373448490">437-344-8490</a> or email <a href="mailto:service@luminasky.com">service@luminasky.com</a>. We are available 24/7 and serve homeowners across Toronto, Vaughan, Brampton, Mississauga, and the entire GTA.</p>

<p>LuminaSky Glass Services. Family-Owned Since 2024. 76 5-Star Google Reviews. <a href="/contact">Get a Written Quote on the Spot</a>.</p>
`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = BLOG_POSTS.find((p) => p.slug === slug);
  if (!current) return [];

  const scored = BLOG_POSTS.filter((p) => p.slug !== slug).map((p) => {
    const shared = p.tags.filter((t) => current.tags.includes(t)).length;
    return { post: p, score: shared };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.post);
}
