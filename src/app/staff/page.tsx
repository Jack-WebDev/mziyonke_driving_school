import instructor1 from "~/assets/tata.jpg";
import instructor2 from "~/assets/Luzuko.jpg";
import instructor3 from "~/assets/Londi.jpg";
import instructor4 from "~/assets/Snenhlanhla.jpg";
import instructor5 from "~/assets/dhlamini.jpg";
import instructor6 from "~/assets/hlanganani.jpg";
import instructor7 from "~/assets/tony.jpg";
import instructor8 from "~/assets/sphesihle-kheswa.jpg";
import instructor9 from "~/assets/sphesihle.jpg";
import instructor10 from "~/assets/ndofaya.jpg";
import instructor11 from "~/assets/mhlekazi.jpg";
import instructor12 from "~/assets/kamohelo.jpg";
import instructor13 from "~/assets/lungelo.png";
import instructor14 from "~/assets/mdu.jpg";

import bm1 from "~/assets/samkelesilwe.jpg";
import bm2 from "~/assets/pretty.jpg";
import bm3 from "~/assets/precious.jpg";
import bm4 from "~/assets/busi.jpg";

import sales5 from "~/assets/Milina.jpg";
import sales6 from "~/assets/Leria.jpg";
import sales7 from "~/assets/jabulile.jpg";
import sales8 from "~/assets/kabelo.jpg";
import sales9 from "~/assets/siya.jpg";

import marketing1 from "~/assets/sihle_ndlovu.jpg";

import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import FAQ from "~/components/FAQ";
import Image from "next/image";

export default function TeamPage() {
  const educators = [
    { img: instructor12, name: "Kamohelo" },
    { img: instructor3, name: "Londi" },
    { img: instructor8, name: "Sphesihle Kheswa" },
  ];
  const branchManagers = [
    { img: bm2, name: "Pretty", phone: "" },
    { img: bm3, name: "Precious", phone: "" },
    { img: bm1, name: "Samkelesilwe", phone: "" },
    { img: bm4, name: "Busi", phone: "" },
  ];
  const marketingTeam = [{ img: marketing1, name: "Sihle" }];
  const instructors = [
    { img: instructor1, name: "Tata" },
    { img: instructor2, name: "Luzuko" },
    { img: instructor4, name: "Snenhlanhla" },
    { img: instructor5, name: "Dhlamini" },
    { img: instructor6, name: "Hlanganani" },
    { img: instructor7, name: "Tony" },
    { img: instructor13, name: "Lungelo" },
    { img: instructor9, name: "Sphesihle" },
    { img: instructor10, name: "Ndofaya" },
    { img: instructor11, name: "Mhlekazi" },
    { img: instructor14, name: "Mduduzi" },
  ];

  const salesTeam = [
    { img: sales5, name: "Milina", phone: "" },
    { img: sales6, name: "Leria", phone: "" },
    { img: sales7, name: "Jabulile", phone: "" },
    { img: sales8, name: "Kabelo", phone: "" },
    { img: sales9, name: "Siya", phone: "" },
  ];

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Meet Our <span className="text-primary">Branch Managers</span>
          </h2>

          {/* Images Collage */}
          <div className="mb-8 grid grid-cols-4 gap-1 overflow-hidden rounded-lg shadow-lg">
            {branchManagers.map((instructor, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden"
              >
                <Image
                  src={instructor.img}
                  alt={instructor.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="px-2 text-center text-sm font-medium text-white">
                    {instructor.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Names List */}
          <div className="rounded-lg bg-gray-50 p-6 shadow">
            <h3 className="mb-4 text-center text-xl font-semibold">
              Our Branch Managers
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {branchManagers.map((instructor, index) => (
                <div key={index} className="p-2 text-center">
                  <p className="font-medium">{instructor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Instructors Section */}
        <section className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Meet Our Expert <span className="text-primary">Educators</span>
          </h2>

          {/* Images Collage */}
          <div className="mb-8 grid grid-cols-3 gap-1 overflow-hidden rounded-lg shadow-lg">
            {educators.map((instructor, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden"
              >
                <Image
                  src={instructor.img}
                  alt={instructor.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="px-2 text-center text-sm font-medium text-white">
                    {instructor.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Names List */}
          <div className="rounded-lg bg-gray-50 p-6 shadow">
            <h3 className="mb-4 text-center text-xl font-semibold">
              Our Educators
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {educators.map((instructor, index) => (
                <div key={index} className="p-2 text-center">
                  <p className="font-medium">{instructor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Meet Our Expert <span className="text-primary">Instructors</span>
          </h2>

          {/* Images Collage */}
          <div className="mb-8 grid grid-cols-3 gap-1 overflow-hidden rounded-lg shadow-lg">
            {instructors.map((instructor, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden"
              >
                <Image
                  src={instructor.img}
                  alt={instructor.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="px-2 text-center text-sm font-medium text-white">
                    {instructor.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Names List */}
          <div className="rounded-lg bg-gray-50 p-6 shadow">
            <h3 className="mb-4 text-center text-xl font-semibold">
              Our Instructors
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {instructors.map((instructor, index) => (
                <div key={index} className="p-2 text-center">
                  <p className="font-medium">{instructor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sales Team Section */}
        <section className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Meet Our <span className="text-primary">Sales Team</span>
          </h2>

          {/* Images Collage */}
          <div className="mb-8 grid grid-cols-3 gap-1 overflow-hidden rounded-lg shadow-lg">
            {salesTeam.map((member, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="px-2 text-center text-sm font-medium text-white">
                    {member.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Names List with Phone Numbers */}
          <div className="rounded-lg bg-gray-50 p-6 shadow">
            <h3 className="mb-4 text-center text-xl font-semibold">
              Our Sales Team
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {salesTeam.map((member, index) => (
                <div key={index} className="p-2 text-center">
                  <p className="font-medium">{member.name}</p>
                  {member.phone && (
                    <p className="text-sm text-primary">{member.phone}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Meet Our <span className="text-primary">Marketing Team</span>
          </h2>

          {/* Images Collage */}
          <div className="mb-8 grid grid-cols-2 gap-1 overflow-hidden rounded-lg shadow-lg">
            {marketingTeam.map((instructor, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden"
              >
                <Image
                  src={instructor.img}
                  alt={instructor.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="px-2 text-center text-sm font-medium text-white">
                    {instructor.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Names List */}
          <div className="rounded-lg bg-gray-50 p-6 shadow">
            <h3 className="mb-4 text-center text-xl font-semibold">
              Our Marketing Team
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {marketingTeam.map((instructor, index) => (
                <div key={index} className="p-2 text-center">
                  <p className="font-medium">{instructor.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Culture Section - Unchanged */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Our <span className="text-primary">Culture</span>
            </h2>
            <p className="text-gray-600">
              We believe in fostering an environment of growth, innovation, and
              excellence. Our team members are passionate about education and
              committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new teaching methods and technologies to
                enhance learning outcomes.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Community</h3>
              <p className="text-gray-600">
                We foster a supportive community where everyone can grow, learn,
                and succeed together.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, ensuring the
                highest quality education for our students.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <Footer />
    </>
  );
}
