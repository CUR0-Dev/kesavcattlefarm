import React from "react";
import FadeIn from "./FramerAnimation/FadeIn";
import { motion } from "framer-motion";
import Img1 from "../assets/images/img1.jpg";
import Img2 from "../assets/images/img2.jpg";
import Img3 from "../assets/images/img5.jpg";
import Img4 from "../assets/images/img4.jpg";

const Home = () => {
  return (
    <>
      <div className="w-full h-[calc(100dvh-3.5rem)] md:h-[calc(100dvh-4rem)] landscape:h-[100dvh] flex items-center flex-col justify-center gap-y-10 ">
        <div className="text-center">
          <FadeIn y={-20} delay={0.4}>
            <h1 className="text-3xl md:text-5xl font-clash_display text-zinc-950 font-medium mb-4">
              Welcome to <br />
              <FadeIn delay={0.6}>
                <span>Kesav Cattle Farm</span>
              </FadeIn>
            </h1>
          </FadeIn>
          <FadeIn delay={0.7}>
            <p className="text-lg md:text-xl text-zinc-600">
              Your one-stop destination for all your dairy needs.
            </p>
          </FadeIn>
        </div>
        <FadeIn y={20} delay={0.9}>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <motion.img
              initial={{ rotate: 0 }}
              animate={{ rotate: -10 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 1.1,
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
              animate={{ rotate: 15 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 1.1,
              }}
              src={Img4}
              alt="Farm"
              className="home-page-imgStyle "
            />
          </div>
        </FadeIn>
      </div>

      <div className="w-full h-[calc(100dvh-3.5rem)] md:h-[calc(100dvh-4rem)] flex items-center flex-col justify-start gap-y-10">
        <FadeIn y={20} delay={0.5} animationType="whileInView">
          <h1 className="text-3xl md:text-5xl font-clash_display text-zinc-950 font-medium mb-4 text-center">
            Our Products
          </h1>
          <div></div>
        </FadeIn>
      </div>
    </>
  );
};

export default Home;
