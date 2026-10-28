"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { MapPin, Zap, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory, type Project } from "@/lib/projects-data";
import InlineVideoPlayer from "@/components/video/InlineVideoPlayer";

/* ── IntersectionObserver hook: play videos when card is >=50% visible ── */
function useVisibilityPlayback(cardRef: React.RefObject<HTMLDivElement | null>, isVideo: boolean) {
  const beforeRef = useRef<HTMLVideoElement>(null);
  const afterRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isVideo || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          beforeRef.current?.play().catch(() => {});
          afterRef.current?.play().catch(() => {});
        } else {
          beforeRef.current?.pause();
          afterRef.current?.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isVideo, cardRef]);

  return { beforeRef, afterRef };
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="p-5">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="bg-blue-50 text-primary text-xs font-semibold px-3 py-1 rounded-full">
          {project.serviceType}
        </span>
        {project.emergency && (
          <span className="flex items-center gap-1 bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full">
            <Zap className="w-3 h-3" aria-hidden="true" />
            Emergency
          </span>
        )}
        {project.tags?.filter(t => t !== "Emergency Service").map(tag => (
          <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <h2 className="font-bold text-gray-900 text-base mb-2">{project.title}</h2>
      <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
      {project.location && (
        <div className="mt-3 flex items-center gap-1 text-gray-400 text-xs">
          <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
          {project.location}, GTA
        </div>
      )}
    </div>
  );
}

function SingleImageCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Image
        src={project.image!.src}
        alt={project.image!.alt}
        width={800}
        height={600}
        className="w-full h-auto"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <ProjectDetails project={project} />
    </div>
  );
}

function SingleVideoCard({ project }: { project: Project }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = useCallback(() => {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play().catch(() => {}), 0);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div
        className="relative bg-gray-900 overflow-hidden cursor-pointer"
        onClick={!playing ? handlePlay : undefined}
        role={!playing ? "button" : undefined}
        tabIndex={!playing ? 0 : undefined}
        aria-label={!playing ? `Play video: ${project.video!.alt}` : undefined}
        onKeyDown={!playing ? (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handlePlay(); } } : undefined}
      >
        <video
          ref={videoRef}
          src={playing ? project.video!.src : undefined}
          poster={project.video!.poster}
          muted
          playsInline
          controls={playing}
          preload="none"
          className="w-full h-auto max-h-[500px] object-contain mx-auto"
          aria-label={project.video!.alt}
        />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm border border-white/20 transition-transform hover:scale-110">
              <Play className="w-7 h-7 text-white ml-1" fill="white" aria-hidden="true" />
            </div>
          </div>
        )}
      </div>
      <ProjectDetails project={project} />
    </div>
  );
}

function MultiImageCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col">
        {project.images!.map((img, i) => (
          <div key={i} className="relative bg-gray-200 overflow-hidden">
            {i > 0 && <div className="h-1 bg-white" />}
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={600}
              className="w-full h-auto block max-h-[400px] object-contain bg-gray-100"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>
      <ProjectDetails project={project} />
    </div>
  );
}

function YouTubeShortCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center bg-black">
        <div className="w-full max-w-sm">
          <InlineVideoPlayer
            videoId={project.youtubeId!}
            isShort={true}
            title={project.title}
          />
        </div>
      </div>
      <ProjectDetails project={project} />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const hasPair = project.beforeImage && project.afterImage;
  const isVideo = project.mediaType === "video";
  const cardRef = useRef<HTMLDivElement>(null);
  const { beforeRef, afterRef } = useVisibilityPlayback(cardRef, isVideo);

  if (project.mediaType === "multi-image") return <MultiImageCard project={project} />;
  if (project.mediaType === "youtube-short") return <YouTubeShortCard project={project} />;
  if (project.mediaType === "single-image") return <SingleImageCard project={project} />;
  if (project.mediaType === "single-video") return <SingleVideoCard project={project} />;

  return (
    <div ref={cardRef} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Media */}
      {hasPair ? (
        <div className="flex flex-col">
          {/* Before */}
          <div className="relative bg-gray-200 overflow-hidden">
            {isVideo ? (
              <video
                ref={beforeRef}
                src={project.beforeImage!.src}
                muted
                loop
                playsInline
                controls
                preload="metadata"
                className="w-full h-auto block"
              />
            ) : (
              <Image
                src={project.beforeImage!.src}
                alt={project.beforeImage!.alt}
                width={800}
                height={600}
                className="w-full h-auto block"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow z-10">
              Before
            </span>
          </div>
          <div className="h-1 bg-white" />
          {/* After */}
          <div className="relative bg-gray-200 overflow-hidden">
            {isVideo ? (
              <video
                ref={afterRef}
                src={project.afterImage!.src}
                muted
                loop
                playsInline
                controls
                preload="metadata"
                className="w-full h-auto block"
              />
            ) : (
              <Image
                src={project.afterImage!.src}
                alt={project.afterImage!.alt}
                width={800}
                height={600}
                className="w-full h-auto block"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
            <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow z-10">
              After
            </span>
          </div>
        </div>
      ) : project.showcaseImage ? (
        <div className="relative bg-gray-200">
          <Image
            src={project.showcaseImage.src}
            alt={project.showcaseImage.alt}
            width={800}
            height={600}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow">
            Before → After
          </span>
        </div>
      ) : null}

      <ProjectDetails project={project} />
    </div>
  );
}

export function ProjectsGallery() {
  const [active, setActive] = useState<ProjectCategory>("all");

  const filtered =
    active === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      {/* Filter bar */}
      <div className="bg-white border-b border-gray-100 sticky top-[5rem] md:top-[7rem] z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActive(cat.value)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  active === cat.value
                    ? "bg-accent text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
                aria-pressed={active === cat.value}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry gallery */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-24 text-lg">
            No projects in this category yet - check back soon!
          </p>
        ) : (
          <div className="columns-1 md:columns-2 gap-8">
            {filtered.map((project) => (
              <div key={project.id} className="break-inside-avoid mb-6">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
