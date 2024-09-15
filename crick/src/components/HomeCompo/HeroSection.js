import React from "react";
import { motion } from "framer-motion";

// Define animation variants
const containerVariants = {
  visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  hidden: { opacity: 0 },
};

const itemVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const HeroSection = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-gray-600 body-font pt-4 md:pt-8 pb-8 md:pb-12 mt-0 pt-0"
      style={{ marginTop: 0, paddingTop: 0 }}
    >
      <div className="container mx-auto flex px-4 py-4 md:py-8 md:flex-row flex-col items-center">
        <motion.div
          variants={itemVariants}
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1 className="title-font text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 font-medium text-gray-900">
            Experience the Thrill of Cricket
            <br className="hidden lg:inline-block" />
            with CRICKO Organization
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
            Join us for exciting cricket tournaments in various formats. Whether you're a player or a fan, we've got something for everyone. Discover the passion, skill, and excitement of cricket with CRICKO Organization.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex text-white bg-custom-blue border-0 py-2 px-6 text-base md:text-lg focus:outline-none hover:bg-custom-blue/80 rounded"
            >
              Explore Tournaments
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 text-base md:text-lg focus:outline-none hover:bg-gray-200 rounded"
            >
              Register Team
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-full"
        >
          <img
            className="object-cover object-center rounded-lg border border-gray-300"
            alt="Cricket Match"
            src="https://i.pinimg.com/736x/5e/2c/7d/5e2c7d29e4d46c96eef112c26c978735.jpg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;