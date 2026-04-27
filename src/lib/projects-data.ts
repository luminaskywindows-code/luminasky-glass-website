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
  description: string;
  location?: string;
  serviceType: string;
  emergency?: boolean;
  tags?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "emergency-door-1",
    title: "Emergency Commercial Door Repair",
    category: "doors",
    // Note: file names were swapped at copy-time; src values below reflect actual contents
    beforeImage: {
      src: "/images/services/door-after-repaired.jpg",
      alt: "Shattered commercial door glass after break-in — nighttime emergency",
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
      alt: "Old worn-out window crank mechanism — rusted and broken",
    },
    afterImage: {
      src: "/images/services/crank-after.jpg",
      alt: "New AmesburyTruth window crank handle installed — smooth operation restored",
    },
    description:
      "Replaced worn-out crank mechanism with authentic AmesburyTruth hardware. Smooth, effortless operation restored same-day.",
    location: "North York",
    serviceType: "Hardware",
    tags: ["Same-Day Service"],
  },
  {
    id: "skylight-1",
    title: "Skylight Glass Restoration",
    category: "skylights",
    showcaseImage: {
      src: "/images/skylight-before-after.png",
      alt: "Skylight restoration — before, during, and after glass replacement by LuminaSky Glass",
    },
    description:
      "Complete skylight glass restoration — from dirty and damaged to crystal clear. Full panel replacement without a complete tearout.",
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
