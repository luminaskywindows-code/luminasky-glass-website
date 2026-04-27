"use client";

import { Phone } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PhoneButtonProps {
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  showIcon?: boolean;
}

export function PhoneButton({
  variant = "primary",
  size = "md",
  className,
  showIcon = true,
}: PhoneButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-95";

  const variants = {
    primary:
      "bg-accent hover:bg-accent-dark text-white shadow-md hover:shadow-lg",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-primary",
    ghost: "text-primary hover:bg-primary-50 hover:text-primary-700",
    white: "bg-white text-primary hover:bg-gray-100 shadow-md hover:shadow-lg",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2",
  };

  return (
    <a
      href={PHONE_HREF}
      className={cn(base, variants[variant], sizes[size], className)}
      aria-label={`Call us at ${PHONE}`}
    >
      {showIcon && (
        <Phone
          className={cn(
            "shrink-0",
            size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"
          )}
          aria-hidden="true"
        />
      )}
      <span>{PHONE}</span>
    </a>
  );
}
