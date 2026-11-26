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
    slug: "water-coming-in-through-window",
    title: "Water Coming In Through Your Window? Here's What's Causing It",
    metaTitle: "Water Leaking Through a Window: Causes and Fixes | LuminaSky",
    metaDescription:
      "Water on the sill after rain? The most common causes of a leaking window, what you can check yourself, and when it needs a repair (usually not a new window).",
    excerpt:
      "Water on the sill after a storm usually comes from one of five places. Most of them are repairs, not a new window. Here is how to narrow it down.",
    publishedAt: "2026-11-26",
    author: "Dan",
    readingTime: 6,
    tags: ["Water Leaks", "Window Repair", "Caulking", "Window Maintenance"],
    sections: [
      { id: "first-check", title: "Leak or Condensation?" },
      { id: "causes", title: "The Most Common Causes" },
      { id: "what-you-can-check", title: "What You Can Check Yourself" },
      { id: "when-to-call", title: "When to Call Us" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Water on the sill after a rainstorm is one of those problems that's easy to ignore the first time. You wipe it up and forget about it. Then it happens again, and you notice the paint under the window is starting to bubble.</p>

<p>Water coming in around a window almost always has one of a handful of causes. Most of them are repairs, not a new window. Here is how to narrow it down.</p>

<h2 id="first-check">First, Is It a Leak or Condensation?</h2>

<p>Before anything else, rule out condensation. Water that forms on the inside of the glass on cold mornings and runs down to the sill is moisture from the air in your house, not rain coming in. It shows up in winter, on cold days, and often on several windows at once.</p>

<p>A leak shows up during or right after rain, usually at one window, and often at a corner or along the bottom of the frame. If you're not sure, our guide to <a href="/blog/window-condensation-in-winter">window condensation in winter</a> explains the difference.</p>

<h2 id="causes">The Most Common Causes</h2>

<h3>1. Failed exterior caulking</h3>
<p>The bead of sealant between the window frame and the wall is the first line of defence against rain. When it cracks or pulls away from the brick or siding, water runs straight into the gap and finds its way inside. This is the most common cause we see, and the easiest to fix. See our post on <a href="/blog/window-caulking-inside-outside-around-glass">window caulking inside, outside and around the glass</a>.</p>

<h3>2. Blocked drain holes</h3>
<p>Most vinyl and aluminum windows have small weep holes along the bottom of the frame on the outside. Water that gets into the frame is supposed to drain out through them. When they fill with dirt, bugs or old paint, the water backs up and spills over the inside edge of the sill instead. A blocked weep hole is often the reason a window leaks only in heavy rain.</p>

<h3>3. Worn seals around the glass</h3>
<p>The gasket or glazing seal where the glass sits in the frame dries out and shrinks over the years. Once there's a gap, rain running down the glass gets behind the seal and into the sash. You'll often see water at the bottom corners of the glass.</p>

<h3>4. Weatherstripping on sliding windows and patio doors</h3>
<p>On sliders and patio doors, worn weatherstripping and a dirty track can let water blow in during a windy storm. A track full of debris also stops water from draining out properly.</p>

<h3>5. Problems above the window</h3>
<p>Sometimes the window isn't the problem at all. Missing flashing above the window, a clogged gutter overflowing down the wall, or cracked brick above the frame can send water down into the opening. The window just happens to be where it shows up.</p>

<h2 id="what-you-can-check">What You Can Check Yourself</h2>

<ul>
<li><strong>Look at the outside caulking.</strong> Cracks, gaps or pieces missing are a clear sign.</li>
<li><strong>Find the weep holes</strong> on the outside bottom edge of the frame and make sure they're open. A thin wire or a pipe cleaner clears most of them.</li>
<li><strong>Vacuum the tracks</strong> on sliding windows and patio doors.</li>
<li><strong>Check the gutters</strong> above the window after the next rain.</li>
<li><strong>Note when it leaks.</strong> Only in heavy rain, only with wind from one side, or every time it rains. That pattern tells us a lot.</li>
</ul>

<h2 id="when-to-call">When to Call Us</h2>

<p>If water keeps coming in after you've cleared the drain holes, or you see stains on the drywall, soft wood under the sill or bubbling paint, it's time to have it looked at. Water that sits inside a wall for a season can cause damage that costs far more than the window repair.</p>

<p>On a visit, the technician checks the caulking, the drain holes, the glass seals and the frame, and works out where the water is actually getting in before quoting anything. Most leaks are fixed with recaulking, new seals or clearing the drainage. A full replacement only makes sense when the frame itself is cracked or rotted.</p>

<p>After a leak repair, we call a couple of days later to check that the window has stayed dry. A leak isn't really fixed until it gets through the next rain.</p>

<h2 id="faq">Common Questions</h2>

<h3>Do I need a new window if it leaks?</h3>
<p>Usually not. Most leaks come from caulking, drainage or seals, and all of those can be repaired. Replacement makes sense when the frame is cracked, rotted or warped.</p>

<h3>Why does my window only leak in heavy rain?</h3>
<p>That usually points to blocked drain holes or a small gap in the exterior caulking. Light rain drains away. Heavy rain fills the frame faster than it can empty.</p>

<h3>Can a leak be fixed in winter?</h3>
<p>Most of it, yes. Seals, drainage and interior work can be done any time. Exterior caulking needs a dry day above freezing, so we book it on a mild day or seal it temporarily until spring.</p>

<h3>Will my home insurance cover water damage from a leaking window?</h3>
<p>It depends on your policy. Sudden damage is often covered, while slow leaks from wear are often not. Our post on <a href="/blog/home-insurance-broken-window-ontario">home insurance and broken windows in Ontario</a> covers what to check.</p>

<p>If water is getting in around one of your windows, <a href="/contact">book a visit</a>. The technician finds the source and gives you a written price on the spot.</p>
`,
  },
  {
    slug: "window-caulking-inside-outside-around-glass",
    title: "Window Caulking: Inside, Outside, or Around the Glass?",
    metaTitle: "Window Caulking Inside vs Outside vs Around the Glass | LuminaSky",
    metaDescription:
      "Do you need window caulking inside, outside, or around the glass? What each one does, signs it has failed, how it's done properly, and what affects the price.",
    excerpt:
      "Inside, outside, or around the glass? Each caulking joint on a window does a different job. Here is how to tell which one you need, and why the old caulking has to come out first.",
    publishedAt: "2026-11-26",
    author: "Dan",
    readingTime: 7,
    tags: ["Caulking", "Window Maintenance", "Drafts", "Water Leaks"],
    sections: [
      { id: "what-caulking-does", title: "What Window Caulking Actually Does" },
      { id: "outside", title: "Exterior Caulking" },
      { id: "inside", title: "Interior Caulking" },
      { id: "around-the-glass", title: "Caulking Around the Glass" },
      { id: "which-option", title: "Which Option Do You Need?" },
      { id: "how-we-do-it", title: "How We Do the Job" },
      { id: "cost", title: "What It Costs" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Most people only think about the caulking around their windows when something goes wrong: a draft near the frame, a stain on the drywall under the sill, or a gap you can see daylight through. By then the old caulking has usually been failing for a while.</p>

<p>This is the question we get on almost every caulking call: do I need it inside, outside, or both? And what about around the glass? Here is how we explain it to homeowners.</p>

<h2 id="what-caulking-does">What Window Caulking Actually Does</h2>

<p>Caulking fills the joints where two materials meet and don't move together. On a window there are three of those joints, and each one has a different job.</p>

<ul>
<li><strong>Outside, between the frame and the wall.</strong> This is the one that keeps rain and melting snow out of the wall cavity.</li>
<li><strong>Inside, between the frame and the trim or drywall.</strong> This one stops drafts and gives a clean finished edge.</li>
<li><strong>Around the glass, where the glass meets the sash.</strong> On many windows this joint is sealed with a glazing bead or gasket. When that seal dries out or shrinks, air and water can get in right at the glass.</li>
</ul>

<p>The caulking itself doesn't make a window energy efficient. The glass and the frame do that. What caulking does is stop air and water from going around the window instead of through it.</p>

<h2 id="outside">Exterior Caulking</h2>

<p>The outside bead takes the most abuse. Sun, rain and Toronto freeze-thaw cycles all work on it, and the frame and the wall expand and shrink at different rates every season. Even a good exterior sealant usually needs to be redone every 8 to 12 years. Cheaper caulking can crack in 3 or 4.</p>

<p>Signs the exterior caulking has failed:</p>
<ul>
<li>Cracks, gaps or pieces missing along the frame</li>
<li>Caulking that has pulled away from the brick or siding on one side</li>
<li>Water stains on the inside wall or sill after rain</li>
<li>Soft or swollen wood trim below the window</li>
</ul>

<p>If water is already getting in, exterior caulking is the first thing we check. Our post on <a href="/blog/window-seal-failure-signs">window seal failure signs</a> covers the difference between a failed caulking joint and a failed sealed unit, because they look similar from inside.</p>

<h2 id="inside">Interior Caulking</h2>

<p>Inside, the caulking sits between the window frame and the trim or drywall. It doesn't fight the weather, so it lasts longer, but it does shrink and crack as the house settles and the heating dries the air out in winter.</p>

<p>Interior caulking is mostly about drafts and appearance. If you can feel cold air along the edge of the trim on a windy day, or the old bead has yellowed and split, it's time. It's also the part that makes the window look finished after any repair or glass replacement.</p>

<h2 id="around-the-glass">Caulking Around the Glass</h2>

<p>This is the option people don't usually know to ask about. On older windows, and on many patio doors and fixed units, the seal where the glass sits in the sash dries out over time. You might see a gap between the glass and the frame, or rubber gaskets that have shrunk back from the corners.</p>

<p>Sealing that joint helps in two ways. It stops drafts at the glass edge, and it keeps water from sitting in the bottom of the sash, which is one of the things that shortens the life of a sealed glass unit. If the glass is already foggy between the panes, caulking won't fix that. The unit has to be replaced. See <a href="/foggy-windows">foggy glass repair</a> for how that works.</p>

<h2 id="which-option">Which Option Do You Need?</h2>

<p>A simple way to think about it:</p>
<ul>
<li><strong>Water getting in, or caulking visibly cracked outside:</strong> exterior at minimum.</li>
<li><strong>Drafts, cold edges, old yellowed bead inside:</strong> interior.</li>
<li><strong>Older windows, gaps at the glass, or you want the whole window sealed once and done:</strong> inside, outside and around the glass.</li>
</ul>

<p>On a recent job in Alliston with 11 openings, including a sliding door, the homeowner asked us to price both ways: inside and outside, or inside, outside and around the glass. Most people choose the full option when the windows are more than 15 years old, because the glass seals tend to be going at the same time as the frame caulking.</p>

<h2 id="how-we-do-it">How We Do the Job</h2>

<ol>
<li><strong>Remove the old caulking.</strong> New caulking over old, cracked caulking doesn't bond and fails fast. We cut out the old bead completely.</li>
<li><strong>Clean and prep the joint.</strong> Dust, old sealant and moisture are what make caulking peel. The joint has to be clean and dry.</li>
<li><strong>Backer rod where the gap is deep.</strong> Wide gaps get a foam backer rod first so the sealant is the right depth and can flex.</li>
<li><strong>The right sealant for each joint.</strong> Exterior-grade sealant outside, paintable caulking inside, and a glazing-rated sealant at the glass.</li>
<li><strong>Clean finish.</strong> One continuous, smooth bead, and we clean up before we leave.</li>
</ol>

<p>Exterior caulking needs a dry day and temperatures above freezing for the sealant to cure properly. In late fall we watch the forecast and book exterior work on mild days. Interior caulking can be done any time of year.</p>

<h2 id="cost">What It Costs</h2>

<p>Caulking is priced per opening, and the price depends on the size of the windows, how much old caulking has to come out, the height (ladder work on a second floor takes longer), and whether you add the glass seal. A full house is usually much better value per window than doing one or two at a time, because most of the cost is setup and prep.</p>

<p>If you send us a few photos of the windows and tell us how many openings there are, we can give you a price for each option. For bigger or more complicated jobs, the technician confirms everything at a <a href="/contact">$30 visit</a>, and the $30 comes off the job if you go ahead.</p>

<h2 id="faq">Common Questions</h2>

<h3>Can I just caulk over the old caulking?</h3>
<p>It's tempting, but it rarely lasts. New caulking doesn't stick well to old, dried-out sealant, so the new bead cracks along the same line within a season or two. The old bead has to come out first.</p>

<h3>Is caulking enough if my window is leaking?</h3>
<p>Sometimes. If the leak is at the frame joint, yes. If water is coming in because the drain holes in the frame are blocked, the flashing above the window is missing, or the sealed unit has failed, caulking alone won't stop it. We check where the water is actually coming from before we quote.</p>

<h3>Can caulking be done in winter?</h3>
<p>Interior caulking, yes. Exterior caulking needs a dry day above freezing, so in winter we wait for a mild stretch or plan it for spring.</p>

<h3>How long does it take?</h3>
<p>A typical house with 8 to 12 openings is usually a half day to a full day, depending on how much old caulking has to come out and how high the windows are.</p>
`,
  },
  {
    slug: "skylight-condensation-causes-fixes",
    title: "Skylight Condensation: Why It Happens and What You Can Do About It",
    metaTitle: "Skylight Condensation: Causes, Fixes, and When to Worry",
    metaDescription:
      "Moisture on your skylight isn't always a problem. Learn what causes skylight condensation, when it signals a real issue, and what repairs are available.",
    excerpt:
      "Some skylight condensation is normal in a Toronto winter. But if water is dripping or the glass is always foggy, something needs attention. Here is how to tell the difference.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 6,
    tags: ["Skylights", "Condensation", "Winter", "Home Maintenance"],
    sections: [
      { id: "why-skylights-condensate", title: "Why Skylights Get More Condensation" },
      { id: "normal-vs-problem", title: "Normal vs Problem Condensation" },
      { id: "interior-condensation", title: "Condensation on the Inside" },
      { id: "between-panes", title: "Condensation Between the Panes" },
      { id: "exterior-condensation", title: "Condensation on the Outside" },
      { id: "reducing-condensation", title: "How to Reduce Skylight Condensation" },
      { id: "when-to-replace", title: "When the Skylight Needs Repair or Replacement" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Skylights sit at the highest point of your ceiling, right where warm, moist air collects. That makes them more prone to condensation than vertical windows. In a GTA winter, some moisture on a skylight is expected. But there is a line between normal and problematic, and knowing where it is saves you from either ignoring a real issue or worrying about nothing.</p>

<h2 id="why-skylights-condensate">Why Skylights Get More Condensation</h2>

<p>Warm air rises. In any room, the warmest and most humid air ends up at ceiling height. A skylight sits in that warm, moist layer and its glass is cooled by outside air. When the glass surface temperature drops below the dew point of the indoor air, moisture condenses on it.</p>

<p>Vertical windows get this too, but skylights get it more because:</p>
<ul>
  <li>They're at the highest point, where the warmest air sits</li>
  <li>They're angled, so cold air pools against the glass more effectively</li>
  <li>They often have less airflow around them than wall-mounted windows</li>
</ul>

<h2 id="normal-vs-problem">Normal vs Problem Condensation</h2>

<p><strong>Normal:</strong> A light film of moisture on the inside of the glass on cold mornings, especially after cooking or showering. It clears as the room warms up or humidity drops.</p>

<p><strong>Problem:</strong> Water dripping from the skylight frame. Persistent fog between the panes that never clears. Staining or mould on the ceiling around the frame. Ice forming on the inside of the glass.</p>

<p>If moisture appears only on cold mornings and dries by midday, that's physics, not a defect. If it's constant, dripping, or between the panes, something needs fixing.</p>

<h2 id="interior-condensation">Condensation on the Inside</h2>

<p>Interior condensation means the humidity in your home is higher than the glass can handle at the current outdoor temperature. This is common in newer, tightly sealed homes that don't have much natural air exchange.</p>

<p>Common causes:</p>
<ul>
  <li>Cooking, showering, or running a humidifier without ventilation</li>
  <li>A bathroom or kitchen exhaust fan that vents into the attic instead of outside</li>
  <li>Drying laundry indoors</li>
  <li>A large number of houseplants in the room</li>
</ul>

<p>The fix is usually ventilation, not new glass. Run exhaust fans during and after cooking or showering. Make sure bathroom fans vent to the outdoors, not into the attic space above the skylight.</p>

<h2 id="between-panes">Condensation Between the Panes</h2>

<p>If the fog is between the two panes of glass and you can't wipe it off from either side, the sealed unit has failed. The seal that holds the gas fill between the panes has broken down, letting moisture in.</p>

<p>This won't fix itself and will get worse over time. The glass needs replacing. On a skylight, this is a <a href="/skylights">skylight glass replacement</a>, which involves removing the old sealed unit and installing a new one in the existing frame.</p>

<p>The process is similar to <a href="/foggy-windows">foggy window repair</a> on a vertical window, but skylights require working at height and ensuring the flashing and seals are watertight.</p>

<h2 id="exterior-condensation">Condensation on the Outside</h2>

<p>Moisture on the outside of the glass, usually on cool mornings, is actually a sign that your skylight is working well. It means the outer pane is staying cool because the insulating gas fill is preventing heat from escaping. This is normal and nothing to worry about.</p>

<h2 id="reducing-condensation">How to Reduce Skylight Condensation</h2>

<ol>
  <li><strong>Lower indoor humidity.</strong> Aim for 30 to 40% relative humidity in winter. A hygrometer from a hardware store costs under $20.</li>
  <li><strong>Improve ventilation.</strong> Run exhaust fans when cooking or bathing. Open a window briefly on dry days.</li>
  <li><strong>Check exhaust fan routing.</strong> Fans should vent to the outside, not into the attic. Attic-vented fans push moisture right to where the skylight sits.</li>
  <li><strong>Improve air circulation.</strong> A ceiling fan on low, running in reverse (pushing air up), helps move warm air away from the skylight surface.</li>
  <li><strong>Check the skylight frame.</strong> If the frame feels cold to the touch or has visible gaps, the insulation around it may be inadequate.</li>
</ol>

<h2 id="when-to-replace">When the Skylight Needs Repair or Replacement</h2>

<p>Call a professional if:</p>
<ul>
  <li>Water is dripping from the frame onto your ceiling</li>
  <li>The fog is between the panes (sealed unit failure)</li>
  <li>You see mould or staining around the skylight frame</li>
  <li>Ice forms on the inside of the glass regularly</li>
  <li>The flashing around the skylight on the roof shows signs of deterioration</li>
</ul>

<p>A site visit covers the inspection. The $30 fee is credited toward the repair if you go ahead. The technician can tell you whether it's a glass replacement, a flashing repair, or a ventilation issue. See our page on <a href="/skylights">skylight repair</a> for more detail.</p>

<h2 id="faq">Common Questions</h2>

<h3>Can I fix skylight condensation with a dehumidifier?</h3>
<p>A dehumidifier helps if the whole room is humid. But if the problem is localized to the skylight (poor insulation around the frame or failed seals), a dehumidifier treats the symptom, not the cause.</p>

<h3>Is skylight condensation covered by warranty?</h3>
<p>Interior condensation caused by indoor humidity is not a defect and isn't covered. Condensation between the panes from a failed seal is a defect and is covered under our 5-year seal warranty. See the <a href="/warranty">warranty page</a> for details.</p>

<h3>Should I add a skylight blind or shade?</h3>
<p>A blind can reduce condensation slightly by creating an air buffer between the room and the glass. But it can also trap moisture against the glass and make it worse. If you're adding a blind for light control, that's fine. If you're adding it specifically to fix condensation, address the humidity first.</p>
`,
  },
  {
    slug: "casement-window-seal-failure",
    title: "Casement Window Seal Failure: Signs, Causes, and What to Do",
    metaTitle: "Casement Window Seal Failure: How to Spot It and Fix It",
    metaDescription:
      "Casement windows rely on compression seals to stay airtight. Here is how to tell when those seals have failed and what your repair options are.",
    excerpt:
      "Casement windows seal differently from sliders or double-hungs. When their seals fail, you get drafts, fog, and water leaks. Here is what to check and how the repair works.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 6,
    tags: ["Casement Windows", "Window Seals", "Window Repair", "Drafts"],
    sections: [
      { id: "how-casements-seal", title: "How Casement Windows Seal" },
      { id: "signs-of-failure", title: "Signs the Seal Has Failed" },
      { id: "glass-seal-vs-frame-seal", title: "Glass Seal vs Frame Seal" },
      { id: "causes", title: "What Causes Seal Failure" },
      { id: "repair-options", title: "Repair Options" },
      { id: "can-you-diy", title: "Can You Fix It Yourself?" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Casement windows open outward on a hinge and lock by pulling the sash tight against the frame with a crank or lever mechanism. When closed, the sash compresses a gasket or weatherstrip that runs around the entire frame. That compression is what makes casement windows one of the most airtight window types. It's also why seal failure is noticeable: when the seal breaks down, the advantage disappears.</p>

<h2 id="how-casements-seal">How Casement Windows Seal</h2>

<p>A casement window has two separate sealing systems:</p>

<p><strong>The frame seal (weatherstripping):</strong> A rubber or silicone gasket runs around the perimeter of the frame. When the sash closes and the lock engages, the sash presses against this gasket, creating an airtight seal. This is what keeps air and water out.</p>

<p><strong>The glass seal:</strong> The sealed glass unit (the double or triple pane insert) has its own perimeter seal that holds the panes together and keeps the insulating gas between them. This is what prevents fogging between the panes.</p>

<p>Either seal can fail independently. The symptoms are different and so are the fixes.</p>

<h2 id="signs-of-failure">Signs the Seal Has Failed</h2>

<h3>Frame seal failure</h3>
<ul>
  <li><strong>Drafts around the edges when closed and locked.</strong> You can feel cold air coming in around the sash perimeter.</li>
  <li><strong>Water leaks during rain.</strong> Water gets past the gasket and runs down the inside of the frame.</li>
  <li><strong>Increased street noise.</strong> A broken air seal lets sound through.</li>
  <li><strong>Difficulty locking.</strong> If the gasket is swollen or deformed, the lock may not engage properly.</li>
  <li><strong>Visible damage to the gasket.</strong> Cracks, flattening, or sections that have pulled away from the frame.</li>
</ul>

<h3>Glass seal failure</h3>
<ul>
  <li><strong>Fog or haze between the panes.</strong> You can't wipe it off from inside or outside.</li>
  <li><strong>Mineral deposits between the panes.</strong> White or cloudy residue that appears over time as moisture evaporates and re-condenses.</li>
  <li><strong>Reduced insulation.</strong> The room near the window feels colder, even without a draft.</li>
</ul>

<p>If you have fog between the panes, see our detailed post on <a href="/blog/why-windows-fog-between-panes">why windows fog</a>.</p>

<h2 id="glass-seal-vs-frame-seal">Glass Seal vs Frame Seal</h2>

<p>This is an important distinction because the repair is completely different:</p>

<ul>
  <li><strong>Frame seal (weatherstripping) failure</strong> means replacing the gasket around the frame. This is a hardware repair. Most casement window weatherstripping replacements are completed on the same day, on the first visit.</li>
  <li><strong>Glass seal failure</strong> means replacing the sealed glass unit. Glass is measured first, custom-made, then installed on a return visit. The frame stays in place. This is a <a href="/glass-replacement">glass replacement</a>, not a window replacement.</li>
</ul>

<h2 id="causes">What Causes Seal Failure</h2>

<p><strong>Age.</strong> Rubber and silicone gaskets degrade over time, especially with UV exposure. Most frame seals last 10 to 20 years. Glass seals typically last 15 to 25 years.</p>

<p><strong>Hardware wear.</strong> If the <a href="/cranks">crank mechanism</a> is worn, the sash may not pull tight enough to compress the gasket fully. The seal looks fine but doesn't do its job because there isn't enough pressure.</p>

<p><strong>Frame warping.</strong> Vinyl frames can warp with extreme temperature cycles over many years. A warped frame creates uneven gaps that the gasket can't fill.</p>

<p><strong>Paint or debris.</strong> If the gasket channel is clogged with paint, caulking, or dirt, the gasket can't seat properly.</p>

<p><strong>Improper closing.</strong> Forcing the crank past its stop or slamming the window shut can damage the gasket or misalign the sash over time.</p>

<h2 id="repair-options">Repair Options</h2>

<p><strong>Replace the weatherstripping.</strong> If the gasket is cracked, flat, or missing sections, a new gasket restores the seal. The technician removes the old material, cleans the channel, and installs a matching replacement. This is a straightforward repair that usually takes under an hour per window.</p>

<p><strong>Adjust or replace the hardware.</strong> If the crank or lock isn't pulling the sash tight enough, the hardware may need adjusting or replacing. Sometimes a simple adjustment to the lock strike is all it takes. Other times the crank operator needs replacing. See our page on <a href="/cranks">window crank repair</a>.</p>

<p><strong>Replace the sealed glass unit.</strong> If the glass seal has failed (fog between panes), the glass unit is replaced. The frame and hardware stay. This is the most common casement window repair we do.</p>

<p><strong>Replace the window.</strong> If the frame is warped or damaged beyond what weatherstripping can fix, a <a href="/window-replacement">full window replacement</a> may be the better option. A technician can tell you which path makes sense for your situation.</p>

<h2 id="can-you-diy">Can You Fix It Yourself?</h2>

<p>Casement window weatherstripping is harder to replace yourself than on a sliding or double-hung window. The gasket is usually a specific profile that fits into a routed channel in the frame, and it needs to be the right size and shape to compress properly when the window closes.</p>

<p>If you can identify the exact gasket profile and source a replacement, it's doable. But if the gasket is a proprietary shape or the channel is damaged, a technician with the right parts and experience is the safer choice.</p>

<p>The $30 site visit fee covers the inspection and is credited toward the repair if you go ahead.</p>

<h2 id="faq">Common Questions</h2>

<h3>How do I know if it's the seal or the crank?</h3>
<p>Close the window and engage the lock. Run your hand around the perimeter. If you feel a draft only on one side, the crank may not be pulling the sash evenly. If the draft is all the way around, the gasket is likely the problem. If you see the sash sitting crooked in the frame, the hardware needs attention first.</p>

<h3>Can I use caulking as a temporary fix?</h3>
<p>No. Caulking the sash to the frame will seal the draft but will also glue the window shut. You won't be able to open it, and you'll damage the frame when you try to remove the caulking later.</p>

<h3>Is it worth repairing a 20-year-old casement window?</h3>
<p>Usually yes. Casement frames last 30 to 40 years if they're not warped. Replacing the glass and weatherstripping is usually a fraction of the cost of a new window and gives you another 15 to 20 years.</p>
`,
  },
  {
    slug: "window-glass-types-for-toronto-climate",
    title: "Window Glass Types for Toronto's Climate: What Works Best",
    metaTitle: "Window Glass Types for Toronto: Choosing the Right Glass for Cold Winters",
    metaDescription:
      "Choosing replacement glass in Toronto? Learn how double pane, triple pane, Low-E coatings, and gas fills perform in cold Canadian winters.",
    excerpt:
      "Not all window glass performs the same in a Toronto winter. Here is a plain-language breakdown of the glass types available and which ones are worth the upgrade.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 7,
    tags: ["Glass Types", "Energy Efficiency", "Toronto", "Glass Replacement"],
    sections: [
      { id: "why-glass-type-matters", title: "Why Glass Type Matters in Toronto" },
      { id: "single-vs-double-vs-triple", title: "Single, Double, and Triple Pane" },
      { id: "low-e-coatings", title: "Low-E Coatings" },
      { id: "gas-fills", title: "Argon and Krypton Gas Fills" },
      { id: "laminated-tempered", title: "Laminated and Tempered Glass" },
      { id: "best-choices", title: "Best Choices by Situation" },
      { id: "what-to-ask", title: "What to Ask When Getting a Quote" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>When a sealed unit fails or you're upgrading your windows, you have choices about what glass goes in. The right choice depends on where the window faces, how much noise you deal with, and what you want to spend. Here's what each option actually does and whether it's worth it in a GTA home.</p>

<h2 id="why-glass-type-matters">Why Glass Type Matters in Toronto</h2>

<p>Toronto winters are cold. Temperatures drop to -15C or lower, and the heating season runs from October through April. Windows are the thinnest part of your building envelope, and the glass makes up most of the window surface. The type of glass you choose affects how much heat you lose, how much condensation forms, how much noise gets through, and how comfortable the room feels near the window.</p>

<h2 id="single-vs-double-vs-triple">Single, Double, and Triple Pane</h2>

<p><strong>Single pane</strong> is one sheet of glass with no insulating air space. It's found in very old homes and some basement windows. Single pane provides almost no insulation and will condensate heavily in winter. If you still have single-pane windows, upgrading to double pane is one of the most cost-effective improvements you can make.</p>

<p><strong>Double pane (insulated glass unit / IGU)</strong> is the standard in Canadian homes built after the 1980s. Two panes of glass are separated by a spacer and sealed with an air or gas fill in between. The trapped air space provides insulation. Most replacement glass is double pane.</p>

<p><strong>Triple pane</strong> adds a third pane and a second air space. This provides better insulation and noise reduction but costs more and weighs more. Triple pane is worth considering for north-facing windows, bedrooms facing busy roads, or if you're replacing windows on the main floor of a home with high heating costs. Our post on <a href="/blog/double-vs-triple-pane-low-e-argon">double vs triple pane</a> compares the two in detail.</p>

<h2 id="low-e-coatings">Low-E Coatings</h2>

<p>Low-E (low emissivity) is a microscopic metallic coating applied to the glass surface. It reflects heat radiation back toward its source. In winter, it reflects your indoor heat back into the room instead of letting it escape through the glass. In summer, it reflects some solar heat away from the house.</p>

<p>There are different types of Low-E coatings:</p>
<ul>
  <li><strong>Hard-coat (pyrolytic) Low-E:</strong> Applied during manufacturing. Durable, slightly less efficient. Common on older units.</li>
  <li><strong>Soft-coat (sputtered) Low-E:</strong> Applied in a vacuum chamber. More efficient but must be inside the sealed unit (not exposed to air). This is the standard in modern sealed units.</li>
</ul>

<p>Low-E coatings are available as an upgrade when ordering a new sealed unit. They're not something that can be added to existing glass. Ask your technician whether a Low-E option makes sense for your window's orientation and your budget.</p>

<h2 id="gas-fills">Argon and Krypton Gas Fills</h2>

<p>The space between the panes can be filled with air, argon, or krypton. These gases are denser than air and transfer less heat.</p>

<ul>
  <li><strong>Air:</strong> The baseline. Adequate insulation in a double-pane unit.</li>
  <li><strong>Argon:</strong> About 30% less conductive than air. The most common upgrade because it's affordable and effective.</li>
  <li><strong>Krypton:</strong> About 40% less conductive than air. More expensive than argon and mainly used in triple-pane units where the air gap is narrower.</li>
</ul>

<p>Gas fills lose effectiveness slowly over time as small amounts of gas escape through the seal. This is normal and happens over 15 to 20 years. It's one reason sealed units eventually need replacing.</p>

<h2 id="laminated-tempered">Laminated and Tempered Glass</h2>

<p><strong>Tempered glass</strong> is heat-treated to be about four times stronger than regular glass. When it breaks, it shatters into small, blunt pieces instead of large shards. Ontario building code requires tempered glass in certain locations: within 60 cm of a door, in bathrooms, and in overhead applications. It's also a good choice for ground-floor windows for safety.</p>

<p><strong>Laminated glass</strong> has a plastic interlayer (PVB) bonded between two sheets of glass. When it breaks, the pieces stick to the plastic instead of falling out. Laminated glass also provides significantly better noise reduction than standard glass. See our post on <a href="/blog/noise-reduction-windows-toronto">noise reduction windows</a> for more on that.</p>

<p>Both are available as options when ordering a replacement sealed unit. The <a href="/blog/safety-glass-ontario-building-code">Ontario building code requirements</a> for safety glass are worth reviewing if you're replacing glass in a bathroom or near a door.</p>

<h2 id="best-choices">Best Choices by Situation</h2>

<p><strong>Standard replacement (most windows):</strong> Double pane with soft-coat Low-E and argon fill. This is the most common setup in modern GTA homes and provides a good balance of performance and cost.</p>

<p><strong>North-facing or high-heat-loss windows:</strong> Triple pane with Low-E and argon or krypton. The extra pane makes the biggest difference on windows that get no solar gain.</p>

<p><strong>Bedrooms facing a busy road:</strong> Double pane with laminated outer pane. The noise reduction from laminated glass is more noticeable than the extra pane of a triple unit in most cases.</p>

<p><strong>Bathroom or near-door locations:</strong> Double pane with tempered glass where code requires it.</p>

<p><strong>Budget-conscious:</strong> Double pane with air fill. Still a major improvement over single pane, and thousands of GTA homes use this setup without issues.</p>

<h2 id="what-to-ask">What to Ask When Getting a Quote</h2>

<ol>
  <li>What glass type are you quoting (double or triple pane)?</li>
  <li>Does the quote include Low-E coating? If so, which type?</li>
  <li>What gas fill is included (air, argon, or krypton)?</li>
  <li>Is tempered glass required for this window's location?</li>
  <li>What's the price difference for an upgrade (such as adding laminated or going to triple pane)?</li>
</ol>

<p>A good technician will explain these options during the site visit and help you choose based on your window's orientation, your priorities, and your budget. The $30 site visit fee is credited toward the job. See our <a href="/our-process">process page</a> for how a typical job works.</p>

<h2 id="faq">Common Questions</h2>

<h3>Can I upgrade my glass without replacing the window frame?</h3>
<p>Yes. If the frame and hardware are in good condition, we can measure and order a new sealed unit with better glass and install it in the existing frame. This is a <a href="/glass-replacement">glass replacement</a>, and it's usually much less expensive than a full window replacement.</p>

<h3>Is Low-E glass worth it?</h3>
<p>In Toronto's climate, Low-E provides meaningful energy savings on most windows, especially large ones and those facing north or west. The payback period depends on the size of the window and your heating costs, but for most homeowners it's a sensible upgrade when you're already replacing the glass.</p>

<h3>Does the glass type affect condensation?</h3>
<p>Yes. Better-insulating glass (Low-E, argon, triple pane) keeps the inner pane warmer, which reduces interior condensation. If condensation is a problem, upgrading the glass type can help. See our post on <a href="/blog/window-condensation-in-winter">winter window condensation</a> for more.</p>
`,
  },
  {
    slug: "when-to-replace-patio-door-rollers",
    title: "When to Replace Patio Door Rollers: Signs, Causes, and What to Expect",
    metaTitle: "Patio Door Roller Replacement: Signs It's Time and How It Works",
    metaDescription:
      "If your sliding patio door is hard to open, jumps off the track, or scrapes along the bottom, the rollers probably need replacing. Here is what to expect.",
    excerpt:
      "Patio door rollers wear out after years of use. When they do, the door gets heavy, noisy, and hard to slide. Here is how to tell if it's the rollers and what a replacement involves.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 6,
    tags: ["Patio Doors", "Door Repair", "Rollers", "Home Maintenance"],
    sections: [
      { id: "what-rollers-do", title: "What Patio Door Rollers Do" },
      { id: "signs-of-worn-rollers", title: "Signs the Rollers Are Worn" },
      { id: "causes", title: "What Wears Rollers Out" },
      { id: "adjustment-vs-replacement", title: "Adjustment vs Replacement" },
      { id: "how-replacement-works", title: "How Roller Replacement Works" },
      { id: "other-patio-door-issues", title: "Other Issues That Mimic Bad Rollers" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>A sliding patio door sits on two rollers at the bottom of the panel. These small wheels carry the full weight of the door, which can be 40 to 80 kg depending on the size and glass type. After 10 to 15 years of daily use, the rollers wear down, and the door starts to drag, stick, or jump off the track.</p>

<p>Roller replacement is one of the most common patio door repairs. It's usually faster and far less expensive than replacing the entire door.</p>

<h2 id="what-rollers-do">What Patio Door Rollers Do</h2>

<p>Each roller assembly sits in a housing at the bottom corners of the sliding panel. The wheels ride along a metal track in the door frame. An adjustment screw raises or lowers the door to control the gap between the door and the frame.</p>

<p>When the rollers are working properly, a heavy patio door glides with one finger. When they're not, it takes real effort to move it.</p>

<h2 id="signs-of-worn-rollers">Signs the Rollers Are Worn</h2>

<ul>
  <li><strong>The door is hard to slide.</strong> You have to push or pull with both hands. This is the most common sign.</li>
  <li><strong>The door scrapes or grinds.</strong> Metal-on-metal sound means the wheels are no longer rolling smoothly.</li>
  <li><strong>The door jumps off the track.</strong> Worn or flat-spotted wheels can't stay in the rail. The door tips or pops out when you open it.</li>
  <li><strong>Uneven gap at the top.</strong> If one roller is more worn than the other, the door tilts. You'll see a wider gap on one side at the top.</li>
  <li><strong>The lock doesn't align.</strong> When the door sits lower because of worn rollers, the lock and strike plate no longer line up. You have to lift the door to engage the lock.</li>
  <li><strong>Visible damage to the track.</strong> When rollers fail, the door drags directly on the track, gouging and bending it.</li>
</ul>

<p>If your door won't slide at all, see our post on <a href="/blog/sliding-patio-door-wont-slide">sliding patio doors that won't slide</a> for a fuller troubleshooting guide.</p>

<h2 id="causes">What Wears Rollers Out</h2>

<p><strong>Age and use.</strong> Rollers are made of nylon, steel, or stainless steel. Nylon wheels flat-spot over time under the weight of the door. Steel wheels corrode. Even stainless steel wears eventually.</p>

<p><strong>Dirt and debris in the track.</strong> Sand, pet hair, and grit get into the track and grind against the wheels. Regular track cleaning extends roller life significantly.</p>

<p><strong>Moisture.</strong> GTA homes with patio doors facing a yard or pool see more moisture in the track. Rust on steel rollers or the adjustment mechanism is common.</p>

<p><strong>Forcing the door.</strong> When a door starts to stick, forcing it accelerates the damage. The rollers take the stress, and the track gets gouged.</p>

<h2 id="adjustment-vs-replacement">Adjustment vs Replacement</h2>

<p>Before replacing rollers, a technician checks whether a simple adjustment will solve the problem. Each roller has a screw (usually accessed through a hole in the door frame at the bottom edge) that raises or lowers the wheel. If the wheels are still round and rolling freely, an adjustment can restore smooth operation.</p>

<p>Adjustment works when:</p>
<ul>
  <li>The door has settled slightly over time</li>
  <li>The lock is slightly misaligned</li>
  <li>The door was recently installed and needs fine-tuning</li>
</ul>

<p>Replacement is needed when:</p>
<ul>
  <li>The wheels are flat-spotted, cracked, or seized</li>
  <li>The roller housing is bent or broken</li>
  <li>The adjustment screw is stripped or corroded</li>
  <li>Adjustment doesn't improve the sliding</li>
</ul>

<h2 id="how-replacement-works">How Roller Replacement Works</h2>

<ol>
  <li><strong>Remove the door.</strong> The technician lifts the sliding panel off the track. This usually requires two people for heavy glass doors.</li>
  <li><strong>Remove the old rollers.</strong> The roller assemblies are screwed into the bottom of the door. The old ones come out.</li>
  <li><strong>Match and install new rollers.</strong> Patio door rollers aren't universal. The wheel diameter, housing width, and mounting pattern need to match the door. The technician brings common sizes or orders exact matches for less common doors.</li>
  <li><strong>Clean the track.</strong> With the door off, the track gets cleaned and inspected. If it's badly gouged, a track cap or track replacement may be needed.</li>
  <li><strong>Reinstall and adjust.</strong> The door goes back on the track, and the adjustment screws are set so the door rides at the correct height with even gaps.</li>
  <li><strong>Test the lock.</strong> The lock and strike plate alignment are checked and adjusted if needed.</li>
</ol>

<p>Most roller replacements are completed on the same day, on the first visit, as long as the right rollers are available. This is a <a href="/patio-door-repair">patio door repair</a>, not a replacement.</p>

<h2 id="other-patio-door-issues">Other Issues That Mimic Bad Rollers</h2>

<p><strong>Dirty track.</strong> Sometimes the rollers are fine but the track is full of debris. A thorough cleaning solves it.</p>

<p><strong>Bent track.</strong> If something heavy hit the bottom track or the house has settled unevenly, the track itself may be bent. Rollers can't glide on a warped rail.</p>

<p><strong>Broken lock or latch.</strong> If the door slides fine but won't lock, the problem is the lock mechanism, not the rollers.</p>

<p><strong>Weatherstripping drag.</strong> Old, swollen weatherstripping along the top or sides of the door can create friction that feels like a roller problem.</p>

<p>A technician can sort out which issue you have during a site visit. The $30 fee is credited toward any repair.</p>

<h2 id="faq">Common Questions</h2>

<h3>How long do patio door rollers last?</h3>
<p>Nylon rollers: 8 to 12 years. Steel rollers: 10 to 15 years. Stainless steel: 15 to 20 years. How often you use the door and whether the track stays clean make a big difference.</p>

<h3>Can I replace rollers myself?</h3>
<p>If you can lift the door off the track safely (it's heavy) and you can find the exact matching rollers, it's doable. The challenge is matching the roller type. There are hundreds of variations and the wrong one won't fit or won't ride properly.</p>

<h3>Is it cheaper to replace the rollers or the whole door?</h3>
<p>Roller replacement is usually a small fraction of a new patio door. If the frame, glass, and track are in good shape, rollers are the clear choice. A new patio door makes sense only when the frame is warped, the glass has failed, and the track is damaged, all at once.</p>

<h3>What about the track?</h3>
<p>If the track has minor scratches, cleaning and lubrication is enough. If it's deeply gouged or bent, a track cap (a metal cover that creates a new riding surface) or track replacement may be needed alongside the roller work.</p>

<p>Related reading: <a href="/blog/patio-door-glass-replacement-guide" class="text-accent hover:underline font-medium">Patio Door Glass Replacement Guide</a> covers what to do when the glass itself needs attention, and <a href="/blog/when-to-call-a-pro-vs-diy-window-repair" class="text-accent hover:underline font-medium">When to Call a Pro vs. DIY Window Repair</a> helps you decide whether to tackle this yourself.</p>
`,
  },
  {
    slug: "window-balance-replacement-double-hung",
    title: "Double-Hung Window Balance Replacement: Why Your Window Falls Down",
    metaTitle: "Window Balance Replacement: Fix a Double-Hung That Won't Stay Up",
    metaDescription:
      "Your double-hung window slides down on its own because the balances have failed. Learn how balances work, what breaks, and how replacement works in Toronto homes.",
    excerpt:
      "If your double-hung window won't stay open or slams shut the moment you let go, the balances have likely failed. Here is how the system works and what a repair looks like.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 6,
    tags: ["Window Hardware", "Double-Hung Windows", "Window Repair"],
    sections: [
      { id: "what-are-balances", title: "What Are Window Balances?" },
      { id: "how-they-work", title: "How They Work" },
      { id: "signs-of-failure", title: "Signs the Balances Have Failed" },
      { id: "types", title: "Types of Balance Systems" },
      { id: "replacement-process", title: "How Replacement Works" },
      { id: "diy-vs-pro", title: "Can You Do It Yourself?" },
      { id: "when-to-replace-window", title: "When the Whole Window Needs Replacing" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>A double-hung window has two sashes that slide up and down. When you raise the bottom sash it should stay where you put it. If it slowly drifts down, or drops the moment you let go, the balances are the problem.</p>

<p>Balances are the mechanism inside the frame that counterweights the sash. They wear out over time, and when they do, the fix is usually straightforward.</p>

<h2 id="what-are-balances">What Are Window Balances?</h2>

<p>Window balances are spring-loaded devices hidden inside the frame tracks. Their job is to hold the sash at whatever height you set it. They work like a counterweight: the spring tension matches the weight of the glass and frame so the sash stays put without a lock or prop.</p>

<p>Every double-hung window has two balances, one on each side.</p>

<h2 id="how-they-work">How They Work</h2>

<p>Most modern double-hung windows use one of two systems. Channel balances have a coiled spring inside a metal channel that sits in the frame track. Block-and-tackle balances use a pulley and cord arrangement with a spring. Older homes sometimes have spiral balances, which use a twisted metal rod under tension.</p>

<p>All three do the same thing: apply upward force that matches the sash weight so the window holds its position.</p>

<h2 id="signs-of-failure">Signs the Balances Have Failed</h2>

<ul>
  <li><strong>The sash drops on its own.</strong> This is the most common sign. You raise the window and it slowly slides back down.</li>
  <li><strong>The window is hard to open.</strong> A broken balance on one side makes the sash tilt and bind in the track.</li>
  <li><strong>You hear a snap or bang.</strong> A spring breaking often makes a sharp noise inside the frame.</li>
  <li><strong>The sash tilts to one side.</strong> One balance has failed while the other still works, pulling the sash crooked.</li>
  <li><strong>You're using a stick or book to prop it open.</strong> That's a failed balance.</li>
</ul>

<h2 id="types">Types of Balance Systems</h2>

<p><strong>Channel balances</strong> are the most common in vinyl windows built after the mid-1990s. The spring is inside a metal channel about 40 cm long. They clip into the frame track and attach to the bottom of the sash with a pivot shoe or cam lock.</p>

<p><strong>Block-and-tackle balances</strong> use a cord, pulley and spring inside a housing. These are common in wood and aluminum windows. They tend to last longer than channel balances because the cord distributes wear.</p>

<p><strong>Spiral balances</strong> have a twisted rod inside a tube. You'll find these in older aluminum and some vinyl windows. They adjust with a tensioning tool.</p>

<p>The type, length and weight rating have to match the original. A balance that's too weak won't hold the sash. One that's too strong makes the window hard to close.</p>

<h2 id="replacement-process">How Replacement Works</h2>

<ol>
  <li><strong>Identify the balance.</strong> The technician tilts the sash in and reads the stamp on the old balance. It shows the type, length and weight rating.</li>
  <li><strong>Remove the sash.</strong> On most double-hung windows both sashes tilt inward for removal. No tools needed from the outside.</li>
  <li><strong>Swap the balances.</strong> The old ones unclip or unscrew from the frame track. New ones go in the same way.</li>
  <li><strong>Reinstall and test.</strong> The sash goes back in and the technician checks that it holds at every position.</li>
</ol>

<p>Most balance replacements are completed on the first visit, the same day. The job usually takes 15 to 30 minutes per window. It's a <a href="/cranks">window hardware repair</a>, so the approach is similar to crank and hinge work.</p>

<h2 id="diy-vs-pro">Can You Do It Yourself?</h2>

<p>If you can identify the exact balance type, length and weight rating, and you can order the right part, it's a manageable project. The tricky part is getting the match right. Balances aren't universal. A balance that's 2 cm too short or rated for the wrong weight won't work properly.</p>

<p>If you're not sure what you're looking at, a technician can identify it in a few minutes during a site visit. The $30 visit fee is credited toward the repair if you go ahead.</p>

<h2 id="when-to-replace-window">When the Whole Window Needs Replacing</h2>

<p>Balance failure alone almost never means you need a new window. But if the frame is warped, the tracks are worn smooth, or the sash itself is cracked, a <a href="/window-replacement">full window replacement</a> might make more sense. A technician can tell you which option is worth the money.</p>

<h2 id="faq">Common Questions</h2>

<h3>How long do window balances last?</h3>
<p>Typically 15 to 25 years, depending on how often the window is opened and the quality of the original parts.</p>

<h3>Can I replace just one balance?</h3>
<p>You can, but we recommend replacing both at the same time. If one has failed, the other is usually close behind.</p>

<h3>Do you carry the parts or order them?</h3>
<p>We carry the most common sizes. Unusual sizes or older types may need to be ordered, which adds a few days.</p>

<h3>Is there a warranty?</h3>
<p>Yes. Hardware repairs carry a 1-year warranty on parts and labour. Details are on our <a href="/warranty">warranty page</a>.</p>

<p>Related reading: <a href="/blog/casement-window-repair-hinges-cranks-locks" class="text-accent hover:underline font-medium">Casement Window Repair: Hinges, Cranks and Locks</a> covers similar hardware issues on casement windows, and our <a href="/blog/when-to-call-a-pro-vs-diy-window-repair" class="text-accent hover:underline font-medium">DIY vs pro guide</a> can help you decide whether to tackle this one yourself.</p>
`,
  },
  {
    slug: "noise-reduction-windows-toronto",
    title: "How Windows Reduce Noise: A Toronto Homeowner's Guide to Quieter Rooms",
    metaTitle: "Noise Reduction Windows: How to Make Your Toronto Home Quieter",
    metaDescription:
      "Street noise keeping you up? Learn how window glass type, thickness, and seals affect sound reduction. Practical options for Toronto homeowners.",
    excerpt:
      "If traffic, construction or neighbour noise is getting through your windows, the glass and seals are usually the weak point. Here is what actually works to reduce it.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 7,
    tags: ["Glass Replacement", "Noise Reduction", "Home Improvement", "Toronto"],
    sections: [
      { id: "how-sound-gets-in", title: "How Sound Gets Through a Window" },
      { id: "stc-ratings", title: "STC Ratings Explained" },
      { id: "glass-options", title: "Glass Options for Noise Reduction" },
      { id: "seals-matter", title: "Why Seals and Weatherstripping Matter" },
      { id: "what-helps-most", title: "What Helps Most for the Money" },
      { id: "what-doesnt-help", title: "What Doesn't Help Much" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Living near a busy road in Toronto, Mississauga or anywhere in the GTA means dealing with noise. If you can hear traffic clearly when the windows are closed, the windows are the weakest link in the wall. Here's what you can do about it, starting with the options that give you the most improvement.</p>

<h2 id="how-sound-gets-in">How Sound Gets Through a Window</h2>

<p>Sound is vibration. It hits the outer pane, the pane vibrates, and the vibration transfers through the air gap to the inner pane and into your room. Thinner glass vibrates more easily. A smaller air gap transfers more energy. And any gap in the seal lets sound bypass the glass entirely.</p>

<p>Three things control how much noise a window blocks:</p>
<ul>
  <li><strong>Glass thickness and type.</strong> Thicker and denser glass vibrates less.</li>
  <li><strong>Air space between panes.</strong> A wider gap reduces sound transfer.</li>
  <li><strong>Seal integrity.</strong> Any air leak is a noise leak.</li>
</ul>

<h2 id="stc-ratings">STC Ratings Explained</h2>

<p>Sound Transmission Class (STC) is the standard rating for how much sound a barrier blocks. Higher is better. For context:</p>

<ul>
  <li>A single pane of glass: STC 26 to 28</li>
  <li>A standard double-pane sealed unit: STC 28 to 32</li>
  <li>A double-pane unit with laminated glass: STC 34 to 38</li>
  <li>A triple-pane unit with laminated glass: STC 38 to 42</li>
  <li>An insulated wall without windows: STC 45 to 50</li>
</ul>

<p>Every 3-point increase in STC roughly cuts the perceived loudness in half. Going from STC 28 to STC 34 is a noticeable difference.</p>

<h2 id="glass-options">Glass Options for Noise Reduction</h2>

<p><strong>Laminated glass</strong> is the single biggest upgrade for noise. It has a layer of plastic (PVB) bonded between two sheets of glass. That plastic layer dampens vibration the way a shock absorber dampens bumps. Laminated glass on the outer pane of a sealed unit can raise the STC by 4 to 6 points over standard glass of the same thickness.</p>

<p><strong>Thicker glass</strong> helps too. A 5 mm outer pane blocks more sound than a 3 mm pane. Using different thicknesses on the inner and outer pane (for example, 5 mm outside and 3 mm inside) also helps because the two panes vibrate at different frequencies, reducing resonance.</p>

<p><strong>Triple pane</strong> adds another barrier. The extra pane and air gap give you a few more STC points, plus better insulation. The trade-off is weight and cost.</p>

<p>If your current sealed unit has failed (fog between the panes), replacing it with a laminated option is a good opportunity to upgrade. See our page on <a href="/foggy-windows">foggy window repair</a> for how that process works.</p>

<h2 id="seals-matter">Why Seals and Weatherstripping Matter</h2>

<p>Even the best glass won't help if sound is leaking around the edges. Worn weatherstripping, cracked caulking, or a sash that doesn't close tightly can let in as much noise as an open window.</p>

<p>Before upgrading the glass, check whether your windows close firmly and whether you can feel a draft around the frame. Fixing the seal is cheaper than replacing the glass and sometimes solves the problem on its own.</p>

<h2 id="what-helps-most">What Helps Most for the Money</h2>

<ol>
  <li><strong>Fix air leaks first.</strong> Weatherstripping and caulking cost the least and can make a surprising difference.</li>
  <li><strong>Upgrade to laminated glass.</strong> When your sealed unit needs replacing anyway, choosing laminated on the outer pane adds noise reduction at a modest extra cost. This is a <a href="/glass-replacement">glass replacement</a> job, not a full window replacement.</li>
  <li><strong>Consider asymmetric pane thickness.</strong> Ask about different thicknesses on inner and outer panes when ordering a new sealed unit.</li>
  <li><strong>Triple pane if the budget allows.</strong> Best performance, but the biggest investment. Our post on <a href="/blog/double-vs-triple-pane-low-e-argon">double vs triple pane</a> compares the trade-offs.</li>
</ol>

<h2 id="what-doesnt-help">What Doesn't Help Much</h2>

<ul>
  <li><strong>Window film.</strong> Plastic film kits add almost no mass and don't meaningfully reduce noise.</li>
  <li><strong>Argon or krypton gas.</strong> These improve insulation but have minimal effect on sound transmission.</li>
  <li><strong>Curtains alone.</strong> Heavy curtains can soften high-frequency sound slightly, but they don't block traffic rumble.</li>
</ul>

<h2 id="faq">Common Questions</h2>

<h3>Can you replace just the glass with a quieter option?</h3>
<p>Yes. If your frame and hardware are in good shape, we can measure and order a new sealed unit with laminated or thicker glass and install it in the existing frame.</p>

<h3>How much quieter will it be?</h3>
<p>Going from standard double-pane to laminated double-pane typically drops perceived noise by about half. The exact result depends on the noise source and the rest of the wall.</p>

<h3>Is it worth it for a bedroom?</h3>
<p>Bedrooms facing a road are where most people notice the biggest improvement. Even a moderate STC gain makes it easier to sleep with the window closed.</p>

<h3>What does a site visit involve?</h3>
<p>The technician checks your current glass type, frame condition, and seal integrity, then recommends the best option for your situation. The $30 visit fee is credited toward the job if you go ahead.</p>
`,
  },
  {
    slug: "how-to-choose-glass-repair-company-toronto",
    title: "How to Choose a Glass Repair Company in Toronto: What to Look For",
    metaTitle: "Choosing a Glass Repair Company in Toronto: What to Look For",
    metaDescription:
      "Not sure which glass repair company to call? Here are the signs of a reliable operator and the red flags to watch for in the Toronto area.",
    excerpt:
      "There are plenty of glass companies in the GTA. Some are great, some aren't. Here is how to tell the difference before you book, based on what matters most.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 6,
    tags: ["Glass Repair", "Toronto", "Hiring Tips"],
    sections: [
      { id: "why-it-matters", title: "Why the Company Matters as Much as the Price" },
      { id: "licensing-insurance", title: "Licensing and Insurance" },
      { id: "written-quotes", title: "Written Quotes Before Work Starts" },
      { id: "warranty", title: "Warranty That's in Writing" },
      { id: "red-flags", title: "Red Flags to Watch For" },
      { id: "good-signs", title: "Signs You've Found a Good One" },
      { id: "questions-to-ask", title: "Questions to Ask Before You Book" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>When a window breaks or fogs up, most people search online and call the first company that shows up. That works out sometimes, but not always. A little homework up front saves you from a bad job, a surprise bill, or a warranty that doesn't exist.</p>

<p>Here's what to check before you let someone work on your windows.</p>

<h2 id="why-it-matters">Why the Company Matters as Much as the Price</h2>

<p>Glass repair isn't complicated, but it has to be done right. A sealed unit that's the wrong size, poorly shimmed, or installed with damaged seals will fail again within a year or two. A crank or hinge installed with the wrong screws will strip out. And if something goes wrong, you want a company that will come back and fix it.</p>

<p>The cheapest quote isn't always the best value. What matters is getting the job done correctly the first time, with a clear price and a real warranty behind it.</p>

<h2 id="licensing-insurance">Licensing and Insurance</h2>

<p>In Ontario, glass repair companies should carry general liability insurance. This protects you if something is damaged during the work. Ask for proof of insurance before the job starts. A reputable company will provide it without hesitation.</p>

<p>Check whether the company has a registered business in Ontario. A quick search on the Ontario Business Registry can confirm this.</p>

<h2 id="written-quotes">Written Quotes Before Work Starts</h2>

<p>A trustworthy company gives you a written quote before any work begins. That means a fixed price on paper (or on screen), not a verbal estimate that changes once the work is underway.</p>

<p>The quote should include:</p>
<ul>
  <li>Exactly what work will be done</li>
  <li>The type and size of glass or parts being used</li>
  <li>The total price, including labour</li>
  <li>The timeline for completion</li>
  <li>Warranty terms</li>
</ul>

<p>If a company won't put the price in writing before starting, that's a reason to call someone else. You can see how our quoting works on the <a href="/our-process">our process page</a>.</p>

<h2 id="warranty">Warranty That's in Writing</h2>

<p>Ask what the warranty covers, how long it lasts, and whether it's written down. A verbal promise isn't a warranty.</p>

<p>A reasonable warranty for glass work covers:</p>
<ul>
  <li>The seal on the new glass unit (look for at least 2 years, ideally longer)</li>
  <li>Workmanship on the installation</li>
  <li>Hardware repairs for at least a year</li>
</ul>

<p>Exclusions are normal. No warranty covers vandalism or impact damage, because those aren't defects. But the coverage and exclusions should be spelled out. Check our <a href="/warranty">warranty page</a> for an example of what clear terms look like.</p>

<h2 id="red-flags">Red Flags to Watch For</h2>

<ul>
  <li><strong>No written quote.</strong> Verbal estimates that change after work starts are the most common complaint.</li>
  <li><strong>Pressure to replace the whole window.</strong> If only the glass or hardware is the problem, a good company should offer a repair option first.</li>
  <li><strong>No physical address or business registration.</strong> This makes it hard to follow up if something goes wrong.</li>
  <li><strong>Cash-only payment.</strong> Legitimate businesses accept card or e-transfer and provide receipts.</li>
  <li><strong>Vague warranty.</strong> "We stand behind our work" isn't a warranty. Specific terms and durations are.</li>
  <li><strong>They want payment before the work is done.</strong> A deposit for materials is reasonable for large jobs. Full payment up front is not standard.</li>
</ul>

<h2 id="good-signs">Signs You've Found a Good One</h2>

<ul>
  <li><strong>They answer the phone or reply quickly.</strong> Responsiveness before the job usually predicts responsiveness after.</li>
  <li><strong>They explain what's wrong and what the options are.</strong> A good technician teaches you, not just sells to you.</li>
  <li><strong>They have real Google reviews from local customers.</strong> Read the recent ones. Look for specific details about the work, not generic praise.</li>
  <li><strong>They tell you when a repair isn't worth it.</strong> A company that sometimes recommends against their own service is being honest.</li>
  <li><strong>The quote comes on the spot.</strong> After measuring, you should know the price before the technician leaves.</li>
</ul>

<h2 id="questions-to-ask">Questions to Ask Before You Book</h2>

<ol>
  <li>Are you insured? Can you provide proof?</li>
  <li>Will I get a written quote before work starts?</li>
  <li>What's included in the price?</li>
  <li>What's the warranty, and is it written?</li>
  <li>Do you repair the glass or will you try to sell me a new window?</li>
  <li>What's the timeline from measurement to installation?</li>
  <li>Is there a site visit fee, and is it credited toward the work?</li>
</ol>

<h2 id="faq">Common Questions</h2>

<h3>Should I get multiple quotes?</h3>
<p>It's reasonable to get two or three. But compare the scope of work, not just the bottom number. A lower quote that skips necessary steps costs more in the long run.</p>

<h3>How do I check Google reviews?</h3>
<p>Search the company name on Google Maps. Look at the total number of reviews, the average rating, and read 5 or 6 of the most recent ones. Pay attention to how the company responds to any negative reviews.</p>

<h3>What if I'm not sure whether I need repair or replacement?</h3>
<p>A good company will tell you honestly. If a technician pushes replacement without explaining why repair won't work, get a second opinion. Our guide on <a href="/blog/replace-vs-repair-windows-toronto" class="text-accent hover:underline font-medium">repair vs replacement in Toronto</a> breaks down when each option makes sense, and <a href="/blog/will-glass-company-sell-me-new-windows" class="text-accent hover:underline font-medium">will a glass company try to sell me new windows?</a> tackles this exact concern.</p>
`,
  },
  {
    slug: "window-weatherstripping-replacement-guide",
    title: "Window Weatherstripping Replacement: When and How to Fix Drafty Windows",
    metaTitle: "Window Weatherstripping Replacement: Fix Drafts and Save Energy",
    metaDescription:
      "Drafty windows waste energy and let in noise. Learn how to tell if your weatherstripping needs replacing, the types used in GTA homes, and when to call a pro.",
    excerpt:
      "If you feel cold air around closed windows in winter, the weatherstripping is probably worn out. Here is how to check, what the options are, and when it means a bigger problem.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 7,
    tags: ["Window Repair", "Weatherstripping", "Energy Efficiency", "Drafts"],
    sections: [
      { id: "what-is-it", title: "What Weatherstripping Does" },
      { id: "signs-of-failure", title: "Signs It Needs Replacing" },
      { id: "types", title: "Types of Window Weatherstripping" },
      { id: "diy", title: "DIY Replacement" },
      { id: "when-to-call-pro", title: "When to Call a Professional" },
      { id: "when-window-is-done", title: "When the Window Itself Is the Problem" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Weatherstripping is the flexible material around the edges of your window sash that seals the gap when the window is closed. It keeps cold air out in winter, hot air out in summer, and reduces dust and noise year-round. When it wears out, you feel it.</p>

<h2 id="what-is-it">What Weatherstripping Does</h2>

<p>Every window has a small gap between the moving sash and the fixed frame. Without weatherstripping, air flows through that gap freely. The stripping compresses when the window closes and springs back when it opens, creating a seal that blocks air movement.</p>

<p>Good weatherstripping also keeps out water, insects, and street noise. It's one of those parts you never think about until it stops working.</p>

<h2 id="signs-of-failure">Signs It Needs Replacing</h2>

<ul>
  <li><strong>You feel a draft near closed windows.</strong> Hold a lighter or thin piece of tissue near the window edges on a windy day. If it flickers or moves, air is getting through.</li>
  <li><strong>You can see daylight around the sash.</strong> Close the window and look at the edges from inside with the lights off during the day.</li>
  <li><strong>The stripping is cracked, flattened, or missing pieces.</strong> Open the window and look at the strips along the sash and frame. If they're hard, crumbly, or compressed flat, they're done.</li>
  <li><strong>Your heating bills have gone up.</strong> Drafty windows make your furnace work harder. In a GTA winter, the difference is noticeable.</li>
  <li><strong>You hear more outside noise than you used to.</strong> Worn seals let sound in just like they let air in.</li>
  <li><strong>Condensation on the inside of the glass.</strong> When warm indoor air meets cold glass near a draft, moisture forms. If you're seeing condensation that wasn't there before, check the seals. Our post on <a href="/blog/window-condensation-in-winter">winter condensation</a> explains the full picture.</li>
</ul>

<h2 id="types">Types of Window Weatherstripping</h2>

<p><strong>Pile weatherstripping</strong> (also called fin seal) is a strip of dense fibres, often with a plastic fin in the centre. It's common on sliding windows and double-hung windows in the track channels. It wears out fastest because the sash slides against it every time you open the window.</p>

<p><strong>Compression strips</strong> are foam or rubber strips that compress when the window closes. They're common on casement and awning windows. They last longer than pile strips because they're compressed and released rather than rubbed.</p>

<p><strong>Bulb seals</strong> are tubular rubber or silicone strips. They're found on higher-end windows and provide a tight seal with less force needed to close the window.</p>

<p><strong>V-strip (tension strip)</strong> is a folded metal or plastic strip that springs open to fill a gap. It's durable and common as an aftermarket fix on older windows.</p>

<h2 id="diy">DIY Replacement</h2>

<p>Some types of weatherstripping are straightforward to replace yourself:</p>

<ol>
  <li><strong>Identify the type.</strong> Take a close-up photo or pull off a small piece to match at the hardware store.</li>
  <li><strong>Measure the length.</strong> Measure each side where the stripping runs. Buy 10% extra.</li>
  <li><strong>Remove the old material.</strong> Pull it out of the channel or peel it off. Clean any residue.</li>
  <li><strong>Install the new stripping.</strong> Press it into the channel or apply the adhesive backing. Cut to length with scissors or a utility knife.</li>
  <li><strong>Test the window.</strong> Close it and check that it seals firmly without being too tight to operate.</li>
</ol>

<p>Adhesive-backed foam tape from a hardware store works for a temporary fix but typically lasts only one or two seasons. For a longer-lasting repair, match the original type.</p>

<h2 id="when-to-call-pro">When to Call a Professional</h2>

<p>Some weatherstripping is built into the sash or frame and can't be replaced without disassembling the window. If the stripping is inside a groove in the sash rail, or if the window uses a proprietary seal design, a technician with the right parts is the safer route.</p>

<p>It's also worth calling a pro if:</p>
<ul>
  <li>You can't identify the type or find a match</li>
  <li>The sash doesn't close properly even with new stripping (the frame may be warped)</li>
  <li>Several windows need attention at once</li>
  <li>You want it done once and done right</li>
</ul>

<p>A site visit covers the inspection. The $30 fee is credited toward the repair if you go ahead.</p>

<h2 id="when-window-is-done">When the Window Itself Is the Problem</h2>

<p>Sometimes the draft isn't about the weatherstripping at all. If the frame is warped, the sash doesn't sit square in the opening anymore, and no amount of new stripping will seal it. This happens with older wood windows that have absorbed moisture over the years, or vinyl windows that have been in direct sun for decades.</p>

<p>If the glass is also foggy between the panes, that's a separate issue: the sealed unit has failed. That's a <a href="/foggy-windows">foggy glass repair</a>, which replaces the glass without touching the frame.</p>

<p>If the frame is warped and the glass has failed, a <a href="/window-replacement">full window replacement</a> is usually the most practical option. A technician can tell you which situation you're in.</p>

<h2 id="faq">Common Questions</h2>

<h3>How long does weatherstripping last?</h3>
<p>Pile stripping on sliding windows: 5 to 10 years. Compression strips on casement windows: 10 to 15 years. Bulb seals: 15 to 20 years. Sun exposure and frequency of use shorten the lifespan.</p>

<h3>Does weatherstripping help with noise?</h3>
<p>Yes. A tight seal blocks airborne sound. If you can fix the draft, you'll usually notice less street noise too. For more on that topic, see our post on <a href="/blog/noise-reduction-windows-toronto">noise reduction windows</a>.</p>

<h3>Can I add weatherstripping to windows that don't have it?</h3>
<p>You can add adhesive V-strip or foam tape to most windows. It won't perform as well as factory-installed stripping, but it's better than nothing.</p>

<h3>Is this covered by warranty?</h3>
<p>Weatherstripping is a wear item and isn't typically covered by window warranties. Our hardware repair warranty covers our workmanship for 1 year. See the <a href="/warranty">warranty page</a> for details.</p>
`,
  },
  {
    slug: "vinyl-window-glass-replacement",
    title: "Replacing the Glass in a Vinyl Window: How It Works and What It Costs",
    metaTitle: "Vinyl Window Glass Replacement: How It Works and What Affects the Price",
    metaDescription:
      "Your vinyl window frame is fine but the glass is foggy or cracked. Here's how glass-only replacement works, how long it takes, and what drives the price.",
    excerpt:
      "Most vinyl windows in GTA homes are built so the glass can come out without touching the frame. If the frame is solid and only the glass failed, you usually don't need a new window at all.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 6,
    tags: ["Glass Replacement", "Vinyl Windows", "Foggy Glass"],
    sections: [
      { id: "can-it-be-done", title: "Can You Replace Just the Glass?" },
      { id: "how-vinyl-holds-glass", title: "How a Vinyl Window Holds Its Glass" },
      { id: "when-glass-only", title: "When Glass-Only Makes Sense" },
      { id: "when-not", title: "When It Doesn't" },
      { id: "how-it-works", title: "How the Job Goes, Step by Step" },
      { id: "price", title: "What Affects the Price" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>A lot of people assume that when the glass in a vinyl window fogs up or cracks, the whole window has to go. Usually it doesn't. The glass in most vinyl windows is a separate part that sits inside the frame, and it can be swapped on its own.</p>

<p>Here's how that works, when it's the right call, and what changes the price.</p>

<h2 id="can-it-be-done">Can You Replace Just the Glass?</h2>

<p>In most cases, yes. What looks like "the glass" is really a sealed unit: two or three panes held apart by a spacer and sealed around the edge. That unit is made to a size, and a new one can be made to the same size and fitted into your existing frame.</p>

<p>The frame, the trim inside and out, the caulking around the house and the hardware all stay where they are. Nothing gets torn out of the wall.</p>

<h2 id="how-vinyl-holds-glass">How a Vinyl Window Holds Its Glass</h2>

<p>Vinyl windows hold the sealed unit in place with thin strips called glazing stops (or glazing beads). They snap into a channel around the glass. On most windows they're on the inside, on some they're outside.</p>

<p>To change the glass, the technician pops the stops out, lifts out the old unit, sets the new one on small blocks so it sits level, and snaps the stops back in. On a casement or awning window, the glass is in the sash that opens. On a sliding window, the sash usually lifts out first. On a fixed picture window, the unit comes out of the main frame.</p>

<h2 id="when-glass-only">When Glass-Only Makes Sense</h2>

<ul>
  <li><strong>Fog or moisture between the panes.</strong> The seal failed. The frame is almost never the problem. Our page on <a href="/foggy-windows">foggy windows</a> explains why cleaning won't fix it.</li>
  <li><strong>A cracked pane.</strong> Whether something hit it or it cracked from heat stress, the frame is usually fine.</li>
  <li><strong>You want different glass.</strong> Low-E, tinted, frosted for a bathroom, or tempered for safety, in the same frame.</li>
  <li><strong>The window opens, closes and locks properly.</strong> If the frame and hardware work, there's no reason to pay for them again.</li>
</ul>

<h2 id="when-not">When It Doesn't</h2>

<p>Glass-only isn't the answer every time. A new window can make more sense when:</p>

<ul>
  <li>The vinyl frame is cracked, warped or brittle, or the corners have split.</li>
  <li>Water is getting in around the frame itself, not through the glass.</li>
  <li>Several windows in the house are failing at once and the frames are near the end of their life too.</li>
  <li>The window is a style that's hard to make glass for, like some older units with an unusual profile.</li>
</ul>

<p>A technician can usually tell within a few minutes which one you're dealing with. We'd rather fix a window than sell you one, and we'll tell you plainly if a repair isn't worth it. More on that in <a href="/blog/will-glass-company-sell-me-new-windows">will a glass company try to sell me new windows</a>.</p>

<h2 id="how-it-works">How the Job Goes, Step by Step</h2>

<ol>
  <li><strong>Visit and measure.</strong> The technician checks the frame, measures the glass to the eighth of an inch, notes the thickness and any grilles, and gives you a written price on the spot.</li>
  <li><strong>The unit is made.</strong> Sealed units are built to order, so there's a wait between measuring and install. You get the timeline with the price.</li>
  <li><strong>Install.</strong> The old unit comes out, the new one goes in, the stops go back. For a typical window it's a short visit, and the opening is only exposed for a few minutes.</li>
</ol>

<h2 id="price">What Affects the Price</h2>

<p>We don't quote an exact number over the phone, because the price depends on things we need to see. The main ones:</p>

<ul>
  <li><strong>Size.</strong> Bigger glass costs more to make and is harder to handle.</li>
  <li><strong>Double or triple pane.</strong> Triple costs more.</li>
  <li><strong>Glass type.</strong> Low-E, argon, tempered, laminated, frosted or tinted all change the cost.</li>
  <li><strong>Grilles.</strong> Grilles between the panes have to be matched and built into the new unit.</li>
  <li><strong>Access.</strong> A second-floor window or one that needs the sash taken out adds time.</li>
</ul>

<p>For real price ranges from GTA jobs, see our <a href="/glass-replacement-cost-report-2026">glass replacement cost report</a>. The visit is $30, and it's credited to the job if you go ahead.</p>

<h2 id="faq">Common Questions</h2>

<h3>Will the new glass match my other windows?</h3>
<p>We match the thickness, grilles and look of the original as closely as we can. Clear glass looks the same. If your old glass has a coating that's faded over the years, the new unit can look slightly brighter at first.</p>

<h3>Is there a warranty on the new glass?</h3>
<p>Yes. New sealed units are covered for 2 years on parts and labour, then up to 5 years on the glass itself. The details are on our <a href="/warranty">warranty page</a>.</p>

<h3>Can it be done in winter?</h3>
<p>Yes. The window is only open for a few minutes during the swap. See <a href="/blog/replace-window-glass-in-winter">replacing window glass in winter</a>.</p>

<h3>Do I need to be home?</h3>
<p>For the measuring visit, yes. For the install, someone needs to let the technician in.</p>

<p>If your vinyl window has foggy or cracked glass, send us a photo or book a visit and we'll tell you whether the glass alone will do it.</p>
`,
  },
  {
    slug: "casement-window-repair-hinges-cranks-locks",
    title: "Casement Window Repair: Hinges, Cranks and Locks Explained",
    metaTitle: "Casement Window Repair: Fixing Hinges, Cranks and Locks",
    metaDescription:
      "Casement window sagging, hard to crank or not locking? Here's which part usually failed, how to check it yourself, and what the repair involves.",
    excerpt:
      "A casement window has three parts that do most of the work: the hinges, the crank and the lock. When one of them goes, the window sags, sticks or won't close tight. Each one can be replaced without touching the glass or the frame.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 6,
    tags: ["Window Hardware", "Window Cranks", "Casement Windows"],
    sections: [
      { id: "three-parts", title: "The Three Parts That Wear Out" },
      { id: "hinges", title: "Hinges: When the Window Sags or Drags" },
      { id: "crank", title: "The Crank: When It Spins or Grinds" },
      { id: "locks", title: "Locks: When It Won't Close Tight" },
      { id: "check-yourself", title: "A Two-Minute Check You Can Do" },
      { id: "repair-or-replace", title: "Repair or a New Window?" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Casement windows are the ones that crank open from the side, like a door. They seal tightly and they're common in GTA homes built in the last 30 years. They also have more moving parts than a sliding window, and those parts wear out.</p>

<p>The good news is that almost every casement problem comes down to one of three pieces of hardware, and each one can be replaced on its own.</p>

<h2 id="three-parts">The Three Parts That Wear Out</h2>

<ul>
  <li><strong>The hinges</strong> (also called arms or tracks), at the top and bottom of the sash. They carry the weight of the glass.</li>
  <li><strong>The crank</strong> (the operator), the gearbox and handle that push the window open and pull it closed.</li>
  <li><strong>The locks</strong>, the lever or handle that pulls the sash tight against the frame when it's closed.</li>
</ul>

<h2 id="hinges">Hinges: When the Window Sags or Drags</h2>

<p>The hinges hold the full weight of the sash every time it opens. Over the years the rivets loosen, the sliding shoe wears down, or the arm bends. Signs it's the hinges:</p>

<ul>
  <li>The bottom corner of the sash drags on the frame when you close it.</li>
  <li>There's a visible gap at the top or bottom when the window is shut.</li>
  <li>The window opens crooked or wobbles when it's open.</li>
  <li>You hear a scrape or a click from the top or bottom track.</li>
</ul>

<p>A worn hinge also puts extra strain on the crank, which is why the two often fail together. Hinges come in many lengths and styles, so the technician matches the old one before replacing it.</p>

<h2 id="crank">The Crank: When It Spins or Grinds</h2>

<p>The crank has small gears inside. When they strip, you get a handle that turns but doesn't move the window, or one that grinds and jumps. Our guide on <a href="/blog/window-crank-repair-toronto">why window cranks break</a> goes deeper, but the short version:</p>

<ul>
  <li><strong>Handle spins freely:</strong> the handle itself may be stripped, which is a cheap fix. Or the gears inside the operator are gone.</li>
  <li><strong>Grinds or jumps:</strong> worn gears, usually from forcing the window when it was stuck or frozen.</li>
  <li><strong>Window opens partway and stops:</strong> often the arm has come off its track on the sash.</li>
</ul>

<p>See <a href="/cranks">our crank repair page</a> for how we match operators to your window brand.</p>

<h2 id="locks">Locks: When It Won't Close Tight</h2>

<p>On most casements, closing the crank isn't enough. The lock pulls the sash in the last little bit so the weatherstripping seals. If the lock is worn or out of line, you'll notice:</p>

<ul>
  <li>A draft or whistle around the window even when it's shut.</li>
  <li>The lock handle won't move, or moves but doesn't pull anything.</li>
  <li>Frost or water on the inside edge of the frame in winter.</li>
</ul>

<p>Sometimes the lock is fine and the sash is sagging, so the lock's hooks miss the keepers on the sash. That's a hinge problem showing up as a lock problem.</p>

<h2 id="check-yourself">A Two-Minute Check You Can Do</h2>

<ol>
  <li>Open the window fully and look at the top and bottom tracks. Are any rivets loose, any arms bent, any pieces cracked?</li>
  <li>Close it slowly. Watch where it touches the frame first.</li>
  <li>With it closed, check for daylight around the edges.</li>
  <li>Work the lock. Does it pull the sash in, or just flop?</li>
  <li>Take a photo of the crank, the tracks and the lock. That's usually enough for us to tell you what it needs.</li>
</ol>

<p>Don't force a stuck casement in winter. If it's frozen shut, wait for it to thaw. Forcing it is one of the most common ways cranks get stripped.</p>

<h2 id="repair-or-replace">Repair or a New Window?</h2>

<p>If the glass is clear and the frame is solid, a hardware repair is almost always the better deal. New hinges, a new crank or new locks bring the window back to working like it should, for a small part of the cost of a new window.</p>

<p>A new window is worth thinking about when the frame itself is rotted, cracked or bent, so new hardware has nothing solid to screw into. Our article on <a href="/blog/window-repair-vs-replacement-toronto">window repair vs replacement</a> covers that decision.</p>

<h2 id="faq">Common Questions</h2>

<h3>Do I need the exact same brand of parts?</h3>
<p>Not always, but the part has to match the size and mounting of the old one. Many window brands share hardware, and there are universal replacements for most of them. The technician checks before installing.</p>

<h3>Is there a warranty on hardware repairs?</h3>
<p>Yes, hardware repairs come with a 1-year warranty on parts and labour. See our <a href="/warranty">warranty page</a>.</p>

<h3>Can you fix just one window?</h3>
<p>Yes. One crank or one set of hinges is a normal job for us.</p>

<h3>Should I oil the hinges?</h3>
<p>A dry silicone spray on the tracks once a year helps. Avoid heavy grease, which collects dirt.</p>

<p>If your casement sags, sticks or won't lock, send us a photo of the hardware or book a visit, and we'll tell you which part failed.</p>
`,
  },
  {
    slug: "cost-to-fix-condensation-double-glazed-windows",
    title: "How Much Does It Cost to Fix Condensation in Double Glazed Windows?",
    metaTitle: "Cost to Fix Condensation Between Double Glazed Window Panes",
    metaDescription:
      "Moisture between the panes of a double glazed window means the seal failed. Here's what the fix actually is, what changes the price, and what to skip.",
    excerpt:
      "If the fog is between the two panes, wiping won't touch it. The seal has failed, and the fix is a new sealed unit in your existing frame. Here's what that involves and what makes the price go up or down.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 5,
    tags: ["Foggy Glass", "Pricing", "Sealed Units"],
    sections: [
      { id: "where-is-it", title: "First: Where Is the Condensation?" },
      { id: "what-the-fix-is", title: "What the Fix Actually Is" },
      { id: "defogging", title: "What About Defogging Services?" },
      { id: "what-changes-price", title: "What Changes the Price" },
      { id: "keep-cost-down", title: "Ways to Keep the Cost Down" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>It's one of the most common questions we get. The window looks cloudy or has droplets you can't reach, and you want to know what it'll cost before you call anyone.</p>

<p>The honest answer is that it depends on the size and type of glass. But we can tell you exactly what the fix is and what moves the price, so you know what you're paying for.</p>

<h2 id="where-is-it">First: Where Is the Condensation?</h2>

<p>Run your hand over the glass on both sides.</p>

<ul>
  <li><strong>Wet on the inside of the room:</strong> that's humidity in your house meeting cold glass. It's not a failed window. Lowering humidity usually fixes it. See <a href="/blog/window-condensation-in-winter">window condensation in winter</a>.</li>
  <li><strong>Wet on the outside:</strong> that's normal on cool mornings and actually a sign of good glass. See <a href="/blog/exterior-window-condensation-normal">condensation on the outside of your windows</a>.</li>
  <li><strong>Can't wipe it from either side:</strong> the moisture is between the panes. The seal has failed. This is the one that needs a fix.</li>
</ul>

<h2 id="what-the-fix-is">What the Fix Actually Is</h2>

<p>A double glazed window is two panes sealed together with a spacer and a dry, sealed space in between. When the seal breaks down, humid air gets in and condenses on the inner surfaces. Once that happens, the seal can't be restored.</p>

<p>The fix is to replace the sealed glass unit. The frame, trim and hardware stay. We measure the glass, have a new unit made to size, and swap it into your existing frame. You're paying for the glass unit and the labour, not for a new window. Our <a href="/blog/why-windows-fog-between-panes">guide on why windows fog between the panes</a> explains the cause in more detail.</p>

<h2 id="defogging">What About Defogging Services?</h2>

<p>Some companies drill small holes in the glass, clean the inside and seal the holes. It can make the glass look clearer for a while. It doesn't restore the seal or the insulating gas, so the window doesn't insulate like it did, and the fog often comes back. We don't offer it, because we don't think it's money well spent.</p>

<h2 id="what-changes-price">What Changes the Price</h2>

<ul>
  <li><strong>Size of the glass.</strong> The biggest factor by far.</li>
  <li><strong>Double or triple pane.</strong></li>
  <li><strong>Glass options.</strong> Low-E, argon, tempered (required by code near doors and floors), laminated, frosted.</li>
  <li><strong>Grilles between the panes</strong>, which have to be matched.</li>
  <li><strong>Shape.</strong> Arches and half-moons cost more than rectangles.</li>
  <li><strong>Access.</strong> Upper floors and windows that need the sash removed take longer.</li>
</ul>

<p>For price ranges from real GTA jobs, see our <a href="/blog/foggy-window-repair-cost-gta">foggy window repair cost guide</a> and the <a href="/glass-replacement-cost-report-2026">2026 cost report</a>.</p>

<h2 id="keep-cost-down">Ways to Keep the Cost Down</h2>

<ul>
  <li><strong>Do several windows in one visit.</strong> One trip, one order, so the price per window usually comes down.</li>
  <li><strong>Don't replace the whole window for a glass problem.</strong> If the frame is good, a new sealed unit is a fraction of the cost.</li>
  <li><strong>Send a clear photo first.</strong> A photo of the whole window and a tape measure across the glass gets you a rough range before anyone comes out.</li>
  <li><strong>Check your warranty.</strong> If the windows are newer, the original manufacturer may still cover seal failure.</li>
</ul>

<h2 id="faq">Common Questions</h2>

<h3>Is it urgent?</h3>
<p>Not usually. A foggy unit insulates less and looks bad, but it isn't dangerous. Over time the moisture can leave permanent marks inside the glass, so it's better not to leave it for years.</p>

<h3>Can it be done in winter?</h3>
<p>Yes. The opening is only exposed for a few minutes during the swap.</p>

<h3>What warranty comes with the new unit?</h3>
<p>2 years on parts and labour, then up to 5 years on the glass. See the <a href="/warranty">warranty page</a>.</p>

<p>If you have moisture between the panes, send us a photo or book a visit. The visit is $30, and it's credited to the job if you go ahead.</p>
`,
  },
  {
    slug: "is-it-worth-replacing-20-year-old-windows",
    title: "Is It Worth Replacing 20 Year Old Windows?",
    metaTitle: "Is It Worth Replacing 20 Year Old Windows? An Honest Answer",
    metaDescription:
      "Twenty years is when windows start showing their age, but age alone isn't a reason to replace them. Here's how to tell what your windows actually need.",
    excerpt:
      "A 20 year old window isn't automatically a dead window. Most of what fails at that age is the glass seal and the hardware, and both can be replaced without tearing out the frame.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 6,
    tags: ["Window Repair", "Window Replacement", "Homeowner Guide"],
    sections: [
      { id: "age-isnt-the-test", title: "Age Isn't the Test" },
      { id: "what-fails-at-20", title: "What Usually Fails Around 20 Years" },
      { id: "fixable", title: "Problems That Are Usually Fixable" },
      { id: "replace", title: "Signs It Really Is Time" },
      { id: "energy", title: "What About Energy Savings?" },
      { id: "how-to-decide", title: "How to Decide, Window by Window" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Twenty years is about when windows start acting their age. A few units fog up, a crank strips, there's a draft in the corner of the living room. That's usually when someone knocks on the door with a quote for a full set of new windows.</p>

<p>Sometimes that's the right move. Often it isn't. Here's how to tell.</p>

<h2 id="age-isnt-the-test">Age Isn't the Test</h2>

<p>A window is a frame, a sash, some hardware and a sealed glass unit. Those parts wear out at different rates. A good vinyl or wood frame can last far longer than 20 years. The glass seal and the moving hardware usually go first, and both are replaceable parts.</p>

<p>So the useful question isn't "how old are my windows," it's "which part is failing."</p>

<h2 id="what-fails-at-20">What Usually Fails Around 20 Years</h2>

<ul>
  <li><strong>Sealed units.</strong> Most last somewhere between 15 and 25 years before the seal lets go and they fog. See <a href="/blog/how-long-do-sealed-units-last">how long sealed units last</a>.</li>
  <li><strong>Cranks and hinges</strong> on casement windows.</li>
  <li><strong>Rollers</strong> on sliding windows and patio doors.</li>
  <li><strong>Weatherstripping</strong>, which flattens and lets drafts in.</li>
  <li><strong>Exterior caulking</strong> around the frame, which dries and cracks.</li>
</ul>

<h2 id="fixable">Problems That Are Usually Fixable</h2>

<ul>
  <li><strong>Fog between the panes:</strong> new sealed unit in the same frame. More on <a href="/foggy-windows">foggy windows</a>.</li>
  <li><strong>Cracked glass:</strong> new sealed unit.</li>
  <li><strong>Window won't open, close or lock:</strong> new crank, hinges or lock.</li>
  <li><strong>Draft around a closed window:</strong> often weatherstripping or a sagging sash, not the window itself.</li>
  <li><strong>Water or drafts around the outside of the frame:</strong> often old caulking.</li>
</ul>

<p>Fixing these brings the window back to working properly for a small part of the price of replacement.</p>

<h2 id="replace">Signs It Really Is Time</h2>

<p>A new window is the better spend when the frame itself is the problem:</p>

<ul>
  <li>Soft or rotted wood that a screwdriver sinks into.</li>
  <li>Cracked, warped or split vinyl, especially at the corners.</li>
  <li>Water coming in through the frame, not around it.</li>
  <li>Single-pane glass in a heated room, if comfort matters to you.</li>
  <li>Most windows in the house failing at the same time, so repairs would add up close to replacement anyway.</li>
</ul>

<h2 id="energy">What About Energy Savings?</h2>

<p>New windows are more efficient, but the savings on heating are often smaller than people expect, and they take a long time to pay back the cost. A lot of the comfort you lose with old windows comes from failed seals and drafts, which repairs fix. If energy is your main reason, replacing foggy units with Low-E argon glass gets you much of the benefit in the frames you already have. Our guide on <a href="/blog/double-vs-triple-pane-low-e-argon">double, triple, Low-E and argon</a> explains the options.</p>

<h2 id="how-to-decide">How to Decide, Window by Window</h2>

<ol>
  <li>Walk the house and make a list: which windows fog, which stick, which are drafty.</li>
  <li>Check each frame: solid, or soft and cracked?</li>
  <li>Get a price to repair the failing parts and compare it with the price of new windows for the same openings.</li>
  <li>Fix what's fixable now. Plan replacement for frames that are actually done.</li>
</ol>

<p>You don't have to do the whole house at once. Mixing repaired windows and a few new ones is completely normal. More on this in <a href="/blog/window-repair-vs-replacement-toronto">window repair vs replacement</a>.</p>

<h2 id="faq">Common Questions</h2>

<h3>Will repaired windows hurt my home's resale?</h3>
<p>Not if they work. Buyers and inspectors look for fog, drafts and broken hardware. Windows that open, lock and have clear glass read as fine.</p>

<h3>Can you do just a few windows?</h3>
<p>Yes. One window or ten, same process.</p>

<h3>Do repairs come with a warranty?</h3>
<p>New sealed units: 2 years parts and labour, then up to 5 years on the glass. Hardware repairs: 1 year. See the <a href="/warranty">warranty page</a>.</p>

<p>If your windows are around 20 years old and starting to give you trouble, book a visit. We'll go through them with you and tell you which ones need a repair and which ones don't need anything.</p>
`,
  },
  {
    slug: "window-insert-replacement-vs-new-window",
    title: "Window Insert Replacement vs a New Window: What's the Difference?",
    metaTitle: "Window Insert Replacement vs New Window: Which Do You Need?",
    metaDescription:
      "Glass insert, sealed unit, thermopane, insert window: the words get mixed up. Here's what each one means and which fix fits your window.",
    excerpt:
      "When someone says they need a new window insert, they might mean new glass in the old frame, or a whole new window slid into the old opening. Those are very different jobs with very different prices.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 5,
    tags: ["Glass Replacement", "Window Replacement", "Homeowner Guide"],
    sections: [
      { id: "words", title: "The Words Get Mixed Up" },
      { id: "glass-insert", title: "Option 1: New Glass Insert, Same Frame" },
      { id: "insert-window", title: "Option 2: Insert Window in the Old Opening" },
      { id: "full-frame", title: "Option 3: Full-Frame Replacement" },
      { id: "which-one", title: "Which One Do You Need?" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>"Window insert" is one of those terms that means different things depending on who's talking. Before you compare quotes, it's worth knowing which job is actually being priced.</p>

<h2 id="words">The Words Get Mixed Up</h2>

<p>You'll hear all of these used for the glass part of a window: sealed unit, insulated glass unit (IGU), thermopane, glass insert, double pane. They mean roughly the same thing: the panes and spacer that sit inside the sash or frame.</p>

<p>But "insert window" or "insert replacement" in the window replacement world usually means a whole new window, frame and all, slid into the old frame. Same word, completely different job.</p>

<h2 id="glass-insert">Option 1: New Glass Insert, Same Frame</h2>

<p>Only the sealed glass unit is replaced. Your existing frame, sash, hardware, trim and outside caulking all stay.</p>

<ul>
  <li><strong>Fixes:</strong> fog between the panes, cracked or broken glass, changing to Low-E, tempered or frosted glass.</li>
  <li><strong>Doesn't fix:</strong> a rotted or cracked frame, broken hardware (that's a separate repair).</li>
  <li><strong>Disruption:</strong> minimal. Nothing inside or outside the wall is touched.</li>
  <li><strong>Cost:</strong> the lowest of the three by a wide margin.</li>
</ul>

<p>This is most of what we do. See <a href="/glass-replacement">glass replacement</a>.</p>

<h2 id="insert-window">Option 2: Insert Window in the Old Opening</h2>

<p>The old sash and moving parts come out, and a complete new window, with its own frame, is fitted inside the old frame. The old outer frame stays in the wall and gets covered with trim.</p>

<ul>
  <li><strong>Fixes:</strong> worn-out sashes and hardware, single-pane windows you want to upgrade, frames that are tired but not rotted.</li>
  <li><strong>Trade-off:</strong> the glass area gets a little smaller, because a new frame sits inside the old one.</li>
  <li><strong>Cost:</strong> much more than new glass, less than full-frame replacement.</li>
</ul>

<h2 id="full-frame">Option 3: Full-Frame Replacement</h2>

<p>Everything comes out down to the rough opening in the wall, and a brand new window is installed, with new trim and caulking.</p>

<ul>
  <li><strong>Fixes:</strong> rot, water damage in the frame or wall, changing the window size or style.</li>
  <li><strong>Cost and disruption:</strong> the highest of the three.</li>
</ul>

<h2 id="which-one">Which One Do You Need?</h2>

<ul>
  <li><strong>Frame is solid, glass is foggy or cracked:</strong> new glass insert (Option 1).</li>
  <li><strong>Frame is solid, hardware is broken:</strong> hardware repair, no new window needed. See <a href="/cranks">crank and hardware repair</a>.</li>
  <li><strong>Sash is worn out or the window is single pane, frame is sound:</strong> an insert window may make sense.</li>
  <li><strong>Frame is rotted or leaking:</strong> full-frame replacement.</li>
</ul>

<p>If you're comparing quotes, ask each company in writing which of these they're pricing. A glass-only price and a new-window price aren't comparable. Our article on <a href="/blog/will-glass-company-sell-me-new-windows">red flags in a window quote</a> has more questions worth asking.</p>

<h2 id="faq">Common Questions</h2>

<h3>Is a thermopane the same as a sealed unit?</h3>
<p>Yes. Thermopane started as a brand name and became a general word for double pane sealed glass.</p>

<h3>Can you put new glass in an old wood window?</h3>
<p>Often yes, if the wood is solid. The technician checks the sash for rot before measuring.</p>

<h3>How do I know if my frame is solid?</h3>
<p>Press a screwdriver into the wood at the bottom corners. If it sinks in easily, the frame has rot. For vinyl, look for cracks at the corners.</p>

<p>Not sure which one your window needs? Send us a photo or book a visit, and we'll tell you before anything gets ordered.</p>
`,
  },
  {
    slug: "window-glass-cracked-by-itself",
    title: "Why Did My Window Glass Crack by Itself?",
    metaTitle: "Window Glass Cracked by Itself? Thermal Stress Cracks Explained",
    metaDescription:
      "Nobody hit it, but there's a long crack in your window. Here's how thermal stress cracks happen in winter, how to spot one, and what to do next.",
    excerpt:
      "You walk past the window and there it is: a long, wandering crack that wasn't there yesterday. Nobody threw anything. Nothing hit it. In most cases this is a thermal stress crack, and it's more common in GTA winters than most people think.",
    publishedAt: "2026-11-20",
    author: "Dan",
    readingTime: 6,
    coverImage: "/images/services/cracked-glass-brampton-before.webp",
    tags: ["Glass Replacement", "Cracked Glass", "Winter"],
    sections: [
      { id: "what-happened", title: "What Usually Happened" },
      { id: "how-to-tell", title: "How to Tell a Stress Crack From an Impact" },
      { id: "why-winter", title: "Why It Happens More in Winter" },
      { id: "what-to-do-now", title: "What to Do Right Now" },
      { id: "can-it-be-repaired", title: "Can a Cracked Sealed Unit Be Repaired?" },
      { id: "real-job", title: "A Recent Job: Cracked Casement Glass" },
      { id: "preventing-it", title: "Lowering the Odds of It Happening Again" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>You walk past the window and there it is: a long, wandering crack that wasn't there yesterday. Nobody threw anything. No ball, no bird, no branch. It just appeared.</p>

<p>In most cases like this, the glass cracked from heat stress. It sounds strange, but it's one of the most common reasons we replace glass in GTA homes during the colder months. Here's what's going on, how to check your own window, and what your options are.</p>

<h2 id="what-happened">What Usually Happened</h2>

<p>Glass expands when it warms up and shrinks when it cools down. That's normal. The trouble starts when one part of the pane is much warmer than another part at the same time.</p>

<p>The edges of a pane sit inside the frame, hidden and cold. The middle of the pane is out in the open, warmed by the sun or by the heat in your room. If the difference gets big enough, the warm centre pulls against the cold edge until the glass gives. The crack almost always starts at the edge, where the glass is weakest, and then runs across the pane.</p>

<p>This is called a thermal stress crack. It isn't a sign that someone did something wrong, and it isn't always a sign of bad glass. It's physics.</p>

<h2 id="how-to-tell">How to Tell a Stress Crack From an Impact</h2>

<p>You can usually tell the two apart in a few seconds.</p>

<ul>
  <li><strong>Stress crack:</strong> starts at the edge of the glass, often leaving the frame at close to a right angle. Then it wanders, curves or splits into a long line across the pane. There's no impact point.</li>
  <li><strong>Impact crack:</strong> has a clear starting point somewhere in the glass, often a small chip or crater, with cracks spreading out from it like a star or a spider web.</li>
</ul>

<p>If you see one long line that begins at the frame and meanders, it's very likely heat stress. If you see a spot where cracks meet, something hit it.</p>

<h2 id="why-winter">Why It Happens More in Winter</h2>

<p>Winter gives glass the biggest temperature swings. A few common setups make it worse:</p>

<ul>
  <li><strong>Low winter sun.</strong> Sun hits the middle of the glass while the edges stay in the shadow of the frame.</li>
  <li><strong>Blinds or shutters close to the glass.</strong> They trap heat between the covering and the pane, so the glass gets hotter than it would on its own.</li>
  <li><strong>Heat blowing on the window.</strong> A floor vent or baseboard heater right under the glass warms one area fast.</li>
  <li><strong>Partial shade.</strong> A tree, overhang or neighbouring wall that shades only part of the pane.</li>
  <li><strong>Large panes.</strong> Bigger glass has more room for the centre and edge to drift apart in temperature.</li>
</ul>

<p>A small chip on the edge, often from when the glass was first installed, also makes a crack more likely, because the stress has somewhere to start.</p>

<h2 id="what-to-do-now">What to Do Right Now</h2>

<ol>
  <li><strong>Don't press on it.</strong> A cracked pane can keep spreading, especially when the temperature changes again tonight.</li>
  <li><strong>Check which pane is cracked.</strong> Most windows in Ontario homes are sealed units with two or three panes. If you can feel the crack from inside, it's the inside pane. If the inside is smooth, it's the outside one.</li>
  <li><strong>Tape it if it's spreading.</strong> Clear packing tape along the crack on the cracked side helps hold it while you wait for a replacement.</li>
  <li><strong>Move heat sources and coverings back.</strong> Open the blinds a few inches from the glass and point vents away from the window until it's replaced.</li>
  <li><strong>Take a photo.</strong> A photo of the whole window and a close-up of the crack is enough for a first price.</li>
</ol>

<p>If the glass is broken through and the opening isn't secure, that's a different situation. See our page on <a href="/emergency-glass-repair">emergency glass repair</a>.</p>

<h2 id="can-it-be-repaired">Can a Cracked Sealed Unit Be Repaired?</h2>

<p>Not the crack itself. In a sealed unit, the panes are bonded together with a spacer and sealant, and the space between them is sealed shut. Once one pane cracks, the seal is no longer reliable and the unit will usually fog over time.</p>

<p>What we replace is the sealed glass unit, not the window. We measure the opening, have a new unit made to size (with matching grilles if your window has them), and install it in the existing frame. The frame, trim and hardware stay where they are. For most homes, that costs a fraction of a new window. Our <a href="/glass-replacement">glass replacement</a> page explains how it works.</p>

<h2 id="real-job">A Recent Job: Cracked Casement Glass</h2>

<p>We recently replaced the glass in a 23 x 43 inch casement window in Brampton. The crack started at the top edge of the frame and wandered down through several grille sections, a textbook stress crack. There was no impact point and nothing had hit the window.</p>

<p>We measured the unit, ordered a new sealed unit with matching grilles, and swapped it into the original frame. You can see the before and after on our <a href="/projects">projects page</a>.</p>

<h2 id="preventing-it">Lowering the Odds of It Happening Again</h2>

<p>You can't control the weather, but you can take away some of the things that push glass over the edge:</p>

<ul>
  <li>Keep blinds, shutters and heavy curtains a few inches off the glass, or leave them partly open on sunny winter days.</li>
  <li>Don't aim heaters or vent deflectors straight at the window.</li>
  <li>Avoid putting stickers, film or dark objects against the glass that soak up heat in one spot.</li>
  <li>If your glass has a chipped edge, mention it when you get the window looked at.</li>
</ul>

<h2 id="faq">Common Questions</h2>

<h3>Is a stress crack covered by warranty?</h3>
<p>Glass breakage is usually not covered by window or glass warranties, ours included. Warranties on sealed units cover seal failure, which is when the unit fogs up between the panes. It's worth checking your own window warranty in case the terms are different.</p>

<h3>Will home insurance pay for it?</h3>
<p>It depends on your policy and your deductible. For a single pane, the replacement often costs less than the deductible. Our guide on <a href="/blog/home-insurance-broken-window-ontario">home insurance and broken windows in Ontario</a> goes through it.</p>

<h3>Can I leave it until spring?</h3>
<p>If the crack is small, the window still closes and nothing is loose, many people wait a short time. Keep in mind the crack can spread with each cold night, and a cracked unit will eventually fog. Glass can be replaced in winter, so there's no need to wait for warm weather. See <a href="/blog/replace-window-glass-in-winter">replacing window glass in winter</a>.</p>

<h3>How long does it take to get new glass?</h3>
<p>The sealed unit is made to measure, so there's a wait between the measuring visit and the install. We give you the timeline with the written price.</p>

<p>Found a crack like this? Send us a photo or book a visit, and we'll tell you what it needs and what it costs before any work starts.</p>
`,
  },
  {
    slug: "draft-coming-from-skylight",
    title: "Why Is There a Draft Coming From My Skylight?",
    metaTitle: "Draft Coming From Your Skylight? What Causes It and How to Fix It",
    metaDescription:
      "Cold air falling from your skylight in winter? It may be a failed seal, worn weatherstripping or simple physics. How to check and what fixes it.",
    excerpt:
      "You can feel it standing under the skylight: a cold breath of air coming down from above. Before you assume the skylight is broken, it helps to know there are a few very different causes, and only some of them mean a leak.",
    publishedAt: "2026-11-20",
    author: "Dan",
    readingTime: 6,
    coverImage: "/images/services/skylight-hero-clean.webp",
    tags: ["Skylights", "Winter", "Drafts"],
    sections: [
      { id: "not-always-a-leak", title: "A Draft Is Not Always a Leak" },
      { id: "cold-glass", title: "Cause 1: Cold Glass Pulling Air Down" },
      { id: "failed-seal", title: "Cause 2: A Failed Sealed Unit" },
      { id: "venting-skylight", title: "Cause 3: A Venting Skylight That Doesn't Close Tight" },
      { id: "around-the-frame", title: "Cause 4: Air Getting In Around the Frame" },
      { id: "how-to-check", title: "How to Check It Yourself" },
      { id: "what-fixes-it", title: "What Fixes Each One" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>You can feel it standing under the skylight: a cold breath of air coming down from above. It might be faint, or it might be enough to make that corner of the room the one nobody sits in.</p>

<p>A homeowner described it to us recently as "a draft from the skylight window" and asked for someone to come look at it. That's a good way to put it, because a draft is something you feel, and the cause isn't always obvious from below. There are a few very different reasons a skylight feels drafty, and only some of them mean air is actually getting in.</p>

<h2 id="not-always-a-leak">A Draft Is Not Always a Leak</h2>

<p>Before anything else: if you feel cold air but see no water stains, no drips and no frost around the frame, the skylight may not be letting any outside air in at all. It may just be cold. That matters, because the fix for a cold skylight is very different from the fix for a leaky one.</p>

<p>For water leaks, ice dams and condensation, we have a separate guide: <a href="/blog/skylights-in-winter-leaks-ice-dams-condensation">skylights in winter</a>. This one is about the cold air.</p>

<h2 id="cold-glass">Cause 1: Cold Glass Pulling Air Down</h2>

<p>Warm air rises and collects up in the skylight shaft. When it touches the cold glass, it cools, gets heavier and sinks back down into the room. That falling stream of cool air feels exactly like a draft, even when the skylight is perfectly sealed.</p>

<p>The colder the glass, the stronger the effect. That's why older skylights with a single layer of acrylic, or glass with no Low-E coating, feel much draftier than newer ones. It's also why the draft gets worse on the coldest nights.</p>

<h2 id="failed-seal">Cause 2: A Failed Sealed Unit</h2>

<p>Most glass skylights use a sealed unit: two panes with an insulating gap between them. When the seal fails, moist air gets into that gap and the insulating gas leaks out. The inside pane gets colder, so the falling-air effect above gets stronger.</p>

<p>The giveaway is fog, haze or water droplets between the two panes that you can't wipe off from either side. If you see that, the sealed unit has failed. Our article on <a href="/blog/why-windows-fog-between-panes">why glass fogs between the panes</a> explains what's happening inside.</p>

<h2 id="venting-skylight">Cause 3: A Venting Skylight That Doesn't Close Tight</h2>

<p>If your skylight opens, with a crank, a pole or a motor, it has weatherstripping and a latch like any window. Over time the weatherstripping flattens, cracks or comes loose, and the sash may not pull in all the way. That leaves a gap where real outside air gets in.</p>

<p>You'll usually feel this one along one edge rather than across the whole skylight. Sometimes you can hear a faint whistle on windy days.</p>

<h2 id="around-the-frame">Cause 4: Air Getting In Around the Frame</h2>

<p>The skylight sits in an opening cut through the roof, with a shaft running down to your ceiling. If there are gaps between the skylight frame and the roof opening, or the shaft walls aren't properly sealed and insulated, cold attic air can find its way in around the frame.</p>

<p>Signs of this include cold spots along the shaft walls rather than at the glass, and dust lines or discoloured paint near the corners where air has been moving.</p>

<h2 id="how-to-check">How to Check It Yourself</h2>

<ol>
  <li><strong>Look at the glass.</strong> Fog between the panes points to a failed seal.</li>
  <li><strong>Feel where it's coming from.</strong> On a cold day, hold the back of your hand near the centre of the glass, then along each edge, then along the shaft corners. Cold everywhere at the glass suggests cold glass. Cold at one edge suggests weatherstripping. Cold at the shaft corners suggests gaps around the frame.</li>
  <li><strong>Try a tissue.</strong> Hold a tissue near the edges. If it flutters toward the room, outside air is moving in. If it just hangs, there's no real air leak and you're feeling the falling-cold-air effect.</li>
  <li><strong>Check for water.</strong> Stains, drips or frost mean something more than a draft is going on.</li>
</ol>

<h2 id="what-fixes-it">What Fixes Each One</h2>

<ul>
  <li><strong>Cold glass or a failed seal:</strong> replacing the glass with a new insulated sealed unit, often with Low-E glass, makes the inside pane much warmer and calms the falling air. In most cases the frame stays in place. See <a href="/skylights">skylight glass and repair</a>.</li>
  <li><strong>Venting skylight not closing:</strong> new weatherstripping, an adjusted or replaced latch, or a new operator.</li>
  <li><strong>Gaps around the frame:</strong> resealing the frame, and in some homes, sealing and insulating the shaft. We'll tell you plainly if part of the job is roof or insulation work rather than glass.</li>
</ul>

<h2 id="faq">Common Questions</h2>

<h3>Is a drafty skylight costing me money on heating?</h3>
<p>A failed seal or a real air gap does let heat escape. Cold glass on its own mostly affects comfort near the skylight. Either way, fixing the cause usually makes that part of the room usable again in winter.</p>

<h3>Do I need a whole new skylight?</h3>
<p>Not usually. If the frame is solid and not leaking water, replacing the glass or the weatherstripping fixes most drafts. A full replacement makes sense when the frame itself is damaged or rotting.</p>

<h3>Can it be fixed in winter?</h3>
<p>Glass and weatherstripping can be replaced in winter on most skylights. Roof-side work depends on the weather and access.</p>

<p>Feeling cold air from your skylight? Send us a photo of the glass and the area around it, or book a visit, and we'll tell you which of these it is before any work starts.</p>

<p>Related reading: <a href="/blog/why-windows-fog-between-panes" class="text-accent hover:underline font-medium">Why Windows Fog Between Panes</a> explains the seal failure that causes cold glass, and <a href="/blog/foggy-window-repair-cost-gta" class="text-accent hover:underline font-medium">How Much Does Foggy Window Repair Cost in the GTA?</a> covers what sealed unit replacement typically runs.</p>
`,
  },
  {
    slug: "will-glass-company-sell-me-new-windows",
    title: "Will a Glass Company Try to Sell Me New Windows?",
    metaTitle: "Do You Really Need New Windows? How to Spot an Upsell",
    metaDescription:
      "Foggy glass or a broken crank rarely means new windows. How to tell what your window actually needs, red flags in a quote, and questions to ask.",
    excerpt:
      "You call about one foggy window and end up with a quote for the whole house. It's the worry we hear most from homeowners. Here's how to tell what your window really needs, and how to read a quote without getting talked into more.",
    publishedAt: "2026-11-20",
    author: "Dan",
    readingTime: 7,
    coverImage: "/images/services/toronto-foggy-glass-replacement-after.webp",
    tags: ["Window Repair", "Repair vs Replacement", "Homeowner Tips"],
    sections: [
      { id: "the-worry", title: "The Worry Is Real" },
      { id: "what-can-be-fixed", title: "Problems That Almost Never Need a New Window" },
      { id: "when-new-makes-sense", title: "When a New Window Really Makes Sense" },
      { id: "red-flags", title: "Red Flags in a Quote" },
      { id: "questions-to-ask", title: "Questions to Ask Before You Agree to Anything" },
      { id: "how-we-handle-it", title: "How We Handle It" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>You call about one foggy window and end up with a quote for every window in the house. Or someone knocks on your door, looks at your frames from the driveway and tells you they all need to go.</p>

<p>It's the worry we hear most from homeowners: "Are you going to try to sell me new windows?" It's a fair question. Prices for the same problem can range from a couple of hundred dollars to several thousand, depending on who you ask and what they sell. Here's how to tell what your window actually needs, so you can judge any quote, ours included.</p>

<h2 id="the-worry">The Worry Is Real</h2>

<p>Full window replacement is a big-ticket sale. A company that only installs new windows has no product to offer you for a stripped crank or a single foggy pane, so the answer to almost every problem becomes "replace it." That doesn't make them dishonest. It does mean the advice you get depends on what the person in front of you sells.</p>

<p>The good news is that most window problems fall into a few clear groups, and you can usually tell which group yours is in.</p>

<h2 id="what-can-be-fixed">Problems That Almost Never Need a New Window</h2>

<ul>
  <li><strong>Fog or haze between the panes.</strong> The seal on the glass unit failed. The fix is a new sealed glass unit in your existing frame. See <a href="/foggy-windows">foggy window repair</a>.</li>
  <li><strong>Cracked or broken glass.</strong> Same fix: a new sealed unit, made to size.</li>
  <li><strong>A crank that spins or won't turn.</strong> The operator is worn out. It gets replaced, usually on the spot. See <a href="/cranks">window crank repair</a>.</li>
  <li><strong>A window that won't close or lock.</strong> Usually hinges, the operator arm or the lock. Our guide on <a href="/blog/window-wont-close-or-lock">windows that won't close or lock</a> covers it.</li>
  <li><strong>A patio door that's hard to slide.</strong> Usually worn rollers or a dirty track, not the door. See <a href="/blog/sliding-patio-door-wont-slide">patio doors that won't slide</a>.</li>
  <li><strong>Torn screens and worn weatherstripping.</strong> Small, cheap parts.</li>
</ul>

<p>If your frame is solid and square, any of these can be fixed while the window stays in the wall.</p>

<h2 id="when-new-makes-sense">When a New Window Really Makes Sense</h2>

<p>Replacement is the right call sometimes, and a good tradesperson will tell you so. Signs the frame itself is the problem:</p>

<ul>
  <li>Soft, rotting or crumbling wood in the frame or sill.</li>
  <li>Vinyl that's cracked at the corners, warped or pulling apart at the welds.</li>
  <li>A frame that's no longer square, so the sash can't close evenly no matter what hardware you put on.</li>
  <li>Water getting in around the frame itself, not just through the glass.</li>
  <li>Very old single-pane or aluminum windows where you want a big jump in comfort and energy use.</li>
</ul>

<p>If none of these apply, ask why replacement is being recommended. Our longer guide on <a href="/blog/window-repair-vs-replacement-toronto">repair vs replacement</a> goes into more detail.</p>

<h2 id="red-flags">Red Flags in a Quote</h2>

<ul>
  <li><strong>Only one option.</strong> You asked about one window and got a price for the whole house, with no repair option at all.</li>
  <li><strong>No one looked at the hardware.</strong> They quoted replacement without opening the window, checking the crank or looking at the frame up close.</li>
  <li><strong>Pressure to sign today.</strong> "This price is only good if you sign now" is a sales tactic, not a property of glass.</li>
  <li><strong>No written price.</strong> A verbal number that changes later, or a quote with no breakdown of what's included.</li>
  <li><strong>Age as the only reason.</strong> "They're 15 years old, so they're done" isn't a diagnosis. Plenty of 15 to 25 year old frames are in good shape with failed glass or worn hardware.</li>
</ul>

<h2 id="questions-to-ask">Questions to Ask Before You Agree to Anything</h2>

<ol>
  <li>What exactly is broken, and can you show me?</li>
  <li>Can this part be replaced on its own, keeping my frame?</li>
  <li>What does the repair cost compared with a new window?</li>
  <li>What's covered by the warranty, for how long, and on which parts?</li>
  <li>Can I have the price in writing before any work starts?</li>
</ol>

<p>A company that's confident in its advice will answer all five without hesitating.</p>

<h2 id="how-we-handle-it">How We Handle It</h2>

<p>We're a repair-first glass company. That means we look at the part that failed and try to fix that first. We replace the whole window only when the frame itself is done, and we'll show you why.</p>

<p>On a visit, the technician checks the window, explains what's wrong and gives you a written price on the spot. The visit is $30, credited toward the job if you go ahead. If something else in the house needs attention, we'll mention it, but there's no package and no pressure. You can also <a href="/contact">send us a photo</a> first and we'll tell you what it likely needs.</p>

<h2 id="faq">Common Questions</h2>

<h3>Is replacing just the glass really cheaper?</h3>
<p>In most cases, yes, by a wide margin, because you keep the frame, trim and interior finish. Our <a href="/blog/foggy-window-repair-cost-gta">foggy window repair cost guide</a> shows what affects the price.</p>

<h3>Will new glass match my other windows?</h3>
<p>The new sealed unit is made to the size of your existing one, with grilles to match if your window has them. From the inside and outside, it looks like the rest of the window.</p>

<h3>What if my frame turns out to be the problem?</h3>
<p>Then we'll tell you, show you what we found and give you the options. Sometimes it's one window, not the whole house.</p>

<p>Not sure what your window needs? Book a visit or send a photo, and get a straight answer with the price in writing.</p>
`,
  },
  {
    slug: "window-wont-close-or-lock",
    title: "Window Won't Close or Lock? Here Is What to Check",
    metaTitle: "Window Won't Close or Lock? Causes and Fixes for Toronto Homes",
    metaDescription:
      "Common reasons your window won't close or lock, from broken cranks to shifted frames. What you can fix yourself and when to call a technician.",
    excerpt:
      "A window that will not close all the way is more than an annoyance. It is a security risk, an energy drain, and an open invitation for insects and rain. The good news: most of the time the problem is a hardware issue that can be repaired on the spot, not a full window replacement.",
    publishedAt: "2026-11-19",
    author: "Dan",
    readingTime: 7,
    coverImage: "/images/services/window-crank-service.webp",
    tags: ["Window Repair", "Window Hardware", "Toronto"],
    sections: [
      { id: "why-it-matters", title: "Why a Window That Won't Close Matters" },
      { id: "casement-windows", title: "Casement Windows (Crank-Out)" },
      { id: "double-hung-windows", title: "Double-Hung Windows (Slide Up and Down)" },
      { id: "sliding-windows", title: "Sliding Windows and Patio Doors" },
      { id: "lock-problems", title: "When the Window Closes but Won't Lock" },
      { id: "hardware-vs-replacement", title: "Hardware Repair vs Window Replacement" },
      { id: "temporary-fixes", title: "Temporary Fixes While You Wait for Repair" },
      { id: "when-to-call", title: "When to Call a Technician" },
      { id: "faq", title: "FAQ" },
    ],
    content: `
<p>A window that will not close all the way is more than an annoyance. It is a security risk, an energy drain, and an open invitation for insects and rain. In winter, even a 3 mm gap lets enough cold air in to make a noticeable difference on your heating bill. In summer, it means conditioned air leaking out.</p>

<p>The good news: most of the time the problem is a hardware issue that can be repaired on the spot, not a full window replacement. The fix depends on what type of window you have and what exactly is preventing it from closing. This guide walks through the most common causes for each window type and tells you what to check before calling anyone.</p>

<h2 id="why-it-matters">Why a Window That Won't Close Matters</h2>

<p>People often put up with a sticky or jammed window for months, propping it shut with a wooden shim or just leaving it. That creates real problems:</p>

<ul>
  <li><strong>Security.</strong> A window that does not latch is an unlocked entry point. Ground-floor and basement windows are the most common break-in locations in Ontario residential properties. Insurance claims for break-ins can be complicated if the insurer determines the window was not secured.</li>
  <li><strong>Energy loss.</strong> A window that does not seal properly lets conditioned air escape year-round. Depending on the size of the gap and the number of affected windows, this can add meaningfully to your heating and cooling costs.</li>
  <li><strong>Water damage.</strong> Rain can enter through a gap you would not expect. Even a small amount of water reaching the sill, the drywall below the window, or the subfloor can cause mould growth and structural damage over time.</li>
  <li><strong>Insects and pests.</strong> Flies, wasps, and mosquitoes find even small gaps. Mice can fit through an opening as small as 6 mm.</li>
</ul>

<p>The sooner you address the issue, the less chance there is of secondary damage. Most <a href="/cranks">window hardware repairs</a> are completed on the same day, on the first visit.</p>

<h2 id="casement-windows">Casement Windows (Crank-Out)</h2>

<p>Casement windows swing outward on a hinge and are operated by a crank mechanism at the bottom of the frame. They are the most common window type in Toronto homes built from the 1980s onward. When a casement window will not close, the cause is almost always in the crank or the operator arm.</p>

<h3>Stripped or broken crank operator</h3>
<p>The crank handle turns but the window does not move. This means the gears inside the operator have stripped. The operator needs to be replaced. This is the single most common casement window problem we see, and we carry the most popular operator sizes on the truck. For a detailed breakdown, see our guide on <a href="/blog/broken-window-crank-what-to-do">what to do when your window crank breaks</a>.</p>

<h3>Bent or disconnected operator arm</h3>
<p>The operator arm connects the crank mechanism to the sash. If the arm is bent (often from forcing the window closed against an obstruction) or has popped out of its track, the window will not close flush. A bent arm can sometimes be straightened, but a severely damaged one needs to be replaced.</p>

<h3>Swollen or shifted sash</h3>
<p>If the crank operator works fine but the sash still will not seat into the frame, the sash may have shifted or the frame may have settled. This is more common in older homes where the framing has moved over the years. A technician can assess whether the sash can be adjusted or whether the hinge hardware needs to be repositioned.</p>

<h3>Debris in the hinge track</h3>
<p>Paint, caulking, dirt, or insect nests in the hinge channel can prevent the sash from closing the last few millimetres. Clean the hinge track with a stiff brush and apply a silicone-based lubricant. Do not use WD-40 on window hardware. It attracts dust and gums up over time.</p>

<h2 id="double-hung-windows">Double-Hung Windows (Slide Up and Down)</h2>

<p>Double-hung windows have two sashes that slide vertically. The lower sash slides up and the upper sash slides down. They are common in older Toronto homes (pre-1980s construction) and in many newer vinyl replacement windows.</p>

<h3>Broken window balance</h3>
<p>Window balances are the spring-loaded mechanisms inside the frame that hold the sash in position and counterbalance its weight. When a balance breaks, the sash drops or will not stay open. In some cases, a broken balance can also prevent the sash from closing fully because the sash tilts or jams at an angle. Replacing a window balance is a standard hardware repair.</p>

<h3>Sash off track</h3>
<p>If the sash has been removed for cleaning and not reinstalled correctly, or if the balance shoe has slipped, the sash can sit crooked in the frame. It may close on one side but leave a gap on the other. The sash needs to be removed, the balance reset, and the sash reinstalled properly.</p>

<h3>Paint seal</h3>
<p>In older homes with painted wood windows, layers of paint can effectively glue the sash to the frame or to the parting bead (the strip between the two sashes). Score the paint line with a utility knife and gently work the sash free. Be careful not to damage the wood.</p>

<h3>Swollen wood</h3>
<p>Wood sashes absorb moisture and swell, especially in spring and autumn when humidity is high. A sash that closes fine in winter may jam in summer. If the swelling is minor, sanding the contact points and repainting with a moisture-resistant paint can help. If the wood is rotted, the sash or the entire window may need replacement.</p>

<h2 id="sliding-windows">Sliding Windows and Patio Doors</h2>

<p>Sliding windows and <a href="/blog/sliding-patio-door-wont-slide">patio doors</a> move horizontally on a track. The most common reasons they will not close are track-related.</p>

<h3>Dirty or damaged track</h3>
<p>Dirt, pet hair, leaves, and small stones accumulate in the track over time. A heavily soiled track creates enough friction to prevent the sash or door panel from reaching the closed position. Vacuum the track, clean it with a damp cloth, and apply a silicone spray lubricant.</p>

<h3>Worn rollers</h3>
<p>Sliding sashes and patio doors ride on small rollers at the bottom. When the rollers wear out, flatten, or break, the panel drags on the track instead of rolling smoothly. It may stop short of the closed position or require so much force to move that it jumps off the track entirely. Roller replacement is a common repair that restores smooth operation.</p>

<h3>Warped or bent track</h3>
<p>Aluminum tracks can bend if someone steps on them or drops something heavy on them. A bent track creates a physical barrier that stops the panel from sliding past the damaged section. Minor bends can sometimes be straightened with pliers. A severely damaged track needs to be replaced.</p>

<h3>Misaligned latch</h3>
<p>The latch (the hook or lever that secures the sliding panel to the frame) may be misaligned with the keeper (the strike plate on the frame). If the panel closes but the latch does not engage, the keeper may need to be repositioned, or the latch mechanism itself may be worn and need replacement.</p>

<h2 id="lock-problems">When the Window Closes but Won't Lock</h2>

<p>If your window closes flush against the frame but the lock will not engage, the problem is usually one of these:</p>

<ul>
  <li><strong>Misaligned lock and keeper.</strong> The lock and the keeper (the piece it hooks into) are no longer lined up. This happens when the sash shifts slightly over time, or when the frame settles. Repositioning the keeper by a few millimetres often solves it.</li>
  <li><strong>Worn lock mechanism.</strong> The internal spring or cam in the lock has worn out. The lock handle moves but does not grip. The lock needs to be replaced. Window locks are standardized parts and usually available for same-day repair.</li>
  <li><strong>Sash not fully seated.</strong> The sash looks closed but is actually sitting a millimetre or two proud of the frame. This small gap is enough to prevent the lock from reaching the keeper. Check for debris, a broken balance, or a bent hinge that is holding the sash away from the frame.</li>
  <li><strong>Painted-over lock.</strong> In older homes, the lock mechanism may be clogged with paint. Scrape the paint off the lock and keeper, then test the mechanism. If it still does not work, replace it.</li>
</ul>

<h2 id="hardware-vs-replacement">Hardware Repair vs Window Replacement</h2>

<p>Not every window problem means you need a new window. Here is a general guide:</p>

<h3>Hardware repair is enough when:</h3>
<ul>
  <li>The frame is structurally sound (no rot, no cracks, no warping)</li>
  <li>The glass is intact and the sealed unit is not fogged</li>
  <li>The problem is a broken crank, balance, roller, lock, or hinge</li>
  <li>The sash is in good condition but not operating correctly</li>
</ul>

<p>Most hardware problems fall into this category. The repair is completed on site, usually within an hour, and costs a fraction of a full <a href="/window-replacement">window replacement</a>.</p>

<h3>Replacement makes more sense when:</h3>
<ul>
  <li>The frame is rotted, warped, or cracked beyond repair</li>
  <li>The window is single-pane and you want to upgrade to a sealed unit</li>
  <li>Multiple components have failed at the same time (hardware, seal, and frame)</li>
  <li>The window no longer meets your needs (too small for egress, poor energy performance, wrong style)</li>
</ul>

<p>When the frame is sound, we always recommend repairing the hardware rather than replacing the entire window. It saves you money and keeps functional windows out of the landfill. For an honest comparison, see our post on <a href="/blog/replace-vs-repair-windows-toronto">when to repair vs replace your windows</a>.</p>

<h2 id="temporary-fixes">Temporary Fixes While You Wait for Repair</h2>

<p>If you cannot get the window closed right away, here are some temporary measures to secure it until a technician can visit:</p>

<ul>
  <li><strong>Wedge it shut.</strong> A wooden shim or a folded piece of cardboard wedged between the sash and the frame can hold the window in the closed position. It will not lock, but it will reduce the gap.</li>
  <li><strong>Use a window security bar.</strong> For sliding windows and patio doors, a cut-to-length wooden dowel or metal bar laid in the track prevents the panel from being opened from the outside.</li>
  <li><strong>Apply painter's tape.</strong> If the gap is small (under 5 mm), painter's tape across the seam will block drafts and insects temporarily without damaging the paint or finish.</li>
  <li><strong>Cover with plastic sheeting.</strong> For a window that cannot be closed at all, tape a sheet of heavy plastic over the opening from the inside. This stops air infiltration and keeps rain out until the repair is done.</li>
</ul>

<p>These are short-term solutions. Do not leave a window unsecured for more than a few days, especially on the ground floor.</p>

<h2 id="when-to-call">When to Call a Technician</h2>

<p>Some problems are straightforward to diagnose and fix yourself (cleaning a dirty track, scoring a paint seal). Others require specific parts, tools, or experience:</p>

<ul>
  <li>The crank operator has stripped gears (needs a replacement operator matched to your window brand)</li>
  <li>A window balance has broken (needs to be sized and matched to the sash weight)</li>
  <li>The sash is off track and you cannot figure out how to reseat it</li>
  <li>The frame has shifted and the window no longer fits the opening</li>
  <li>The lock mechanism is broken internally (not just misaligned)</li>
  <li>You are not sure what the problem is</li>
</ul>

<p>We carry common replacement parts on the truck and complete most hardware repairs on the same visit. Visit our <a href="/our-process">service process page</a> to see how a typical repair works from first call to completion.</p>

<h2 id="faq">FAQ</h2>

<h3>Can I force a jammed window closed?</h3>
<p>Do not force it. Forcing a jammed casement window can bend the operator arm, strip the gears, or crack the frame. For sliding windows, forcing the panel past an obstruction can damage the rollers or bend the track. Figure out what is blocking it first, then address the cause.</p>

<h3>My window closed fine yesterday but won't close today. What changed?</h3>
<p>Temperature and humidity changes cause window materials to expand and contract. A wood sash that closes easily in dry winter air may swell and jam on a humid summer day. Vinyl frames can also expand slightly in direct sunlight. If the problem comes and goes with the weather, the fit is marginal and an adjustment may be needed.</p>

<h3>Is a window that won't lock a security risk even if it looks closed?</h3>
<p>Yes. A window that sits in the closed position but does not latch can be opened from the outside with minimal effort. Ground-floor and basement windows are the most vulnerable. Get the lock repaired or replaced as soon as possible.</p>

<h3>How much does a window hardware repair cost?</h3>
<p>It depends on the part and the window type. We charge a $30 site visit fee (credited toward the repair) and provide a written quote on the spot before any work begins. Most hardware repairs are significantly less expensive than a full window replacement.</p>

<h3>Do you repair all window brands?</h3>
<p>We repair windows from all major manufacturers. Some older or discontinued brands require sourcing specialty parts, which may take a few extra days. The technician will let you know during the assessment if your window needs a non-standard part.</p>

<p>Need a window that won't close or lock looked at? Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a quote online</a>. We serve Toronto, Vaughan, Mississauga, Brampton, and the entire GTA.</p>
`,
  },
  {
    slug: "basement-window-replacement-toronto",
    title: "Basement Window Replacement in Toronto: Glass, Frames, and Egress",
    metaTitle: "Basement Window Replacement Toronto",
    metaDescription:
      "Everything Toronto homeowners need to know about replacing basement windows: glass-only vs full frame, egress requirements, hopper vs slider, and costs.",
    excerpt:
      "Basement windows take more abuse than any other window in your home. They sit at ground level, collect splash-back from rain and snow, and face constant moisture from the soil. When they fail, most homeowners assume a full replacement is the only option, but that is not always the case.",
    publishedAt: "2026-11-19",
    author: "Dan",
    readingTime: 8,
    coverImage: "/images/services/window-replacement-service.webp",
    tags: ["Basement Windows", "Window Replacement", "Toronto"],
    sections: [
      { id: "why-basement-windows-fail", title: "Why Basement Windows Fail Faster" },
      { id: "glass-only-vs-full-replacement", title: "Glass-Only vs Full Frame Replacement" },
      { id: "basement-window-types", title: "Basement Window Types" },
      { id: "egress-requirements-ontario", title: "Egress Requirements in Ontario" },
      { id: "window-well-and-drainage", title: "Window Wells and Drainage" },
      { id: "insulation-and-energy", title: "Insulation and Energy Performance" },
      { id: "how-replacement-works", title: "How Basement Window Replacement Works" },
      { id: "common-mistakes", title: "Common Mistakes to Avoid" },
      { id: "faq", title: "FAQ" },
    ],
    content: `
<p>Basement windows take more abuse than any other window in your home. They sit at ground level or below it, collect splash-back from rain and snowmelt, and face constant moisture pressure from the surrounding soil. The frames stay damp longer than upstairs windows, and the glass deals with temperature extremes on both sides: cold earth outside, heated air inside.</p>

<p>When a basement window starts fogging, leaking, or refusing to open, most homeowners assume a full replacement is the only fix. Sometimes it is, but often a <a href="/glass-replacement">glass-only replacement</a> or a hardware repair is all that is needed. This guide helps you figure out which situation you are in.</p>

<h2 id="why-basement-windows-fail">Why Basement Windows Fail Faster</h2>

<p>Basement windows have a shorter effective lifespan than the same window installed on an upper floor. Here is why:</p>

<ul>
  <li><strong>Ground-level moisture.</strong> Water from rain, irrigation, and snowmelt pools around basement windows. Even with a window well, water sits against the frame and sill longer than it would on a wall-mounted window. This accelerates rot in wood frames and corrosion in steel frames.</li>
  <li><strong>Splash-back and debris.</strong> Soil, mulch, and gravel get kicked up against the glass and frame. Over time, this erodes caulking and paint, exposing the frame material underneath.</li>
  <li><strong>Temperature differential.</strong> The soil side of a basement window stays cool year-round, while the interior side is heated in winter. This constant temperature gap stresses the sealed unit and accelerates seal failure, leading to <a href="/foggy-windows">foggy glass</a>.</li>
  <li><strong>Neglect.</strong> Basement windows are out of sight. Problems develop for months or years before anyone notices. By the time the homeowner sees the issue, the damage is often more advanced than it would be on a main-floor window.</li>
</ul>

<h2 id="glass-only-vs-full-replacement">Glass-Only vs Full Frame Replacement</h2>

<p>This is the most important decision, and it comes down to the condition of the frame.</p>

<h3>Replace just the glass when:</h3>

<ul>
  <li>The frame is vinyl or aluminum and structurally sound (no cracks, no warping, no corrosion)</li>
  <li>The window opens, closes, and locks properly</li>
  <li>The problem is foggy glass, a cracked pane, or a failed seal</li>
  <li>The frame fits the opening correctly with no gaps</li>
</ul>

<p>Glass-only replacement means removing the sealed unit from the existing frame and installing a new one. The frame stays in place. This is faster, less invasive, and costs significantly less than a full replacement. Read more about <a href="/blog/how-long-do-sealed-units-last">how long sealed units last</a> and when they need replacing.</p>

<h3>Replace the full window when:</h3>

<ul>
  <li>The frame is rotted (wood), cracked (vinyl), or corroded (steel or aluminum)</li>
  <li>The window no longer opens or closes properly and the hardware cannot be repaired</li>
  <li>You are upsizing the opening for egress compliance (more on that below)</li>
  <li>The frame is an old steel or single-pane type with no insulating value</li>
  <li>Water is leaking around the frame, not through the glass</li>
</ul>

<p>Full <a href="/window-replacement">window replacement</a> means removing the entire unit (frame and glass) and installing a new one. For basement windows, this sometimes requires cutting the concrete or block wall to resize the opening.</p>

<h2 id="basement-window-types">Basement Window Types</h2>

<p>Not all basement windows are the same. The type you have determines your replacement options.</p>

<h3>Hopper windows</h3>
<p>Hinged at the bottom, they tilt inward from the top. The most common basement window in Toronto homes built after the 1980s. They provide ventilation and are easy to operate, but the opening size is limited by the tilt angle.</p>

<h3>Slider windows</h3>
<p>One or both sashes slide horizontally. Common in newer homes and finished basements. They offer a larger opening than hoppers and are a good choice for egress when the opening is wide enough.</p>

<h3>Awning windows</h3>
<p>Hinged at the top, they push outward from the bottom. Less common in basements but found in some newer builds. They can stay open during light rain because the glass acts as a canopy.</p>

<h3>Fixed windows</h3>
<p>No moving parts, no ventilation. These are glass-only units set into the frame. They let in light but cannot be opened. Fixed windows do not meet egress requirements.</p>

<h3>Glass block</h3>
<p>Individual glass blocks mortared into the opening. Common in older Toronto homes, especially in laundry rooms and utility areas. They provide light and privacy but no ventilation or egress. Many homeowners replace glass block with operable windows to gain ventilation or meet egress code.</p>

<h2 id="egress-requirements-ontario">Egress Requirements in Ontario</h2>

<p>If your basement has a bedroom, the Ontario Building Code (OBC Section 9.9.10) requires at least one egress window that a person can climb through in an emergency. The requirements are:</p>

<ul>
  <li><strong>Minimum opening area:</strong> 0.35 square metres (about 3.77 square feet)</li>
  <li><strong>Minimum opening dimension:</strong> no side of the opening smaller than 380 mm (about 15 inches)</li>
  <li><strong>The window must be openable from the inside without tools or special knowledge</strong></li>
  <li><strong>The window sill must be no more than 1,500 mm (about 59 inches) above the floor</strong></li>
</ul>

<p>These requirements apply when you are finishing a basement and adding a bedroom, or when you are converting an existing space into a legal bedroom (for example, for a basement apartment). They do not retroactively apply to existing bedrooms that were built under an older code, but they are a smart safety upgrade regardless.</p>

<p>If your current basement window opening is too small for egress, the opening needs to be enlarged. This involves cutting concrete or block, installing a new header or lintel, and fitting a larger window. It also typically requires a larger window well outside. This is a job that involves structural work, and you should work with a contractor who understands the building code requirements.</p>

<h2 id="window-well-and-drainage">Window Wells and Drainage</h2>

<p>A basement window is only as good as the drainage around it. If water pools in the window well, it will eventually find its way inside, no matter how good the window is.</p>

<ul>
  <li><strong>Window well drains.</strong> A proper window well has a drain at the bottom that connects to the weeping tile or a gravel pit. If the drain is clogged or missing, water sits against the window during every rain.</li>
  <li><strong>Gravel fill.</strong> The bottom of the window well should have 150 to 200 mm (6 to 8 inches) of clean gravel to allow water to drain away from the window frame.</li>
  <li><strong>Window well covers.</strong> A clear plastic or polycarbonate cover keeps rain, snow, and debris out of the well while still letting light through. They are inexpensive and make a real difference.</li>
  <li><strong>Grading.</strong> The soil around the window well should slope away from the house, not toward it. If water flows toward the well, even a good drain will struggle to keep up during heavy rain.</li>
</ul>

<p>When we replace a basement window, we check the condition of the window well and the caulking around the frame. If the well drainage is a problem, we will let you know what needs to be addressed to protect the new window.</p>

<h2 id="insulation-and-energy">Insulation and Energy Performance</h2>

<p>Older basement windows are often single-pane glass in steel or aluminum frames with no thermal break. These windows have almost no insulating value. In winter, they radiate cold into the basement and can cause condensation on the frame and surrounding wall.</p>

<p>Replacing an old single-pane basement window with a modern double-pane sealed unit makes a noticeable difference in basement comfort and energy bills. The improvement is especially significant if you use your basement as living space.</p>

<p>When ordering a replacement sealed unit or window, you can choose to add argon gas fill or a Low-E coating for additional energy performance. These are options your technician can discuss during the measurement visit. For more on glass options, see our guide to <a href="/blog/types-of-window-glass-explained">types of window glass</a>.</p>

<h2 id="how-replacement-works">How Basement Window Replacement Works</h2>

<h3>Glass-only replacement</h3>
<ol>
  <li>We remove the glazing stops and take out the old sealed unit.</li>
  <li>We measure the opening and order a new sealed unit made to size (5 to 15 business days).</li>
  <li>We install the new sealed unit, replace the glazing stops, and reseal the perimeter.</li>
</ol>

<h3>Full window replacement</h3>
<ol>
  <li>We measure the existing opening and assess the frame and surrounding wall.</li>
  <li>We order the new window to the exact size (or to the new size if the opening is being enlarged).</li>
  <li>On installation day, we remove the old window, prepare the opening, install the new window, insulate the gap between the frame and the wall, and seal the exterior.</li>
  <li>If the opening needs to be enlarged for egress, the concrete cutting and structural work is done before the window is installed.</li>
</ol>

<p>For a step-by-step overview of our process from first call to final cleanup, visit our <a href="/our-process">service process page</a>.</p>

<h2 id="common-mistakes">Common Mistakes to Avoid</h2>

<ul>
  <li><strong>Replacing the whole window when only the glass has failed.</strong> If the frame is sound, you are paying for work you do not need. A glass-only replacement restores the window at a fraction of the cost.</li>
  <li><strong>Ignoring the window well.</strong> A new window in a flooded well will fail faster than the old one. Address drainage before or during the window replacement.</li>
  <li><strong>Skipping the caulking.</strong> The joint between the window frame and the foundation wall must be sealed with a flexible, exterior-grade caulk. Rigid caulk cracks with seasonal movement. Spray foam alone is not a substitute for proper exterior caulking.</li>
  <li><strong>Assuming all basement windows need to be egress.</strong> Egress is required for bedrooms and sleeping areas. Utility rooms, laundry rooms, and storage areas do not require egress windows (though they are still a good idea for safety).</li>
  <li><strong>Forgetting about permits.</strong> In most Ontario municipalities, replacing a window in an existing opening of the same size does not require a permit. Enlarging the opening does, because it involves structural changes to the foundation wall. Check with your local building department.</li>
</ul>

<h2 id="faq">FAQ</h2>

<h3>Can you replace basement windows in winter?</h3>

<p>Yes. We replace basement windows year-round. The opening is exposed for a short time during installation, and we work efficiently to minimize heat loss. Caulking and sealants are applied using products rated for cold-weather application. For more on this topic, see our post on <a href="/blog/replace-window-glass-in-winter">replacing window glass in winter</a>.</p>

<h3>How long does basement window replacement take?</h3>

<p>A glass-only replacement takes about 20 to 30 minutes per window on installation day. A full window replacement (same-size opening) takes one to two hours per window. If the opening needs to be enlarged, add time for concrete cutting and structural work.</p>

<h3>My basement windows are glass block. Can you replace them with regular windows?</h3>

<p>Yes. We remove the glass block, prepare the opening, and install a standard vinyl or aluminum window. This gives you ventilation, easier cleaning, and (if sized correctly) egress capability that glass block cannot provide.</p>

<h3>Do I need to clear furniture away from the windows before the appointment?</h3>

<p>Yes. We need clear access to the window from inside. Move furniture, storage boxes, and anything else at least one metre (about three feet) back from the window. On the outside, make sure the window well is accessible and not blocked by planters, hoses, or debris.</p>

<h3>Will replacing my basement windows help with moisture and mould?</h3>

<p>It helps, but it may not solve the problem entirely. New sealed units eliminate condensation between the panes, and a proper seal between the frame and the wall stops air and water leaks. But if the moisture source is groundwater seeping through the foundation wall, the solution is waterproofing, not just new windows. We will tell you during the assessment if the problem looks like it goes beyond the window itself.</p>

<p>Need a basement window assessed or replaced? Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a written quote</a>. We handle both glass-only and full window replacement across Toronto, Vaughan, Mississauga, Brampton, and the entire GTA.</p>
`,
  },
  {
    slug: "how-long-do-sealed-units-last",
    title: "How Long Do Sealed Window Units Last? What Toronto Homeowners Should Know",
    metaTitle: "How Long Do Sealed Window Units Last?",
    metaDescription:
      "Sealed window units typically last 15 to 25 years before the seal fails. Learn what affects their lifespan, signs of failure, and when to replace the glass.",
    excerpt:
      "Every double- or triple-pane window in your home contains a sealed unit: two or three panes of glass bonded together with a spacer and an airtight seal. When that seal fails, moisture gets trapped between the panes and your window fogs up. Knowing how long sealed units last helps you plan repairs before the problem spreads.",
    publishedAt: "2026-11-19",
    author: "Dan",
    readingTime: 7,
    coverImage: "/images/services/foggy-window-real.webp",
    tags: ["Sealed Units", "Window Maintenance", "Glass Repair"],
    sections: [
      { id: "what-is-a-sealed-unit", title: "What Is a Sealed Unit?" },
      { id: "typical-lifespan", title: "Typical Lifespan: 15 to 25 Years" },
      { id: "what-shortens-lifespan", title: "What Shortens the Lifespan" },
      { id: "what-extends-lifespan", title: "What Extends the Lifespan" },
      { id: "signs-of-seal-failure", title: "Signs of Seal Failure" },
      { id: "can-a-failed-seal-be-repaired", title: "Can a Failed Seal Be Repaired?" },
      { id: "replace-the-glass-not-the-window", title: "Replace the Glass, Not the Window" },
      { id: "how-replacement-works", title: "How Sealed Unit Replacement Works" },
      { id: "what-about-argon-and-low-e", title: "What About Argon Gas and Low-E Coatings?" },
      { id: "when-to-act", title: "When to Act" },
      { id: "faq", title: "FAQ" },
    ],
    content: `
<p>Every double- or triple-pane window in your home contains a sealed unit (also called an insulated glass unit, or IGU). It is made of two or three panes of glass bonded together with a spacer bar around the perimeter and an airtight seal holding it all together. The space between the panes is filled with air or an insulating gas.</p>

<p>When that seal eventually fails, moisture gets trapped between the panes. The result is a foggy, hazy window that no amount of cleaning will fix, because the condensation is on the inside. Knowing how long sealed units last, and what affects their lifespan, helps you plan ahead and avoid overpaying for repairs you do not need yet.</p>

<h2 id="what-is-a-sealed-unit">What Is a Sealed Unit?</h2>

<p>A sealed unit is the glass portion of your window, separate from the frame. It consists of:</p>

<ul>
  <li><strong>Two or three panes of glass</strong> (tempered, laminated, or annealed depending on the application)</li>
  <li><strong>A spacer bar</strong> around the perimeter that holds the panes apart and contains a desiccant to absorb residual moisture</li>
  <li><strong>A primary seal</strong> (typically polyisobutylene) that blocks moisture vapour</li>
  <li><strong>A secondary seal</strong> (usually polysulfide or silicone) that bonds the panes to the spacer and provides structural strength</li>
  <li><strong>An insulating fill</strong> between the panes: dry air, argon gas, or krypton gas</li>
</ul>

<p>The sealed unit sits inside your window frame, held in place by glazing stops or a gasket. When the glass fails, you can replace just the sealed unit and keep the frame, as long as the frame itself is in good condition.</p>

<h2 id="typical-lifespan">Typical Lifespan: 15 to 25 Years</h2>

<p>Most sealed units installed in Canadian homes last between 15 and 25 years before the seal degrades enough to let moisture in. Some last longer, and some fail sooner. The range depends on several factors.</p>

<p><strong>Quality of the original seal</strong> is the biggest factor. Factory-sealed units from reputable glass manufacturers use dual-seal systems (a vapour barrier plus a structural seal) that hold up well over decades. Single-seal units, common in lower-cost windows, tend to fail earlier.</p>

<p><strong>Spacer bar material matters.</strong> Older aluminum spacers conduct heat and cold directly between the panes, creating a temperature differential at the edge that stresses the seal. Warm-edge spacers (made from stainless steel, foam, or composite materials) reduce this stress and help the seal last longer.</p>

<p><strong>Installation quality plays a role too.</strong> A sealed unit that was properly glazed, with the right amount of setting blocks and no pressure points, will outlast one that was installed with uneven pressure on the glass.</p>

<h2 id="what-shortens-lifespan">What Shortens the Lifespan</h2>

<ul>
  <li><strong>Direct sun exposure:</strong> South- and west-facing windows absorb more heat, which causes the gas between the panes to expand and contract repeatedly. Over years, this pumping action fatigues the seal.</li>
  <li><strong>Toronto's freeze-thaw cycles:</strong> Ontario winters put extreme thermal stress on window seals. The glass contracts in cold weather and expands on warm days, and each cycle works the seal a little more.</li>
  <li><strong>Dark-coloured frames:</strong> Dark vinyl or aluminum frames absorb more heat, raising the temperature at the edge seal beyond what the sealant was designed for.</li>
  <li><strong>High altitude:</strong> Less relevant in Toronto, but homes at higher elevations see more seal stress from the pressure differential between the gas fill and the thinner outside air.</li>
  <li><strong>Poor drainage in the frame:</strong> If weep holes in the frame are blocked, water sits against the edge seal and accelerates breakdown.</li>
</ul>

<h2 id="what-extends-lifespan">What Extends the Lifespan</h2>

<ul>
  <li><strong>Warm-edge spacers:</strong> Reduce thermal stress at the seal.</li>
  <li><strong>Dual-seal construction:</strong> A vapour seal plus a structural seal gives two layers of protection instead of one.</li>
  <li><strong>Proper frame drainage:</strong> Clean weep holes let water drain away from the edge seal.</li>
  <li><strong>Shade from overhangs or trees:</strong> Reducing direct sun exposure lowers the thermal cycling load on south-facing windows.</li>
  <li><strong>Quality installation:</strong> Correct shimming, insulation around the frame, and proper glazing all reduce stress on the sealed unit.</li>
</ul>

<h2 id="signs-of-seal-failure">Signs of Seal Failure</h2>

<p>Seal failure does not happen overnight. Here is what to watch for, roughly in order of progression:</p>

<ol>
  <li><strong>Haze that comes and goes.</strong> On humid days or cold mornings, you notice a faint cloudiness between the panes. It clears when conditions change. This is early-stage seal failure: the seal has a small breach, and moisture enters and exits with temperature and humidity swings.</li>
  <li><strong>Persistent fog between the panes.</strong> The haze stops clearing. The desiccant in the spacer bar has absorbed all the moisture it can, and condensation now sits permanently between the glass. This is the most common stage at which homeowners notice the problem.</li>
  <li><strong>Visible moisture droplets or streaks.</strong> Water runs or pools between the panes. The seal has failed enough that liquid water, not just vapour, is entering the unit.</li>
  <li><strong>White mineral deposits on the inner glass surfaces.</strong> Over time, repeated cycles of condensation and evaporation leave calcium and mineral stains on the inside surfaces of the glass. These deposits cannot be cleaned because they are between the sealed panes.</li>
</ol>

<p>At any of these stages, the fix is the same: <a href="/foggy-windows">replace the sealed unit</a>. There is no way to reseal the existing unit or remove the moisture from between the panes permanently.</p>

<h2 id="can-a-failed-seal-be-repaired">Can a Failed Seal Be Repaired?</h2>

<p>No. Once the seal has failed, the unit cannot be restored. Some companies advertise "defogging" services that drill a hole into the sealed unit, inject a cleaning agent, and plug the hole. This temporarily removes the visible moisture, but it does not restore the seal or the insulating gas fill. The fog returns, usually within months, and the window's energy performance remains degraded because the insulating gas is gone.</p>

<p>The only permanent fix is a new sealed unit.</p>

<h2 id="replace-the-glass-not-the-window">Replace the Glass, Not the Window</h2>

<p>This is the point most homeowners miss: a failed sealed unit does not mean you need a new window. If the frame is in good shape (no rot, no warping, opens and closes properly), you replace just the glass. The sealed unit slides out of the frame, and a new one goes in.</p>

<p>Sealed unit replacement costs a fraction of full <a href="/window-replacement">window replacement</a>. You keep your existing frame, trim, and interior finish. No construction, no drywall touch-ups, no repainting.</p>

<p>Full window replacement makes sense only when the frame itself has failed: rotted wood, cracked vinyl, warped aluminum, or hardware that can no longer be sourced. For a detailed comparison, see our guide to <a href="/blog/replace-vs-repair-windows-toronto">replacing vs repairing windows in Toronto</a>.</p>

<h2 id="how-replacement-works">How Sealed Unit Replacement Works</h2>

<ol>
  <li><strong>We measure the existing unit.</strong> A technician visits your home, removes the glazing stops, and measures the exact thickness, width, and height of the sealed unit. We also note the glass type and spacer configuration.</li>
  <li><strong>Your new unit is custom-made.</strong> Every sealed unit is made to order. Production takes 5 to 15 business days depending on the glass type and size.</li>
  <li><strong>We install the new unit.</strong> The old glass comes out, the new unit goes in, and the glazing stops are reinstalled. The whole process takes about 20 to 30 minutes per window.</li>
  <li><strong>Your window is clear again.</strong> No more fog, full insulating performance restored, and 2 years parts and labour on the new unit, then up to 5 years on the glass.</li>
</ol>

<p>For more on how the process works from start to finish, see our <a href="/our-process">service process page</a>.</p>

<h2 id="what-about-argon-and-low-e">What About Argon Gas and Low-E Coatings?</h2>

<p>When you replace a sealed unit, you can choose the same glass configuration as the original, or you can upgrade.</p>

<p><strong>Argon gas fill</strong> is denser than air and reduces heat transfer between the panes. It improves the window's insulating value by roughly 10 to 15 percent compared to dry air fill. It is available as an option when ordering the replacement unit.</p>

<p><strong>Low-E (low emissivity) coatings</strong> are thin metallic layers applied to one of the inner glass surfaces. They reflect infrared heat back into your home in winter and block solar heat gain in summer. Low-E coatings make a noticeable difference on south- and west-facing windows. They are also available as an upgrade option.</p>

<p>Neither argon fill nor Low-E coatings are required. They are upgrades that your technician can discuss with you during the measurement visit, with pricing included in your written quote. For a deeper look at glass types, read our guide to <a href="/blog/types-of-window-glass-explained">types of window glass explained</a>.</p>

<h2 id="when-to-act">When to Act</h2>

<p>A foggy window is not an emergency, but it is worth addressing sooner rather than later for three reasons:</p>

<ol>
  <li><strong>Energy cost.</strong> A failed seal means lost insulating gas and reduced thermal performance. Each foggy window costs you a small but real amount in heating and cooling every month.</li>
  <li><strong>Mineral staining.</strong> The longer moisture sits between the panes, the more likely it is to leave permanent mineral deposits on the glass. If you wait too long, even a new sealed unit will not make the window look perfect, because the deposits are etched into the glass surfaces that face outward once the old unit is removed. Replacing sooner avoids this.</li>
  <li><strong>Resale impact.</strong> Foggy windows are one of the first things buyers notice during a showing. Clear glass signals a well-maintained home.</li>
</ol>

<p>That said, there is no structural risk from a failed seal. Your window will not fall apart. You have time to plan and budget the repair.</p>

<h2 id="faq">FAQ</h2>

<h3>Can I replace just one window's sealed unit, or do I need to do them all at once?</h3>

<p>You can replace them one at a time. Each sealed unit is independent. We recommend starting with the worst ones and doing the rest as budget allows. There is no advantage to replacing units that are still clear and performing well.</p>

<h3>Will the new glass match my other windows?</h3>

<p>Yes. We match the glass type, thickness, and tint of your existing windows. If your other windows have Low-E or tinted glass, we order the same specification so the replacement blends in.</p>

<h3>How do I know if my frame is still good?</h3>

<p>Check for rot (press a screwdriver into the wood: if it sinks in, the wood is soft), cracks in vinyl frames, corrosion on aluminum frames, and whether the window still opens, closes, and locks properly. If the frame passes these checks, sealed unit replacement is all you need. If the frame is compromised, <a href="/window-replacement">full window replacement</a> is the better option.</p>

<h3>My windows are 10 years old and one is foggy. Is that normal?</h3>

<p>It is early but not unusual. South-facing windows, windows with dark frames, or windows from manufacturers that used single-seal construction can fail in under 15 years. It does not mean all your windows will fail at the same time. Replace the one that failed and monitor the rest.</p>

<h3>Does the warranty on my original windows cover seal failure?</h3>

<p>Many window manufacturers offer a 15- or 20-year seal warranty. Check your paperwork or contact the manufacturer. If the warranty is still active, you may get a replacement sealed unit at no cost (though you may still need to pay for installation). If the warranty has expired or you cannot find your paperwork, we provide a new sealed unit with our own <a href="/warranty">warranty</a>: 2 years parts and labour, then up to 5 years on the glass.</p>

<p>Have a foggy window you need fixed? Call <a href="tel:+14373448490">437-344-8490</a> or <a href="/contact">request a written quote</a>. We replace sealed units across Toronto, Vaughan, Mississauga, Brampton, Markham, Richmond Hill, and the entire GTA. Most jobs are completed in two visits: one to measure, one to install.</p>
`,
  },
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

<p>If responsibility lands with you as the owner, the repair is usually smaller than you expect. A <a href="/foggy-windows">fogged sealed unit is replaced without touching the frame</a>. A failed crank is a part, not a window. Our post on <a href="/blog/foggy-window-repair-cost-gta" class="text-accent hover:underline font-medium">foggy window repair costs</a> gives you a realistic idea of what to budget, and <a href="/blog/window-repair-vs-replacement-toronto" class="text-accent hover:underline font-medium">repair vs replacement</a> helps you decide whether the glass or the whole window needs attention.</p>

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

<p>In those cases you are better off with a full <a href="/glass-replacement">glass replacement</a> or a new window, and replacing just the sealed unit would be money spent twice.</p>

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

<p>Every sealed unit replacement from LuminaSky comes with our warranty: 2 years parts and labour, then up to 5 years on the glass. Full terms are on our <a href="/warranty">warranty page</a>.</p>

<h2 id="faq">FAQ</h2>

<h3>Can I just repair the seal instead of replacing the glass?</h3>

<p>Once the seal has failed and moisture has entered, the only lasting fix is to replace the sealed glass unit. "Defogging" services drill holes and try to remove moisture, but the insulating gas is already gone and the fog almost always returns. A new sealed unit restores both clarity and insulation. For a deeper look at <a href="/blog/why-windows-fog-between-panes" class="text-accent hover:underline font-medium">why windows fog between panes</a>, see our detailed guide.</p>

<h3>How do I know if my foggy window needs the glass replaced or the whole window?</h3>

<p>Check the frame. If the wood or vinyl frame is solid, no rot, no warping, and the hardware works fine, you only need the glass unit replaced. If the frame is crumbling, cracked, or pulling away from the wall, a full replacement may make more sense. A technician can confirm during a no-obligation assessment. Our post on <a href="/blog/replace-vs-repair-windows-toronto" class="text-accent hover:underline font-medium">repair vs replacement</a> walks through the decision in detail.</p>

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

<p>In most cases, yes, if the damage was caused by a covered peril like a storm, vandalism, or attempted break-in. Contact your insurer and provide photos, a police report number (for break-ins), and the repair receipt. Your deductible still applies. Accidental damage from inside (a ball hitting the window, furniture falling into it) is often covered too, depending on your policy. Our <a href="/blog/home-insurance-broken-window-ontario" class="text-accent hover:underline font-medium">insurance claims guide</a> walks through the process step by step.</p>

<p>For more on glass types that resist impact, see our post on <a href="/blog/safety-glass-ontario-building-code" class="text-accent hover:underline font-medium">safety glass and the Ontario Building Code</a>. If your business was affected, our <a href="/blog/storefront-glass-emergency-board-up" class="text-accent hover:underline font-medium">storefront board-up guide</a> covers what to expect for <a href="/commercial-glass-repair" class="text-accent hover:underline font-medium">commercial properties</a>.</p>

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
<li><strong>Foggy or cloudy glass:</strong> failed seals on double-pane units. We replace the sealed glass unit while keeping the frame. Covered for 2 years parts and labour, then up to 5 years on the glass.</li>
<li><strong>Broken or stiff cranks:</strong> worn gears, bent arms, corroded tracks. Most <a href="/window-crank-repair-vaughan">crank repairs</a> are completed on the same day, on the first visit.</li>
<li><strong>Patio doors that stick or won't lock:</strong> worn rollers, damaged tracks or misaligned frames.</li>
<li><strong>Drafts around the sash:</strong> can be caused by failed weatherstripping, a warped sash, or a seal that has pulled away from the frame.</li>
<li><strong>Cracked or broken glass:</strong> from impact, thermal stress or failed tempered units. We measure and order replacement glass to the exact size.</li>
</ul>

<h2 id="getting-started">Getting Started</h2>

<p>Send us a few photos of the problem and we will tell you what is going on and what it will take to fix it. No charge for the photo assessment. If we need to come out, the visit is $30, credited toward the repair if you go ahead.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or visit our <a href="/window-repair-vaughan">Vaughan window repair</a> page for more details. We are available 24/7 and serve every neighbourhood in Vaughan.</p>

<p>Related reading: <a href="/blog/vaughan-sealed-unit-replacement-winter" class="text-accent hover:underline font-medium">Why Vaughan Homes Need Sealed Unit Replacement Before Winter</a> covers fall timing, and <a href="/blog/foggy-window-repair-cost-gta" class="text-accent hover:underline font-medium">How Much Does Foggy Window Repair Cost in the GTA?</a> breaks down pricing.</p>
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

<p>Every new sealed unit carries 2 years parts and labour, then up to 5 years on the glass.</p>

<h2 id="which-homes-are-most-at-risk">Which Vaughan Homes Are Most at Risk</h2>

<p>Homes built between 1985 and 2000 are in the highest-risk window right now. That covers large parts of Woodbridge, Concord, the Vaughan side of Thornhill, and the older sections of Maple. The original sealed units in these homes are 25 to 40 years old, well past the typical lifespan of the perimeter seal.</p>

<p>If you are in one of these areas and you have not replaced any glass yet, it is worth checking all of your windows at once. Seal failure tends to happen across the house within a few years, because all the units were made at the same time with the same materials. Replacing them together is more efficient and often more cost-effective than doing them one at a time over several years.</p>

<h2 id="get-a-quote">Get a Quote</h2>

<p>Send us photos of your fogged or failed windows and we will get back to you with a quote. No obligation, no pressure. Visit our <a href="/foggy-glass-repair-vaughan">Vaughan foggy glass repair</a> page or call <a href="tel:+14373448490">437-344-8490</a>. We also handle <a href="/glass-replacement">full glass replacement</a> and <a href="/window-repair-vaughan">general window repair</a> across every neighbourhood in Vaughan.</p>

<p>Related reading: <a href="/blog/why-windows-fog-between-panes" class="text-accent hover:underline font-medium">Why Windows Fog Between Panes</a> explains the science behind seal failure, and <a href="/blog/replace-window-glass-in-winter" class="text-accent hover:underline font-medium">Can You Replace Window Glass in Winter?</a> answers the most common scheduling question we get during cold months.</p>
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
<li><strong>Installation and cleanup:</strong> We install the new glass, dispose of the old material, and clean up the work area. Every job carries a warranty: 2 years parts and labour on sealed glass units, then up to 5 years on the glass.</li>
</ol>

<h2 id="get-a-quote">Get a Quote</h2>

<p>Whether you have one cracked panel or a full storefront that needs replacing, send us photos and we will get you a written quote. Visit our <a href="/commercial-glass-repair-vaughan">Vaughan commercial glass repair</a> page or call <a href="tel:+14373448490">437-344-8490</a>. For after-hours emergencies, the same number reaches us around the clock.</p>

<p>Related reading: <a href="/blog/emergency-glass-repair-toronto" class="text-accent hover:underline font-medium">Emergency Glass Repair in Toronto</a> covers our board-up and same-day service, and <a href="/blog/home-insurance-broken-window-ontario" class="text-accent hover:underline font-medium">Does Home Insurance Cover a Broken Window?</a> explains the claims process for commercial policies as well.</p>
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

<p><strong>Repair:</strong> a failed sealed unit does not mean you need a new window. In most cases, only the glass unit itself needs replacing. The frame stays. Glass is measured first, custom-made to your exact opening dimensions, then installed into the existing frame. This costs a fraction of full window replacement and restores both clarity and insulation. Every sealed unit we install carries 2 years parts and labour, then up to 5 years on the glass.</p>

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

<p>If you are not sure what type of glass your windows have, or which type you need for a replacement, we can help. LuminaSky Glass Services handles all types of residential glass across Toronto, Vaughan, Richmond Hill, Markham, Mississauga, and the wider GTA. Glass is measured first, custom-made to your exact specifications, then installed. Every sealed unit we install carries 2 years parts and labour, then up to 5 years on the glass.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or visit our <a href="/contact">contact page</a> to get a written quote on the spot. We are available 24/7. Family-Owned Since 2024. 76 5-Star Google Reviews.</p>
`,
  },
  {
    slug: "home-insurance-broken-window-ontario",
    coverImage: "/images/services/foggy-window-real.webp",
    title: "Does Home Insurance Cover a Broken Window in Ontario?",
    metaTitle: "Does Home Insurance Cover Broken Windows in Ontario?",
    metaDescription:
      "When does Ontario home insurance cover broken window glass? Deductibles, exclusions, the claims process, and when paying out of pocket is smarter.",
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

<p>Glass is measured first, custom-made to fit your exact opening, then installed. Every sealed unit we install carries 2 years parts and labour, then up to 5 years on the glass. Hardware repairs carry a 1-year warranty. These warranties cover manufacturing defects and workmanship, not vandalism, impact damage, or physical breakage.</p>

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
      "Ontario Building Code safety glass requirements: OBC Sections 9.6 and 9.8, tempered vs laminated, and what homeowners need to know for replacements.",
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

<p>Our warranties: 2 years parts and labour on sealed glass units, then up to 5 years on the glass, and 1-year warranty on hardware repairs. All warranties exclude vandalism, impact damage, and physical breakage.</p>

<p>Call <a href="tel:+14373448490">437-344-8490</a> or email <a href="mailto:service@luminasky.com">service@luminasky.com</a> to get a written quote on the spot. You can also reach us through our <a href="/contact">contact page</a>. LuminaSky Glass Services is available 24/7, serving Toronto, Vaughan, Richmond Hill, Markham, Mississauga, and the wider GTA. 76 5-Star Google Reviews. Family-Owned Since 2024.</p>
`,
  },
  {
    slug: "exterior-window-condensation-normal",
    title: "Condensation on the Outside of Your Windows? Here Is Why.",
    metaTitle: "Exterior Window Condensation Explained for Ontario Homeowners",
    metaDescription:
      "Moisture on the outside of your windows is usually a good sign. Dew point, radiative cooling, three types of condensation, and when fog signals a failed seal.",
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

<p>If you are seeing fog between the panes, or persistent moisture on the interior that is causing mould or water damage, that is a different situation entirely. <a href="/foggy-windows">Foggy sealed units</a> can be replaced without removing the frame. We measure on site, order custom glass to your exact dimensions, and install it into your existing frame. The process typically takes two visits: one to measure and one to install. Every sealed unit we install carries 2 years parts and labour, then up to 5 years on the glass. Hardware repairs carry a 1-year warranty. All warranties exclude vandalism, impact damage, and physical breakage.</p>

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

<p>One tip: take a walk around your home in early spring and check every screen. Open each window, inspect the mesh for tears or sag, and test sliding screens for smooth operation. Our <a href="/blog/spring-window-inspection-checklist" class="text-accent hover:underline font-medium">spring window inspection checklist</a> covers screens along with every other component to check. For window hardware that is sticking or grinding when you open the window itself, that is a separate issue covered on our <a href="/cranks">window crank repair</a> page.</p>

<h2 id="what-to-do-next">What to Do Next</h2>

<p>If you have a torn, sagging, or damaged screen, send us a photo and we can usually tell you right away whether it needs a repair or a replacement. Call <a href="tel:+14373448490">437-344-8490</a> or email <a href="mailto:service@luminasky.com">service@luminasky.com</a>. We are available 24/7.</p>

<p>For a full overview of our screen services, including window screens, patio door screens, and storm door screens, visit our <a href="/window-screens">Window Screens</a> page. If your patio door screen tracks are part of a larger sliding door issue, our <a href="/blog/sliding-patio-door-wont-slide" class="text-accent hover:underline font-medium">patio door troubleshooting guide</a> covers the full range of roller and track problems.</p>

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

<p>Have questions about your patio door? Call <a href="tel:+14373448490">437-344-8490</a> or email <a href="mailto:service@luminasky.com">service@luminasky.com</a>. You can also send us a photo for a quick assessment. Visit our <a href="/patio-door-repair">patio door repair</a> page to see the full range of patio door services we offer, including <a href="/blog/sliding-patio-door-wont-slide" class="text-accent hover:underline font-medium">roller and track repairs</a>.</p>

<p>Related reading: <a href="/blog/when-to-replace-patio-door-rollers" class="text-accent hover:underline font-medium">When to Replace Patio Door Rollers</a> and <a href="/blog/safety-glass-ontario-building-code" class="text-accent hover:underline font-medium">Safety Glass and the Ontario Building Code</a>.</p>

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

<p>Related reading: <a href="/blog/window-screen-repair-vs-replacement" class="text-accent hover:underline font-medium">Window Screen Repair vs Replacement</a> covers the same repair-or-replace decision for window screens, and our <a href="/blog/front-door-glass-styles-guide" class="text-accent hover:underline font-medium">front door glass styles guide</a> explores options if your entry door glass also needs attention.</p>

<p>LuminaSky Glass Services. Family-Owned Since 2024. 76 5-Star Google Reviews. <a href="/contact">Get a Written Quote on the Spot</a>.</p>
`,
  },
  {
    slug: "window-pane-replacement-guide",
    title: "Window Pane Replacement: When You Only Need New Glass",
    metaTitle: "Window Pane Replacement: When You Only Need New Glass",
    metaDescription:
      "Not every foggy or cracked window needs a full replacement. Learn when a pane-only swap saves money and how the sealed unit process works in Ontario.",
    excerpt:
      "A cracked or foggy pane does not always mean you need a new window. In most cases the glass can be replaced on its own, keeping your existing frame. Here is how the process works and what affects the cost.",
    publishedAt: "2026-11-05",
    author: "Dan",
    readingTime: 7,
    tags: ["Glass Replacement", "Sealed Units", "Homeowner Guide", "Window Repair"],
    sections: [
      { id: "pane-vs-full-window", title: "Pane Replacement vs Full Window Replacement" },
      { id: "when-glass-only", title: "When Glass-Only Replacement Makes Sense" },
      { id: "how-sealed-units-work", title: "How Sealed Units Are Made" },
      { id: "cost-factors", title: "What Affects the Cost" },
      { id: "the-process", title: "The Replacement Process" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>When a window cracks, fogs up between the panes, or just stops insulating properly, the first thought is often: do I need a whole new window? In most cases the answer is no. If the frame is structurally sound and operates correctly, only the glass pane, the sealed unit, needs to be swapped out. This is what's called window pane replacement, and it's a fraction of the cost of a full window replacement.</p>

<h2 id="pane-vs-full-window">Pane Replacement vs Full Window Replacement</h2>

<p>A full window replacement means removing the entire window, frame included, and installing a new one. This is major work: cutting into the wall opening, adjusting the rough opening, re-insulating, re-trimming, and often repainting. It costs several times more than a glass-only swap and usually takes a full day per window.</p>

<p>Window pane replacement, by contrast, keeps the existing frame in place. The old glass sealed unit is removed and a new one is set into the same frame. The window looks and functions exactly as it did, with fresh, properly sealed glass.</p>

<p>When should you consider a full replacement instead? Only when the frame itself is the problem: rotting wood, cracked vinyl that no longer holds its shape, or hardware that is discontinued and cannot be sourced. If the frame is solid and the hardware works, <a href="/glass-replacement" class="text-accent hover:underline font-medium">glass replacement</a> is almost always the better option.</p>

<h2 id="when-glass-only">When Glass-Only Replacement Makes Sense</h2>

<ul>
  <li><strong>Foggy glass.</strong> Condensation trapped between the panes means the seal has failed. The gas fill is gone and the glass no longer insulates properly. A new sealed unit restores full insulation. See our detailed guide on <a href="/foggy-windows" class="text-accent hover:underline font-medium">foggy window repair</a>.</li>
  <li><strong>Cracked or chipped glass.</strong> A single crack in one pane of a double-pane unit compromises the seal. The entire sealed unit needs replacing, but the frame is fine.</li>
  <li><strong>Upgrading glass performance.</strong> If you want to improve insulation or noise reduction, you can swap the existing sealed unit for one with Low-E coatings, argon gas, or thicker glass without replacing the frame.</li>
  <li><strong>Storm or impact damage.</strong> A broken pane from a stray ball or fallen branch rarely damages the frame. The glass comes out, a new unit goes in.</li>
</ul>

<h2 id="how-sealed-units-work">How Sealed Units Are Made</h2>

<p>A sealed unit (also called an IGU, insulated glass unit) is two or three panes of glass held apart by a spacer bar and bonded together with sealant around the entire perimeter. The gap between the panes is filled with an insulating gas, usually argon, which slows heat transfer better than air.</p>

<p>Each sealed unit is custom-made to the exact measurements of the frame. There is no universal size. This is why <a href="/glass-replacement" class="text-accent hover:underline font-medium">glass replacement</a> involves two visits: a measurement visit and an installation visit. The glass is measured first, custom-made at the factory, then installed once it arrives.</p>

<p>The spacer bar can be aluminium or a "warm-edge" composite material. Warm-edge spacers reduce heat loss at the edge of the glass and lower the chance of condensation forming around the perimeter.</p>

<h2 id="cost-factors">What Affects the Cost</h2>

<p>Several factors determine what a pane replacement will cost:</p>

<ul>
  <li><strong>Size of the glass.</strong> A small bathroom window and a large living room picture window use very different amounts of glass. Larger units cost more.</li>
  <li><strong>Number of panes.</strong> A triple-pane sealed unit costs more than a double-pane one.</li>
  <li><strong>Glass coatings.</strong> Low-E coatings, tinted glass, or laminated safety glass add to the unit cost.</li>
  <li><strong>Shape.</strong> Rectangular units are standard. Arched, circular, or custom-shaped units cost more because they require special tooling.</li>
  <li><strong>Accessibility.</strong> A ground-floor window is straightforward. A second-storey window that requires a ladder, or a skylight that requires roof access, adds to the labour.</li>
  <li><strong>Window type.</strong> Casement, slider, and picture windows have different removal procedures. Some take more time than others.</li>
</ul>

<p>As a rough guide, most residential pane replacements in Ontario fall between $200 and $600 per unit for standard double-pane glass. Triple-pane, oversized, or specialty glass can run higher. The best way to get an exact number is a site visit: the technician measures the glass, checks the frame condition, and gives you a written quote on the spot.</p>

<h2 id="the-process">The Replacement Process</h2>

<ol>
  <li><strong>Site visit and measurement.</strong> A technician inspects the window, confirms that the frame is in good condition, and takes precise measurements of the sealed unit. You receive a written quote on the spot. The $30 site visit fee is credited toward the repair if you go ahead.</li>
  <li><strong>Manufacturing.</strong> The new sealed unit is custom-made to your measurements. This typically takes 5 to 10 business days depending on the glass type.</li>
  <li><strong>Installation.</strong> The technician removes the old sealed unit, cleans the frame channel, sets the new glass, and re-secures the glazing stops. The window is tested for proper operation and sealed.</li>
</ol>

<p>The installation itself usually takes 20 to 45 minutes per window, depending on the type and size. There is no drywall work, no painting, and no mess.</p>

<h2 id="faq">Common Questions</h2>

<h3>Can I replace just one pane of a double-pane window?</h3>
<p>No. A double-pane window uses a sealed unit where both panes are bonded together with a gas fill between them. If one pane is damaged, the entire sealed unit is replaced. You cannot swap a single pane without breaking the seal.</p>

<h3>How long does a new sealed unit last?</h3>
<p>A properly manufactured sealed unit typically lasts 15 to 25 years before the seal degrades. We provide a 5-year seal warranty on all sealed unit replacements.</p>

<h3>Will the new glass match my other windows?</h3>
<p>Yes. The new sealed unit is built to the same specifications as the original: same thickness, same spacer width, same glass type. If you want to upgrade (for example, adding Low-E when the original didn't have it), the appearance change is minimal since Low-E coatings are nearly invisible.</p>

<h3>Do I need to be home for the measurement visit?</h3>
<p>Someone needs to be home to give the technician access to the windows. The measurement visit is quick, usually 15 to 30 minutes depending on how many windows need measuring.</p>
`,
  },
  {
    slug: "glass-inserts-for-front-doors",
    title: "Glass Inserts for Front Doors: Styles, Sizes, and Replacement",
    metaTitle: "Glass Inserts for Front Doors: Styles, Sizes, and Replacement",
    metaDescription:
      "Thinking about replacing or upgrading the glass insert in your front door? Here are the styles, standard sizes, and how the replacement process works.",
    excerpt:
      "Front door glass inserts come in dozens of styles, from clear to decorative to frosted. When one cracks or fogs, replacement is straightforward. Here is what to know about sizes, styles, and the process.",
    publishedAt: "2026-11-08",
    author: "Dan",
    readingTime: 7,
    tags: ["Front Door Glass", "Door Glass Insert", "Decorative Glass", "Glass Replacement"],
    sections: [
      { id: "types-of-inserts", title: "Types of Door Glass Inserts" },
      { id: "standard-sizes", title: "Standard Sizes and Custom Options" },
      { id: "when-to-replace", title: "When to Replace a Door Glass Insert" },
      { id: "how-replacement-works", title: "How the Replacement Works" },
      { id: "choosing-a-style", title: "Choosing the Right Style" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>The glass insert in your front door does a lot of work. It lets natural light into the entryway, adds curb appeal, and sets the tone for the whole front of the house. When it cracks, fogs, or just looks dated, replacing the insert is far simpler and cheaper than replacing the entire door. Most <a href="/front-door-glass" class="text-accent hover:underline font-medium">front door glass</a> replacements keep the existing door and frame, swapping only the glass panel.</p>

<h2 id="types-of-inserts">Types of Door Glass Inserts</h2>

<h3>Clear glass</h3>
<p>Plain clear glass, usually in a double-pane sealed unit. Maximises light and visibility. Common in modern and minimalist door designs. The downside is zero privacy: anyone at your doorstep can see inside.</p>

<h3>Frosted or obscure glass</h3>
<p>Textured or acid-etched glass that lets light through while blocking a clear view. Popular choices include rain glass (vertical streaks), reed glass (narrow vertical lines), and satin etch (uniform haze). These give you natural light without sacrificing privacy.</p>

<h3>Decorative glass</h3>
<p>Patterned inserts with lead or zinc caming (the metal strips that hold decorative glass pieces together). These range from simple geometric designs to elaborate floral or stained-glass patterns. Decorative inserts are typically made as a full assembly: the decorative panel sandwiched between two panes of clear glass in a sealed unit.</p>

<h3>Low-E coated glass</h3>
<p>Clear or lightly tinted glass with a microscopically thin metallic coating that reflects heat. In winter it keeps warmth inside. In summer it keeps solar heat out. Available in any of the styles above.</p>

<h3>Textured privacy glass</h3>
<p>Glass with a pattern rolled into it during manufacturing: glue chip, flemish, baroque, or delta. Each creates a different level of distortion. These are single-pane textures that are then incorporated into a sealed unit.</p>

<h2 id="standard-sizes">Standard Sizes and Custom Options</h2>

<p>Door glass inserts come in several standard configurations:</p>

<ul>
  <li><strong>Half lite:</strong> Glass occupies the top half of the door. The most common configuration in Canadian entry doors.</li>
  <li><strong>Three-quarter lite:</strong> Glass covers roughly 75% of the door height, with a solid panel at the bottom.</li>
  <li><strong>Full lite:</strong> Glass runs nearly the full height of the door. Maximum light, minimum privacy without frosting.</li>
  <li><strong>Sidelite:</strong> The narrow glass panels on one or both sides of the door. Typically 8 to 14 inches wide.</li>
  <li><strong>Transom:</strong> The glass panel above the door. Can be rectangular, arched, or fan-shaped.</li>
</ul>

<p>Within each configuration, the exact dimensions vary by door manufacturer and model. There is no truly universal size. That is why every door glass replacement starts with a measurement visit: the technician measures the cutout in the door, notes the frame depth, and orders the glass to fit.</p>

<h2 id="when-to-replace">When to Replace a Door Glass Insert</h2>

<ul>
  <li><strong>Cracked glass.</strong> Impact damage from a package delivery, a storm, or just an unlucky knock. Even a small crack compromises the seal and the security of the door.</li>
  <li><strong>Foggy glass.</strong> Condensation between the panes means the sealed unit has failed. The glass no longer insulates properly and the fog will get worse over time.</li>
  <li><strong>Outdated decorative pattern.</strong> Styles change. If your door has a brass-camed floral insert from the 1990s and you want something cleaner, a glass swap updates the look without replacing the door.</li>
  <li><strong>Privacy upgrade.</strong> Switching from clear to frosted glass for a street-facing door.</li>
  <li><strong>Energy upgrade.</strong> Replacing an old single-pane or non-coated unit with a modern Low-E sealed unit.</li>
</ul>

<h2 id="how-replacement-works">How the Replacement Works</h2>

<p>Door glass replacement follows the same two-visit process as window glass:</p>

<ol>
  <li><strong>Measurement visit.</strong> The technician removes the interior trim or retaining frame around the glass insert, measures the glass precisely, and records the frame depth and any special requirements (decorative caming, tempered glass for safety code compliance, etc.). You get a written quote on the spot. The $30 site visit fee is credited toward the job if you proceed.</li>
  <li><strong>Installation visit.</strong> Once the new sealed unit arrives (typically 5 to 10 business days), the technician removes the old insert, cleans the channel, sets the new glass, re-secures the trim, and checks the seal.</li>
</ol>

<p>The installation itself usually takes 30 to 60 minutes per insert. For sidelites and transoms, each panel is measured and replaced individually.</p>

<p>Glass is measured first, custom-made, then installed. This ensures a precise fit with no gaps or pressure points that could cause premature seal failure.</p>

<h2 id="choosing-a-style">Choosing the Right Style</h2>

<p>A few practical considerations when picking a new insert:</p>

<ul>
  <li><strong>Privacy vs light.</strong> Frosted glass lets in about 80 to 90% of the light that clear glass does, while blocking visibility. If your door faces the street, frosted or textured glass is usually worth the slight reduction in brightness.</li>
  <li><strong>Decorative inserts and resale.</strong> Simple, clean patterns tend to appeal to more buyers than ornate designs. If you are planning to sell in the next few years, consider a subtle pattern or plain frosted glass.</li>
  <li><strong>Matching sidelites.</strong> If your door has sidelites, the glass style should match the door insert. Replacing just the door glass and leaving mismatched sidelites looks unfinished.</li>
  <li><strong>Building code.</strong> In Ontario, glass in doors and sidelites must be tempered or laminated safety glass. Any reputable supplier will handle this automatically, but verify if you are sourcing your own glass.</li>
  <li><strong>Wrought iron inserts.</strong> Some decorative inserts use wrought iron between the glass panes instead of traditional caming. These are durable and give a modern look, but they cost more and are heavier. The door must be able to support the weight.</li>
</ul>

<h2 id="faq">Common Questions</h2>

<h3>Can I change the style of my door glass insert?</h3>
<p>Yes. As long as the cutout dimensions stay the same, you can switch from decorative to clear, clear to frosted, or any other combination. The new glass is made to fit the existing opening.</p>

<h3>Is door glass tempered?</h3>
<p>By code in Ontario, yes. All glass in doors, sidelites, and any glass within 600 mm of a door must be safety glass (tempered or laminated). Your replacement glass will meet this requirement.</p>

<h3>Can I add glass to a solid door?</h3>
<p>Only if the door was designed for a glass insert. Cutting a new opening in a solid door weakens the structure and voids most door warranties. If you want a door with glass, it is better to replace the door entirely.</p>

<h3>How do I maintain my door glass insert?</h3>
<p>Clean it with glass cleaner and a soft cloth. For decorative inserts with caming, avoid abrasive cleaners that could scratch the metal. Check the perimeter seal once a year for any gaps or cracks, especially after a harsh winter.</p>
`,
  },
  {
    slug: "window-crank-handle-not-working",
    title: "Window Crank Handle Not Working? Here Is What to Check",
    metaTitle: "Window Crank Handle Not Working? Causes and Fixes",
    metaDescription:
      "A window crank that spins freely, sticks, or won't open the sash usually has a fixable cause. Here is what to check before calling for a repair.",
    excerpt:
      "If your window crank spins without opening the window, feels stiff, or has snapped off, the cause is usually a worn operator or stripped gears. Here is how to diagnose the problem and what the repair involves.",
    publishedAt: "2026-11-12",
    author: "Dan",
    readingTime: 6,
    tags: ["Window Hardware", "Window Cranks", "Casement Windows", "Repair"],
    sections: [
      { id: "how-cranks-work", title: "How a Window Crank Mechanism Works" },
      { id: "common-problems", title: "Common Crank Problems" },
      { id: "casement-vs-awning", title: "Casement vs Awning Cranks" },
      { id: "diy-checks", title: "What You Can Check Yourself" },
      { id: "when-to-call", title: "When to Call for a Repair" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>A window crank that does not work properly is one of the most common hardware issues on casement and awning windows. The handle might spin freely without moving the sash. It might feel stiff or jammed. It might have snapped off entirely. Each symptom points to a different part of the mechanism, and most of these repairs are straightforward once you know what has failed.</p>

<h2 id="how-cranks-work">How a Window Crank Mechanism Works</h2>

<p>When you turn a crank handle on a casement or awning window, the handle connects to an operator mechanism mounted inside the frame. The operator converts the rotational motion of the handle into a push-pull motion through a crank arm (also called an operator arm). That arm connects to a track or bracket on the sash and pushes the window open or pulls it closed.</p>

<p>The key components are:</p>
<ul>
  <li><strong>The handle:</strong> The part you grip and turn. Usually plastic, metal, or a combination.</li>
  <li><strong>The operator:</strong> A gearbox mounted in the window frame. Contains worm gears that multiply your turning force into enough push to move the sash.</li>
  <li><strong>The crank arm:</strong> A metal arm that extends from the operator to the sash.</li>
  <li><strong>The track or shoe:</strong> A channel on the sash where the crank arm's tip slides as the window opens and closes.</li>
</ul>

<p>Failure at any of these points stops the window from operating. The good news is that each part can be replaced individually. You almost never need to replace the entire window because of a crank problem.</p>

<h2 id="common-problems">Common Crank Problems</h2>

<h3>Handle spins freely</h3>
<p>This is the most common complaint. You turn the handle and it rotates without resistance, but the window does not move. The usual cause is stripped gears inside the operator. The worm gear teeth have worn down to the point where they no longer engage. The operator needs replacing.</p>

<p>Less commonly, the handle's spline (the star-shaped connector that fits into the operator shaft) has stripped. In this case, only the handle needs replacing.</p>

<h3>Handle is stiff or hard to turn</h3>
<p>If the handle turns but requires excessive force, the causes include:</p>
<ul>
  <li><strong>Dried-out lubrication.</strong> The gears inside the operator need periodic lubrication. Years without it causes friction and stiffness.</li>
  <li><strong>Corroded operator.</strong> Moisture getting into the operator housing causes internal corrosion, especially in kitchens and bathrooms.</li>
  <li><strong>Bent crank arm.</strong> If the arm has been bent (from forcing the window or accidental impact), it binds as it moves through its arc.</li>
  <li><strong>Sash misalignment.</strong> If the window frame has settled or the sash has sagged, the crank has to push against friction. This puts strain on the whole mechanism.</li>
  <li><strong>Paint or debris in the track.</strong> The shoe that slides along the sash track can jam if paint, caulking, or dirt has built up in the channel.</li>
</ul>

<h3>Handle has broken off</h3>
<p>Plastic handles become brittle over time, especially with sun exposure. A snapped handle is a simple replacement if the operator shaft underneath is intact. If the shaft has broken too, the operator needs replacing.</p>

<h3>Window won't close fully</h3>
<p>If the crank gets the window most of the way closed but it won't pull tight against the frame, the operator may be worn enough that it has lost travel distance, or the <a href="/cranks" class="text-accent hover:underline font-medium">crank arm</a> track has become obstructed. In some cases the lock mechanism is preventing full closure.</p>

<h2 id="casement-vs-awning">Casement vs Awning Cranks</h2>

<p>Casement and awning windows both use crank operators, but they are not interchangeable:</p>

<ul>
  <li><strong>Casement windows</strong> open outward on a side hinge, like a door. The crank arm pushes the bottom of the sash away from the frame.</li>
  <li><strong>Awning windows</strong> open outward from a top hinge. The crank arm pushes the bottom edge out while the top edge stays fixed.</li>
</ul>

<p>The operator geometry is different for each type. A casement operator will not work on an awning window and vice versa. When ordering a replacement, the window type matters.</p>

<p>The brand also matters. While the basic function is the same, operator dimensions, mounting holes, and arm lengths vary between manufacturers. The technician identifies the correct replacement by examining the existing operator.</p>

<h2 id="diy-checks">What You Can Check Yourself</h2>

<ol>
  <li><strong>Try lubricating first.</strong> Apply a silicone-based lubricant (not WD-40, which dries out quickly) to the operator gears and the crank arm pivot points. If stiffness is the only issue, this sometimes resolves it.</li>
  <li><strong>Inspect the handle.</strong> Remove the handle (usually one screw on the underside) and check if the spline is stripped. If it is rounded off, try a new handle before replacing the whole operator.</li>
  <li><strong>Check the track.</strong> Open the window manually (from outside if the crank is not working) and look at the track where the crank arm shoe slides. Clear any paint, caulking, or debris.</li>
  <li><strong>Look for visible damage.</strong> A bent crank arm is usually obvious. If the arm is bent, do not try to straighten it. Bent arms are weaker and will fail again.</li>
</ol>

<h2 id="when-to-call">When to Call for a Repair</h2>

<p>If lubrication and a handle swap do not fix the problem, the operator itself likely needs replacing. This is a job for a technician because:</p>

<ul>
  <li>The operator must be correctly identified by brand, model, and type (casement vs awning, left vs right hinge).</li>
  <li>Removal involves disconnecting the crank arm from the sash without damaging the track or the sash itself.</li>
  <li>Incorrect installation can leave the window unable to seal properly, causing drafts and water leaks.</li>
</ul>

<p>Most <a href="/cranks" class="text-accent hover:underline font-medium">window crank repairs</a> are completed on the same day, on the first visit. The technician carries common operator models and handles. If a specific operator needs to be ordered, the parts typically arrive within a few business days.</p>

<p>The $30 site visit fee covers the inspection and is credited toward the repair if you go ahead.</p>

<h2 id="faq">Common Questions</h2>

<h3>Can I leave a casement window open if the crank is broken?</h3>
<p>Not safely. Without a working operator, the window has no way to lock closed. Wind can swing it open or slam it shut, risking damage to the glass or the hinges. If the crank fails while the window is open, prop it in place with a piece of wood and arrange a repair promptly.</p>

<h3>Are replacement cranks universal?</h3>
<p>No. Operators vary by manufacturer, window type (casement vs awning), hinge side (left vs right), and arm length. Using the wrong operator can damage the window or fail to seal properly.</p>

<h3>How long does a crank operator last?</h3>
<p>Most operators last 15 to 25 years with normal use. Heavy use (opening and closing daily), exposure to moisture, and lack of lubrication shorten the lifespan.</p>

<h3>Can I convert my crank windows to push-out?</h3>
<p>Some casement windows can be retrofitted with a push-out hinge system that eliminates the crank entirely. This depends on the window brand and the frame design. It is not an option for every window. Ask during the site visit if you are interested.</p>
`,
  },
  {
    slug: "window-replacement-cost-ontario",
    title: "How Much Does Window Replacement Cost in Ontario?",
    metaTitle: "Window Replacement Cost in Ontario: 2026 Price Guide",
    metaDescription:
      "Window replacement in Ontario ranges widely. Here are realistic price ranges by window type, the factors that drive cost, and when repair is the smarter choice.",
    excerpt:
      "Window replacement costs in Ontario depend on the window type, size, glass options, and installation complexity. Here is a realistic breakdown to help you budget and decide between repair and replacement.",
    publishedAt: "2026-11-15",
    author: "Dan",
    readingTime: 8,
    tags: ["Window Replacement", "Pricing", "Ontario", "Homeowner Guide"],
    sections: [
      { id: "price-ranges", title: "Price Ranges by Window Type" },
      { id: "what-drives-cost", title: "What Drives the Cost Up or Down" },
      { id: "glass-only-vs-full", title: "Glass-Only Replacement vs Full Window" },
      { id: "repair-vs-replace", title: "When Repair Is the Better Option" },
      { id: "getting-quotes", title: "Getting Quotes: What to Expect" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Replacing windows is one of the bigger home improvement expenses. A single window can cost anywhere from $400 to over $2,000 installed, and a whole-house project can run into five figures quickly. The range is wide because window type, size, glass options, and installation complexity all affect the final number. This guide breaks down realistic Ontario pricing so you can budget properly and decide whether full replacement is even necessary.</p>

<h2 id="price-ranges">Price Ranges by Window Type</h2>

<p>These ranges are for supply and installation of a standard-sized window in a straightforward replacement (existing opening, no structural changes):</p>

<ul>
  <li><strong>Single-hung or double-hung:</strong> $500 to $1,200 per window. The most common type in Ontario homes. Price varies with size and glass options.</li>
  <li><strong>Casement:</strong> $600 to $1,400 per window. The crank mechanism and hardware add cost compared to sliding types.</li>
  <li><strong>Slider:</strong> $450 to $1,100 per window. Simpler hardware keeps the cost down. Common in basements and bedrooms.</li>
  <li><strong>Awning:</strong> $550 to $1,200 per window. Similar to casement pricing. Often used in basements or above kitchen counters.</li>
  <li><strong>Picture (fixed):</strong> $400 to $1,500 per window. No operating hardware, so the cost is mostly about size and glass type. Large picture windows can be expensive because of the glass area.</li>
  <li><strong>Bay or bow:</strong> $2,000 to $5,000 or more. These are complex assemblies with multiple panels, structural support, and sometimes a roof section above them.</li>
</ul>

<p>These are ballpark figures for mid-range vinyl windows. High-end products (fiberglass frames, European tilt-and-turn hardware, or premium brands) cost more. Builder-grade economy products cost less but may not last as long.</p>

<h2 id="what-drives-cost">What Drives the Cost Up or Down</h2>

<h3>Size</h3>
<p>Bigger windows use more glass and larger frames. A small bathroom window and a 6-foot living room slider are priced very differently, even if they are the same type.</p>

<h3>Glass options</h3>
<p>Double-pane is standard. Triple-pane adds 20 to 40% to the glass cost but improves insulation and noise reduction. Low-E coatings, argon or krypton gas fills, and laminated glass all add to the per-unit price.</p>

<h3>Frame material</h3>
<p>Vinyl is the most affordable and most common in Ontario. Fiberglass is more durable and handles temperature extremes better but costs 30 to 50% more. Wood and aluminium-clad wood are at the top of the price range.</p>

<h3>Installation complexity</h3>
<p>A straightforward "insert" or "retrofit" installation, where the new window fits into the existing frame opening, is the simplest and least expensive. A "full-frame" installation, where the entire frame including the nailing fin is removed and replaced, costs more but is necessary when the existing frame is damaged or you want to change the window size.</p>

<h3>Accessibility</h3>
<p>Ground-floor windows are easy to reach. Second and third-storey windows may require ladders, scaffolding, or interior work to access. This adds labour cost.</p>

<h3>Number of windows</h3>
<p>Contractors typically offer a lower per-window price when you are replacing multiple windows at once. The setup and travel costs are spread across more units.</p>

<h3>Permits and code requirements</h3>
<p>In most Ontario municipalities, a standard same-size window replacement does not require a building permit. Changing the size or location of a window opening does. If a permit is needed, add $200 to $500 for the permit and any required inspections.</p>

<h2 id="glass-only-vs-full">Glass-Only Replacement vs Full Window</h2>

<p>This is where cost differences become dramatic. If the window frame is in good condition, works properly, and just has foggy or cracked glass, you can replace the sealed glass unit alone. This is <a href="/glass-replacement" class="text-accent hover:underline font-medium">glass replacement</a>, not window replacement.</p>

<p>Glass-only replacement typically costs $200 to $600 per unit for standard double-pane residential glass. Compare that to $500 to $1,400 for a full window replacement and the savings are clear.</p>

<p>The glass-only approach also avoids the mess and disruption of removing and re-installing an entire window frame: no trim work, no caulking the exterior, no repainting.</p>

<h2 id="repair-vs-replace">When Repair Is the Better Option</h2>

<p>Not every window problem needs a full replacement. Here is a quick guide:</p>

<ul>
  <li><strong>Foggy glass (failed seal):</strong> Replace the glass, not the window. See <a href="/foggy-windows" class="text-accent hover:underline font-medium">foggy window repair</a>.</li>
  <li><strong>Cracked or broken glass:</strong> Replace the sealed unit. The frame is almost certainly fine.</li>
  <li><strong>Drafty around the edges:</strong> Often a weatherstripping issue, not a glass or frame problem. A <a href="/cranks" class="text-accent hover:underline font-medium">hardware repair</a> or weatherstrip replacement is much cheaper than a new window.</li>
  <li><strong>Crank not working:</strong> The operator mechanism can be replaced without touching the glass or frame.</li>
  <li><strong>Difficult to open or close:</strong> Usually a hardware, track, or balance issue. Repairable in most cases.</li>
</ul>

<p>Full replacement makes sense when the frame itself is rotting, warped beyond repair, or you want to change the window type or size entirely.</p>

<h2 id="getting-quotes">Getting Quotes: What to Expect</h2>

<p>When getting quotes for window work in Ontario, keep these points in mind:</p>

<ul>
  <li><strong>Get at least two quotes.</strong> Pricing varies between companies. Make sure each quote specifies the same window type, glass options, and installation method so you are comparing like for like.</li>
  <li><strong>Ask what is included.</strong> Does the quote cover removal of the old window? Interior and exterior trim? Caulking and insulation? Disposal? Screen replacement?</li>
  <li><strong>Ask about warranty.</strong> What is covered and for how long? A lower price with a shorter warranty may cost more in the long run.</li>
  <li><strong>Be cautious of very low quotes.</strong> If one quote is dramatically lower than the others, ask what is different. It may be a different grade of product, a shortcut in installation, or missing items.</li>
  <li><strong>Consider glass-only first.</strong> If the quote is for full window replacement, ask the installer whether glass-only replacement would solve the problem at lower cost. Not all companies offer glass-only service, so they may default to recommending full replacement even when it is not necessary.</li>
</ul>

<p>For glass-only replacements, we provide a written quote on the spot during the site visit. The $30 visit fee is credited toward the repair if you proceed.</p>

<h2 id="faq">Common Questions</h2>

<h3>Is it worth replacing windows to save on heating?</h3>
<p>Windows account for roughly 25 to 30% of a home's heat loss. Upgrading from old single-pane to modern double or triple-pane windows can reduce heating costs noticeably. But the payback period is long, often 10 to 20 years. If your frames are fine and only the glass is failing, a glass-only replacement gives you the insulation benefit at a fraction of the cost.</p>

<h3>Should I replace all windows at once or do them gradually?</h3>
<p>Doing them all at once typically gets a better per-window price and ensures consistent appearance. But if the budget does not allow it, start with the worst-performing windows: typically north-facing, oldest, or most drafty. Many homeowners replace in phases over two to three years.</p>

<h3>Do new windows increase home value?</h3>
<p>Yes, but the return varies. Industry estimates suggest you recover 60 to 75% of the cost at resale for vinyl windows. The bigger benefit is often in marketability: homes with new windows sell faster because buyers see them as one less thing to deal with.</p>

<h3>What about Ontario rebate programmes?</h3>
<p>Several programmes offer rebates for energy-efficient window upgrades. See our post on <a href="/blog/ontario-window-rebates-energy-programs-2026" class="text-accent hover:underline font-medium">Ontario window rebates</a> for current programme details and eligibility.</p>
`,
  },
  {
    slug: "ontario-window-rebates-energy-programs-2026",
    title: "Ontario Window Rebates and Energy Efficiency Programs in 2026",
    metaTitle: "Ontario Window Rebates and Energy Programs: 2026 Guide",
    metaDescription:
      "Ontario homeowners can access rebates for energy-efficient window upgrades. Here are the programmes available in 2026, eligibility rules, and how to apply.",
    excerpt:
      "Several federal and provincial programmes help Ontario homeowners offset the cost of energy-efficient window upgrades. Here is what is available in 2026, who qualifies, and how the application process works.",
    publishedAt: "2026-11-18",
    author: "Dan",
    readingTime: 7,
    tags: ["Energy Efficiency", "Ontario", "Rebates", "Window Replacement", "Homeowner Guide"],
    sections: [
      { id: "available-programs", title: "Available Programmes in 2026" },
      { id: "canada-greener-homes", title: "Canada Greener Homes Grant" },
      { id: "home-efficiency-rebate", title: "Home Efficiency Rebate Plus" },
      { id: "toronto-home-energy-loan", title: "Toronto Home Energy Loan Program" },
      { id: "glass-only-eligibility", title: "Does Glass-Only Replacement Qualify?" },
      { id: "how-to-apply", title: "How to Apply" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Replacing windows or upgrading glass is a significant investment, but several government programmes can help offset the cost. Ontario homeowners have access to both federal and municipal incentives for energy-efficient upgrades. The programmes change periodically, so here is what is available as of 2026 and how to take advantage of them.</p>

<h2 id="available-programs">Available Programmes in 2026</h2>

<p>Three main programmes are relevant for Ontario homeowners looking at window upgrades:</p>

<ol>
  <li><strong>Canada Greener Homes Grant</strong> (federal): rebates for energy retrofits including windows.</li>
  <li><strong>Home Efficiency Rebate Plus</strong> (Ontario): provincial top-up rebates for qualifying upgrades.</li>
  <li><strong>Toronto Home Energy Loan Program (HELP)</strong> (municipal, Toronto only): low-interest financing for energy improvements.</li>
</ol>

<p>Each programme has its own eligibility rules, application process, and rebate amounts. You can often combine federal and provincial incentives on the same project.</p>

<h2 id="canada-greener-homes">Canada Greener Homes Grant</h2>

<p>The federal Greener Homes programme provides rebates to homeowners who make energy-efficient improvements to their primary residence. Windows and doors are among the eligible upgrades.</p>

<p><strong>Key details:</strong></p>
<ul>
  <li>Rebates of up to $250 per window or door, depending on the product's energy performance rating.</li>
  <li>Maximum total grant of $5,000 per household for all eligible upgrades combined.</li>
  <li>Requires a pre-retrofit EnerGuide evaluation (home energy audit) before work begins, and a post-retrofit evaluation after.</li>
  <li>The home must be your primary residence.</li>
  <li>New construction does not qualify.</li>
  <li>Products must meet minimum ENERGY STAR performance levels.</li>
</ul>

<p>The EnerGuide evaluations cost $300 to $600 total (pre and post combined), but some are partially subsidized. The evaluator assesses your home's current energy performance and identifies which upgrades will make the biggest impact.</p>

<h2 id="home-efficiency-rebate">Home Efficiency Rebate Plus</h2>

<p>Ontario's Home Efficiency Rebate Plus programme provides additional provincial rebates on top of the federal programme. It is administered through Enbridge Gas and is available to Enbridge customers.</p>

<p><strong>Key details:</strong></p>
<ul>
  <li>Rebates for windows, insulation, air sealing, and heating system upgrades.</li>
  <li>Window rebates vary based on the number of windows and the improvement in energy performance.</li>
  <li>Can be stacked with the federal Greener Homes grant for a combined rebate.</li>
  <li>Requires the same EnerGuide evaluation as the federal programme (one evaluation covers both).</li>
  <li>Must be an Enbridge Gas customer in an eligible area.</li>
</ul>

<p>By combining the federal and provincial programmes, some homeowners have received $5,000 to $10,000 in total rebates on whole-house window replacement projects.</p>

<h2 id="toronto-home-energy-loan">Toronto Home Energy Loan Program</h2>

<p>The City of Toronto's Home Energy Loan Program (HELP) is not a rebate but a low-interest financing option. It allows Toronto homeowners to borrow up to $125,000 for energy-efficient home improvements, including windows, with the loan attached to the property tax bill.</p>

<p><strong>Key details:</strong></p>
<ul>
  <li>Interest rates are typically lower than standard home improvement loans or lines of credit.</li>
  <li>The loan is repaid through your property tax bill over up to 20 years.</li>
  <li>If you sell the home, the remaining loan balance transfers to the new owner (it stays with the property, not the person).</li>
  <li>Must own a residential property in Toronto.</li>
  <li>Requires a home energy audit to identify eligible upgrades.</li>
</ul>

<p>HELP is particularly useful for homeowners who want to do a complete window upgrade but do not want to pay the full cost upfront. The monthly property tax increase is often comparable to or less than the energy savings from the new windows.</p>

<h2 id="glass-only-eligibility">Does Glass-Only Replacement Qualify?</h2>

<p>This is an important question because <a href="/glass-replacement" class="text-accent hover:underline font-medium">glass-only replacement</a> costs significantly less than full window replacement.</p>

<p>The short answer: it depends on the programme and the specifics of the upgrade.</p>

<ul>
  <li>The federal and provincial rebate programmes are structured around measurable energy improvements. If replacing your glass sealed units results in a documented improvement in the EnerGuide rating of your home (measured by the pre and post evaluations), the upgrade may qualify.</li>
  <li>Replacing a failed sealed unit with a new one of the same specification does not typically qualify, because the energy performance on paper has not changed, even though the actual performance has improved (a failed seal performs worse than its rated spec).</li>
  <li>Upgrading from standard double-pane to triple-pane, or from non-coated to Low-E glass, within existing frames is more likely to qualify because it represents a measurable performance improvement.</li>
</ul>

<p>The EnerGuide evaluator can tell you which upgrades will produce enough improvement to qualify. It is worth asking before you commit to either glass-only or full window replacement.</p>

<h2 id="how-to-apply">How to Apply</h2>

<ol>
  <li><strong>Book a pre-retrofit EnerGuide evaluation.</strong> This must happen before any work begins. The evaluator tests your home's current energy performance and gives you a report showing which upgrades will have the most impact.</li>
  <li><strong>Register with the programme.</strong> For the federal grant, register through Natural Resources Canada. For the Ontario programme, register through Enbridge. For HELP, apply through the City of Toronto.</li>
  <li><strong>Get quotes and do the work.</strong> Hire a qualified installer, complete the upgrades, and keep all receipts and product specification sheets.</li>
  <li><strong>Book a post-retrofit EnerGuide evaluation.</strong> The evaluator returns to measure the improvement. The difference between pre and post ratings determines your rebate amount.</li>
  <li><strong>Submit your claim.</strong> Provide the evaluation reports, receipts, and product details. Rebates are typically paid by direct deposit within 8 to 12 weeks.</li>
</ol>

<p>The most common mistake is doing the work before the pre-retrofit evaluation. If the evaluator has not documented your starting point, you cannot prove the improvement and the claim will be denied.</p>

<h2 id="faq">Common Questions</h2>

<h3>Can I apply for rebates after the work is already done?</h3>
<p>No. All current programmes require a pre-retrofit evaluation before work begins. If you have already replaced your windows without a pre-evaluation, you are not eligible for the current round of rebates.</p>

<h3>Do rental properties qualify?</h3>
<p>The federal Greener Homes grant is for primary residences only. Rental properties and investment properties do not qualify. Some municipal programmes have different rules, so check with your local municipality.</p>

<h3>How long does the whole process take?</h3>
<p>From initial evaluation to receiving the rebate cheque, expect 3 to 6 months. The evaluation bookings, window manufacturing, installation, post-evaluation, and claim processing each take time. Plan ahead, especially if you want to have the work done before winter.</p>

<h3>Are there income-tested programmes?</h3>
<p>Yes. The federal government offers enhanced grants for lower-income households, covering a larger portion of the evaluation and upgrade costs. Check the Natural Resources Canada website for current income thresholds and enhanced grant amounts.</p>

<h3>Can I combine rebates with the Toronto HELP loan?</h3>
<p>Yes. You can use HELP financing to pay for the work and still claim federal and provincial rebates. The rebate reduces your effective cost, and the loan covers the upfront payment. Many Toronto homeowners use this combination.</p>
`,
  },
  {
    slug: "window-seal-failure-signs",
    title: "How to Tell If Your Window Seal Has Failed: 5 Signs",
    metaTitle: "5 Signs Your Window Seal Has Failed | Toronto Window Repair",
    metaDescription:
      "Foggy glass, drafts, and rising energy bills can all point to a failed window seal. Learn the 5 signs and what to do about it.",
    excerpt:
      "A failed window seal lets moisture between the panes and cold air into your home. Here are five ways to tell if your window seal has broken down, and what your repair options are.",
    publishedAt: "2026-11-18",
    author: "Dan",
    readingTime: 6,
    tags: ["Window Seals", "Foggy Windows", "Energy Efficiency", "Home Maintenance"],
    sections: [
      { id: "what-is-a-window-seal", title: "What Is a Window Seal?" },
      { id: "five-signs", title: "5 Signs of a Failed Window Seal" },
      { id: "condensation-surface-vs-between", title: "Surface Condensation vs Seal Failure" },
      { id: "defogging-kits", title: "Why Defogging Kits Don't Work" },
      { id: "when-to-call", title: "When to Call a Professional" },
    ],
    content: `
<p>Every sealed glass unit in your home relies on a perimeter seal to hold two or three panes together with insulating gas between them. That seal is what keeps your windows clear, quiet, and energy-efficient. When it breaks down, the problems show up gradually, and many homeowners don't connect the dots until the issue is obvious.</p>

<p>Here are five signs that one or more of your window seals has failed.</p>

<h2 id="what-is-a-window-seal">What Is a Window Seal?</h2>

<p>A sealed glass unit (sometimes called a thermal pane or insulated glass unit) consists of two or three panes of glass separated by a spacer bar. The space between the panes is filled with argon or air, and the entire unit is sealed around the edges with a moisture-resistant compound.</p>

<p>That edge seal does two things: it keeps the insulating gas in and keeps moisture out. When the seal breaks, both fail. Moisture enters the gap, the gas escapes, and the window loses its insulating ability.</p>

<h2 id="five-signs">5 Signs of a Failed Window Seal</h2>

<h3>1. Fog or haze between the panes</h3>
<p>This is the most recognizable sign. If you see condensation or a milky haze between the glass that you cannot wipe off from either side, the seal has failed and moisture has entered the cavity. It may come and go with temperature changes, but it will get worse over time. This is exactly what happens with <a href="/foggy-windows" class="text-accent hover:underline font-medium">foggy windows</a>, and the fix is replacing the sealed glass unit.</p>

<h3>2. Distorted or warped reflections</h3>
<p>When the seal breaks and the insulating gas escapes, the air pressure between the panes changes. The panes can bow inward slightly, causing reflections to look wavy or bent. If your windows reflect a straight fence line as a curve, that's a sign the gas fill is gone.</p>

<h3>3. Drafts near closed windows</h3>
<p>A sealed unit that has lost its gas fill insulates poorly. You may feel cold air radiating from the glass surface even though the window is closed and locked. This is different from a draft around the frame (which is a weatherstripping issue). The cold comes from the glass itself because the insulating layer is gone.</p>

<h3>4. Rising energy bills without an obvious cause</h3>
<p>Windows with failed seals lose significantly more heat in winter and let more heat in during summer. If your heating or cooling costs have crept up and you have not changed your thermostat habits, failed seals could be a factor, especially in a home with many large windows.</p>

<h3>5. Visible moisture stains or mineral deposits</h3>
<p>Over time, moisture that cycles in and out of the sealed unit leaves mineral deposits on the inside surface of the glass. These look like white or chalky streaks that never clean off. By this stage, the seal has been broken for a while.</p>

<h2 id="condensation-surface-vs-between">Surface Condensation vs Seal Failure</h2>

<p>Not all window condensation means a failed seal. It matters where the moisture is.</p>

<p><strong>Inside surface of the glass:</strong> Condensation on the room-facing side of the window is a humidity issue, not a seal issue. It's common on cold Toronto mornings, especially in kitchens and bathrooms. Lowering indoor humidity or improving ventilation usually solves it.</p>

<p><strong>Outside surface of the glass:</strong> Dew on the exterior of the glass on cool mornings is normal and actually means the window is insulating well. The outer pane stays cool because heat is not escaping through it.</p>

<p><strong>Between the panes:</strong> This is the one that means the seal has failed. You cannot reach it to wipe it, and it will not go away on its own.</p>

<h2 id="defogging-kits">Why Defogging Kits Don't Work</h2>

<p>Some companies offer to drill a small hole in the glass, inject a drying agent, and reseal the hole. This temporarily removes the visible moisture, but it does not fix the underlying problem.</p>

<p>The seal is still broken. Moisture will re-enter. The insulating gas is gone and cannot be replaced through a drill hole. And the hole itself creates another weak point.</p>

<p>The only lasting fix is replacing the sealed glass unit. The glass is measured, a new unit is custom-made, and it is installed in your existing frame. The frame stays. Only the glass changes. We cover this in detail on our <a href="/glass-replacement" class="text-accent hover:underline font-medium">glass replacement</a> page.</p>

<h2 id="when-to-call">When to Call a Professional</h2>

<p>If you see fog between the panes, mineral deposits on the inner glass surface, or distorted reflections, it is worth having the window assessed. A technician can confirm whether the seal has failed and measure for a replacement unit on the same visit.</p>

<p>At LuminaSky, the site visit is $30 and that fee is credited toward the repair if you go ahead. Glass is measured first, custom-made, then installed, usually within a few business days. All sealed units carry a 5-year seal warranty.</p>

<p>If you are not sure whether your issue is condensation or seal failure, <a href="/contact" class="text-accent hover:underline font-medium">get in touch</a> and we can help you figure it out. Call us at 437-344-8490 or send a message any time. We are open 24/7.</p>
`,
  },
  {
    slug: "security-glass-windows-toronto",
    title: "Security Glass Options for Toronto Homes",
    metaTitle: "Security Glass for Toronto Homes: Laminated, Tempered, and Film",
    metaDescription:
      "Thinking about security glass for your Toronto home? Compare laminated, tempered, and film options, plus Ontario Building Code requirements for safety glass.",
    excerpt:
      "Ground-floor windows and glass doors are common entry points for break-ins. Here is what security glass actually does, which types are available, and what the Ontario Building Code requires.",
    publishedAt: "2026-11-17",
    author: "Dan",
    readingTime: 7,
    tags: ["Security Glass", "Laminated Glass", "Tempered Glass", "Home Security", "Toronto"],
    sections: [
      { id: "what-is-security-glass", title: "What Security Glass Actually Does" },
      { id: "laminated-vs-tempered", title: "Laminated vs Tempered Glass" },
      { id: "security-film", title: "Security Film: Does It Work?" },
      { id: "building-code", title: "Ontario Building Code Requirements" },
      { id: "where-to-upgrade", title: "Where to Upgrade First" },
      { id: "getting-started", title: "Getting Started" },
    ],
    content: `
<p>Standard window glass breaks easily and cleanly, which is exactly what makes it a weak point for home security. Security glass is designed to resist impact, stay in one piece when broken, or both. For Toronto homeowners concerned about break-ins, the right glass upgrade can make a real difference, especially on ground-floor windows and entry doors.</p>

<h2 id="what-is-security-glass">What Security Glass Actually Does</h2>

<p>The goal of security glass is not to be unbreakable. It is to make entry through the window slow, loud, and difficult enough that an intruder gives up or is noticed. Standard glass shatters into large shards with one hit, leaving an open hole. Security glass either holds together (laminated) or breaks into small, dull pieces (tempered) that make climbing through painful and time-consuming.</p>

<h2 id="laminated-vs-tempered">Laminated vs Tempered Glass</h2>

<h3>Laminated glass</h3>
<p>Laminated glass is two panes bonded to a plastic interlayer (usually polyvinyl butyral, or PVB). When struck, the glass cracks but the pieces stick to the interlayer. The window stays in the frame as a cracked but intact sheet. An intruder would need to strike it repeatedly and peel away the layers to create an opening large enough to climb through.</p>

<p>Laminated glass is the better choice for security. It also blocks UV rays and reduces noise, making it a good option for <a href="/glass-replacement" class="text-accent hover:underline font-medium">window glass replacement</a> even when security is not the primary concern.</p>

<h3>Tempered glass</h3>
<p>Tempered glass is heat-treated to be about four times stronger than standard glass. When it does break, it shatters into small, rounded pieces rather than sharp shards. This makes it a safety glass (it reduces injury risk), but not a great security glass on its own, because once broken, the opening is clear.</p>

<p>Tempered glass is required by the Ontario Building Code in certain locations (more on that below), but for security purposes, laminated is the stronger option.</p>

<h3>Laminated and tempered combined</h3>
<p>For maximum security, you can get laminated tempered glass. Each pane in the laminate is tempered, so the unit is both impact-resistant and holds together when cracked. This is typically used in commercial settings or high-risk residential applications.</p>

<h2 id="security-film">Security Film: Does It Work?</h2>

<p>Security film is a thick, clear adhesive film applied to the interior surface of existing glass. It holds the glass together when struck, similar to the interlayer in laminated glass.</p>

<p><strong>Pros:</strong> Less expensive than replacing the glass. Can be applied to existing windows without removing them.</p>

<p><strong>Cons:</strong> Not as strong as laminated glass. Film can peel over time, especially on south-facing windows exposed to heat. It does not improve the structural strength of the glass itself. And if the film is not anchored to the frame (many installations are not), the whole sheet of filmed glass can be pushed inward.</p>

<p>Film is a reasonable option if replacing the glass is not in the budget right now, but it is a temporary measure, not a permanent upgrade.</p>

<h2 id="building-code">Ontario Building Code Requirements</h2>

<p>The Ontario Building Code (OBC) requires safety glass (tempered or laminated) in specific locations:</p>

<ul>
  <li>Glass in doors and sidelights</li>
  <li>Glass within 500mm of a door</li>
  <li>Glass in shower enclosures and bathtub surrounds</li>
  <li>Glass in railings and guards</li>
  <li>Glass in areas where someone could fall into it (near stairs, landings, or floor-level windows)</li>
</ul>

<p>If you are replacing glass in any of these locations, the new glass must meet the code requirement. Standard annealed glass is not permitted. When we do a <a href="/front-door-glass" class="text-accent hover:underline font-medium">front door glass</a> replacement, for example, the new unit is always safety-rated because the OBC requires it for door glass.</p>

<h2 id="where-to-upgrade">Where to Upgrade First</h2>

<p>If you are considering security glass for your home, focus on the most vulnerable entry points first:</p>

<ol>
  <li><strong>Ground-floor windows at the back or side of the house.</strong> These are the most common break-in entry points because they are not visible from the street.</li>
  <li><strong>Basement windows.</strong> Often single-pane, older glass that is easy to break. Upgrading to laminated sealed units improves both security and energy efficiency.</li>
  <li><strong>Patio doors.</strong> Large glass panels that are both a visual target and physically accessible. <a href="/patio-door-repair" class="text-accent hover:underline font-medium">Patio door glass replacement</a> with laminated glass is one of the most impactful upgrades.</li>
  <li><strong>Front door sidelights.</strong> Narrow glass panels beside the front door. Breaking a sidelight gives access to the door lock. Laminated glass stops that.</li>
</ol>

<h2 id="getting-started">Getting Started</h2>

<p>Upgrading to security glass does not mean replacing your entire window. In most cases, only the sealed glass unit changes. The frame stays in place. Glass is measured on the first visit, custom-made to fit, then installed. All sealed units come with a 5-year seal warranty and 2-year workmanship warranty.</p>

<p>If you want to know what options make sense for your home, <a href="/contact" class="text-accent hover:underline font-medium">reach out for a quote</a>. We provide a written quote on the spot during the site visit. Call 437-344-8490 or message us any time. We are open 24/7.</p>
`,
  },
  {
    slug: "heritage-window-repair-toronto",
    title: "Heritage Window Repair in Toronto: Rules, Permits, and Options",
    metaTitle: "Heritage Window Repair Toronto: Permits, Rules, and Glass Options",
    metaDescription:
      "Repairing or replacing glass in a Toronto heritage home? Learn what permits you need, what the heritage rules require, and how to keep your windows authentic.",
    excerpt:
      "Heritage homes in Toronto come with rules about what you can and cannot change. Windows are one of the most regulated elements. Here is what you need to know before repairing or replacing heritage window glass.",
    publishedAt: "2026-11-16",
    author: "Dan",
    readingTime: 7,
    tags: ["Heritage Homes", "Window Repair", "Toronto", "Permits", "Historic Preservation"],
    sections: [
      { id: "heritage-designation", title: "What Heritage Designation Means for Windows" },
      { id: "permits-needed", title: "What Repairs Need a Permit" },
      { id: "matching-glass", title: "Matching Period-Accurate Glass Styles" },
      { id: "energy-efficiency", title: "Energy Efficiency in Heritage Homes" },
      { id: "working-with-consultants", title: "Working with Heritage Consultants" },
      { id: "how-we-help", title: "How We Can Help" },
    ],
    content: `
<p>Toronto has thousands of homes under heritage designation or in heritage conservation districts. If your home is one of them, any work on the exterior, including windows, may need approval from the city before you start. The rules exist to preserve the neighbourhood's character, and windows are one of the most visible elements of a home's facade.</p>

<p>The good news: most glass repairs and replacements can be done within heritage rules, as long as you understand what is and isn't permitted.</p>

<h2 id="heritage-designation">What Heritage Designation Means for Windows</h2>

<p>In Toronto, heritage properties fall into two main categories:</p>

<p><strong>Individually designated (Part IV of the Ontario Heritage Act):</strong> The property itself is on the heritage register. Alterations to heritage attributes (usually the front facade and sometimes all exterior faces) require a Heritage Permit from the city. Windows are almost always listed as a heritage attribute.</p>

<p><strong>Heritage Conservation District (Part V):</strong> The property is in a designated district. A Heritage Permit is required for exterior alterations based on the district's plan. The plan specifies what is considered a contributing property and what changes are permitted.</p>

<p>If you are unsure whether your property is designated, you can check the <a href="https://www.toronto.ca/city-government/planning-development/heritage-conservation/" class="text-accent hover:underline font-medium" target="_blank" rel="noopener noreferrer">City of Toronto Heritage Register</a> or call 311.</p>

<h2 id="permits-needed">What Repairs Need a Permit</h2>

<p><strong>Usually does not need a Heritage Permit:</strong></p>
<ul>
  <li>Replacing a broken pane of glass with the same type and size</li>
  <li>Replacing a failed sealed unit with one that matches the original appearance</li>
  <li>Repairing or replacing window hardware (cranks, hinges, locks, balances)</li>
  <li>Re-glazing (replacing the putty around glass in a single-pane wood frame)</li>
  <li>Weatherstripping and draught-proofing</li>
</ul>

<p><strong>Usually needs a Heritage Permit:</strong></p>
<ul>
  <li>Changing the window style (e.g., replacing a double-hung with a casement)</li>
  <li>Changing the frame material (e.g., replacing wood with vinyl)</li>
  <li>Changing the muntin pattern (the grid dividing the glass)</li>
  <li>Adding or removing windows</li>
  <li>Replacing an entire window unit</li>
</ul>

<p>The key principle is: like-for-like repairs to existing windows are generally fine. Changes to style, material, or configuration need city approval. If you are only replacing the glass, not the frame or the design, you are usually in the clear.</p>

<h2 id="matching-glass">Matching Period-Accurate Glass Styles</h2>

<p>Heritage review panels look at the visual character of the window. The glass plays a part in that. Here are common requirements:</p>

<p><strong>Wavy or textured glass:</strong> Some heritage homes originally had hand-drawn glass with slight distortions. Modern float glass is perfectly flat, which can look noticeably different. Restoration glass (sometimes called cylinder glass) is available to match the original appearance.</p>

<p><strong>Muntin profiles:</strong> If the original window had true divided lites (individual panes separated by wood muntins), replacing it with a single pane and snap-in grids may not be accepted. Simulated divided lites with an internal spacer bar are often an acceptable compromise.</p>

<p><strong>Colour and reflectivity:</strong> Modern Low-E coatings can give glass a different tint or reflectivity than the original. Some heritage plans restrict coatings that change the appearance of the glass from the street.</p>

<p>When we work on heritage properties, we pay attention to these details during the measurement visit so the replacement glass matches as closely as possible.</p>

<h2 id="energy-efficiency">Energy Efficiency in Heritage Homes</h2>

<p>One of the biggest challenges with heritage windows is balancing preservation with performance. Original single-pane glass is drafty and inefficient. But ripping out the original windows and installing modern replacements may not be permitted.</p>

<p>Options that typically comply with heritage rules:</p>

<ul>
  <li><strong>Interior storm windows:</strong> A second, removable pane installed on the inside of the existing window. It improves insulation without altering the exterior appearance. No Heritage Permit needed in most cases.</li>
  <li><strong>Re-glazing with improved glass:</strong> If the existing frame accepts a sealed unit, you can upgrade from single-pane to a slim double-pane unit that fits the original rebate depth.</li>
  <li><strong>Weatherstripping and draught-proofing:</strong> Improving the seal between the sash and frame makes a noticeable difference in comfort and energy loss. This is maintenance, not alteration, so it rarely needs a permit.</li>
  <li><strong>Exterior storm windows:</strong> Common on Victorian-era homes. Period-appropriate storm windows can be added seasonally. Some heritage plans specifically permit these.</li>
</ul>

<p>These approaches can cut heat loss significantly without triggering a Heritage Permit application or changing the look of the building.</p>

<h2 id="working-with-consultants">Working with Heritage Consultants</h2>

<p>For larger projects (replacing multiple windows, changing frame material, or adding new openings), you may need to work with a heritage consultant. They prepare the Heritage Permit application and present the case to the city.</p>

<p>Your contractor should be part of that conversation. A consultant who understands what glass and hardware options are available can propose solutions that satisfy the city's requirements while actually improving the window's performance.</p>

<p>If you are early in the planning stage, it is worth having the glass assessed first. A technician can tell you what can be repaired in place vs what needs replacing, which helps the consultant scope the permit application accurately.</p>

<h2 id="how-we-help">How We Can Help</h2>

<p>We work on heritage properties regularly, including homes in Cabbagetown, the Annex, Rosedale, and other Toronto heritage conservation districts. Most of the work we do, replacing sealed glass units, repairing <a href="/cranks" class="text-accent hover:underline font-medium">window cranks and hardware</a>, and fixing <a href="/foggy-windows" class="text-accent hover:underline font-medium">foggy windows</a>, falls under routine maintenance that does not require a Heritage Permit.</p>

<p>When the work does require approval, we provide measurements, specifications, and photos to support the permit application. Glass is measured first, custom-made to match the existing configuration, then installed once the permit is in place.</p>

<p>Call us at 437-344-8490 or <a href="/contact" class="text-accent hover:underline font-medium">send a message</a> to book a site visit. The $30 visit fee is credited toward the repair. We are open 24/7.</p>
`,
  },
  {
    slug: "sunroom-glass-repair-replacement",
    title: "Sunroom Glass Repair and Replacement for Toronto Homeowners",
    metaTitle: "Sunroom Glass Repair and Replacement in Toronto",
    metaDescription:
      "Cracked, foggy, or single-pane sunroom glass? Learn about common sunroom glass problems, upgrade options, and what the repair process looks like.",
    excerpt:
      "Sunrooms take more punishment from the weather than any other room in the house. Here is what goes wrong with sunroom glass, when to repair vs replace, and how upgrading saves energy.",
    publishedAt: "2026-11-15",
    author: "Dan",
    readingTime: 6,
    tags: ["Sunrooms", "Glass Replacement", "Energy Efficiency", "Toronto"],
    sections: [
      { id: "common-problems", title: "Common Sunroom Glass Problems" },
      { id: "single-vs-sealed", title: "Single Pane vs Sealed Unit Upgrade" },
      { id: "roof-vs-wall", title: "Roof Glass vs Wall Glass" },
      { id: "energy-savings", title: "Energy Savings from Upgrading" },
      { id: "repair-process", title: "How the Repair Process Works" },
    ],
    content: `
<p>A sunroom is essentially a glass box attached to your house. It gets direct sun in summer, cold exposure in winter, and often more temperature swings in a single day than any other room. That stress shows up in the glass over time: failed seals, cracked panes, condensation, and energy loss are all common.</p>

<p>The good news is that most sunroom glass problems are repairable without replacing the entire structure. Here is what to look for and what your options are.</p>

<h2 id="common-problems">Common Sunroom Glass Problems</h2>

<h3>Foggy or hazy panels</h3>
<p>If your sunroom has sealed (double-pane) glass and you see fog or haze between the panes that you cannot wipe off, the seal has failed. Moisture has entered the cavity and the insulating gas has leaked out. This is the same issue as <a href="/foggy-windows" class="text-accent hover:underline font-medium">foggy windows</a> elsewhere in the house, and the fix is the same: replacing the sealed glass unit.</p>

<p>Sunrooms often have many glass panels, and seal failures tend to cluster. If one panel has failed, check the others. Units installed at the same time often fail around the same time.</p>

<h3>Cracked or chipped glass</h3>
<p>Thermal stress cracks are common in sunroom glass, especially on south-facing or west-facing panels that absorb intense afternoon sun. The glass heats unevenly (the centre warms faster than the edges held by the frame), and the resulting stress can crack it. These cracks usually start at the edge and run inward in a curved line.</p>

<p>Impact cracks from hail, fallen branches, or stray objects are also more likely on a sunroom because there is simply more exposed glass surface.</p>

<h3>Single-pane glass</h3>
<p>Many older sunrooms were built with single-pane glass. This was fine when the sunroom was used only in warm weather, but if you heat or cool the space, single-pane glass is a major source of energy loss. It offers almost no insulation and allows condensation to form freely in cold weather.</p>

<h3>Leaking at the frame or flashing</h3>
<p>Water getting in around the glass, especially at roof panels, is often a sealant or flashing issue rather than a glass issue. But it can accelerate seal failure in the glass and cause water damage to the frame structure below.</p>

<h2 id="single-vs-sealed">Single Pane vs Sealed Unit Upgrade</h2>

<p>If your sunroom has single-pane glass and you use the room year-round, upgrading to sealed (double-pane) units is one of the most impactful improvements you can make.</p>

<p><strong>Single pane:</strong> No insulating layer. Heat passes through freely. Interior surface gets very cold in winter (heavy condensation) and very hot in summer. No UV protection unless film is applied.</p>

<p><strong>Sealed double pane:</strong> Two panes with an insulating gas fill. Significantly reduces heat transfer. Interior surface stays closer to room temperature. Available with Low-E coatings for additional solar control.</p>

<p>The upgrade does not require replacing the entire frame in most cases. If the existing frame has enough depth to accept a sealed unit, the glass can be swapped. If the frame is too shallow, a slim-profile sealed unit may fit, or the glazing stop can be modified. This is something a technician assesses during the measurement visit.</p>

<h2 id="roof-vs-wall">Roof Glass vs Wall Glass</h2>

<p>Sunrooms typically have both vertical wall panels and angled or horizontal roof panels. These are different jobs with different considerations.</p>

<p><strong>Wall glass</strong> is handled the same way as standard <a href="/glass-replacement" class="text-accent hover:underline font-medium">window glass replacement</a>. The sealed unit is removed from the frame, a new one is measured and ordered, and it is installed when ready. Straightforward.</p>

<p><strong>Roof glass</strong> is more involved:</p>
<ul>
  <li>The glass is structural in some designs, meaning it carries snow load</li>
  <li>Removal and installation require working overhead</li>
  <li>The seal between the glass and the frame must be watertight, not just airtight</li>
  <li>Flashing and drainage channels around roof panels need to be intact</li>
  <li>Safety glass (tempered or laminated) is required by the Ontario Building Code for overhead glazing</li>
</ul>

<p>If your sunroom has a solid (non-glass) roof, only the wall panels need attention. If it has a glass roof, the roof panels are typically the first to show problems because they take the most direct weather exposure.</p>

<h2 id="energy-savings">Energy Savings from Upgrading</h2>

<p>Upgrading sunroom glass from single-pane to sealed double-pane units reduces heat loss through the glass by roughly 50%. For a sunroom with a large glass surface area, that translates to a noticeable drop in heating costs in winter and cooling costs in summer.</p>

<p>Additional benefits:</p>
<ul>
  <li><strong>Less condensation:</strong> The interior surface of a sealed unit stays warmer, so moisture from the room is less likely to condense on it.</li>
  <li><strong>Reduced UV fading:</strong> Low-E coated sealed units block a significant portion of UV radiation, protecting furniture and flooring from fading.</li>
  <li><strong>Better sound insulation:</strong> Two panes with a gas fill reduce outside noise more than a single pane.</li>
  <li><strong>More usable space:</strong> A sunroom that holds a comfortable temperature year-round is a room you actually use, rather than one you avoid from November to April.</li>
</ul>

<h2 id="repair-process">How the Repair Process Works</h2>

<p>Sunroom glass repair follows the same process as other glass work:</p>

<ol>
  <li><strong>Site visit and assessment.</strong> A technician inspects all panels, identifies which ones have failed seals, cracks, or other issues, and measures for replacements. The $30 visit fee is credited toward the work.</li>
  <li><strong>Glass is custom-made.</strong> Each panel is made to the exact measurements of your frames. For roof panels, the glass type (tempered, laminated, or both) is specified based on building code requirements and the panel's location.</li>
  <li><strong>Installation.</strong> Old glass is removed, new sealed units are installed, and sealant is applied. For roof panels, flashing and drainage are checked during installation.</li>
</ol>

<p>You do not need to replace every panel at once. Many homeowners start with the panels that have visible seal failures or cracks, then upgrade the remaining single-pane panels over time.</p>

<p>All sealed glass units carry a 5-year seal warranty and 2-year workmanship warranty. <a href="/contact" class="text-accent hover:underline font-medium">Contact us</a> to book a sunroom assessment. Call 437-344-8490 or message us any time. We are open 24/7.</p>
`,
  },
  {
    slug: "window-glass-scratches-repair-or-replace",
    title: "Window Glass Scratches: Can They Be Repaired?",
    metaTitle: "Window Glass Scratches: Repair or Replace?",
    metaDescription:
      "Not every scratch means new glass. Learn how to assess window glass scratches, when polishing works, and when you need a replacement.",
    excerpt:
      "A scratch on your window glass is annoying, but it does not always mean the glass needs replacing. The depth and type of glass determine whether a repair is possible.",
    publishedAt: "2026-11-18",
    author: "Dan",
    readingTime: 6,
    tags: ["Window Glass", "Glass Repair", "Home Maintenance"],
    sections: [
      { id: "how-deep", title: "How Deep Is the Scratch?" },
      { id: "fingernail-test", title: "The Fingernail Test" },
      { id: "polishing-light-scratches", title: "Polishing Light Scratches" },
      { id: "when-replacement-needed", title: "When Replacement Is Needed" },
      { id: "special-glass-types", title: "Scratches on Tempered and Low-E Glass" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>You notice a scratch running across your window and wonder whether it can be buffed out or if you need new glass. The answer depends on a few things: how deep the scratch is, what type of glass you have, and where the scratch is located.</p>

<h2 id="how-deep">How Deep Is the Scratch?</h2>

<p>Window glass scratches fall into two categories:</p>
<ul>
  <li><strong>Surface scratches:</strong> Light marks that sit on the outer layer of the glass. These are caused by cleaning with abrasive pads, dragged furniture, or grit caught between a cloth and the glass.</li>
  <li><strong>Deep scratches:</strong> Grooves you can feel with your finger. These are caused by harder contact: metal tools, rocks thrown by lawnmowers, or attempted break-ins. Deep scratches weaken the glass structurally.</li>
</ul>

<h2 id="fingernail-test">The Fingernail Test</h2>

<p>Run your fingernail across the scratch. If your nail glides over it without catching, it is a surface scratch. If your nail catches in the groove, it is a deep scratch.</p>

<p>This test is simple but reliable. Surface scratches can often be polished. Deep scratches usually mean the glass needs replacing, because polishing removes material from the surface and creates a visible distortion where the glass is thinner.</p>

<h2 id="polishing-light-scratches">Polishing Light Scratches</h2>

<p>Light surface scratches on standard float glass can sometimes be polished out using cerium oxide, a compound used by glass professionals. The process involves:</p>
<ol>
  <li>Cleaning the glass thoroughly</li>
  <li>Applying a cerium oxide slurry to the scratched area</li>
  <li>Using a felt polishing pad on a low-speed drill or rotary tool</li>
  <li>Working the compound in small circular motions</li>
  <li>Cleaning and inspecting the area</li>
</ol>

<p>Cerium oxide polishing works well on shallow scratches. It removes a thin layer of glass to bring the surface level with the bottom of the scratch. On larger or deeper scratches, the polished area can create a lens effect where the glass is now slightly thinner, bending light differently from the surrounding surface.</p>

<p>For a single small scratch, polishing is worth trying. For multiple scratches across a large area, <a href="/glass-replacement" class="text-accent hover:underline font-medium">glass replacement</a> is usually more practical.</p>

<h2 id="when-replacement-needed">When Replacement Is Needed</h2>

<p>The glass should be replaced rather than polished when:</p>
<ul>
  <li>The scratch is deep enough to catch your fingernail</li>
  <li>The scratch runs across the centre of the glass where distortion would be noticeable</li>
  <li>There are many scratches covering a large area</li>
  <li>The glass is part of a sealed unit (double or triple pane) and the scratch is on an interior surface you cannot reach</li>
  <li>The scratch has created a stress point and you can see small cracks forming at either end</li>
</ul>

<p>Replacement glass is measured first, custom-made to fit, then installed. The existing frame stays in place. This is a glass-only replacement, not a full window swap. See our <a href="/glass-replacement" class="text-accent hover:underline font-medium">glass replacement page</a> for how the process works.</p>

<h2 id="special-glass-types">Scratches on Tempered and Low-E Glass</h2>

<p><strong>Tempered glass</strong> cannot be polished safely. Tempered glass has a compressed surface layer that gives it strength. Polishing removes material from that layer, weakening the glass and potentially causing it to shatter. Any scratch on tempered glass that is deep enough to be a concern means replacement.</p>

<p><strong>Low-E coated glass</strong> has a thin metallic coating on one surface that reflects heat. Scratches on the coated side damage that coating permanently. The coating cannot be reapplied, and polishing would remove more of it. If the Low-E layer is damaged, the glass needs replacing to restore its energy performance.</p>

<p>If you are not sure what type of glass your window has, a technician can check during a site visit.</p>

<h2 id="faq">Common Questions</h2>

<h3>Can I use toothpaste to remove a window scratch?</h3>
<p>Toothpaste is a very mild abrasive. It may reduce the appearance of a barely visible scratch, but it will not remove anything you can actually feel. For anything beyond the lightest surface mark, you need cerium oxide or new glass.</p>

<h3>Does a scratch affect the window seal?</h3>
<p>A surface scratch does not affect the seal. A deep scratch on the outer pane of a sealed unit does not affect the seal either, since the seal is between the panes, not on the outer surface. But a deep scratch weakens the glass and could lead to cracking later, especially in cold weather. If you notice fog between the panes along with the scratch, that is a separate issue. See our guide on <a href="/foggy-windows" class="text-accent hover:underline font-medium">foggy window repair</a>.</p>

<h3>How much does it cost to replace scratched glass?</h3>
<p>It depends on the size of the glass, the type, and whether it is a single pane or sealed unit. A technician can give you a written quote on the spot during a site visit. The $30 visit fee is credited toward the repair if you go ahead.</p>
`,
  },
  {
    slug: "condo-window-replacement-preparation",
    title: "How to Prepare Your Condo for a Window Replacement Project",
    metaTitle: "Condo Window Replacement Preparation: What You Need to Know",
    metaDescription:
      "Replacing windows in a condo involves approvals, coordination, and logistics that houses don't. Here is how to prepare for a smooth project.",
    excerpt:
      "Window replacement in a condo is not the same as in a house. You may need board approval, a Section 98 agreement, and coordination with your property manager. Here is how to get it done right.",
    publishedAt: "2026-11-17",
    author: "Dan",
    readingTime: 7,
    tags: ["Condo", "Window Replacement", "Property Management", "Planning"],
    sections: [
      { id: "condo-vs-house", title: "Why Condos Are Different" },
      { id: "common-element-or-unit", title: "Common Element or Unit Component?" },
      { id: "section-98", title: "Section 98 Agreements in Ontario" },
      { id: "coordinating-access", title: "Coordinating Access and Logistics" },
      { id: "what-to-expect", title: "What to Expect During Installation" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>If your condo windows are foggy, drafty, or damaged, you are probably thinking about replacement. The glass work itself is straightforward. The logistics in a condo building are what take planning. Between condo board approvals, building rules, and elevator bookings, the preparation matters as much as the installation.</p>

<h2 id="condo-vs-house">Why Condos Are Different</h2>

<p>In a house, you own everything. You decide what gets replaced and when. In a condo, windows usually sit on the boundary between your unit and the building's common elements. That boundary line determines who is responsible for what, and who needs to approve the work.</p>

<p>Most condo declarations classify windows as common elements, meaning the condo corporation is responsible for maintaining them. But many buildings have modified this arrangement through their declaration or rules, shifting some or all of the cost to individual owners.</p>

<p>Before you start planning, check your condo's declaration and bylaws. Your property manager can point you to the relevant sections.</p>

<h2 id="common-element-or-unit">Common Element or Unit Component?</h2>

<p><strong>If windows are common elements:</strong> The condo corporation is responsible for replacement. You cannot change them on your own without approval. If the corporation has a window replacement plan in its reserve fund study, your windows may already be scheduled. Check with your property manager.</p>

<p><strong>If windows are your responsibility:</strong> You still need approval before changing anything visible from the outside of the building. The condo corporation has an interest in maintaining a uniform appearance. You will likely need to match the existing window style, colour, and profile.</p>

<p>Some condos handle this through a blanket policy that specifies approved window types. Others require individual approval for each unit. Either way, start with your property manager.</p>

<h2 id="section-98">Section 98 Agreements in Ontario</h2>

<p>Ontario's Condominium Act, 1998 includes Section 98, which covers modifications to common elements by individual owners. If your windows are common elements and you want to replace them at your own expense (rather than waiting for the corporation's schedule), you will likely need a Section 98 agreement.</p>

<p>This agreement:</p>
<ul>
  <li>Requires board approval</li>
  <li>Specifies who pays for the work</li>
  <li>Sets out who is responsible for future maintenance of the new windows</li>
  <li>Runs with the unit, meaning it transfers to future owners</li>
  <li>Must be registered on title</li>
</ul>

<p>The process typically takes a few weeks to a couple of months. Your property manager can initiate it, or you can request it through the board. Some boards have a standard template for window replacements, which speeds things up.</p>

<h2 id="coordinating-access">Coordinating Access and Logistics</h2>

<p>Once you have approval, the practical logistics come next:</p>

<p><strong>Elevator booking:</strong> Most condo buildings require a service elevator booking for any trades bringing in materials. Glass panels are large and heavy. Book the elevator well in advance, as slots fill up, especially in busy buildings.</p>

<p><strong>Building access for contractors:</strong> Your contractor will need building access, which usually means registering them with the front desk or concierge in advance. Some buildings require proof of insurance from the contractor.</p>

<p><strong>Noise and work hours:</strong> Most buildings restrict construction noise to specific hours, typically 9 AM to 5 PM on weekdays. Check your building's rules. The installation itself is not particularly loud, but removing old sealant and fitting new glass involves some noise.</p>

<p><strong>Parking and loading:</strong> If your contractor needs to bring a van close to the building, check whether there is a loading dock or designated parking for trades.</p>

<p><strong>Neighbouring units:</strong> It is good practice to let your immediate neighbours know about the work. The building may require a notice posted in common areas.</p>

<h2 id="what-to-expect">What to Expect During Installation</h2>

<p>For a sealed unit replacement (the glass only, not the full frame), the process is:</p>
<ol>
  <li>The technician measures the existing glass to confirm the order specifications</li>
  <li>Glass is custom-made to fit the existing frame</li>
  <li>On installation day, the old sealed unit is removed from the frame</li>
  <li>The new unit is set, shimmed, and sealed</li>
  <li>The area is cleaned up</li>
</ol>

<p>For a typical condo unit with two to four windows, installation takes part of a day. You do not need to leave your unit during the work, but you should clear the area around each window: move furniture, plants, and anything breakable at least a metre back.</p>

<p>See our <a href="/window-replacement" class="text-accent hover:underline font-medium">window replacement page</a> for details on the glass replacement process itself, or our <a href="/foggy-windows" class="text-accent hover:underline font-medium">foggy window repair page</a> if the main issue is condensation between panes.</p>

<h2 id="faq">Common Questions</h2>

<h3>Can I replace just the glass without replacing the frame?</h3>
<p>In most cases, yes. If the frame is in good condition, only the sealed glass unit needs replacing. This is faster, less disruptive, and more affordable than a full window replacement. It also avoids the complexity of changing the frame profile, which is often a concern in condos where uniformity matters.</p>

<h3>How long does the whole process take from start to finish?</h3>
<p>Allow two to four weeks for board approval (or longer if a Section 98 agreement is needed), one to two weeks for glass fabrication after measurements, and part of a day for installation. The total timeline is usually four to eight weeks.</p>

<h3>What if other units in my building need windows too?</h3>
<p>Group projects often make sense in condos. If several units need glass replaced, coordinating the work reduces costs (one mobilization, one elevator booking) and may make it easier to get board approval. Talk to your property manager about whether a building-wide assessment makes sense. For multi-unit projects, see our <a href="/property-managers" class="text-accent hover:underline font-medium">property manager services</a>.</p>
`,
  },
  {
    slug: "window-cracked-cold-weather-causes",
    title: "What Causes Window Glass to Crack in Cold Weather?",
    metaTitle: "Why Window Glass Cracks in Cold Weather: Causes and Solutions",
    metaDescription:
      "Your window cracked by itself in winter? Thermal stress, edge damage, and nickel sulfide are the most common causes. Here is what happened and what to do next.",
    excerpt:
      "A window that cracks on its own during a cold snap is alarming but not unusual. Thermal stress is the most common cause, and it is usually fixable with a glass replacement.",
    publishedAt: "2026-11-16",
    author: "Dan",
    readingTime: 6,
    tags: ["Window Repair", "Winter", "Thermal Stress", "Glass Replacement"],
    sections: [
      { id: "thermal-stress-cracks", title: "Thermal Stress Cracks" },
      { id: "how-thermal-stress-works", title: "How Thermal Stress Works" },
      { id: "edge-damage", title: "Edge Damage from Installation" },
      { id: "nickel-sulfide", title: "Nickel Sulfide Inclusions in Tempered Glass" },
      { id: "insurance-coverage", title: "Insurance Coverage for Stress Cracks" },
      { id: "what-to-do", title: "What to Do When It Happens" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>You wake up on a cold January morning and notice a crack running across your window. Nobody hit it. Nothing fell on it. It just cracked on its own. This is more common than you might think, especially in Ontario winters where temperatures can swing dramatically in a single day.</p>

<h2 id="thermal-stress-cracks">Thermal Stress Cracks</h2>

<p>The most common cause of a window cracking by itself in cold weather is thermal stress. When different parts of a glass pane are at different temperatures, the glass expands or contracts unevenly. If the stress exceeds what the glass can handle, it cracks.</p>

<p>Thermal stress cracks have a distinctive look. They typically:</p>
<ul>
  <li>Start at or near the edge of the glass</li>
  <li>Run in a roughly straight line, often perpendicular to the edge</li>
  <li>Have a clean, smooth break line (not jagged or branching like an impact crack)</li>
</ul>

<p>If the crack starts from the middle of the glass and radiates outward in a starburst pattern, that is an impact crack, not thermal stress.</p>

<h2 id="how-thermal-stress-works">How Thermal Stress Works</h2>

<p>Glass expands when heated and contracts when cooled. On a cold morning, the centre of a window might be warmed by indoor heating while the edges, which sit inside the frame, stay cold. This temperature difference creates internal stress.</p>

<p>Common scenarios that increase thermal stress:</p>
<ul>
  <li><strong>Direct morning sun on a cold window:</strong> The sun heats the exposed glass quickly while the frame-covered edges stay cold. This is the classic cause.</li>
  <li><strong>Dark curtains or blinds against the glass:</strong> Heat builds up between the covering and the glass, increasing the temperature difference.</li>
  <li><strong>Heating vents aimed at the window:</strong> Hot air hitting one part of the glass while the rest stays cold.</li>
  <li><strong>Sudden temperature drops:</strong> A rapid overnight drop from mild to extreme cold can stress glass that was already warm on the inside.</li>
</ul>

<h2 id="edge-damage">Edge Damage from Installation</h2>

<p>When glass is cut, the edges have tiny imperfections: chips, nicks, and micro-cracks. In a properly manufactured sealed unit, these edges are hidden inside the spacer bar and sealant. But if the glass was not handled carefully during manufacturing or installation, edge damage can be more severe.</p>

<p>These small edge flaws act as starting points for thermal stress cracks. A pane with clean edges can handle a larger temperature difference before cracking. A pane with chipped edges will crack under less stress.</p>

<p>This is one reason why quality manufacturing and careful installation matter. Cheap or poorly handled glass is more likely to crack in its first winter.</p>

<h2 id="nickel-sulfide">Nickel Sulfide Inclusions in Tempered Glass</h2>

<p>If your window uses tempered (safety) glass, there is another possible cause: nickel sulfide inclusions. During manufacturing, tiny particles of nickel sulfide can become trapped inside the glass. Over time, these particles change their crystalline structure and expand slightly.</p>

<p>In tempered glass, which is under constant internal tension, even a small expansion from a nickel sulfide particle can trigger spontaneous breakage. When this happens, the glass shatters into small, relatively safe pieces rather than forming a single crack.</p>

<p>Nickel sulfide failure is rare but not preventable. It can happen years after installation and is unrelated to temperature, though cold weather can be a contributing trigger. If your tempered glass shattered without impact, this is a likely cause.</p>

<h2 id="insurance-coverage">Insurance Coverage for Stress Cracks</h2>

<p>Whether your home insurance covers a thermal stress crack depends on your policy. Many standard policies in Ontario do cover sudden and accidental glass breakage, which includes thermal stress cracks. Some policies exclude stress cracks specifically.</p>

<p>Check your policy or call your insurer. If the crack is covered, you will typically need:</p>
<ul>
  <li>Photos of the crack</li>
  <li>A description of when you noticed it</li>
  <li>A quote for the replacement</li>
</ul>

<p>The deductible may be close to or higher than the cost of a single glass replacement, so compare before filing a claim.</p>

<h2 id="what-to-do">What to Do When It Happens</h2>

<p>A cracked window is not an emergency unless the glass is broken through completely and your home is exposed to the elements. For a stress crack where the glass is still in one piece:</p>
<ol>
  <li>Do not try to tape or glue the crack. It will not hold, and adhesive residue makes the eventual replacement messier.</li>
  <li>If the crack is on the outer pane of a sealed unit, the inner pane is still intact and providing some insulation.</li>
  <li>Book a <a href="/glass-replacement" class="text-accent hover:underline font-medium">glass replacement</a>. The glass is measured, custom-made, and then installed in the existing frame.</li>
  <li>If the glass is fully broken and your home is exposed, that is an <a href="/emergency-glass-repair" class="text-accent hover:underline font-medium">emergency glass repair</a> situation. We respond 24/7.</li>
</ol>

<h2 id="faq">Common Questions</h2>

<h3>Can a stress crack spread?</h3>
<p>Yes. Temperature changes will continue to stress the glass, and the crack is likely to grow over time. It won't seal itself. Replacing the glass sooner prevents the crack from reaching a point where the pane fails completely.</p>

<h3>Is a thermal stress crack dangerous?</h3>
<p>Standard annealed glass with a stress crack will stay in the frame. The crack line is clean, and the pieces stay connected. It is not an immediate safety risk, but it should be replaced before it worsens. If the glass is tempered and shatters, the small pieces are designed to be less dangerous than large shards, but the window will need immediate boarding or replacement.</p>

<h3>Can I prevent thermal stress cracks?</h3>
<p>You can reduce the risk by not aiming heating vents directly at windows, pulling curtains or blinds back slightly to allow air circulation between the covering and the glass, and choosing sealed units with clean, properly processed edges. If your window faces direct morning sun and has a history of cracking, talk to us about whether a different glass type would be more resistant.</p>
`,
  },
  {
    slug: "garage-door-window-glass-replacement",
    title: "Garage Door Window Glass Replacement: Styles and Options",
    metaTitle: "Garage Door Window Glass Replacement: Styles, Types, and Options",
    metaDescription:
      "Broken or dated garage door window glass? Learn about glass types, sizing, and when to upgrade from single pane to insulated for better energy performance.",
    excerpt:
      "Garage door windows take a beating from weather and stray balls. Replacing the glass is simpler than you might think, and it is a good opportunity to upgrade to insulated or decorative options.",
    publishedAt: "2026-11-15",
    author: "Dan",
    readingTime: 6,
    tags: ["Garage Door", "Glass Replacement", "Home Improvement", "Insulated Glass"],
    sections: [
      { id: "common-glass-types", title: "Common Glass Types for Garage Doors" },
      { id: "standard-vs-custom", title: "Standard vs Custom Sizing" },
      { id: "diy-vs-professional", title: "DIY Snap-In vs Professional Installation" },
      { id: "upgrading-insulated", title: "Upgrading to Insulated Glass" },
      { id: "choosing-style", title: "Choosing a Style" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Garage door windows let natural light into what is usually the darkest room in the house. When they crack, cloud over, or just look dated, replacing the glass is a straightforward project. You can match what you had, or take the opportunity to upgrade to something better.</p>

<h2 id="common-glass-types">Common Glass Types for Garage Doors</h2>

<p>Garage door windows come in several glass types, each with different characteristics:</p>

<p><strong>Clear glass:</strong> Standard transparent glass. Lets in the most light but offers no privacy. Common in detached garages that don't face the street.</p>

<p><strong>Frosted or obscured glass:</strong> Lets in light while blocking the view. Good for street-facing garages where you don't want people seeing your tools, vehicles, or storage. Available in several patterns and opacity levels.</p>

<p><strong>Decorative glass:</strong> Patterned, tinted, or textured glass that adds visual interest to the garage door. Styles range from colonial grids to contemporary frosted panels. Decorative glass can transform the curb appeal of an older garage door without replacing the entire door.</p>

<p><strong>Insulated glass (sealed units):</strong> Double-pane glass with an air or gas fill between the panes. Provides better thermal insulation than single pane, which matters if your garage is attached to the house or if you use the space as a workshop.</p>

<p><strong>Tempered glass:</strong> Safety glass that breaks into small granular pieces instead of sharp shards. Building codes may require tempered glass in garage doors depending on the size and placement of the panels.</p>

<h2 id="standard-vs-custom">Standard vs Custom Sizing</h2>

<p>Many garage door manufacturers use standardized window panel sizes. If your door is from a major manufacturer, replacement glass in the standard sizes may be available off the shelf.</p>

<p>Older doors, custom doors, or doors from smaller manufacturers may need custom-cut glass. This is not a problem. It just means the glass needs measuring and fabrication before installation, which adds a few days to the timeline.</p>

<p>When measuring, the important dimensions are the visible glass area and the channel depth (how far the glass sits into the frame). Getting these right ensures a proper fit and seal.</p>

<h2 id="diy-vs-professional">DIY Snap-In vs Professional Installation</h2>

<p>Some garage door window systems use snap-in frames where the glass panel lifts out from the inside. If your door has this style, replacing a single pane of clear glass is a task some homeowners handle themselves.</p>

<p>Professional installation makes more sense when:</p>
<ul>
  <li>The glass is a sealed insulated unit (heavier and requires proper shimming and sealing)</li>
  <li>The window frame is part of the door panel rather than a snap-in insert</li>
  <li>You are replacing multiple panels at once</li>
  <li>You are upgrading from single pane to insulated, which may need a different frame depth</li>
  <li>The existing frame or rubber gaskets are damaged and need replacing along with the glass</li>
</ul>

<p>Improper installation leads to leaks, rattling, and premature failure of the seal on insulated units. If you are spending money on upgraded glass, professional installation protects that investment.</p>

<h2 id="upgrading-insulated">Upgrading to Insulated Glass</h2>

<p>If your garage is attached to the house, upgrading from single-pane to insulated glass in the garage door is one of the most cost-effective energy improvements you can make. Single-pane glass in a garage door is a significant source of heat loss in winter.</p>

<p>Benefits of insulated garage door glass:</p>
<ul>
  <li>Reduced heat loss from the garage into attached living spaces</li>
  <li>More comfortable working temperature if you use the garage as a workshop</li>
  <li>Less condensation on the inside of the glass in cold weather</li>
  <li>Reduced outside noise</li>
</ul>

<p>The main consideration is whether the existing window frames in your garage door can accommodate the thicker profile of a sealed unit. Single-pane glass is about 3mm thick. A standard sealed unit is 15 to 22mm thick. Some frame systems can handle the thicker glass with an adapter. Others need a frame upgrade.</p>

<p>A technician can assess your specific door during a site visit and let you know what is possible without replacing the entire door. For more on sealed glass units, see our <a href="/glass-replacement" class="text-accent hover:underline font-medium">glass replacement page</a>.</p>

<h2 id="choosing-style">Choosing a Style</h2>

<p>If you are replacing garage door glass anyway, it is worth considering whether a different style would improve your home's appearance. Garage doors are one of the most visible parts of a home's exterior.</p>

<p>Some options:</p>
<ul>
  <li><strong>Matching the front door:</strong> If your <a href="/front-door-glass" class="text-accent hover:underline font-medium">front door has decorative glass</a>, matching that style on the garage door creates a cohesive look.</li>
  <li><strong>Privacy upgrade:</strong> Switching from clear to frosted glass is a simple change that improves security without losing light.</li>
  <li><strong>Modern look:</strong> Full-view garage doors with large glass panels are popular in modern home designs. If you have a traditional door and want to update the look, larger glass panels can be a dramatic improvement.</li>
  <li><strong>Period-appropriate:</strong> For older homes, colonial-style divided light panels maintain the character of the house.</li>
</ul>

<h2 id="faq">Common Questions</h2>

<h3>Can I replace just the glass in my garage door, or do I need a new door?</h3>
<p>In most cases, just the glass. If the door panels, frame, and hardware are in good condition, there is no reason to replace the entire door. Glass replacement is significantly less expensive and can be done in a single visit.</p>

<h3>How long does garage door glass replacement take?</h3>
<p>For standard-size panels that are in stock, same-day installation is possible. Custom glass or sealed units need to be fabricated first, which typically takes a few days after measurements are taken.</p>

<h3>Will new glass panels change how my garage door operates?</h3>
<p>If you are upgrading from single pane to insulated glass, the panels will be heavier. In most cases, the difference is small enough that the door opener handles it without adjustment. For doors with many large glass panels, the spring tension may need a slight adjustment, which any garage door technician can handle. The glass installation itself does not affect the door's mechanical operation.</p>

<h3>Is the garage door glass covered by warranty?</h3>
<p>Glass installed by LuminaSky comes with a 5-year seal warranty on sealed units and a 2-year warranty on workmanship. The warranty does not cover impact damage, vandalism, or physical breakage. <a href="/contact" class="text-accent hover:underline font-medium">Contact us</a> for a written quote on the spot.</p>
`,
  },
  {
    slug: "spring-window-inspection-checklist",
    title: "Spring Window Inspection Checklist for Toronto Homeowners",
    metaTitle: "Spring Window Inspection Checklist: What to Check After Winter",
    metaDescription:
      "Check your windows after winter for seal failures, condensation, hardware problems and screen damage. A simple spring checklist for GTA homeowners.",
    excerpt:
      "Winter is hard on windows. A quick spring inspection catches seal failures, hardware problems and screen damage before they get worse or cost more to fix.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 6,
    tags: ["Window Maintenance", "Seasonal", "Foggy Glass", "Window Hardware"],
    sections: [
      { id: "why-spring", title: "Why Spring Is the Right Time" },
      { id: "check-seals", title: "Check for Seal Failures" },
      { id: "check-condensation", title: "Look for Condensation Clues" },
      { id: "check-hardware", title: "Test the Hardware" },
      { id: "check-screens", title: "Inspect Screens" },
      { id: "check-caulking", title: "Check Exterior Caulking" },
      { id: "what-to-do", title: "What to Do with What You Find" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Winter puts real stress on windows. Freezing temperatures, ice buildup, moisture cycling and wind all take a toll. Most of the damage is gradual, and you won't notice it until spring when you start opening windows again.</p>

<p>A simple walk-through in April or May can catch problems early, before a small seal failure turns into a foggy window or a stiff crank breaks entirely.</p>

<h2 id="why-spring">Why Spring Is the Right Time</h2>

<p>During winter, windows stay closed and you're less likely to notice a draft, a stiff handle or a cracked seal. Spring is when you'll open things up, swap storm inserts for screens and actually look at each window closely for the first time in months.</p>

<p>Catching a problem in spring also means you can get it fixed before summer, when schedules are busiest. A seal that failed over winter won't get better on its own.</p>

<h2 id="check-seals">Check for Seal Failures</h2>

<p>Stand inside and look at every window from an angle. If you see haze, fog or moisture between the two panes of glass, the seal on that unit has failed. The moisture is trapped inside the sealed unit and won't go away with cleaning.</p>

<p>Mark every window that shows this. Seal failures are the most common issue we see after winter, and <a href="/foggy-windows">foggy glass repair</a> is straightforward: the glass unit gets replaced, not the whole window.</p>

<ul>
  <li>Check in the morning when temperature differences make condensation more visible.</li>
  <li>Look at all sides of the house. South-facing windows cycle through more heat and cold, so they fail more often.</li>
  <li>A window that looked fine last fall but fogs now almost certainly failed during the freeze-thaw cycles.</li>
</ul>

<h2 id="check-condensation">Look for Condensation Clues</h2>

<p>Not all condensation means a broken seal. Condensation on the inside surface of the glass is a humidity issue in the house, not a window problem. Condensation on the outside surface on cool mornings is completely normal and actually means the window is insulating well.</p>

<p>The problem is condensation <em>between</em> the panes. That's the sign the sealed unit has failed. Our post on <a href="/blog/exterior-window-condensation-normal">exterior condensation</a> explains the difference in detail.</p>

<h2 id="check-hardware">Test the Hardware</h2>

<p>Open and close every window. You're checking for:</p>

<ul>
  <li><strong>Stiff or grinding cranks.</strong> Casement and awning windows use a crank operator. If it's hard to turn, the gears may be worn or the arm may be bent. Don't force it. See our page on <a href="/cranks">window crank repair</a>.</li>
  <li><strong>Locks that don't engage.</strong> If a lock won't line up with its keeper, the sash may have shifted or the hardware is worn.</li>
  <li><strong>Double-hung windows that won't stay up.</strong> The balance springs inside the frame may have broken. The window slides down on its own because there's nothing holding it.</li>
  <li><strong>Sliding windows that stick or jump off track.</strong> Dirt in the track is common after winter, but if cleaning doesn't fix it, the rollers may need replacing.</li>
</ul>

<p>Most <a href="/cranks">window hardware repairs</a> are completed on the same day, on the first visit.</p>

<h2 id="check-screens">Inspect Screens</h2>

<p>Pull out each screen and look it over. Winter storage, handling and pets are the usual causes of damage.</p>

<ul>
  <li>Small holes or tears let insects in. A patch may work, but a re-screen is often cleaner.</li>
  <li>Bent frames won't sit flush and leave gaps.</li>
  <li>Missing or broken clips and springs mean the screen won't stay in place.</li>
</ul>

<p>If screens need work, our <a href="/window-screens">window screen service</a> covers repair, re-screening and custom replacements.</p>

<h2 id="check-caulking">Check Exterior Caulking</h2>

<p>Walk around the outside of the house and look at the caulking around each window frame. You're looking for:</p>

<ul>
  <li>Gaps where the caulk has pulled away from the frame or the siding.</li>
  <li>Cracks running along the bead.</li>
  <li>Missing sections where old caulk has fallen out.</li>
</ul>

<p>Failed caulking lets water behind the frame, which can cause rot in the rough opening and water damage to the wall below. Recaulking is something most homeowners can do themselves with a tube of exterior silicone, but if the frame itself is damaged, that's a different conversation.</p>

<h2 id="what-to-do">What to Do with What You Find</h2>

<p>Sort what you found into three categories:</p>

<ol>
  <li><strong>DIY fixes:</strong> Recaulking, cleaning tracks, tightening loose screws on handles.</li>
  <li><strong>Professional repairs:</strong> Foggy sealed units, broken cranks, failed balances, damaged screens. Send us a photo or <a href="/contact">book a visit</a> and we'll give you a written quote on the spot.</li>
  <li><strong>Watch list:</strong> Windows that are borderline. Mark them and check again in fall.</li>
</ol>

<p>Addressing problems in spring is almost always cheaper than waiting. A seal failure won't reverse itself, and a stiff crank will only get harder to turn.</p>

<h2 id="faq">Common Questions</h2>

<h3>How long does the inspection take?</h3>
<p>Most homeowners can walk through every window in an hour or less. Focus on looking and testing, not fixing. Make notes and take photos of anything you want to come back to.</p>

<h3>Should I hire someone to inspect my windows?</h3>
<p>You don't need to, but if you'd rather have a professional look, our $30 site visit covers a full assessment and the fee is credited toward any repair you go ahead with.</p>

<h3>What if several windows have problems?</h3>
<p>That's common, especially in houses where all the windows were installed at the same time. We can quote multiple windows in one visit and often offer better pricing when several units are done together.</p>

<p>Related reading: <a href="/blog/foggy-window-repair-cost-gta" class="text-accent hover:underline font-medium">How Much Does Foggy Window Repair Cost in the GTA?</a> covers pricing for the most common finding, and <a href="/blog/window-repair-vs-replacement-toronto" class="text-accent hover:underline font-medium">Window Repair vs. Replacement</a> helps you decide which route makes sense for each window on your list.</p>
`,
  },
  {
    slug: "argon-gas-windows-what-you-need-to-know",
    title: "Argon Gas in Windows: What It Does and What Happens When It Leaks",
    metaTitle: "Argon Gas in Windows: What It Does and When It Matters",
    metaDescription:
      "Argon gas fills the gap between window panes for better insulation. Here is what it does, whether it can be refilled, and what to do when it leaks out.",
    excerpt:
      "Most double and triple pane windows are filled with argon gas. It improves insulation, but it doesn't last forever. Here is what actually happens when it leaks and what your options are.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 6,
    tags: ["Window Glass", "Energy Efficiency", "Foggy Glass", "Glass Replacement"],
    sections: [
      { id: "what-is-argon", title: "What Is Argon Gas in Windows?" },
      { id: "how-it-helps", title: "How It Improves Insulation" },
      { id: "does-it-leak", title: "Does Argon Leak Out Over Time?" },
      { id: "can-you-refill", title: "Can You Refill the Gas?" },
      { id: "when-it-matters", title: "When Argon Loss Actually Matters" },
      { id: "myths", title: "Common Myths" },
      { id: "faq", title: "Questions We Hear Often" },
    ],
    content: `
<p>If your windows were made in the last 20 years, they almost certainly have argon gas between the panes. It's one of the most common upgrades in modern sealed units, and there's a lot of confusion about what it does, whether it matters, and what to do when it's gone.</p>

<h2 id="what-is-argon">What Is Argon Gas in Windows?</h2>

<p>Argon is an inert, colourless, odourless gas. It makes up about 1% of the air we breathe. In windows, it fills the space between the two (or three) panes of glass inside a sealed unit.</p>

<p>It's used because it's denser than regular air. That density slows down the transfer of heat through the gap, which makes the window a better insulator. It's not toxic, not flammable, and not harmful if it leaks into your home.</p>

<h2 id="how-it-helps">How It Improves Insulation</h2>

<p>Heat moves through windows in three ways: conduction through the glass, convection in the air gap, and radiation. Argon addresses the convection part. Because argon molecules are heavier than nitrogen and oxygen, they move more slowly, which reduces the convective loop inside the sealed unit.</p>

<p>In practical terms, argon-filled windows are roughly 5% to 15% more energy efficient than the same window filled with dry air. It's a real improvement, but it's not dramatic. The Low-E coating on the glass does more for efficiency than the gas fill does.</p>

<h2 id="does-it-leak">Does Argon Leak Out Over Time?</h2>

<p>Yes. All sealed units lose some gas over time. Industry studies show a typical loss rate of about 1% per year through the seal. After 20 years, a unit might have lost 15% to 20% of its original argon fill. That's considered normal.</p>

<p>When the seal fails completely, the gas escapes much faster. A broken seal is obvious because moisture gets in and you see <a href="/foggy-windows">fog between the panes</a>. At that point, the argon is gone and won't come back.</p>

<h2 id="can-you-refill">Can You Refill the Gas?</h2>

<p>No. This is one of the most common questions we get, and the answer is straightforward. You cannot refill argon in an existing sealed unit.</p>

<p>The sealed unit is factory-made. The gas is pumped in during manufacturing before the unit is sealed shut. There's no port, valve or way to inject gas back in after the fact. Any company that claims they can "recharge" your argon is not being honest about how sealed units work.</p>

<p>If the seal has failed and the gas is gone, the fix is to <a href="/glass-replacement">replace the sealed unit</a>. The new unit comes filled with fresh gas from the factory.</p>

<h2 id="when-it-matters">When Argon Loss Actually Matters</h2>

<p>Here's where it gets practical. If your window still has an intact seal (no fog, no moisture between panes) but has slowly lost some argon over 15 or 20 years, the energy impact is very small. You might be down from 90% argon to 75%, and the insulation difference is barely measurable.</p>

<p>Argon loss matters when:</p>

<ul>
  <li><strong>The seal has failed.</strong> Fog between the panes means the seal is broken and the gas is gone. The bigger issue is the moisture, which blocks your view and can etch the glass over time.</li>
  <li><strong>You're replacing the glass anyway.</strong> The new unit will come with a fresh gas fill as part of the standard manufacturing process.</li>
  <li><strong>You're comparing new windows.</strong> Argon fill is worth having in a new unit. It costs very little extra and does provide a measurable insulation boost.</li>
</ul>

<p>Argon loss on its own, without a seal failure, is almost never a reason to replace a window.</p>

<h2 id="myths">Common Myths</h2>

<h3>Myth: You can tell if argon is gone by touching the glass</h3>
<p>No. The temperature difference between an argon-filled and air-filled unit is too small to feel by hand. If your window feels very cold in winter, the issue is more likely the glass type (single pane, old double pane without Low-E) than the gas fill.</p>

<h3>Myth: Argon leaks are dangerous</h3>
<p>Argon is completely safe. It's already in the air you breathe. Even if an entire sealed unit released all its argon into a room, the amount is tiny and would have zero health effect.</p>

<h3>Myth: Windows without argon are worthless</h3>
<p>A double-pane window filled with dry air is still a good window. Argon adds a modest efficiency boost, but the glass itself, the Low-E coating and the seal are doing most of the work.</p>

<h2 id="faq">Questions We Hear Often</h2>

<h3>How do I know if my windows have argon?</h3>
<p>Check the spacer bar between the panes. Many manufacturers print gas fill information there. You can also check the original window sticker or documentation. If the window was made after about 2005, there's a good chance it has argon.</p>

<h3>Should I pay extra for argon in new sealed units?</h3>
<p>Yes, but don't overpay. It's a standard part of modern sealed unit manufacturing and shouldn't add much to the cost. Our <a href="/glass-replacement-cost-report-2026">cost report</a> gives you an idea of what sealed units cost in the GTA, gas fill included.</p>

<h3>My window is foggy. Is that the argon?</h3>
<p>The fog is moisture, not argon. Argon is invisible. The fog means the seal has broken and humid air has gotten in. The argon is gone too, but the visible problem is the moisture. See <a href="/blog/why-windows-fog-between-panes">why windows fog between panes</a> for the full explanation.</p>

<p>For a broader look at glass specs, read <a href="/blog/double-vs-triple-pane-low-e-argon" class="text-accent hover:underline font-medium">Double vs. Triple Pane, Low-E and Argon</a>, which compares every common combination you will see in a quote.</p>
`,
  },
  {
    slug: "window-glass-for-bathrooms-kitchens-privacy",
    title: "Privacy Glass Options for Bathrooms, Kitchens and Entryways",
    metaTitle: "Privacy Glass for Bathrooms and Kitchens: Your Options Explained",
    metaDescription:
      "Frosted, obscure, patterned and tinted glass give you privacy without curtains. Here are the options for bathrooms, kitchens and entryways in Toronto homes.",
    excerpt:
      "You don't need curtains or blinds to get privacy. Frosted, obscure, patterned and tinted glass options let light in while keeping the view out. Here is what works for each room.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 7,
    tags: ["Glass Replacement", "Privacy Glass", "Bathroom", "Front Door Glass"],
    sections: [
      { id: "why-privacy-glass", title: "Why Privacy Glass?" },
      { id: "types", title: "Types of Privacy Glass" },
      { id: "bathrooms", title: "Best Options for Bathrooms" },
      { id: "kitchens", title: "Options for Kitchens" },
      { id: "entryways", title: "Front Doors and Sidelites" },
      { id: "tempered", title: "When Tempered Glass Is Required" },
      { id: "how-it-works", title: "How Replacement Works" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Bathrooms, kitchens and entryways all have windows where you want light but not a clear view in. Most people solve this with curtains or blinds, but those collect moisture, block airflow and need cleaning. Privacy glass solves the problem at the source.</p>

<p>You don't need a new window to get privacy glass. In most cases, the glass unit can be replaced inside your existing frame with a frosted, obscure or patterned option.</p>

<h2 id="why-privacy-glass">Why Privacy Glass?</h2>

<p>The main reasons homeowners switch to privacy glass:</p>

<ul>
  <li><strong>No curtains needed.</strong> Especially useful in wet rooms where fabric collects mould.</li>
  <li><strong>Light still comes through.</strong> Privacy glass diffuses light rather than blocking it. Rooms stay bright.</li>
  <li><strong>Lower maintenance.</strong> No blinds to dust, no curtains to wash.</li>
  <li><strong>Better appearance.</strong> Especially on front doors and sidelites, where decorative glass looks intentional rather than covered up.</li>
</ul>

<h2 id="types">Types of Privacy Glass</h2>

<h3>Frosted (acid-etched)</h3>
<p>The most common choice. One surface of the glass is chemically etched to create a smooth, uniform blur. You can see light and colour through it, but not shapes or detail. It looks clean and modern.</p>

<h3>Obscure (textured)</h3>
<p>The glass has a physical texture rolled into it during manufacturing. Common patterns include rain, reed, narrow reed, delta and cross-reed. Each pattern offers a different level of privacy and light diffusion. Obscure glass tends to have more visual character than plain frosted.</p>

<h3>Patterned or decorative</h3>
<p>Glass with a bolder design, like glue-chip (which looks like frost on a window) or flemish (a wavy distortion). These are popular in front door inserts and sidelites where you want the glass to be a design feature.</p>

<h3>Tinted</h3>
<p>Grey, bronze or green tinted glass reduces visibility from outside, especially during the day. It doesn't offer full privacy at night when interior lights are on. Tinted glass also cuts glare and heat gain.</p>

<h3>Laminated with a frosted interlayer</h3>
<p>Two panes bonded with a frosted film between them. This gives you privacy and the safety benefits of laminated glass (it holds together if broken). A good choice where building code requires safety glass.</p>

<h2 id="bathrooms">Best Options for Bathrooms</h2>

<p>Bathrooms are the most common room for privacy glass. The usual picks:</p>

<ul>
  <li><strong>Frosted</strong> for a clean, minimal look. Works in any style of bathroom.</li>
  <li><strong>Narrow reed or rain pattern</strong> for more visual texture while still blocking the view completely.</li>
  <li><strong>Tempered frosted</strong> for shower enclosures or windows near the tub (building code requires tempered glass in wet areas).</li>
</ul>

<p>Bathroom windows are also often smaller, which keeps the cost down. A single frosted sealed unit is one of the most affordable glass upgrades you can make.</p>

<h2 id="kitchens">Options for Kitchens</h2>

<p>Kitchen windows usually face a neighbour's house or a walkway. Full privacy isn't always needed, just enough to feel comfortable.</p>

<ul>
  <li><strong>Light frosted or satin</strong> gives partial privacy while keeping more light and some visual connection to the outside.</li>
  <li><strong>Frosted on the bottom half only.</strong> Some homeowners replace just the lower pane of a double-hung window with frosted glass, leaving the upper pane clear for the view and sky.</li>
  <li><strong>Tinted</strong> works well for kitchens that get strong afternoon sun. It cuts glare on countertops while reducing visibility from outside.</li>
</ul>

<h2 id="entryways">Front Doors and Sidelites</h2>

<p>Front door glass is the most visible privacy glass in the house. It faces the street and sets the tone for the entrance.</p>

<ul>
  <li><strong>Decorative patterns</strong> like glue-chip, flemish or cross-reed are popular because they look designed, not just covered up.</li>
  <li><strong>Frosted with a clear border</strong> gives privacy while keeping a finished, framed look.</li>
  <li><strong>Textured glass in sidelites</strong> blocks the view through the panels beside the door while still lighting the hallway.</li>
</ul>

<p>Our <a href="/front-door-glass">front door glass page</a> shows the styles we install most often. We can match the pattern of your existing panels if only one needs replacing.</p>

<h2 id="tempered">When Tempered Glass Is Required</h2>

<p>Ontario building code requires <a href="/blog/safety-glass-ontario-building-code">safety glass</a> (tempered or laminated) in certain locations:</p>

<ul>
  <li>Glass in or beside doors (within 600mm of the door)</li>
  <li>Glass in wet areas (showers, tubs)</li>
  <li>Glass below 450mm from the floor</li>
  <li>Glass near stairs or landings</li>
</ul>

<p>All of the privacy glass types above are available in tempered versions. We check code requirements during the measuring visit and include the right glass type in your quote.</p>

<h2 id="how-it-works">How Replacement Works</h2>

<p>In most cases, you don't need a new window. The process:</p>

<ol>
  <li><strong>We measure the existing glass.</strong> Size, thickness, frame type and any grilles are recorded during a site visit.</li>
  <li><strong>The new unit is made.</strong> The sealed unit is built to your exact measurements with the privacy glass type you chose. Glass is custom-made, then installed on a return visit.</li>
  <li><strong>Installation.</strong> The old glass comes out, the new unit goes in. The frame, trim and hardware stay as they are. A typical swap takes under an hour per window.</li>
</ol>

<p>The $30 site visit fee covers the measurement and quote, and it's credited toward the job if you go ahead. See our <a href="/glass-replacement">glass replacement page</a> for more on how the process works.</p>

<h2 id="faq">Common Questions</h2>

<h3>Can I see through frosted glass at night?</h3>
<p>Frosted glass blocks detail in both directions, day and night. You may see the glow of a light on the other side, but not shapes or movement. It's more private than tinted glass, which loses its advantage after dark.</p>

<h3>Can I get privacy glass in a sealed unit with argon?</h3>
<p>Yes. Privacy glass is available as part of a standard double or triple pane sealed unit with argon fill and Low-E coating. You don't give up any insulation by choosing frosted or textured glass.</p>

<h3>What if I change my mind later?</h3>
<p>You can always replace the glass again. Switching from frosted back to clear, or from one pattern to another, is the same process: measure, make, install. The frame stays.</p>

<h3>How much does it cost?</h3>
<p>Privacy glass adds a modest amount to the cost of a standard clear sealed unit. The exact amount depends on the glass type and size. Our <a href="/glass-replacement-cost-report-2026">cost report</a> covers typical ranges for GTA homes.</p>

<p>For more on how glass types compare, read <a href="/blog/types-of-window-glass-explained" class="text-accent hover:underline font-medium">Types of Window Glass Explained</a>, which covers tempered, laminated, Low-E and obscure glass in detail.</p>
`,
  },
  {
    slug: "when-to-call-a-pro-vs-diy-window-repair",
    title: "Window Repairs You Can Do Yourself and When to Call a Pro",
    metaTitle: "DIY Window Repair vs Calling a Pro: What You Can Fix Yourself",
    metaDescription:
      "Some window repairs are safe to do yourself: caulking, screens, weatherstripping. Others need a pro. Here is how to tell the difference.",
    excerpt:
      "Some window problems are easy to fix yourself. Others will get worse if you try. Here is a clear breakdown of what you can handle and what needs a professional.",
    publishedAt: "2026-11-23",
    author: "Dan",
    readingTime: 7,
    tags: ["Window Maintenance", "Window Repair", "DIY", "Window Hardware"],
    sections: [
      { id: "why-it-matters", title: "Why the Distinction Matters" },
      { id: "diy-safe", title: "Repairs You Can Do Yourself" },
      { id: "call-a-pro", title: "When to Call a Professional" },
      { id: "grey-area", title: "The Grey Area" },
      { id: "mistakes", title: "Common DIY Mistakes That Cost More" },
      { id: "how-we-work", title: "How We Handle Repairs" },
      { id: "faq", title: "Common Questions" },
    ],
    content: `
<p>Not every window problem needs a service call. Some things are straightforward to fix yourself with basic tools and an hour of your time. Others are genuinely risky to attempt without the right parts, the right tools and the experience to know what you're looking at.</p>

<p>Here's how to tell the difference.</p>

<h2 id="why-it-matters">Why the Distinction Matters</h2>

<p>The wrong DIY repair can turn a small problem into a bigger one. Forcing a stuck crank can strip the gears and break the operator. Prying out a sealed unit without knowing the glazing method can crack the frame. Using the wrong sealant on a window can void your warranty or trap moisture where it shouldn't be.</p>

<p>On the other hand, paying for a service call to recaulk a window you could have done yourself in ten minutes isn't a great use of money either.</p>

<h2 id="diy-safe">Repairs You Can Do Yourself</h2>

<h3>Recaulking the exterior</h3>
<p>If the caulk around your window frame has cracked or pulled away, you can remove the old bead with a utility knife, clean the gap and apply a new bead of exterior silicone caulk. Use a caulking gun, cut the tip at a 45-degree angle and work in one continuous line. This is one of the most effective maintenance tasks you can do, and it prevents water damage behind the frame.</p>

<h3>Replacing weatherstripping</h3>
<p>Most weatherstripping on windows and doors is a friction-fit or adhesive-backed strip that you can pull off and replace. Measure the old piece, buy the same profile from a hardware store and press the new one in. This fixes drafts and improves the seal without touching the window itself.</p>

<h3>Cleaning and lubricating tracks</h3>
<p>Sliding windows and patio doors run on tracks that collect dirt, pet hair and grit over the winter. Vacuum the track, wipe it down and apply a silicone-based lubricant (not WD-40, which attracts dust). This alone can fix a window or door that's been sticking.</p>

<h3>Re-screening</h3>
<p>If you have a screen frame that's in good shape but the mesh is torn, you can re-screen it yourself. You need new mesh, a spline roller and new spline (the rubber cord that holds the mesh in the groove). It takes about 15 minutes per screen once you've done one. Our <a href="/window-screens">screen page</a> explains the process.</p>

<h3>Tightening loose hardware</h3>
<p>Loose screws on handles, locks and hinges are common. A screwdriver fixes most of them. If a screw hole is stripped (the screw spins but won't tighten), fill the hole with a wooden toothpick and glue, let it dry, then re-drive the screw.</p>

<h2 id="call-a-pro">When to Call a Professional</h2>

<h3>Foggy or broken sealed units</h3>
<p>If there's moisture or fog between the panes, the sealed unit needs to be replaced. This isn't a cleaning job or a sealant job. The unit has to be measured, ordered from a manufacturer and installed correctly. Getting the wrong size, thickness or glass type means doing it twice. See <a href="/foggy-windows">foggy glass repair</a>.</p>

<h3>Broken window cranks and operators</h3>
<p>Casement and awning window operators are precision hardware. The gears, arms and tracks are specific to the window brand and model. Ordering the wrong part means the window won't open or close properly, and forcing the wrong operator in can damage the frame. Our <a href="/cranks">crank repair page</a> explains what's involved. Most hardware repairs are completed on the same day, on the first visit.</p>

<h3>Failed window balances</h3>
<p>If a double-hung window won't stay up, the balance springs inside the frame have broken. Replacing them requires removing the sash, which means getting it out of the frame without damaging the vinyl tracks or the glass. The balance type and weight rating have to match your window, and there are dozens of types.</p>

<h3>Glass near doors, stairs or wet areas</h3>
<p>Building code requires tempered or laminated safety glass in certain locations. Putting the wrong glass type in a code-required location is a code violation and a safety risk. A professional knows when safety glass is required and orders the right type.</p>

<h3>Any repair involving removing the glass</h3>
<p>Sealed glass units are heavy, fragile and have sharp edges. Dropping one can break the glass and damage the frame. Getting the new unit in crooked can stress the seal and cause it to fail early. This is not a job for a first-timer.</p>

<h2 id="grey-area">The Grey Area</h2>

<p>Some jobs are technically possible to DIY but risky if you haven't done them before:</p>

<ul>
  <li><strong>Adjusting a patio door on its track.</strong> The roller adjustment screws are accessible, but over-adjusting can derail the door panel, which weighs 40 to 80 kg. If you're comfortable and careful, it's doable. If not, it's worth a service call.</li>
  <li><strong>Replacing a window lock.</strong> Straightforward if you can find the exact replacement. The challenge is identifying the brand and model.</li>
  <li><strong>Storm door glass and screen inserts.</strong> Swapping the panels is designed to be done by the homeowner. Replacing the glass inside a panel is a pro job.</li>
</ul>

<h2 id="mistakes">Common DIY Mistakes That Cost More</h2>

<ul>
  <li><strong>Forcing a stuck crank.</strong> The gears strip and now you need a new operator instead of just lubrication or a minor adjustment.</li>
  <li><strong>Using silicone sealant on a failed sealed unit.</strong> Sealing around the outside of a foggy window traps the moisture inside permanently. It won't fix the fog and it makes the eventual glass replacement harder.</li>
  <li><strong>Ordering glass online.</strong> If the measurements are off by even a few millimetres, the unit won't fit. Sealed units are custom-made and non-returnable.</li>
  <li><strong>Removing the wrong glazing stops.</strong> Some windows have stops on the outside that look removable but are part of the frame. Prying them breaks the frame.</li>
</ul>

<h2 id="how-we-work">How We Handle Repairs</h2>

<p>If you're not sure whether something is a DIY job, send us a photo. We'll tell you honestly whether it's something you can fix yourself or whether it needs a visit. If it does need a visit, our $30 assessment fee covers the inspection and you get a written quote on the spot. The fee is credited toward the repair if you go ahead.</p>

<p>We'd rather help you fix something small yourself than charge for a visit you didn't need. That's how we've earned <a href="/about">70+ five-star Google reviews</a>.</p>

<h2 id="faq">Common Questions</h2>

<h3>Can I buy the parts myself and have you install them?</h3>
<p>For hardware, it's usually better to let us source the parts. Window hardware is brand-specific and model-specific. We carry common parts and can identify and order the right one on the first visit. If you bring the wrong part, it means a second visit.</p>

<h3>How do I send a photo for advice?</h3>
<p>Text or WhatsApp a photo to us. Include a shot of the problem and, if you can, one of the full window so we can see the frame type. We reply the same day.</p>

<h3>What if I started a repair and made it worse?</h3>
<p>It happens. Call us and explain what you did. We've fixed plenty of half-finished DIY jobs. No judgement. The sooner you call, the less likely it is that the problem has compounded.</p>

<p>Related reading: <a href="/blog/broken-window-crank-what-to-do" class="text-accent hover:underline font-medium">Broken Window Crank? What to Do</a> covers the most common hardware failure, and our <a href="/blog/spring-window-inspection-checklist" class="text-accent hover:underline font-medium">spring window inspection checklist</a> helps you catch problems early before they need any repair at all.</p>
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
