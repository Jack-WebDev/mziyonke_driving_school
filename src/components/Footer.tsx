import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Mziyonke Driving School</h2>
            <p className="mb-4 text-sm text-gray-400">
              Professional driving education with comprehensive training and
              expert staff.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="grid grid-cols-2 space-y-2 text-gray-400">
              {["Home", "About", "Courses", "Instructors", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-500" />
                <span>123 Driving Street, City, Country</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>+27 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-red-500" />
                <span>info@mziyonke.co.za</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mziyonke Driving School | Created by
          <Link href="https://next-portfolio-tau-green.vercel.app/" target="_blank" className="text-gray-100 ml-2">Jack WebDev</Link>
        </div>
      </div>
    </footer>
  );
}
