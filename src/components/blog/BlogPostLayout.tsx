"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Calendar, Clock, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import type { BlogPost } from "@/lib/blog-data";
import { cn } from "@/lib/utils";

function TableOfContents({
  sections,
  activeId,
}: {
  sections: BlogPost["sections"];
  activeId: string;
}) {
  return (
    <nav aria-label="Table of contents">
      <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
        In This Article
      </h2>
      <ul className="space-y-1">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                "block text-sm py-1.5 pl-3 border-l-2 transition-colors",
                activeId === section.id
                  ? "border-accent text-accent font-medium"
                  : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300"
              )}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function MobileTOC({
  sections,
  activeId,
}: {
  sections: BlogPost["sections"];
  activeId: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden mb-8 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 text-sm font-semibold text-gray-900"
        aria-expanded={open}
      >
        Table of Contents
        {open ? (
          <ChevronUp className="w-4 h-4" aria-hidden="true" />
        ) : (
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        )}
      </button>
      {open && (
        <div className="px-4 py-3">
          <TableOfContents sections={sections} activeId={activeId} />
        </div>
      )}
    </div>
  );
}

export function BlogPostLayout({ post }: { post: BlogPost }) {
  const [activeId, setActiveId] = useState("");
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headings = post.sections.map((s) => document.getElementById(s.id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach((h) => h && observer.observe(h));
    return () => observer.disconnect();
  }, [post.sections]);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <article className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <time dateTime={post.publishedAt}>{formattedDate}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" aria-hidden="true" />
              {post.readingTime} min read
            </span>
          </div>
        </header>

        {/* Mobile TOC */}
        <MobileTOC sections={post.sections} activeId={activeId} />

        {/* Content + Sidebar */}
        <div className="lg:grid lg:grid-cols-[1fr_240px] lg:gap-12">
          {/* Article body */}
          <div
            ref={articleRef}
            className="prose prose-lg prose-gray max-w-none
              prose-headings:scroll-mt-24 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-p:leading-relaxed prose-p:text-gray-700
              prose-a:text-accent prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-li:text-gray-700
              prose-table:text-sm prose-th:bg-gray-50 prose-th:text-left prose-th:px-4 prose-th:py-3
              prose-td:px-4 prose-td:py-3 prose-td:border-t prose-td:border-gray-100
              prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Desktop sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <TableOfContents sections={post.sections} activeId={activeId} />
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-3 rounded-md transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Back to blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to all articles
          </Link>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
