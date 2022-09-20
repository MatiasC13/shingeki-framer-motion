import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Titan from "../components/Titan";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "50vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="about-container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>About</h1>
      <div className="about-description">
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercise eu fugiat null null. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud
        </p>
        <Titan />
        <motion.h1
          initial={{ y: "-10" }}
          animate={{
            y: 10,
          }}
          transition={{
            duration: 1,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Link className="link" to={"/news"}>
            &#8659;
          </Link>
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default About;
