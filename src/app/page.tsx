import Courses from "~/components/Courses";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Instructors from "~/components/Instructors";
import NavBar from "~/components/NavBar";
import Testimonials from "~/components/Testimonials";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Courses />
      <Testimonials />
      <Instructors />
      <FAQ />
      <Footer />
    </div>
  );
}
