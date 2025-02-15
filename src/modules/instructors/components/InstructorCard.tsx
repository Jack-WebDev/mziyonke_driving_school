import Image, { type StaticImageData } from "next/image";
import { Phone } from "lucide-react";

type InstructorCardProps = {
  imgSrc: StaticImageData;
  name: string;
  title: string;
  phone: string;
};

export default function InstructorCard({
  imgSrc,
  name,
  title,
  phone,
}: InstructorCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Profile Image */}
      <div className="relative mx-auto mb-6 h-40 w-40">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-purple-500 opacity-20 blur-lg transition-opacity group-hover:opacity-30" />
        <Image
          src={imgSrc}
          alt={name}
          className="relative h-full w-full rounded-full border-4 border-white object-cover shadow-md"
        />
      </div>

      {/* Content */}
      <div className="text-center">
        <h2 className="mb-2 text-xl font-bold text-gray-900">{name}</h2>
        <p className="mb-4 font-medium text-blue-600">{title}</p>

        {/* Phone Number */}
        <a
          href={`tel:${phone}`}
          className="flex items-center justify-center gap-2 font-semibold text-gray-700 transition hover:text-blue-600"
        >
          <Phone className="h-5 w-5 text-primary" />
          {phone}
        </a>
      </div>
    </div>
  );
}
