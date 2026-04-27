import { cn } from "@/lib/utils";

export const SOCIALS = [
  {
    key: "google",
    label: "See our reviews on Google",
    href: "https://share.google/S08QWQ5FO1niAmpXy",
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
    href: "https://www.instagram.com/lumina_sky_glass/",
    Icon: InstagramIcon,
  },
];

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
}

export function SocialLinks({
  size = 24,
  containerClassName = "flex items-center gap-4",
  linkClassName = "text-gray-400 hover:text-accent transition-colors duration-150 hover:scale-110 transform",
}: SocialLinksProps) {
  return (
    <div className={containerClassName}>
      {SOCIALS.map(({ key, label, href, Icon }) => (
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
