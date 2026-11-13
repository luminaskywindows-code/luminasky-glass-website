import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export function TestimonialCard({
  name,
  location,
  rating,
  text,
}: TestimonialCardProps) {
  return (
    <a
      href="https://www.google.com/search?sca_esv=50e2bf8f38455036&sxsrf=ANbL-n7wSLiGxC2fDL8T78exI1FufMDcqA:1777236681407&kgmid=/g/11ylg1yw71&q=Lumina+Sky+Glass+Services&shem=dlvs1,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=de8e7fb04e2ff6dd&utm_source=dlvs1,rimspwouoe,sh/x/loc/uni/m1/1#mpd=~7335244370390807247/customers/reviews?p%3DCg51cGRhdGV0aW1lZGVzYxIDYWxs"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 h-full hover:shadow-lg hover:border-accent/30 transition-all duration-200"
    >
      <div className="flex gap-1" aria-label={`Rating: ${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="text-gray-600 italic leading-relaxed flex-1">&ldquo;{text}&rdquo;</p>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-400">{location}</p>
      </div>
    </a>
  );
}
