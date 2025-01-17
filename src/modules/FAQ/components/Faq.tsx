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
          What documents do I need to enroll in driving lessons?
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <p className="mb-4">
            To enroll in driving lessons, you&apos;ll typically need the following:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>A valid driver&apos;s license</li>
            <li>Proof of identity</li>
            <li>Payment for the course fees</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="rounded-lg border px-4">
        <AccordionTrigger className="text-lg font-medium hover:no-underline">
          How long does it take to complete a driving course?
        </AccordionTrigger>
        <AccordionContent className="pt-4 text-muted-foreground">
          The duration of the course depends on the package you select and your
          availability. Most courses include 10–20 hours of practical driving
          lessons, which can be spread over a few weeks. Intensive courses may
          allow you to complete the training in a shorter timeframe.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="rounded-lg border px-4">
        <AccordionTrigger className="text-lg font-medium hover:no-underline">
          Do you offer assistance with the driving test?
        </AccordionTrigger>
        <AccordionContent className="pt-4">
          <p className="mb-4">
            Yes, we provide assistance for both the written and practical
            driving tests. This includes:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Theory test preparation materials</li>
            <li>Mock practical driving tests to help you gain confidence</li>
            <li>Guidance on what to expect during the official test</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
