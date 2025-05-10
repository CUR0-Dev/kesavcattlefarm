import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, easeOut } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Contact", path: "/Contact" },
];

// Animation Variants
const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.15,
      delayChildren: 0.1,
      ease: easeOut,
    },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.2, ease: easeOut } },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        event.target.id !== "menu-toggle-button"
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <motion.nav
      className="h-14 md:h-16 shadow-sm z-50 relative"
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
    >
      <div className="base-container w-full h-full flex items-center justify-between gap-3 px-4">
        <div className="text-xl md:text-2xl font-clash_display text-zinc-950 font-medium">
          Kesav Farm
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link to={item.path} className="hover:text-zinc-500">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          id="menu-toggle-button"
          className="md:hidden hover:cursor-pointer hover:text-zinc-500"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-14 left-0 right-0 mx-auto p-6 md:hidden z-30 overflow-hidden"
          >
            <motion.ul
              variants={menuVariants}
              className="bg-zinc-800 rounded-3xl text-zinc-100 text-xl flex flex-col gap-6 items-center py-6 shadow-xl"
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  variants={itemVariants}
                  onClick={handleMenuToggle}
                >
                  <Link to={item.path} className="hover:text-zinc-400">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
