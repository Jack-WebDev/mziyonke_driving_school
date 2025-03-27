import InstructorCard from "~/modules/instructors/components/InstructorCard";
import instructor1 from '~/assets/tata.jpg'
import instructor2 from '~/assets/Luzuko.jpg'
import instructor3 from '~/assets/Londi.jpg'
import instructor4 from '~/assets/Snenhlanhla.jpg'
import instructor5 from '~/assets/dhlamini.jpg'
import instructor6 from '~/assets/hlanganani.jpg'
import instructor7 from '~/assets/tony.jpg'
import instructor8 from '~/assets/sphesihle-kheswa.jpg'
import instructor9 from '~/assets/sphesihle.jpg'
import instructor10 from '~/assets/ndofaya.jpg'
import instructor11 from '~/assets/mhlekazi.jpg'
import instructor12 from '~/assets/kamohelo.jpg'

import sales1 from '~/assets/samkelesilwe.jpg'
import sales2 from '~/assets/pretty.jpg'
import sales3 from '~/assets/precious.jpg'
import sales4 from '~/assets/njabulo.jpg'
import sales5 from '~/assets/Milina.jpg'
import sales6 from '~/assets/Leria.jpg'
import sales7 from '~/assets/jabulile.jpg'
import sales8 from '~/assets/kabelo.jpg'

import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";
import FAQ from "~/components/FAQ";

export default function TeamPage() {
  const instructors = [
    { img: instructor1, name: "Tata" },
    { img: instructor2, name: "Luzuko" },
    { img: instructor3, name: "Londi" },
    { img: instructor4, name: "Snenhlanhla" },
    { img: instructor5, name: "Dhlamini" },
    { img: instructor6, name: "Hlanganani" },
    { img: instructor7, name: "Tony" },
    { img: instructor8, name: "Sphesihle Kheswa" },
    { img: instructor9, name: "Sphesihle" },
    { img: instructor10, name: "Ndofaya" },
    { img: instructor11, name: "Mhlekazi" },
    { img: instructor12, name: "Kamohelo" }
  ];

  const salesTeam = [
    { img: sales1, name: "Samkelesilwe", phone: '0720977222' },
    { img: sales2, name: "Pretty", phone: '0680410477' },
    { img: sales3, name: "Precious", phone: '' },
    { img: sales4, name: "Njabulo", phone: '0722111103' },
    { img: sales5, name: "Milina", phone: '0729556729' },
    { img: sales6, name: "Leria", phone: '0710677968' },
    { img: sales7, name: "Jabulile", phone: '' },
    { img: sales8, name: "Kabelo", phone: '0717541825' }
  ];

  return (
    <>
      <NavBar/>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Instructors Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Meet Our Expert <span className="text-primary">Instructors</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
              <InstructorCard 
                key={index} 
                imgSrc={instructor.img} 
                name={instructor.name} 
                title="Instructor" 
              />
            ))}
          </div>
        </section>

        {/* Sales Team Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Meet Our <span className="text-primary">Sales Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {salesTeam.map((member, index) => (
              <InstructorCard 
                key={index} 
                imgSrc={member.img} 
                name={member.name} 
                title="Sales" 
                phone={member.phone}
              />
            ))}
          </div>
        </section>
      </div>
      <FAQ/>
      <Footer/>
    </>
  );
}