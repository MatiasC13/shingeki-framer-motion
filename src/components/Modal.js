import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  show: {
    x: "0vw",
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};

const Modal = ({ showModal }) => {
  return (
    <>
      {showModal && (
        <motion.form
          className="form"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <div>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Enter your email</label>
          </div>
          <div>
            <label htmlFor="">Message</label>
            <textarea></textarea>
          </div>
          <Link className="link" to="/">
            <button className="form-button">Submit</button>
          </Link>
        </motion.form>
      )}
    </>
  );
};

export default Modal;
