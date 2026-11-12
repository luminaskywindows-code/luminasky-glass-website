"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      dragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden select-none touch-none cursor-col-resize"
      style={{ aspectRatio: "3 / 4" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* After image (full, underneath) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        draggable={false}
      />
      <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow z-20">
        After
      </span>

      {/* Before image (clipped from left using clip-path) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          draggable={false}
        />
        <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow z-20">
          Before
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 z-30 pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-0.5 h-full bg-white shadow-lg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M7 4L3 10L7 16" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13 4L17 10L13 16" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
