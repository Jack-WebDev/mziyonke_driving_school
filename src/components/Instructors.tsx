"use client";
import InstructorCard from '~/modules/instructors/components/InstructorCard'
import instructor1 from '~/assets/tata.jpg'
import instructor2 from '~/assets/Luzuko.jpg'
import instructor3 from '~/assets/Londi.jpg'

import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export default function Instructors() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/staff");
  };
    return (
      <section className="grid py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-600">
              Team Members
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Expert Staff
            </h3>
          </div>
  
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <InstructorCard 
              imgSrc={instructor1} 
              name="Tata" 
              title="Instructor" 
            />
            <InstructorCard 
              imgSrc={instructor2} 
              name="Luzuko" 
              title="Instructor" 
            />
            <InstructorCard 
              imgSrc={instructor3} 
              name="Londi" 
              title="Instructor" 
            />
          </div>
        </div>

        <Button onClick={handleClick} className='px-8 py-6 rounded-full justify-self-center mt-20'>View All Staff</Button>
      </section>
    );
  }
