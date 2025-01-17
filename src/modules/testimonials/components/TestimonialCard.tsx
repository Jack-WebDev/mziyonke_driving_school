import { Quote } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

type TestimonialProps = {
  imgSrc: StaticImageData;
  description: string;
  userName: string;
  title: string;
};

export default function TestimonialCard({
  imgSrc,
  userName,
  description,
  title,
}: TestimonialProps) {
  return (
    <div className="mx-auto w-full max-w-md transform transition-all duration-300 hover:scale-105">
      <div className="relative rounded-2xl bg-white p-8 shadow-xl">
        {/* Decorative quote icon */}
        <div className="absolute -left-4 -top-4 rounded-full bg-blue-500 p-3">
          <Quote className="h-6 w-6 text-white" />
        </div>

        {/* Main content */}
        <div className="space-y-6">
          {/* Description with subtle gradient background */}
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-50 to-transparent opacity-50" />
            <p className="relative text-lg italic leading-relaxed text-gray-700">
              &apos;{description}&apos;
            </p>
          </div>

          {/* Author section with modern layout */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="h-16 w-16 overflow-hidden rounded-full ring-4 ring-blue-100">
                <Image
                  src={imgSrc}
                  alt={userName}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 rounded-full bg-blue-500 p-1">
                <svg
                  className="h-4 w-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                </svg>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-start text-lg font-semibold text-gray-900">
                {userName}
              </h3>
              <p className="text-start font-medium text-blue-600">{title}</p>
              <div className="mt-2 flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
