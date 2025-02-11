import React from "react";
import InstructorCard from "~/modules/instructors/components/InstructorCard";
import code8 from "~/assets/code8-car2.jpg";
import code10 from "~/assets/code10-car-2.jpg";
import code14 from "~/assets/code14-car2.jpg";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import FAQ from "~/components/FAQ";

export default function page() {
  return (
    <>
    <NavBar/>
    <div className="container mx-auto py-12 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900">Meet Our Expert <span className="text-primary">Staff</span></h2>
      <p className="text-gray-600 mt-2">Our team of experienced instructors is here to guide you on your driving journey.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <InstructorCard imgSrc={code10} name="Lebohang Maisa" title="Facilitator" phone="+27 71 234 5678" />
        <InstructorCard imgSrc={code8} name="Botho Maake" title="Instructor" phone="+27 72 345 6789" />
        <InstructorCard imgSrc={code14} name="Elijah Ysaseng" title="Instructor" phone="+27 73 456 7890" />
      </div>
    </div>
      <FAQ/>
      <Footer/>
    </>
  );
}
