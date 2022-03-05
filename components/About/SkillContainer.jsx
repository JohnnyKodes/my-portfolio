import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SkillContainer = ({ name, image }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col">
      <div className="w-[100px] h-[100px] rounded-full bg-zinc-900 bg-opacity-40 backdrop-blur p-4 flex items-center justify-center">
        <img src={image} alt="" className="h-auto w-auto" />
      </div>
      <p className="text-center text-sm text-zinc-400">{name}</p>
    </motion.div>
  );
};

export default SkillContainer;
