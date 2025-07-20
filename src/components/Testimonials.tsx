import TestimonialCard from "~/modules/testimonials/components/TestimonialCard";
import img1 from "~/assets/gallery-image-6.jpg";
import img2 from "~/assets/gallery-image-7.jpg";
import img3 from "~/assets/gallery-image-8.jpg";
import img4 from "~/assets/gallery-image-16.jpg";
import img5 from "~/assets/gallery-image-17.jpg";
import img6 from "~/assets/gallery-image-18.jpg";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        {/* Subtle background gradients */}
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[30rem] w-[30rem] rounded-full bg-purple-50/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-primary sm:text-5xl">
            Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            What our customers are saying about their learning journey with us
          </p>
        </div>

        {/* Responsive grid for testimonial cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {/* Testimonial Card 1 */}
          <div className="transform transition-transform duration-300 hover:scale-[1.02]">
            <TestimonialCard
              imgSrc={img1}
              description="I had an amazing experience! My instructor was incredibly patient and made me feel comfortable behind the wheel from day one. I passed my driving test on the first try! Highly recommend to anyone looking to become a confident driver."
              userName="Maditaba Phoolo"
              title="Code 10"
            />
          </div>

          {/* Testimonial Card 2 */}
          <div className="transform transition-transform duration-300 hover:scale-[1.02]">
            <TestimonialCard
              imgSrc={img2}
              description="I was nervous about learning to drive, but the instructors at Mziyonke were fantastic. They explained everything clearly and gave me the confidence I needed. Couldn't have asked for a better experience!"
              userName="Sizani Makhuba"
              title="Code 10"
            />
          </div>

          {/* Testimonial Card 3 */}
          <div className="transform transition-transform duration-300 hover:scale-[1.02]">
            <TestimonialCard
              imgSrc={img3}
              description="From my first lesson to my driving test, the team at Mziyonke was exceptional. They provided great tips, corrected my mistakes without making me feel stressed, and helped me build confidence on the road. I’m now a licensed driver, all thanks to them!"
              userName="Lerato Maake"
              title="Code 8"
            />
          </div>

          {/* Testimonial Card 4 */}
          <div className="transform transition-transform duration-300 hover:scale-[1.02]">
            <TestimonialCard
              imgSrc={img4}
              description="Learning to drive with Mziyonke was a smooth and supportive experience from start to finish. The instructors were very patient and professional. They made sure I understood everything clearly and stayed calm even when I made mistakes. I passed my test with confidence, and I owe it all to their amazing guidance!"
              userName="Thabo Nkabinde"
              title="Code 14"
            />
          </div>

          {/* Testimonial Card 5 */}
          <div className="transform transition-transform duration-300 hover:scale-[1.02]">
            <TestimonialCard
              imgSrc={img5}
              description="Big thanks to the Mziyonke team for helping me get my license! They were professional, always on time, and knew exactly how to build my skills. Every lesson was structured and purposeful. I couldn’t have asked for better training."
              userName="Anele Dlamini"
              title="Code 14"
            />
          </div>

          {/* Testimonial Card 6 */}
          <div className="transform transition-transform duration-300 hover:scale-[1.02]">
            <TestimonialCard
              imgSrc={img6}
              description="I never thought I’d enjoy driving lessons, but Mziyonke changed that. They made learning fun and stress-free. I gained so much confidence with each session. Highly recommend them if you're serious about passing your test."
              userName="Ronnie Mthembu"
              title="Code 10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
