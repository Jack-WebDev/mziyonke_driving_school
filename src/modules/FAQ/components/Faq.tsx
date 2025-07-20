import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="item-1" className="rounded-lg border px-4">
        <AccordionTrigger className="text-lg font-medium hover:no-underline">
          What do I need to start driving lessons at Mziyonke Driving School?
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <p className="mb-4">
            You need a valid learner’s license for the code you&apos;re pursuing
            (Code 8, 10, or 14). If you don’t have one yet, we’ll help you get
            started with free learner’s classes.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="rounded-lg border px-4">
        <AccordionTrigger className="text-lg font-medium hover:no-underline">
          How long does it take to get my driver’s license?
        </AccordionTrigger>
        <AccordionContent className="pt-4 text-muted-foreground">
          Timelines vary by availability and package, but most learners complete
          the programme in 4–8 weeks.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="rounded-lg border px-4">
        <AccordionTrigger className="text-lg font-medium hover:no-underline">
          What is included in the training package?
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <p className="mb-4">
            Our packages include driving lessons, test preparation, professional
            instructors, and the use of our vehicles. Some packages also include
            the test booking fee.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="rounded-lg border px-4">
        <AccordionTrigger className="text-lg font-medium hover:no-underline">
          How do the Keys and Dreams Campaign payments work?
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <p className="mb-4">
            Parents/guardians don’t need to pay upfront. We cover the training
            costs and allow monthly payments of only R200, making it possible
            for every matriculant to get licensed.
          </p>
        </AccordionContent>
      </AccordionItem>
      {/* <AccordionItem value="item-5" className="rounded-lg border px-4">
        <AccordionTrigger className="text-lg font-medium hover:no-underline">
          I’m not a matriculant. Can I still join Mziyonke?
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <p className="mb-4">
            Yes! We often run community specials for non-matriculants. Watch our
            social media pages to catch the next one.
          </p>
        </AccordionContent>
      </AccordionItem> */}
      <AccordionItem value="item-6" className="rounded-lg border px-4">
        <AccordionTrigger className="text-lg font-medium hover:no-underline">
          What makes Mziyonke different from other driving schools?
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <ul className="ml-4 list-disc">
            <li>We are youth and community focused</li>
            <li>We have a clean, well-maintained fleet</li>
            <li>Our instructors are professional and friendly</li>
            <li>We offer flexible and affordable payment options</li>
            <li>We&apos;re committed to empowerment, not just driving</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7" className="rounded-lg border px-4">
        <AccordionTrigger className="text-lg font-medium hover:no-underline">
          Where is Mziyonke Driving School based?
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <ul className="ml-4 list-disc">
            <li>Diepkloof Zone 6, Soweto</li>
            <li>Protea Glen Mall, Protea Glen</li>
            <li>
              Sam Sekoati Avenue, Vosloorus (Opposite Botshelong Hospital)
            </li>
            <li>Chris Hani Mall</li>
            <li>Dawnpark</li>
          </ul>
          <p className="mt-4">
            We&apos;re also planning to expand to more communities across South
            Africa to ensure every matriculant has access to this opportunity.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8" className="rounded-lg border px-4">
        <AccordionTrigger className="text-lg font-medium hover:no-underline">
          How do I book lessons or get in touch?
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <p className="mb-4">
            Call us, WhatsApp us, or visit one of our branches.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
