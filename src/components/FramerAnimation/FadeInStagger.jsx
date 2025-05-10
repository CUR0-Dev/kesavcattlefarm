// FadeInStagger.js
import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const FadeInStagger = ({ children }) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

export default FadeInStagger;
