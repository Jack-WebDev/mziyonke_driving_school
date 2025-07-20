import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaTiktok, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Our Team", href: "/staff" },
    { name: "Gallery", href: "/gallery" },
  ];

  const socialMediaLinks = [
    {
      icon: FaFacebook,
      name: "Facebook",
      href: "https://www.facebook.com/share/16MWpgciXb/?mibextid=wwXIfr",
    },
    {
      icon: FaTiktok,
      name: "Instagram",
      href: " https://www.tiktok.com/@mziyonke.driving?_t=ZM-8yA0EafxVFm&_r=1",
    },
    {
      icon: FaInstagram,
      name: "TikTok",
      href: "https://www.instagram.com/mziyonke_drivingschool?igsh=MWZleHNuamZzN3Vr",
    },
  ];

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Mziyonke Driving School</h2>
            <p className="mb-4 text-sm text-gray-400">
              The best service you deserve.
            </p>
            <div className="flex space-x-4">
              {socialMediaLinks.map((socialMediaLink) => (
                <Link
                  key={socialMediaLink.name}
                  href={socialMediaLink.href}
                  target="_blank"
                  className="text-gray-300 transition-colors hover:text-white"
                >
                  <span className="sr-only">{socialMediaLink.name}</span>
                  <socialMediaLink.icon className="h-6 w-6" />
                </Link>
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
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>6260 Sam Sekoati Avenue</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>010 335 0976</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="h-5 w-5 text-green-500" />
                <span>076 215 2341</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-red-500" />
                <span>mziyonkefinancial@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mziyonke Driving School | Created and
          Maintained by
          <div>
            <Link
              href="https://next-portfolio-tau-green.vercel.app/"
              target="_blank"
              className="ml-2 text-gray-100"
            >
              Jack WebDev
            </Link>
            <span className="text-white"> | HLE HUB</span>
            <Image
              src={"/hlehub.jpeg"}
              alt="hlehub Logo"
              width={100}
              height={50}
              className="hidden md:absolute md:-top-4 md:right-0 md:inline-flex"
            />
            <Image
              src={"/hlehub.jpeg"}
              alt="hlehub Logo"
              width={80}
              height={50}
              className="md:hidden relative -right-36"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
