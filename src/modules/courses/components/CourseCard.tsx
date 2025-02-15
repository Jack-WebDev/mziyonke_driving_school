"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";

type CourseProps = {
  imgSrc: StaticImageData;
  title: string;
  description: string;
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

export default function CourseCard({
  imgSrc,
  title,
  description,
}: CourseProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="transform overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          className="h-full w-full transform object-cover transition-transform duration-300"
          width={400}
          height={400}
        />
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
