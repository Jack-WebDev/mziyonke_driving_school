import Courses from "~/components/Courses";
import CTA from "~/components/CTA";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Instructors from "~/components/Instructors";
import NavBar from "~/components/NavBar";
import Testimonials from "~/components/Testimonials";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Courses/>
      <Testimonials/>
      <Instructors/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </div>
  )
}


// Image by storyset on Freepik
// Photo by Martin Katler on Unsplash vw golf
      