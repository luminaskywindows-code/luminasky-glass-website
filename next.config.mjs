/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          // Stop MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Force HTTPS for 1 year
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          // Block referrer info from leaving site
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Disable browser features not needed on this site
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          // Basic XSS protection for older browsers
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.clarity.ms https://www.googletagmanager.com https://www.google-analytics.com https://cdn.emailjs.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://*.clarity.ms https://www.google-analytics.com https://region1.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://stats.g.doubleclick.net https://googleads.g.doubleclick.net https://ad.doubleclick.net https://www.google.com https://www.google.ca https://www.googleadservices.com https://pagead2.googlesyndication.com https://api.emailjs.com https://api.indexnow.org",
              "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://td.doubleclick.net https://www.googletagmanager.com https://www.openstreetmap.org",
              "media-src 'self' blob:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // /home → homepage
      { source: "/home", destination: "/", permanent: true },
      // Old /services/[slug] → new short URLs (keeps SEO juice)
      { source: "/services/foggy-windows",    destination: "/foggy-windows",    permanent: true },
      { source: "/services/front-door-glass", destination: "/front-door-glass", permanent: true },
      { source: "/services/window-cranks",    destination: "/cranks",           permanent: true },
      { source: "/services/screen-storm-doors", destination: "/screen-storm-doors", permanent: true },
      { source: "/services/skylights",          destination: "/skylights",          permanent: true },
      { source: "/services/window-screens",    destination: "/window-screens",    permanent: true },
      { source: "/services/window-replacement", destination: "/window-replacement", permanent: true },
      // Discontinued services → /services
      { source: "/services/locksmith",          destination: "/services", permanent: true },
      { source: "/services/garage-door-glass",  destination: "/services", permanent: true },
      { source: "/services/integrated-blinds",  destination: "/services", permanent: true },
      // Removed service pages → /services
      { source: "/casement-hinge-repair",       destination: "/services", permanent: true },
      { source: "/window-lock-repair",          destination: "/services", permanent: true },
      { source: "/sliding-door-repair",         destination: "/services", permanent: true },
      { source: "/condo-window-repair",         destination: "/services", permanent: true },
      { source: "/discontinued-hardware-repair", destination: "/services", permanent: true },
    ];
  },
};

export default nextConfig;
