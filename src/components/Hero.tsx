"use client";
import { motion } from "framer-motion";

import {
  BicepsFlexed,
  Building2,
  Handshake,
  Mail,
  MapPinCheck,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";
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
      city: "New York",
      address: "123 Tech Lane, Manhattan",
      phone: "(212) 555-1234",
      email: "ny-office@company.com",
    },
    {
      city: "San Francisco",
      address: "456 Innovation Drive, SoMa",
      phone: "(415) 555-5678",
      email: "sf-office@company.com",
    },
  ];


  const handleClick = () => {
    router.push("/courses");
  };

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
          <div className="flex gap-x-4 justify-center md:justify-start">
            <button onClick={handleClick} className="mt-6 rounded-lg bg-primary px-6 py-3 text-white shadow-lg transition hover:bg-primary-foreground">
              View Courses
            </button>
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex  gap-x-2 mt-6 rounded-lg bg-primary px-6 py-3 text-white shadow-lg transition hover:bg-primary-foreground">
                  <MapPinCheck className="h-6 w-6" /> Find Us
                </button>
              </DialogTrigger>
              <DialogContent className="w-[90%] rounded-xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-800">
                    Find Our Offices
                  </DialogTitle>
                  <DialogDescription className="text-gray-600">
                    Discover our convenient locations across major tech hubs.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  {officeLocations.map((office, index) => (
                    <motion.div
                      key={office.city}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="rounded-lg border border-gray-200 bg-gray-50 p-4 transition-all hover:shadow-md"
                    >
                      <div className="mb-2 flex items-center">
                        <Building2 className="mr-2 text-indigo-600" />
                        <h3 className="text-xl font-semibold text-gray-800">
                          {office.city}
                        </h3>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-700">
                          <MapPinCheck className="mr-2 h-5 w-5 text-green-600" />
                          {office.address}
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Phone className="mr-2 h-5 w-5 text-blue-600" />
                          {office.phone}
                        </div>
                        <div className="flex items-center text-gray-700">
                          <Mail className="mr-2 h-5 w-5 text-red-600" />
                          {office.email}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
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
