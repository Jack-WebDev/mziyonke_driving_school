import exec1 from "~/assets/hlengiwe.jpeg";
import exec2 from "~/assets/sfiso-2.jpeg";

import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import FAQ from "~/components/FAQ";
import Image, { type StaticImageData } from "next/image";
import sihle from "~/assets/sihle.jpg";
import boity from "~/assets/boity.jpeg";
import instructors from "~/assets/instructors.jpeg";
import salesTeam from "~/assets/sales-team.jpeg";
import sowetoBara from "~/assets/soweto-bara.jpeg";
import goldspot from "~/assets/goldspot.jpeg";
import protea from "~/assets/protea-glen.jpeg";
import dawnpark from "~/assets/dawnpark.jpeg";
import chrisHani from "~/assets/chris-hani.jpeg";
import { Award, Heart, Lightbulb, Users } from "lucide-react";
import Link from "next/link";

type TeamSectionProps = {
  title: string;
  image: StaticImageData;
  altText: string;
  highlight: string;
  disableAnimation?: boolean;
  lat?: number;
  lng?: number;
};

export default function TeamPage() {
  const execs = [
    {
      name: "Sifiso Kheswa",
      img: exec2,
      role: "CEO",
    },
    {
      name: "Hlengiwe Kheswa",
      img: exec1,
      role: "Managing Director",
    },
  ];
  const marketingTeam = [
    {
      name: "Sihle",
      img: sihle,
      role: "Social Media Manager",
    },
    {
      name: "Boitumelo",
      img: boity,
      role: "Marketing Manager",
    },
  ];

  const teamImages = {
    instructors: instructors,
    salesTeam: salesTeam,
    sowetoBara: sowetoBara,
    protea: protea,
    goldspot: goldspot,
    chrisHani: chrisHani,
    dawnpark: dawnpark,
  };

  const TeamSection = ({
    title,
    image,
    altText,
    highlight,
    disableAnimation = false,
    lat,
    lng,
  }: TeamSectionProps) => {
    const mapsUrl =
      lat !== undefined && lng !== undefined
        ? `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
        : null;

    return (
      <section className="group mb-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            {title.split(highlight)[0]}
            {mapsUrl ? (
              <Link
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block text-primary"
              >
                {highlight}
                {!disableAnimation && (
                  <div className="absolute -bottom-2 left-0 h-1 w-full scale-x-0 transform rounded-full bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                )}
              </Link>
            ) : (
              <span className="relative inline-block text-primary">
                {highlight}
                {!disableAnimation && (
                  <div className="absolute -bottom-2 left-0 h-1 w-full scale-x-0 transform rounded-full bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                )}
              </span>
            )}
          </h2>
        </div>

        <div className="group-hover:shadow-3xl relative mx-auto max-w-4xl overflow-hidden rounded-3xl shadow-2xl transition-all duration-500">
          <Image
            src={image}
            alt={altText}
            className="h-auto w-full transform object-cover transition-transform duration-700"
            width={600}
            height={600}
          />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10"></div>
        </div>
      </section>
    );
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="relative overflow-hidden bg-primary">
          <div></div>
          <div className="container relative mx-auto px-6 py-24">
            <div className="text-center">
              <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-7xl">
                Meet Our Amazing Team
              </h1>
              <p className="mx-auto max-w-5xl text-xl leading-relaxed text-white">
                Behind every successful learner at Mziyonke is a team of
                dedicated professionals who lead with heart, skill, and purpose.
                Get to know the faces behind the wheel of our mission.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20">
          <section className="mb-24">
            <div className="mb-16 text-center">
              <h2 className="mb-6 bg-primary bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                Meet Our <span className="text-primary">Executives</span>
              </h2>
              <div className="mx-auto h-1 w-24 rounded-full bg-secondary"></div>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {execs.map((exec, index) => (
                <div
                  key={index}
                  className="group relative aspect-square transform overflow-hidden rounded-3xl shadow-lg transition-all duration-500"
                >
                  <Image
                    src={exec.img}
                    alt={exec.name}
                    className="h-full w-full object-cover transition-transform duration-700"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 translate-y-2 transform p-6 text-center transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="mb-1 text-xl font-bold text-white">
                      {exec.name}
                    </h3>
                    <p className="text-lg font-semibold text-white/60">
                      {exec.role}
                    </p>
                  </div>
                  <div className="absolute right-4 top-4 flex h-12 w-12 scale-0 transform items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <TeamSection
            title="Meet Our Instructors"
            image={teamImages.instructors}
            altText="instructors"
            highlight="Instructors"
            disableAnimation={true}
          />

          <TeamSection
            title="Meet Our Sales Team"
            image={teamImages.salesTeam}
            altText="sales-team"
            highlight="Sales Team"
            disableAnimation={true}
          />

          <TeamSection
            title="Meet Our Soweto Bara Branch"
            image={teamImages.sowetoBara}
            altText="soweto-team"
            highlight="Soweto Bara Branch"
            lat={-26.259639}
            lng={27.946361}
          />

          <TeamSection
            title="Meet Our Soweto Protea Glen Branch"
            image={teamImages.protea}
            altText="protea-team"
            highlight="Soweto Protea Glen Branch"
            lat={-26.278056}
            lng={27.812306}
          />

          <TeamSection
            title="Meet Our Goldspot Branch"
            image={teamImages.goldspot}
            altText="goldspot-team"
            highlight="Goldspot Branch"
            lng={28.219005656482945}
            lat={-26.347882902091474}
          />

          <TeamSection
            title="Meet Our Chris Hani Office"
            image={teamImages.chrisHani}
            altText="chrisHani-team"
            highlight="Chris Hani Office"
            lat={-26.344139}
            lng={28.180556}
          />

          <TeamSection
            title="Meet Our DawnPark Branch"
            image={teamImages.dawnpark}
            altText="dawnpark-team"
            highlight="DawnPark Branch"
            lng={28.244556}
            lat={-26.318389}
          />

          <section className="mb-24">
            <div className="mb-16 text-center">
              <h2 className="mb-6 bg-primary bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                Meet Our <span className="text-primary">Marketing Team</span>
              </h2>
              <div className="mx-auto h-1 w-24 rounded-full bg-secondary"></div>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              {marketingTeam.map((marketing, index) => (
                <div
                  key={index}
                  className="group relative aspect-square transform overflow-hidden rounded-3xl shadow-lg transition-all duration-500"
                >
                  <Image
                    src={marketing.img}
                    alt={marketing.name}
                    className="h-full w-full object-cover transition-transform duration-700"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 translate-y-2 transform p-6 text-center transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="mb-1 text-xl font-bold text-white">
                      {marketing.name}
                    </h3>
                    <p className="text-lg font-semibold text-white/60">
                      {marketing.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="relative overflow-hidden bg-primary py-24">
          <div></div>

          <div className="container relative mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                Our{" "}
                <span className="bg-secondary bg-clip-text text-transparent">
                  Culture
                </span>
              </h2>
              <div className="mx-auto mb-6 h-1 w-24 rounded-full bg-secondary"></div>
              <p className="mx-auto max-w-3xl text-xl leading-relaxed text-white">
                We believe in fostering an environment of growth, innovation,
                and excellence. Our team members are passionate about education
                and committed to your success.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: <Lightbulb className="h-8 w-8" />,
                  title: "Innovation",
                  description:
                    "We continuously explore new teaching methods and technologies to enhance learning outcomes.",
                  gradient: "from-yellow-400 to-orange-500",
                },
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Community",
                  description:
                    "We foster a supportive community where everyone can grow, learn, and succeed together.",
                  gradient: "from-pink-400 to-red-500",
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Excellence",
                  description:
                    "We strive for excellence in everything we do, ensuring the highest quality education for our students.",
                  gradient: "from-emerald-400 to-teal-500",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative transform rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:bg-white/20"
                >
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent"></div>
                  <div className="relative z-10">
                    <div
                      className={`mx-auto mb-6 h-20 w-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex transform items-center justify-center shadow-lg transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-xl`}
                    >
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-200">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-indigo-200 transition-colors duration-300 group-hover:text-white/90">
                      {item.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-white/20"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <Footer />
    </>
  );
}
