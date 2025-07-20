"use client";

import { motion } from "framer-motion";
import code8Car from "~/assets/code8-2.jpeg";
import code10 from "~/assets/code10.jpeg";
import code14 from "~/assets/code14-2.jpg";
import Image, { type StaticImageData } from "next/image";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import FAQ from "~/components/FAQ";
import Instructors from "~/components/Instructors";

type CourseProps = {
  image: StaticImageData;
  category: string;
  title: string;
  description: string;
  // rating: number;
  // reviews: number;
};

const courses: CourseProps[] = [
  {
    image: code8Car,
    category: "Driving Course",
    title: "Code 8 - Light Motor Vehicles",
    description:
      "This license allows you to drive light vehicles like cars and small bakkies (under 3,500kg). Perfect for everyday use, Uber/Bolt drivers, and anyone needing independence on the road.",
  },
  {
    image: code10,
    category: "Driving Course",
    title: "Code 10 - Medium Trucks",
    description:
      "Drive larger vehicles like minibuses, vans, and medium trucks (above 3,500 kg but with trailers under 750 kg). Ideal for public transport, delivery jobs, or starting a shuttle business.",
  },
  {
    image: code14,
    category: "Driving Course",
    title: "Code 14 - Heavy Trucks",
    description:
      "With a Code 14 license, you can drive heavy trucks and vehicles with trailers over 750 kg. Perfect for logistics, long-haul transport, freight, and courier services.",
  },
];

export default function Courses() {
  return (
    <>
      <NavBar />
      <div className="relative overflow-hidden bg-primary">
        <div></div>
        <div className="container relative mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
              Courses Designed for Every Driver
            </h1>
            <p className="mx-auto max-w-5xl text-xl leading-relaxed text-white">
              Whether you&apos;re a first-time learner or upgrading your license, our
              flexible, expert-led courses are tailored to fit your journey and
              your schedule.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="flex flex-col space-y-4 overflow-hidden rounded-2xl bg-white p-4 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image
              src={course.image}
              alt={course.title}
              className="h-80 w-full rounded-lg object-cover"
            />

            <p className="text-sm text-gray-500">{course.category}</p>

            <h3 className="text-lg font-semibold">{course.title}</h3>

            <p className="text-sm text-gray-600">{course.description}</p>

            {/* <div className="flex items-center space-x-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(course.rating) ? "fill-yellow-500" : "stroke-gray-300"}`}
                />
              ))}
            </div>

            <p className="text-sm text-gray-500">({course.reviews})</p>
          </div> */}
          </motion.div>
        ))}
      </div>
      <Instructors />
      <FAQ />
      <Footer />
    </>
  );
}
