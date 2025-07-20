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

import galleryImg1 from "~/assets/gallery-image-1.jpeg";
import galleryImg2 from "~/assets/gallery-image-2.jpeg";
import galleryImg3 from "~/assets/gallery-image-3.jpeg";
import galleryImg4 from "~/assets/gallery-image-4.jpeg";
import galleryImg5 from "~/assets/gallery-image-5.jpeg";
import galleryImg6 from "~/assets/gallery-image-11.jpg";
import galleryImg7 from "~/assets/gallery-image-12.jpg";
import galleryImg8 from "~/assets/gallery-image-13.jpg";
import galleryImg9 from "~/assets/gallery-image-14.jpg";
import galleryImg10 from "~/assets/gallery-image-15.jpg";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import FAQ from "~/components/FAQ";

import keys1 from "~/assets/keys-1.jpg";
import keys2 from "~/assets/keys-2.jpg";
import keys3 from "~/assets/keys-3.jpg";
import keys4 from "~/assets/keys-4.jpg";
import keys5 from "~/assets/keys-5.jpg";
import keys6 from "~/assets/keys-6.jpg";
import keys7 from "~/assets/keys-7.jpg";
import keys8 from "~/assets/keys-8.jpg";
import keys9 from "~/assets/keys-9.jpg";
import keys10 from "~/assets/keys-10.jpg";
import keys11 from "~/assets/keys-11.jpg";
import keys12 from "~/assets/keys-12.jpg";
import keys13 from "~/assets/keys-13.jpg";
import keys14 from "~/assets/keys-14.jpg";

const galleryImages = [
  { src: galleryImg3, alt: "Heavy Vehicles - Code 14" },
  { src: galleryImg2, alt: "Truck Training - Code 10" },
  { src: galleryImg1, alt: "Driving Course - Code 8" },
  { src: galleryImg4, alt: "Driving Course - Code 8" },
  { src: galleryImg5, alt: "Truck Training - Code 10" },
  { src: galleryImg6, alt: "Truck Training - Code 10" },
  { src: galleryImg7, alt: "Truck Training - Code 10" },
  { src: galleryImg8, alt: "Truck Training - Code 10" },
  { src: galleryImg9, alt: "Truck Training - Code 10" },
  { src: galleryImg10, alt: "Truck Training - Code 10" },
];

const keysAndDreamsGalleryImages = [
  { src: keys1, alt: "Keys and Dreams" },
  { src: keys2, alt: "Keys and Dreams" },
  { src: keys3, alt: "Keys and Dreams" },
  { src: keys4, alt: "Keys and Dreams" },
  { src: keys5, alt: "Keys and Dreams" },
  { src: keys6, alt: "Keys and Dreams" },
  { src: keys7, alt: "Keys and Dreams" },
  { src: keys8, alt: "Keys and Dreams" },
  { src: keys9, alt: "Keys and Dreams" },
  { src: keys10, alt: "Keys and Dreams" },
  { src: keys11, alt: "Keys and Dreams" },
  { src: keys12, alt: "Keys and Dreams" },
  { src: keys13, alt: "Keys and Dreams" },
  { src: keys14, alt: "Keys and Dreams" },
];

export default function Gallery() {
  return (
    <>
      <NavBar />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="absolute left-10 top-20 h-72 w-72 animate-pulse rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-96 w-96 animate-pulse rounded-full bg-purple-400/10 blur-3xl delay-1000"></div>

        <div className="container relative mx-auto px-6 py-32">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-6xl font-extrabold leading-tight text-white md:text-8xl">
              Our Gallery
            </h1>
            <p className="mx-auto max-w-4xl text-xl leading-relaxed text-blue-100 md:text-2xl">
              Explore our visual journey through two distinct collections,
              witness the vibrant spirit of Mziyonke Driving School and
              celebrate the milestone moments in our Keys and Dreams gallery.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50/50 py-24">
        <div className="absolute inset-0 bg-[url('/api/placeholder/40/40')] opacity-5"></div>

        <div className="container relative mx-auto px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>

            <h2 className="mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
              Mziyonke Gallery
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              From our dedicated instructors and empowered students to the daily
              moments that define our driving school experience.
            </p>
          </motion.div>

          <Carousel className="relative mx-auto w-full max-w-7xl">
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                >
                  <motion.div
                    className="p-2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group overflow-hidden rounded-3xl border-0 bg-white/80 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
                      <CardContent className="relative p-0">
                        <div className="aspect-[4/3] overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={800}
                            height={600}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          <p className="text-sm font-medium">{image.alt}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white text-gray-700 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 hover:shadow-2xl sm:-left-6 sm:h-14 sm:w-14" />
            <CarouselNext className="absolute -right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white text-gray-700 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-50 hover:shadow-2xl sm:-right-6 sm:h-14 sm:w-14" />
          </Carousel>
        </div>
      </section>

      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-24">
        <div className="absolute inset-0 bg-[url('/api/placeholder/60/60')] opacity-5"></div>

        <div className="absolute right-16 top-16 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl"></div>
        <div className="absolute bottom-16 left-16 h-80 w-80 rounded-full bg-orange-300/10 blur-3xl"></div>

        <div className="container relative mx-auto px-6">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 shadow-lg">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            </div>

            <h2 className="mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
              Keys & Dreams
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700">
              Celebrating the milestones we achieve together — every key handed
              over represents a dream fulfilled and a life transformed.
            </p>
          </motion.div>

          <Carousel className="relative mx-auto w-full max-w-7xl">
            <CarouselContent className="-ml-2 md:-ml-4">
              {keysAndDreamsGalleryImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                >
                  <motion.div
                    className="p-2"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group overflow-hidden rounded-3xl border-0 bg-gradient-to-br from-white/90 to-amber-50/50 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl">
                      <CardContent className="relative p-0">
                        <div className="aspect-[4/3] overflow-hidden">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={800}
                            height={600}
                            className="mx-auto h-full w-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                        </div>

                        <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 shadow-lg transition-opacity duration-500 group-hover:opacity-100">
                          <svg
                            className="h-4 w-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white text-amber-700 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-amber-50 hover:shadow-2xl sm:-left-6 sm:h-14 sm:w-14" />
            <CarouselNext className="absolute -right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-0 bg-white text-amber-700 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-amber-50 hover:shadow-2xl sm:-right-6 sm:h-14 sm:w-14" />
          </Carousel>
        </div>
      </section>

      <FAQ />
      <Footer />
    </>
  );
}
