import React from "react";
import Skills from "../Skills";

const Resume = () => {
  return (
    <section id="resume" className="card">
      <h2>Resume</h2>
      <div className="resume card-body">
        <div className="skills row">
          <h4>Technologies</h4>
<div className="d-flex justify-content-center mx">
          <ul className= "list-group mx-2 p-2">
            <li className="list-group-item"> React</li>
            <li className="list-group-item"> MongoDB</li>
            <li className="list-group-item"> Mongoose</li>
            <li className="list-group-item"> Sequelize</li>
            <li className="list-group-item"> GraphQL</li>
            <li className="list-group-item"> Express</li>
            <li className="list-group-item"> Javascript</li>
            <li className="list-group-item">CSS/HTML</li>
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item"> RESTful APIs</li>
          </ul>
          </div>
          {/* <Skills/> */}
        </div>
        <div className="resume-link">
          <a href="https://docs.google.com/document/d/11nFrE6ACFjBQl38hD2Lnj5uBUEtt46An/edit?usp=sharing&ouid=103187954184553838535&rtpof=true&sd=true">
            Resume Link
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
