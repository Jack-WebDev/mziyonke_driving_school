"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Background Pattern */}
      <div
        className="bg-grid-slate-100 absolute inset-0 [mask-image:linear-gradient(0deg,transparent,black,transparent)]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative px-4 py-16">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Stay Updated
            </h2>
            <p className="text-slate-600">
              Get the latest updates straight to your inbox
            </p>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white/80 p-6 shadow-lg backdrop-blur-sm">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="whitespace-nowrap"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </form>
          </div>

          <p className="px-6 text-center text-sm text-slate-600">
            By subscribing, you agree to receive marketing communications from
            us. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
}
