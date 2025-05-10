import React, { useState } from "react";
import FadeIn from "./FramerAnimation/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";

const Contact = () => {
  // const []
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange", // 👈 enables real-time validation
  });

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    message: "",
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  //   setFormData({
  //     fullname: "",
  //     email: "",
  //     phoneNumber: "",
  //     companyName: "",
  //     message: "",
  //   });
  //   alert("Form submitted successfully!");
  // };

  const formValidation = (id, value) => {
    if (id === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        return "Invalid email format";
      }
    } else if (id === "phoneNumber") {
      const phonePattern = /^\+?\d{10}$/;
      if (!phonePattern.test(value)) {
        return "Invalid phone number format";
      }
    } else return "No validation required";
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(formValidation(id, value));
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [id]: value,
    // }));
  };

  return (
    <>
      <div className="w-full md:h-[calc(100dvh-4rem)] landscape-maxh600:h-full landscape-maxh600:my-10 flex flex-col md:flex-row items-start md:items-center justify-center gap-y-6 md:gap-x-8 min-w-0">
        <div className="pt-20 md:pt-0 w-full md:w-1/2">
          <FadeIn delay={0.4}>
            <h1 className="text-4xl md:text-4xl font-clash_display text-zinc-950 font-medium mb-3 text-left">
              Get in touch with us
            </h1>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-zinc-600 mb-4 text-left">
                We would love to hear from you! Please reach out to us at:
              </p>
            </FadeIn>
          </FadeIn>
          {/* Divider */}
          <FadeIn delay={0.4}>
            <div className="w-[95%] h-[1.6px] bg-zinc-700/50 mx-auto my-[2rem]"></div>
          </FadeIn>
          {/* Contact Info */}
          {/* Mail us */}
          <div className="text-lg md:text-xl text-zinc-600 mb-4 text-left">
            <FadeIn delay={0.4}>
              <h5 className="font-semibold">Email us</h5>
              <FadeIn delay={0.2}>
                <p className="text-zinc-900 font-semibold">
                  <a
                    href="mailto:info@kesavcattlefarm.com"
                    rel="noopener noreferrer"
                    className="text-zinc-900 font-semibold hover:text-zinc-600 transform transition-all duration-300"
                  >
                    info@kesavcattlefarm.com
                  </a>
                </p>
              </FadeIn>
            </FadeIn>
          </div>
          <div className="text-lg md:text-xl text-zinc-600 mb-4 text-left">
            <FadeIn delay={0.4}>
              <h5 className="font-semibold">Call us</h5>
              <FadeIn delay={0.2}>
                <p className="text-zinc-900 font-semibold">
                  <a
                    href="tel:+919876543210"
                    rel="noopener noreferrer"
                    className="text-zinc-900 font-semibold hover:text-zinc-600  transform transition-all duration-300"
                  >
                    (+91) 9876543210
                  </a>
                </p>
              </FadeIn>
            </FadeIn>
          </div>
          <div className="text-lg md:text-xl text-zinc-600 mb-4 text-left">
            <FadeIn delay={0.4}>
              <h5 className="font-semibold">Follow us on</h5>
              <FadeIn delay={0.2}>
                <p className="text-zinc-900 font-semibold mt-2  text-3xl">
                  <a
                    href="https://www.instagram.com/kesavcattlefarm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-50 font-semibold bg-zinc-900 rounded-full px-[10px] py-[5px] hover:bg-zinc-300 hover:text-zinc-900 hover:shadow-lg transform transition-all duration-300"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </p>
              </FadeIn>
            </FadeIn>
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{
            opacity: 0,
            ...(window.innerWidth < 768 ? { y: 30 } : { x: 30 }),
          }}
          animate={{
            opacity: 1,
            ...(window.innerWidth < 768 ? { y: 0 } : { x: 0 }),
          }}
          layout
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.6,
          }}
          className="bg-zinc-900 w-full md:w-1/2 rounded-2xl p-6"
        >
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Full Name */}
            <div className="text-left mb-3">
              <label htmlFor="fullname" className="contact-page-lable">
                FULL NAME
              </label>
              <input
                id="fullname"
                className="contact-page-input"
                placeholder="eg. Full Name"
                {...register("fullname", {
                  required: "Full name is required",
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Only alphabets are allowed",
                  },
                })}
              />
              {errors.fullname && <ErrorMessage errors={errors.fullname} />}
            </div>
            {/* Email */}
            <div className="text-left mb-3">
              <label htmlFor="email" className="contact-page-lable">
                EMAIL ADDRESS
              </label>
              <input
                id="email"
                className="contact-page-input"
                placeholder="eg. johndoe@mail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <ErrorMessage errors={errors.email} />}
            </div>
            {/* Phone Number */}
            <div className="text-left mb-3">
              <label htmlFor="phoneNumber" className="contact-page-lable">
                PHONE NUMBER
              </label>
              <input
                id="phoneNumber"
                className="contact-page-input"
                placeholder="eg. 9876543210"
                maxLength={10}
                type="tel"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+?\d{10}$/,
                    message: "Phone number must be 10 digits",
                  },
                })}
              />
              {errors.phoneNumber && (
                <ErrorMessage errors={errors.phoneNumber} />
              )}
            </div>
            {/* Company Name */}
            <div className="text-left mb-3">
              <label htmlFor="companyName" className="contact-page-lable">
                COMPANY NAME
              </label>
              <input
                id="companyName"
                className="contact-page-input"
                placeholder="eg. Kesav Cattle Farm"
                {...register("companyName", {
                  required: "Company name is required",
                  pattern: {
                    value: /^[A-Za-z0-9.\s]+$/,
                    message: "No special characters allowed except '.'",
                  },
                  maxLength: {
                    value: 50,
                    message: "Company name must not exceed 50 characters",
                  },
                })}
              />
              {errors.companyName && (
                <ErrorMessage errors={errors.companyName} />
              )}
            </div>
            {/* Message */}
            <div className="text-left mb-3">
              <label htmlFor="message" className="contact-page-lable">
                Message
              </label>
              <textarea
                id="message"
                className="contact-page-input"
                placeholder="eg. Inquiry about cattle"
                {...register("message", {
                  required: "Message is required",
                  pattern: {
                    value: /^[A-Za-z0-9.\s]+$/,
                    message: "No special characters allowed except '.'",
                  },
                  maxLength: {
                    value: 300,
                    message: "Company name must not exceed 300 characters",
                  },
                })}
              />
              {errors.message && <ErrorMessage errors={errors.message} />}
            </div>

            <button
              type="submit"
              className="bg-zinc-50 font-semibold align-bottom text-zinc-900 rounded-md p-3 w-[60%] hover:bg-zinc-300 hover:cursor-pointer transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;

const ErrorMessage = ({ errors }) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-red-500 inherit text-sm"
    >
      {errors.message}
    </motion.p>
  );
};
