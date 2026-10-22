export type ProjectCategory = "all" | "doors" | "windows" | "hardware" | "skylights";

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  /** Two-photo before/after layout */
  beforeImage?: { src: string; alt: string };
  afterImage?: { src: string; alt: string };
  /** Single showcase image (e.g. multi-panel strip) */
  showcaseImage?: { src: string; alt: string };
  /** Media type for before/after, defaults to "image" */
  mediaType?: "image" | "video" | "single-video" | "single-image" | "youtube-short" | "multi-image";
  /** Single video with click-to-play (used with mediaType "single-video") */
  video?: { src: string; poster: string; alt: string };
  /** Single hero image (used with mediaType "single-image") */
  image?: { src: string; alt: string };
  /** YouTube video ID (used with mediaType "youtube-short") */
  youtubeId?: string;
  /** Multiple images stacked vertically (used with mediaType "multi-image") */
  images?: { src: string; alt: string }[];
  description: string;
  location?: string;
  serviceType: string;
  emergency?: boolean;
  tags?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "skylight-replacement-brampton",
    title: "Skylight Dome Replacement",
    category: "skylights",
    mediaType: "multi-image",
    images: [
      {
        src: "/images/services/skylight-brampton.jpg",
        alt: "Skylight dome replacement at a Brampton home: deteriorated old dome removed and new clear acrylic dome installed with fresh sealing",
      },
    ],
    description:
      "Replaced an aged acrylic skylight dome at a Brampton home. The old skylight had deteriorated over years of sun and weather exposure. We removed the damaged unit, prepped the frame and curb, and installed a new clear dome with fresh sealing. Natural light fully restored.",
    location: "Brampton",
    serviceType: "Skylight Replacement",
    tags: [],
  },
  {
    id: "dual-skylight-replacement-north-york",
    title: "Dual Skylight Dome Replacement",
    category: "skylights",
    mediaType: "multi-image",
    images: [
      {
        src: "/images/services/skylight-north-york-1.jpg",
        alt: "First skylight dome replacement at a North York property: cracked dome with blue tape, close-up of damage, and brand new clear dome installed",
      },
      {
        src: "/images/services/skylight-north-york-2.jpg",
        alt: "Second skylight dome replacement at the same North York property: shattered dome removed, interior view of clear sky through new dome, and finished install on the roof",
      },
    ],
    description:
      "Replaced two damaged acrylic skylight domes at a North York property in a single visit. Both original domes had cracked and were letting in water and losing insulation. We removed both damaged units, prepped the frames and curbs, and installed brand new clear domes with fresh sealing. Natural light fully restored to both rooms below.",
    location: "North York",
    serviceType: "Skylight Replacement",
    tags: [],
  },
  {
    id: "front-door-glass-replacement-video",
    title: "Front Door Glass Replacement Walkthrough",
    category: "doors",
    mediaType: "youtube-short",
    youtubeId: "zjcjoSpsz3A",
    description:
      "Watch a complete front door glass insert replacement from start to finish. Removal of the old glass, prep, install of the new sealed unit, and final cleanup, in one visit.",
    location: "Toronto",
    serviceType: "Front Doors",
    tags: ["Video"],
  },
  {
    id: "full-window-replacement-video",
    title: "Full Window Replacement Walkthrough",
    category: "windows",
    mediaType: "youtube-short",
    youtubeId: "3d920rntHYw",
    description:
      "A full window replacement from removal of the old window to install of the new one. Clean install, no mess, same-day completion.",
    location: "Toronto",
    serviceType: "Windows",
    tags: ["Video"],
  },
  {
    id: "skylight-replacement-richmond-hill",
    title: "Skylight Dome Replacement",
    category: "skylights",
    beforeImage: {
      src: "/images/services/skylight-richmond-hill-before.jpg",
      alt: "Old foggy acrylic skylight dome on a Richmond Hill roof before replacement",
    },
    afterImage: {
      src: "/images/services/skylight-richmond-hill-after.jpg",
      alt: "New clear acrylic skylight dome installed on a Richmond Hill roof",
    },
    description:
      "An older acrylic skylight dome in Richmond Hill had become cloudy, scratched and foggy after years of UV exposure. We removed the discoloured dome and installed a new clear dome with fresh sealing, restoring full natural light to the room below. The frame and curb stayed in place, saving the homeowner the cost of a full skylight replacement.",
    location: "Richmond Hill",
    serviceType: "Skylight Replacement",
    tags: [],
  },
  {
    id: "foggy-glass-1",
    title: "Foggy Glass Repair",
    category: "windows",
    mediaType: "video",
    beforeImage: {
      src: "/videos/foggy-glass-before.mp4",
      alt: "Foggy double-pane window with condensation trapped between the glass",
    },
    afterImage: {
      src: "/videos/foggy-glass-after.mp4",
      alt: "Restored clear glass after sealed unit replacement by LuminaSky Glass Services",
    },
    description:
      "Sealed glass unit replacement - cleared trapped condensation and restored a crystal-clear view without replacing the frame.",
    location: "Toronto",
    serviceType: "Windows",
    tags: ["Foggy Glass"],
  },
  {
    id: "front-door-scarborough",
    title: "Front Door Replacement in Scarborough",
    category: "doors",
    beforeImage: {
      src: "/images/services/front-door-scarborough-before.jpg",
      alt: "Dated cream double front doors with small decorative glass panels before replacement in Scarborough",
    },
    afterImage: {
      src: "/images/services/front-door-scarborough-after.jpg",
      alt: "New modern white front door with large decorative leaded glass insert after LuminaSky replacement in Scarborough",
    },
    description:
      "Full front door replacement in Scarborough. Swapped outdated double doors for a modern single door with a custom decorative leaded glass insert. Refreshed the entire entrance and boosted curb appeal without touching the frame.",
    location: "Scarborough",
    serviceType: "Front Doors",
    tags: ["Glass Replacement"],
  },
  {
    id: "frosted-glass-orangeville",
    title: "Frosted Glass Replacement in Orangeville",
    category: "windows",
    beforeImage: {
      src: "/images/services/frosted-glass-orangeville-before.jpg",
      alt: "Damaged frosted glass sliding window with visible mark on bottom pane before replacement in Orangeville",
    },
    afterImage: {
      src: "/images/services/frosted-glass-orangeville-after.jpg",
      alt: "New clean frosted glass sliding window after LuminaSky replacement in Orangeville",
    },
    description:
      "Damaged frosted glass sliding window in Orangeville. Replaced only the failed glass pane while keeping the existing frame and hardware. A fraction of the cost of full window replacement.",
    location: "Orangeville",
    serviceType: "Glass Replacement",
    tags: [],
  },
  {
    id: "sunroom-caledon",
    title: "Full Sunroom Glass Replacement - Caledon",
    category: "windows",
    mediaType: "single-image",
    image: {
      src: "/images/services/sunroom-caledon.jpg",
      alt: "Caledon sunroom after full glass replacement, crystal-clear view of the garden and pool through four newly installed sealed glass units",
    },
    description:
      "The customer reached out with foggy glass in all four windows of their sunroom. Heavy condensation had built up between the panes, obscuring the beautiful view of the garden and pool. Our team replaced all four sealed units, restoring crystal-clear visibility without touching the original wood framing. The customer was delighted with the transformation.",
    location: "Caledon",
    serviceType: "Glass Replacement",
    tags: ["Foggy Glass"],
  },
  {
    id: "glass-replacement-ajax",
    title: "Glass Replacement - Ajax",
    category: "windows",
    mediaType: "single-video",
    video: {
      src: "/videos/glass-replacement-ajax.mp4",
      poster: "/images/glass-replacement-ajax-poster.jpg",
      alt: "Glass replacement project in Ajax, walkthrough of completed installation",
    },
    description:
      "Full glass panel replacement, Ajax residence. Fresh install with a clean, precise finish.",
    location: "Ajax",
    serviceType: "Glass Replacement",
    tags: [],
  },
  {
    id: "front-door-glass-1",
    title: "Custom Front Door Glass Replacement",
    category: "doors",
    beforeImage: {
      src: "/images/services/front-door-glass-before.jpg",
      alt: "Double front entry doors with traditional leaded glass inserts before replacement",
    },
    afterImage: {
      src: "/images/services/front-door-glass-after.jpg",
      alt: "Same front doors after upgrade to modern geometric iron glass inserts with frosted privacy glass",
    },
    description:
      "Front door glass insert replacement: swapped dated leaded glass for a modern wrought iron geometric design with frosted privacy glass. Refreshed the entire entrance without replacing the doors.",
    location: "Toronto",
    serviceType: "Doors",
    tags: ["Door Glass", "Glass Replacement"],
  },
  {
    id: "emergency-door-1",
    title: "Emergency Commercial Door Repair",
    category: "doors",
    // Note: file names were swapped at copy-time; src values below reflect actual contents
    beforeImage: {
      src: "/images/services/door-after-repaired.jpg",
      alt: "Shattered commercial door glass after break-in - nighttime emergency",
    },
    afterImage: {
      src: "/images/services/door-before-broken.jpg",
      alt: "Fully restored commercial door with new tempered glass installed by LuminaSky Glass Services",
    },
    description:
      "Emergency commercial door glass replacement after break-in. Fast board-up, completed next day.",
    location: "Toronto",
    serviceType: "Front Doors",
    emergency: true,
    tags: ["Emergency Service"],
  },
  {
    id: "window-crank-1",
    title: "Casement Window Crank Repair",
    category: "hardware",
    beforeImage: {
      src: "/images/services/crank-before.jpg",
      alt: "Old worn-out window crank mechanism - rusted and broken",
    },
    afterImage: {
      src: "/images/services/crank-after.jpg",
      alt: "New AmesburyTruth window crank handle installed - smooth operation restored",
    },
    description:
      "Replaced worn-out crank mechanism with authentic AmesburyTruth hardware. Smooth, effortless operation restored same-day.",
    location: "North York",
    serviceType: "Hardware",
    tags: ["Same-Day Service"],
  },
  {
    id: "window-cleaning-1",
    title: "Residential High-Rise Glass Cleaning",
    category: "windows",
    beforeImage: {
      src: "/images/services/window-cleaning-before.jpg",
      alt: "Dirty high-rise window with heavy streaks and grime obscuring the view",
    },
    afterImage: {
      src: "/images/services/window-cleaning-after.jpg",
      alt: "Spotless high-rise window with a crystal-clear view of the city skyline",
    },
    description:
      "Interior glass restoration: removing built-up streaks and grime for a crystal-clear view of the city.",
    location: "Toronto",
    serviceType: "Windows",
    tags: ["Interior Cleaning"],
  },
  {
    id: "skylight-1",
    title: "Skylight Glass Restoration",
    category: "skylights",
    showcaseImage: {
      src: "/images/skylight-before-after.png",
      alt: "Skylight restoration - before, during, and after glass replacement by LuminaSky Glass Services",
    },
    description:
      "Complete skylight glass restoration - from dirty and damaged to crystal clear. Full panel replacement without a complete tearout.",
    location: "Vaughan",
    serviceType: "Skylights",
  },
];

export const PROJECT_CATEGORIES: { value: ProjectCategory; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "doors", label: "Front Doors" },
  { value: "windows", label: "Windows" },
  { value: "hardware", label: "Hardware" },
  { value: "skylights", label: "Skylights" },
];
