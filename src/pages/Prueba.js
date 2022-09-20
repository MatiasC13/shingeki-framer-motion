import React from "react";
import { motion } from "framer-motion";

const pVariants = {
  hidden: {
    y: "100vh",
  },
  show: {
    y: "0",
    transition: {
      duration: 3,
      ease: "easeIn",
    },
  },
};

const Prueba = () => {
  return (
    <>
      <motion.h1
        initial={{ x: "200vw" }}
        animate={{ x: "0", transition: { duration: 1, ease: "easeInOut" } }}
      >
        Prueba animación h1
      </motion.h1>
      <motion.p variants={pVariants} initial="hidden" animate="show">
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut
      </motion.p>
    </>
  );
};

export default Prueba;
