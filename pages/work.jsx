import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { client } from "../client";
import WorkCard from "../components/Work/WorkCard";

const workTags = [
  "All",
  "Next.js",
  "React.js",
  "Web App",
  "Mobile App",
  "UI/UX",
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  useEffect(() => {
    const query = `*[_type == "projects"]`;

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

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
        <div className=" min-h-screen sm:w-[900px] w-full sm:px-10 p-3 overflow-hidden flex flex-col gap-5 pt-14">
          <div className="w-full">
            <motion.h2
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.4 }}
              className="sm:text-7xl text-6xl font-bold"
            >
              My <strong className="font-bold textGradient">Recent Work</strong>{" "}
            </motion.h2>
            <motion.p
              whileInView={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-zinc-500 text-sm"
            >
              or dishes, I'm sticking with the chef thing
            </motion.p>
          </div>
          <div className="w-full flex items-center p-2 h-[45px] overflow-x-auto overflow-y-hidden">
            <div className="flex gap-3 z-40">
              {workTags.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  key={item + index}
                  onClick={() => handleWorkFilter(item)}
                  className={`${
                    activeFilter === item ? "bg-gradient" : "bg-zinc-700"
                  } flex items-center justify-center rounded-full cursor-pointer`}
                >
                  <div className="h-[28px] w-[80px] m-[2px] bg-black rounded-full text-sm flex items-center justify-center">
                    {item}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            animate={animateCard}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="w-full flex flex-col gap-5"
          >
            {filterWork.map((work, index) => (
              <WorkCard work={work} key={index} activeFilter={activeFilter} />
            ))}
          </motion.div>
          <div className="flex items-center justify-center"></div>
        </div>
      </main>
    </>
  );
};

export default Work;
