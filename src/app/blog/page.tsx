import { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/constants";
import { CTABanner } from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Window repair tips, homeowner guides, and expert advice from LuminaSky Glass Services. Learn when to repair, when to replace, and how to maintain your windows.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Window &amp; Glass Guides
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Practical advice for Toronto homeowners. No jargon, no pressure,
            just the information you need to make smart decisions about your
            windows and doors.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => {
            const formattedDate = new Date(post.publishedAt).toLocaleDateString(
              "en-CA",
              { year: "numeric", month: "long", day: "numeric" }
            );

            return (
              <article
                key={post.slug}
                className="group border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                      <time dateTime={post.publishedAt}>{formattedDate}</time>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                      {post.readingTime} min read
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                  >
                    Read more
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {BLOG_POSTS.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            Articles coming soon. Check back shortly.
          </p>
        )}
      </section>

      <CTABanner />
    </>
  );
}
