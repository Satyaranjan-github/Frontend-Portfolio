import React from "react";
import skills from "./Data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills" id="skill">
        <h1 data-aos="fade-down-right"
        data-aos-offset="100">Skills</h1>
        <div className="items p-3 d-flex gap-5 justify-content-center align-items-center flex-wrap"
       >
          {skills.map((data) => (
            <>
              <div className="item p-3 rounded" key={data.title}
               data-aos="zoom-in-up"
               data-aos-offset="100">
                <img src={`/assets/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
