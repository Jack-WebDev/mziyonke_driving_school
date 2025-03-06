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
import img1 from "~/assets/gallery-image-9.jpg";
import img2 from "~/assets/gallery-image-10.jpg";

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
      icon: <Users className="h-12 w-12 text-primary" />,
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
      <NavBar />
      <div className="mx-auto max-w-7xl space-y-24 px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-8 rounded-3xl bg-gradient-to-r from-primary to-indigo-800 p-10 text-white shadow-2xl"
        >
          <h2 className="text-4xl font-extrabold tracking-tight drop-shadow-lg md:text-5xl">
            About Us
          </h2>
          <div className="prose prose-lg max-w-none space-y-6">
            <p>
              Since our founding, Mziyonke Driving School has had the
              opportunity to help countless learners acquire foundational
              skills, develop new techniques and confidently move forward in
              their learning journey. Known as the best Driving School in the
              Vosloorus area, we provide a wide range of courses to support
              Learners from all backgrounds and levels.
            </p>
            <p>
              Mziyonke Driving School, founded by Sifiso Kheswa in 2013, carries
              a name deeply rooted in familial history and a tradition of
              support and care. The driving school derives its name from
              Sifiso&apos;s grandfather, who was a diligent provider in his
              community, cultivating crops and generously offering them to
              numerous households.
            </p>
            <p>
              The name &apos;Mziyonke&apos; reflects the legacy of a fatherly
              figure who not only provides but also supports and takes care of
              all houses within his reach. This ethos of nurturing and
              assistance is carried forward in the driving school&apos;s
              mission, emphasizing a commitment to guiding and supporting
              individuals on their journey to becoming skilled and responsible
              drivers.
            </p>
            <p>
              Mziyonke has 3 offices, One located in Dawnpark and the other two
              offices are located right in the heart of Vosloorus encompassing
              17 employees who contribute immensely to the success of the
              company.
            </p>
          </div>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => router.push("/courses")}
              className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-600 shadow-md transition-shadow duration-300 hover:text-white hover:shadow-xl"
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
                "Flexible scheduling",
                "Modern and well-maintained cars",
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
      <Instructors />
      <FAQ />
      {/* <CTA/> */}
      <Footer />
    </>
  );
}
