import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import akshi from "./assets/akshi.jpeg"

const HeroSection = () => {
  return (
    <section className="relative w-full h-96 bg-gray-900 flex items-center justify-center text-white">
      {/* Background Image */}
      <motion.img
        src={akshi}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold">Neeraj Prajapati</h2>
        <p className="text-lg mt-2">
          I'm{" "}
          <ReactTyped
            strings={["Designer", "Developer", "Freelancer", "Photographer"]}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="font-semibold text-5xl bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent"
          />
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
