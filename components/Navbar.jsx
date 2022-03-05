import { useState } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const navLinks = ["home", "about", "work", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-fit fixed top-0 z-40">
      <AnimatePresence className="p-0 m-0">
        {isOpen && (
          <div className="h-screen z-50 right-0 absolute sm:w-fit w-full flex">
            <motion.div
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{
                x: 500,
              }}
              transition={{ type: "tween", delay: 0.1, duration: 0.3 }}
              className="h-full w-full bg-zinc-800 bg-opacity-30 flex flex-col p-5 right-0 m-0 backdrop-blur"
            >
              <div className="w-full h-auto flex items-center justify-end">
                <div className="icon" onClick={() => setIsOpen(!isOpen)}>
                  <AiOutlineClose className="text-5xl" />
                </div>
              </div>
              <motion.div className="w-full h-full flex flex-col items-center justify-evenly px-20">
                {navLinks.map((link) => (
                  <div className="hover:textGradient font-bold text-3xl">
                    <Link
                      href={`/${link === "home" ? "" : link}`}
                      key={link}
                      className=""
                      onClick={() => setIsOpen(false)}
                    >
                      {link.toUpperCase()}
                    </Link>
                  </div>
                ))}
                <a
                  href="/JohnnyKaram-CV.pdf"
                  download
                  className="hover:textGradient font-bold text-4xl"
                  onClick={() => setIsOpen(false)}
                >
                  CV
                </a>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="mt-4 bg-transparent px-4 bg-opacity-30">
        <motion.div
          whileInView={{ y: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 0.4 }}
          className="w-full h-full flex justify-end"
        >
          <div className="icon" onClick={() => setIsOpen(!isOpen)}>
            <HiMenu className="text-6xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
