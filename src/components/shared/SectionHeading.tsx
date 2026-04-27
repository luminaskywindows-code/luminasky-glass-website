import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-sm font-semibold uppercase tracking-widest mb-3",
            light ? "text-accent-light" : "text-accent"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          "text-3xl md:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-gray-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl leading-relaxed",
            align === "center" ? "mx-auto" : "",
            light ? "text-blue-100" : "text-gray-500"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
