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
    metaTitle:
      "Window Repair vs Replacement in Toronto | LuminaSky Glass Guide",
    metaDescription:
      "Not every broken window needs replacing. Learn when repair saves you money, when replacement is the smarter move, and how to tell the difference. Toronto homeowner guide.",
    excerpt:
      "A cracked seal, a stuck crank, condensation between the panes. Your first instinct might be to replace the whole window. But in many cases, a targeted repair costs a fraction of the price and solves the problem completely.",
    publishedAt: "2026-10-01",
    author: "LuminaSky Glass",
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

<p>Foggy windows are one of the most common issues in the GTA. You see condensation, haze, or a milky film trapped between the panes. It looks terrible and it means the insulating seal has failed. Moisture has entered the space where argon gas used to be.</p>

<p><strong>Can it be repaired?</strong> Yes. The glass unit (the sealed unit) can be replaced without touching the frame. A technician measures the opening, orders a custom-made replacement glass unit, and installs it into your existing frame. The process takes two visits: one to measure, one to install.</p>

<p><strong>When does this not work?</strong> If the frame itself is rotted, warped, or structurally compromised, the new glass will not seal properly. In that case, full window replacement is the better path. But for the majority of foggy windows, the frame is perfectly fine. Only the sealed unit needs to go.</p>

<p>Glass is measured first, custom-made to your exact dimensions, then installed. This approach preserves your existing frame and trim, avoids drywall or casing damage, and costs significantly less than a full replacement.</p>

<h2 id="broken-cranks-and-hardware">Broken Cranks, Hinges, and Hardware</h2>

<p>Casement and awning windows rely on crank operators and hinges to open and close. Over time, these parts wear down. You might notice the handle spinning without engaging, the window not closing flush, or the hinge arm bending when you try to open it.</p>

<p><strong>Can it be repaired?</strong> Almost always. Window hardware, including cranks, hinges, locks, handles, and balancers, can be replaced individually. A technician identifies the part, sources a compatible replacement (even for discontinued models), and installs it on site.</p>

<p>Most window hardware repairs are completed on the same day, on the first visit. There is no waiting for custom parts in most cases, because common operators and hardware are carried in stock.</p>

<p><strong>When does this not work?</strong> If the frame around the hardware mount point is cracked or stripped to the point where new hardware cannot anchor securely, the window may need replacing. This is uncommon but does happen with older wood frames that have moisture damage.</p>

<h2 id="cracked-or-broken-glass">Cracked or Broken Glass</h2>

<p>A stray baseball, a pressure crack from temperature swings, or impact damage from a storm. Broken glass is urgent because it compromises security, insulation, and safety.</p>

<p><strong>Can it be repaired?</strong> The glass itself cannot be patched. But the sealed unit can be replaced without replacing the window. As with foggy glass, the opening is measured, a new unit is custom-made, and it gets installed into your existing frame.</p>

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

<p>Condo owners face unique challenges. Your windows might be on the 15th floor. The building may have specific rules about what you can and cannot change. And accessing the exterior side of the glass often requires specialized equipment.</p>

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
    metaTitle:
      "Winter Window Checklist for GTA Homes | LuminaSky Glass",
    metaDescription:
      "Before the cold sets in, check these 10 things on your windows, doors and skylights. A simple winter checklist for Vaughan, Thornhill and GTA homeowners.",
    excerpt:
      "Ontario winters are hard on windows. A 20-minute walk around your home now can prevent drafts, water damage, and emergency calls in January. Here are 10 things every GTA homeowner should check before the temperature drops.",
    publishedAt: "2026-10-07",
    author: "LuminaSky Glass",
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

<p>Test every crank in your home. Open the window, close it, and make sure it pulls tight against the frame with no gaps.</p>

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

<p>Condensation inside a skylight follows the same rules as any window. If the fog is between the panes, the sealed unit has failed and needs replacing.</p>

<h2 id="storm-doors-and-screens">9. Storm Doors and Screens</h2>

<p>If you have <a href="/screen-storm-doors">storm doors</a>, fall is the time to swap the screen panel for the glass insert. A storm door with a glass panel adds a layer of insulation to your entry door and cuts drafts significantly.</p>

<p>Check the door closer, the latch, and the weatherstripping around the frame. A storm door that does not close fully or that has gaps around the edges is not doing its job. Also inspect <a href="/window-screens">window screens</a> and decide whether to remove and store them for winter. Screens left on through winter collect ice and can get damaged.</p>

<h2 id="balcony-doors">10. Balcony Door Seals</h2>

<p>If you live in a condo or townhouse, check the seal around your balcony door. Balcony doors are exposed to wind on upper floors and often develop drafts along the bottom or the hinge side. The weatherstripping compresses faster on doors that get opened and closed frequently.</p>

<p>Close the door and run your hand along all four edges. Any air movement means the seal needs attention. Also check that the door handle pulls the door tight when locked. A loose multi-point lock is a common source of cold air in high-rise units.</p>

<h2 id="what-to-do-next">What to Do Next</h2>

<p>Walk through your home with this list. For most people, the inspection takes about 20 minutes. Make a note of anything that feels off: a draft, a sticky handle, fog between panes, a lock that does not latch.</p>

<p>If everything checks out, you are set for winter. If you find one or two issues, getting them fixed now is straightforward. Most hardware repairs are same-day. Glass replacements typically take one to two weeks from measurement to installation.</p>

<p>For anything on this list, we can help. Book a $30 site visit and a technician will inspect the problem, explain your options, and give you a written quote. That $30 gets credited toward whatever work you decide to do.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a quote online</a> to get your windows winter-ready.</p>
`,
  },
  {
    slug: "window-condensation-in-winter",
    title: "Window Condensation in Winter: Normal, or a Failed Seal?",
    metaTitle:
      "Window Condensation in Winter: Normal or Failed Seal? | LuminaSky Glass",
    metaDescription:
      "Water on your windows in winter? Learn what condensation inside, outside and between the panes means, and when a foggy window needs a new sealed glass unit.",
    excerpt:
      "Water on your windows when the temperature drops does not always mean something is wrong. But sometimes it does. The difference depends on where the moisture is: inside the room, outside on the glass, or trapped between the panes.",
    publishedAt: "2026-10-07",
    author: "Dan, LuminaSky Glass",
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

<p>This is the most common window problem in the GTA. If your home was built between 2000 and 2015, check every window. South-facing and west-facing glass tends to fail first because of repeated sun exposure.</p>

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

<p>Yes. Because the new glass is made to measure before installation day, the opening is only exposed for a short time while each unit is swapped.</p>

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

<p>If you cannot tell whether your condensation is on the surface or between the panes, a quick site visit will give you a clear answer. A technician inspects the window, identifies whether the seal has failed, and gives you a written quote if work is needed.</p>

<p>Book a $30 site visit. That fee gets credited toward whatever work you decide to do.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a quote online</a>.</p>
`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
