import React, { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import SkillContainer from "./SkillContainer";

const Skills = () => {
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [other, setOther] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    let frontendQuery = '*[_type == "skills" && type == "frontend"]';
    let backendQuery = '*[_type == "skills" && type == "backend"]';
    let otherQuery = '*[_type == "skills" && type == "other"]';
    let query = `*[_type == "skills"]`;

    client.fetch(frontendQuery).then((data) => setFrontend(data));
    client.fetch(backendQuery).then((data) => setBackend(data));
    client.fetch(otherQuery).then((data) => setOther(data));
    client.fetch(query).then((data) => setSkills(data));
  }, []);

  return (
    <div className="flex flex-col sm:w-[900px] max-w-full gap-8 text-justify m-auto">
      <h2 className="text-4xl font-bold">Skills</h2>
      <div className="flex flex-wrap justify-between gap-8 w-full sm:mb-10 mb-0">
        <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 w-full gap-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="m-auto">
              <SkillContainer name={skill.name} image={urlFor(skill?.icon)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
