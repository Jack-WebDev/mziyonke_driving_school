"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { motion } from "framer-motion";
import { CircleUserRound, Menu } from "lucide-react";

export default function NavBar() {
  return (
    <motion.div
      className="flex items-center justify-between px-4 lg:justify-around py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/mziyonke_logo.avif"
        alt="mziyonke logo"
        width={100}
        height={100}
        className="rounded-full"
      />

      <Sheet>
        <SheetTrigger asChild>
          <Menu className="h-8 w-8 cursor-pointer lg:hidden" />
        </SheetTrigger>
        <SheetContent className="grid place-content-center text-primary">
          <SheetTitle className="mb-4 flex justify-center text-center text-xl font-semibold">
            <Image
              src="/mziyonke_logo.avif"
              alt="mziyonke logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </SheetTitle>
          <ul className="space-y-4 text-center text-lg">
            <li>
              <Link href="/" className="transition-colors hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="transition-colors hover:text-blue-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="transition-colors hover:text-blue-300"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/instructors"
                className="transition-colors hover:text-blue-300"
              >
                Instructors
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-blue-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          <Button className="mt-6 rounded-full bg-primary px-12 py-6 text-white">
            Book Online
          </Button>
          <Button className="mt-6 rounded-full bg-primary px-12 py-6 text-white">
            <CircleUserRound />
            Login
          </Button>
        </SheetContent>
      </Sheet>

      <ul className="hidden items-center gap-x-8 text-lg lg:flex">
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            href="/"
            className="text-primary transition-colors hover:text-blue-300"
          >
            Home
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            href="/about"
            className="text-primary transition-colors hover:text-blue-300"
          >
            About
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            href="/courses"
            className="text-primary transition-colors hover:text-blue-300"
          >
            Courses
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            href="/instructors"
            className="text-primary transition-colors hover:text-blue-300"
          >
            Instructors
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link
            href="/contact"
            className="text-primary transition-colors hover:text-blue-300"
          >
            Contact
          </Link>
        </motion.li>
      </ul>

      <div className="hidden lg:flex self-center gap-x-4">
        <Button className="hidden rounded-full bg-primary px-12 py-6 text-white lg:flex">
          Book Online
        </Button>
        <Button className="hidden mt-6 rounded-full bg-primary px-12 py-6 text-white lg:flex">
          <CircleUserRound />
          Login
        </Button>
      </div>
    </motion.div>
  );
}
