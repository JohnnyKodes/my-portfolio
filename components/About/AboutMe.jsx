import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col sm:w-[900px] max-w-full gap-6 mt-10 mb-14 text-justify m-auto">
      <h2 className="text-4xl font-bold">About</h2>
      <p className="text-2xl">
        Hey there, I'm Johnny. Let me tell you a bit about myself.
      </p>
      <p className="text-lg text-zinc-400">
        I fell in love with coding at a young age, but it wasn't until I started
        tinkering with various languages such as C++, javascript, and python
        that I truly became enamored with the possibilities of software
        development. From there, I've been on a quest to push the boundaries of
        what's possible with code.
      </p>
      <p className="text-lg text-zinc-400">
        As a software engineer, I've learned how valuable teamwork,
        communication, and attention to detail really are in delivering
        high-quality software products. Working collaboratively with my
        colleagues has allowed me to grow as a developer, and I'm grateful for
        the mentorship and guidance I've received.
      </p>
      <p className="text-lg text-zinc-400">
        My goal is to make a lasting impact on the software engineering world. I
        believe that software has the potential to transform industries and
        improve people's lives, and I'm excited to be a part of that journey.
        I'm constantly exploring new technologies, learning new programming
        languages, and experimenting with new approaches to software
        development.
      </p>
    </div>
  );
};

export default AboutMe;
