import { motion } from "framer-motion";
import React from "react";

const FadeIn = ({
  children,
  delay = 0.4,
  y = 20,
  viewportOnce = true,
  amount = 0.2,
  animationType = "animate", // "animate" or "whileInView"
}) => {
  const initial = { opacity: 0, y };
  const final = { opacity: 1, y: 0 };

  // Choose between 'animate' and 'whileInView' based animation
  const animationProps =
    animationType === "animate"
      ? { animate: final }
      : { whileInView: final, viewport: { once: viewportOnce, amount } };

  return (
    <motion.div
      initial={initial}
      {...animationProps}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="will-change-auto w-full"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
