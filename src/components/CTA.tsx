"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CTA() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6"
        >
          Still have questions?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg text-gray-600 mb-8"
        >
          We&apos;re here to help. Reach out to our support team.
        </motion.p>
        <motion.button 
          onClick={handleClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
        >
          Contact Us
        </motion.button>
      </div>
    </motion.div>
  );
}
