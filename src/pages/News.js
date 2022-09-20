import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Modal from "../components/Modal";

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

const News = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      className="news-container"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Recibir Info?</h1>
      <div>
        <button className="news-button" onClick={() => setShowModal(true)}>
          Deseo saber más
        </button>
        <Link className="link" to="/">
          <button className="news-button">No, ir a la home</button>
        </Link>
      </div>
      <Modal showModal={showModal} />
    </motion.div>
  );
};

export default News;
