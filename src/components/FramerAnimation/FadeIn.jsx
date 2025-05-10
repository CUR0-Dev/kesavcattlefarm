// FadeIn.js
import { motion } from "framer-motion";
import React, { useLayoutEffect, useState } from "react";
import { set } from "react-hook-form";

const fadeInVariants = {
  hidden: (y) => ({ opacity: 0, y }),
  visible: { opacity: 1, y: 0 },
};

const FadeIn = ({
  children,
  delay = 0,
  y = 20,
  viewportOnce = true,
  amount = 0.2,
  animationType = "animate", // "animate" or "whileInView"
  useVariants = true,
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useLayoutEffect(() => {
    // Trigger animation after initial layout
    setTimeout(() => {
      requestAnimationFrame(() => setHasMounted(true));
    }, 400);
    // requestAnimationFrame(() => setHasMounted(true));
  }, []);

  const shouldAnimate = animationType === "animate" && hasMounted;

  return (
    <motion.div
      custom={y}
      variants={useVariants ? fadeInVariants : undefined}
      initial={useVariants ? "hidden" : { opacity: 0, y }}
      animate={shouldAnimate ? "visible" : undefined}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={
        animationType === "whileInView"
          ? { once: viewportOnce, amount }
          : undefined
      }
      className="will-change-auto"
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
