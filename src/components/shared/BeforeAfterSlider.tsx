"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  caption?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  caption,
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div
        className="relative w-full overflow-hidden rounded-xl bg-gray-200 select-none"
        style={{ aspectRatio: "4/3" }}
      >
        {/* After image (full width base layer) */}
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
        />

        {/* Before image clipped to left side */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
          aria-hidden="true"
        >
          <div className="relative w-full h-full" style={{ minWidth: "100vw" }}>
            <Image
              src={beforeSrc}
              alt={beforeAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              draggable={false}
            />
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          aria-hidden="true"
        >
          {/* Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize">
            <ChevronLeft className="w-3 h-3 text-primary" />
            <ChevronRight className="w-3 h-3 text-primary" />
          </div>
        </div>

        {/* Labels */}
        <span
          className="absolute top-3 left-3 bg-black/60 text-white text-xs font-semibold px-2.5 py-1 rounded-md pointer-events-none"
          aria-hidden="true"
        >
          BEFORE
        </span>
        <span
          className="absolute top-3 right-3 bg-accent text-white text-xs font-semibold px-2.5 py-1 rounded-md pointer-events-none"
          aria-hidden="true"
        >
          AFTER
        </span>

        {/* Invisible native range input - handles drag, touch, and keyboard */}
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
          aria-label="Before and after comparison slider"
          aria-valuetext={`Showing ${sliderPosition}% before image`}
        />
      </div>

      {caption && (
        <p className="text-sm text-gray-500 text-center">{caption}</p>
      )}
    </div>
  );
}
