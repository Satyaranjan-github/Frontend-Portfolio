import { useEffect, useRef } from "react";
import Typed from "typed.js";
import pdf from "../pdf/resume.pdf.pdf";
import hero from "./Data/hero.json";

const Home = () => {
  const typedRef = useRef();
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Hii , I am Satya . Welcome to my Profile.",
        "I am a Frontend Developer.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home d-flex flex-wrap justify-content-between align-items-center">
        <div
          className="left p-4 rounded col-md-6 col-12 text-md-start"
          data-aos="fade-right"
          data-aos-offset="100"
        >
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="resume.pdf" className="btn text-white fs-5">
            Download Resume
          </a>
        </div>
        <div
          className="right d-flex justify-content-center align-items-center col-md-6 col-12 mt-4 mt-md-0"
          data-aos="fade-left"
          data-aos-offset="100"
        >
          <div className="img text-center">
            <img
              src={`/assets/${hero.imgSrc}`}
              alt="profile image"
              className="rounded-circle img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
