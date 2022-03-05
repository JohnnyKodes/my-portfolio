import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const HomeSection = () => {
  return (
    <div className="sm:w-[820px] w-full h-screen flex items-center justify-between relative">
      <div className="flex flex-col items-start z-10 left-0 absolute p-2">
        <motion.h1
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="sm:text-10xl text-8xl font-bold"
        >
          Hey,
        </motion.h1>
        <motion.h1
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="sm:text-10xl text-8xl textGradient font-bold"
        >
          I'm
        </motion.h1>
        <motion.h1
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.4, delay: 1.1 }}
          className="sm:text-10xl text-8xl textGradient font-bold"
        >
          Johnny
        </motion.h1>
      </div>
      <motion.div
        whileInView={{ scale: [1.1, 1], opacity: [0.3, 1] }}
        transition={{ duration: 0.8 }}
        className="h-full w-full justify-center items-center flex absolute right-0"
      >
        <Image src={"/Johnnyback.jpg"} layout="fill" objectFit="contain" />
      </motion.div>
    </div>
  );
};

export default HomeSection;
