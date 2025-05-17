import React, { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  const [showIcon, setShowIcon] = useState(false);

  useLayoutEffect(() => {
    // Scroll to top on route change (with smooth behavior)
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowIcon(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showIcon && (
      <button
        onClick={scrollToTop}
        title="Scroll to top"
        className="fixed right-[5%] bottom-[5%] z-50  "
      >
        <i className="fa-solid fa-arrow-up fa-bounce text-2xl p-3 mix-blend-color rounded-full text-zinc-600 cursor-pointer hover:bg-zinc-600 hover:text-zinc-50 hover:shadow-lg transition-all duration-300" />
      </button>
    )
  );
}

export default ScrollToTop;
