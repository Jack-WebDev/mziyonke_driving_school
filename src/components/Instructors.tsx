import React from 'react'
import InstructorCard from '~/modules/instructors/components/InstructorCard'
import instructor from '~/assets/code14-car2.jpg'
import { Button } from './ui/button';

export default function Instructors() {
    return (
      <section className="grid py-24 bg-white">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-600">
              Team Members
            </h2>
            <h3 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Our Expert Instructors
            </h3>
          </div>
  
          {/* Cards grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <InstructorCard 
              imgSrc={instructor} 
              name="Lebohang Maisa" 
              title="Frontend Developer" 
              socials="Twitter, LinkedIn, Github" 
            />
            <InstructorCard 
              imgSrc={instructor} 
              name="Botho Maake" 
              title="Frontend Developer" 
              socials="Twitter, LinkedIn, Github" 
            />
            <InstructorCard 
              imgSrc={instructor} 
              name="Elijah Ysaseng" 
              title="Frontend Developer" 
              socials="Twitter, LinkedIn, Github" 
            />
          </div>
        </div>

        <Button className='w-fit justify-self-center mt-20'>View All Instructors</Button>
      </section>
    );
  }
