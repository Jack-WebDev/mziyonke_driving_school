import Image, { type StaticImageData } from "next/image";

type InstructorCardProps = {
  imgSrc: StaticImageData;
  name: string;
  title: string;
  socials: string;
};

export default function InstructorCard({
  imgSrc,
  name,
  title,
  socials,
}: InstructorCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {/* Profile image */}
      <div className="relative mx-auto mb-6 w-40 h-40">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-lg opacity-20 group-hover:opacity-30 transition-opacity" />
        <Image 
          src={imgSrc} 
          alt={name} 
          className="relative h-full w-full rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Content */}
      <div className="text-center">
        <h2 className="mb-2 text-xl font-bold text-gray-900">{name}</h2>
        <p className="mb-4 text-blue-600 font-medium">{title}</p>
        
        {/* Social links */}
        <div className="flex justify-center gap-4">
          {socials}
        </div>
      </div>
    </div>
  );
}
