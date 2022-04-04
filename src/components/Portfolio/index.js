import React, { useState, useEffect } from "react";

function Portfolio() {
  const projectList = [
    "weather-plotter",
    "Pantry",
    "gist",
    "employee-tracker",
    "dinner&amovie",
  ];
  const [project, setProject] = useState([]);
  
  

  // async function getPortfolio() {
  //   const portfolio = [];
  //   let i = 1;
  //   for (const project of projectList) {
  //     const response = await fetch(
  //       `https://api.github.comrepos/zaclark369/${project}`
  //     );
  //     const data = await response.json();
  //     await portfolio.push({
  //       name: data.name,
  //       description: data.description,
  //       gitLink: data.svn_url,
  //       liveLink: data.homepage,
  //       index: index,
  //       topics: data.topics,
  //     });
  //     i++
  //   };
  //   setProject(portfolio);
  // };

  // function handleClick(e) {
  //   const cards = e.target;
  //   cards.scroll({ block: 'center'});
  //   (cards.className.includes("selected-card")) ? setHover('') : setHover(cards.id)
  // }

  return (
    
      <div className="row d-flex justify-content-center m-3">
      <h1>Portfolio</h1>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <a href="https://zaclark369.github.io/run-buddy/" target="_blank">
                <img
                  src="./assets/images/run-buddy-screengrab.png"
                  alt="Completed run buddy website"
                />
                
              </a>
              <div class="boxtext">
                <h3>Run Buddy Landing site</h3>
              <p>
                Built a landing page and privacy policy to match the given mock up for a training company.
                
                Technologies used: HTML, CSS, GIT
              </p>
            </div>
           
            <article class="boxmodel">
              <a
                href="https://zaclark369.github.io/Horiseon-Accessability/"
                target="_blank"
              >
                <img
                  src="./assets/images/horiseon-screen-capture.png"
                  alt="Completed Horiseon Accessability website"
                />
              </a>
              <div class="boxtext">
                <h3>Horeiseon Accessability Landing Page</h3>
              <p>
                HTML based page that we optomized for SEO and accessibility.
                
                Technologies used: HTML, CSS, GIT
              </p>
            </div>
            </article>
            <article class="boxmodel">
                <a href="https://zaclark369.github.io/robot-gladiators/" target="_blank">
                    <img src="./assets/images/robot-gladiator_Screenshot.png" alt="Chrome window showing prompt box that runs game."/>
                </a>
                <div class="boxtext">
                    <h3>Robot Gladiators</h3>
                <p>
                    Simple JavaScript game
                    
                    Technologies used: HTML, JavaScript, GIT
                </p>
            </div>
            </article>
            <article class="boxmodel">
                <a href="https://zaclark369.github.io/Password-Generator/" target="_blank">
                    <img src="./assets/images/password-generator-screengrab.png" alt="Screenshot of password generator home page"/>
                </a>
                <div class="boxtext">
                    <h3>Password Generator</h3>
                <p>
                    Password generator using prompts to user for upper case, lower case, and special characters.
                    
                    Technologies used: HTML, JavaScript, CSS, GIT
                </p>
            </div>
            </article>
            <article class="boxmodel">
              <a href="https://christopherlawn.github.io/team-1-dinner-movie/" target="_blank">
                  <img src="./assets/images/chew-and-view-screengrab.png" alt="Screenshot of chew and view home page"/>
              </a>
              <div class="boxtext">
                  <h3>Chew and View</h3>
              <p>
                  Front end website for linking a zipcode based restaurant and movie together for a potential date night.
                  
                  Technologies used: HTML, JavaScript, CSS, GIT, Materialize Framework
              </p>
          </div>
          </article>
          
            <a href="https://whispering-reef-71968.herokuapp.com/" target="_blank">
                <img src="./assets/images/screenshotHomepage.png" alt="Screenshot of pantry home page"/>
            </a>
            <div class="boxtext">
                <h3>Pantry</h3>
            <p>
              A full stack application utilizing sql practices of Get/Post to find recipes from a database. They can be viewed or even saved with an account.
              <p>Blurb: Have you ever wanted to make dinner but can't think of anything. This application will take what you have in your pantry and suggest appropriate recipes using the ingredients you already have. Create an account and you can save your favorites for future viewing. Keyword buttons will help you quickly reach an easy meal to make and visual recipe cards will show you how good home cooking can look.</p>
                
                Technologies used: HTML, JavaScript, CSS, GIT, Bootstrap Framework, Sequalize, MySQL, npm, NodeJS
            </p>
                        </div>
                    </div>
                </div>
      </div>
  </div>
  );
}

export default Portfolio;
