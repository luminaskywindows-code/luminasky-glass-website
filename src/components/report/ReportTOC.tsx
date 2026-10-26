"use client";

import { useEffect, useState } from "react";

interface TOCSection {
  id: string;
  label: string;
}

export function ReportTOC({ sections }: { sections: TOCSection[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <nav
      aria-label="Table of contents"
      className="hidden lg:block fixed left-[max(1rem,calc((100vw-80rem)/2+1rem))] top-32 w-52"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
        In This Report
      </p>
      <ul className="space-y-1">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <button
              onClick={() => scrollTo(id)}
              className={`block w-full text-left text-sm py-1.5 px-3 rounded-md transition-all ${
                activeId === id
                  ? "bg-primary/10 text-primary font-semibold border-l-2 border-primary"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              }`}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
