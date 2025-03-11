import skills from "./Data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="container skills " id="skill">
        {/* Section Heading */}
        <h1 data-aos="fade-down-right" data-aos-offset="100">Skills</h1>

        {/* Skills Grid */}
        <div className="items p-3 d-flex gap-4 justify-content-center align-items-center flex-wrap">
          {skills.map((data) => (
            <div
              className="item p-3 rounded text-center d-flex flex-column align-items-center"
              key={data.title}
              data-aos="zoom-in-up"
              data-aos-offset="100"
            >
              <img src={`/assets/${data.imageSrc}`} alt={data.title} className="img-fluid rounded" />
              <h3 className="mt-3">{data.title}</h3>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Skills;
