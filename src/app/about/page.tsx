"use client";
import { motion } from "framer-motion";
import { Award, Check, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CountUp from "react-countup";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import Instructors from "~/components/Instructors";
import NavBar from "~/components/NavBar";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

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
  const router = useRouter();

  const achievements: AchievementProps[] = [
    {
      icon: <Users className="h-12 w-12 text-blue-500" />,
      title: "Growing Community",
      description: "Thousands of successful learners since 2013",
      stat: 5000,
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
      stat: 3,
      animate: true,
    },
  ];

  return (
    <>
    <NavBar/>
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="space-y-8 bg-gradient-to-r from-blue-500 to-indigo-500 p-10 rounded-3xl shadow-2xl text-white"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
          About Us
        </h2>
        <div className="prose prose-lg max-w-none space-y-6">
          <p>
            Since our founding, Mziyonke Driving School has had the opportunity to
            help countless learners acquire foundational skills, develop new techniques,
            and confidently move forward in their learning journey.
          </p>
          <p>
            Founded by Sifiso Kheswa in 2013, our school carries a name deeply rooted in
            familial history, tradition, and care.
          </p>
          <p>
            &ldquo;Mziyonke&ldquo; reflects a legacy of support and nurturing—an ethos that touches
            every life we encounter.
          </p>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            onClick={() => router.push("/courses")}
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            View Courses
          </Button>
        </motion.div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="space-y-12"
      >
        <h2 className="text-3xl font-bold text-center">Our Achievements</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.02 }}
              className="transition-transform duration-300"
            >
              <Card className="rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200">
                <CardContent className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center"
                  >
                    {achievement.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-500">{achievement.description}</p>
                  </div>
                  <p className="text-4xl font-bold text-blue-600">
                    {achievement.animate ? (
                      <CountUp
                        start={0}
                        end={achievement.stat}
                        duration={3}
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

      {/* Features Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            variants={fadeIn}
            className="relative h-64 rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src="/hero.jpg"
              alt="Driving School"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="relative h-64 rounded-3xl overflow-hidden shadow-lg mt-8"
          >
            <Image
              src="/hero.jpg"
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
            Mziyonke Driving School is a premier institution offering comprehensive
            training led by expert staff. Our curriculum is tailored for
            learners of all backgrounds and skill levels.
          </p>

          <div className="space-y-4">
            {[
              "Expert Staff of dedicated professionals",
              "Flexible scheduling",
              "Modern and well-maintained cars",
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-center gap-x-4 bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600 shadow-sm"
              >
                <Check className="text-green-500" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
    <Instructors/>
    <FAQ/>
    {/* <CTA/> */}
    <Footer/>
    </>
  );
}
