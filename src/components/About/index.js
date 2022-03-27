import React from "react";


function About(props) {
return(
<section className="hero">
<div className="hero-container hero-picture">
  <img src="./assets/images/profile.jpg" alt="Profile Picture" />
</div>
<div className="hero-container">
  <a id="AboutMe"></a>
  <h2>About Me</h2>
  <p className="paragraphdesc">
    I am an aspiring web developer who loves to work on exciting and
    challenging projects. I have worked in several fields, with my current focus on contract processing and system
    improvement. 
  </p>
</div>
<div className="herotext">
  <div className="herotexttop">
    <h1>I’m ready to design your website and build it</h1>
    <p className="paragraphdesc">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Temporibus quasi obcaecati rerum magnam qui soluta, minus
      recusandae eaque culpa autem tempore saepe dolorum vero reiciendis
      illum nobis magni ratione blanditiis.
      <br />
    </p>
  </div> 
   <a href="#capabilities" className="buttondown">Check out my capabilities</a> 
</div>
</section>

)
}

export default About;