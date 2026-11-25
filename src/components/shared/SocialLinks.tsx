import { cn } from "@/lib/utils";

export const SOCIALS = [
  {
    key: "google",
    label: "See our reviews on Google",
    href: "https://www.google.com/search?sca_esv=50e2bf8f38455036&sxsrf=ANbL-n7wSLiGxC2fDL8T78exI1FufMDcqA:1777236681407&kgmid=/g/11ylg1yw71&q=Lumina+Sky+Glass+Services&shem=dlvs1,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=de8e7fb04e2ff6dd&utm_source=dlvs1,rimspwouoe,sh/x/loc/uni/m1/1#mpd=~7335244370390807247/customers/reviews?p%3DCg51cGRhdGV0aW1lZGVzYxIDYWxs",
    Icon: GoogleIcon,
  },
  {
    key: "facebook",
    label: "Follow us on Facebook",
    href: "https://www.facebook.com/LuminaSkyGlassServices",
    Icon: FacebookIcon,
  },
  {
    key: "instagram",
    label: "See our work on Instagram",
    href: "https://www.instagram.com/luminasky_glass_services/",
    Icon: InstagramIcon,
  },
  {
    key: "tiktok",
    label: "Watch our videos on TikTok",
    href: "https://www.tiktok.com/@luminaskyglassservices",
    Icon: TikTokIcon,
  },
];

/** Shown only where a page asks for it (the footer), so the header row stays short. */
export const YOUTUBE = {
  key: "youtube",
  label: "Watch our videos on YouTube",
  href: "https://www.youtube.com/@luminaskyglass",
  Icon: YouTubeIcon,
};

function YouTubeIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
    </svg>
  );
}

function GoogleIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.35 11.1H12.18V13.83H18.69C18.36 17.64 15.19 19.27 12.19 19.27C8.36 19.27 5 16.25 5 12C5 7.9 8.2 4.73 12.2 4.73C15.29 4.73 17.1 6.7 17.1 6.7L19 4.72C19 4.72 16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12C2.03 17.05 6.16 22 12.25 22C17.6 22 21.5 18.33 21.5 12.91C21.5 11.76 21.35 11.1 21.35 11.1Z" />
    </svg>
  );
}

function FacebookIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

interface SocialLinksProps {
  size?: number;
  containerClassName?: string;
  linkClassName?: string;
  /** Add the YouTube icon at the end of the row. */
  withYoutube?: boolean;
}

export function SocialLinks({
  size = 24,
  containerClassName = "flex items-center gap-4",
  linkClassName = "text-gray-500 hover:text-accent transition-colors duration-150 hover:scale-110 transform",
  withYoutube = false,
}: SocialLinksProps) {
  const items = withYoutube ? [...SOCIALS, YOUTUBE] : SOCIALS;
  return (
    <div className={containerClassName}>
      {items.map(({ key, label, href, Icon }) => (
        <a
          key={key}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={cn("focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded", linkClassName)}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}
