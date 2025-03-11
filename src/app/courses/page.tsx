"use client";

import { motion } from "framer-motion";
import { Download, Star } from "lucide-react";
import code8 from "~/assets/code8-car2.jpg";
import code10 from '~/assets/code10.jpeg';
import code14 from '~/assets/code14-car3.jpeg';
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
  rating: number;
  reviews: number;

  pdfLink: string;
};

const courses: CourseProps[] = [
  {
    image: code8,
    category: "Driving Course",
    title: "Code 8 - Light Motor Vehicles",
    description:
      "Master the basics of driving light motor vehicles safely and confidently.",
    rating: 4.5,
    reviews: 120,

    pdfLink: "/downloads/code8-info.pdf",
  },
  {
    image: code10,
    category: "Driving Course",
    title: "Code 10 - Medium Trucks",
    description:
      "Learn to handle larger commercial vehicles with expert training.",
    rating: 4.7,
    reviews: 95,

    pdfLink: "/downloads/code10-info.pdf",
  },
  {
    image: code14,
    category: "Driving Course",
    title: "Code 14 - Heavy Trucks & Buses",
    description: "Get professional training for heavy-duty trucks and buses.",
    rating: 4.9,
    reviews: 80,

    pdfLink: "/downloads/code14-info.pdf",
  },
];

export default function Courses() {
  return (
    <>
    <NavBar/>
    <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3">
      {courses.map((course, index) => (
        <motion.div
          key={index}
          className="flex flex-col space-y-4 overflow-hidden rounded-2xl bg-white p-4 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          {/* Course Image */}
          <Image
            src={course.image}
            alt={course.title}
            className="h-80 w-full rounded-lg object-cover"
          />

          {/* Course Category */}
          <p className="text-sm text-gray-500">{course.category}</p>

          {/* Course Title */}
          <h3 className="text-lg font-semibold">{course.title}</h3>

          {/* Course Description */}
          <p className="text-sm text-gray-600">{course.description}</p>

          {/* Rating & Reviews */}
          <div className="flex items-center space-x-2">
            <div className="flex text-yellow-500">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.round(course.rating) ? "fill-yellow-500" : "stroke-gray-300"}`}
                />
              ))}
            </div>

            <p className="text-sm text-gray-500">({course.reviews})</p>
          </div>

          {/* Download Info Pack Button */}
          <motion.a
            href={course.pdfLink}
            download
            className="mt-4 flex items-center justify-center rounded-lg bg-primary py-2 text-white transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-2 h-5 w-5" /> Download Info Pack
          </motion.a>
        </motion.div>
      ))}
    </div>
    <Instructors />
    <FAQ />
    <Footer/>
    </>
  );
}
