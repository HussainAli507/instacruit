"use client";
import React from "react";
import { motion } from "framer-motion";

// Sentence and letter animation variants
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// Wavy Lines Component
const WavyLines: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      <svg
        viewBox="0 0 1440 320"
        className="absolute w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          fill="#9F7AEA"
          fillOpacity="0.1"
          d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,208C672,203,768,181,864,176C960,171,1056,181,1152,197.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

const Hero: React.FC = () => {
  const text = "Welcome to InstaCruit";

  return (
    <section
      className="relative text-black py-20 overflow-hidden bg-black bg-cover bg-center"
      style={{
        backgroundImage: 'url("/R1WZ.gif")',
        animation: "loopGif 2s linear infinite", // Looping animation added
        backgroundSize: "cover", // Ensures the GIF covers the section
        backgroundPosition: "center", // Centers the GIF
        height: "100vh", // Makes sure the section height fits the viewport
      }}
    >
      {/* Wavy Lines */}
      <WavyLines />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1
            className="text-4xl  text-[#841F84] font-titillium md:pl-20 md:text-5xl font-bold leading-tight mb-4"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-lg font-mingzat md:text-xl md:pl-20 mb-6 text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            InstaCruit: Streamline your hiring process with InstaCruiter – the
            dependable solution for finding top talent quickly and efficiently
          </motion.p>
          <motion.a
            href="#"
            className="md:ml-20 mr-2 bg-[#841F84] hover:bg-[#bd99bd] text-white font-bold py-3 px-6 rounded-full transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Register
          </motion.a>
          <motion.a
            href="#"
            className="md:ml-3 bg-[#841F84] hover:bg-[#bd99bd] text-white font-bold py-3 px-10 rounded-full transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Login
          </motion.a>
        </div>
        {/* Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src="/hero.png" alt="Hero Image" className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
