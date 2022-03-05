import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col sm:w-[900px] max-w-full gap-6 mt-10 mb-14 text-justify m-auto">
      <h2 className="text-4xl font-bold">About</h2>
      <p className="text-2xl">
        Hey, I'm Johnny. I'm a fresh computer science graduate eager to leave my
        mark on the world of tech.
      </p>
      <p className="text-lg text-zinc-400">
        I've got a lot of nicknames: a software engineer, front-end developer,
        UI/UX designer, amateur weight lifter, basketball prodigy, and my mom
        calls me handsome.
      </p>
      <p className="text-lg text-zinc-400">
        Defining myself to the work I've done is never an action I follow. I
        only define myself with the work I want to do. Skills can be taught but
        personality is inherent. I strive to keep on learning, always be ahead
        of the curve especially in the exponentially fast world of tech.
      </p>
      <p className="text-lg text-zinc-400">
        My boundless energy fuels me to follow numerous hobbies, interests, and
        topics of study. I'm a fast learner constantly pushing myself to gain
        new skills, start and juggle different projects while keeping my cool
        through all the work.
      </p>
    </div>
  );
};

export default AboutMe;
