import { MetadataRoute } from "next";
import { SITE_URL, SERVICES } from "@/lib/constants";
import { CITY_PAGES } from "@/lib/city-pages-data";
import { FOGGY_GLASS_CITY_PAGES } from "@/lib/foggy-glass-city-data";
import { FRONT_DOOR_GLASS_CITY_PAGES } from "@/lib/front-door-glass-city-data";
import { PATIO_DOOR_CITY_PAGES } from "@/lib/patio-door-city-data";
import { SKYLIGHT_CITY_PAGES } from "@/lib/skylight-city-data";
import { CRANKS_CITY_PAGES } from "@/lib/cranks-city-data";
import { COMMERCIAL_GLASS_CITY_PAGES } from "@/lib/commercial-glass-city-data";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = SERVICES.map((s) => ({
    url: `${SITE_URL}${s.href}`,
    lastModified: new Date("2026-11-03"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-11-03"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date("2026-11-05"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-08-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/gallery`,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date("2026-10-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...servicePages,
    {
      url: `${SITE_URL}/areas-we-serve`,
      lastModified: new Date("2026-11-03"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/window-repair-${c.slug}`,
      lastModified: new Date("2026-11-05"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...FOGGY_GLASS_CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/foggy-glass-repair-${c.slug}`,
      lastModified: new Date("2026-11-05"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...FRONT_DOOR_GLASS_CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/front-door-glass-${c.slug}`,
      lastModified: new Date("2026-10-10"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...PATIO_DOOR_CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/patio-door-repair-${c.slug}`,
      lastModified: new Date("2026-10-10"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SKYLIGHT_CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/skylight-repair-${c.slug}`,
      lastModified: new Date("2026-10-15"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...CRANKS_CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/window-crank-repair-${c.slug}`,
      lastModified: new Date("2026-10-10"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...COMMERCIAL_GLASS_CITY_PAGES.map((c) => ({
      url: `${SITE_URL}/commercial-glass-repair-${c.slug}`,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/cranks/truth-hardware-crank-repair`,
      lastModified: new Date("2026-10-15"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/window-repair-cost`,
      lastModified: new Date("2026-10-22"),
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
      lastModified: new Date("2026-09-01"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/warranty`,
      lastModified: new Date("2026-09-01"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/glass-replacement-cost-report-2026`,
      lastModified: new Date("2026-10-26"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date("2026-11-03"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/property-managers`,
      lastModified: new Date("2026-09-20"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/winter-ready`,
      lastModified: new Date("2026-10-28"),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date("2026-10-30"),
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
