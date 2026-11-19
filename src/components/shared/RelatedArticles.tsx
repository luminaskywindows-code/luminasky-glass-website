import Link from "next/link";
import { getBlogPost } from "@/lib/blog-data";

interface RelatedArticlesProps {
  slugs: string[];
}

export function RelatedArticles({ slugs }: RelatedArticlesProps) {
  const posts = slugs
    .map((slug) => getBlogPost(slug))
    .filter(Boolean)
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="articles-heading">
      <div className="max-w-5xl mx-auto">
        <h2
          id="articles-heading"
          className="text-2xl font-bold text-gray-900 mb-8 text-center"
        >
          Related Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post!.slug}
              href={`/blog/${post!.slug}`}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <span className="text-xs font-medium text-accent uppercase tracking-wide">
                {post!.tags[0]}
              </span>
              <h3 className="text-base font-semibold text-gray-900 mt-2 group-hover:text-accent transition-colors line-clamp-2">
                {post!.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                {post!.excerpt}
              </p>
              <span className="inline-block mt-3 text-sm font-medium text-accent">
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
