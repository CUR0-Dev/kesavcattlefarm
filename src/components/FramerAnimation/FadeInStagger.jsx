import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const childVariants = (y = 20) => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
});

const FadeInStagger = ({ children, y = 20 }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const checkVisibility = () => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        controls.start("visible");
      }
    };

    // Check visibility on mount
    checkVisibility();

    // Add scroll listener
    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility);
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="fade-in-stagger"
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={childVariants(y)}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={childVariants(y)}>{children}</motion.div>
      )}
    </motion.div>
  );
};

export default FadeInStagger;
