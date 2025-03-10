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
      <div className="container home d-flex justify-content-between align-items-center 
      ">
        <div className="left p-5 rounded "
        data-aos="fade-right"
      data-aos-offset="100"
       >
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="resume.pdf" className="btn text-white fs-5 ">
            Download Resume
          </a>
        </div>
        <div className="right d-flex justify-content-center align-items-center"
          data-aos="fade-left"
          data-aos-offset="100">
          <div className="img">
            <img
              src={`/assets/${hero.imgSrc}`}
              alt="profile image"
              className="rounded-circle"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
