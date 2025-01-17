import React from "react";
import Faq from "~/modules/FAQ/components/Faq";
import { Button } from "./ui/button";

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-2">FAQ</h2>
        <h3 className="text-xl text-muted-foreground">Frequently Asked Questions</h3>
      </div>
      <Faq />

      <div className="text-center mt-16 space-y-4">
        <h4 className="text-xl font-semibold">Still have questions?</h4>
        <Button size="lg" className="px-8">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
