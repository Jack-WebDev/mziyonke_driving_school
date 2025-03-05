"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Our Team", href: "/staff" },
    { name: "Gallery", href: "/gallery" },
  ];

  const handleClick = () => {
    console.log("clicked");
    router.push("/contact");
  };

  return (
    <motion.div
      className="flex items-center justify-between px-4 py-4 lg:justify-around"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={"/"}>
        <Image
          src="/mziyonke_logo.avif"
          alt="mziyonke logo"
          width={100}
          height={100}
          className="rounded-full"
        />
      </Link>

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
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-blue-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Button
            onClick={handleClick}
            className="mt-6 rounded-full bg-primary px-12 py-6 text-white"
          >
            Contact Us
          </Button>
        </SheetContent>
      </Sheet>

      <ul className="hidden items-center gap-x-8 text-lg lg:flex">
        {navLinks.map((link) => (
          <motion.li
            key={link.name}
            whileHover={{ scale: 1.1 }}
            className="transition-all"
          >
            <Link
              href={link.href}
              className="text-primary transition-colors hover:text-blue-300"
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="hidden gap-x-4 self-center lg:flex">
        <Button
          onClick={handleClick}
          className="hidden rounded-full bg-primary px-12 py-6 text-white lg:flex"
        >
          Contact Us
        </Button>
      </div>
    </motion.div>
  );
}
