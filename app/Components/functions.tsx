"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineRobot } from "react-icons/ai"; // Import icon for Automation
import { FaBullhorn, FaMoneyBillWave } from "react-icons/fa"; // Import icons for Smart Advertising and Reduce Costs

const Features = () => {
  return (
    <div className="relative py-10 bg-black">
      <div className="absolute inset-0">
        <img
          src="/bg.avif" // Replace with your background image path
          alt="Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="relative z-10 py-10">
        <div className="text-center mb-10">
          <motion.h2
            className="text-3xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Features
          </motion.h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 px-8 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1: Reduce Costs */}
          <motion.div
            className="bg-white hover:bg-purple-200 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="mb-4 text-center">
              <FaMoneyBillWave className="w-12 h-12 mx-auto text-[#841F84]" />{" "}
              {/* Replace with Reduce Costs Icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Reduce Costs
            </h3>
            <p className="text-gray-600">
              Lower your recruitment costs and streamline your hiring process
              with our platform. Save on advertising and screening time.
            </p>
          </motion.div>

          {/* Feature 2: Smart Advertising */}
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="mb-4 text-center">
              <FaBullhorn className="w-12 h-12 mx-auto text-[#841F84]" />{" "}
              {/* Replace with Smart Advertising Icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Smart Advertising
            </h3>
            <p className="text-gray-600">
              Maximize your visibility with targeted ads that reach a broader
              audience of potential candidates, even passive ones.
            </p>
          </motion.div>

          {/* Feature 3: Automation */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="mb-4 text-center">
              <AiOutlineRobot className="w-12 h-12 mx-auto text-[#841F84]" />{" "}
              {/* Replace with Automation Icon */}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
              Automatisering
            </h3>
            <p className="text-gray-600">
              Automate your recruitment process and make it more efficient for
              both candidates and recruiters with our innovative solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
