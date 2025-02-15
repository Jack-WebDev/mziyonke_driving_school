import TestimonialCard from "~/modules/testimonials/components/TestimonialCard";
import img1 from "~/assets/gallery-image-6.jpg";
import img2 from "~/assets/gallery-image-7.jpg";
import img3 from "~/assets/gallery-image-8.jpg";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[30rem] w-[30rem] rounded-full bg-purple-50/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-primary sm:text-5xl">
            Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            What our customers are saying about their learning journey with us
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="transform transition-all duration-300 hover:translate-y-[-10px]">
            <TestimonialCard
              imgSrc={img1}
              description="I had an amazing experience! My instructor was incredibly patient and made me feel comfortable behind the wheel from day one. I passed my driving test on the first try! Highly recommend to anyone looking to become a confident driver."
              userName="Maditaba Phoolo"
              title="Code 10"
            />
          </div>
          <div className="transform transition-all duration-300 hover:translate-y-[-10px]">
            <TestimonialCard
              imgSrc={img2}
              description="I was nervous about learning to drive, but the instructors at Mziyonke were fantastic. They explained everything clearly and gave me the confidence I needed. Couldn't have asked for a better experience!"
              userName="Sizani Makhuba"
              title="Code 8"
            />
          </div>
          <div className="transform transition-all duration-300 hover:translate-y-[-10px]">
            <TestimonialCard
              imgSrc={img3}
              description="From my first lesson to my driving test, the team at Mziyonke was exceptional. They provided great tips, corrected my mistakes without making me feel stressed, and helped me build confidence on the road. I’m now a licensed driver, all thanks to them!"
              userName="Lerato Maake"
              title="Code 8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
