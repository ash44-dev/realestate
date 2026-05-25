import Image from "next/image";
import { Bed, Bath, SquareCode } from "lucide-react";
import { type Listing, formatPrice } from "@/lib/listings";
import clsx from "clsx";

interface PropertyCardProps {
  listing: Listing;
}

export default function PropertyCard({ listing }: PropertyCardProps) {
  const { title, location, price, beds, baths, sqft, imageUrl, tag } = listing;

  return (
    <article className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-56 sm:h-60 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {tag && (
          <span className="absolute top-4 left-4 bg-accent text-white font-sans text-xs font-semibold tracking-wide px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Price */}
        <p className="font-serif text-2xl font-bold text-foreground leading-none">
          {formatPrice(price)}
        </p>

        {/* Title & location */}
        <div>
          <h3 className="font-serif text-lg font-semibold text-foreground leading-snug">
            {title}
          </h3>
          <p className="font-sans text-sm text-muted mt-0.5">{location}</p>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-auto pt-3">
          {/* Stats */}
          <ul className="flex items-center gap-4">
            <StatItem icon={<Bed size={15} />} label={`${beds} Beds`} />
            <StatItem icon={<Bath size={15} />} label={`${baths} Baths`} />
            <StatItem
              icon={<SquareCode size={15} />}
              label={`${sqft.toLocaleString()} sqft`}
            />
          </ul>
        </div>
      </div>
    </article>
  );
}

function StatItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <li className={clsx("flex items-center gap-1.5 text-muted font-sans text-xs")}>
      <span className="text-accent">{icon}</span>
      <span>{label}</span>
    </li>
  );
}
