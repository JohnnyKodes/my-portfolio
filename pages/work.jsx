import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { AiOutlineAlert } from "react-icons/ai";

const Work = () => {
  return (
    <>
      <Head>
        <title>My Work</title>
        <meta name="description" content="Johnny Karam Portfolio" />
        <meta name="description" content="Johnny Karam Work" />
        <link rel="icon" href="/JK_Logo_Gradient.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen w-full flex justify-center bg-black text-white">
        <Navbar />
        <div className=" min-h-screen w-full sm:px-10 p-3 overflow-hidden">
          <div className="flex items-center justify-center">
            <div className="sm:w-[900px] w-full mt-14">
              <motion.h2
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.4 }}
                className="sm:text-7xl text-6xl font-bold "
              >
                My{" "}
                <strong className="font-bold textGradient">Recent Work</strong>{" "}
              </motion.h2>
              <motion.p
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="text-zinc-500 text-sm"
              >
                or dishes, I'm sticking with the chef thing
              </motion.p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Work;
