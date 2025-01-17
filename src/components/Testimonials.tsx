import React from "react";
import TestimonialCard from "~/modules/testimonials/components/TestimonialCard";
import martin from "~/assets/martin.jpg";
import { Button } from "./ui/button";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[30rem] w-[30rem] rounded-full bg-purple-50/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Header section */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-primary text-4xl font-extrabold sm:text-5xl">
            Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            What our customers are saying about their learning journey with us
          </p>
        </div>

        {/* Cards grid with proper spacing and responsive layout */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="transform transition-all hover:translate-y-[-10px] duration-300">
            <TestimonialCard
              imgSrc={martin}
              description="Testing"
              userName="Martin"
              title="Code 10"
            />
          </div>
          <div className="transform transition-all hover:translate-y-[-10px] duration-300">
            <TestimonialCard
              imgSrc={martin}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam aut dolore eligendi reiciendis porro, quas impedit molestiae magni dolores eveniet enim commodi, dignissimos dolorem animi aspernatur. Harum ipsa, quis voluptas dolore enim nemo quasi iusto praesentium cupiditate illo dicta!"
              userName="Sizani Makhuba"
              title="Code 8"
            />
          </div>
          <div className="transform transition-all hover:translate-y-[-10px] duration-300">
            <TestimonialCard
              imgSrc={martin}
              description="Lorem ipsum dolom animi aspernatur. Harum ipsa, quis voluptas dolore enim nemo quasi iusto praesentium cupiditate illo dicta!"
              userName="Wazini Macala"
              title="Code 8"
            />
          </div>
        </div>

        {/* View all button with enhanced styling */}
        <div className="mt-16 flex justify-center">
          <Button 
            className="group relative overflow-hidden rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-md transition-all hover:shadow-lg hover:text-white"
          >
            <span className="relative z-10">View All Testimonials</span>
            {/* <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity group-hover:opacity-100" /> */}
          </Button>
        </div>
      </div>
    </section>
  );
}