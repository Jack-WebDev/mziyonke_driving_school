"use client";

import React from "react";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "~/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";

import img1 from "~/assets/gallery-image-1.jpeg";
import img2 from "~/assets/gallery-image-2.jpeg";
import img3 from "~/assets/gallery-image-3.jpeg";
import img4 from "~/assets/gallery-image-4.jpeg";
import img5 from "~/assets/gallery-image-5.jpeg";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import FAQ from "~/components/FAQ";

const images = [
  { src: img1, alt: "Driving Course - Code 8" },
  { src: img2, alt: "Truck Training - Code 10" },
  { src: img3, alt: "Heavy Vehicles - Code 14" },
  { src: img4, alt: "Driving Course - Code 8" },
  { src: img5, alt: "Truck Training - Code 10" },
];

export default function Gallery() {
  return (
    <>
      <NavBar />
      <section>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Mziyonke Gallery
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-xl text-gray-700 sm:mt-7">
            Unlock the road ahead—where learning meets confidence.
          </p>

          <Carousel className="relative mx-auto mt-14 w-full max-w-6xl">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="w-full px-3">
                  <motion.div
                    className="p-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                  >
                    <Card className="overflow-hidden rounded-3xl shadow-lg transition-transform duration-500">
                      <CardContent className="flex aspect-video items-center justify-center p-0">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1400}
                          height={700}
                          className="h-[150%] w-full transform rounded-xl object-cover transition-transform duration-700"
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary text-white shadow-md transition hover:scale-110 hover:bg-primary-foreground left-0 sm:left-6 sm:h-12 sm:w-12 sm:hover:scale-125" />
            <CarouselNext className="absolute top-1/2 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary text-white shadow-md transition hover:scale-110 hover:bg-primary-foreground right-2 sm:right-12 sm:h-12 sm:w-12 sm:hover:scale-125" />
          </Carousel>
        </div>
      </section>

      <FAQ />
      <Footer />
    </>
  );
}
