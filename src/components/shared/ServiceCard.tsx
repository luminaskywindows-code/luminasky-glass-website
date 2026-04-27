import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Cloud, Layers, DoorOpen, Wrench, Shield, Warehouse, Key, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  cloud: Cloud,
  layers: Layers,
  "door-open": DoorOpen,
  wrench: Wrench,
  shield: Shield,
  warehouse: Warehouse,
  key: Key,
  sun: Sun,
};

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  imageSrc?: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  href,
  icon,
  imageSrc,
  className,
}: ServiceCardProps) {
  const IconComponent = icon ? ICON_MAP[icon] : null;

  return (
    <Link href={href} className={cn("group block h-full", className)}>
      <div className="h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-accent/30 transition-all duration-300 overflow-hidden">
        {imageSrc && (
          <div className="relative h-48 overflow-hidden bg-gray-100">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        )}
        <div className="p-6">
          {IconComponent && (
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <IconComponent className="w-6 h-6 text-accent" aria-hidden="true" />
            </div>
          )}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
          <div className="mt-4 flex items-center text-accent font-medium text-sm gap-1 group-hover:gap-2 transition-all duration-200">
            Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>
      </div>
    </Link>
  );
}
