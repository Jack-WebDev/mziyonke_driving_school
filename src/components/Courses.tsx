"use client";

import { motion } from "framer-motion";
import CourseCard from "~/modules/courses/components/CourseCard";
import code8Car from "~/assets/IMG_6177 (1).png";
import code10Car from "~/assets/code10-car3.jpeg";
import code14Car from "~/assets/code14-car3.jpeg";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Courses() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/courses");
  };

  return (
    <div className="mx-auto grid max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-3xl font-bold text-primary sm:text-4xl">
          Our Courses
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto max-w-2xl text-lg text-gray-600"
        >
          At Mziyonke Driving School, we offer a range of expertly designed
          courses to suit drivers of all levels. Whether you&apos;re just
          starting out or looking to refine your skills, our courses are
          tailored to help you build confidence, master safe driving techniques,
          and achieve your goals on the road.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <CourseCard
          imgSrc={code8Car}
          title="Code 8"
          description="Perfect for beginners looking to get their light motor vehicle license. Our comprehensive course covers everything from basic controls to advanced defensive driving techniques."
        />
        <CourseCard
          imgSrc={code10Car}
          title="Code 10"
          description="Designed for those seeking to drive heavy motor vehicles. Master the skills needed to handle larger vehicles with confidence and precision."
        />
        <CourseCard
          imgSrc={code14Car}
          title="Code 14"
          description="Our most advanced course for extra-heavy vehicles. Learn to navigate complex situations and master the techniques required for large commercial transport."
        />
      </motion.div>

      <Button
        onClick={handleClick}
        className="mt-20 w-fit justify-self-center rounded-full border border-primary bg-white px-12 py-6 text-primary hover:text-white"
      >
        View All Courses
      </Button>
    </div>
  );
}
