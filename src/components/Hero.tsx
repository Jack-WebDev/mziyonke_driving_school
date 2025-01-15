"use client";
import { motion } from "framer-motion";

import { BicepsFlexed, Handshake, Users } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-screen">
      <div className="container mx-auto flex h-2/3 flex-col items-center justify-between space-y-8 px-6 lg:flex-row lg:space-y-0 lg:px-12">
        <div className="max-w-lg space-y-6 text-center lg:text-left">
          <p className="text-lg font-medium">
            Your Journey to Safe Driving Starts Here!
          </p>
          <h1 className="text-4xl font-extrabold leading-tight lg:text-5xl">
            Welcome to{" "}
            <span className="text-primary">Mziyonke Driving School</span>
          </h1>
          <p className="text-lg font-light">
            Experience the best driving instruction tailored to your needs.
          </p>
          <button className="mt-6 rounded-lg bg-primary px-6 py-3 text-white shadow-lg transition hover:bg-primary-foreground">
            View Courses
          </button>
        </div>

        <div className="relative hidden h-full w-full items-center justify-center lg:flex">
          <div className="relative">
            <Image src="/hero.jpg" alt="hero" width={1000} height={500} />

            <motion.div
              className="absolute left-0 top-[50px] flex items-center justify-start rounded-xl border border-blue-100/50 bg-white/95 p-4 text-blue-800 shadow-lg backdrop-blur-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center space-x-3">
                <Users className="text-blue-600" size={20} />
                <span className="font-medium">Expert Guidance</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute right-0 top-[50px] flex items-center justify-start rounded-xl border border-blue-100/50 bg-white/95 p-4 text-blue-800 shadow-lg backdrop-blur-sm"
              animate={{ y: [-9, 0, -8] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center space-x-3">
                <BicepsFlexed className="text-blue-600" size={20} />
                <span className="font-medium">Confidence on the Road</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-[50px] left-0 flex items-center justify-start rounded-xl border border-blue-100/50 bg-white/95 p-4 text-blue-800 shadow-lg backdrop-blur-sm"
              animate={{ y: [-8, 0, -8] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center space-x-3">
                <Handshake className="text-blue-600" size={20} />
                <span className="font-medium">Unmatched Service</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-[50px] right-0 flex items-center justify-start rounded-xl border border-blue-100/50 bg-white/95 p-4 text-blue-800 shadow-lg backdrop-blur-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center space-x-3">
                <Users className="text-blue-600" size={20} />
                <span className="font-medium">Customized Learning</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
