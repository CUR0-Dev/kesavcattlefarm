import React from "react";
import FadeIn from "./FramerAnimation/FadeIn";
import FadeInStagger, { childVariants } from "./FramerAnimation/FadeInStagger";
import { motion } from "framer-motion";
import Img1 from "../assets/images/img1.jpg";
import Img2 from "../assets/images/img2.jpg";
import Img3 from "../assets/images/img5.jpg";
import Img4 from "../assets/images/img4.jpg";

const Home = () => {
  const animationDelay = 0.8;

  const productDetails = [
    {
      productImage: Img1,
      productName: "Milk",
      ProductDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt atque eligendi explicabo accusantium? Molestiae sit provident ad numquam distinctio vero eveniet, asperiores fugit reiciendis at autem modi. Deleniti, nesciunt ratione.",
    },
    {
      productImage: Img2,
      productName: "Curd",
      ProductDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt atque eligendi explicabo accusantium? Molestiae sit provident ad numquam distinctio vero eveniet, asperiores fugit reiciendis at autem modi. Deleniti, nesciunt ratione.",
    },
    {
      productImage: Img3,
      productName: "Ghee",
      ProductDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt atque eligendi explicabo accusantium? Molestiae sit provident ad numquam distinctio vero eveniet, asperiores fugit reiciendis at autem modi. Deleniti, nesciunt ratione.",
    },
    {
      productImage: Img4,
      productName: "Paneer",
      ProductDescription:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt atque eligendi explicabo accusantium? Molestiae sit provident ad numquam distinctio vero eveniet, asperiores fugit reiciendis at autem modi. Deleniti, nesciunt ratione.",
    },
  ];

  return (
    <>
      <div className="w-full h-[calc(100dvh-3.5rem)] md:h-[calc(100dvh-4rem)] landscape:h-[100dvh] flex items-center flex-col justify-center gap-y-10 ">
        <div className="text-center">
          <FadeIn y={-20} delay={animationDelay}>
            <h1 className="text-3xl md:text-5xl font-clash_display text-zinc-950 font-medium mb-4">
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

      {/* Our Products */}
      <div className="w-full h-full flex items-center flex-col justify-start mb-10">
        <FadeIn y={20} delay={animationDelay - 0.4} animationType="whileInView">
          <h1 className="text-3xl md:text-5xl font-clash_display text-zinc-950 font-medium mb-6 text-center">
            Our Products
          </h1>
        </FadeIn>

        {/* <div className=" w-full flex items-center justify-center gap-6 rounded-3xl">
          <div>
            <div className="w-full flex flex-col gap-2 items-center justify-center">
              {productDetails.map((product, index) => {
                return (
                  <div
                    className="flex even:flex-row-reverse group items-center justify-between gap-14 py-10"
                    key={index}
                  >
                    <motion.img
                      src={product.productImage}
                      alt={product.productName + "image"}
                      className="aspect-video w-3/7 shadow-md shadow-zinc-400 group-odd:rounded-e-full group-even:rounded-l-full"
                    />

                    <div className="w-4/7 text-left">
                      <FadeInStagger>
                        <motion.h1
                          variants={childVariants}
                          className="text-center text-3xl font-semibold mb-4"
                        >
                          {product.productName}
                        </motion.h1>
                        <motion.p variants={childVariants} className="text-md">
                          {product.ProductDescription}
                        </motion.p>
                      </FadeInStagger>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}

        <div className=" w-full flex items-center justify-center gap-6 rounded-3xl">
          <div>
            <div className="w-full flex flex-col gap-2 items-center justify-center">
              {productDetails.map((product, index) => {
                return (
                  <div
                    className="flex even:flex-row-reverse group items-center justify-between gap-14 py-10"
                    key={index}
                  >
                    <motion.img
                      src={product.productImage}
                      alt={product.productName + "image"}
                      className="aspect-video w-3/7 shadow-md shadow-zinc-400 group-odd:rounded-e-full group-even:rounded-l-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
