import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experiences</h2>
      <div className="container ">
        <div className="row">
          <div className="col-md-6">
          <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>BOOTSTRAP </h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JAVASCRIPT</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>REACT</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
          </div>
          <div className="col-md-6">
          <div className="backend">
        <h3>Back Development</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>NODE JS</h4>
            <small className="text-light">Experienced</small>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>MONGO DB</h4>
            <small className="text-light">Basics</small>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>PYTHON BASICS</h4>
            <small className="text-light">Basics</small>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill />
            <h4>MySQL</h4>
            <small className="text-light">Basics</small>
          </article>

        </div>
          </div>
        </div>
       </div>
        
      </div>
    </section>
  );
};

export default Experience;
