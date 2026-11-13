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

<p>Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a quote online</a> to book your assessment.</p>
`,
  },
  {
    slug: "winter-window-checklist-gta",
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

<p>Broken glass now? Call <a href="tel:+14373448490">437-344-8490</a>. We handle <a href="/emergency-glass-repair">emergency glass repair</a> and <a href="/commercial-glass-repair">commercial glass repair</a> across the GTA, any hour.</p>
`,
  },
  {
    slug: "double-vs-triple-pane-low-e-argon",
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

<p><a href="/foggy-windows">Replacing a fogged unit</a> and not sure what to specify? Whether you need <a href="/glass-replacement">glass replacement</a> for your home or a sealed unit upgrade, send us a photo and the rough dimensions on WhatsApp and we will tell you what is in there now and what we would put back. Call <a href="tel:+14373448490">437-344-8490</a>.</p>
`,
  },
  {
    slug: "sliding-patio-door-wont-slide",
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

<p>Not sure if it is rollers or track? Send a photo of the bottom track and the panel edge on WhatsApp and we will tell you what we are looking at. Call <a href="tel:+14373448490">437-344-8490</a>.</p>
`,
  },
  {
    slug: "winter-window-prep-gta",
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

<p>Call <a href="tel:+14373448490">437-344-8490</a> or send a photo on WhatsApp and we will tell you what you are looking at.</p>
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

<p>If your front door glass is cracked, foggy or just not what you want anymore, <a href="/contact">book a visit</a> and we will take a look. We work across the GTA.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a quote online</a>.</p>
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

<p>Need help with a broken crank? Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a quote online</a>.</p>
`,
  },
  {
    slug: "replace-vs-repair-windows-toronto",
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

<p>At LuminaSky, we look at each window individually. If the frame is good, we tell you, and we repair just what needs fixing. If the frame is failing, we will say so and explain why. Our assessments come at no charge and no obligation.</p>

<h2 id="faq">FAQ</h2>

<h3>How many years do repaired windows last compared to new ones?</h3>

<p>A new sealed glass unit in an existing frame typically lasts 15 to 25 years. That is the same lifespan as the sealed unit in a brand-new window, because it is the same product. The difference is that you kept your existing frame, trim, and interior finish instead of tearing everything out.</p>

<h3>Will repairing windows instead of replacing them affect my home's resale value?</h3>

<p>Buyers care about clear glass, proper insulation, and windows that operate smoothly. A repaired window with a new sealed unit meets all three criteria. What hurts resale value is foggy, broken, or drafty windows, not whether the fix was a repair or a replacement.</p>

<p>Want an honest assessment of your windows? <a href="/contact">Book a visit</a> or call <a href="tel:+14373448490">437-344-8490</a>.</p>
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

<p>Want to see options for your door? <a href="/contact">Book a visit</a> or call <a href="tel:+14373448490">437-344-8490</a>.</p>
`,
  },
  {
    slug: "emergency-glass-repair-toronto",
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

<p>The most common call we get from Woodbridge is <a href="/foggy-glass-repair-vaughan">foggy glass</a>: condensation trapped between the two panes of a sealed unit. The glass is not cracked and the frame is usually fine. The seal around the perimeter has broken down after 20-plus years of freeze-thaw cycling, letting moisture in. We measure the glass, order a replacement sealed unit to the exact size, and install it into the existing frame. The frame stays, the fog is gone, and the window is weathertight again.</p>

<p>Casement windows with crank operators are also common in Woodbridge. The original cranks, usually Truth Hardware or Roto, wear out after 15 to 25 years of daily use. The gears strip, the arm bends, or the track corrodes. We carry the most common <a href="/window-crank-repair-vaughan">crank replacements</a> and complete most hardware repairs on the same visit.</p>

<h2 id="maple">Maple</h2>

<p>Maple grew fast from the late 1990s through the 2010s. The subdivisions north of Major Mackenzie Drive, along Peter Rupert Avenue, Dufferin Street and west toward Keele, are filled with builder-grade windows from that era. These windows are newer than Woodbridge stock, but the quality of the original hardware was often lower.</p>

<p>Patio door rollers are a frequent issue in Maple. The sliding patio doors in these homes use small nylon or steel rollers that wear flat after 10 to 15 years of daily use. The door gets heavy, sticks on the track, and eventually will not lock properly. We replace the rollers and adjust the door so it slides and locks like new.</p>

<p>Builder-grade casement cranks also show up early in Maple because the original hardware was the lightest option available at the time. Replacement with a heavier-duty operator is straightforward and keeps the window working for another 15-plus years.</p>

<h2 id="kleinburg">Kleinburg and Nashville</h2>

<p>Kleinburg and the Nashville area are where Vaughan's largest homes are. Lot sizes are bigger, the houses are bigger, and the windows are bigger. Many of these homes have floor-to-ceiling glass walls, large picture windows, and architectural <a href="/skylight-repair-vaughan">skylights</a> that need ladder or roof access for service.</p>

<p>The glass units in estate homes are often oversized, which means they are custom-ordered for every replacement. Standard sizes do not apply. We measure on site, order the glass to exact dimensions, and return for installation once the unit is ready. Turnaround depends on size and glass type, but most custom units arrive within 5 to 15 business days.</p>

<p>Skylight work in Kleinburg often involves steep-pitch roofs and sometimes requires safety systems or scaffolding. We assess the access before quoting so there are no surprises on installation day.</p>

<h2 id="concord">Concord</h2>

<p>Concord sits between Highway 7 and Steeles Avenue, east of Highway 400. It is a mix of residential streets, townhouse complexes and commercial or industrial buildings. The residential stock is similar in age to Woodbridge, with many homes from the 1980s and 1990s, so the same sealed-unit and hardware failures apply.</p>

<p>The commercial side of Concord adds storefront glass, warehouse windows and automatic door glass to the mix. Businesses along Interchange Way, Millway Avenue and the Highway 7 corridor call us for broken storefront panels, failed commercial sealed units and emergency board-ups after break-ins.</p>

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
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
