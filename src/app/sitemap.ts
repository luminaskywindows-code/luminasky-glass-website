import { MetadataRoute } from "next";
import { SITE_URL, SERVICES } from "@/lib/constants";
import { CITY_PAGES } from "@/lib/city-pages-data";
import { FOGGY_GLASS_CITY_PAGES } from "@/lib/foggy-glass-city-data";
import { FRONT_DOOR_GLASS_CITY_PAGES } from "@/lib/front-door-glass-city-data";
import { PATIO_DOOR_CITY_PAGES } from "@/lib/patio-door-city-data";
import { SKYLIGHT_CITY_PAGES } from "@/lib/skylight-city-data";
import { CRANKS_CITY_PAGES } from "@/lib/cranks-city-data";
import { COMMERCIAL_GLASS_CITY_PAGES } from "@/lib/commercial-glass-city-data";
import { EMERGENCY_GLASS_CITY_PAGES } from "@/lib/emergency-glass-city-data";
import { BLOG_POSTS } from "@/lib/blog-data";

const SERVICE_DATES: Record<string, string> = {
  "/glass-replacement": "2026-11-19",
  "/foggy-windows": "2026-11-19",
  "/front-door-glass": "2026-11-19",
  "/window-replacement": "2026-11-19",
  "/cranks": "2026-11-19",
  "/patio-door-repair": "2026-11-18",
  "/window-screens": "2026-11-19",
  "/screen-storm-doors": "2026-11-19",
  "/skylights": "2026-11-19",
  "/commercial-glass-repair": "2026-11-19",
  "/emergency-glass-repair": "2026-11-17",
};

const CITY_DATA_DATES: Record<string, string> = {
  "window-repair": "2026-11-12",
  "foggy-glass-repair": "2026-11-05",
  "front-door-glass": "2026-11-12",
  "patio-door-repair": "2026-11-12",
  "skylight-repair": "2026-11-12",
  "window-crank-repair": "2026-11-12",
  "commercial-glass-repair": "2026-11-12",
  "emergency-glass-repair": "2026-11-12",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = SERVICES.map((s) => ({
    url: `${SITE_URL}${s.href}`,
    lastModified: new Date(SERVICE_DATES[s.href] || "2026-11-19"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-11-17"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date("2026-11-18"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-11-19"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: new Date("2026-11-19"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date("2026-11-03"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...servicePages,
    {
      url: `${SITE_URL}/areas-we-serve`,
      lastModified: new Date("2026-11-17"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/vaughan`,
      lastModified: new Date("2026-11-17"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/window-repair-${c.slug}`,
      lastModified: new Date(CITY_DATA_DATES["window-repair"]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...FOGGY_GLASS_CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/foggy-glass-repair-${c.slug}`,
      lastModified: new Date(CITY_DATA_DATES["foggy-glass-repair"]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...FRONT_DOOR_GLASS_CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/front-door-glass-${c.slug}`,
      lastModified: new Date(CITY_DATA_DATES["front-door-glass"]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...PATIO_DOOR_CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/patio-door-repair-${c.slug}`,
      lastModified: new Date(CITY_DATA_DATES["patio-door-repair"]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SKYLIGHT_CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/skylight-repair-${c.slug}`,
      lastModified: new Date(CITY_DATA_DATES["skylight-repair"]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...CRANKS_CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/window-crank-repair-${c.slug}`,
      lastModified: new Date(CITY_DATA_DATES["window-crank-repair"]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...COMMERCIAL_GLASS_CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/commercial-glass-repair-${c.slug}`,
      lastModified: new Date(CITY_DATA_DATES["commercial-glass-repair"]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...EMERGENCY_GLASS_CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/emergency-glass-repair-${c.slug}`,
      lastModified: new Date(CITY_DATA_DATES["emergency-glass-repair"]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/cranks/truth-hardware-crank-repair`,
      lastModified: new Date("2026-11-12"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/window-repair-cost`,
      lastModified: new Date("2026-11-03"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/insurance-claims`,
      lastModified: new Date("2026-10-22"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/our-process`,
      lastModified: new Date("2026-11-17"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/warranty`,
      lastModified: new Date("2026-11-17"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/glass-replacement-cost-report-2026`,
      lastModified: new Date("2026-11-03"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date("2026-11-17"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/property-managers`,
      lastModified: new Date("2026-11-17"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date("2026-11-17"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date("2026-11-12"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/winter-ready`,
      lastModified: new Date("2026-11-19"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date("2026-11-17"),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...BLOG_POSTS.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
