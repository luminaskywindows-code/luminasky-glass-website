"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { PROJECTS, PROJECT_CATEGORIES, type ProjectCategory, type Project } from "@/lib/projects-data";

function ProjectCard({ project }: { project: Project }) {
  const hasPair = project.beforeImage && project.afterImage;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Images */}
      {hasPair ? (
        <div className="grid grid-cols-2">
          {/* Before */}
          <div className="relative aspect-[4/3] bg-gray-200">
            <Image
              src={project.beforeImage!.src}
              alt={project.beforeImage!.alt}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 20vw"
            />
            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow">
              Before
            </span>
          </div>
          {/* After */}
          <div className="relative aspect-[4/3] bg-gray-200">
            <Image
              src={project.afterImage!.src}
              alt={project.afterImage!.alt}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 20vw"
            />
            <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow">
              After
            </span>
          </div>
        </div>
      ) : project.showcaseImage ? (
        <div className="relative aspect-[16/7] bg-gray-200">
          <Image
            src={project.showcaseImage.src}
            alt={project.showcaseImage.alt}
            fill
            unoptimized
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
          />
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow">
            Before → After
          </span>
        </div>
      ) : null}

      {/* Details */}
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

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400 py-24 text-lg">
            No projects in this category yet - check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
