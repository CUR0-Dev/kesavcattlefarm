import React from "react";
import FadeIn from "../FramerAnimation/FadeIn";
import { motion } from "framer-motion";
import Img1 from "../../assets/images/img1.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img3 from "../../assets/images/img5.jpg";
import Img4 from "../../assets/images/img4.jpg";

import OurServices from "./OurServices";
import OurProductHomePage from "./OurProducts";

const Home = () => {
  const animationDelay = 0.8;

  return (
    <>
      <div className="w-full h-[calc(100dvh-3.5rem)] md:h-[calc(100dvh-4rem)] landscape:h-[100dvh] flex items-center flex-col justify-center gap-y-10 ">
        <div className="text-center">
          <FadeIn y={-20} delay={animationDelay}>
            <h1 className="text-4xl lg:text-6xl md:text-5xl font-clash_display text-zinc-950 font-medium mb-4">
              Welcome to <br />
              <FadeIn delay={animationDelay + 0.2}>
                <span>Kesav Cattle Farm</span>
              </FadeIn>
            </h1>
          </FadeIn>
          <FadeIn delay={animationDelay + 0.3}>
            <p className="text-lg md:text-xl text-zinc-600">
              Your one-stop destination for all your dairy needs.
            </p>
          </FadeIn>
        </div>
        <FadeIn y={20} delay={animationDelay + 0.5}>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <motion.img
              initial={{ rotate: 0 }}
              animate={{ rotate: -10 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: animationDelay + 0.8,
              }}
              src={Img1}
              alt="Farm"
              className="home-page-imgStyle "
            />
            <img
              src={Img2}
              alt="Farm"
              className="home-page-imgStyle shadow-lg"
            />
            <img
              src={Img3}
              alt="Farm"
              className="home-page-imgStyle shadow-lg"
            />
            <motion.img
              initial={{ rotate: 0 }}
              animate={{ rotate: 10 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: animationDelay + 0.8,
              }}
              src={Img4}
              alt="Farm"
              className="home-page-imgStyle "
            />
          </div>
        </FadeIn>
      </div>

      {/* Our Services */}
      <div className="w-full flex items-center flex-col justify-start my-14">
        <FadeIn y={20} delay={animationDelay - 0.4} animationType="whileInView">
          <h1 className="text-4xl md:text-5xl font-clash_display text-zinc-950 font-medium mb-6 text-center">
            Our Services
          </h1>
        </FadeIn>

        <FadeIn
          y={20}
          delay={animationDelay - 0.2}
          amount={0.3}
          animationType="whileInView"
        >
          <OurServices />
        </FadeIn>
      </div>

      {/* Our Products */}
      {/* <div className="w-full flex items-center flex-col justify-start my-14">
        <FadeIn y={20} delay={animationDelay - 0.4} animationType="whileInView">
          <h1 className="text-4xl md:text-5xl font-clash_display text-zinc-950 font-medium mb-6 text-center">
            Our Products
          </h1>
        </FadeIn>

        <FadeIn
          y={20}
          delay={animationDelay - 0.2}
          amount={0.3}
          animationType="whileInView"
        >
          <OurProductHomePage />
        </FadeIn>
      </div> */}
    </>
  );
};

export default Home;
