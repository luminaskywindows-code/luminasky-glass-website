import { Star } from "lucide-react";
import { GOOGLE_REVIEW_URL } from "@/lib/constants";

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const REVIEWS: Review[] = [
  {
    name: "Rick David",
    location: "Local Guide · Google Review",
    rating: 5,
    text: "They came the next day and replaced the crank in short order. Their technicians were very polite, professional and FAST. All three repairs done for less money than any one of the windows would cost me to replace.",
  },
  {
    name: "Alvin Bruney",
    location: "Google Review",
    rating: 5,
    text: "They showed up on time, explained the problem and recommended a solution along with a repair cost. They did not try to upsell me on other services. The repair was done on time. Just good service at a reasonable price.",
  },
  {
    name: "Swapnil Deoras",
    location: "Local Guide · Google Review",
    rating: 5,
    text: "Got the quote by sharing pictures and video of the crank which was not working. The team came same day and fixed window cranks. Awesome people. Would definitely recommend their services.",
  },
  {
    name: "William Potalivo",
    location: "Stouffville, ON · Google Review",
    rating: 5,
    text: "Their communication was effective and efficient, their level of expertise was very high, and their workmanship flawless. I will be hiring Lumina Sky Glass again in the near future.",
  },
];

const SERVICE_REVIEW_MAP: Record<string, number[]> = {
  "foggy-windows": [1, 3],
  "front-door-glass": [1, 3],
  cranks: [0, 2],
  skylights: [1, 3],
  "emergency-glass-repair": [1, 3],
  "glass-replacement": [1, 3],
  "window-screens": [0, 3],
  "screen-storm-doors": [0, 3],
  "window-replacement": [0, 3],
  "commercial-glass-repair": [1, 3],
  "patio-door-repair": [1, 3],
};

export function ServiceTestimonials({ service }: { service: string }) {
  const indices = SERVICE_REVIEW_MAP[service] ?? [1, 3];
  const picks = indices.map((i) => REVIEWS[i]);

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="reviews-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Real Reviews
          </span>
          <h2 id="reviews-heading" className="text-3xl font-bold text-gray-900">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {picks.map((review) => (
            <a
              key={review.name}
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-lg hover:border-accent/30 transition-all duration-200"
            >
              <div className="flex gap-1" aria-label={`Rating: ${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-400">{review.location}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="text-center mt-6 text-sm text-gray-500">
          <a
            href="https://www.google.com/search?q=LuminaSky+Glass+Services+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Read all 70+ reviews on Google
          </a>
        </p>
      </div>
    </section>
  );
}
