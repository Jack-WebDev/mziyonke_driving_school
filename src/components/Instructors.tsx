"use client";

import staff from "~/assets/staff.jpg";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Instructors() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/staff");
  };
  return (
    <section className="grid bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-600">
            Team Members
          </h2>
          <h3 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Staff
          </h3>
        </div>

        <Image src={staff} alt="mziyonke-staff" width={700} height={700} className="w-full lg:w-3/4 mx-auto rounded-xl"/>
      </div>

      <Button
        onClick={handleClick}
        className="mt-20 w-fit justify-self-center rounded-full border border-primary bg-primary px-12 py-6 text-white"
      >
        View All Staff
      </Button>

    </section>
  );
}
