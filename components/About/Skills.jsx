import React, { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import SkillContainer from "./SkillContainer";

const Skills = () => {
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [other, setOther] = useState([]);

  useEffect(() => {
    let frontendQuery = '*[_type == "skills" && type == "frontend"]';
    let backendQuery = '*[_type == "skills" && type == "backend"]';
    let otherQuery = '*[_type == "skills" && type == "other"]';

    client.fetch(frontendQuery).then((data) => setFrontend(data));
    client.fetch(backendQuery).then((data) => setBackend(data));
    client.fetch(otherQuery).then((data) => setOther(data));
  }, []);

  return (
    <div className="flex flex-col sm:w-[900px] max-w-full gap-8 text-justify m-auto">
      <h2 className="text-4xl font-bold">Skills</h2>
      <div className="flex flex-wrap justify-between gap-8 w-full sm:mb-10 mb-0">
        <div className="flex flex-col">
          <h2 className="text-3xl mb-2">Frontend</h2>
          <div className="grid sm:grid-cols-2 grid-cols-3 grid-rows-2 sm:gap-4 gap-8">
            {frontend.map((skill) => (
              <SkillContainer name={skill.name} image={urlFor(skill?.icon)} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl mb-2">Backend</h2>
          <div className="grid sm:grid-cols-2 grid-cols-3 grid-rows-2 sm:gap-4 gap-8">
            {backend.map((skill) => (
              <SkillContainer name={skill.name} image={urlFor(skill.icon)} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-3xl mb-2">Other</h2>
          <div className="grid sm:grid-cols-2 grid-cols-3 grid-rows-2 sm:gap-4 gap-8">
            {other.map((skill) => (
              <SkillContainer name={skill.name} image={urlFor(skill.icon)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
