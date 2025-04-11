"use client";
import { motion } from "framer-motion";

import {
  Building2,
  ChevronRight,
  Mail,
  MapPinCheck,
  Phone,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const officeLocations = [
    {
      city: "Soweto",
      address: "Diepkloof Shopping Centre",
      phone: "+27 (0) XX XXX XXXX",
      email: "soweto@mail.co.za",
    },
    {
      city: "Vosloorus",
      address: "8147 Masianoke Street",
      phone: "+27 (0) XX XXX XXXX",
      email: "vosloorus1@mail.co.za",
    },
    {
      city: "Vosloorus",
      address: "6269 Sam Sekoati Avenue",
      phone: "+27 (0) XX XXX XXXX",
      email: "vosloorus2@mail.co.za",
    },
    {
      city: "Dawnpark",
      address: "80 Galahad Street, Dawnpark",
      phone: "+27 (0) XX XXX XXXX",
      email: "dawnpark@mail.co.za",
    },
  ];

  const handleClick = () => {
    router.push("/courses");
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
      </div>

      <div className="relative h-full w-full">
        <div className="container mx-auto flex h-full flex-col items-center justify-center px-6 lg:items-start lg:justify-center lg:px-12 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl space-y-6 text-center lg:text-left"
          >
            <div className="inline-block rounded-full bg-white/10 px-4 py-1 backdrop-blur-sm">
              <p className="text-sm font-medium tracking-wider text-white">
                YOUR JOURNEY TO SAFE DRIVING STARTS HERE
              </p>
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-white lg:text-5xl xl:text-6xl">
              Welcome to <span className="text-red-600">Mziyonke</span> Driving
              School
            </h1>

            <p className="text-lg font-light text-gray-200">
              Experience the best driving instruction tailored to your needs
              with our professional instructors and modern learning methods.
            </p>

            <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClick}
                className="group relative overflow-hidden rounded-lg bg-primary px-8 py-4 font-medium text-white shadow-lg transition"
              >
                <span className="relative z-10 flex items-center justify-center">
                  View Courses{" "}
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 z-0 bg-primary opacity-0 transition-opacity group-hover:opacity-80"></span>
              </motion.button>

              <Dialog>
                <DialogTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative overflow-hidden rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-medium text-white shadow-lg backdrop-blur-sm transition hover:bg-white/20"
                  >
                    <span className="flex items-center justify-center">
                      <MapPinCheck className="mr-2 h-5 w-5" /> Find Us
                    </span>
                  </motion.button>
                </DialogTrigger>
                <DialogContent className="w-full max-w-3xl rounded-xl bg-white p-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-800">
                      Find Our Offices
                    </DialogTitle>
                    <DialogDescription className="text-gray-600">
                      Visit us at any of our convenient locations throughout
                      South Africa.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {officeLocations.map((office, index) => (
                      <motion.div
                        key={`${office.city}-${index}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
                      >
                        <div className="mb-3 flex items-center">
                          <div className="mr-3 rounded-full bg-primary/10 p-2">
                            <Building2 className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {office.city}
                          </h3>
                        </div>
                        <div className="space-y-3 pl-2">
                          <div className="flex items-center text-gray-700">
                            <MapPinCheck className="mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-sm">{office.address}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Phone className="mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-sm">{office.phone}</span>
                          </div>
                          <div className="flex items-center text-gray-700">
                            <Mail className="mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                            <span className="text-sm">{office.email}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
