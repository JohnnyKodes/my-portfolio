import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import AboutMe from "../components/About/AboutMe";
import Skills from "../components/About/Skills";

const About = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Johnny Karam About Me Page" />
        <link rel="icon" href="/JK_Logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen w-full flex justify-center bg-black text-white">
        <Navbar />
        <div className=" min-h-screen sm:w-[900px] w-full sm:px-10 p-3 overflow-hidden flex flex-col gap-5 pt-14">
          <div className="flex items-center justify-center">
            <div className="w-full">
              <motion.h2
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.4 }}
                className="sm:text-7xl text-6xl font-bold "
              >
                I{" "}
                <strong className="font-bold textGradient">
                  Design & Create
                </strong>{" "}
                Software
              </motion.h2>
              <motion.p
                whileInView={{ y: [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="text-zinc-500 text-sm"
              >
                essentially i'm a software chef
              </motion.p>
            </div>
          </div>
          <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <AboutMe />
            <Skills />
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default About;
