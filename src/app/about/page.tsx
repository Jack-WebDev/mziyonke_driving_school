"use client";
import { motion } from "framer-motion";
import { Award, Check, MapPin, Star, Target, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CountUp from "react-countup";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import NavBar from "~/components/NavBar";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import img1 from "~/assets/gallery-image-9.jpg";
import img2 from "~/assets/gallery-image-10.jpg";
import { useEffect, useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
type AchievementProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: number;
  animate: boolean;
};

export default function About() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  const router = useRouter();

  const achievements: AchievementProps[] = [
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Growing Community",
      description: "Thousands of successful learners since 2013",
      stat: 10000,
      animate: true,
    },
    {
      icon: <Award className="h-12 w-12 text-yellow-500" />,
      title: "Excellence in Training",
      description: "Best driving school in Vosloorus",
      stat: 1,
      animate: false,
    },
    {
      icon: <MapPin className="h-12 w-12 text-red-500" />,
      title: "Strategic Locations",
      description: "Accessible training centers",
      stat: 5,
      animate: false,
    },
  ];

  return (
    <>
      <NavBar />
      <div className="mx-auto max-w-7xl space-y-24 px-4 py-16">
        <section
          id="section-about"
          className={`transform transition-all duration-1000 ${
            isVisible["section-about"]
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl bg-primary p-12 shadow-2xl">
            <div className="absolute right-0 top-0 h-64 w-64 -translate-y-32 translate-x-32 rounded-full bg-white/10"></div>
            <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-24 translate-y-24 rounded-full bg-white/5"></div>

            <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white/90">
                <Star className="mr-2 h-4 w-4" />
                Trusted Since 2013
              </div>

              <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
                About Mziyonke
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Driving School
                </span>
              </h1>

              <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-blue-100">
                <p>
                  Mziyonke Driving School is more than just a driving school,
                  we are a trusted gateway to freedom, opportunity, and
                  empowerment through driving. Proudly rooted in the community,
                  we&apos;ve built our name by offering top-quality driver
                  training for Code 8, 10, and 14 licenses using a modern,
                  roadworthy fleet and passionate, professional instructors.
                </p>
                <p>
                  Whether you&apos;re a school leaver, a job seeker, or a
                  working adult looking to expand your options, we offer
                  affordable, accessible driving lessons that unlock new
                  chapters in life. At Mziyonke, we don&apos;t just teach you to
                  drive, we prepare you for the road ahead.
                </p>
              </div>

              <Button
                className="group relative inline-flex transform items-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:bg-white/60 hover:shadow-xl"
                onClick={() => router.push("/courses")}
              >
                <span>View Courses</span>
                <div className="ml-2 transform transition-transform group-hover:translate-x-1">
                  →
                </div>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="section-campaign"
          className={`transform transition-all delay-200 duration-1000 ${
            isVisible["section-campaign"]
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 p-12 shadow-2xl">
            <div className="absolute left-0 top-0 h-72 w-72 -translate-x-36 -translate-y-36 rounded-full bg-white/10"></div>
            <div className="absolute bottom-0 right-0 h-56 w-56 translate-x-28 translate-y-28 rounded-full bg-white/5"></div>

            <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
              <div className="mb-4 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white/90">
                <Target className="mr-2 h-4 w-4" />
                Empowerment Programme
              </div>

              <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
                Keys and Dreams
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Campaign
                </span>
              </h2>

              <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-emerald-100">
                <p>
                  The Keys and Dreams Campaign is our flagship empowerment
                  programme for Grade 12 learners. Not every matriculant has
                  access to varsity or job opportunities immediately after
                  school. Many parents also don&apos;t have the money to pay
                  upfront for driving lessons.
                </p>
                <div>
                  <p className="mb-4">That&apos;s why we launched this campaign:</p>
                  <ul className="ml-4 list-disc text-start">
                    <li>
                      To remove the financial barrier by covering all the costs
                      upfront.
                    </li>
                    <li>
                      All a parent needs to do is commit to paying a R200
                      monthly fee until the license is fully paid off.
                    </li>
                    <li>
                      We make sure your child doesn&apos;t just leave school
                      with a certificate, but also with a driver&apos;s license. A real opportunity to enter the job market.
                    </li>
                  </ul>
                </div>
                <p>
                  While the campaign is focused on matriculants, we also care
                  deeply about our communities. That&apos;s why we run regular
                  specials for non-matriculants and adults. Follow us on social
                  media so they don&apos;t miss out on the next opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="space-y-12"
        >
          <h2 className="text-center text-3xl font-bold">Our Achievements</h2>
          <div className="grid grid-cols-1 gap-8 border-0 md:grid-cols-3">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                variants={fadeIn}
                whileHover={{ y: -5, scale: 1.02 }}
                className="border-0 transition-transform duration-300"
              >
                <Card className="rounded-2xl border-0 p-6 shadow-none transition-shadow duration-300 hover:shadow-2xl">
                  <CardContent className="flex flex-col items-center space-y-4 text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center justify-center"
                    >
                      {achievement.icon}
                    </motion.div>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-500">{achievement.description}</p>
                    </div>
                    <p className="text-4xl font-bold text-primary">
                      {achievement.animate ? (
                        <CountUp
                          start={0}
                          end={achievement.stat}
                          duration={20}
                          separator=","
                        />
                      ) : (
                        `#${achievement.stat}`
                      )}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              variants={fadeIn}
              className="relative h-64 overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={img1}
                alt="Driving School"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="relative mt-8 h-64 overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={img2}
                alt="Driving School"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div variants={fadeIn} className="space-y-8">
            <h2 className="text-3xl font-bold">
              Why Choose Mziyonke Driving School?
            </h2>
            <p className="text-gray-600">
              Mziyonke Driving School is a premier institution offering
              comprehensive training led by expert staff. Our curriculum is
              tailored for learners of all backgrounds and skill levels.
            </p>

            <div className="space-y-4">
              {[
                "Expert Staff of dedicated professionals",
                "Personalized lessons tailored to your learning pace",

                "Safe, comfortable vehicles for confident driving practice",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="flex items-center gap-x-4 rounded-lg border-l-4 border-primary bg-gray-50 p-4 shadow-sm"
                >
                  <Check className="text-green-500" />
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <FAQ />
      <Footer />
    </>
  );
}
