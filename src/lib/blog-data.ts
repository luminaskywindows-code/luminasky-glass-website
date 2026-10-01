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
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}
