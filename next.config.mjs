/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
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
