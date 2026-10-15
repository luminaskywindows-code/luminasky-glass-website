"use client";

interface InlineVideoPlayerProps {
  videoId: string;
  title?: string;
  className?: string;
  isShort?: boolean;
}

export default function InlineVideoPlayer({
  videoId,
  title = "Watch demo",
  className = "",
  isShort = false,
}: InlineVideoPlayerProps) {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "1",
    modestbranding: "1",
    playsinline: "1",
    rel: "0",
    iv_load_policy: "3",
  });

  const src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
  const aspectClass = isShort ? "aspect-[9/16]" : "aspect-video";

  return (
    <div
      className={`relative ${aspectClass} rounded-xl overflow-hidden shadow-2xl bg-black ${className}`}
    >
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
