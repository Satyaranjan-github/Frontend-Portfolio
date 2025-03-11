import projects from "./Data/projects.json";

const Project = () => {
  return (
    <>
      <div className="container project my-3" id="project">
        <h1 data-aos="fade-down-right" data-aos-offset="100">
          Projects
        </h1>
        <div className="items row d-flex justify-content-center align-items-center m-auto">
          {projects.map((data) => (
            <div
              key={data.id}
              className="my-3 col-12 col-sm-6 col-md-4 col-lg-3 mx-auto"
              data-aos="zoom-in-up"
              data-aos-offset="100"
            >
              <div className="card text-light" style={{ width: "100%" }}>
                <div className="img d-flex justify-content-center align-items-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top img-fluid"
                    alt="project image"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "10px",
                      border: "2px solid black",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title fs-3">{data.title}</h5>
                  <p className="card-text fs-5">{data.description}</p>
                  <a href={data.demo} className="btn btn-primary mx-3">
                    Demo
                  </a>
                  <a href={data.source} className="btn btn-danger">
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Project;
