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
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 h-full">
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
    </div>
  );
}
