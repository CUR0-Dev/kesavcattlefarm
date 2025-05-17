// FadeInStagger.js
import { motion } from "framer-motion";
import React from "react";

export const childVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FadeInStagger = ({
  children,
  viewportOnce = true,
  amount = 0.6,
  delay = 0.4,
}) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: viewportOnce, amount }}
      layout
    >
      {children}
    </motion.div>
  );
};

export default FadeInStagger;
