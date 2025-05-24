import React from "react";
import Milk from "../../assets/images/milk.jpg";
import OurFarm from "../../assets/images/ourFarm.jpg";
import Delivery from "../../assets/images/Delivery.jpg";

const OurServices = () => {
  const serviceDetails = [
    {
      serviceImage: Milk,
      icon: <i className="fa-solid fa-bottle-droplet"></i>,
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="w-10 xs:w-12 md:w-16 aspect-square"
        >
          <path d="M96 0C82.7 0 72 10.7 72 24s10.7 24 24 24c4.4 0 8 3.6 8 8l0 64.9c0 12.2-7.2 23.1-17.2 30.1C53.7 174.1 32 212.5 32 256l0 192c0 35.3 28.7 64 64 64l128 0c35.3 0 64-28.7 64-64l0-192c0-43.5-21.7-81.9-54.8-105c-10-7-17.2-17.9-17.2-30.1L216 56c0-4.4 3.6-8 8-8c13.3 0 24-10.7 24-24s-10.7-24-24-24l-8 0s0 0 0 0s0 0 0 0L104 0s0 0 0 0s0 0 0 0L96 0zm64 382c-26.5 0-48-20.1-48-45c0-16.8 22.1-48.1 36.3-66.4c6-7.8 17.5-7.8 23.5 0C185.9 288.9 208 320.2 208 337c0 24.9-21.5 45-48 45z" />
        </svg>
      ),
      serviceTitle: "Fresh Farm Milk",
      serviceDescription:
        "Enjoy rich, creamy milk delivered to your door every morning. Naturally nutritious, free from additives, and packaged with care to keep its farm-fresh purity intact.",
      bgColor: {
        mdHover: "md:hover:bg-amber-200",
        color: "bg-amber-200",
      },
    },
    {
      serviceImage: OurFarm,
      icon: <i className="fa-solid fa-house-chimney-crack"></i>,
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-10 xs:w-12 md:w-16 aspect-square"
        >
          <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 160.4c0 35.3 28.7 64 64 64l102.3 0-31.3-52.2c-4.1-6.8-2.6-15.5 3.5-20.5L288 368l-60.2-82.8c-10.9-15 8.2-33.5 22.8-22l117.9 92.6c8 6.3 8.2 18.4 .4 24.9L288 448l38.4 64 122.1 0c35.5 0 64.2-28.8 64-64.3l-.7-160.2 32 0z" />
        </svg>
      ),
      serviceTitle: "Experience Our Farm",
      serviceDescription:
        "Step into farm life and see where your dairy journey begins. Explore our barns, meet our gentle cows, and discover how we craft every drop of milk with care, cleanliness, and compassion.",
      bgColor: {
        mdHover: "md:hover:bg-green-200",
        color: "bg-green-200",
      },
    },
    {
      serviceImage: Delivery,
      icon: <i className="fa-solid fa-truck-fast"></i>,
      iconSvg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          className="w-10 xs:w-12 md:w-16 aspect-square"
        >
          <path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
        </svg>
      ),
      serviceTitle: " Partnering With Locals",
      serviceDescription:
        "We partner with cafés, shops, and local kitchens to deliver fresh, high-quality dairy. Made daily, delivered reliably—fueling your menu with real farm goodness.",
      bgColor: {
        mdHover: "md:hover:bg-blue-200",
        color: "bg-blue-200",
      },
    },
  ];

  return (
    <>
      <div className="md:my-10">
        <div className="flex flex-col md:flex-row justify-between md:h-[480px] md:items-end gap-6 md:gap-3 ">
          {serviceDetails.map((service, index) => {
            return (
              <>
                <div
                  key={index}
                  className={`p-6 rounded-lg md:w-1/3 transition-all transform duration-700 ease-in-out cursor-default select-none self-start ${
                    index === 1 ? "" : "md:pt-20"
                  } ${service?.bgColor?.mdHover} ${
                    service?.bgColor?.color
                  } md:bg-transparent`}
                >
                  <div className="flex items-center flex-col xs:flex-row xs:mb-6 md:flex-col gap-6">
                    <p className="inline-block p-3 md:p-10 ring-2 rounded-tr-[50%] rounded-bl-[50%]">
                      {service?.iconSvg}
                    </p>
                    <h1 className="text-2xl font-medium mb-2 self-start xs:self-center text-left md:text-center">
                      {service?.serviceTitle}
                    </h1>
                  </div>
                  <p className="text-left md:text-center">
                    {service?.serviceDescription}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default OurServices;
