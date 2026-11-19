"use client";

import { useState } from "react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

export function YouTubeFacade({
  videoId,
  title,
}: YouTubeFacadeProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0"
      />
    );
  }

  return (
    <button
      type="button"
      aria-label={`Play video: ${title}`}
      onClick={() => setLoaded(true)}
      className="absolute inset-0 w-full h-full cursor-pointer group bg-black"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 68 48"
          width="68"
          height="48"
          aria-hidden="true"
          className="drop-shadow-lg group-hover:scale-110 transition-transform"
        >
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            fill="#FF0000"
          />
          <path d="M45 24L27 14v20" fill="#fff" />
        </svg>
      </span>
    </button>
  );
}
