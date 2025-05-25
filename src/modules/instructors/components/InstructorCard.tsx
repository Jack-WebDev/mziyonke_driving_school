import Image, { type StaticImageData } from "next/image";
import { Phone } from "lucide-react";

type InstructorCardProps = {
  imgSrc: StaticImageData;
  name: string;
  title: string;
  phone?: string;
};

export default function InstructorCard({
  imgSrc,
  name,
  title,
  phone,
}: InstructorCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Profile Image with Glowing Effect */}
      <div className="relative mx-auto mb-6 h-48 w-48">
        {/* Soft Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-purple-500/30 opacity-0 blur-2xl transition-opacity group-hover:opacity-50" />

        {/* Image with Border and Shadow */}
        <div className="relative">
          <Image
            src={imgSrc}
            alt={name}
            width={192}
            height={192}
            className="relative z-10 h-48 w-48 rounded-full border-4 border-white object-contain shadow-lg ring-2 ring-gray-900/10 transition-all group-hover:scale-105 group-hover:ring-primary/30"
          />
        </div>
      </div>

      {/* Content with Modern Typography */}
      <div className="text-center">
        <h2 className="mb-2 text-2xl font-extrabold text-gray-900 transition-colors group-hover:text-primary">
          {name}
        </h2>
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-blue-600 opacity-80">
          {title}
        </p>

        {/* Rating and Contact */}
        <div className="flex flex-col items-center space-y-3">
          {/* Phone Number with Hover Effect */}
          {phone && (
            <div className="flex items-center gap-2 text-gray-700 transition-all hover:scale-105 hover:text-primary">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold">{phone}</span>
            </div>
          )}
        </div>
      </div>

      {/* Subtle Hover Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}
