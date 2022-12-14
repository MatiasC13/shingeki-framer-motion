import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Colosal from "../components/Colosal";
import Logo from "../components/Logo";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  exit: {
    y: "-100vh",
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home-container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Colosal />
      <Logo />
      <motion.h1
        className="arrow-down"
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
        <Link className="link" to={"/about"}>
          &#8659;
        </Link>
      </motion.h1>
    </motion.div>
  );
};

export default Home;
