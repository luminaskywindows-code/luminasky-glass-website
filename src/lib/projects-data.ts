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
  /** Media type for before/after — defaults to "image" */
  mediaType?: "image" | "video";
  description: string;
  location?: string;
  serviceType: string;
  emergency?: boolean;
  tags?: string[];
}

export const PROJECTS: Project[] = [
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
      alt: "Restored clear glass after sealed unit replacement by LuminaSky Glass",
    },
    description:
      "Sealed glass unit replacement - cleared trapped condensation and restored a crystal-clear view without replacing the frame.",
    location: "Toronto",
    serviceType: "Windows",
    tags: ["Foggy Glass"],
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
      alt: "Fully restored commercial door with new tempered glass installed by LuminaSky Glass",
    },
    description:
      "Emergency commercial door glass replacement after break-in. Responded within 2 hours, completed next day.",
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
      "Interior glass restoration — removing built-up streaks and grime for a crystal-clear view of the city.",
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
      alt: "Skylight restoration - before, during, and after glass replacement by LuminaSky Glass",
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
