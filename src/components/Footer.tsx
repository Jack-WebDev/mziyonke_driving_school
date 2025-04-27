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
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Our Team", href: "/staff" },
    { name: "Gallery", href: "/gallery" },
  ];

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
            <ul className="text-md grid grid-cols-2 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-blue-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
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
                <Phone className="h-5 w-5 text-primary" />
                <span>+27 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-red-500" />
                <span>mziyonkefinancial@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mziyonke Driving School | Created and Maintained by
          <div>

          <Link
            href="https://next-portfolio-tau-green.vercel.app/"
            target="_blank"
            className="ml-2 text-gray-100"
          >
            Jack WebDev
          </Link>
          <span className="text-white"> | HLE HUB</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
