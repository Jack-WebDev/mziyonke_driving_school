"use client";

import Faq from "~/modules/FAQ/components/Faq";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function FAQ() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/contact");
  };
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-12 text-center">
        <h2 className="mb-2 text-3xl font-bold tracking-tight">FAQ</h2>
        <h3 className="text-xl text-muted-foreground">
          Frequently Asked Questions
        </h3>
      </div>
      <Faq />

      <div className="mt-16 space-y-4 text-center">
        <h4 className="text-xl font-semibold">Still have questions?</h4>
        <p> We&apos;re here to help. Reach out to our support team.</p>
        <Button onClick={handleClick} size="lg" className="px-8">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
