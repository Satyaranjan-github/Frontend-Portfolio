import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container d-flex justify-content-between h4 fw-bold nav_bar p-3 
      " data-aos="fade-down"
      data-aos-offset="100">
        <div className="left fs-1">Satya</div>
        <div className="right d-flex gap-5">
          <a href="" className="nav_items">Home</a>
          <a href="#skill" className="nav_items">Skill</a>
          <a href="#project" className="nav_items">Projects</a>
          <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
