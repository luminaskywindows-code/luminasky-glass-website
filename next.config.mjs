/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
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
      { source: "/services/skylights",        destination: "/skylights",        permanent: true },
    ];
  },
};

export default nextConfig;
