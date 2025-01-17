import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold">Mziyonke Driving School</h2>
            <p className="mt-2 text-sm text-gray-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a href="#" className="hover:text-gray-200">
                <Instagram />
              </a>
              <a href="#" className="hover:text-gray-200">
                <Twitter />{" "}
              </a>
              <a href="#" className="hover:text-gray-200">
                <Facebook />{" "}
              </a>
              <a href="#" className="hover:text-gray-200">
                <Linkedin />{" "}
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200">
                  Instructors
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="mt-2 text-sm text-gray-400">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <form className="mt-4 flex gap-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-lg bg-gray-800 px-4 py-2 text-gray-200 focus:outline-none"
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="mt-2 text-xs text-gray-400">
              By subscribing you agree to our Privacy Policy.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          Copyright © 2025 Mziyonke Driving School | Created and Maintained by
          Jack WebDev
        </div>
      </div>
    </footer>
  );
}
