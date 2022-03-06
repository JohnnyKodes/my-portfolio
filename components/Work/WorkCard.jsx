import React from "react";
import { urlFor } from "../../client";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

const WorkCard = ({ work, activeFilter }) => {
  console.log(work.features[0]);

  return (
    <div className="w-full flex md:flex-row flex-col h-auto md:max-h-[320px] gap-5 p-2 rounded bg-zinc-800 backdrop-blur bg-opacity-40">
      <div className="relative cursor-pointer">
        <img
          src={urlFor(work.imgUrl)}
          alt=""
          className="h-full w-auto object-cover"
        />

        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
            staggerChildren: 0.5,
          }}
          className="workHover flex items-center justify-center gap-4"
        >
          <a href={work.projectLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="text-4xl"
            >
              <AiFillEye />
            </motion.div>
          </a>
          <a href={work.codeLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="text-4xl"
            >
              <AiFillGithub />
            </motion.div>
          </a>
        </motion.div>
      </div>
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <div className="flex gap-2 items-center md:justify-start justify-center mb-2">
            <img src={urlFor(work.icon)} alt="" className="h-10 w-auto" />
            <h3 className="text-center text-lg font-bold">{work.title}</h3>
          </div>
          <div className="flex flex-wrap md:justify-start justify-center gap-2">
            {work.tags.map((item, index) => (
              <div
                className={`${
                  activeFilter === item ? "bg-gradient" : "bg-zinc-700"
                } w-[74px] h-[32px] flex items-center justify-center rounded-full`}
              >
                <div className="h-[28px] w-[70px] bg-black rounded-full text-xs flex items-center justify-center">
                  {item}
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-full">
            <ul className="mt-4">
              <p className="text-sm">Features:</p>
              {work.features.map((item) => (
                <li className="text-xs text-zinc-400">- {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 mt-4">
          <div>
            <a
              href={work.projectLink}
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center font-bold"
            >
              <AiFillEye /> Site
            </a>
          </div>
          <div>
            <a
              href={work.projectLink}
              target="_blank"
              rel="noreferrer"
              className="flex gap-2 items-center font-bold"
            >
              <AiFillGithub /> Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
