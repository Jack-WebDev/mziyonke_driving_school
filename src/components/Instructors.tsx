"use client";
import InstructorCard from '~/modules/instructors/components/InstructorCard'
import instructor from '~/assets/code14-car2.jpg'
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
              imgSrc={instructor} 
              name="Lebohang Maisa" 
              title="Facilitator" 
              socials="Twitter, LinkedIn, Facebook" 
            />
            <InstructorCard 
              imgSrc={instructor} 
              name="Botho Maake" 
              title="Instructor" 
              socials="Twitter, LinkedIn" 
            />
            <InstructorCard 
              imgSrc={instructor} 
              name="Elijah Ysaseng" 
              title="Instructor" 
              socials="Twitter, LinkedIn, Facebook" 
            />
          </div>
        </div>

        <Button onClick={handleClick} className='w-fit justify-self-center mt-20'>View All Staff</Button>
      </section>
    );
  }
